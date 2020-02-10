<template>
	<HandsOnTable1>
	</HandsOnTable1>
<!-- 	<div class="container">
		<Counter></Counter><br />
		<div class="columns">
			<div class="column is-11">
				<AddCounter></AddCounter>
			</div>
			<div class="column auto">
				<RemoveCounter></RemoveCounter>
			</div>
		</div>
	</div> -->
</template>

<script>
	import Counter from './components/counter.vue';
	import AddCounter from './components/add.vue';
	import RemoveCounter from './components/remove.vue';
	import HandsOnTable1 from './components/table1.vue';

	export default {
	  name: 'app',
	  components : {
	    Counter,
	    AddCounter,
	    RemoveCounter,
	    HandsOnTable1,
	  },
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	    created: () =>  {
	      console.log("Compoenente creado")
	    }
	}
</script>

<style lang="scss">
#app {
  font-family             : 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing  : antialiased;
  -moz-osx-font-smoothing : grayscale;
  text-align              : center;
  color                   : #2c3e50;
  margin-top              : 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
