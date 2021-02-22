import Vue from "vue";
import VueAnalytics from "vue-analytics";
import App from "./App.vue";
import router from "./router";
import utils from "./mixins/utils";
import store from "./store";
import * as VueGoogleMaps from 'vue2-google-maps'
 

Vue.mixin(utils);


//-- Initialize Google Analytics tracking.
Vue.use(VueAnalytics, {
  id: GA_TRACKING_ID,
  router
});

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC0R0vzOmf0PXR891z39QzlrhB5F0CAtUg',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },
 
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
 
  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})


new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
}).$mount("#app");
