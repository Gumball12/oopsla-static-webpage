<template>
  <v-container class="root header-nav">
    <v-toolbar color="grey lighten-5" flat dense="">
      <v-toolbar-title class="app-title display-1 font-weight-black">
        <router-link to="/">OOPSLA</router-link></v-toolbar-title>
      <v-spacer />
      <v-btn v-for="[name, link] in tabs" :key="link" v-text="name" :to="link"
        text tile
        class="d-none d-md-inline-flex" />

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text icon v-on="on" class="d-block d-md-none">
            <v-icon>mdi-dots-vertical</v-icon></v-btn>
        </template>
        <v-list>
          <v-list-item v-for="[name, link] in tabs" :key="link" :to="link">
            <v-list-item-title>{{ name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
div.app-title {
  font-family: 'Nanum Gothic' !important;

  & > a {
    color: inherit;
    text-decoration: none;
  }
}
</style>
