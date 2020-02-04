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

    <v-row class="contents">
      <v-col class="py-8">
        {{ data.contents }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'multi-view',
  data: () => ({
    ind: 0,
    data: { },
  }),
  props: ['mode'],
  async mounted() {
    this.ind = this.$route.params.ind;
    this.data = (await this.$yaml)[this.mode][this.ind];

    if (this.data === undefined) {
      return this.$router.push('/404');
    }

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
