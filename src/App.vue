<template>

<div>
  <h2>Single</h2>
<my-select-component/>
  <h2>Multiple Select</h2>
  <multi-my-select-component/>
</div>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->
</template>

<style lang="scss">

</style>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MySelectComponent from "@/components/mySelect/my-select.component.vue";
import MultiMySelectComponent from "@/components/multi-mySelect/multi-my-select.component.vue";

@Options({
  components: {
    'my-select-component': MySelectComponent,
    'multi-my-select-component': MultiMySelectComponent
  },
})
export default class Home extends Vue {}
</script>
