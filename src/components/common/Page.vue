<template>
  <!-- Banner -->
  <div class="container">
    <div id="banner d-none d-md-block" class="mt-0">
      <div class="row">
        <div class="col-10 col-md-6 ml-5"></div>
      </div>

      <div class="row justify-content-evenly">
        <div class="col-md-4 col-12">
          <img
            :src="require(`../../../public/images/${image}`)"
            alt=""
            class="images"
          />
        </div>

        <div class="col-md-8 col-12 align-self-start p-0 mt-3 mt-md-0">
          <span class="title text-center text-md-start">{{ title }}</span>
          <hr />
          <p v-html="body"></p>
        </div>
      </div>
    </div>
    <div class="row mt-3 mb-5 d-flex flex-row justify-content-between">
      <div class="col-6 d-flex justify-content-start">
        <router-link :to="previous" class="more_button">ƏVVƏLKİ</router-link>
      </div>

      <div class="col-6 d-flex justify-content-end">
        <router-link :to="next" class="more_button">SONRAKI</router-link>
      </div>
    </div>

  </div>
</template>

<script>
import "../../assets/css/index.css";

export default {
  props: {
    image: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    body: {
      required: true,
      type: String,
    },
    previous: {
      required: false,
      type: String,
    },
    next: {
      required: false,
      type: String,
    }
  },
  methods: {
    stringToHtml(str) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(str, "text/html");
      return doc.body;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.images {
  width: 100%;
}

.title {
  font-size: 2rem;
}

hr {
  border-top: 1px solid #3a7292;
  width: 100%;
}

.button {
  cursor: pointer;
  background-color: #3a7292;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}

.button:hover {
  color: white;
  text-decoration: none;
  background-color: #b19e7f;
}

#banner {
  background: url("../../../public/images/banner2.jpg") no-repeat;
  background-size: cover;
  /* filter: brightness(-60); */
  min-height: 500px;
}

.banner-title {
  font-size: 1.2em;
  color: white !important;
}

@media (max-width: 576px) {
  #banner {
    background: url("../../../public/images/banner3.jpg") no-repeat center
      center;
    background-size: cover;
    /* filter: brightness(-60); */
    min-height: 400px;
  }
  .banner-title {
    font-size: 1.2em;
    color: white;
  }
}
</style>
