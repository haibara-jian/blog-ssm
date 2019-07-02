package com.xiaolaoban.blog.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import com.xiaolaoban.blog.mapper.NodeMapper;
import com.xiaolaoban.blog.pojo.Node;
import com.xiaolaoban.blog.vojo.EditNode;
import com.xiaolaoban.blog.vojo.SaveEditData;
import com.xiaolaoban.blog.vojo.view.FirstNode;
import com.xiaolaoban.blog.vojo.view.SecondNode;
import com.xiaolaoban.blog.vojo.view.ThirdNode;
import com.xiaolaoban.blog.vojo.view.TreeLabel;

@Service
public class NodeServiceImpl implements NodeService {
	@Autowired
	private NodeMapper nm;
	@Autowired
	RedisTemplate<String, String> redisTamplate;

//	获取格式化的骨架树
	@Override
	public List<FirstNode> getViewNodes(int skillId) {
//			获取节点pojo
		List<Node> nodeList = nm.getNodeBySkillId(skillId);
		// 将节点pojo树状化
		List<EditNode> nodes = pojoToVojo(nodeList, 0);
//		格式化成浏览模式的数据
		return editNodeToViewNode(nodes);
	}

//	获取第三节点以后的节点树
	public List<TreeLabel> getTreeLabelList(List<EditNode> list) {
		List<TreeLabel> result = new ArrayList<TreeLabel>();
		for (EditNode node : list) {
			TreeLabel treeLabel = new TreeLabel();
			treeLabel.setLabel(node.getName() + ":" + node.getDes()+":"+node.getRemark());
			if (node.getChildren().size() != 0) {
				treeLabel.setChildren(getTreeLabelList(node.getChildren()));
			}
			result.add(treeLabel);
		}
		return result;
	}

//	编辑节点转浏览节点
	public List<FirstNode> editNodeToViewNode(List<EditNode> nodes) {
		List<FirstNode> result = new ArrayList<FirstNode>();
		for (int i = 0; i < nodes.size(); i++) {
			FirstNode first = new FirstNode();
			EditNode firstNode = nodes.get(i);
			first.setId(firstNode.getId());
			first.setName(firstNode.getName());
			first.setDes(firstNode.getDes());
			first.setCode(firstNode.getCode());
			first.setParam(firstNode.getParam());
			first.setRemark(firstNode.getRemark());
			for (int j = 0; j < firstNode.getChildren().size(); j++) {
				SecondNode second = new SecondNode();
				EditNode secondNode = firstNode.getChildren().get(j);
				second.setId(secondNode.getId());
				second.setName(secondNode.getName());
				second.setDes(secondNode.getDes());
				second.setCode(secondNode.getCode());
				second.setParam(secondNode.getParam());
				second.setRemark(secondNode.getRemark());
				for (int k = 0; k < secondNode.getChildren().size(); k++) {
					ThirdNode third = new ThirdNode();
					EditNode thirdNode = secondNode.getChildren().get(k);
					third.setId(thirdNode.getId());
					third.setName(thirdNode.getName());
					third.setDes(thirdNode.getDes());
					third.setCode(thirdNode.getCode());
					third.setParam(thirdNode.getParam());
					third.setRemark(thirdNode.getRemark());
					if (thirdNode.getChildren().size() != 0) {
						third.setChildren(getTreeLabelList(thirdNode.getChildren()));
					}
					second.getChildren().add(third);
				}
				first.getChildren().add(second);
			}
			result.add(first);
		}
		return result;
	}

	// 使用递归将节点pojo转成树状化的节点树对象
	public List<EditNode> pojoToVojo(List<Node> nodeList, int fatherNodeId) {
		List<EditNode> childrenNode = new ArrayList<EditNode>();
		for (Node node : nodeList) {
			if (node.getParentNodeId() == fatherNodeId) {
				EditNode node_vojo = new EditNode();
				node_vojo.setDes(node.getText());
				node_vojo.setId(node.getId());
				node_vojo.setName(node.getName());
				node_vojo.setRemark(node.getRemark());
				node_vojo.setChildren(pojoToVojo(nodeList, node.getId()));
				childrenNode.add(node_vojo);
			}
		}
		// 如果没有子类，则返回null，否则返回子类列表
		return childrenNode;
	}

	@Override
	public List<EditNode> getEditNodesBySkillId(int SkillId) {
		return pojoToVojo(nm.getNodeBySkillId(SkillId), 0);
	}

	@Override
	public void saveEdit(SaveEditData data) {
		List<Integer> beforeNodeId = nm.getNodeIdBySkillId(data.getSkillId());
		List<Integer> afterNodeId = getEditNodeIds(data.getNodes()); // 编辑后id
		// 查找并删除的节点
		beforeNodeId.removeAll(afterNodeId);
		for (int id : beforeNodeId) {
			nm.deleteNode(id);
		}
		// 新增并修改节点树
		updateNode(data.getNodes(),0,data.getSkillId());
	}

//	递归节点树新增并修改数据
	public void updateNode(List<EditNode> nodes,int parentId,int skillId) {
		for (int i=0;i<nodes.size();i++) {
			EditNode node =nodes.get(i);
			Node nodePojo = new Node();
			nodePojo.setId(node.getId());
			nodePojo.setSkillId(skillId);
			nodePojo.setIndexNum(i+1);
			nodePojo.setName(node.getName());
			nodePojo.setParentNodeId(parentId);
			nodePojo.setRemark(node.getRemark());
			nodePojo.setText(node.getDes());
			if(nodePojo.getId()==0) {
				nm.addNode(nodePojo);
			}else {
				nm.updateNode(nodePojo);
			}
			updateNode(node.getChildren(), nodePojo.getId(), skillId);
		}

	}

	// 递归节点树获取节点id
	public List<Integer> getEditNodeIds(List<EditNode> nodes) {
		List<Integer> idList = new ArrayList<Integer>();
		for (EditNode node : nodes) {
			idList.add(node.getId());
			List<Integer> children = getEditNodeIds(node.getChildren());
			for (int chidrenId : children) {
				idList.add(chidrenId);
			}
		}
		return idList;
	}
}
