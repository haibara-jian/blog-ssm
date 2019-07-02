package com.xiaolaoban.blog.pojo;

public class Code {
	private int id,nodeId;
	private String codeStr;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getNodeId() {
		return nodeId;
	}
	public void setNodeId(int nodeId) {
		this.nodeId = nodeId;
	}
	public String getCodeText() {
		return codeStr;
	}
	public void setCodeText(String codeText) {
		this.codeStr = codeText;
	}
	@Override
	public String toString() {
		return "Code [id=" + id + ", nodeId=" + nodeId + ", codeText=" + codeStr + "]";
	}
	
}
