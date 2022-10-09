<template>
  <main>
    <section class="flex-col h-screen pt-10 pb-20 bg-yellow-200">
      <div class="grid grid-cols-12">
        <!-- 1, 5, 5, 1 -->
        <div class="col-start-1 col-span-1 border border-blue-700">
          1 column
        </div>
        <div class="col-strat-2 col-span-5 border border-blue-700">
          <headline-section />
        </div>
        <div class="col-strat-7 col-span-5 border border-blue-700">
          5 columns
        </div>
        <div class="col-strat-12 col-span-1 border border-blue-700">
          1 column
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import HeadlineSection from "@/components/HeadlineSection.vue";

export default {
  name: "HeroSection",
  components: {
    HeadlineSection,
  },
};
</script>
