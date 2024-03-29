<template>
  <div>
    <img
      class="featured-image"
      v-if="post.featured_image"
      :src="post.featured_image"
    />
    <article>
      <GmapMap
        id="map"
        :center="center"
        :zoom="8"
        map-type-id="terrain"
        style="width: 100%; height: 300px"
      >
        <GmapMarker
          @click="center = m.position"
          class="marker-main"
          :position="center"
        />
      </GmapMap>

      <a @click="goBack">Back to All Posts</a>

      <header>
        <div v-if="post.featured_image"></div>

        <h1 v-html="title"></h1>

        <ul>
          <li>
            <span>Published on {{ date }} by {{ author }}</span>
          </li>
          <li>
            <span>
              <a :href="link">View Post at Source</a>
            </span>
            <span class="meta"
              >{{ metadata }}
              <div class="lat_long">{{ map_latitude }}</div></span
            >
          </li>
        </ul>
      </header>

      <PostBody :content="content"></PostBody>
    </article>
  </div>
</template>

<script>
import bus from "../bus";
import utils from "../mixins/utils";
import ajax from "../mixins/ajax";
import PostBody from "../components/PostBody";

export default {
  name: "Post",

  mixins: [utils, ajax],

  data() {
    return {
      post: {},
      author: "",
      date: "",
      link: "",
      title: "",
      content: "",
      featured_image: "",
      metadata: "",
      long_lat: "",
      map_longitude: "",
      map_latitude: "",
      /* center: { lat: this.post.map_latitude, lng: this.post.map_longitude }, */
      center: { lat: 45.508, lng: -73.587 },
      marker: {
        lat: 45.508,
        lng: -73.587
      }
    };
  },

  created: async function() {
    this.post = await this.setPost();
    this.link = this.post.link;
    this.author = this.post.author;
    this.date = this.getFormattedDate(this.post.date);
    this.title = this.post.title.rendered;
    this.content = this.post.content.rendered;
    this.featured_image = await this.getFeaturedImage(this.post.featured_media);
    this.metadata = this.post.metadata;
    this.map_longitude = this.post.map_longitude;
    this.map_latitude = this.post.map_latitude;
    this.center = {
      lat: +this.post.map_latitude,
      lng: +this.post.map_longitude
    };
    bus.$emit("toggleLoading", false);
  },

  computed: {},

  methods: {
    setPost: function() {
      return new Promise(async resolve => {
        let response;

        try {
          response = await this.get(`/posts?slug=${this.$route.params.slug}`);
        } catch (error) {
          this.$router.push({ name: "four-o-four" });
          return;
        }

        resolve(response.data[0]);
      });
    },

    getFeaturedImage: async function(id) {
      let response;
      try {
        if (post.featured_media <= 0) {
          throw "No featured image.";
        }

        response = await this.get(`/media/${id}`);
      } catch (error) {
        return null;
      }

      return response.data.media_details.sizes["medium"].source_url;
    }
  },

  components: {
    PostBody
  }
};
</script>

<style scoped lang="scss">
article {
  max-width: 900px;
  margin: 0 auto;
  background: $gray--light;
  border: 2px solid darken($gray--light, 5%);
  padding: 1rem;

  @include media($small) {
    padding: 3rem;
  }
}
img.featured-image {
  width: 100%;
}

header {
  margin-bottom: 1rem;
}

h1 {
  margin: 2rem 0 0;
}

ul {
  @include media($mobile) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 5px;
  }
}

li {
  & + & {
    &:before {
      @include media($mobile) {
        content: "|";
        float: left;
        margin: 0 5px 0 0;
      }
    }
  }

  a {
    color: inherit;
    font-weight: 600;

    &:hover {
      color: $action-color;
    }
  }
}

a {
  display: block;
  margin-bottom: 1rem;
}
</style>
