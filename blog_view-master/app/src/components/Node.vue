<template>
	<li style="margin-top: 5px;">
		<div>
			<el-input size="mini" style="margin-top:3px;width:" v-model="node.name">
				<span slot="prepend">名称</span>
				<!-- 菜单 -->
				<el-dropdown slot="append" trigger="click" @command="handleCommand">
					<el-button class="el-dropdown-link" icon="el-icon-more" />
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="desAdd" :disabled="(node.des==null)?false:true">添加描述</el-dropdown-item>
						<el-dropdown-item command="remarkAdd" :disabled="(node.remark==null)?false:true">添加注意事项</el-dropdown-item>
						<el-dropdown-item command="codeAdd" :disabled="(node.code==null)?false:true">添加代码</el-dropdown-item>
						<el-dropdown-item command="paramAdd" :disabled="(node.param==null)?false:true">添加参数</el-dropdown-item>

						<!-- 						<el-dropdown-item command="desAdd" v-if="(node.des==null||node.des=='')?true:false">添加描述</el-dropdown-item>
						<el-dropdown-item command="desDelete" v-if="(node.des==null||node.des=='')?false:true" style="color: #F56C6C;">删除描述</el-dropdown-item>
						<el-dropdown-item command="remarkAdd" v-if="(node.remark==null||node.remark=='')?true:false">添加注意事项</el-dropdown-item>
						<el-dropdown-item command="remarkDelete" v-if="(node.remark==null||node.remark=='')?false:true" style="color: #F56C6C;">删除注意事项</el-dropdown-item>
						<el-dropdown-item command="codeAdd" v-if="(node.code==null||node.code=='')?true:false">添加代码</el-dropdown-item>
						<el-dropdown-item command="codeDelete" v-if="(node.code==null||node.code=='')?false:true" style="color: #F56C6C;">删除代码</el-dropdown-item>
						<el-dropdown-item command="paramAdd" v-if="(node.param==null||node.param=='')?true:false">添加参数</el-dropdown-item>
						<el-dropdown-item command="paramDelete" v-if="(node.param==null||node.param=='')?false:true" style="color: #F56C6C;">删除参数</el-dropdown-item> -->
						<el-dropdown-item command="nodeDelete" :disabled="(node.children.length == 0)?false:true" divided>删除此节点</el-dropdown-item>
						<el-dropdown-item command="brother" divided>添加同类</el-dropdown-item>
						<el-dropdown-item command="children">添加子类</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-input>
			<el-input size="mini" style="margin-top:3px" v-model="node.des" v-show="node.des != null ">
				<template slot="prepend">描述</template>
				<a href="#" @click.prevent="node.des=null" class="el-icon-delete" slot="suffix" style="color: #C0C4CC;text-decoration: none;font-size: 15px;position: relative;top: 7px;right:10px;" />
			</el-input>
			<el-input size="mini" style="margin-top:3px" v-model="node.remark" v-show="node.remark != null ">
				<template slot="prepend">注意事项</template>
				<a href="#" @click.prevent="node.remark=null" class="el-icon-delete" slot="suffix" style="color: #C0C4CC;text-decoration: none;font-size: 15px;position: relative;top: 7px;right:10px;" />
			</el-input>
			<el-input size="mini" style="margin-top:3px" v-model="node.code" v-show="node.code != null">
				<template slot="prepend">代码</template>
				<a href="#" @click.prevent="node.code=null" class="el-icon-delete" slot="suffix" style="color: #C0C4CC;text-decoration: none;font-size: 15px;position: relative;top: 7px;right:10px;" />
			</el-input>
			<el-input size="mini" style="margin-top:3px" v-model="node.param" v-show="node.param != null">
				<template slot="prepend">参数</template>
				<a href="#" @click.prevent="node.param=null" class="el-icon-delete" slot="suffix" style="color: #C0C4CC;text-decoration: none;font-size: 15px;position: relative;top: 7px;right:10px;" />
			</el-input>
		</div>
		<ol v-if='node.children != null && node.children.length > 0' :type="setType">
			<NodeSelf v-for='(cNode,index) in node.children' v-on:addBrother="addBrother()" v-on:deleteNode="deleteNode(index)" :key="floor+2+'-'+index" :node="cNode" :floor="floor+1"/>
		</ol>
	</li>
</template>

<script>
export default {
  name: 'NodeSelf',
  props: ['node', 'floor'],
  computed: {
    setType() {
      let result = 1;
      const i = (this.floor % 3);
      switch (i) {
        case 0:
          result = 1;
          break;
        case 1:
          result = 'a';
          break;
        case 2:
          result = 'i';
          break;
        default:
          break;
      }
      return result;
    },
  },
  methods: {
    // 响应下拉菜单事件
    handleCommand(command) {
      switch (command) {
        case 'desAdd':
          this.node.des = '';
          break;
        case 'remarkAdd':
          this.node.remark = '';
          break;
        case 'codeAdd':
          this.node.code = '';
          break;
        case 'paramAdd':
          this.node.param = '';
          break;
        case 'nodeDelete':
          this.$emit('deleteNode', this.key);
          break;
        case 'brother':
          this.$emit('addBrother');
          break;
        case 'children':
          this.node.children.push({
            id: 0,
            name: '',
            des: null,
            code: null,
            param: null,
            children: [],
          });
          break;
        default:
          break;
      }
    },
    // 响应子组件的增加兄弟节点的事件
    addBrother() {
      this.node.children.push({
        id: 0,
        name: '',
        des: null,
        code: null,
        param: null,
        children: [],
      });
    },
    // 响应子组件删除节点事件
    deleteNode(index) {
      this.$delete(this.node.children, index);
    },
  },
  mounted() {

  },
  updated() {},
};
</script>

<style scoped>
	li {}
</style>
