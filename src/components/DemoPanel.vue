<script>
export default {
  name: "demoPanel",
  data: function() {
    var data = {
      demoClasses: []
    };

    return data;
  },
  methods: {
    toggleDemoClass: function(opts) {
      var demoClasses = this.demoClasses.filter(function(checkOpts) {
        return checkOpts.type != opts.type;
      });

      demoClasses.push({
        type: opts.type,
        className: opts.className
      });

      this.demoClasses = demoClasses;
    },
    removeDemoClass: function(opts) {
      for (var i = 0; i < this.demoClasses.length; i++) {
        if (this.demoClasses[i] == opts) {
          this.demoClasses.splice(i, 1);
        }
      }
    }
  },
  filters: {
    formatClasses: function(value) {
      if (!value) return "";
      value = value.toString();
      return "." + value.split(" ").join(" .");
    }
  },
  computed: {
    demoClassString: function() {
      return this.demoClasses
        .map(function(opts) {
          return opts.className;
        })
        .join(" ");
    }
  }
};
</script>

<template>
  <div class="fixed pin-r w-64 mr-8 right-0 shadow-lg" style="background-color:rgba(255,255,255,0.9)">
    <div :class="demoClassString" style="min-height: 100px;">class="{{demoClassString}}"</div>
    <template v-if="demoClasses.length">
      <div
        v-for="(opts , idx) in demoClasses"
        :key="idx"
        class="flex justify-between w-full bg-gray-400er px-2 py-2 text-gray-800"
      >
        <span>.{{ opts.className }}</span>
        <a
          href="#"
          class="no-underline text-gray hover:text-gray-600"
          @click.prevent="removeDemoClass(opts)"
        >X</a>
      </div>
    </template>
    <div v-else class="px-2 py-2 text-gray-800 border-t border-gray-400">Click class names to add here.</div>
  </div>
</template>