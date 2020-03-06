<script>
export default {
  name: "leadings",
  props: {
    leadings: {
      type: Array
    }
  }
};
</script>

<template>
  <div v-if="leadings.length">
    <h2 :id="this.$options.name" class="text-xl mt-8 mb-4">Leadings</h2>
    <hr class="mb-4"><div class="font-mono text-gray-700 mb-6">.leading-{size}</div>
    <div class="flex flex-wrap -mx-4 overflow-x-hidden">
      <div
        v-for="(leading , idx) in leadings"
        :key="idx"
        class="px-4 overflow-x-hidden mb-4 w-full sm:w-1/2 md:w-1/5"
        @click="$emit('toggleDemoClass', leading)"
      >
        <div
          :class="[leading.className]"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
        <div class="class-text text-gray-700 font-mono">{{ leading.class_suffix }} ({{leading.value}})</div>
      </div>
    </div>
  </div>
</template>