<template>
  <div>
    <main-nav />
    <hero-section />
  </div>
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
import HeroSection from "@/components/JobSearch/HeroSection.vue";
export default {
  name: "App",
  components: {
    MainNav,
    HeroSection,
  },
};
</script>
