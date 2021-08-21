<template>
  <nav id="main-wrapper">
    <div class="top-bar">
      <div class="top-left">
        <div id="menu-toggle">
          <button><img src="/img/icons/icon-burger.svg" /></button>
        </div>
      </div>
      <div class="top-middle"><div class="brand">Parks & Gärten</div></div>
      <div class="top-right"></div>
    </div>
    <!-- Sidebar -->
    <div id="sidebar-wrapper">
      <ul class="sidebar-nav">
        <div class="navbar-brand">
          <router-link
            :to="{
              name: 'start'
            }"
          >
            <img src="/img/icons/logo-pug.png" />
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
              <div class="nav-item">Suche</div>
            </router-link>
          </li>

          <li>
            <router-link
              :to="{
                name: 'map'
              }"
            >
              <div class="nav-item">Karte</div>
            </router-link>
          </li>

          <li>
            <router-link
              :to="{
                name: 'list'
              }"
            >
              <div class="nav-item">Liste</div>
            </router-link>
          </li>

          <li>
            <div id="btn-install" class="nav-item btn-install">
              installieren
            </div>
          </li>
        </ul>
      </ul>
    </div>
    <!-- /#sidebar-wrapper -->

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
  },
  mounted() {
    let menuToggle = document.getElementById("menu-toggle");
    function toggleClass() {
      var element = document.getElementById("main-wrapper");
      element.classList.toggle("toggled");
    }
    menuToggle.addEventListener("click", toggleClass);
  }
};
</script>

<style scoped lang="scss">
.top-bar {
  & .top-left,
  .top-right {
    width: 10%;
    display: flex;
    align-items: center;
  }
  & .top-middle {
    display: flex;
    align-items: center;
  }
  display: flex;
  justify-content: space-between;
  width: 100%;
  & .brand {
    font-family: "droid_serifregular";
    color: $green;
    font-size: 1.1em;
  }
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin-bottom: 1rem;
  background: rgba($gray--light, 0.9);
  padding: 1rem 20px;
  border-bottom: 2px solid darken($gray--light, 5%);

  @include media($small) {
    flex-direction: row;
  }
}

#main-wrapper {
  position: fixed;
  width: 100vw;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  z-index: 9;
}

/*   #main-wrapper.toggled {
    padding-right: 250px;
  } */

#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 250px;
  width: 0;
  height: 100%;
  margin-right: -250px;
  overflow-y: auto;
  background: #fff;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#main-wrapper.toggled #sidebar-wrapper {
  width: 250px;
  -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
}

#page-content-wrapper {
  width: 100%;
  position: absolute;
  padding: 15px;
}

#main-wrapper.toggled #page-content-wrapper {
  position: absolute;
  margin-right: 0px;
}

/* Sidebar Styles */

.navbar-brand {
  img {
    max-width: 80px;
  }
}

ul.navbar {
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.sidebar-nav {
  position: absolute;
  top: 0;
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 10vh;
  flex-direction: column;
  justify-content: center;
  & li {
    line-height: 40px;
    & a {
      display: block;
      text-decoration: none;
      color: #999999;
      &:hover {
        text-decoration: none;
        color: #104239;
        background: rgba(255, 255, 255, 0.2);
      }
      &:focus {
        text-decoration: none;
      }
    }
  }
}

/*=======END SIDEBAR========*/

button {
  background: transparent;
  padding: 0;

  &:hover {
    background: rgba($gray--light, 0.9);
  }
  &:focus {
    outline: 0;
  }
  @include media($mobile) {
    margin: 0 0 0 1rem;
  }
}

.btn-install {
  background: $green;
  border-radius: 3px;
  padding: 5px 20px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
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
