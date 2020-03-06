<script>
export default {
  name: "backgroundColors",
  props: {
    backgroundColors: {
      type: Array
    }
  },
  methods: {
    itemContains(item, n) {
      return item.indexOf(n) > -1;
    },

    splitColors(bg) {
      var arr = {};

      // Loop through array
      [].forEach.call(bg, function(inst) {
        var x = inst.class_suffix.split("-")[0];
        inst.group = x;
        // Check if arr already has an index x, if yes then push
        if (Object.prototype.hasOwnProperty.call(arr, x)) arr[x].push(inst);
        // Or else create a new one with inst as the first element.
        else arr[x] = [inst];
      });
      return arr;
    }
  }
};
</script>

<template>
  <div v-if="backgroundColors.length">
    <div class="flex justify-between mt-8 mb-4">
      <h2 :id="this.$options.name" class="text-xl">Background Colors</h2>
    </div>

    <hr class="mb-4" />
    <div class="font-mono text-gray-700 mb-6">.bg-{color}</div>
    <div
      v-for="(backgrounds, _idx) in splitColors(backgroundColors)"
      :key="_idx"
      class="flex flex-wrap -mx-4 overflow-hidden"
    >
      <div
        v-for="(bg, idx) in backgrounds"
        :key="idx"
        class="px-4 overflow-x-hidden mb-4 w-1/2 sm:w-1/3 xl:w-auto xl:flex-grow"
        :class="[itemContains(bg.className,'100')? 'flex-wrap':'']"
        @click="$emit('toggleDemoClass', bg)"
      >
        <div class="border border-gray-400 w-full h-8" :class="[`${bg.className}`]"></div>
        <div class="">
          <div class="text-black">{{ bg.class_suffix }}</div>
          <div class="text-gray font-mono">{{ bg.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
