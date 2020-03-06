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
  <div v-if="percentageWidths.length" class="overflow-x-hidden">
    <h2 :id="this.$options.name" class="text-xl mt-8 mb-8">Widths</h2>
    <h3 class="mb-4">Percentage Based</h3>
    <hr class="mb-4" />
    <div class="font-mono text-gray-700 mb-6">.w-{size}</div>
    <div v-for="(width , idx) in percentageWidths" :key="idx" class="flex -mx-4 overflow-auto">
      <div
        v-for="(col , _idx) in width.cols"
        :key="_idx"
        class="px-4 overflow-x-hidden mb-4"
        :class="[width.className]"
      >
        <div class="bg-gray-400 h-8"></div>
        <div class="class-text">
          <span>{{ width.class_suffix }} ({{ width.value | formatPercent }})</span>
        </div>
      </div>
    </div>
  </div>
</template>