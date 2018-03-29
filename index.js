import NumberInput from './components/number-input/index.vue';
import SearchInput from './components/search-input/index.vue';
import Iicon from './components/i-icon/index.vue';

const components = {
  NumberInput,
  SearchInput,
  Iicon,
};

// extend iview
const extend = function(iview){
  iview = {
    ...iview,
    ...components,
  };
  // override iview install method
  const _install = iview.install;
  iview.install = function(Vue, opts = {}){
    _install(Vue, opts = {});
    // install extended components
    Object.keys(components).forEach(key => {
      Vue.component(key, components[key]);
    });
  };
  return iview;
};

export default {
  ...components,
  extend,
};