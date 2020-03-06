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
    <h2 :id="this.$options.name" class="text-xl mt-8 mb-4">Border Radius</h2>
    <hr class="mb-4" />
    <div class="font-mono text-gray-700 mb-6">.border-{angle}</div>
    <div class="flex flex-wrap -mx-4 overflow-x-hidden">
      <div
        v-for="(border , idx) in borderRadius"
        :key="idx"
        class="px-4 overflow-x-hidden mb-4 w-1/2 sm:w-1/4 md:w-1/6 xl:w-1/12 xl:flex-grow"
        @click="$emit('toggleDemoClass', border)"
      >
        <div
          class="bg-gray-400 border-red-500 h-8"
          :class="[border.class_prefix == 'rounded' ? 'border-4' : ('border-' + border.className.substr(8, 1) + '-4'), border.className]"
        ></div>
        <div class="class-text text-center">
          <span v-if="!border.class_suffix">&nbsp; (defaut)</span>
          <span v-else>{{ border.class_suffix }} ({{ border.value }})</span>
        </div>
      </div>
    </div>
  </div>
</template>