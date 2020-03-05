<script>
export default {
  name: "borderColors",
  props: {
    borderColors: {
      type: Array
    }
  }
};
</script>

var TailwindModules = Vue.component('tw-modules', {
    props: ['config', 'module'],
    template: `
        <div>
            <span v-for="(value, screen) in config.screens" class="bg-gray-400 text-gray-600 px-2 py-1 mr-2">
                {{ screen }}:
            </span>
            <template v-for="module in config.modules[module]">
  <span v-if="module != 'responsive'" class="bg-gray-400 text-gray-600 px-2 py-1 mr-2">{{ module }}:</span>
</template>
        </div>
    `
});