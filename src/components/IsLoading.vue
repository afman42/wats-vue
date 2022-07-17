<template>
    <div>
        <b-loading v-model="isLoading" :can-cancel="true"></b-loading>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import $eventHub from '../eventHub'
export default Vue.extend({
    name:"IsLoading",
  data(){
    return {
      isLoading: false
    }
  },
  mounted(){
    $eventHub.$on('asyncComponentLoading', this.start)
    $eventHub.$on('asyncComponentLoaded', this.stop)
  },
  methods:{
      start(): void{
          this.isLoading = true
      },
      stop(): void {
          this.isLoading = false
      }
  }
})
</script>