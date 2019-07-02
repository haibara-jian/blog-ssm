package com.xiaolaoban.blog.controller;

import java.util.List;

import org.apache.commons.logging.LogFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.xiaolaoban.blog.service.NodeService;
import com.xiaolaoban.blog.vojo.ResponseData;
import com.xiaolaoban.blog.vojo.SaveEditData;
import com.xiaolaoban.blog.vojo.EditNode;
@CrossOrigin
@RestController
public class NodeContainer {
	@Autowired
	private NodeService ns;
	@ResponseBody
	@GetMapping("/getViewNodes/{skillId}")
	public ResponseData getBackbones(@PathVariable int skillId) {
		ResponseData result = new ResponseData();
		result.setCode(200);
		result.setData(ns.getViewNodes(skillId));
		return result;
	}
	
	@ResponseBody
	@GetMapping("/getEditNodes/{skillId}")
	public ResponseData getEditBackbones(@PathVariable int skillId){
		ResponseData result = new ResponseData();
		result.setCode(200);
		result.setData(ns.getEditNodesBySkillId(skillId));
		return result;
	}
	
	@ResponseBody
	@PostMapping("/saveEdit")
	public void saveEdit(@RequestBody SaveEditData editData) {
		ns.saveEdit(editData);
	}
	
}
