<template>
  <v-card :to="`/research/${researchIndex}`">
    <v-img
      class="white--text align-end"
      :height="imgHeight"
      :src="thumbnail">
      <div class="card-overlap" />
      <v-card-title class="card-overlap-text res-title pt-0">
        <span v-text="title" class="text-truncate" />
      </v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    title: '',
    thumbnail: '',
  }),
  props: ['imgHeight', 'researchIndex'],
  async mounted() {
    const research = (await this.$yaml).research[this.researchIndex];

    this.title = research.title;

    if (research.thumbnail) {
      this.thumbnail = research.thumbnail;
    } else {
      this.thumbnail = '/thumbnail/default.png';
    }
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

div.res-title { font-size: 18px; }
</style>
