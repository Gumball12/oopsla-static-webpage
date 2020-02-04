<template>
  <v-container>
    <v-item-group>
      <v-row>
        <v-col>
          <v-item v-for="ind in lastIndex" :key="ind"
            class="my-3">
            <template v-if="mode === 'news'">
              <news-compo img-height="200" :newsIndex="ind" />
            </template>
            <template v-else>
              <research-compo img-height="200" :researchIndex="ind" />
            </template>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </v-container>
</template>

<script>
import _ from 'lodash';

import NewsCompo from '@/components/NewsCompo.vue';
import ResearchCompo from '@/components/ResearchCompo.vue';

export default {
  name: 'multi-article',
  data: () => ({
    lastIndex: [],
  }),
  props: ['mode'],
  components: { NewsCompo, ResearchCompo },
  async mounted() {
    const data = (await this.$yaml)[this.mode];
    this.lastIndex = _.range(data.length);

    console.log(data);
  },
};
</script>
