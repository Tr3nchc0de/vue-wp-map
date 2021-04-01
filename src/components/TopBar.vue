<template>
  <nav>
    <div class="navbar-brand">
      <router-link
        :to="{
          name: 'start'
        }"
      >
        <img src="/img/icons/logo-pug.png">
      </router-link>
    </div>
    <ul class="navbar">
      <li>
        <router-link
        :to="{
          name: 'start'
        }"
      >
      <div class="nav-item">Start</div>
      </router-link>
      </li>

      <li>
      <router-link
        :to="{
          name: 'search'
        }"
      >
      <div class="nav-item">Search</div>
      </router-link>
      </li>

      <li>
        <div id="btn-install" class="nav-item btn-install">installieren</div>
      </li>

    </ul>

    <div>
      <!-- <p>
        Currently presenting content from
        <a :href="sourceURL">{{ splitEndpoint[2] }}</a
        >.
      </p> -->
<!-- 
      <button @click="showUpdater">
        Change Endpoint
      </button> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopBar",

  data() {
    return {};
  },

  computed: {
    splitEndpoint: function() {
      return this.$store.state.endpoint.split("/");
    },

    sourceURL: function() {
      return (
        this.splitEndpoint[0] + this.splitEndpoint[1] + this.splitEndpoint[2]
      );
    }
  },

  methods: {
    showUpdater: function() {
      this.$emit("showUpdater");
    }
  }
};
</script>

<style scoped lang="scss">

.navbar-brand {
    max-width: 80px;
}
nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin-bottom: 1rem;
  background: rgba($gray--light, 0.9);
  padding: 1rem 2rem;
  border-bottom: 2px solid darken($gray--light, 5%);

  @include media($small) {
    flex-direction: row;
  }
}

ul.navbar {
    display: flex;
    align-items: center;
}

div {
  display: flex;
  align-items: center;
  flex-direction: column;

  @include media($mobile) {
    flex-direction: row;
  }
}

button {
  @include media($mobile) {
    margin: 0 0 0 1rem;
  }
}

.btn-install{
  background: $green;
  border-radius: .4em;
  padding: 5px 10px;
  color: #fff;
  cursor: pointer;
  transition: all .4s ease-in-out;
  &:hover {
    background: black;
  }
}

h1 {
  margin: 0;
}

a {
  font-weight: bold;
}

p {
  text-align: center;
  margin: 0.5rem 0 1rem;

  @include media($mobile) {
    margin: 0;
    text-align: right;
  }
}
</style>
