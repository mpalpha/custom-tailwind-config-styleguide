<script>
export default {
  name: "trackings",
  props: {
    trackings: {
      type: Array
    }
  }
};
</script>
<template>
  <div v-if="trackings.length">
    <h2 class="text-xl mt-8 mb-4">Trackings</h2>
    <hr class="mb-4">
    <div class="font-mono text-gray-700 mb-6">.tracking-{size}</div>
    <div class="flex flex-wrap">
      <div
        v-for="(tracking , idx) in trackings"
        :key="idx"
        class="pr-4 mb-4 w-full"
        @click="$emit('toggleDemoClass', tracking)"
      >
        <div
          class="mb-1"
          :class="[tracking.className]"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
        <div class="text-gray-700 font-mono">.{{ tracking.className }}</div>
      </div>
    </div>
  </div>
</template>