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
    <h2 :id="this.$options.name" class="text-xl mt-8 mb-4">Margins</h2>
    <hr class="mb-4" />
    <div class="font-mono text-gray-700 mb-6">.m{direction}-{size} or .-m{direction}-{size}</div>
    <div class="flex flex-wrap -mx-4 overflow-x-hidden">
      <div
        v-for="(margin , idx) in margins"
        :key="idx"
        class="my-4 px-4 w-full overflow-hidden sm:w-1/4 md:w-1/6 self-center text-center self-stretch"
        @click="$emit('toggleDemoClass', margin)"
      >
        <div class="w-full h-full px-4 py-4 border border-gray-200">
          <div class="h-full inline-flex justify-between">
            <div class="inline-flex flex-col flex-grow justify-end">
              <div class="bg-gray-300 inline-flex w-8 mx-auto" style="min-height: 2rem">
                <div
                  class="border border-gray-500 bg-gray-400 text-gray-600 h-8 w-8 pt-4"
                  :class="[margin.class_prefix + 't-' + margin.class_suffix]"
                ></div>
              </div>
              <div class="inline-flex mb-0">
                <span
                  class="w-full text-black"
                >{{ margin.class_prefix + 't-' + margin.class_suffix }} ({{ margin.value }})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>