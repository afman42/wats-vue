<template>
  <div>
      <b-tabs v-model="activeTab">
          <b-tab-item label="Personal" icon="account-box">
              <PersonalTab />
          </b-tab-item>

          <b-tab-item label="Broadcast" icon="moped-outline">
              <BroadcastTab />
          </b-tab-item>
      </b-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PersonalTab from '../components/PersonalTab.vue';
import BroadcastTab from '../components/BroadcastTab.vue';

export default Vue.extend({
    name: "HomeView",
    data() {
        return {
            activeTab: 0
        };
    },
    components: { PersonalTab, BroadcastTab }
});
</script>
