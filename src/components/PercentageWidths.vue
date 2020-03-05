<script>
export default {
  name: "percentageWidths",
  props: {
    percentageWidths: {
      type: Array
    }
  },
  filters: {
    formatPercent: function(value) {
      if (!value) return "";
      return parseFloat(parseFloat(value).toFixed(2)) + "%";
    }
  }
};
</script>
        
<template>
  <div v-if="percentageWidths.length">
    <h2 class="text-xl mt-8 mb-8">Widths</h2>
    <h3 class="mb-4">Percentage Based</h3>
    <hr class="mb-4"><div class="font-mono text-gray-700 mb-6">.w-{size}</div>
    <div v-for="(width , idx) in percentageWidths" :key="idx" class="flex mb-4 overflow-auto">
      <div
        v-for="(col , _idx) in width.cols"
        :key="_idx"
        class="pr-2 mb-4"
        :class="[width.className]"
      >
        <div class="border bg-gray-400 border-gray-500 h-8"></div>
        <div class="class-text">
          <span class="text-black">.{{ width.className }}</span>
          <span class="ml-2 text-gray">({{ width.value | formatPercent }})</span>
        </div>
      </div>
    </div>
  </div>
</template>