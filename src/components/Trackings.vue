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
    <h2 :id="this.$options.name" class="text-xl mt-8 mb-4">Trackings</h2>
    <hr class="mb-4">
    <div class="font-mono text-gray-700 mb-6">.tracking-{size}</div>
    <div class="flex flex-wrap -mx-4">
      <div
        v-for="(tracking , idx) in trackings"
        :key="idx"
        class="px-4 overflow-x-hidden mb-4 w-full"
        @click="$emit('toggleDemoClass', tracking)"
      >
        <div
          class="mb-1"
          :class="[tracking.className]"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
        <div class="text-gray-700 font-mono">{{ tracking.class_suffix }}</div>
      </div>
    </div>
  </div>
</template>