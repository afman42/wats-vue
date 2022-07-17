<template>
  <div>
    <p class="mb-3">
      Save number in your website not storage device 
      <span v-if="list.length > 0" class="has-text-success">Number Book</span>
    </p>
    <form @submit.prevent="submitHandler">
      <b-field>
        <b-input
          placeholder="Insert Number like 628123456789"
          required
          validation-message="Only Number Allowed"
          type="text"
          pattern="[0-9]+"
          min="10"
          max="20"
          icon="card-account-phone"
          v-model="form.phone"
        >
        </b-input>
      </b-field>
      <b-field>
        <b-input
          type="textarea"
          required
          validation-message="Please fill this 10 character length"
          minlength="10"
          maxlength="100"
          placeholder="Write automatically counts characters"
          v-model="form.message"
        >
        </b-input>
      </b-field>
      <b-button native-type="submit" :loading="loading" :disabled="loading" type="is-success" expanded icon-left="send">Save</b-button>
    </form>
  </div>
</template>

<script lang="ts">
import { getData, storeData } from "@/utils";
import Vue from "vue";
import { AList } from '@/types';

export default Vue.extend({
  name: "PersonalTab",
  data() {
    return {
      form: {
        phone: null,
        message: null,
      },
      loading: false,
      list: [] as AList,
    };
  },
  methods: {
    submitHandler() {
      this.loading = true;
      this.list = [
        ...this.list,
        {
          id: +new Date(),
          ...this.form,
          date: new Date()
        },
      ]
      setTimeout(() => {
        this.loading = false
        storeData("list", this.list);
        window.open(`https://api.whatsapp.com/send?phone=${this.form.phone}&text=${this.form.message}`,'blank')
        this.form = {
          phone: null,
          message: null
        }
      },500)
    },
    fetchList(){
      this.list = getData('list') || [];
    },
  },
  mounted(){
    this.fetchList();
  }
});
</script>
