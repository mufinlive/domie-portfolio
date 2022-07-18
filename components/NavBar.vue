<script setup lang="ts">
let checked = ref(false);
</script>
<template>
  <div class="absolute w-full h-fit flex justify-around py-5">
    <h4 class="font-bold">{{ $t("header_about_me") }}</h4>
    <h4 class="font-bold">{{ $t("header_projects") }}</h4>
    <h4 class="font-bold">{{ $t("header_contact") }}</h4>
    <input
      type="checkbox"
      v-model="checked"
      @input="$i18n.locale = checked ? 'en' : 'nl'"
      id="lang"
      class="appearance-none hidden peer"
    />
    <label
      for="lang"
      class="peer-checked:bg-english-flag bg-dutch-flag bg-no-repeat bg-center w-7 h-7 bg-contain"
    ></label>
  </div>
</template>
