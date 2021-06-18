<template>
<div class="home">
    <div class="centered">
      <h2> BECOME INSPIRED!!  </h2>
      <img :src="photos[rval1].path" />
      <p> {{texts[rval2].inspiration}}</p>
      
      <button class="btn" @click="randomize"> Inspire Me! </button>
      
   </div>
</div>
</template>


<script>
import axios from 'axios';



export default {
  name: 'Home',
  data() {
    return {
      photos: [],
      texts: [],
      error: '',
      error2: '',
      rval1: '0',
      rval2: '0',
    }
  },

  created() {
    this.getPhotos();
    this.getTexts();
  },

  methods: {
    async getPhotos() {
      try {
        let response = await axios.get("/api/photos/all");
        this.photos = response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },

    async getTexts() {
      try {
        let response = await axios.get("/api/texts/all");
        this.texts = response.data;
      } catch (error2) {
        this.error2 = error2.response.data.message;
      }
    },

    randomize () {
      this.rval1 = Math.floor(Math.random() * this.photos.length);
      this.rval2 = Math.floor(Math.random() * this.texts.length);
    },

  }

  


}
</script>


<style> 

.centered {
  position: absolute;
  top: 30%;
  left: 45%;
  margin-top: -50px;
  margin-left: -100px;
  margin-bottom: 100px;
  justify-content: center;
  text-align:center;
}

.btn {
  background-color: #27a7d8;
  color: #FFF;
  text-align: center;
  font-size: 13px;
}

</style>
