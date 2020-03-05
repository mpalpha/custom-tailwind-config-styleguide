<script>
export default {
  name: "margins",
  props: {
    margins: {
      type: Array
    }
  }
};
</script>

<template>
  <div v-if="margins.length">
    <h2 class="text-xl mt-8 mb-4">Margins</h2>
    <hr class="mb-4"><div class="font-mono text-gray-700 mb-6">.m{side}-{size} or .-m{side}-{size}</div>
    <div class="flex flex-wrap overflow-auto">
      <div
        v-for="(margin , idx) in margins"
        :key="idx"
        class="pr-4 mb-4 w-1/2 sm:w-1/4 md:w-1/6 self-center"
        @click="$emit('toggleDemoClass', margin)"
      >
        <div class="border border-gray-500 bg-gray-400 inline-flex justify-center">
          <div
            class="bg-gray-500 text-gray-600 h-16 w-16"
            :class="[margin.className]"
          ></div>
        </div>
        <div class="class-text text-center">
          <span class="text-black">.{{ margin.className }} ({{ margin.value }})</span>
        </div>
      </div>
    </div>
  </div>
</template>