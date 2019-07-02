package com.xiaolaoban.blog.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.xiaolaoban.blog.mapper.CodeMapper;
import com.xiaolaoban.blog.mapper.NodeMapper;
import com.xiaolaoban.blog.mapper.ParamMapper;
import com.xiaolaoban.blog.mapper.SkillMapper;
import com.xiaolaoban.blog.pojo.Skill;

@Service
public class SkillServiceImpl implements SkillService{
	@Autowired
	private SkillMapper sm;
	@Autowired
	private NodeMapper nm;
	@Autowired
	private CodeMapper cm;
	@Autowired
	private ParamMapper pm;
	@Override
	
	public List getSkills() {
		List<List> result = new ArrayList();
		while(result.size()<4) {
		result.add(new ArrayList());
		}
		List<Skill> list = sm.getUserSkills(1);
		long nowTime = new Date().getTime();
		for(Skill skill:list) {
			long agoTime = nowTime- skill.getUpdatedTime();
			if(agoTime < 1000*60*60*24) {
				result.get(0).add(skill);
				continue;
			}else if(agoTime < 1000*60*60*24*7) {
				result.get(1).add(skill);
				continue;
			}else if(agoTime < 1000*60*60*24*30) {
				result.get(2).add(skill);
				continue;
			}else {
				result.get(3).add(skill);
				continue;
			}
		}
		return result;
	}
	@Override
	public void addSkill(Skill skill) {
		long time = new Date().getTime();
		int userId = 1;
		sm.addSkill(userId, skill.getName(), time);
	}
	@Override
	public void deleteSkill(int skillId) {
		sm.deleteSkill(skillId);
	}
	
}
