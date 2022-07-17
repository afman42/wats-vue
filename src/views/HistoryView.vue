<template>
  <div>
    <div
      class="is-flex is-justify-content-space-between"
      :class="history.length == 0 ? 'mb-6' : 'mb-3'"
    >
      <h5 class="has-text-dark">History Message</h5>
      <span class="has-text-dark history-delete-all" v-if="history.length > 0" @click="remove">delete all histories</span>
    </div>
    <div
      v-if="history.length == 0"
      class="is-flex is-justify-content-center is-align-content-center is-relative"
      :closable="false"
    >
      <b-icon icon="history" size="is-large" type="is-warning"> </b-icon>
      <h4 class="history-text">The phone number store in your website</h4>
    </div>
    <div v-else>
      <div class="card" v-for="item in history" :key="item.id">
        <div class="card-content">
          <div class="media">
            <div class="media-content is-flex is-justify-content-space-between">
              <div class="is-pulled-left">
                <p class="title is-4">{{ item.phone }}</p>
                <p class="subtitle is-6">{{ item.message }}</p>
              </div>
              <div class="is-pulled-right">
                <p class="is-6">{{ helperDate(item.date)}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { AList } from "@/types";
import { getData } from "@/utils";
import Vue from "vue";

export default Vue.extend({
  name: "HistoryView",
  data() {
    return {
      history: [] as AList,
    };
  },
  methods: {
    fetchList() {
      this.history = getData("list") || [];
    },
    helperDate(date: Date) {
      date = new Date(date);
      return date.toLocaleString("id-ID", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    },
    remove(){
        localStorage.removeItem("list"); 
        this.fetchList()
    }
  },
  mounted() {
    this.fetchList();
  },
});
</script>

<style>
.history-text {
  position: absolute;
  top: 50px;
  bottom: 0;
  left: auto;
}
.history-delete-all {
  text-decoration-color: green;
  text-decoration-line: underline;
}
.history-delete-all:hover {
  background-color: aqua;
}
</style>
