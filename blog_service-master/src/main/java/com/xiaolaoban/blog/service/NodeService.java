package com.xiaolaoban.blog.service;

import java.util.List;

import com.xiaolaoban.blog.vojo.EditNode;
import com.xiaolaoban.blog.vojo.SaveEditData;
import com.xiaolaoban.blog.vojo.view.FirstNode;

public interface NodeService {
	public List<FirstNode> getViewNodes(int skillId);
	
	public List<EditNode> getEditNodesBySkillId(int skillId);
	public void saveEdit(SaveEditData data);
}
