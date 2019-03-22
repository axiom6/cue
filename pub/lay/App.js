//
//
//
//
//

var script = {};

function normalizeComponent(compiledTemplate, injectStyle, defaultExport, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, isShadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof isShadowMode === 'function') {
        createInjectorSSR = createInjector;
        createInjector = isShadowMode;
        isShadowMode = false;
    }
    // Vue.extend constructor export interop
    const options = typeof defaultExport === 'function' ? defaultExport.options : defaultExport;
    // render functions
    if (compiledTemplate && compiledTemplate.render) {
        options.render = compiledTemplate.render;
        options.staticRenderFns = compiledTemplate.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (injectStyle) {
                injectStyle.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (injectStyle) {
        hook = isShadowMode
            ? function () {
                injectStyle.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
            }
            : function (context) {
                injectStyle.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return defaultExport;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
const HEAD = document.head || document.getElementsByTagName('head')[0];
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script.__file = "/Users/ax/Documents/prj/cue/app/lay/vue/logo.vue";

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm._m(0)
};
var __vue_staticRenderFns__ = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "logo" }, [
      _c("img", { attrs: { src: "logo.png", alt: "logo" } })
    ])
  }
];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-72299acd_0", { source: "\n.logo { position:absolute; left:0; top:0; width:140px; height:50px; background-color:black;\n}\n.logo img { width:140px; height:50px;\n}\n", map: {"version":3,"sources":["/Users/ax/Documents/prj/cue/app/lay/vue/logo.vue"],"names":[],"mappings":";AAUA,QAAA,iBAAA,EAAA,MAAA,EAAA,KAAA,EAAA,WAAA,EAAA,WAAA,EAAA,sBAAA;AAAA;AACA,YAAA,WAAA,EAAA,WAAA;AAAA","file":"logo.vue","sourcesContent":["\n<template>\n  <div class=\"logo\"><img src=\"logo.png\" alt=\"logo\"/></div>\n</template>\n\n<script type=\"module\">\n  export default {}\n</script>\n\n<style>\n  .logo { position:absolute; left:0; top:0; width:140px; height:50px; background-color:black; }\n  .logo img { width:140px; height:50px; }\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var logo = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    createInjector,
    undefined
  );

//
//
//
//
//

var script$1 = {};

/* script */
const __vue_script__$1 = script$1;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$1.__file = "/Users/ax/Documents/prj/cue/app/lay/vue/navb.vue";

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "navb" })
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-ec4ff472_0", { source: "\n.navb { position:absolute; left:140px; top:0;  right:50px; height:50px; background-color:darkgrey;\n}\n", map: {"version":3,"sources":["/Users/ax/Documents/prj/cue/app/lay/vue/navb.vue"],"names":[],"mappings":";AAUA,QAAA,iBAAA,EAAA,UAAA,EAAA,KAAA,GAAA,UAAA,EAAA,WAAA,EAAA,yBAAA;AAAA","file":"navb.vue","sourcesContent":["\n<template>\n  <div class=\"navb\"></div>\n</template>\n\n<script type=\"module\">\n  export default {}\n</script>\n\n<style>\n  .navb { position:absolute; left:140px; top:0;  right:50px; height:50px; background-color:darkgrey; }\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  

  
  var navb = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    createInjector,
    undefined
  );

//
//
//
//
//

var script$2 = {};

/* script */
const __vue_script__$2 = script$2;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$2.__file = "/Users/ax/Documents/prj/cue/app/lay/vue/find.vue";

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "find" })
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-369f9357_0", { source: "\n.find { position:absolute; right:0; top:0; width:50px; height:50px; background-color:black;\n}\n", map: {"version":3,"sources":["/Users/ax/Documents/prj/cue/app/lay/vue/find.vue"],"names":[],"mappings":";AAUA,QAAA,iBAAA,EAAA,OAAA,EAAA,KAAA,EAAA,UAAA,EAAA,WAAA,EAAA,sBAAA;AAAA","file":"find.vue","sourcesContent":["\n<template>\n  <div class=\"find\"></div>\n</template>\n\n<script type=\"module\">\n  export default {}\n</script>\n\n<style>\n  .find { position:absolute; right:0; top:0; width:50px; height:50px; background-color:black; }\n</style>"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  

  
  var find = normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    createInjector,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$3 = {
  methods: {
    doSelect: function (select) {
      console.log( 'tocs.vue', select );
      this.publish("Select", select ); }
  },
};

