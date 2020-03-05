 <script>
export default {
  name: "otherWidths",
  props: {
    otherWidths: {
      type: Array
    }
  }
};
</script>

<template>
  <div v-if="otherWidths.length">
    <h2 class="text-xl mt-8 mb-4">Other Widths</h2>
    <hr class="mb-4">
    <div class="font-mono text-gray-700 mb-6">.w-{size}</div>
    <div class="flex flex-wrap overflow-auto">
      <div v-for="(width , idx) in otherWidths" :key="idx" class="pr-4 mb-4 w-1/5">
        <div class="border bg-gray-400 border-gray-500 h-8" :class="[width.className]"></div>
        <div class="class-text">
          <span class="text-black">.{{ width.className }}</span>
          <span class="ml-2 text-gray">({{ width.value }})</span>
        </div>
      </div>
    </div>
  </div>
</template>