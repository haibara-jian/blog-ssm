package com.xiaolaoban.blog.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.xiaolaoban.blog.pojo.Skill;
import com.xiaolaoban.blog.service.SkillService;
import com.xiaolaoban.blog.vojo.ResponseData;

@CrossOrigin
@RestController
public class SkillController {
	@Autowired
	private SkillService ns;
	
	@GetMapping("/getSkills")
	public ResponseData getStills() {
		ResponseData result = new ResponseData();
		result.setCode(200);
		result.setData(ns.getSkills());
		return result;
	}
	
	@ResponseBody
	@PostMapping("/addSkill")
	public ResponseData addSkill(@RequestBody Skill skill) {
		System.out.println(skill);
		ns.addSkill(skill);
		ResponseData result = new ResponseData();
		result.setCode(200);
		return result;
	}
	
	@GetMapping("/deleteSkill/{skillId}")
	public ResponseData deleteSkill(@PathVariable int skillId) {
		ns.deleteSkill(skillId);
		ResponseData result = new ResponseData();
		result.setCode(200);
		return result;
	}
}
