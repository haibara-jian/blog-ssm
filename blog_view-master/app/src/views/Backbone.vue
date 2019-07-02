<template>
	<el-container>
		<!-- 编辑模式开关 -->
		<div class="hidden-sm-and-down">
			<el-button @click="editMode=!editMode;" icon="el-icon-setting" circle type="primary" style="position: fixed;right: 75px;top:100px;z-index: 9999;"></el-button>
		</div>
		<!-- 移动端头部 -->
		<el-row class="hidden-sm-and-up" style="border-bottom: solid 1px #DCDFE6;position: fixed;height: 30px;width: 100%;left: 0px;z-index: 100;background-color: white;">
					<a href="#" @click.prevent="phoneMenuActive = !phoneMenuActive">
						<span class="el-icon-more" style="font-size: 20px;position: absolute;left: 20px;"></span>
					</a>
					<span style="position: absolute;left: 46%;">{{skillName}}</span>
		</el-row>
		<!-- 移动端菜单 -->
		<el-row v-show="phoneMenuActive" class="hidden-sm-and-up" style="position: fixed;z-index: 99;top: 38px;left: 0px;height: 100%;background-color: white;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
			<el-col :sm="12">
				<el-menu>
					<div v-if="!editMode">
						<el-menu-item :index="'index'+getString(index)" v-for="(firstNode,index) in requestData.viewData.nodes" :key="'1-'+index"
						 @click="activeBackbone = index;phoneMenuActive = !phoneMenuActive">
							{{firstNode.name}}
						</el-menu-item>
					</div>
				</el-menu>
			</el-col>
		</el-row>
		<!-- PC端节点定位菜单 -->
		<el-card style="position: fixed;right: 30px;top:30%	;"class="hidden-sm-and-down">
			<div slot="header">目录</div>
			<ul style="padding-left: 15px;">
				<li v-for="(firstNode,index) in requestData.viewData.nodes" :key="'1-'+index"
				style="margin-top: 5px;">
				<span style="font-size: 14px;">{{firstNode.name}}</span>
				<ul v-if="firstNode.children.length != 0" style="padding-left:15px">
					<li v-for="(secondNode,index) in firstNode.children" :key="'2-'+index"
					style="margin-top: 5px;font-size: 14px;">{{secondNode.name}}</li>
				</ul>
				</li>
			</ul>
			</el-card>
		<!-- 左边菜单-PC端 -->
		<el-aside class="hidden-sm-and-down">
				<el-menu>
					<h5 class="skillName">
						{{skillName}}
					</h5>
					<!-- 浏览模式的菜单 -->
					<div v-if="!editMode">
						<el-menu-item :index="'index'+getString(index)" v-for="(firstNode,index) in requestData.viewData.nodes" :key="'1-'+index"
						 @click="activeBackbone = index">
							{{firstNode.name}}
						</el-menu-item>
					</div>
					<!-- 编辑模式的菜单 -->
					<el-menu-item v-if="editMode" :index="getString(index)" v-for="(firstNode,index) in requestData.editData.nodes"
					 :key="firstNode.id">
						{{firstNode.name}}
					</el-menu-item>
					<!-- 编辑模式增加骨架 -->
					<el-menu-item index="add" style="text-align: center;" v-if="editMode" @click="requestData.editData.nodes.push({id:0,name:'',des:null,remark:null,code:null,param:null,children:[]})">
						<span class="el-icon-plus" />
					</el-menu-item>
				</el-menu>
			</el-aside>
		<!-- 主体内容 -->
		<el-main>
			<div v-if="!editMode" style="margin-top: 15px;">
				<div v-for="(firstNode,index) in requestData.viewData.nodes" :key="firstNode.id" v-if="index == activeBackbone">
					<div>
						<!-- 骨架名称 -->
						<div class="bigTitle" style="font-size: 24px;font-weight: 800;color: #303133;">
							{{firstNode.name}}
						</div>
						<!-- 骨架描述 -->
						<p class="text" style="font-size: 14px;">
							{{firstNode.des}}
						</p>
					</div>
					<div v-for="(secondNode,index) in firstNode.children" :key="secondNode.id">
						<!-- 第一节点名称 -->
						<div class="secondTtile" style="font-size: 18px;font-weight: 600;color: #303133;">
							{{secondNode.name}}
						</div>
						<!-- 第一节点描述 -->
						<p class="text" style="font-size: 14px;color:#909399;">{{secondNode.des}}
						</p>
						<el-card class="box-card" shadow="hover" v-if="secondNode.children.length!=0">
							<el-collapse>
								<!-- 第二节点名称 -->
								<el-collapse-item style="padding-bottom: 0px;" :name="index" v-for="(thirdNode,index) in secondNode.children"
								 :key="thirdNode.id">
									<!-- 第二节点描述 -->
									<span slot="title" style="font-size: 16px;">
										{{thirdNode.name}}
									</span>
									<div style="font-size: 14px;color:#909399;">
										{{thirdNode.des}}
									</div>
									<!-- 第二节点备注 -->
									<div class="remark" v-if="thirdNode.remark != null">
										{{thirdNode.remark}}
									</div>
									<div style="background-color: #E4E7ED;border-radius: 2px;">
										<!-- 其余节点 -->
										<el-tree v-if="thirdNode.children.length!=0" :data="thirdNode.children" :props="defaultProps" style="border-radius: 4px;border: solid 1px #DCDFE6;background-color: #F2F6FC;">
											<span class="custom-tree-node" slot-scope="{ node, data }">
												<span style="color: #606266">{{node.label.split(":")[0]}}:</span>
												<span style="color: #909399;">{{node.label.split(":")[1]}}</span>
												<span v-show="node.label.split(':')[2]!=null&&node.label.split(':')[2]!=''">
													<span class="el-icon-info"></span>
													<span>{{node.label.split(":")[2]}}</span>
												</span>
											</span>
										</el-tree>
									</div>
								</el-collapse-item>
							</el-collapse>
						</el-card>
					</div>
					<div></div>
				</div>
			</div>
			<div v-if="editMode">
				<el-card v-for="(firstNode,index) in requestData.editData.nodes" :key="'1-'+index" style="margin-top:10px">
					<div slot="header" style="padding:-0px;margin:-5px 0px -25px 0px">
						<el-form :inline="true">
							<el-form-item label="名称">
								<el-input v-model="firstNode.name"></el-input>
							</el-form-item>
							<el-form-item label="描述">
								<el-input v-model="firstNode.des"></el-input>
							</el-form-item>
							<el-form-item label="注意事项">
								<el-input v-model="firstNode.remark"></el-input>
							</el-form-item>
						</el-form>
					</div>
					<ol type="1">
						<Node :node="secondNode" v-for="(secondNode,index) in firstNode.children" :key="'2-'+index" :floor=1
						 v-on:addBrother="firstNode.children.push({id:0,name:'',des:null,remark:null,code:null,param:null,children:[]})"
						 v-on:deleteNode="$delete(firstNode.children,index)" />
					</ol>
					<el-button type="primary" v-if="firstNode.children.length==0" @click="firstNode.children.push({id:0,name:'',des:null,remark:null,code:null,param:null,children:[]})">创建第一个节点</el-button>
					<el-button @click="editSave()">保存骨架</el-button>
					<el-button @click="$delete(requestData.editData.nodes,index)" :disabled="firstNode.children.length!=0">删除骨架</el-button>
				</el-card>
			</div>
			</el-main>
