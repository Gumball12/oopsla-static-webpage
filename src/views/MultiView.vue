<template>
  <v-container>
    <v-card tile elevation="0">
      <v-img
        class="white--text align-end"
        height="300"
        :src="data.thumbnail">
        <div class="card-overlap" />
        <v-card-title class="card-overlap-text news-date pb-0" v-text="data.date" />
        <v-card-title class="card-overlap-text news-title pt-0">
          <span v-text="data.title"/></v-card-title>
      </v-img>
    </v-card>

    <v-row class="contents" v-if="mode === 'news'">
      <v-col class="py-8">
        {{ data.contents }}
      </v-col>
    </v-row>

    <template v-else>
      <v-row v-for="(article, ind) in articles" :key="ind" class="py-8">
        <v-col sm="12">
          <p class="title">{{ article[0] }}</p>
          <p class="overflow-x-auto" v-html="article[1]" />
        </v-col>
      </v-row>
      <v-divider />
      <v-row>
        <v-col sm="12">
          <p class="title">Paper</p>
          <p class="subtitle-1">{{ paper.title }}</p>
        </v-col>
        <v-col sm="12">
          <p class="subtitle-2">Writer</p>
          <p v-for="(p, ind) in paper.writer" :key="ind" v-text="p" />
        </v-col>
        <v-col sm="12">
          <p class="subtitle-2">Links</p>
          <p v-for="(link, ind) in paper.links" :key="ind">
            <a v-if="link[1] !== undefined"
              :href="link[1]" target="_blank" v-text="link[0]" />
            <span v-else v-text="link[0]" />
          </p>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'multi-view',
  data: () => ({
    ind: 0,
    data: { },
    articles: [],
    paper: { },
  }),
  props: ['mode'],
  async mounted() {
    this.ind = this.$route.params.ind;
    this.data = (await this.$yaml)[this.mode][this.ind];

    if (this.data === undefined) {
      return this.$router.push('/404');
    }

    this.articles = _.toPairs(this.data).slice(3, -1);
    this.paper = this.data.paper;

    return true;
  },
};
</script>

<style lang="scss" scoped>
div.card-overlap {
  position: absolute;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.55);
  top: 0;
}
div.card-overlap-text {
  position: relative;
}

div.news-date { font-size: 16px; }
div.news-title { font-size: 22px; }
div.contents { font-size: 18px; }
</style>
