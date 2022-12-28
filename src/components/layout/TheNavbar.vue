<template >
  <div class="m-navbar">
    <div class="m-logo-container">
      <div class="m-logo-option"></div>
      <div href="" class="m-logo-amis">
        <img
          src="../../assets/img/Logo_Module_TiengViet_White.66947422.svg"
          alt=""
          class="m-img-icon"
        />
      </div>
    </div>

    <div class="m-menu-tooltip">
      <router-link
        class="m-con-tooltip"
        v-for="tooltip in listTool"
        :key="tooltip.name"
      >
        <div class="m-tooltip-content">
          <div class="item-icon">
            <div :class="['ms-icon', tooltip.style]"></div>
          </div>
          <div class="item-title">{{ tooltip.name }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style>
@import url(../../css/layout/layout.css);
</style>

<script>
import MenuNavbar from "@/js/layout/menu";

export default {
  data() {
    return {
      listTool: MenuNavbar,
    };
  },
};
</script>