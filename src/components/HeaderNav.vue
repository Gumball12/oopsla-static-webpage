<template>
  <v-container class="root header-nav">
    <v-toolbar color="grey lighten-5" flat dense="">
      <v-toolbar-title class="app-title display-1 font-weight-black ">
        OOPSLA</v-toolbar-title>
      <v-spacer />
      <v-btn v-for="[name, link] in tabs" :key="link" v-text="name" :to="link"
        text tile />
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tabs: null,
  }),
  async mounted() {
    this.tabs = (await this.$yaml).nav;
  },
};
</script>

<style lang="scss" scoped>
div.root { border-bottom: 1px solid #707070; }
div.app-title { font-family: 'Nanum Gothic' !important; }
</style>
