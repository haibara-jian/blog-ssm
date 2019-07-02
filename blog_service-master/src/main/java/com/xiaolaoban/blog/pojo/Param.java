package com.xiaolaoban.blog.pojo;

import java.util.Map;

public class Param {
	private int id,nodeId;
	private String mapStr;
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
	public String getMapStr() {
		return mapStr;
	}
	public void setMapStr(String mapStr) {
		this.mapStr = mapStr;
	}
	@Override
	public String toString() {
		return "Param [id=" + id + ", nodeId=" + nodeId + ", mapStr=" + mapStr + "]";
	}
	
}
