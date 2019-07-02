package com.xiaolaoban.blog.controller;

import java.net.http.HttpResponse;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.xiaolaoban.blog.mapper.CodeMapper;
import com.xiaolaoban.blog.mapper.NodeMapper;
import com.xiaolaoban.blog.mapper.ParamMapper;
import com.xiaolaoban.blog.mapper.SkillMapper;
import com.xiaolaoban.blog.pojo.Code;
import com.xiaolaoban.blog.pojo.Node;
import com.xiaolaoban.blog.pojo.Param;
import com.xiaolaoban.blog.pojo.Skill;


@RestController
public class TestController {
	@Autowired
	private ParamMapper pm;
	@Autowired
	private CodeMapper cm;

	@ResponseBody
	@RequestMapping(path = "/test",method=RequestMethod.GET)
	public Code test() {
		System.out.println("收到到请求");
		Code code = new Code();
		code.setCodeText("123");
		code.setNodeId(1);
		cm.addCode(code);
		return code;
	}
}
