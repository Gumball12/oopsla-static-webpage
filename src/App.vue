<template>
  <v-app>
    <header-nav />

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue';

export default {
  name: 'App',
  components: { HeaderNav },
  data: () => ({
  }),
};
</script>

<style lang="scss">
/* global */

// font
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css); // 'Nanum Gothic'
* {
  font-family: 'Nanum Gothic' !important;
}

div, span, p {
  &.v-application &.headline, &.title {
    font-family: 'Nanum Gothic' !important;
  }
  &.v-application &.display {
    &-1, &-2, &-3, &-4 {
      font-family: 'Nanum Gothic' !important;
    }
  }
}

// hr
hr {
  border-color: #707070 !important;
}
</style>
