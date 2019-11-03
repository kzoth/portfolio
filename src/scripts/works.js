import Vue from 'vue';

const sliderControls = {
  template: '#slider-controls'
};

const sliderOptions = {
  template: '#slider-options',
  props: ['works', 'activeWork']
};

const slider = {
  template: '#slider',
  components: {
    sliderOptions,
    sliderControls
  },
  props: ['works', 'activeWork','index']
};

const descTags = {
  template: '#desc-tags',
  props: ['descTags']
};

const description = {
  template: '#description',
  components: {
    descTags
  },
  props: ['activeWork'],
  computed: {
    descTagsArray() {
      return this.activeWork.skills.split(', ')
    }
  }
};

new Vue({
  el: '#slider-component',
  template: '#slider-wrapper',
  components: {
    slider,
    description
  },
  data: () => ({
    works: [],
    index: 0
  }),
  computed: {
    activeWork() {
      return this.works[this.index];
    }
  },
  watch: {
    index(value) {
      this.loopForSlider(value)
    }
  },
  methods: {
    requirePictures(data) {
      return data.map((item) => {
        const requirePic = require(`../images/content/works-preview/${item.picture}`);
        item.picture = requirePic;

        return item
      })
    },
    moveSlide(value) {           
      if (value == 'next') {
        this.index++;
      } else if (value == 'prev') {
        this.index--;
      } else {
        this.index = value - 1;
      };
    },
    moveSlideViaOpions(id) {
      this.index = id;
    },
    loopForSlider(value) {
      if (value < 0) this.index = this.works.length - 1;
      if (value > this.works.length - 1) this.index = 0;
    }
  },
  created() {
    const data = require('../data/works.json');
    this.works = this.requirePictures(data);
  }
})