<template>
	<div>
		<blog_Header />
		<router-view />
	</div>
</template>
<style scoped>

</style>
<script>
import blog_Header from '../components/blog_Header.vue';

export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      activeName: '1',
    };
  },
  components: {
    blog_Header,
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
