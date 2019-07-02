package com.xiaolaoban.blog.mapper;

import java.util.List;

import com.xiaolaoban.blog.pojo.Param;

public interface ParamMapper {
	public void addParam(Param param);
	public List<Param> getParamByNodeId(int nodeId);
}
