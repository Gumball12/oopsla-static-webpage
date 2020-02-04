<template>
  <v-container>
    <v-item-group>
      <v-row>
        <v-col>
          <v-item v-for="ind in lastNewsIndex" :key="ind"
            class="my-3">
            <news-compo img-height="200" :newsIndex="ind" />
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </v-container>
</template>

<script>
import _ from 'lodash';

import NewsCompo from '@/components/NewsCompo.vue';

export default {
  name: 'news',
  data: () => ({
    lastNewsIndex: [],
  }),
  components: { NewsCompo },
  async mounted() {
    const data = await this.$yaml;
    this.lastNewsIndex = _.range(data.news.length);
  },
};
</script>
