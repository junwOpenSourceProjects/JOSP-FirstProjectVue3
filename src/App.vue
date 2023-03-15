<template>
  <nav>home</nav>
  <div>
    <demo-header></demo-header>
  </div>
  <router-view />
</template>

<style></style>
<script>
import demoHeader from "@/components/demoHeader.vue";

export default {
  name: "layout-demo",
  components: {
    demoHeader,
  },
};
</script>
