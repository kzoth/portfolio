import Vue from 'vue';
import Flickity from 'vue-flickity';
 
new Vue({
  el: '#comments',
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        groupCells: true,
        resize: true
      }
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    },

    disabledBtnColor() {
      
    }
  },
  mounted() {
    const disabledBtnColor = 'rgba(85, 0, 242, 0.2)';
    
    this.$refs.prev.style.background = disabledBtnColor;

    this.$refs.flickity.on('change', (index) => {
      
      if (index == 0) {
        this.$refs.prev.style.background = disabledBtnColor;
      } else {
        this.$refs.prev.style.background = 'transparent';
      }

      if (index == this.$refs.flickity.$flickity.slides.length -1) {
        this.$refs.next.style.background = disabledBtnColor;
      } else {
        this.$refs.next.style.background = 'transparent';
      }
    })
  }
});