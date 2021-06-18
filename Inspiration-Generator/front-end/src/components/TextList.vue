<template>
<div>
  <section class="text-list">
    <div class="text-class" v-for="text in texts" v-bind:key="text._id">
      <p>{{text.inspiration}}</p>
      <div class="textInfo">
        <p class="textContent">{{text.title}}</p>
      </div>
      <p class="textDate">{{formatDate(text.created)}}</p>
    </div>
  </section>
</div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'TextList',
  props: {
    texts: Array
  },

  methods: {

    formatDate(date) {
      if (moment(date).diff(Date.now(), 'days') < 15)
        return moment(date).fromNow();
      else
        return moment(date).format('d MMMM YYYY');
    },
  }
}
</script>

<style scoped>
.textInfo {
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
}

.textInfo p {
  margin: 0px;
}

.textContent p {
  font-size: 0.8em;
}


.textDate {
  font-size: 0.7em;
  font-weight: normal;
}

p {
  margin: 0px;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.text-list {
  column-gap: 1em;
}

.text {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.text-class {
  margin-top: 10px;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 2;
  }
}
</style>

