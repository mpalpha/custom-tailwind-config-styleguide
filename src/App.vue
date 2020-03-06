<template>
  <div id="app">
    <div class="container mx-auto overflow-x-hidden">
      <demoPanel ref="demoPanel"></demoPanel>
      <h1 class="text-3xl">Tailwind Style Guide v{{ this.package.version }}</h1>
      <modulesEnabled :config="config" :theme="theme" :activeModules="activeModules"></modulesEnabled>
      <backgroundColors :backgroundColors="backgroundColors" @toggleDemoClass="toggleDemoClass"></backgroundColors>
      <textColors :textColors="textColors" @toggleDemoClass="toggleDemoClass"></textColors>
      <textSizes :textSizes="textSizes" @toggleDemoClass="toggleDemoClass"></textSizes>
      <fontWeights :fontWeights="fontWeights" @toggleDemoClass="toggleDemoClass"></fontWeights>
      <paddings :paddings="paddings" @toggleDemoClass="toggleDemoClass"></paddings>
      <margins :margins="margins" @toggleDemoClass="toggleDemoClass"></margins>
      <leadings :leadings="leadings" @toggleDemoClass="toggleDemoClass"></leadings>
      <trackings :trackings="trackings" @toggleDemoClass="toggleDemoClass"></trackings>
      <borderWidths :borderWidths="borderWidths" @toggleDemoClass="toggleDemoClass"></borderWidths>
      <borderColors :borderColors="borderColors" @toggleDemoClass="toggleDemoClass"></borderColors>
      <borderRadius :borderRadius="borderRadius" @toggleDemoClass="toggleDemoClass"></borderRadius>
      <percentageWidths :percentageWidths="percentageWidths"></percentageWidths>
      <otherWidths :otherWidths="otherWidths"></otherWidths>
      <heights :heights="heights" @toggleDemoClass="toggleDemoClass"></heights>
      <opacities :opacities="opacities" @toggleDemoClass="toggleDemoClass"></opacities>
      <shadows :shadows="shadows" @toggleDemoClass="toggleDemoClass"></shadows>
    </div>
  </div>
</template>

<script>
import BackgroundColors from "./components/BackgroundColors.vue";
import BorderColors from "./components/BorderColors.vue";
import BorderRadius from "./components/BorderRadius.vue";
import BorderWidths from "./components/BorderWidths.vue";
import FontWeights from "./components/FontWeights.vue";
import Heights from "./components/Heights.vue";
import Leadings from "./components/Leadings.vue";
import Margins from "./components/Margins.vue";
import Opacities from "./components/Opacities.vue";
import OtherWidths from "./components/OtherWidths.vue";
import Paddings from "./components/Paddings.vue";
import PercentageWidths from "./components/PercentageWidths.vue";
import Shadows from "./components/Shadows.vue";
import TextColors from "./components/TextColors.vue";
import TextSizes from "./components/TextSizes.vue";
import Trackings from "./components/Trackings.vue";
import DemoPanel from "./components/DemoPanel.vue";
import ModulesEnabled from "./components/ModulesEnabled.vue";

import resolveConfig from "tailwindcss/resolveConfig";
import pkg from "../package.json";

