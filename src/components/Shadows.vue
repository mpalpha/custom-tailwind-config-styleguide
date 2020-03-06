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
    <h2 :id="this.$options.name" class="text-xl mt-8 mb-4">Shadows</h2>
    <hr class="mb-4" />
    <div class="font-mono text-gray-700 mb-6">.shadow-{type}</div>
    <div class="flex flex-wrap -mx-4 overflow-x-hidden">
      <div
        v-for="(shadow , idx) in shadows"
        :key="idx"
        class="pr-4 mb-1 w-1/2 sm:w-1/4 md:w-1/6"
        @click="$emit('toggleDemoClass', shadow)"
      >
        <div class="px-4 pb-4 overflow-x-hidden text-center">
          <div class="mx-auto my-2 w-16 h-16" :class="[shadow.className]"></div>
          <span v-if="shadow.class_suffix">{{ shadow.class_suffix }}</span>
          <span v-else>(default)</span>
        </div>
      </div>
    </div>
  </div>
</template>