<script>
export default {
  name: "borderWidths",
  props: {
    borderWidths: {
      type: Array
    }
  }
};
</script>

<template>
  <div v-if="borderWidths.length">
    <h2 :id="this.$options.name" class="text-xl mt-8 mb-4">Border Sizes</h2>
    <hr class="mb-4" />
    <div class="font-mono text-gray-700 mb-6">.border{side}-{size}</div>
    <div class="flex flex-wrap -mx-4">
      <div
        v-for="(borderWidth , idx) in borderWidths"
        :key="idx"
        class="px-4 overflow-x-hidden mb-4 w-1/2 sm:w-1/4 md:w-1/6 xl:w-1/12 xl:flex-grow"
        @click="$emit('toggleDemoClass', borderWidth)"
      >
        <div
          class="bg-gray-400 border-red-500 h-8"
          :class="[borderWidth.className]"
        >
        </div>
          <div class="class-text text-center">
            <span class="text-black">{{ borderWidth.class_suffix }} ({{borderWidth.value}})</span>
          </div>
      </div>
    </div>
  </div>
</template>