export default {
  name: "App",
  components: {
    backgroundColors: BackgroundColors,
    borderWidths: BorderWidths,
    borderColors: BorderColors,
    borderRadius: BorderRadius,
    fontWeights: FontWeights,
    heights: Heights,
    leadings: Leadings,
    margins: Margins,
    opacities: Opacities,
    otherWidths: OtherWidths,
    paddings: Paddings,
    percentageWidths: PercentageWidths,
    shadows: Shadows,
    textColors: TextColors,
    textSizes: TextSizes,
    trackings: Trackings,
    demoPanel: DemoPanel,
    modulesEnabled: ModulesEnabled
  },

  data: function() {
    var data = {
      package: pkg,
      config: {},
      theme: {}
    };

    return data;
  },

  mounted: function() {
    let tailwindConfig = resolveConfig(require("../tailwind.config"));
    this.config = tailwindConfig;

    let tailwindTheme = tailwindConfig.theme;

    // tailwind migration to v1.2.0
    this.theme = {
      ...this.config.theme,
      ...{
        backgroundColors: this.flattenObject(tailwindTheme.colors),
        borderColors: this.flattenObject(tailwindTheme.colors),
        textColors: this.flattenObject(tailwindTheme.colors),
        textSizes: tailwindTheme.fontSize,
        borderWidths: tailwindTheme.borderWidth,
        fontWeights: tailwindTheme.fontWeight,
        margins: tailwindTheme.margin,
        paddings: tailwindTheme.padding,
        opacities: tailwindTheme.opacity,
        tracking: tailwindTheme.letterSpacing,
        shadows: tailwindTheme.boxShadow,
        width: tailwindTheme.width,
        height: tailwindTheme.height,
        leading: tailwindTheme.lineHeight
      }
    };
  },
  methods: {
    flattenObject: (obj, sep = "-") =>
      Object.assign(
        {},
        ...(function _flatten(o, p = "") {
          return [].concat(
            ...Object.keys(o)
              .filter(k => k.toLowerCase() !== "transparent")
              .map(k =>
                typeof o[k] === "object"
                  ? _flatten(o[k], k + sep)
                  : {
                      [(p + k).replace(sep + "default", "")]: o[k]
                        .replace(" ", "")
                        .toLowerCase()
                    }
              )
          );
        })(obj)
      ),

    getClasses: function(type, pre) {
      if (!this.theme[type]) {
        return [];
      }

      var classes = [];
      var configClasses = this.theme[type];

      for (var classSuffix in configClasses) {
        var value = configClasses[classSuffix];
        var prefix = pre.replace("--", "-");
        classSuffix = classSuffix == "default" ? "" : classSuffix;
        if (type == "margin" && value.match(/^(-) ?/)) {
          classSuffix = classSuffix.substr(1);
          prefix = "-" + prefix;
        }

        classes.push({
          type: type,
          value: value,
          class_prefix: prefix,
          class_suffix: classSuffix,
          numeric_value: parseFloat(value),
          className:
            (value.toString().length &&
              [prefix, classSuffix].filter(e => e).join("-")) ||
            prefix
        });
      }
      return classes;
    },

    chunk: function(array, number) {
      var i,
        j,
        temparray = [],
        chunk = number;
      for (i = 0, j = array.length; i < j; i += chunk) {
        temparray.push(array.slice(i, i + chunk));
      }

      return temparray;
    },

    toggleDemoClass: function(opts) {
      this.$refs.demoPanel.toggleDemoClass(opts);
    }
  },

  computed: {
    activeModules: function() {
      return Object.fromEntries(
        Object.entries(this.$options.components).filter(
          ([key, value]) =>
            !!value.props && key == Object.getOwnPropertyNames(value.props)[0]
        )
      );
    },

    borderWidths: function() {
      return this.getClasses("borderWidths", "border");
      // .concat(this.getClasses('borderWidths', 'border-l'))
      // .concat(this.getClasses('borderWidths', 'border-r'))
      // .concat(this.getClasses('borderWidths', 'border-t'))
      // .concat(this.getClasses('borderWidths', 'border-b'));
    },

    borderColors: function() {
      return this.getClasses("borderColors", "border");
    },

    backgroundColors: function() {
      return this.getClasses("backgroundColors", "bg");
    },

    textColors: function() {
      return this.getClasses("textColors", "text");
    },

    textSizes: function() {
      return this.getClasses("textSizes", "text");
    },

    fontWeights: function() {
      return this.getClasses("fontWeights", "font");
    },

    leadings: function() {
      return this.getClasses("leading", "leading");
    },

    trackings: function() {
      return this.getClasses("tracking", "tracking");
    },

    shadows: function() {
      return this.getClasses("shadows", "shadow");
    },

    borderRadius: function() {
      return this.getClasses("borderRadius", "rounded");
      // .concat(this.getClasses('borderRadius', 'rounded-l'))
      // .concat(this.getClasses('borderRadius', 'rounded-r'))
      // .concat(this.getClasses('borderRadius', 'rounded-t'))
      // .concat(this.getClasses('borderRadius', 'rounded-b'));
    },

    heights: function() {
      return this.getClasses("height", "h");
    },

    percentageWidths: function() {
      return this.getClasses("width", "w")
        .filter(function(width) {
          return typeof width.value === "string" && width.value.match(/%/)
            ? true
            : false;
        })
        .map(function(width) {
          var max = parseInt(100 / width.numeric_value, 10);
          if (max < 1) {
            max = 1;
          }

          width.cols = max;

          return width;
        });
    },

    otherWidths: function() {
      return this.getClasses("width", "w").filter(function(width) {
        return typeof width.value === "string" && width.value.match(/%/)
          ? false
          : true;
      });
    },

    paddings: function() {
      return this.getClasses("padding", "p");
      // .concat(this.getClasses('padding', 'px'))
      // .concat(this.getClasses('padding', 'py'));
    },

    margins: function() {
      return this.getClasses("margin", "m");
      // .concat(this.getClasses('margin', 'mx'))
      // .concat(this.getClasses('margin', 'my'));
    },

    opacities: function() {
      return this.getClasses("opacity", "opacity");
    }
  }
};
</script>

<style>
#app {
  /* app styles */
}
</style>
