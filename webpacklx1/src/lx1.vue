<template>
	<div>
		<h1>你好我是练习一的webpackVue组件</h1>
		<router-link to="/acc" class="a1">accoutn</router-link>
		<router-link to="/reg" class="a2">register</router-link>
		<router-view></router-view>
	</div>
</template>

<script>

</script>

<style scoped>
	.a1:hover{
		color:skyblue;
	}
	.a2:visited{
		color: red;
	}
	.a2:hover{
		color: pink;
		font-size: 100px;
		transition: all 3s ease;
	}
	.a2:active{
		color: green;
	}
</style>
