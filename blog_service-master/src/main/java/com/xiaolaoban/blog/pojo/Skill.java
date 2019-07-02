package com.xiaolaoban.blog.pojo;

public class Skill {
	private int id,userId,preSkill;
	private String name;
	private long updatedTime;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getPreSkill() {
		return preSkill;
	}
	public void setPreSkill(int preSkill) {
		this.preSkill = preSkill;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getUpdatedTime() {
		return updatedTime;
	}
	public void setUpdatedTime(long updatedTime) {
		this.updatedTime = updatedTime;
	}
	@Override
	public String toString() {
		return "Skill [id=" + id + ", userId=" + userId + ", preSkill=" + preSkill + ", name=" + name + ", updatedTime="
				+ updatedTime + "]";
	}

	
}