/* script */
const __vue_script__$3 = script$3;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$3.__file = "/Users/ax/Documents/prj/cue/app/lay/vue/tocs.vue";

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "tocs" }, [
    _c("ul", [
      _c(
        "li",
        {
          on: {
            click: function($event) {
              _vm.doSelect("Collaborate");
            }
          }
        },
        [_vm._v("Collaborate")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          on: {
            click: function($event) {
              _vm.doSelect("Domain");
            }
          }
        },
        [_vm._v("Domain")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          on: {
            click: function($event) {
              _vm.doSelect("Discover");
            }
          }
        },
        [_vm._v("Discover")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          on: {
            click: function($event) {
              _vm.doSelect("Adapt");
            }
          }
        },
        [_vm._v("Adapt")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          on: {
            click: function($event) {
              _vm.doSelect("Technology");
            }
          }
        },
        [_vm._v("Technology")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          on: {
            click: function($event) {
              _vm.doSelect("Benefit");
            }
          }
        },
        [_vm._v("Benefit")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          on: {
            click: function($event) {
              _vm.doSelect("Change");
            }
          }
        },
        [_vm._v("Change")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          on: {
            click: function($event) {
              _vm.doSelect("Deliver");
            }
          }
        },
        [_vm._v("Deliver")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          on: {
            click: function($event) {
              _vm.doSelect("Govern");
            }
          }
        },
        [_vm._v("Govern")]
      ),
      _vm._v(" "),
      _c(
        "li",
        {
          on: {
            click: function($event) {
              _vm.doSelect("View");
            }
          }
        },
        [_vm._v("View")]
      )
    ])
  ])
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-20699668_0", { source: "\n.tocs             { position:absolute; left:0; top:50px; width:140px; bottom:50px; background-color:darkgrey;\n}\n.tocs ul          { margin:0; padding:0; list-style: none;\n}\n.tocs ul li       { margin:0; background-color:black; color:white; border:white solid 1px; padding-left:0.25em;\n}\n.tocs ul li:hover { margin:0; background-color:white; color:black; border:white solid 1px;\n}\n", map: {"version":3,"sources":["/Users/ax/Documents/prj/cue/app/lay/vue/tocs.vue"],"names":[],"mappings":";AA6BA,oBAAA,iBAAA,EAAA,MAAA,EAAA,QAAA,EAAA,WAAA,EAAA,WAAA,EAAA,yBAAA;AAAA;AACA,oBAAA,QAAA,EAAA,SAAA,EAAA,gBAAA;AAAA;AACA,oBAAA,QAAA,EAAA,sBAAA,EAAA,WAAA,EAAA,sBAAA,EAAA,mBAAA;AAAA;AACA,oBAAA,QAAA,EAAA,sBAAA,EAAA,WAAA,EAAA,sBAAA;AAAA","file":"tocs.vue","sourcesContent":["\n<template>\n  <div class=\"tocs\">\n    <ul>\n      <li @click=\"doSelect('Collaborate')\">Collaborate</li>\n      <li @click=\"doSelect('Domain')\"    >Domain</li>\n      <li @click=\"doSelect('Discover')\"  >Discover</li>\n      <li @click=\"doSelect('Adapt')\"     >Adapt</li>\n      <li @click=\"doSelect('Technology')\">Technology</li>\n      <li @click=\"doSelect('Benefit')\"   >Benefit</li>\n      <li @click=\"doSelect('Change')\"    >Change</li>\n      <li @click=\"doSelect('Deliver')\"   >Deliver</li>\n      <li @click=\"doSelect('Govern')\"    >Govern</li>\n      <li @click=\"doSelect('View')\"      >View</li>\n    </ul>\n  </div>\n</template>\n\n<script type=\"module\">\n  export default {\n    methods: {\n      doSelect: function (select) {\n        console.log( 'tocs.vue', select );\n        this.publish(\"Select\", select ); }\n    },\n  }\n</script>\n\n<style>\n  .tocs             { position:absolute; left:0; top:50px; width:140px; bottom:50px; background-color:darkgrey;  }\n  .tocs ul          { margin:0; padding:0; list-style: none; }\n  .tocs ul li       { margin:0; background-color:black; color:white; border:white solid 1px; padding-left:0.25em; }\n  .tocs ul li:hover { margin:0; background-color:white; color:black; border:white solid 1px; }\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject SSR */
  

  
  var tocs = normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    createInjector,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$4 = {
  data() { return { sel:"View" } },
  methods: {
    onSelect: function (select) {
      this.sel =  select;
      console.log( 'view.vue', select ); } },
  mounted: function () {
    console.log( 'view.vue', 'mounted' );
    this.subscribe( 'Select', 'view.vue', (select) => this.onSelect(select) ); }, // Main.stream.
  computed: {
    Collab()     { return this.sel === "View" || this.sel === "Collaborate" },
    Domain()     { return this.sel === "View" || this.sel === "Domain"      },
    Discover()   { return this.sel === "View" || this.sel === "Discover"    },
    Adapt()      { return this.sel === "View" || this.sel === "Adapt"       },
    Technology() { return this.sel === "View" || this.sel === "Technology"  },
    Benefit()    { return this.sel === "View" || this.sel === "Benefit"     },
    Change()     { return this.sel === "View" || this.sel === "Change"      },
    Deliver()    { return this.sel === "View" || this.sel === "Deliver"     },
    Govern()     { return this.sel === "View" || this.sel === "Govern"      }
  }
};

