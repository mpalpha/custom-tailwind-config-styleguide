 <script>
export default {
  name: "paddings",
  props: {
    paddings: {
      type: Array
    }
  }
};
</script>

<template>
  <div v-if="paddings.length">
    <h2 class="text-xl mt-8 mb-4">Paddings</h2>
    <hr class="mb-4"><div class="font-mono text-gray-700 mb-6">.p{side}-{size}</div>
    <div class="flex flex-wrap overflow-auto">
      <div
        v-for="(padding , idx) in paddings"
        :key="idx"
        class="ml-0 pr-8 mb-4 w-1/2 sm:w-1/4 md:w-1/6"
        @click="$emit('toggleDemoClass', padding)"
      >
        <div
          class="border bg-gray-400 text-gray-600 border-gray-500 h-16 w-16"
          :class="[padding.className]"
        >
          <div class="bg-gray-500 h-full"></div>
        </div>
        <div class="class-text text-center" style="width: 100px">
          <span class="text-black">.{{ padding.className }} ({{ padding.value }})</span>
        </div>
      </div>
    </div>
  </div>
</template>