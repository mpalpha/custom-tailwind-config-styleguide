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
  <div v-if="otherWidths.length" class="overflow-x-hidden">
    <h2 :id="this.$options.name" class="text-xl mt-8 mb-4">Other Widths</h2>
    <hr class="mb-4">
    <div class="font-mono text-gray-700 mb-6">.w-{size}</div>
    <div class="flex flex-wrap -mx-4 overflow-x-hidden">
      <div v-for="(width , idx) in otherWidths" :key="idx" class="px-4 overflow-x-hidden mb-4 w-auto max-w-full">
        <div class="bg-gray-400 h-8" :class="[width.className]"></div>
        <div>
          <span>{{ width.class_suffix }} ({{ width.value }})</span>
        </div>
      </div>
    </div>
  </div>
</template>