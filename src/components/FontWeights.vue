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
    <h2 class="text-xl mt-8 mb-4">Font Weights</h2>
    <hr class="mb-4" />
    <div class="flex flex-wrap">
      <div
        v-for="(fontWeight , idx) in fontWeights"
        :key="idx"
        class="pr-4 mb-8 w-full sm:w-1/3"
        @click="$emit('toggleDemoClass', fontWeight)"
      >
        <div
          :class="[fontWeight.className]"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
        <div class="class-text font-mono text-gray-600">.{{ fontWeight.className }}</div>
      </div>
    </div>
  </div>
</template>