/* script */
const __vue_script__$4 = script$4;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$4.__file = "/Users/ax/Documents/prj/cue/app/lay/vue/view.vue";

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "view" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.Collab,
            expression: "Collab"
          }
        ],
        staticClass: "nw",
        attrs: { id: "Collab" }
      },
      [_vm._m(0)]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.Domain,
            expression: "Domain"
          }
        ],
        staticClass: "north",
        attrs: { id: "Domain" }
      },
      [_vm._m(1)]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.Discover,
            expression: "Discover"
          }
        ],
        staticClass: "ne",
        attrs: { id: "Discover" }
      },
      [_vm._m(2)]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.Adapt,
            expression: "Adapt"
          }
        ],
        staticClass: "west",
        attrs: { id: "Adapt" }
      },
      [_vm._m(3)]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.Technology,
            expression: "Technology"
          }
        ],
        staticClass: "cen",
        attrs: { id: "Technology" }
      },
      [_vm._m(4)]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.Benefit,
            expression: "Benefit"
          }
        ],
        staticClass: "east",
        attrs: { id: "Benefit" }
      },
      [_vm._m(5)]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.Change,
            expression: "Change"
          }
        ],
        staticClass: "sw",
        attrs: { id: "Change" }
      },
      [_vm._m(6)]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.Deliver,
            expression: "Deliver"
          }
        ],
        staticClass: "south",
        attrs: { id: "Deliver" }
      },
      [_vm._m(7)]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.Govern,
            expression: "Govern"
          }
        ],
        staticClass: "se",
        attrs: { id: "Govern" }
      },
      [_vm._m(8)]
    )
  ])
};
var __vue_staticRenderFns__$4 = [
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "pane" }, [
      _c("div", { staticClass: "name" }, [_vm._v("Collab")])
    ])
  },
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "pane" }, [
      _c("div", { staticClass: "name" }, [_vm._v("Domain")])
    ])
  },
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "pane" }, [
      _c("div", { staticClass: "name" }, [_vm._v("Discover")])
    ])
  },
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "pane" }, [
      _c("div", { staticClass: "name" }, [_vm._v("Adapt")])
    ])
  },
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "pane" }, [
      _c("div", { staticClass: "name" }, [_vm._v("Technology")])
    ])
  },
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "pane" }, [
      _c("div", { staticClass: "name" }, [_vm._v("Benefit")])
    ])
  },
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "pane" }, [
      _c("div", { staticClass: "name" }, [_vm._v("Change")])
    ])
  },
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "pane" }, [
      _c("div", { staticClass: "name" }, [_vm._v("Deliver")])
    ])
  },
  function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "pane" }, [
      _c("div", { staticClass: "name" }, [_vm._v("Govern")])
    ])
  }
];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = function (inject) {
    if (!inject) return
    inject("data-v-17175bd6_0", { source: "\n.view { position:absolute; left:140px; top:50px; right:50px; bottom:50px; background-color:grey;\n   display:grid;\n   grid-template-columns: 33%  33% 34%;\n   grid-template-rows:    33%  33% 34%;\n   grid-template-areas:\n     \"nw   north ne\"\n     \"west cen   east\"\n     \"sw   south se\";\n   justify-items:center; align-items:center;\n/* grid-column-gap: @layout-gap;\n   grid-row-gap:    @layout-gap; */\n}\n.view .nw     { grid-area:nw;    justify-self:stretch; align-self:stretch; display:grid;\n}\n.view .north  { grid-area:north; justify-self:stretch; align-self:stretch; display:grid;\n}\n.view .ne     { grid-area:ne;    justify-self:stretch; align-self:stretch; display:grid;\n}\n.view .west   { grid-area:west;  justify-self:stretch; align-self:stretch; display:grid;\n}\n.view .cen    { grid-area:cen;   justify-self:stretch; align-self:stretch; display:grid;\n}\n.view .east   { grid-area:east;  justify-self:stretch; align-self:stretch; display:grid;\n}\n.view .sw     { grid-area:sw;    justify-self:stretch; align-self:stretch; display:grid;\n}\n.view .south  { grid-area:south; justify-self:stretch; align-self:stretch; display:grid;\n}\n.view .se     { grid-area:se;    justify-self:stretch; align-self:stretch; display:grid;\n}\n.view div .pane { font-size:1.5em; width:90%; height:80%; background-color:tan;\n   justify-self:center; align-self:center; display:grid; border-radius:0.5em;\n}\n.view div .pane .name  { font-size:2em; background-color:tan;\n   justify-self:center; align-self:center; text-align:center;\n} /* width:50%; height:50%; */\n \n\n", map: {"version":3,"sources":["/Users/ax/Documents/prj/cue/app/lay/vue/view.vue"],"names":[],"mappings":";AAwCA,QAAA,iBAAA,EAAA,UAAA,EAAA,QAAA,EAAA,UAAA,EAAA,WAAA,EAAA,qBAAA;GACA,YAAA;GACA,mCAAA;GACA,mCAAA;GACA;;;oBAGA;GACA,oBAAA,EAAA,kBAAA;AACA;kCACA;AAAA;AACA,gBAAA,YAAA,KAAA,oBAAA,EAAA,kBAAA,EAAA,YAAA;AAAA;AACA,gBAAA,eAAA,EAAA,oBAAA,EAAA,kBAAA,EAAA,YAAA;AAAA;AACA,gBAAA,YAAA,KAAA,oBAAA,EAAA,kBAAA,EAAA,YAAA;AAAA;AACA,gBAAA,cAAA,GAAA,oBAAA,EAAA,kBAAA,EAAA,YAAA;AAAA;AACA,gBAAA,aAAA,IAAA,oBAAA,EAAA,kBAAA,EAAA,YAAA;AAAA;AACA,gBAAA,cAAA,GAAA,oBAAA,EAAA,kBAAA,EAAA,YAAA;AAAA;AACA,gBAAA,YAAA,KAAA,oBAAA,EAAA,kBAAA,EAAA,YAAA;AAAA;AACA,gBAAA,eAAA,EAAA,oBAAA,EAAA,kBAAA,EAAA,YAAA;AAAA;AACA,gBAAA,YAAA,KAAA,oBAAA,EAAA,kBAAA,EAAA,YAAA;AAAA;AACA,kBAAA,eAAA,EAAA,SAAA,EAAA,UAAA,EAAA,oBAAA;GACA,mBAAA,EAAA,iBAAA,EAAA,YAAA,EAAA,mBAAA;AAAA;AACA,yBAAA,aAAA,EAAA,oBAAA;GACA,mBAAA,EAAA,iBAAA,EAAA,iBAAA;AAAA,EAAA,2BAAA","file":"view.vue","sourcesContent":["\n<template>\n  <div class=\"view\">\n    <div id=\"Collab\"     class=\"nw\"    v-show=\"Collab\"><div class=\"pane\"><div class=\"name\">Collab</div></div></div>\n    <div id=\"Domain\"     class=\"north\" v-show=\"Domain\"  ><div class=\"pane\"><div class=\"name\">Domain</div></div></div>\n    <div id=\"Discover\"   class=\"ne\" v-show=\"Discover\"><div class=\"pane\"><div class=\"name\">Discover</div></div></div>\n    <div id=\"Adapt\"      class=\"west\"  v-show=\"Adapt\"     ><div class=\"pane\"><div class=\"name\">Adapt</div></div></div>\n    <div id=\"Technology\" class=\"cen\"   v-show=\"Technology\"><div class=\"pane\"><div class=\"name\">Technology</div></div></div>\n    <div id=\"Benefit\"    class=\"east\"  v-show=\"Benefit\"><div class=\"pane\"><div class=\"name\">Benefit</div></div></div>\n    <div id=\"Change\"     class=\"sw\"    v-show=\"Change\"><div class=\"pane\"><div class=\"name\">Change</div></div></div>\n    <div id=\"Deliver\"    class=\"south\" v-show=\"Deliver\"><div class=\"pane\"><div class=\"name\">Deliver</div></div></div>\n    <div id=\"Govern\"     class=\"se\"    v-show=\"Govern\"><div class=\"pane\"><div class=\"name\">Govern</div></div></div>\n  </div>\n</template>\n\n<script type=\"module\">\n  export default {\n    data() { return { sel:\"View\" } },\n    methods: {\n      onSelect: function (select) {\n        this.sel =  select;\n        console.log( 'view.vue', select ); } },\n    mounted: function () {\n      console.log( 'view.vue', 'mounted' );\n      this.subscribe( 'Select', 'view.vue', (select) => this.onSelect(select) ); }, // Main.stream.\n    computed: {\n      Collab()     { return this.sel === \"View\" || this.sel === \"Collaborate\" },\n      Domain()     { return this.sel === \"View\" || this.sel === \"Domain\"      },\n      Discover()   { return this.sel === \"View\" || this.sel === \"Discover\"    },\n      Adapt()      { return this.sel === \"View\" || this.sel === \"Adapt\"       },\n      Technology() { return this.sel === \"View\" || this.sel === \"Technology\"  },\n      Benefit()    { return this.sel === \"View\" || this.sel === \"Benefit\"     },\n      Change()     { return this.sel === \"View\" || this.sel === \"Change\"      },\n      Deliver()    { return this.sel === \"View\" || this.sel === \"Deliver\"     },\n      Govern()     { return this.sel === \"View\" || this.sel === \"Govern\"      }\n    }\n  }\n</script>\n\n<style>\n  .view { position:absolute; left:140px; top:50px; right:50px; bottom:50px; background-color:grey;\n    display:grid;\n    grid-template-columns: 33%  33% 34%;\n    grid-template-rows:    33%  33% 34%;\n    grid-template-areas:\n      \"nw   north ne\"\n      \"west cen   east\"\n      \"sw   south se\";\n    justify-items:center; align-items:center;\n /* grid-column-gap: @layout-gap;\n    grid-row-gap:    @layout-gap; */ }\n  .view .nw     { grid-area:nw;    justify-self:stretch; align-self:stretch; display:grid; }\n  .view .north  { grid-area:north; justify-self:stretch; align-self:stretch; display:grid; }\n  .view .ne     { grid-area:ne;    justify-self:stretch; align-self:stretch; display:grid; }\n  .view .west   { grid-area:west;  justify-self:stretch; align-self:stretch; display:grid; }\n  .view .cen    { grid-area:cen;   justify-self:stretch; align-self:stretch; display:grid; }\n  .view .east   { grid-area:east;  justify-self:stretch; align-self:stretch; display:grid; }\n  .view .sw     { grid-area:sw;    justify-self:stretch; align-self:stretch; display:grid; }\n  .view .south  { grid-area:south; justify-self:stretch; align-self:stretch; display:grid; }\n  .view .se     { grid-area:se;    justify-self:stretch; align-self:stretch; display:grid; }\n  .view div .pane { font-size:1.5em; width:90%; height:80%; background-color:tan;\n    justify-self:center; align-self:center; display:grid; border-radius:0.5em; }\n  .view div .pane .name  { font-size:2em; background-color:tan;\n    justify-self:center; align-self:center; text-align:center; } /* width:50%; height:50%; */\n  \n\n</style>\n\n<!--style>\n  .view         { position:absolute; left:140px; top:50px; right:50px; bottom:50px; background-color:grey; }\n  .view .nw     { position:absolute; left: 0;  top: 0;  width:33%; height:33%; display:grid; }\n  .view .north  { position:absolute; left:33%; top: 0;  width:33%; height:33%; display:grid; }\n  .view .ne     { position:absolute; left:66%; top: 0;  width:34%; height:33%; display:grid; }\n  .view .west   { position:absolute; left: 0;  top:33%; width:33%; height:33%; display:grid; }\n  .view .cen    { position:absolute; left:33%; top:33%; width:33%; height:33%; display:grid; }\n  .view .east   { position:absolute; left:66%; top:33%; width:34%; height:33%; display:grid; }\n  .view .sw     { position:absolute; left: 0;  top:66%; width:33%; height:34%; display:grid; }\n  .view .south  { position:absolute; left:33%; top:66%; width:33%; height:34%; display:grid; }\n  .view .se     { position:absolute; left:66%; top:66%; width:34%; height:34%; display:grid; }\n  .view div .pane { font-size:1.5em; width:90%; height:80%; background-color:tan;\n    justify-self:center; align-self:center; display:grid; border-radius:0.5em; }\n  .view div .pane .name  { font-size:2em; background-color:tan;\n    justify-self:center; align-self:center; text-align:center; } /* width:50%; height:50%; */\n</style-->\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject SSR */
  

  
  var view = normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    createInjector,
    undefined
  );

//
//
//
//
//

var script$5 = {};

/* script */
const __vue_script__$5 = script$5;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$5.__file = "/Users/ax/Documents/prj/cue/app/lay/vue/side.vue";

/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "side" })
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = function (inject) {
    if (!inject) return
    inject("data-v-38517780_0", { source: "\n.side { position:absolute; right:0; top:50px; width:50px; bottom:50px; background-color:darkgrey;\n}\n", map: {"version":3,"sources":["/Users/ax/Documents/prj/cue/app/lay/vue/side.vue"],"names":[],"mappings":";AAUA,QAAA,iBAAA,EAAA,OAAA,EAAA,QAAA,EAAA,UAAA,EAAA,WAAA,EAAA,yBAAA;AAAA","file":"side.vue","sourcesContent":["\n<template>\n  <div class=\"side\"></div>\n</template>\n\n<script type=\"module\">\n  export default {}\n</script>\n\n<style>\n  .side { position:absolute; right:0; top:50px; width:50px; bottom:50px; background-color:darkgrey;  }\n</style>"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject SSR */
  

  
  var side = normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    createInjector,
    undefined
  );

//
//
//
//
//

var script$6 = {};

/* script */
const __vue_script__$6 = script$6;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$6.__file = "/Users/ax/Documents/prj/cue/app/lay/vue/pref.vue";

/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "pref" })
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = function (inject) {
    if (!inject) return
    inject("data-v-001f96f0_0", { source: "\n.pref { position:absolute; left:0; bottom:0;  width:140px; height:50px; background-color:black;\n}\n", map: {"version":3,"sources":["/Users/ax/Documents/prj/cue/app/lay/vue/pref.vue"],"names":[],"mappings":";AAUA,QAAA,iBAAA,EAAA,MAAA,EAAA,QAAA,GAAA,WAAA,EAAA,WAAA,EAAA,sBAAA;AAAA","file":"pref.vue","sourcesContent":["\n<template>\n  <div class=\"pref\"></div>\n</template>\n\n<script type=\"module\">\n  export default {}\n</script>\n\n<style>\n  .pref { position:absolute; left:0; bottom:0;  width:140px; height:50px; background-color:black; }\n</style>\n\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject SSR */
  

  
  var pref = normalizeComponent(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    createInjector,
    undefined
  );

//
//
//
//
//

var script$7 = {};

/* script */
const __vue_script__$7 = script$7;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$7.__file = "/Users/ax/Documents/prj/cue/app/lay/vue/foot.vue";

/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "foot" })
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  const __vue_inject_styles__$7 = function (inject) {
    if (!inject) return
    inject("data-v-04627174_0", { source: "\n.foot { position:absolute; left:140px; bottom:0;  right:50px; height:50px; background-color:darkgrey;\n}\n", map: {"version":3,"sources":["/Users/ax/Documents/prj/cue/app/lay/vue/foot.vue"],"names":[],"mappings":";AAUA,QAAA,iBAAA,EAAA,UAAA,EAAA,QAAA,GAAA,UAAA,EAAA,WAAA,EAAA,yBAAA;AAAA","file":"foot.vue","sourcesContent":["\n<template>\n  <div class=\"foot\"></div>\n</template>\n\n<script type=\"module\">\n  export default {}\n</script>\n\n<style>\n  .foot { position:absolute; left:140px; bottom:0;  right:50px; height:50px; background-color:darkgrey; }\n</style>\n\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject SSR */
  

  
  var foot = normalizeComponent(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    createInjector,
    undefined
  );

//
//
//
//
//

var script$8 = {};

/* script */
const __vue_script__$8 = script$8;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$8.__file = "/Users/ax/Documents/prj/cue/app/lay/vue/trak.vue";

/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "trak" })
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  const __vue_inject_styles__$8 = function (inject) {
    if (!inject) return
    inject("data-v-60ca4cc0_0", { source: "\n.trak { position:absolute; right:0; bottom:0;  width:50px; height:50px; background-color:black;\n}\n", map: {"version":3,"sources":["/Users/ax/Documents/prj/cue/app/lay/vue/trak.vue"],"names":[],"mappings":";AAUA,QAAA,iBAAA,EAAA,OAAA,EAAA,QAAA,GAAA,UAAA,EAAA,WAAA,EAAA,sBAAA;AAAA","file":"trak.vue","sourcesContent":["\n<template>\n  <div class=\"trak\"></div>\n</template>\n\n<script>\n  export default {}\n</script>\n\n<style type=\"module\">\n  .trak { position:absolute; right:0; bottom:0;  width:50px; height:50px; background-color:black; }\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject SSR */
  

  
  var trak = normalizeComponent(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    createInjector,
    undefined
  );

//

  var script$9 = {
      name: 'app',
      components: {
        'v-logo': logo, 'v-navb': navb, 'v-find': find,
        'v-tocs': tocs, 'v-view': view, 'v-side': side,
        'v-pref': pref, 'v-foot': foot, 'v-trak': trak } };

/* script */
const __vue_script__$9 = script$9;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$9.__file = "/Users/ax/Documents/prj/cue/app/lay/App.vue";

/* template */
var __vue_render__$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "app" },
    [
      _c("v-logo"),
      _vm._v(" "),
      _c("v-navb"),
      _vm._v(" "),
      _c("v-find"),
      _vm._v(" "),
      _c("v-tocs"),
      _vm._v(" "),
      _c("v-view"),
      _vm._v(" "),
      _c("v-side"),
      _vm._v(" "),
      _c("v-pref"),
      _vm._v(" "),
      _c("v-foot"),
      _vm._v(" "),
      _c("v-trak")
    ],
    1
  )
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  const __vue_inject_styles__$9 = function (inject) {
    if (!inject) return
    inject("data-v-2b6acc24_0", { source: "\n.app { font-family:Roboto, sans-serif;\n}\n", map: {"version":3,"sources":["/Users/ax/Documents/prj/cue/app/lay/App.vue"],"names":[],"mappings":";AAoCA,OAAA,8BAAA;AAAA","file":"App.vue","sourcesContent":["\n<template>\n  <div class=\"app\">\n    <v-logo></v-logo>\n    <v-navb></v-navb>\n    <v-find></v-find>\n    <v-tocs></v-tocs>\n    <v-view></v-view>\n    <v-side></v-side>\n    <v-pref></v-pref>\n    <v-foot></v-foot>\n    <v-trak></v-trak>\n  </div>\n</template>\n\n<script type=\"module\">\n//import Vue  from 'vue'\n  import logo from './vue/logo.vue'\n  import navb from './vue/navb.vue'\n  import find from './vue/find.vue'\n  import tocs from './vue/tocs.vue'\n  import view from './vue/view.vue'\n  import side from './vue/side.vue'\n  import pref from './vue/pref.vue'\n  import foot from './vue/foot.vue'\n  import trak from './vue/trak.vue'\n\n  export default {\n      name: 'app',\n      components: {\n        'v-logo': logo, 'v-navb': navb, 'v-find': find,\n        'v-tocs': tocs, 'v-view': view, 'v-side': side,\n        'v-pref': pref, 'v-foot': foot, 'v-trak': trak } }\n</script>\n\n<style>\n   .app { font-family:Roboto, sans-serif; }\n</style>"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$9 = undefined;
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* style inject SSR */
  

  
  var App = normalizeComponent(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    createInjector,
    undefined
  );

export default App;
