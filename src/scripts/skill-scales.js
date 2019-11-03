import Vue from 'vue';
import checkView from 'vue-check-view';

Vue.use(checkView);

const skillScalesElem = {
  template: '#skill-scales-elem',
  props: ['skillName', 'skillValue'],
  methods: {
    handleScroll() {
      const inViewport = this.$refs['circle-fill'];
      if (inViewport.classList.contains('view-in')) {
        inViewport.style.animation = 'progress 2s ease-out forwards';
      }
    },
    circleFill() {
      const circle = this.$refs['circle-fill'];
      circle.style.strokeDasharray = this.skillValue + ', 100';
    }
  },
  mounted() {
    this.circleFill();
  }
}

const skillScalesList = {
  template: '#skill-scales-list',
  components: { skillScalesElem },
  props: ['skill']
}

new Vue({
  el: '#skill-scales-component',
  template: '#skill-scales',
  components: { skillScalesList },
  data: () => ({
    skills: []
  }),
  created() {
    this.skills = require('../data/skill-scales.json');
  }
});