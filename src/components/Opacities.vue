 <script>
export default {
  name: "opacities",
  props: {
    opacities: {
      type: Array
    }
  }
};
</script>

<template>
  <div v-if="opacities.length">
    <h2 class="text-xl mt-8 mb-4">Opacities</h2>
    <hr class="mb-4">
    <div class="font-mono text-gray-700 mb-6">.opacity-{size}</div>
    <div class="flex flex-wrap">
      <div
        v-for="(opacity , idx) in opacities"
        :key="idx"
        class="pr-4 mb-4 w-1/2 sm:w-1/4 md:w-1/6"
        @click="$emit('toggleDemoClass', opacity)"
      >
        <div class="border border-gray-400" style="width: 100px; height: 100px;">
          <div class="bg-black h-full" :class="[opacity.className]"></div>
          <div class="class-text text-center" style="width: 100px">
            <span class="text-black">.{{ opacity.className }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>