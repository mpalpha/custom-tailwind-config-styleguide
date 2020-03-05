<script>
export default {
  name: "shadows",
  props: {
    shadows: {
      type: Array
    }
  }
};
</script>

<template>
  <div v-if="shadows.length">
    <h2 class="text-xl mt-8 mb-4">Shadows</h2>
    <hr class="mb-4"><div class="font-mono text-gray-700 mb-6">.shadow-{size}</div>
    <div class="flex flex-wrap">
      <div
        v-for="(shadow , idx) in shadows"
        :key="idx"
        class="pr-4 mb-4 w-1/2 sm:w-1/4 md:w-1/6"
        @click="$emit('toggleDemoClass', shadow)"
      >
        <div :class="[shadow.className]" style="width: 100px; height: 100px;"></div>
        <div class="class-text text-center" style="width: 100px">
          <span class="text-black">.{{ shadow.className }}</span>
        </div>
      </div>
    </div>
  </div>
</template>