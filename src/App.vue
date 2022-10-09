<template>
  <div>
    <main-nav />
    <hero-section />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import HeroSection from "@/components/HeroSection.vue";
export default {
  name: "App",
  components: {
    MainNav,
    HeroSection,
  },
};
</script>
