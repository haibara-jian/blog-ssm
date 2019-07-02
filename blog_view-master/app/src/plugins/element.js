import Vue from 'vue';
import {
  Message, Dropdown, DropdownMenu, DropdownItem, ButtonGroup, FormItem, Form, Input, Tree, Button, Menu, MenuItem, Container, Submenu, Header, Main, Aside, MenuItemGroup, Row, Col, Card, Collapse, CollapseItem,
} from 'element-ui';

Vue.use(Submenu);
Vue.use(Button);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Aside);
Vue.use(MenuItemGroup);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Tree);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(ButtonGroup);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
// Vue.use(Message)

Vue.prototype.$message = Message;
