<script>
export default {
  name: "borderColors",
  props: {
    borderColors: {
      type: Array
    }
  },
  methods: {
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
  <div v-if="borderColors.length">
    <h2 :id="this.$options.name" class="text-xl mt-8 mb-4">Borders Colors</h2>
    <hr class="mb-4" />
    <div class="font-mono text-gray-700 mb-6">.border-{color}</div>
    <div
      v-for="(colors, _idx) in splitColors(borderColors)"
      :key="_idx"
      class="flex flex-wrap -mx-4 overflow-x-hidden"
    >
      <div
        v-for="(border, idx) in colors"
        :key="idx"
        class="px-4 overflow-x-hidden mb-4 w-1/2 sm:w-1/3 md:w-2/6 xl:w-auto xl:flex-grow"
        @click="$emit('toggleDemoClass', border)"
      >
        <div class="bg-gray-400 border-4 h-8" :class="[border.className]"></div>
        <div class="">
          <span class="text-black">{{ border.class_suffix }}</span>
        </div>
      </div>
    </div>
  </div>
</template>