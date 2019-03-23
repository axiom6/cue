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
script.__file = "/Users/ax/Documents/prj/cue/app/lay/vue/Logo.vue";

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
    inject("data-v-69e628cd_0", { source: ".logo {\n  background-color: black;\n}\n.logo img {\n  width: 140px;\n  height: 50px;\n}\n", map: {"version":3,"sources":["Logo.vue"],"names":[],"mappings":"AAAA;EACE,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,YAAY;AACd","file":"Logo.vue","sourcesContent":[".logo {\n  background-color: black;\n}\n.logo img {\n  width: 140px;\n  height: 50px;\n}\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var Logo = normalizeComponent(
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
script$1.__file = "/Users/ax/Documents/prj/cue/app/lay/vue/Navb.vue";

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
    inject("data-v-de066e48_0", { source: ".navb {\n  background-color: darkgrey;\n}\n", map: {"version":3,"sources":["Navb.vue"],"names":[],"mappings":"AAAA;EACE,0BAA0B;AAC5B","file":"Navb.vue","sourcesContent":[".navb {\n  background-color: darkgrey;\n}\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  

  
  var Navb = normalizeComponent(
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
script$2.__file = "/Users/ax/Documents/prj/cue/app/lay/vue/Find.vue";

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
    inject("data-v-5ddd897e_0", { source: ".find {\n  background-color: black;\n}\n", map: {"version":3,"sources":["Find.vue"],"names":[],"mappings":"AAAA;EACE,uBAAuB;AACzB","file":"Find.vue","sourcesContent":[".find {\n  background-color: black;\n}\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  

  
  var Find = normalizeComponent(
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

let Tocs = {
  methods: {
    doSelect: function (select) {
      console.log( 'tocs.vue', select );
      this.publish("Select",   select ); }
  } };

/* script */
const __vue_script__$3 = Tocs;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
Tocs.__file = "/Users/ax/Documents/prj/cue/app/lay/vue/Tocs.vue";

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
    inject("data-v-34ea1403_0", { source: ".tocs {\n  background-color: darkgrey;\n}\n.tocs ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.tocs ul li {\n  margin: 0;\n  background-color: black;\n  color: white;\n  border: white solid 1px;\n  padding-left: 0.25em;\n}\n.tocs ul li:hover {\n  margin: 0;\n  background-color: white;\n  color: black;\n  border: white solid 1px;\n}\n", map: {"version":3,"sources":["Tocs.vue"],"names":[],"mappings":"AAAA;EACE,0BAA0B;AAC5B;AACA;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;AAClB;AACA;EACE,SAAS;EACT,uBAAuB;EACvB,YAAY;EACZ,uBAAuB;EACvB,oBAAoB;AACtB;AACA;EACE,SAAS;EACT,uBAAuB;EACvB,YAAY;EACZ,uBAAuB;AACzB","file":"Tocs.vue","sourcesContent":[".tocs {\n  background-color: darkgrey;\n}\n.tocs ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.tocs ul li {\n  margin: 0;\n  background-color: black;\n  color: white;\n  border: white solid 1px;\n  padding-left: 0.25em;\n}\n.tocs ul li:hover {\n  margin: 0;\n  background-color: white;\n  color: black;\n  border: white solid 1px;\n}\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject SSR */
  

  
  var Tocs$1 = normalizeComponent(
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

var script$3 = {
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
const __vue_script__$4 = script$3;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$3.__file = "/Users/ax/Documents/prj/cue/app/lay/vue/View.vue";

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
    inject("data-v-1d75a7b8_0", { source: ".view {\n  background-color: grey;\n  display: grid;\n  grid-template-columns: 33%  33% 34%;\n  grid-template-rows: 33%  33% 34%;\n  grid-template-areas: \"nw   north ne\" \"west cen   east\" \"sw   south se\";\n  justify-items: center;\n  align-items: center;\n}\n.view .nw {\n  grid-area: nw;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.view .north {\n  grid-area: north;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.view .ne {\n  grid-area: ne;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.view .west {\n  grid-area: west;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.view .cen {\n  grid-area: cen;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.view .east {\n  grid-area: east;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.view .sw {\n  grid-area: sw;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.view .south {\n  grid-area: south;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.view .se {\n  grid-area: se;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.view .pane {\n  font-size: 1.5em;\n  width: 90%;\n  height: 80%;\n  background-color: tan;\n  justify-self: center;\n  align-self: center;\n  display: grid;\n  border-radius: 0.5em;\n}\n.view .pane .name {\n  font-size: 2em;\n  background-color: tan;\n  justify-self: center;\n  align-self: center;\n  text-align: center;\n}\n", map: {"version":3,"sources":["View.vue","/Users/ax/Documents/prj/cue/app/lay/vue/View.vue"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,aAAa;EACb,mCAAmC;EACnC,gCAAgC;EAChC,sEAAsE;EACtE,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,cAAc;EACd,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;AACf;AACA;ECCA,eAAA;EACA,qBAAA;EACA,mBAAA;EACA,aAAA;AACA;AACA;EACA,aAAA;EACA,qBAAA;EACA,mBAAA;EACA,aAAA;AACA;AACA;EACA,gBAAA;EACA,qBAAA;EACA,mBAAA;EACA,aAAA;AACA;AACA;EACA,aAAA;EACA,qBAAA;EACA,mBAAA;EACA,aAAA;AACA;ADCA;EACE,gBAAgB;EAChB,UAAU;EACV,WAAW;EACX,qBAAqB;EACrB,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,cAAc;EACd,qBAAqB;EACrB,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;AACpB","file":"View.vue","sourcesContent":[".view {\n  background-color: grey;\n  display: grid;\n  grid-template-columns: 33%  33% 34%;\n  grid-template-rows: 33%  33% 34%;\n  grid-template-areas: \"nw   north ne\" \"west cen   east\" \"sw   south se\";\n  justify-items: center;\n  align-items: center;\n}\n.view .nw {\n  grid-area: nw;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.view .north {\n  grid-area: north;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.view .ne {\n  grid-area: ne;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.view .west {\n  grid-area: west;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.view .cen {\n  grid-area: cen;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.view .east {\n  grid-area: east;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.view .sw {\n  grid-area: sw;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.view .south {\n  grid-area: south;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.view .se {\n  grid-area: se;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.view .pane {\n  font-size: 1.5em;\n  width: 90%;\n  height: 80%;\n  background-color: tan;\n  justify-self: center;\n  align-self: center;\n  display: grid;\n  border-radius: 0.5em;\n}\n.view .pane .name {\n  font-size: 2em;\n  background-color: tan;\n  justify-self: center;\n  align-self: center;\n  text-align: center;\n}\n","\n<template>\n  <div class=\"view\">\n    <div id=\"Collab\"     class=\"nw\"    v-show=\"Collab\"><div class=\"pane\"><div class=\"name\">Collab</div></div></div>\n    <div id=\"Domain\"     class=\"north\" v-show=\"Domain\"  ><div class=\"pane\"><div class=\"name\">Domain</div></div></div>\n    <div id=\"Discover\"   class=\"ne\"    v-show=\"Discover\"><div class=\"pane\"><div class=\"name\">Discover</div></div></div>\n    <div id=\"Adapt\"      class=\"west\"  v-show=\"Adapt\"     ><div class=\"pane\"><div class=\"name\">Adapt</div></div></div>\n    <div id=\"Technology\" class=\"cen\"   v-show=\"Technology\"><div class=\"pane\"><div class=\"name\">Technology</div></div></div>\n    <div id=\"Benefit\"    class=\"east\"  v-show=\"Benefit\"><div class=\"pane\"><div class=\"name\">Benefit</div></div></div>\n    <div id=\"Change\"     class=\"sw\"    v-show=\"Change\"><div class=\"pane\"><div class=\"name\">Change</div></div></div>\n    <div id=\"Deliver\"    class=\"south\" v-show=\"Deliver\"><div class=\"pane\"><div class=\"name\">Deliver</div></div></div>\n    <div id=\"Govern\"     class=\"se\"    v-show=\"Govern\"><div class=\"pane\"><div class=\"name\">Govern</div></div></div>\n  </div>\n</template>\n\n<script type=\"module\">\n  export default {\n    data() { return { sel:\"View\" } },\n    methods: {\n      onSelect: function (select) {\n        this.sel =  select;\n        console.log( 'view.vue', select ); } },\n    mounted: function () {\n      console.log( 'view.vue', 'mounted' );\n      this.subscribe( 'Select', 'view.vue', (select) => this.onSelect(select) ); }, // Main.stream.\n    computed: {\n      Collab()     { return this.sel === \"View\" || this.sel === \"Collaborate\" },\n      Domain()     { return this.sel === \"View\" || this.sel === \"Domain\"      },\n      Discover()   { return this.sel === \"View\" || this.sel === \"Discover\"    },\n      Adapt()      { return this.sel === \"View\" || this.sel === \"Adapt\"       },\n      Technology() { return this.sel === \"View\" || this.sel === \"Technology\"  },\n      Benefit()    { return this.sel === \"View\" || this.sel === \"Benefit\"     },\n      Change()     { return this.sel === \"View\" || this.sel === \"Change\"      },\n      Deliver()    { return this.sel === \"View\" || this.sel === \"Deliver\"     },\n      Govern()     { return this.sel === \"View\" || this.sel === \"Govern\"      }\n    }\n  }\n</script>\n\n<style lang=\"less\">\n  .view { background-color:grey;\n    display:grid;\n    grid-template-columns: 33%  33% 34%;\n    grid-template-rows:    33%  33% 34%;\n    grid-template-areas:\n      \"nw   north ne\"\n      \"west cen   east\"\n      \"sw   south se\";\n    justify-items:center; align-items:center;\n    .nw     { grid-area:nw;    justify-self:stretch; align-self:stretch; display:grid; }\n    .north  { grid-area:north; justify-self:stretch; align-self:stretch; display:grid; }\n    .ne     { grid-area:ne;    justify-self:stretch; align-self:stretch; display:grid; }\n    .west   { grid-area:west;  justify-self:stretch; align-self:stretch; display:grid; }\n    .cen    { grid-area:cen;   justify-self:stretch; align-self:stretch; display:grid; }\n    .east   { grid-area:east;  justify-self:stretch; align-self:stretch; display:grid; }\n    .sw     { grid-area:sw;    justify-self:stretch; align-self:stretch; display:grid; }\n    .south  { grid-area:south; justify-self:stretch; align-self:stretch; display:grid; }\n    .se     { grid-area:se;    justify-self:stretch; align-self:stretch; display:grid; }\n    .pane { font-size:1.5em; width:90%; height:80%; background-color:tan;\n      justify-self:center; align-self:center; display:grid; border-radius:0.5em; }\n    .pane .name  { font-size:2em; background-color:tan;\n      justify-self:center; align-self:center; text-align:center; }\n  }\n\n</style>\n\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject SSR */
  

  
  var View = normalizeComponent(
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

var script$4 = {};

/* script */
const __vue_script__$5 = script$4;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$4.__file = "/Users/ax/Documents/prj/cue/app/lay/vue/Side.vue";

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
    inject("data-v-2a057be6_0", { source: ".side {\n  background-color: darkgrey;\n}\n", map: {"version":3,"sources":["Side.vue"],"names":[],"mappings":"AAAA;EACE,0BAA0B;AAC5B","file":"Side.vue","sourcesContent":[".side {\n  background-color: darkgrey;\n}\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject SSR */
  

  
  var Side = normalizeComponent(
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

var script$5 = {};

/* script */
const __vue_script__$6 = script$5;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$5.__file = "/Users/ax/Documents/prj/cue/app/lay/vue/Pref.vue";

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
    inject("data-v-48c3b080_0", { source: ".pref {\n  background-color: black;\n}\n", map: {"version":3,"sources":["Pref.vue"],"names":[],"mappings":"AAAA;EACE,uBAAuB;AACzB","file":"Pref.vue","sourcesContent":[".pref {\n  background-color: black;\n}\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject SSR */
  

  
  var Pref = normalizeComponent(
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

var script$6 = {};

/* script */
const __vue_script__$7 = script$6;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$6.__file = "/Users/ax/Documents/prj/cue/app/lay/vue/Foot.vue";

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
    inject("data-v-00c37d39_0", { source: ".foot {\n  background-color: darkgrey;\n}\n", map: {"version":3,"sources":["Foot.vue"],"names":[],"mappings":"AAAA;EACE,0BAA0B;AAC5B","file":"Foot.vue","sourcesContent":[".foot {\n  background-color: darkgrey;\n}\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject SSR */
  

  
  var Foot = normalizeComponent(
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

var script$7 = {};

/* script */
const __vue_script__$8 = script$7;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$7.__file = "/Users/ax/Documents/prj/cue/app/lay/vue/Trak.vue";

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
    inject("data-v-698e011e_0", { source: "\n.trak { background-color:black;\n}\n", map: {"version":3,"sources":["/Users/ax/Documents/prj/cue/app/lay/vue/Trak.vue"],"names":[],"mappings":";AAUA,QAAA,sBAAA;AAAA","file":"Trak.vue","sourcesContent":["\n<template>\n  <div class=\"trak\"></div>\n</template>\n\n<script>\n  export default {}\n</script>\n\n<style type=\"module\">\n     .trak { background-color:black; }\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject SSR */
  

  
  var Trak = normalizeComponent(
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

  let App = {
      name: 'app',
      components: {
        'v-logo': Logo, 'v-navb': Navb, 'v-find': Find,
        'v-tocs': Tocs$1, 'v-view': View, 'v-side': Side, // 'v-rout': Rout,
        'v-pref': Pref, 'v-foot': Foot, 'v-trak': Trak } };

/* script */
const __vue_script__$9 = App;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
App.__file = "/Users/ax/Documents/prj/cue/app/lay/App.vue";

/* template */
var __vue_render__$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "app" },
    [
      _c("v-logo", { attrs: { id: "logo" } }),
      _vm._v(" "),
      _c("v-navb", { attrs: { id: "navb" } }),
      _vm._v(" "),
      _c("v-find", { attrs: { id: "find" } }),
      _vm._v(" "),
      _c("v-tocs", { attrs: { id: "tocs" } }),
      _vm._v(" "),
      _c("v-view", { attrs: { id: "view" } }),
      _vm._v(" "),
      _c("v-side", { attrs: { id: "side" } }),
      _vm._v(" "),
      _c("v-pref", { attrs: { id: "pref" } }),
      _vm._v(" "),
      _c("v-foot", { attrs: { id: "foot" } }),
      _vm._v(" "),
      _c("v-trak", { attrs: { id: "trak" } })
    ],
    1
  )
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  const __vue_inject_styles__$9 = function (inject) {
    if (!inject) return
    inject("data-v-293649b0_0", { source: ".app {\n  font-family: Roboto, sans-serif;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: grid;\n  grid-template-columns: 140px 1fr 50px;\n  grid-template-rows: 50px 1fr 50px;\n  grid-template-areas: \"logo navb find\" \"tocs view side\" \"pref foot trak\";\n}\n.app #logo {\n  grid-area: logo;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.app #navb {\n  grid-area: navb;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.app #find {\n  grid-area: find;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.app #tocs {\n  grid-area: tocs;\n  justify-self: stretch;\n  align-self: start;\n  display: grid;\n  background-color: gray;\n}\n.app #rout {\n  grid-area: tocs;\n  justify-self: stretch;\n  align-self: center;\n  display: grid;\n  background-color: white;\n}\n.app #view {\n  grid-area: view;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.app #side {\n  grid-area: side;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.app #pref {\n  grid-area: pref;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.app #foot {\n  grid-area: foot;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.app #trak {\n  grid-area: trak;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n", map: {"version":3,"sources":["App.vue","/Users/ax/Documents/prj/cue/app/lay/App.vue"],"names":[],"mappings":"AAAA;EACE,+BAA+B;EAC/B,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,QAAQ;EACR,SAAS;EACT,aAAa;EACb,qCAAqC;EACrC,iCAAiC;EACjC,uEAAuE;AACzE;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,kBAAkB;EAClB,aAAa;ECCf,uBAAA;AACA;AACA;EACA,eAAA;EACA,qBAAA;EACA,mBAAA;EACA,aAAA;AACA;AACA;EACA,eAAA;EDCE,qBAAqB;ECCvB,mBAAA;EACA,aAAA;AACA;AACA;EACA,eAAA;EACA,qBAAA;EACA,mBAAA;EACA,aAAA;AACA;AACA;EDCE,eAAe;EACf,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,eAAe;EACf,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;AACf","file":"App.vue","sourcesContent":[".app {\n  font-family: Roboto, sans-serif;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  display: grid;\n  grid-template-columns: 140px 1fr 50px;\n  grid-template-rows: 50px 1fr 50px;\n  grid-template-areas: \"logo navb find\" \"tocs view side\" \"pref foot trak\";\n}\n.app #logo {\n  grid-area: logo;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.app #navb {\n  grid-area: navb;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.app #find {\n  grid-area: find;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.app #tocs {\n  grid-area: tocs;\n  justify-self: stretch;\n  align-self: start;\n  display: grid;\n  background-color: gray;\n}\n.app #rout {\n  grid-area: tocs;\n  justify-self: stretch;\n  align-self: center;\n  display: grid;\n  background-color: white;\n}\n.app #view {\n  grid-area: view;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.app #side {\n  grid-area: side;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.app #pref {\n  grid-area: pref;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.app #foot {\n  grid-area: foot;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n.app #trak {\n  grid-area: trak;\n  justify-self: stretch;\n  align-self: stretch;\n  display: grid;\n}\n","\n<template>\n  <div class=\"app\">\n    <v-logo id=\"logo\"></v-logo>\n    <v-navb id=\"navb\"></v-navb>\n    <v-find id=\"find\"></v-find>\n    <v-tocs id=\"tocs\"></v-tocs>\n <!--v-rout id=\"rout\"></v-rout-->\n    <v-view id=\"view\"></v-view>\n    <v-side id=\"side\"></v-side>\n    <v-pref id=\"pref\"></v-pref>\n    <v-foot id=\"foot\"></v-foot>\n    <v-trak id=\"trak\"></v-trak>\n  </div>\n</template>\n\n<script type=\"module\">\n  import Logo from './vue/Logo.vue';\n  import Navb from './vue/Navb.vue';\n  import Find from './vue/Find.vue';\n  import Tocs from './vue/Tocs.vue';\n//import Rout from './vue/Rout.vue';\n  import View from './vue/View.vue';\n  import Side from './vue/Side.vue';\n  import Pref from './vue/Pref.vue';\n  import Foot from './vue/Foot.vue';\n  import Trak from './vue/Trak.vue';\n\n  let App = {\n      name: 'app',\n      components: {\n        'v-logo': Logo, 'v-navb': Navb, 'v-find': Find,\n        'v-tocs': Tocs, 'v-view': View, 'v-side': Side, // 'v-rout': Rout,\n        'v-pref': Pref, 'v-foot': Foot, 'v-trak': Trak } };\n  \n//App.Rout = Rout;\n  \n  export default App;\n  \n</script>\n\n<style lang=\"less\">\n   // hey\n   .app { font-family:Roboto, sans-serif;\n     position:absolute; left:0; top:0; right:0; bottom:0;\n     display:grid;\n     grid-template-columns: 140px 1fr 50px;\n     grid-template-rows:     50px 1fr 50px;\n     grid-template-areas:\n       \"logo navb find\"\n       \"tocs view side\"\n       \"pref foot trak\";\n\n    #logo { grid-area:logo; justify-self:stretch; align-self:stretch; display:grid; }\n    #navb { grid-area:navb; justify-self:stretch; align-self:stretch; display:grid; }\n    #find { grid-area:find; justify-self:stretch; align-self:stretch; display:grid; }\n    #tocs { grid-area:tocs; justify-self:stretch; align-self:start;   display:grid; background-color:gray;  }\n    #rout { grid-area:tocs; justify-self:stretch; align-self:center;  display:grid; background-color:white; }\n    #view { grid-area:view; justify-self:stretch; align-self:stretch; display:grid; }\n    #side { grid-area:side; justify-self:stretch; align-self:stretch; display:grid; }\n    #pref { grid-area:pref; justify-self:stretch; align-self:stretch; display:grid; }\n    #foot { grid-area:foot; justify-self:stretch; align-self:stretch; display:grid; }\n    #trak { grid-area:trak; justify-self:stretch; align-self:stretch; display:grid; } }\n  \n</style>"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$9 = undefined;
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* style inject SSR */
  

  
  var App$1 = normalizeComponent(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    createInjector,
    undefined
  );

export default App$1;
