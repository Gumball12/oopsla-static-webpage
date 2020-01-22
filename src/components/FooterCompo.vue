<template>
  <v-footer>
    <v-container class="grey--text">
      <p class="display-1 font-weight-black" v-text="title" />
      <p v-text="address" />
      <v-img src="/thumbnail/sch-logo.png" width="80" />
      <p v-text="office" />
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    title: '',
    address: '',
    office: '',
  }),
  async mounted() {
    const data = await this.$yaml;

    this.title = data.info.title;
    this.address = data.info.address;
    this.office = data.info.office;
  },
};
</script>
