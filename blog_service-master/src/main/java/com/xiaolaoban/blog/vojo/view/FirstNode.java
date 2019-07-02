package com.xiaolaoban.blog.vojo.view;

import java.util.ArrayList;
import java.util.List;

public class FirstNode {
	private String name=null,des=null,remark=null,code=null,param=null;
	private int id;
	private List<SecondNode> children = new ArrayList<SecondNode>();
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDes() {
		return des;
	}
	public void setDes(String des) {
		this.des = des;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getParam() {
		return param;
	}
	public void setParam(String param) {
		this.param = param;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public List<SecondNode> getChildren() {
		return children;
	}
	public void setChildren(List<SecondNode> children) {
		this.children = children;
	}
	@Override
	public String toString() {
		return "FirstNode [name=" + name + ", des=" + des + ", remark=" + remark + ", code=" + code + ", param=" + param
				+ ", id=" + id + ", children=" + children + "]";
	}
	
}
