<script>
export default {
  name: "heights",
  props: {
    heights: {
      type: Array
    }
  }
};
</script>

<template>
  <div v-if="heights.length">
    <h2 :id="this.$options.name" class="text-xl mt-8 mb-4">Heights</h2>
    <hr class="mb-4">
    <div class="font-mono text-gray-700 mb-6">.h-{size}</div>
    <div class="flex flex-wrap -mx-4 overflow-x-hidden">
      <div
        v-for="(height , idx) in heights"
        :key="idx"
        class="px-4 overflow-x-hidden mb-4 w-1/2 sm:w-1/3 xl:w-1/6 xl:1/12 flex flex-col justify-end items-stretch"
        style="max-height: 22rem; min-height: 2rem"
      >
        <div class="border bg-gray-400 border-gray-500 w-8 inline-flex" :class="[height.className]" ></div>
        <div class="inline-flex">
          <span>{{ height.class_suffix }} ({{ height.value }})</span>
        </div>
      </div>
    </div>
  </div>
</template>