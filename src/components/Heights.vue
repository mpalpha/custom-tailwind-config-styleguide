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
    <h2 class="text-xl mt-8 mb-4">Heights</h2>
    <hr class="mb-4">
    <div class="font-mono text-gray-700 mb-6">.h-{size}</div>
    <div class="flex flex-wrap">
      <div
        v-for="(height , idx) in heights"
        :key="idx"
        class="pr-4 mb-4 w-1/2 sm:w-1/5 md:w-1/6"
        @click="$emit('toggleDemoClass', height)"
      >
        <div class="border bg-gray-400 border-gray-500 w-8" :class="[height.className]"></div>
        <div class="class-text">
          <span class="text-black">.{{ height.className }}</span>
          <span class="ml-2 text-gray">({{ height.value }})</span>
        </div>
      </div>
    </div>
  </div>
</template>