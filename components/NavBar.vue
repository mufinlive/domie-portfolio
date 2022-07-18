<template>
  <div class="absolute w-full h-fit flex justify-around py-5">
    <h4 class="font-bold">{{ $t("header_about_me") }}</h4>
    <h4 class="font-bold">{{ $t("header_projects") }}</h4>
    <h4 class="font-bold">{{ $t("header_contact") }}</h4>
    <input
      type="checkbox"
      @click="$i18n.locale = $i18n.locale === 'nl' ? 'en' : 'nl'"
      class="rounded-full border-2 bg-gradient-to-r from-blue-500 to-green-500 checked:from-yellow-500 checked:to-red-500 transition-colors ease-linear border-slate-600 w-6 h-6 appearance-none"
    />
  </div>
</template>
