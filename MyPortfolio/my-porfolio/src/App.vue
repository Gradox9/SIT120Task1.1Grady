<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/portfolio">Portfolio</router-link>
    <router-link to="/about">About Me</router-link>
    <router-link to="/contact">Contact Me</router-link>
  </div>
  <div class="container">
    <router-view />
  </div>
</template>
