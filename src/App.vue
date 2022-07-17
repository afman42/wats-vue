<template>
  <div class="container" style="margin-top:-10px;">
    <NavbarItem />
    <router-view/>
    <IsLoading />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavbarItem from '@/components/NavbarItem.vue';
import IsLoading from '@/components/IsLoading.vue';

export default Vue.extend({
  name: 'App',
  components: {
    NavbarItem,
    IsLoading
  },
});
</script>