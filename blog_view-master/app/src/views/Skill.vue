<template>
	<el-container>
		<el-header class="header hidden-sm-and-down">
			<el-form @submit.native.prevent="add()" :inline="true" :model="formInline" class="form" @submit.prevent="add()">
				<div style="display: inline-block;">
					<!--表单内容-->
					<el-form-item v-if="formActive">
						<el-input v-model="formInline.input" placeholder="请输入内容"></el-input>
					</el-form-item>
					<el-form-item v-if="formActive">
						<el-button @click="add()"><span class="el-icon-check" /></el-button>
						<el-button @click="formActive=false"><span class="el-icon-close" /></el-button>
					</el-form-item>
				</div>
				<el-form-item>
				<!-- 按钮工具 -->
					<el-button v-if="!formActive" @click="formActive = true"><span class="el-icon-plus" /></el-button>
					<el-button @click="(DeleteActive)?DeleteActive=false:DeleteActive=true"><span class="el-icon-setting" /></el-button>
				</el-form-item>
			</el-form>
		</el-header>
		<el-main class='main'>
			<el-collapse v-model="activeNames" @change="handleChange">
				<el-collapse-item :title="type[index]" :name="index" v-for="(dataType,index) in requestData.btn" :key="index">
					<el-button-group class="btnGroup" v-for="skill in requestData.btn[index]" :key="skill.id">
						<el-button @click="toBackbone(skill.id,skill.name)">{{skill.name}}</el-button>
						<el-button @click="deleteSkill(skill.id)" v-if="DeleteActive" type="danger" :plain="true"><span class="el-icon-delete" /></el-button>
					</el-button-group>
				</el-collapse-item>
			</el-collapse>
		</el-main>
	</el-container>
</template>
<script>
export default {
  data() {
    return {
      formActive: false,
      DeleteActive: false,
      activeNames: [0, 1, 2, 3],
      type: ['一天内更新过', '一周内更新过', '一个月内更新过', '一个月更久之前更新过'],
      formInline: {
        input: '',
      },
      requestData: {
        btn: [
          // 日期分类
          [{
            // 技能
            id: 1,
            name: 'Vue',
          }],
          [{
            id: 2,
            name: 'Java',
          }],
        ],
      },
    };
  },
  methods: {
    handleChange(val) {

    },
    toBackbone(id, name) {
      this.$store.commit('setSkillId', id);
      this.$store.commit('setSkillName', name);
      this.$store.commit('setHeaderActive', 2);
      this.$router.push(`/backbone/${id}`);
    },
    add() {
      const _this = this;
      this.axios.post('/addSkill', JSON.stringify({
        name: this.formInline.input,
      }))
        .then((response) => {
          _this.getSkills();
        });
      this.formActive = false;
    },
    getSkills() {
      const _this = this;
      this.axios.get('/getSkills').then((res) => {
        _this.requestData.btn = res.data.data;
      });
    },
    deleteSkill(SkillId) {
      const _this = this;
      const path = `/deleteSkill/${SkillId}`;
      this.axios.get(path).then(() => {
        _this.getSkills();
      });
    },
  },
  mounted() {
    this.getSkills();
    this.$store.commit('setHeaderActive', 1);
  },
};
</script>
<style scoped>
	.main{
		 box-shadow: 0 0px 2px 0 rgba(0, 0, 0, 0.1)
	}
	.header{
		background-color: #F2F6FC;
	}
	.form{
		padding:5px;
		position: relative;
		top:5px;
	}
	.el-form-item {
		margin-bottom: 0px;
	}

	.btnGroup {
		margin: 0px 5px;
	}

	.colItem {
		padding-bottom: 0px;
	}
</style>