</el-container>
</template>

<script>
	import Node from '../components/Node.vue';
	export default {
		components: {
			Node,
		},
		data() {
			return {
				activeName: ['0'],
				// 编辑模式
				editMode: false,
				// 编辑模式的属性
				editState: {
					on: new Array(),
				},
				// 骨架菜单添加按钮开关
				sideAddActive: false,
				// 骨架输入框
				backboneAddInput: null,
				// 查看中的骨架id
				activeBackbone: 1,
				// 移动端菜单显示开关
				phoneMenuActive: false,
				defaultProps: {},
				activeNames: new Array(),
				requestData: {
					viewData: {
						nodes: [{
							id: 1,
							name: '安装外部库包',
							des: '',
							children: [{
								id: 2,
								name: '本地安装',
								remark: '安装在当前命令行目录',
								des: 'npm install <库名> [-g/--save/-dev]',
								children: [{
									id: 3,
									name: 'name',
									remark: null,
									des: 'des',
									children: [{
										label: '1、全局安装：-g',
										children: [],
									}, {
										label: '需要打包到生产：--save',
										children: [],
									}, {
										label: '需要用于开发：--save-dev',
										children: [],
									}],
								}],
							}, {
								name: '本地安装',
								remark: '安装在当前命令行目录',
								des: 'npm install <库名> [-g/--save/-dev]',
								children: [],
							}],
						}],
					},
					editData: {
						nodes: [{
							id: 1,
							name: '1-1',
							remark: 'remark',
							des: 'des',
							code: null,
							param: null,
							children: [{
								id: 2,
								name: '1-2',
								remark: 'remark',
								des: 'des',
								children: [{
									id: 3,
									name: '1-3',
									remark: 'remark',
									des: 'des',
									children: [],
								}],
							}],
						}],
					},
				},
			};
		},
		computed: {
			skillName() {
				return this.$store.state.skill.name;
			},
		},
		methods: {
			addNode(msg) {
				console.log(msg);
			},
			handleEditSelect(key, keyPath) {
				switch (key) {
					case 'add':
						this.sideAddActive = true;
						break;
					default:
						break;
				}
			},
			handleViewSelect(key, keyPath) {
				this.activeBackbone = key;
			},
			getString(obj) {
				obj += 1;
				return obj.toString();
			},
			// 请求浏览模式的数据
			getViewNodes() {
				if (this.$store.state.skill.id == null || this.$store.state.skill.id == '') {
					return;
				}
				const path = `/getViewNodes/${parseInt(this.$route.params.skillId)}`;
				const _this = this;
				this.axios.get(path).then((res) => {
					_this.requestData.viewData.nodes = res.data.data;
				});
			},
			// 请求编辑模式的骨架树数据
			getEditNodes() {
				if (this.$store.state.skill.id == null || this.$store.state.skill.id == '') {
					return;
				}
				const path = `/getEditNodes/${parseInt(this.$route.params.skillId)}`;
				const _this = this;
				this.axios.get(path).then((res) => {
					_this.requestData.editData.nodes = res.data.data;
				});
			},
			// 保存编辑数据
			editSave() {
				const _this = this;
				this.axios.post('/saveEdit', {
					nodes: _this.requestData.editData.nodes,
					skillId: _this.$route.params.skillId,
				}).then(() => {
					_this.getViewNodes();
					_this.open();
				});
			},
			close() {
				this.sideAddActive = false;
			},
			// 添加骨架事件
			addBackbone() {

			},
			// 通知提示
			open() {
				this.$message('文档保存成功');
			},
			// 树控件
			treeInit(node, data) {
				console.log(node, data);
			},
		},
		mounted() {
			this.getViewNodes();
			this.getEditNodes();
			this.$store.commit('setHeaderActive', 2);
		},
		updated() {

		},
		watch: {},
	};
</script>

<style scoped>
	.el-container {
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
		font-weight: 400;
	}

	.el-icon-edit {
		color: #409EFF;
		font-size: 20px;
		margin-left: 8px;
	}

	.skillName {
		color: #8492a6;
		font-size: 20px;
		font-weight: 400;
		text-align: center;
		margin: 15px 0px;

	}

	.remark {
		width: 100%;
		border-left: solid 3px #409EFF;
		padding: 3px 0px 3px 40px;
		margin-bottom: 13px;
		background-color: #E4E7ED;
	}

	.text {
		color: #5e6d82;
		font-size: 14px;
	}

	.bigTitle {
		font-size: 28px;
		font-weight: 400;
		color: #1f2f3d
	}

	.secondTtile {
		font-size: 22px;
		font-weight: 400;
		color: #1f2f3d;
		margin: 55px 0px 20px 0px
	}

	.thirdTitle {
		color: #409EFF
	}
</style>
