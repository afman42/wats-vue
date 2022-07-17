<template>
    <div class="mt-2 columns">
        <div class="column"></div>
        <div class="column is-half">
            <h2 class="has-text-success has-text-centered">Just Learning Purpose :)</h2>
            <p class="has-text-centered">send whatsapp number store in your smartphone and PC</p>
            <div class="is-centered columns mt-1">
                <div class="column">
                    <b-button tag="router-link" to="/" type="is-info" outlined expanded icon-left="home">Home</b-button>
                </div>
                <div class="column">
                    <b-button tag="router-link" to="/history" type="is-info" outlined expanded icon-left="history">History</b-button>
                </div>
            </div>
        </div>
        <div class="column"></div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NavbarItem',
});
</script>