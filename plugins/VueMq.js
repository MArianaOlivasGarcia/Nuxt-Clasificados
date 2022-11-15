import Vue from 'vue'
import VueMq from 'vue-mq';

Vue.use(VueMq, {
    breakpoints: {
      sm: 768,
      md: 769,
      lg: 1250,
    }
  })