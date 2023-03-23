<template>
  <div>
    <demo-header></demo-header>
    <div style="display: flex">
      <demo-aside />
      <router-view />
    </div>
  </div>
</template>

<script>
import DemoHeader from "@/components/demoHeader.vue";
import DemoAside from "@/components/demoAside.vue";

export default {
  name: "demoLayout",
  components: { DemoAside, DemoHeader },
};
</script>

<style scoped></style>
