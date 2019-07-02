package com.xiaolaoban.blog.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.xiaolaoban.blog.pojo.Skill;

@Mapper
public interface SkillMapper {
	public void addSkill(int userId,String name,long updateTime);
	public void addSkill_HavePre(int userId,String name,int preSkill,long updateTime);
	public List<Skill> getUserSkills(int userId);
	public void deleteSkill(int skillId);
}
