<template>
	<el-menu mode="horizontal" :default-active="activeItem" @select="handleSelect">
		<el-menu-item index="back"><span class="el-icon-arrow-left" /></el-menu-item>
		<el-menu-item index="1">技能</el-menu-item>
		<el-menu-item index="2" :disabled="$store.state.skill.id==null">骨干</el-menu-item>
	</el-menu>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    activeItem() {
      return this.$store.state.headerActive;
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$store.commit('setHeaderActive', key);
      switch (key) {
        case '1':
          this.$router.push('/');
          break;
        case '2':
          this.$router.push(`/backbone/${this.$store.state.skill.id}`);
          break;
        case 'back':
          this.$router.go(-1);
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style scoped>
	a {
		text-decoration: none;
	}
</style>
