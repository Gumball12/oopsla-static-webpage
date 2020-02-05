import axios from 'axios';
import yaml from 'yaml';

export default {
  async install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$yaml = new Promise(async (resolve) => {
      const { data } = await axios.get('/data.yml');
      resolve(yaml.parse(data));
    });
  },
};
