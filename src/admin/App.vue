<template lang="pug">
  .root   
    headerComponent
    navigation
    
    main.content                  
      router-view
</template> 

<script>
import headerComponent from "./components/header.vue";
import navigation from "./components/navigation.vue";

export default {
  components: {
    headerComponent,
    navigation
  },

};
</script>

<style lang="pcss">
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

.content {
  background-image: url("../images/content/mountain-baloon-admin.jpg");
  background-size: cover;
  min-height: 1000px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    opacity: 0.8;
  }
}
</style>