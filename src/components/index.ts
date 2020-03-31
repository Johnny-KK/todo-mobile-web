// import { VueConstructor } from "vue";

// /** camel转pascal */
// function transCamelToPascal(name: string) {
//   return name
//     .replace(/([A-Z])/g, "-$1")
//     .toLowerCase()
//     .substring(1);
// }

// function registerAllComponents(
//   requireContext: __WebpackModuleApi.RequireContext,
//   Vue: VueConstructor
// ) {
//   return requireContext.keys().forEach(x => {
//     const comp = requireContext(x);

//     console.log(transCamelToPascal(comp.default.name));
//     console.log(comp.default);

//     Vue.component(transCamelToPascal(comp.default.name), comp.default);
//   });
// }

// const ComponentPlugin = {
//   install: (Vue: VueConstructor) => {
//     registerAllComponents(require.context("./", true, /\/Index.vue$/), Vue);
//   }
// };

// export default ComponentPlugin;

// FIXME 找到组件自动化引入BUG

import { VueConstructor } from 'vue';
import GcIcon from './icon/Index.vue';
import GCCard from './card/Index.vue';

const ComponentPlugin = {
  install: (Vue: VueConstructor) => {
    Vue.component('gc-icon', GcIcon);
    Vue.component('gc-card', GCCard);
  }
};

export default ComponentPlugin;
