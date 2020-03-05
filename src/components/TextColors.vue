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
      <h2 class="text-xl">Text Colors</h2>
    </div>

    <hr class="mb-4" />
    <div class="font-mono text-gray-700 mb-6">.text-{size}</div>

    <div v-for="(colors, _idx) in splitColors(textColors)" :key="_idx" class="flex flex-wrap">
      <div
        v-for="(text , idx) in colors"
        :key="idx"
        class="pr-8 mb-4 w-1/2 sm:w-1/4 md:w-1/6 xl:w-1/12"
        @click="$emit('toggleDemoClass', text)"
      >
        <div :class="[text.className]" v-text="'.'+text.className"></div>
        <span class="text-gray-400" v-text="text.value"></span>
      </div>
    </div>
  </div>
</template>