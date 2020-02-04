<template>
  <v-card :to="`/news/${newsIndex}`">
    <v-img
      class="white--text align-end"
      :class="{ 'main-card': isMain }"
      :height="imgHeight"
      :src="thumbnail">
      <div class="card-overlap" />
      <v-card-title class="card-overlap-text news-date"
      :class="{ 'pb-0': !isMain }">
        {{ date }}</v-card-title>
      <v-card-title class="card-overlap-text news-title pt-0">
        <span v-text="title" class="text-truncate"/></v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    date: '',
    title: '',
    thumbnail: '',
  }),
  props: ['imgHeight', 'newsIndex', 'isMain'],
  methods: {
    async updateNews() {
      const news = (await this.$yaml).news[this.newsIndex];
      this.date = news.date;
      this.title = news.title;

      if (news.thumbnail) {
        this.thumbnail = news.thumbnail;
      } else {
        this.thumbnail = '/thumbnail/default.png';
      }
    },
  },
  async mounted() {
    this.updateNews();
  },
  watch: {
    newsIndex() {
      this.updateNews();
    },
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

div.news-date { font-size: 14px; }
div.news-title { font-size: 18px; }

div.main-card {
  div.news-date { font-size: 24px; }
  div.news-title { font-size: 28px; }
}
</style>
