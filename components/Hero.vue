<template>
  <div class="flex w-full">
    <div class="text-center justify-center self-center w-full">
      <h1
        class="text-center p-5 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-emerald-500"
      >
        domie
      </h1>
      <h3 class="text-center p-2 text-2xl">Dominique van der Knijff</h3>
      <h5 class="text-center text-xl mb-5 font-extralight">
        {{ $t("capabilities") }}
      </h5>
      <div class="flex justify-center">
        <div
          class="py-2 px-4 rounded-xl select-none text-cyan-500 hover:text-white mx-2 w-fit font-bold border-cyan-500 transition-colors hover:cursor-pointer hover:border-emerald-500 hover:bg-emerald-500 border-2"
        >
          {{ $t("get_in_contact_button") }}
        </div>
        <div
          class="py-2 px-4 rounded-xl select-none font-bold text-white mx-2 w-fit bg-cyan-500 hover:bg-emerald-500 transition-colors hover:cursor-pointer"
        >
          {{ $t("learn_more_button") }}
        </div>
      </div>
    </div>
  </div>
</template>
