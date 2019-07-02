package com.xiaolaoban.blog.vojo.view;

import java.util.List;

public class TreeLabel {
	private String label;
	private List<TreeLabel> children;
	
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public List<TreeLabel> getChildren() {
		return children;
	}
	public void setChildren(List<TreeLabel> children) {
		this.children = children;
	}
	@Override
	public String toString() {
		return "TreeLabel [label=" + label + ", children=" + children + "]";
	}
}

