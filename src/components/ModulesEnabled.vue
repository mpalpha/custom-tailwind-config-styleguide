<script>
export default {
  name: "modulesEnabled",
  props: {
    theme: {
      type: Object
    },
    activeModules: {
      type: Object
    }
  },
  filters: {
    camel2title: camelCase => {
      return typeof camelCase == "string"
        ? camelCase
            .replace(/([A-Z])/g, match => ` ${match}`)
            .replace(/^./, match => match.toUpperCase())
        : "";
    }
  }
};
</script>

<template>
  <div v-if="theme">
    <h2 class="text-xl mt-8 mb-4">Screen Sizes</h2>
    <hr class="mb-4" />
    <div class="flex flex-wrap -mx-4 overflow-x-hidden">
      <span
        class="px-4 overflow-x-hidden px-2 py-1"
        v-for="(value, screen, idx) in theme.screens"
        :key="idx"
      >{{ screen }}: {{value}}</span>
    </div>
    <h2 class="text-xl mt-8 mb-4">Components</h2>
    <hr class="mb-4" />
    <div class="flex flex-wrap -mx-4 overflow-x-hidden">
      <a
        v-for="(value, name) in activeModules"
        :key="name"
        class="px-4 overflow-x-hidden text-blue-600 hover:text-blue-800 hover:underline px-2 py-1"
        :href="(`#${name}`)"
      >{{ name | camel2title }}</a>
    </div>
  </div>
</template>
