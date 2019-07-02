package com.xiaolaoban.blog.mapper;

import java.util.List;

import com.xiaolaoban.blog.pojo.Code;

public interface CodeMapper {
	public void addCode(Code code);
	public List<Code> getCodeByNodeId(int nodeId);
}
