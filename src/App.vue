<template>
  <div>
    <demo-header></demo-header>
    <div style="display: flex">
      <demo-aside />
      <router-view />
    </div>
  </div>
</template>

<style></style>
<script>
import demoHeader from "@/components/demoHeader.vue";
import DemoAside from "@/components/demoAside.vue";

export default {
  name: "layout-demo",
  components: {
    DemoAside,
    demoHeader,
  },
};
</script>
