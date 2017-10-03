<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view></router-view> -->
    <tween-example v-if="isLoading"></tween-example>
    <spinner v-if="isLoading"></spinner>
    <unity-webgl v-show="!isLoading" class="unity-content" src="static/Build/Build/Build.json" width="100%" height="100%" unityLoader="static/Build/Build/UnityLoader.js"></unity-webgl>
  </div>
</template>

<script>
import Vue from 'vue';
import UnityWebgl from 'vue-unity-webgl';
import Spinner from 'vue-simple-spinner';
import TweenExample from '@/components/TweenExample';

var data = {
  isLoading: true,
  targetValue: 100
}

window.firstSceneLoadedCallback = function() {
  console.log('loaded');
  data.isLoading = false;
};

export default {
  name: 'app',
  data() {
    return data
  },
  components: { UnityWebgl, Spinner, TweenExample },
};


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.unity-content {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  z-index: -1;
}

.unity-content canvas {
  width: 100% !important;
  height: 100% !important;
}

.unity-content #unity-container {
  width: 100% !important;
  height: 100% !important;
  background: rgb(0, 0, 0);
}

.unity-content .footer {
  display: none;
}
</style>
