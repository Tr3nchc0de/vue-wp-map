<template>
  <div>
    <section>
      <GmapMap
        id="map"
        :center="center"
        :zoom="8"
        map-type-id="terrain"
        style="width: 100vw; height: 100vh"
      >
        <GmapMarker
          @click="center = m.position"
          class="marker-main"
          :position="center"
        />
      </GmapMap>
    </section>
  </div>
</template>

<script>
import ajax from "../mixins/ajax";

export default {
  name: "Map",

  mixins: [ajax],

  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      marker: {
        lat: 45.508,
        lng: -73.587
      }
    };
  },

  components: {}
};
</script>

<style scoped lang="scss">
section {
  text-align: center;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, auto));
  grid-gap: 1rem;
}
</style>
