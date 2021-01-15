<template>
	<div id="app">
		<div>
			<h2 class="heading">Gates</h2>
			<div class="img-block">
				<div v-if="src1" class="img-wrapper">
					<img src="https://picsum.photos/id/237/500/400" alt="gate">
				</div>
				<div v-if="src2" class="img-wrapper">
					<img src="https://picsum.photos/id/238/500/400" alt="gate">
				</div>
				<div v-if="src3" class="img-wrapper">
					<img src="https://picsum.photos/id/239/500/400" alt="gate">
				</div>
			</div>
			<h4>Which image do you need?</h4>
			<div class="button-block">
				<span :class="{ active: src1 }" @click="change1">Image 1</span>
				<span :class="{ active: src2 }" @click="change2">Image 2</span>
				<span :class="{ active: src3 }" @click="change3">Image 3</span>
			</div>
		</div>
		<gate/>
	</div>
</template>

<script>
import Gate from './components/Gate'

export default {
  name: 'App',
  data(){
	return {
		src1: true,
		src2: false,
		src3: false,
	}
  },
  components: {
    Gate
  },
  methods: {
	change1(){
		this.src1 = true
		this.src2 = false
		this.src3 = false
	},
	change2(){
		this.src1 = false
		this.src2 = true
		this.src3 = false
	},
	change3(){
		this.src1 = false
		this.src2 = false
		this.src3 = true
	},
  },
}
</script>

<style scoped>
	#app {
		text-align: center;
	}
	.heading {
		margin: 60px auto 50px;
	}
	.button-block {
		margin-top: 50px;
	}
	.button-block span {
		padding: 10px 15px;
		width: 60px;
		margin: 15px auto;
		display: block;
		cursor: pointer;
		background-color: #ccc;
	}
	.active {
		background-color: #fff;
	}
</style>
