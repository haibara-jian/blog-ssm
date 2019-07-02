<template>
	<div id="app">
		<blog_Header class="hidden-sm-and-down"/>
		<router-view />
	</div>
</template>

<script>
import blog_Header from './components/blog_Header.vue';

export default {
  name: 'app',
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

<style>
	#app {}
</style>
