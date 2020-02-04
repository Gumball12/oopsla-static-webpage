<template>
  <v-container>
    <!-- main news -->
    <news-compo :img-height="getMainNewsHeight()" :isMain="true" :newsIndex="lastNewsIndex" />

    <!-- news -->
    <div class="cursor d-flex mt-8" @click="$router.push('/news')">
      <span class="headline mb-1 grey--text text--darken-1">NEWS</span>
      <v-spacer />
      <span class="align-self-center">+</span>
    </div>

    <v-divider />

    <v-item-group>
      <v-container>
        <v-row>
          <v-col v-for="n in newsIndex" :key="n" cols="6" md="3"
            :class="{ 'pl-0': n % 2 === 1, 'pr-0': n % 2 === 0 }"
            class="pa-sm-3">
            <v-item class="d-none d-sm-block">
              <news-compo img-height="200" :newsIndex="n" />
            </v-item>
            <v-item class="d-block d-sm-none">
              <news-compo img-height="148" :newsIndex="n" />
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>

    <!-- research -->
    <div class="cursor d-flex mt-8" @click="$router.push('/research')">
      <span class="headline mb-1 grey--text text--darken-1">RESEARCH</span>
      <v-spacer />
      <span class="align-self-center">+</span>
    </div>

    <v-divider />

    <v-item-group>
      <v-container>
        <v-row>
          <v-col v-for="n in researchIndex" :key="n" cols="6" md="3"
            :class="{ 'pl-0': n % 2 === 1, 'pr-0': n % 2 === 0 }"
            class="pa-sm-3">
            <v-item class="d-none d-sm-block">
              <research-compo img-height="200" :researchIndex="n" />
            </v-item>
            <v-item class="d-block d-sm-none">
              <research-compo img-height="148" :researchIndex="n" />
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </v-container>
</template>

<script>
import _ from 'lodash';

import NewsCompo from '../components/NewsCompo.vue';
import ResearchCompo from '../components/ResearchCompo.vue';

export default {
  name: 'home',
  data: () => ({
    newsIndex: [],
    researchIndex: [],
    lastNewsIndex: 0,
  }),
  components: {
    NewsCompo,
    ResearchCompo,
  },
  methods: {
    getMainNewsHeight() {
      const headerHeight = document.querySelector('div.header-nav').offsetHeight;
      return window.innerHeight - headerHeight - 24; // padding: 12 * 2
    },
  },
  async mounted() {
    const data = await this.$yaml;

    const lastNewsIndex = data.news.length - 1;
    this.newsIndex = _.range(lastNewsIndex, lastNewsIndex - 4);
    this.lastNewsIndex = lastNewsIndex;

    const lastResearchIndex = data.research.length - 1;
    this.researchIndex = _.range(lastResearchIndex, lastResearchIndex - 4);
  },
};
</script>

<style lang="scss" scoped>
.cursor { cursor: pointer; }
</style>
