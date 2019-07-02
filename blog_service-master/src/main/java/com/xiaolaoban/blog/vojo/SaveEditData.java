package com.xiaolaoban.blog.vojo;

import java.util.List;

public class SaveEditData {
	private List<EditNode> nodes;
	private int skillId;
	public List<EditNode> getNodes() {
		return nodes;
	}
	public void setNodes(List<EditNode> nodes) {
		this.nodes = nodes;
	}
	public int getSkillId() {
		return skillId;
	}
	public void setSkillId(int skillId) {
		this.skillId = skillId;
	}
	@Override
	public String toString() {
		return "SaveEditData [nodes=" + nodes + ", skillId=" + skillId + "]";
	}
	
}
