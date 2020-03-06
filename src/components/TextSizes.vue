<script>
export default {
  name: "textSizes",
  props: {
    textSizes: {
      type: Array
    }
  }
};
</script>

<template>
  <div v-if="textSizes.length">
    <div class="flex justify-between mt-8 mb-4">
      <h2 :id="this.$options.name" class="text-xl">Text Sizes</h2>
    </div>

    <hr class="mb-4" />
    <div class="font-mono text-gray-700 mb-6">.text-{size}</div>

    <div class="flex flex-wrap -mx-4 overflow-x-hidden">
      <div
        v-for="(textSize , idx) in textSizes"
        :key="idx"
        class="px-4 overflow-x-hidden mb-4 w-1/2 sm:w-1/4 md:w-1/6 xl:w-1/12 xl:flex-grow"
        @click="$emit('toggleDemoClass', textSize)"
      >
        <div :class="[textSize.className]" v-text="textSize.class_suffix"></div>
      </div>
    </div>
  </div>
</template>