package com.xiaolaoban.blog.service;

import java.util.List;

import com.xiaolaoban.blog.pojo.Skill;

public interface SkillService {
	public List<Skill> getSkills();
	
	public void addSkill(Skill skill);
	
	public void deleteSkill(int skillId);
}
