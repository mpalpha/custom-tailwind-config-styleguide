<script>
export default {
  name: "textColors",
  props: {
    textColors: {
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
  <div v-if="textColors.length">
    <div class="flex justify-between mt-8 mb-4">
      <h2 :id="this.$options.name" class="text-xl">Text Colors</h2>
    </div>

    <hr class="mb-4" />
    <div class="font-mono text-gray-700 mb-6">.text-{color}</div>

    <div v-for="(colors, _idx) in splitColors(textColors)" :key="_idx" class="flex flex-wrap -mx-4 overflow-x-hidden">
      <div
        v-for="(text , idx) in colors"
        :key="idx"
        class="px-4 overflow-x-hidden mb-4 w-1/2 sm:w-1/3 md:w-2/6 xl:w-auto xl:flex-grow"
        @click="$emit('toggleDemoClass', text)"
      >
        <div class="">
          <div :class="[text.className]" v-text="text.class_suffix" style="text-shadow: 0.035em 0.035em rgba(0,0,0,0.2)"></div>
          <span class="text-gray-400" v-text="text.value"></span>
        </div>
      </div>
    </div>
  </div>
</template>