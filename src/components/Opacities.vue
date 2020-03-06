 <script>
export default {
  name: "opacities",
  props: {
    opacities: {
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
  <div v-if="opacities.length">
    <h2 :id="this.$options.name" class="text-xl mt-8 mb-4">Opacities</h2>
    <hr class="mb-4" />
    <div class="font-mono text-gray-700 mb-6">.opacity-{percentage}</div>
    <div class="flex flex-wrap -mx-4 overflow-x-hidden">
      <div
        v-for="(opacity , idx) in opacities"
        :key="idx"
        class="px-4 overflow-x-hidden pb-4 w-1/2 sm:w-1/4 md:w-1/6"
        @click="$emit('toggleDemoClass', opacity)"
      >
        <div class="text-center">
          <div class="mx-auto border border-gray-400 w-16 h-16">
            <div class="bg-black w-16 h-16" :class="[opacity.className]"></div>
          </div>
          <span>{{ opacity.class_suffix }} ({{ opacity.value | formatPercent }})</span>
        </div>
      </div>
    </div>
  </div>
</template>