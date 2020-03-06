 <script>
export default {
  name: "fontWeights",
  props: {
    fontWeights: {
      type: Array
    }
  }
};
</script>

<template>
  <div v-if="fontWeights.length">
    <h2 :id="this.$options.name" class="text-xl mt-8 mb-4">Font Weights</h2>
    <hr class="mb-4" />
    <div class="font-mono text-gray-700 mb-6">.font-{weight}</div>
    <div class="flex flex-wrap -mx-4 overflow-x-hidden">
      <div
        v-for="(fontWeight , idx) in fontWeights"
        :key="idx"
        class="px-4 overflow-x-hidden mb-8 w-full sm:w-1/3"
        @click="$emit('toggleDemoClass', fontWeight)"
      >
        <div
          :class="[fontWeight.className]"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
        <div class="class-text font-mono text-gray-600">{{ fontWeight.class_suffix }}</div>
      </div>
    </div>
  </div>
</template>