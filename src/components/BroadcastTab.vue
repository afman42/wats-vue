<template>
  <div>
    <p class="mb-3">
      You can broadcast messages with bulk
    </p>
    <form @submit.prevent="submitHandler">
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
import Vue from "vue";

export default Vue.extend({
  name: "BroadcastTab",
  data() {
    return {
      form: {
        message: null,
      },
      loading: false,
    };
  },
  methods: {
    submitHandler() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false
        window.open(`https://api.whatsapp.com/send?text=${this.form.message}`,'blank')
        this.form = {
          message: null
        }
      },500)
    },
  },
});
</script>