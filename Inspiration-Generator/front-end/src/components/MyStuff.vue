<template>
<div class="main">
  <div class="menu">
    <h2><a @click="toggleUpload"><i class="fas fa-image"></i> Upload a Photo</a></h2>
    <h2><a @click="toggleUpload2"><i class="far fa-file-alt"></i> Upload Inspiration</a></h2>
    <h2><a @click="logout">{{user.firstName}} {{user.lastName}} <i class="fas fa-sign-out-alt"></i></a></h2>
    
    <uploader :show="show" @close="close" @uploadFinished="uploadFinished" />
    <text-uploader :show="show2" @close="close2" @uploadFinished="uploadFinished2" />
  </div>
  <div class="menu">  
    <h3>My Inspirational Quotes</h3>
  </div>
  <text-list :texts="texts"/>
  
  <div class="menu">
    <h3>My Inspirational Photos</h3>
  </div>
  <image-gallery :photos="photos"/>
  <p v-if="error">{{error}}</p>
</div>

</template>


<script>
import axios from 'axios';
import Uploader from '@/components/Uploader.vue';
import ImageGallery from '@/components/ImageGallery.vue';
import TextUploader from '@/components/Uploader-text.vue';
import TextList from '@/components/TextList.vue';

export default {
  name: 'MyStuff',
  components: {
    Uploader,
    ImageGallery,
    TextUploader,
    TextList
  },

  data() {
    return {
      show: false,
      show2: false,
      photos: [],
      texts: [],
      error: '',
    }
  },

  created() {
    this.getPhotos();
    this.getTexts();
  },


  computed: {
    user() {
      return this.$root.$data.user;
    },
  },


  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },

    async getPhotos() {
      try {
        this.response = await axios.get("/api/photos");
        this.photos = this.response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },

    close() {
      this.show = false;
    },

    toggleUpload() {
      this.show = true;
    },

    async uploadFinished() {
      this.show = false;
      this.getPhotos();
    },




    async getTexts() {
      try {
        this.response = await axios.get("/api/texts");
        this.texts = this.response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },


    close2() {
      this.show2 = false;
    },
    toggleUpload2() {
      this.show2 = true;
    },

    async uploadFinished2() {
      this.show2 = false;
      this.getTexts();
    },



  }
}
</script>


<style scoped>
.main {
  margin-top: 125px;
}

.menu {
  display: flex;
  justify-content: space-between;
}

.menu h2 {
  font-size: 14px;
}

.menu h3 {
  font-size: 24px;
  color: #000000;
  text-align: center;
}
</style>

