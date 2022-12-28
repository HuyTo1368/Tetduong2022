<template>
  <div class="m-content">
    <MButton :text="'Thêm mới nhân viên'" @click="ClickAa"></MButton>
    <MInput></MInput>
    <MCombobox></MCombobox>
  </div>
</template>

<style scoped>
@import url(../../css/layout/content.css);
</style>

<script>
import MButton from "../base/MButton.vue";
import MInput from "../base/MInput.vue";
import MCombobox from "../base/MCombobox.vue"

export default {
  components: {
    MButton, MInput, MCombobox,
  },

  methods: {
    ClickAa() {
      
    },
  },
};
</script>