<template>
  <nav class="flex justify-center mb-0 sm:mb-24">
    <div
      class="flex justify-between items-center w-full py-0 px-4 section-container"
    >
      <img src="/src/assets/images/logo-white.svg" alt="" />
      <ul class="justify-center items-center my-0 hidden md:flex">
        <li><a href="#">Products</a></li>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Developers</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Pricing</a></li>
      </ul>
      <button class="button bg-darkgray hover:bg-lightgray hidden md:flex">
        Sign In
      </button>
      <div
        class="w-12 h-8 bg-lightgray rounded-2xl flex flex-col justify-center items-center md:hidden"
      >
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
