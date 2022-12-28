<template>
    <div>
        <button class="m-btn">
            {{ text }}
        </button>
    </div>
</template>

<style>
@import url(../../css/base/button.css);
</style>

<script>
export default {
    name: "MButton",
    props: {
        text: String,

    }
}
</script>