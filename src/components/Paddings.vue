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
    <h2 :id="this.$options.name" class="text-xl mt-8 mb-4">Paddings</h2>
    <hr class="mb-4" />
    <div class="font-mono text-gray-700 mb-6">.p{direction}-{size}</div>
    <div class="flex flex-wrap -mx-4 overflow-x-hidden">
      <div
        v-for="(padding , idx) in paddings"
        :key="idx"
        class="my-4 px-4 w-full overflow-hidden sm:w-1/4 md:w-1/6 self-center text-center self-stretch"
        @click="$emit('toggleDemoClass', padding)"
      >
        <div class="flex flex-col content-between w-full h-full p-4 border border-gray-200">
          <div
            class="bg-gray-300 w-8 mx-auto mb-auto"
            :class="[padding.class_prefix + 't-' + padding.class_suffix]"
          >
            <div class="border border-gray-500 bg-gray-400 h-full" style="min-height:2rem"></div>
          </div>
          <div class="mb-0">
            <span
            >{{padding.class_prefix + 't-' + padding.class_suffix }} ({{ padding.value }})</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>