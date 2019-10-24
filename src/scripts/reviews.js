import Vue from 'vue';
import Flickity from 'vue-flickity';
import { selector } from 'postcss-selector-parser';
 
new Vue({
  el: '.aboutme',
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: true,
        wrapAround: false,
        groupCells: true,
        freeSrcoll: false,
        contain: true
      }
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
      this.checkArrows();
    },
    
    previous() {
      this.$refs.flickity.previous();
     this.checkArrows();
    },
    checkArrows(){
      if (this.$refs.flickity.selectedIndex() ==0){
        this.$el.querySelector('.aboutme__buttons-prev').disabled = true;
      }else if(this.$refs.flickity.selectedIndex()== this.$refs.flickity.slides().length -1){
        this.$el.querySelector('.aboutme__buttons-next').disabled = true;
      }else {
        this.$el.querySelector('.aboutme__buttons-prev').disabled = false;
        this.$el.querySelector('.aboutme__buttons-next').disabled = false;
      }
    }
  }
});