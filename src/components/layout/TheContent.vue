<template>
  <div class="m-content">
    <MButton :text="'Thêm mới nhân viên'" @click="ClickAa"></MButton>
  </div>
</template>

<style scoped>
@import url(../../css/layout/content.css);
</style>

<script>
import MButton from "../base/MButton.vue";

export default {
  components: {
    MButton,
  },

  methods: {
    ClickAa() {
      
    },
  },
};
</script>