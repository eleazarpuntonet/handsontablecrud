
<template>
  <div class="container">
    <div class="field is-grouped">
      <div class="control">
       	<button class="button is-primary" v-on:click="removeCounter()">Remove</button>
      </div>
  </div>
  </div>
</template>

<script>
	import store from '../store';
	import * as type from '../mutationtypes/types';

	export default {
		methods: {
		    removeCounter(){
				store.dispatch({
					type: type.Decrement,
					amount: 20
				})
		    }
		}
	}
</script>