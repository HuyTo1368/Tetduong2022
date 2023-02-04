<template>
  <div class="m-combobox">
    <input
      class="m-combobox-input"
      v-model="value"
      placeholder="Chọn phòng ban"
      @click="onClickArrow"
    />
    <div class="m-button-data" @click="onClickArrow">
      <button class="m-combobox-button"></button>
    </div>
    <div class="m-combobox-data" v-if="isShowItem">
      <div
        v-bind:class="[
          'm-combobox-item',
          value == item.name ? 'm-item-selected' : '',
        ]"
        v-for="item in dataCombobox"
        :key="item.id"
        :value="item.id"
        @click="onClickItem(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style>
@import url(../../css/base/combobox.css);
</style>

<script>
import combobox from "../../js/api/combobox";

export default {
  name: "ComboboxComponent",

  data() {
    return {
      value: "",
      itemSelected: {},
      isShowItem: false,
      dataCombobox: combobox.getDepartment("EmployeeList").data,
    };
  },

  watch: {
    itemSelected: function () {
      this.value = this.itemSelected.name;
    },
  },

  methods: {
    /**
     * Mô tả : Mở bảng data combobox
     * Created by: Hà Văn Huy
     * Created date: 11:04 08/01/2023
     */
    onClickArrow(event) {
      this.isShowItem = true;
      console.log(event.target.className);
    },

    /**
     * Mô tả : Chọn value cho combobox
     * Created by: Hà Văn Huy
     * Created date: 11:02 08/01/2023
     */
    onClickItem(item) {
      this.value = item.name;
      // this.itemSelected = item;
      // console.log(e.target.className);
    },
  },
};
</script>