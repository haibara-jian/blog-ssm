(function(e){function t(t){for(var a,l,s=t[0],r=t[1],d=t[2],u=0,p=[];u<s.length;u++)l=s[u],i[l]&&p.push(i[l][0]),i[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var r=n[s];0!==i[r]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},i={app:0},o=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=r;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("9e74"),i=n.n(a);i.a},"0848":function(e,t,n){"use strict";var a=n("b803"),i=n.n(a);i.a},"1b21":function(e,t,n){"use strict";var a=n("728a"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("5c07"),n("53da"),n("2556"),n("d0f8");var a=n("6e6d"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("blog_Header",{staticClass:"hidden-sm-and-down"}),n("router-view")],1)},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{attrs:{mode:"horizontal","default-active":e.activeItem},on:{select:e.handleSelect}},[n("el-menu-item",{attrs:{index:"back"}},[n("span",{staticClass:"el-icon-arrow-left"})]),n("el-menu-item",{attrs:{index:"1"}},[e._v("技能")]),n("el-menu-item",{attrs:{index:"2",disabled:null==e.$store.state.skill.id}},[e._v("骨干")])],1)},s=[],r={data:function(){return{}},computed:{activeItem:function(){return this.$store.state.headerActive}},methods:{handleSelect:function(e,t){switch(this.$store.commit("setHeaderActive",e),e){case"1":this.$router.push("/");break;case"2":this.$router.push("/backbone/".concat(this.$store.state.skill.id));break;case"back":this.$router.go(-1);break;default:break}}}},d=r,c=(n("67e2"),n("17cc")),u=Object(c["a"])(d,l,s,!1,null,"64ed2348",null),p=u.exports,m={name:"app",data:function(){return{activeIndex:"1",activeIndex2:"1",activeName:"1"}},components:{blog_Header:p},methods:{handleSelect:function(e,t){console.log(e,t)}}},f=m,h=(n("034f"),Object(c["a"])(f,i,o,!1,null,null,null)),v=h.exports,k=n("1e6f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("div",{staticClass:"hidden-sm-and-down"},[n("el-button",{staticStyle:{position:"fixed",right:"75px",top:"100px","z-index":"9999"},attrs:{icon:"el-icon-setting",circle:"",type:"primary"},on:{click:function(t){e.editMode=!e.editMode}}})],1),n("el-row",{staticClass:"hidden-sm-and-up",staticStyle:{"border-bottom":"solid 1px #DCDFE6",position:"fixed",height:"30px",width:"100%",left:"0px","z-index":"100","background-color":"white"}},[n("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.phoneMenuActive=!e.phoneMenuActive}}},[n("span",{staticClass:"el-icon-more",staticStyle:{"font-size":"20px",position:"absolute",left:"20px"}})]),n("span",{staticStyle:{position:"absolute",left:"46%"}},[e._v(e._s(e.skillName))])]),n("el-row",{directives:[{name:"show",rawName:"v-show",value:e.phoneMenuActive,expression:"phoneMenuActive"}],staticClass:"hidden-sm-and-up",staticStyle:{position:"fixed","z-index":"99",top:"38px",left:"0px",height:"100%","background-color":"white","box-shadow":"0 2px 12px 0 rgba(0, 0, 0, 0.1)"}},[n("el-col",{attrs:{sm:12}},[n("el-menu",[e.editMode?e._e():n("div",e._l(e.requestData.viewData.nodes,function(t,a){return n("el-menu-item",{key:"1-"+a,attrs:{index:"index"+e.getString(a)},on:{click:function(t){e.activeBackbone=a,e.phoneMenuActive=!e.phoneMenuActive}}},[e._v("\n\t\t\t\t\t\t\t"+e._s(t.name)+"\n\t\t\t\t\t\t")])}),1)])],1)],1),n("el-card",{staticClass:"hidden-sm-and-down",staticStyle:{position:"fixed",right:"30px",top:"30%"}},[n("div",{attrs:{slot:"header"},slot:"header"},[e._v("目录")]),n("ul",{staticStyle:{"padding-left":"15px"}},e._l(e.requestData.viewData.nodes,function(t,a){return n("li",{key:"1-"+a,staticStyle:{"margin-top":"5px"}},[n("span",{staticStyle:{"font-size":"14px"}},[e._v(e._s(t.name))]),0!=t.children.length?n("ul",{staticStyle:{"padding-left":"15px"}},e._l(t.children,function(t,a){return n("li",{key:"2-"+a,staticStyle:{"margin-top":"5px","font-size":"14px"}},[e._v(e._s(t.name))])}),0):e._e()])}),0)]),n("el-aside",{staticClass:"hidden-sm-and-down"},[n("el-menu",[n("h5",{staticClass:"skillName"},[e._v("\n\t\t\t\t\t\t"+e._s(e.skillName)+"\n\t\t\t\t\t")]),e.editMode?e._e():n("div",e._l(e.requestData.viewData.nodes,function(t,a){return n("el-menu-item",{key:"1-"+a,attrs:{index:"index"+e.getString(a)},on:{click:function(t){e.activeBackbone=a}}},[e._v("\n\t\t\t\t\t\t\t"+e._s(t.name)+"\n\t\t\t\t\t\t")])}),1),e._l(e.requestData.editData.nodes,function(t,a){return e.editMode?n("el-menu-item",{key:t.id,attrs:{index:e.getString(a)}},[e._v("\n\t\t\t\t\t\t"+e._s(t.name)+"\n\t\t\t\t\t")]):e._e()}),e.editMode?n("el-menu-item",{staticStyle:{"text-align":"center"},attrs:{index:"add"},on:{click:function(t){return e.requestData.editData.nodes.push({id:0,name:"",des:null,remark:null,code:null,param:null,children:[]})}}},[n("span",{staticClass:"el-icon-plus"})]):e._e()],2)],1),n("el-main",[e.editMode?e._e():n("div",{staticStyle:{"margin-top":"15px"}},e._l(e.requestData.viewData.nodes,function(t,a){return a==e.activeBackbone?n("div",{key:t.id},[n("div",[n("div",{staticClass:"bigTitle",staticStyle:{"font-size":"24px","font-weight":"800",color:"#303133"}},[e._v("\n\t\t\t\t\t\t\t"+e._s(t.name)+"\n\t\t\t\t\t\t")]),n("p",{staticClass:"text",staticStyle:{"font-size":"14px"}},[e._v("\n\t\t\t\t\t\t\t"+e._s(t.des)+"\n\t\t\t\t\t\t")])]),e._l(t.children,function(t,a){return n("div",{key:t.id},[n("div",{staticClass:"secondTtile",staticStyle:{"font-size":"18px","font-weight":"600",color:"#303133"}},[e._v("\n\t\t\t\t\t\t\t"+e._s(t.name)+"\n\t\t\t\t\t\t")]),n("p",{staticClass:"text",staticStyle:{"font-size":"14px",color:"#909399"}},[e._v(e._s(t.des)+"\n\t\t\t\t\t\t")]),0!=t.children.length?n("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[n("el-collapse",e._l(t.children,function(t,a){return n("el-collapse-item",{key:t.id,staticStyle:{"padding-bottom":"0px"},attrs:{name:a}},[n("span",{staticStyle:{"font-size":"16px"},attrs:{slot:"title"},slot:"title"},[e._v("\n\t\t\t\t\t\t\t\t\t\t"+e._s(t.name)+"\n\t\t\t\t\t\t\t\t\t")]),n("div",{staticStyle:{"font-size":"14px",color:"#909399"}},[e._v("\n\t\t\t\t\t\t\t\t\t\t"+e._s(t.des)+"\n\t\t\t\t\t\t\t\t\t")]),null!=t.remark?n("div",{staticClass:"remark"},[e._v("\n\t\t\t\t\t\t\t\t\t\t"+e._s(t.remark)+"\n\t\t\t\t\t\t\t\t\t")]):e._e(),n("div",{staticStyle:{"background-color":"#E4E7ED","border-radius":"2px"}},[0!=t.children.length?n("el-tree",{staticStyle:{"border-radius":"4px",border:"solid 1px #DCDFE6","background-color":"#F2F6FC"},attrs:{data:t.children,props:e.defaultProps},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.node;t.data;return n("span",{staticClass:"custom-tree-node"},[n("span",{staticStyle:{color:"#606266"}},[e._v(e._s(a.label.split(":")[0])+":")]),n("span",{staticStyle:{color:"#909399"}},[e._v(e._s(a.label.split(":")[1]))]),n("span",{directives:[{name:"show",rawName:"v-show",value:null!=a.label.split(":")[2]&&""!=a.label.split(":")[2],expression:"node.label.split(':')[2]!=null&&node.label.split(':')[2]!=''"}]},[n("span",{staticClass:"el-icon-info"}),n("span",[e._v(e._s(a.label.split(":")[2]))])])])}}],null,!0)}):e._e()],1)])}),1)],1):e._e()],1)}),n("div")],2):e._e()}),0),e.editMode?n("div",e._l(e.requestData.editData.nodes,function(t,a){return n("el-card",{key:"1-"+a,staticStyle:{"margin-top":"10px"}},[n("div",{staticStyle:{padding:"-0px",margin:"-5px 0px -25px 0px"},attrs:{slot:"header"},slot:"header"},[n("el-form",{attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{model:{value:t.name,callback:function(n){e.$set(t,"name",n)},expression:"firstNode.name"}})],1),n("el-form-item",{attrs:{label:"描述"}},[n("el-input",{model:{value:t.des,callback:function(n){e.$set(t,"des",n)},expression:"firstNode.des"}})],1),n("el-form-item",{attrs:{label:"注意事项"}},[n("el-input",{model:{value:t.remark,callback:function(n){e.$set(t,"remark",n)},expression:"firstNode.remark"}})],1)],1)],1),n("ol",{attrs:{type:"1"}},e._l(t.children,function(a,i){return n("Node",{key:"2-"+i,attrs:{node:a,floor:1},on:{addBrother:function(e){return t.children.push({id:0,name:"",des:null,remark:null,code:null,param:null,children:[]})},deleteNode:function(n){return e.$delete(t.children,i)}}})}),1),0==t.children.length?n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.children.push({id:0,name:"",des:null,remark:null,code:null,param:null,children:[]})}}},[e._v("创建第一个节点")]):e._e(),n("el-button",{on:{click:function(t){return e.editSave()}}},[e._v("保存骨架")]),n("el-button",{attrs:{disabled:0!=t.children.length},on:{click:function(t){return e.$delete(e.requestData.editData.nodes,a)}}},[e._v("删除骨架")])],1)}),1):e._e()])],1)},x=[],_=(n("48fb"),n("3a23"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticStyle:{"margin-top":"5px"}},[n("div",[n("el-input",{staticStyle:{"margin-top":"3px"},attrs:{size:"mini"},model:{value:e.node.name,callback:function(t){e.$set(e.node,"name",t)},expression:"node.name"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[e._v("名称")]),n("el-dropdown",{attrs:{slot:"append",trigger:"click"},on:{command:e.handleCommand},slot:"append"},[n("el-button",{staticClass:"el-dropdown-link",attrs:{icon:"el-icon-more"}}),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"desAdd",disabled:null!=e.node.des}},[e._v("添加描述")]),n("el-dropdown-item",{attrs:{command:"remarkAdd",disabled:null!=e.node.remark}},[e._v("添加注意事项")]),n("el-dropdown-item",{attrs:{command:"codeAdd",disabled:null!=e.node.code}},[e._v("添加代码")]),n("el-dropdown-item",{attrs:{command:"paramAdd",disabled:null!=e.node.param}},[e._v("添加参数")]),n("el-dropdown-item",{attrs:{command:"nodeDelete",disabled:0!=e.node.children.length,divided:""}},[e._v("删除此节点")]),n("el-dropdown-item",{attrs:{command:"brother",divided:""}},[e._v("添加同类")]),n("el-dropdown-item",{attrs:{command:"children"}},[e._v("添加子类")])],1)],1)],1),n("el-input",{directives:[{name:"show",rawName:"v-show",value:null!=e.node.des,expression:"node.des != null "}],staticStyle:{"margin-top":"3px"},attrs:{size:"mini"},model:{value:e.node.des,callback:function(t){e.$set(e.node,"des",t)},expression:"node.des"}},[n("template",{slot:"prepend"},[e._v("描述")]),n("a",{staticClass:"el-icon-delete",staticStyle:{color:"#C0C4CC","text-decoration":"none","font-size":"15px",position:"relative",top:"7px",right:"10px"},attrs:{slot:"suffix",href:"#"},on:{click:function(t){t.preventDefault(),e.node.des=null}},slot:"suffix"})],2),n("el-input",{directives:[{name:"show",rawName:"v-show",value:null!=e.node.remark,expression:"node.remark != null "}],staticStyle:{"margin-top":"3px"},attrs:{size:"mini"},model:{value:e.node.remark,callback:function(t){e.$set(e.node,"remark",t)},expression:"node.remark"}},[n("template",{slot:"prepend"},[e._v("注意事项")]),n("a",{staticClass:"el-icon-delete",staticStyle:{color:"#C0C4CC","text-decoration":"none","font-size":"15px",position:"relative",top:"7px",right:"10px"},attrs:{slot:"suffix",href:"#"},on:{click:function(t){t.preventDefault(),e.node.remark=null}},slot:"suffix"})],2),n("el-input",{directives:[{name:"show",rawName:"v-show",value:null!=e.node.code,expression:"node.code != null"}],staticStyle:{"margin-top":"3px"},attrs:{size:"mini"},model:{value:e.node.code,callback:function(t){e.$set(e.node,"code",t)},expression:"node.code"}},[n("template",{slot:"prepend"},[e._v("代码")]),n("a",{staticClass:"el-icon-delete",staticStyle:{color:"#C0C4CC","text-decoration":"none","font-size":"15px",position:"relative",top:"7px",right:"10px"},attrs:{slot:"suffix",href:"#"},on:{click:function(t){t.preventDefault(),e.node.code=null}},slot:"suffix"})],2),n("el-input",{directives:[{name:"show",rawName:"v-show",value:null!=e.node.param,expression:"node.param != null"}],staticStyle:{"margin-top":"3px"},attrs:{size:"mini"},model:{value:e.node.param,callback:function(t){e.$set(e.node,"param",t)},expression:"node.param"}},[n("template",{slot:"prepend"},[e._v("参数")]),n("a",{staticClass:"el-icon-delete",staticStyle:{color:"#C0C4CC","text-decoration":"none","font-size":"15px",position:"relative",top:"7px",right:"10px"},attrs:{slot:"suffix",href:"#"},on:{click:function(t){t.preventDefault(),e.node.param=null}},slot:"suffix"})],2)],1),null!=e.node.children&&e.node.children.length>0?n("ol",{attrs:{type:e.setType}},e._l(e.node.children,function(t,a){return n("NodeSelf",{key:e.floor+2+"-"+a,attrs:{node:t,floor:e.floor+1},on:{addBrother:function(t){return e.addBrother()},deleteNode:function(t){return e.deleteNode(a)}}})}),1):e._e()])}),g=[],y={name:"NodeSelf",props:["node","floor"],computed:{setType:function(){var e=1,t=this.floor%3;switch(t){case 0:e=1;break;case 1:e="a";break;case 2:e="i";break;default:break}return e}},methods:{handleCommand:function(e){switch(e){case"desAdd":this.node.des="";break;case"remarkAdd":this.node.remark="";break;case"codeAdd":this.node.code="";break;case"paramAdd":this.node.param="";break;case"nodeDelete":this.$emit("deleteNode",this.key);break;case"brother":this.$emit("addBrother");break;case"children":this.node.children.push({id:0,name:"",des:null,code:null,param:null,children:[]});break;default:break}},addBrother:function(){this.node.children.push({id:0,name:"",des:null,code:null,param:null,children:[]})},deleteNode:function(e){this.$delete(this.node.children,e)}},mounted:function(){},updated:function(){}},w=y,S=(n("a09b"),Object(c["a"])(w,_,g,!1,null,"ad899602",null)),C=S.exports,D={components:{Node:C},data:function(){return{activeName:["0"],editMode:!1,editState:{on:new Array},sideAddActive:!1,backboneAddInput:null,activeBackbone:1,phoneMenuActive:!1,defaultProps:{},activeNames:new Array,requestData:{viewData:{nodes:[{id:1,name:"安装外部库包",des:"",children:[{id:2,name:"本地安装",remark:"安装在当前命令行目录",des:"npm install <库名> [-g/--save/-dev]",children:[{id:3,name:"name",remark:null,des:"des",children:[{label:"1、全局安装：-g",children:[]},{label:"需要打包到生产：--save",children:[]},{label:"需要用于开发：--save-dev",children:[]}]}]},{name:"本地安装",remark:"安装在当前命令行目录",des:"npm install <库名> [-g/--save/-dev]",children:[]}]}]},editData:{nodes:[{id:1,name:"1-1",remark:"remark",des:"des",code:null,param:null,children:[{id:2,name:"1-2",remark:"remark",des:"des",children:[{id:3,name:"1-3",remark:"remark",des:"des",children:[]}]}]}]}}}},computed:{skillName:function(){return this.$store.state.skill.name}},methods:{addNode:function(e){console.log(e)},handleEditSelect:function(e,t){switch(e){case"add":this.sideAddActive=!0;break;default:break}},handleViewSelect:function(e,t){this.activeBackbone=e},getString:function(e){return e+=1,e.toString()},getViewNodes:function(){if(null!=this.$store.state.skill.id&&""!=this.$store.state.skill.id){var e="/getViewNodes/".concat(parseInt(this.$route.params.skillId)),t=this;this.axios.get(e).then(function(e){t.requestData.viewData.nodes=e.data.data})}},getEditNodes:function(){if(null!=this.$store.state.skill.id&&""!=this.$store.state.skill.id){var e="/getEditNodes/".concat(parseInt(this.$route.params.skillId)),t=this;this.axios.get(e).then(function(e){t.requestData.editData.nodes=e.data.data})}},editSave:function(){var e=this;this.axios.post("/saveEdit",{nodes:e.requestData.editData.nodes,skillId:e.$route.params.skillId}).then(function(){e.getViewNodes(),e.open()})},close:function(){this.sideAddActive=!1},addBackbone:function(){},open:function(){this.$message("文档保存成功")},treeInit:function(e,t){console.log(e,t)}},mounted:function(){this.getViewNodes(),this.getEditNodes(),this.$store.commit("setHeaderActive",2)},updated:function(){},watch:{}},A=D,$=(n("0848"),Object(c["a"])(A,b,x,!1,null,"8b377a4e",null)),N=$.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-header",{staticClass:"header hidden-sm-and-down"},[n("el-form",{staticClass:"form",attrs:{inline:!0,model:e.formInline},on:{submit:function(t){return t.preventDefault(),e.add()}},nativeOn:{submit:function(t){return t.preventDefault(),e.add()}}},[n("div",{staticStyle:{display:"inline-block"}},[e.formActive?n("el-form-item",[n("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.formInline.input,callback:function(t){e.$set(e.formInline,"input",t)},expression:"formInline.input"}})],1):e._e(),e.formActive?n("el-form-item",[n("el-button",{on:{click:function(t){return e.add()}}},[n("span",{staticClass:"el-icon-check"})]),n("el-button",{on:{click:function(t){e.formActive=!1}}},[n("span",{staticClass:"el-icon-close"})])],1):e._e()],1),n("el-form-item",[e.formActive?e._e():n("el-button",{on:{click:function(t){e.formActive=!0}}},[n("span",{staticClass:"el-icon-plus"})]),n("el-button",{on:{click:function(t){e.DeleteActive?e.DeleteActive=!1:e.DeleteActive=!0}}},[n("span",{staticClass:"el-icon-setting"})])],1)],1)],1),n("el-main",{staticClass:"main"},[n("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},e._l(e.requestData.btn,function(t,a){return n("el-collapse-item",{key:a,attrs:{title:e.type[a],name:a}},e._l(e.requestData.btn[a],function(t){return n("el-button-group",{key:t.id,staticClass:"btnGroup"},[n("el-button",{on:{click:function(n){return e.toBackbone(t.id,t.name)}}},[e._v(e._s(t.name))]),e.DeleteActive?n("el-button",{attrs:{type:"danger",plain:!0},on:{click:function(n){return e.deleteSkill(t.id)}}},[n("span",{staticClass:"el-icon-delete"})]):e._e()],1)}),1)}),1)],1)],1)},I=[],M={data:function(){return{formActive:!1,DeleteActive:!1,activeNames:[0,1,2,3],type:["一天内更新过","一周内更新过","一个月内更新过","一个月更久之前更新过"],formInline:{input:""},requestData:{btn:[[{id:1,name:"Vue"}],[{id:2,name:"Java"}]]}}},methods:{handleChange:function(e){},toBackbone:function(e,t){this.$store.commit("setSkillId",e),this.$store.commit("setSkillName",t),this.$store.commit("setHeaderActive",2),this.$router.push("/backbone/".concat(e))},add:function(){var e=this;this.axios.post("/addSkill",JSON.stringify({name:this.formInline.input})).then(function(t){e.getSkills()}),this.formActive=!1},getSkills:function(){var e=this;this.axios.get("/getSkills").then(function(t){e.requestData.btn=t.data.data})},deleteSkill:function(e){var t=this,n="/deleteSkill/".concat(e);this.axios.get(n).then(function(){t.getSkills()})}},mounted:function(){this.getSkills(),this.$store.commit("setHeaderActive",1)}},q=M,O=(n("1b21"),Object(c["a"])(q,z,I,!1,null,"6bc8d5c7",null)),E=O.exports;a["default"].use(k["a"]);var j=new k["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"skill",component:E},{path:"/backbone/:skillId",name:"backbone",component:N}]}),B=n("52c1");a["default"].use(B["a"]);var P=new B["a"].Store({state:{skill:{id:null,name:null},headerActive:"1"},mutations:{setSkillId:function(e,t){e.skill.id=t},setSkillName:function(e,t){e.skill.name=t},setHeaderActive:function(e,t){e.headerActive=t.toString()}},actions:{}}),T=n("bea0"),H=n.n(T),V=(n("5b17"),n("7f43")),F=n.n(V);n("20e9");F.a.defaults.baseURL="http://120.79.214.244:8080",F.a.defaults.headers.post["Content-Type"]="application/json",a["default"].prototype.axios=F.a,a["default"].config.productionTip=!1,a["default"].use(H.a),new a["default"]({router:j,store:P,render:function(e){return e(v)}}).$mount("#app")},"67e2":function(e,t,n){"use strict";var a=n("92ce"),i=n.n(a);i.a},6916:function(e,t,n){},"728a":function(e,t,n){},"92ce":function(e,t,n){},"9e74":function(e,t,n){},a09b:function(e,t,n){"use strict";var a=n("6916"),i=n.n(a);i.a},b803:function(e,t,n){}});
//# sourceMappingURL=app.be2d67c6.js.map