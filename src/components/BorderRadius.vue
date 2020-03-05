<script>
export default {
  name: "borderRadius",
  props: {
    borderRadius: {
      type: Array
    }
  }
};
</script>

<template>
  <div v-if="borderRadius.length">
    <h2 class="text-xl mt-8 mb-8">Border Radius</h2>
    <div class="flex flex-wrap">
      <div
        v-for="(border , idx) in borderRadius"
        :key="idx"
        class="pr-8 mb-4 w-1/2 sm:w-1/4 md:w-1/6 xl:w-1/12"
        @click="$emit('toggleDemoClass', border)"
      >
        <div
          class="bg-gray-400 border-red-500 h-8"
          :class="[border.class_prefix == 'rounded' ? 'border-4' : ('border-' + border.className.substr(8, 1) + '-4'), border.className]"
        ></div>
        <div class="class-text text-center">
          <span class="text-black">.{{ border.className }}</span>
        </div>
      </div>
    </div>
  </div>
</template>