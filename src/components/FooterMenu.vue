<template>
  <div class="footer-menu">
    <div class="menu-item">
      <router-link
        :to="{
          name: 'search'
        }"
      >
        <img src="/img/icons/icon-search.svg" />
      </router-link>
    </div>
    <div class="menu-item">
      <router-link
        :to="{
          name: 'map'
        }"
      >
        <img src="/img/icons/icon-map.svg" />
      </router-link>
    </div>
    <div class="menu-item">
      <router-link
        :to="{
          name: 'list'
        }"
      >
        <img src="/img/icons/icon-list.svg" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterMenu"
};
</script>

<style scoped lang="scss">
.footer-menu {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  background: $green;
  padding: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}

a {
  font-weight: bold;
}
</style>
