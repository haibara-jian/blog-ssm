package com.xiaolaoban.blog.mapper;

import java.util.List;

import com.xiaolaoban.blog.pojo.Node;

public interface NodeMapper {
	public List<Node> getNodeBySkillId(int skillId);
	public List<Integer> getNodeIdBySkillId(int skillId);
	
	public void addNode(Node node);
	public void deleteNode(int nodeId);
	public void updateNode(Node node);
	
}
