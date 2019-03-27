function broadcast (componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.name;

    if (name === componentName) {
      child.$emit(eventName, params);
    } else {
      broadcast.call(child, componentName, eventName, params);
    }
  });
}
var events = {
  methods: {
    dispatch (componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.name;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.name;
        }
      }
      if (parent) {
        parent.$emit(eventName, params);
      }
    },
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};

const EventListener = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @param {object} Object with a 'remove' method.
   */
  listen (target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove () {
          target.removeEventListener(eventType, callback, false);
        }
      }
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove () {
          target.detachEvent('on' + eventType, callback);
        }
      }
    }
  }
};

//
//
//
//
//
//
//
//
//

var script = {
  name: 'VaIcon',
  props: {
    type: {
      type: String,
      required: true
    },
    iconStyle: {
      type: String,
      default: 'solid',
      required: false,
      validator (v) {
        return ['solid', 'regular', 'brands'].includes(v)
      }
    },
    size: {
      type: String,
      required: false,
      default: '1em'
    },
    color: {
      type: String,
      required: false
    },
    bgColor: {
      type: String,
      default: 'transparent',
      required: false
    },
    margin: {
      type: String,
      default: '0px',
      required: false
    },
    padding: {
      type: String,
      default: '0px',
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  computed: {
    fontStyle () {
      switch (this.iconStyle) {
        case 'regular':
          return 'far'
        case 'solid':
          return 'fas'
        case 'brands':
          return 'fab'
        default:
          return 'fas'
      }
    }
  }
};

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

/* script */
const __vue_script__ = script;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Icon/VaIcon.vue";

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "i",
    {
      class: [_vm.fontStyle, "fa-" + _vm.type],
      style: {
        fontSize: _vm.size,
        color: _vm.color,
        margin: _vm.margin,
        backgroundColor: _vm.bgColor,
        borderRadius: "4px",
        padding: _vm.padding
      }
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VaIcon = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

//

var script$1 = {
  name: 'VaButton',
  components: { 'va-icon':VaIcon },
  props: {
    type: {
      type: String,
      default: 'default',
      required: false,
      validator (v) {
        return [
          'default',
          'primary',
          'primary-light',
          'primary-dark',
          'paleblue',
          'success',
          'info',
          'warning',
          'danger',
          'subtle',
          'link',
          'subtle-link',
          'active',
          'dark',
          'darker',
          'help',
          'help-light',
          'help-dark',
          'black'
        ].includes(v)
      }
    },
    size: {
      type: String,
      default: 'md',
      required: false,
      validator (v) {
        return ['xs', 'sm', 'md', 'lg'].includes(v)
      }
    },
    active: {
      type: Boolean,
      default: false,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    block: {
      type: Boolean,
      default: false,
      required: false
    },
    loading: {
      type: Boolean,
      default: false,
      required: false
    },
    round: {
      type: Boolean,
      default: false,
      required: false
    },
    focused: {
      type: Boolean,
      default: false,
      required: false
    },
    tall: {
      type: Boolean,
      default: false,
      required: false
    },
    iconBefore: {
      type: String,
      required: false
    },
    iconAfter: {
      type: String,
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    let loading = this.loading;
    return {
      loadingSpinner: loading,
      isFocused: this.focused,
      componentWasMounted: false
    }
  },
  computed: {
    spinColor () {
      let { type, active } = this;
      let white = '#FFFFFF';
      let darker = '#45526B';

      if (active) {
        return darker
      }

      switch (type) {
        case 'default':
          return darker
        case 'primary':
          return white
        case 'primary-light':
          return white
        case 'primary-dark':
          return white
        case 'success':
          return white
        case 'info':
          return white
        case 'warning':
          return darker
        case 'subtle':
          return darker
        case 'link':
          return darker
        case 'subtle-link':
          return darker
        case 'danger':
          return white
        case 'dark':
          return white
        case 'darker':
          return white
      }

      return white
    },
    classObj () {
      let {
        classPrefix,
        type,
        size,
        block,
        active,
        disabled,
        round,
        isFocused
      } = this;
      let classes = {};

      classes[classPrefix + '-btn'] = true;
      classes[classPrefix + '-btn-block'] = block;
      classes[classPrefix + '-btn-active'] = active;
      classes[classPrefix + '-btn-disabled'] = disabled;
      size ? (classes[classPrefix + '-btn-' + size] = true) : '';
      type ? (classes[classPrefix + '-btn-' + type] = true) : '';
      classes[classPrefix + '-btn-round'] = round;

      classes[classPrefix + '-btn-' + type + '-focused'] = isFocused;

      return classes
    },
    innerClassObj () {
      let { classPrefix, loadingSpinner } = this;
      let classes = {};

      classes[classPrefix + '-btn-text-fade'] = true;
      loadingSpinner ? (classes[classPrefix + '-btn-text-fade-out'] = true) : '';

      return classes
    },
    innerStyleObj () {
      let { iconBefore, iconAfter } = this;
      let style = {};

      if (this.componentWasMounted) {
        let l = iconBefore !== undefined;
        let r = iconAfter !== undefined;

        if (this.$el.style.width !== '100%') {
          if (l) {
            style['padding-left'] = '26px';
          }
          if (r) {
            style['padding-right'] = '26px';
          }
        }
      }

      return style
    },
    styleObj () {
      let { tall } = this;
      let style = {};

      if (tall) {
        style['height'] = '100%';
        style['border-radius'] = '0px';
      }

      return style
    },
    iconBeforeStyleObj () {
      let style = {};

      style['position'] = 'absolute';
      style['left'] = '3px';

      return style
    },
    iconAfterStyleObj () {
      let style = {};

      style['position'] = 'absolute';
      style['right'] = '3px';

      return style
    }
  },
  watch: {
    loading (val) {
      if (val) {
        let rect = this.$el.getBoundingClientRect();

        this.$el.style.width = rect.width + 'px';
        this.$el.style.height = rect.height + 'px';

        this.loadingSpinner = true;
      } else {
        this.$el.style.width = 'auto';
        this.$el.style.height = 'auto';
        this.$nextTick(() => {
          this.loadingSpinner = false;
        });
      }
    }
  },
  methods: {
    triggerMouseEvent (node, eventType) {
      let clickEvent = document.createEvent('MouseEvents');
      clickEvent.initEvent(eventType, true, true);
      this.$refs.btn.dispatchEvent(clickEvent);
    },
    enterKeyDown () {
      this.triggerMouseEvent(this.$refs.btn, 'mouseover');
      this.triggerMouseEvent(this.$refs.btn, 'mousedown');
    },
    enterKeyUp () {
      if (this.disabled) {
        return
      }
      this.triggerMouseEvent(this.$refs.btn, 'mouseup');
      this.triggerMouseEvent(this.$refs.btn, 'click');
    },
    focus () {
      this.$refs.btn.focus();
    },
    onClick () {
      if (this.disabled) {
        return
      }
      this.$emit('click');
    }
  },
  mounted () {
    this.$nextTick(() => {
      let el = this.$el;

      this.componentWasMounted = true;

      this._clickEvent = EventListener.listen( el, 'click', e => {
        if (!el.contains(e.target)) {
          this.isFocused = false;
        }
      });
    });
  },
  beforeDestroy () {
    if (this._clickEvent) this._clickEvent.remove();
  }
};

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
const __vue_script__$1 = script$1;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$1.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Button/VaButton.vue";

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "a",
    {
      ref: "btn",
      class: _vm.classObj,
      style: _vm.styleObj,
      attrs: { tabindex: "0" },
      on: {
        click: _vm.onClick,
        keydown: function($event) {
          if (
            !("button" in $event) &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          return _vm.enterKeyDown($event)
        },
        keyup: function($event) {
          if (
            !("button" in $event) &&
            _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
          ) {
            return null
          }
          return _vm.enterKeyUp($event)
        }
      }
    },
    [
      _c(
        "div",
        { class: _vm.innerClassObj, style: _vm.innerStyleObj },
        [
          _vm.iconBefore !== undefined
            ? _c("va-icon", {
                style: _vm.iconBeforeStyleObj,
                attrs: { type: _vm.iconBefore }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm._t("default"),
          _vm._v(" "),
          _vm.iconAfter !== undefined
            ? _c("va-icon", {
                style: _vm.iconAfterStyleObj,
                attrs: { type: _vm.iconAfter }
              })
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _vm.loadingSpinner
        ? _c("va-loading", { attrs: { color: _vm.spinColor, size: _vm.size } })
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-9e056a1e_0", { source: "/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-btn-default {\n  background-color: #f3f4f6;\n  color: #505e77;\n}\n.va-btn-default:hover:not(.va-btn-disabled) {\n    background-color: #ebecf0;\n    color: #505e77;\n}\n.va-btn-default:active:not(.va-btn-disabled) {\n    background-color: #e0edff;\n    color: #0052cc;\n}\n.va-btn-default:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-default-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #4d9aff 0 0 0 2px;\n    outline: none;\n}\n.va-btn-primary {\n  background-color: #0052cc;\n  color: white;\n}\n.va-btn-primary:hover:not(.va-btn-disabled) {\n    background-color: #0066ff;\n    color: white;\n}\n.va-btn-primary:active:not(.va-btn-disabled) {\n    background-color: #0747a6;\n    color: white;\n}\n.va-btn-primary:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-primary-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #4d9aff 0 0 0 2px;\n    outline: none;\n}\n.va-btn-primary-light {\n  background-color: #0066ff;\n  color: white;\n}\n.va-btn-primary-light:hover:not(.va-btn-disabled) {\n    background-color: #2483ff;\n    color: white;\n}\n.va-btn-primary-light:active:not(.va-btn-disabled) {\n    background-color: #0052cc;\n    color: white;\n}\n.va-btn-primary-light:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-primary-light-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #4d9aff 0 0 0 2px;\n    outline: none;\n}\n.va-btn-primary-dark {\n  background-color: #0747a6;\n  color: white;\n}\n.va-btn-primary-dark:hover:not(.va-btn-disabled) {\n    background-color: #0066ff;\n    color: white;\n}\n.va-btn-primary-dark:active:not(.va-btn-disabled) {\n    background-color: #0052cc;\n    color: white;\n}\n.va-btn-primary-dark:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-primary-dark-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #4d9aff 0 0 0 2px;\n    outline: none;\n}\n.va-btn-help {\n  background-color: #413394;\n  color: white;\n}\n.va-btn-help:hover:not(.va-btn-disabled) {\n    background-color: #5243a8;\n    color: white;\n}\n.va-btn-help:active:not(.va-btn-disabled) {\n    background-color: #473979;\n    color: white;\n}\n.va-btn-help:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-help-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #988cd9 0 0 0 2px;\n    outline: none;\n}\n.va-btn-help-light {\n  background-color: #5243a8;\n  color: white;\n}\n.va-btn-help-light:hover:not(.va-btn-disabled) {\n    background-color: #6454c0;\n    color: white;\n}\n.va-btn-help-light:active:not(.va-btn-disabled) {\n    background-color: #6454c0;\n    color: white;\n}\n.va-btn-help-light:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-help-light-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #988cd9 0 0 0 2px;\n    outline: none;\n}\n.va-btn-help-dark {\n  background-color: #3d3168;\n  color: white;\n}\n.va-btn-help-dark:hover:not(.va-btn-disabled) {\n    background-color: #5243a8;\n    color: white;\n}\n.va-btn-help-dark:active:not(.va-btn-disabled) {\n    background-color: #473979;\n    color: white;\n}\n.va-btn-help-dark:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-help-dark-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #6454c0 0 0 0 2px;\n    outline: none;\n}\n.va-btn-paleblue {\n  background-color: #335594;\n  color: white;\n}\n.va-btn-paleblue:hover:not(.va-btn-disabled) {\n    background-color: #4a6aa5;\n    color: white;\n}\n.va-btn-paleblue:active:not(.va-btn-disabled) {\n    background-color: #1c3e7d;\n    color: white;\n}\n.va-btn-paleblue:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-paleblue-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #7591c2 0 0 0 2px;\n    outline: none;\n}\n.va-btn-success {\n  background-color: #008558;\n  color: white;\n}\n.va-btn-success:hover:not(.va-btn-disabled) {\n    background-color: #36b580;\n    color: white;\n}\n.va-btn-success:active:not(.va-btn-disabled) {\n    background-color: #006644;\n    color: white;\n}\n.va-btn-success:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-success-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #36b580 0 0 0 2px;\n    outline: none;\n}\n.va-btn-info {\n  background-color: #00a0bd;\n  color: white;\n}\n.va-btn-info:hover:not(.va-btn-disabled) {\n    background-color: #00badb;\n    color: white;\n}\n.va-btn-info:active:not(.va-btn-disabled) {\n    background-color: #008fa8;\n    color: white;\n}\n.va-btn-info:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-info-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #00c7e6 0 0 0 2px;\n    outline: none;\n}\n.va-btn-warning {\n  background-color: #ff9a1f;\n  color: #091e43;\n}\n.va-btn-warning:hover:not(.va-btn-disabled) {\n    background-color: #ffaa00;\n    color: #091e43;\n}\n.va-btn-warning:active:not(.va-btn-disabled) {\n    background-color: darkorange;\n    color: #091e43;\n}\n.va-btn-warning:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-warning-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #db7900 0 0 0 2px;\n    outline: none;\n}\n.va-btn-danger {\n  background-color: #e0350b;\n  color: white;\n}\n.va-btn-danger:hover:not(.va-btn-disabled) {\n    background-color: #ff542e;\n    color: white;\n}\n.va-btn-danger:active:not(.va-btn-disabled) {\n    background-color: #bd2600;\n    color: white;\n}\n.va-btn-danger:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-danger-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #ff9175 0 0 0 2px;\n    outline: none;\n}\n.va-btn-subtle {\n  background-color: transparent;\n  color: #505e77;\n}\n.va-btn-subtle:hover:not(.va-btn-disabled) {\n    background-color: #ebecf0;\n    color: #505e77;\n}\n.va-btn-subtle:active:not(.va-btn-disabled) {\n    background-color: #e0edff;\n    color: #0052cc;\n}\n.va-btn-subtle:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-subtle-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #2483ff 0 0 0 2px;\n    outline: none;\n}\n.va-btn-link {\n  background-color: transparent;\n  color: #0052cc;\n}\n.va-btn-link:hover:not(.va-btn-disabled) {\n    background-color: transparent;\n    color: #0066ff;\n}\n.va-btn-link:active:not(.va-btn-disabled) {\n    background-color: transparent;\n    color: #0747a6;\n}\n.va-btn-link:hover {\n    text-decoration: underline;\n}\n.va-btn-link:active, .va-btn-link:focus {\n    text-decoration: none;\n}\n.va-btn-link:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-link-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #2483ff 0 0 0 2px;\n    outline: none;\n}\n.va-btn-subtle-link {\n  background-color: transparent;\n  color: #79859a;\n}\n.va-btn-subtle-link:hover:not(.va-btn-disabled) {\n    background-color: transparent;\n    color: #97a0af;\n}\n.va-btn-subtle-link:active:not(.va-btn-disabled) {\n    background-color: transparent;\n    color: #505e77;\n}\n.va-btn-subtle-link:active, .va-btn-subtle-link:focus {\n    text-decoration: none;\n}\n.va-btn-subtle-link:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-subtle-link-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #2483ff 0 0 0 2px;\n    outline: none;\n}\n.va-btn-dark {\n  background-color: #26395a;\n  color: #c2c8d1;\n}\n.va-btn-dark:hover:not(.va-btn-disabled) {\n    background-color: #435370;\n    color: #e0e2e6;\n}\n.va-btn-dark:active:not(.va-btn-disabled) {\n    background-color: #172c4f;\n    color: #6b788e;\n}\n.va-btn-dark:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-dark-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #79859a 0 0 0 2px;\n    outline: none;\n}\n.va-btn-darker {\n  background-color: #172c4f;\n  color: #c2c8d1;\n}\n.va-btn-darker:hover:not(.va-btn-disabled) {\n    background-color: #435370;\n    color: #e0e2e6;\n}\n.va-btn-darker:active:not(.va-btn-disabled) {\n    background-color: #26395a;\n    color: #6b788e;\n}\n.va-btn-darker:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-darker-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #79859a 0 0 0 2px;\n    outline: none;\n}\n.va-btn-active {\n  background-color: #e0edff;\n  color: #0052cc;\n}\n.va-btn-active:hover:not(.va-btn-disabled) {\n    background-color: #e0edff;\n    color: #0052cc;\n}\n.va-btn-active:active:not(.va-btn-disabled) {\n    background-color: #e0edff;\n    color: #0052cc;\n}\n.va-btn-active:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-active-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #4d9aff 0 0 0 2px;\n    outline: none;\n}\n.va-btn-black {\n  background-color: #18171b;\n  color: #6b788e;\n}\n.va-btn-black:hover:not(.va-btn-disabled) {\n    background-color: #18171b;\n    color: #97a0af;\n}\n.va-btn-black:active:not(.va-btn-disabled) {\n    background-color: #18171b;\n    color: #505e77;\n}\n.va-btn-black:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-black-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #4d9aff 0 0 0 2px;\n    outline: none;\n}\n.va-btn {\n  border: none;\n  outline: 0;\n  margin: 0;\n  text-align: center;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  cursor: default;\n  font-family: inherit;\n  text-decoration: none;\n  vertical-align: middle;\n  white-space: nowrap;\n  transition: background 0.1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38);\n  /**\n  Styles applied to the loading spinner inside of the button element.\n  All sizes defined here.\n  */\n}\n.va-btn:focus, .va-btn:active:focus, .va-btn-active:focus {\n    outline: 0;\n}\n.va-btn:active {\n    transition-property: none;\n}\n.va-btn-disabled {\n    color: #c2c8d1 !important;\n    cursor: not-allowed;\n}\n.va-btn > div > a {\n    cursor: default;\n}\n.va-btn-round {\n    border-radius: 50% !important;\n}\n.va-btn-block {\n    display: flex;\n    width: 100%;\n}\n.va-btn-text-fade {\n    position: relative;\n    display: flex;\n    align-items: center;\n    transition: opacity 0.2s;\n    opacity: 1;\n    width: 100%;\n    justify-content: space-around;\n}\n.va-btn-text-fade-out {\n      opacity: 0;\n}\n.va-btn-xs {\n    padding: 4px 8px;\n    font-size: 12px;\n    line-height: 1.5em;\n    border-radius: 4px;\n    min-height: 26px;\n    max-height: 26px;\n}\n.va-btn-xs > div {\n      min-width: 13px;\n}\n.va-btn-sm {\n    padding: 1px 8px;\n    font-size: 13px;\n    line-height: 2.2em;\n    border-radius: 4px;\n    min-height: 30px;\n    max-height: 30px;\n}\n.va-btn-sm > div {\n      min-width: 15px;\n}\n.va-btn-md {\n    padding: 0px 9px;\n    font-size: 14px;\n    line-height: 2.3em;\n    border-radius: 4px;\n    min-height: 34px;\n    max-height: 34px;\n}\n.va-btn-md > div {\n      min-width: 17px;\n}\n.va-btn-lg {\n    padding: 2px 15px;\n    font-size: 17px;\n    line-height: 2.5em;\n    border-radius: 4px;\n    min-height: 45px;\n    max-height: 45px;\n}\n.va-btn-lg > div {\n      min-width: 23px;\n}\n.va-btn .va-page-loading-con {\n    position: absolute;\n}\n.va-btn-xs .va-page-loading-con {\n    margin-top: 1px;\n}\n.va-btn-xs .va-page-loading-con svg {\n      width: 16px !important;\n}\n.va-btn-sm .va-page-loading-con {\n    margin-top: 3px;\n}\n.va-btn-sm .va-page-loading-con svg {\n      width: 18px !important;\n}\n.va-btn-md .va-page-loading-con {\n    margin-top: 4px;\n}\n.va-btn-md .va-page-loading-con svg {\n      width: 20px !important;\n}\n.va-btn-lg .va-page-loading-con {\n    margin-top: 6px;\n}\n.va-btn-lg .va-page-loading-con svg {\n      width: 25px !important;\n}\n\n/**\nStyles applied to buttons that are wrapped in a <va-button-group>\nare defined here.\n\nReady to be confused?\n*/\n.va-btn-group {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.va-btn-group > .va-btn,\n.va-btn-group > .va-dropdown-con {\n  position: relative;\n  float: left;\n}\n.va-btn-group > .va-btn:not(:first-child):not(:last-child):not(.va-dropdown-toggle),\n.va-btn-group > .va-dropdown-con:not(:first-child):not(:last-child):not(.va-dropdown-toggle) {\n  border-radius: 0;\n  margin-right: 1px;\n}\n.va-btn-group > .va-btn:first-child {\n  margin-left: 0;\n}\n.va-btn-group > .va-btn:first-child:not(:last-child) {\n  margin-right: 1px;\n}\n.va-btn-group > .va-btn:first-child:not(:last-child):not(.va-dropdown-toggle),\n.va-btn-group > .va-dropdown-con:first-child:not(:last-child):not(.va-dropdown-toggle),\n.va-btn-group > span,\n.va-btn-group > div,\n.va-btn-group > .va-btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  margin-right: 1px;\n}\n.va-btn-group > .va-dropdown-con:not(:first-child):not(:last-child),\n.va-btn-group > span,\n.va-btn-group > div,\n.va-btn-group > .va-btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.va-btn-group > .va-btn:last-child:not(:first-child),\n.va-btn-group > .va-dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.va-btn-group > .va-dropdown-con:not(:first-child) > span > div > .va-btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.va-btn-group > .va-btn-group {\n  float: left;\n}\n.va-btn-group > .va-btn-group:not(:first-child):not(:last-child),\n.va-btn-group > .va-btn {\n  border-radius: 0;\n}\n.va-btn-group > .va-btn-group:first-child:not(:last-child),\n.va-btn-group > .va-btn:last-child,\n.va-btn-group > .va-btn-group:first-child:not(:last-child),\n.va-btn-group > .va-dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.va-btn-group > .va-btn-group:last-child:not(:first-child),\n.va-btn-group > .va-btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n/**\nAnd, of course, when the button group is a vertical button group arrangement.\n*/\n.va-btn-group-vertical {\n  position: relative;\n  display: inline-flex !important;\n  flex-direction: column;\n  vertical-align: middle;\n}\n.va-btn-group-vertical > .va-btn {\n  position: relative;\n  float: left;\n  width: 100%;\n  display: flex;\n}\n.va-btn-group-vertical .va-btn {\n  width: 100%;\n}\n.va-btn-group-vertical > .va-btn:not(:first-child):not(:last-child):not(.va-dropdown-toggle),\n.va-btn-group-vertical > .va-dropdown-con:not(:first-child):not(:last-child):not(.va-dropdown-toggle) {\n  border-radius: 0;\n  margin-bottom: 1px;\n  margin-right: 0;\n}\n.va-btn-group-vertical > .va-btn:first-child {\n  margin-top: 0;\n}\n.va-btn-group-vertical > .va-btn:first-child:not(:last-child) {\n  margin-bottom: 1px;\n}\n.va-btn-group-vertical > .va-btn:first-child:not(:last-child):not(.va-dropdown-toggle) {\n  border-radius: 4px 4px 0 0;\n}\n.va-btn-group-vertical > .va-btn:last-child:not(:first-child),\n.va-btn-group-vertical > .va-dropdown-toggle:not(:first-child) {\n  border-radius: 0 0 4px 4px;\n}\n.va-btn-group-vertical > .va-btn-group-vertical {\n  float: left;\n}\n.va-btn-group-vertical > .va-btn-group-vertical:not(:first-child):not(:last-child),\n.va-btn-group-vertical > .va-btn {\n  border-radius: 0;\n}\n.va-btn-group-vertical > .va-btn-group-vertical:first-child:not(:last-child),\n.va-btn-group-vertical > .va-btn:last-child,\n.va-btn-group-vertical > .va-btn-group-vertical:first-child:not(:last-child),\n.va-btn-group-vertical > .va-dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.va-btn-group-vertical > .va-btn-group-vertical:last-child:not(:first-child),\n.va-btn-group-vertical > .va-btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n/*# sourceMappingURL=VaButton.vue.map */", map: {"version":3,"sources":["VaButton.vue","/Users/ax/Documents/prj/cue/app/aaa/src/Button/VaButton.vue"],"names":[],"mappings":"AAAA,QAAQ;AACR,YAAY;AACZ,UAAU;AACV,QAAQ;AACR,SAAS;AACT,UAAU;AACV,OAAO;AACP,iBAAiB;AACjB,eAAe;AACf,WAAW;AACX,YAAY;ACyWZ;EA5CA,yBAAA;EACA,cAAA;AAAA;AAEA;IACA,yBAAA;IACA,cAAA;AAAA;AAGA;IACA,yBAAA;IACA,cAAA;AAAA;AAYA;IAEA,mCAAA;IAEA,aAAA;AAAA;AA8BA;EAxDA,yBAAA;EACA,YAAA;AAAA;AAEA;IACA,yBAAA;IACA,YAAA;AAAA;AAGA;IACA,yBAAA;IACA,YAAA;AAAA;AAYA;IAEA,mCAAA;IAEA,aAAA;AAAA;AA0CA;EApEA,yBAAA;EACA,YAAA;AAAA;AAEA;IACA,yBAAA;IACA,YAAA;AAAA;AAGA;IACA,yBAAA;IACA,YAAA;AAAA;AAYA;IAEA,mCAAA;IAEA,aAAA;AAAA;AAsDA;EAhFA,yBAAA;EACA,YAAA;AAAA;AAEA;IACA,yBAAA;IACA,YAAA;AAAA;AAGA;IACA,yBAAA;IACA,YAAA;AAAA;AAYA;IAEA,mCAAA;IAEA,aAAA;AAAA;AAkEA;EA5FA,yBAAA;EACA,YAAA;AAAA;AAEA;IACA,yBAAA;IACA,YAAA;AAAA;AAGA;IACA,yBAAA;IACA,YAAA;AAAA;AAYA;IAEA,mCAAA;IAEA,aAAA;AAAA;AA8EA;EAxGA,yBAAA;EACA,YAAA;AAAA;AAEA;IACA,yBAAA;IACA,YAAA;AAAA;AAGA;IACA,yBAAA;IACA,YAAA;AAAA;AAYA;IAEA,mCAAA;IAEA,aAAA;AAAA;AA0FA;EApHA,yBAsHA;EArHA,YAAA;AAAA;AAEA;IACA,yBAAA;IACA,YAAA;AAAA;AAGA;IACA,yBAAA;IACA,YAAA;AAAA;AAYA;IAEA,mCAAA;IAEA,aAAA;AAAA;AAsGA;EAhIA,yBAAA;EACA,YAAA;AAAA;AAEA;IACA,yBAAA;IACA,YAAA;AAAA;AAGA;IACA,yBAAA;IACA,YAAA;AAAA;AAYA;IAEA,mCAAA;IAEA,aAAA;AAAA;AAkHA;EA5IA,yBAAA;EACA,YAAA;AAAA;AAEA;IACA,yBAAA;IACA,YAAA;AAAA;AAGA;IACA,yBAAA;IACA,YAAA;AAAA;AAYA;IAEA,mCAAA;IAEA,aAAA;AAAA;AA8HA;EAxJA,yBAAA;EACA,YAAA;AAAA;AAEA;IACA,yBAAA;IACA,YAAA;AAAA;AAGA;IACA,yBAAA;IACA,YAAA;AAAA;AAYA;IAEA,mCAAA;IAEA,aAAA;AAAA;AA0IA;EApKA,yBAAA;EACA,cAAA;AAAA;AAEA;IACA,yBAAA;IACA,cAAA;AAAA;AAGA;IACA,4BAAA;IACA,cAAA;AAAA;AAYA;IAEA,mCAAA;IAEA,aAAA;AAAA;AAsJA;EAhLA,yBAAA;EACA,YAAA;AAAA;AAEA;IACA,yBAAA;IACA,YAAA;AAAA;AAGA;IACA,yBAAA;IACA,YAAA;AAAA;AAYA;IAEA,mCAAA;IAEA,aAAA;AAAA;AAkKA;EA5LA,6BA8LA;EA7LA,cAAA;AAAA;AAEA;IACA,yBAAA;IACA,cAAA;AAAA;AAGA;IACA,yBAAA;IACA,cAAA;AAAA;AAYA;IAEA,mCAAA;IAEA,aAAA;AAAA;AA8KA;EAxMA,6BA0MA;EAzMA,cAAA;AAAA;AAEA;IACA,6BAwMA;IAvMA,cAAA;AAAA;AAGA;IACA,6BAqMA;IApMA,cAAA;AAAA;AA8LA;IAWA,0BAAA;AAAA;AAXA;IAgBA,qBAAA;AAAA;AAlMA;IAEA,mCAAA;IAEA,aAAA;AAAA;AAoMA;EA9NA,6BAgOA;EA/NA,cAAA;AAAA;AAEA;IACA,6BA8NA;IA7NA,cAAA;AAAA;AAGA;IACA,6BA2NA;IA1NA,cAAA;AAAA;AAoNA;IAcA,qBAAA;AAAA;AAtNA;IAEA,mCAAA;IAEA,aAAA;AAAA;AAwNA;EAlPA,yBAAA;EACA,cAAA;AAAA;AAEA;IACA,yBAAA;IACA,cAAA;AAAA;AAGA;IACA,yBAAA;IACA,cAAA;AAAA;AAYA;IAEA,mCAAA;IAEA,aAAA;AAAA;AAoOA;EA9PA,yBAAA;EACA,cAAA;AAAA;AAEA;IACA,yBAAA;IACA,cAAA;AAAA;AAGA;IACA,yBAAA;IACA,cAAA;AAAA;AAYA;IAEA,mCAAA;IAEA,aAAA;AAAA;AAgPA;EA1QA,yBAAA;EACA,cAAA;AAAA;AAEA;IACA,yBAAA;IACA,cAAA;AAAA;AAGA;IACA,yBAAA;IACA,cAAA;AAAA;AAYA;IAEA,mCAAA;IAEA,aAAA;AAAA;AA4PA;EAtRA,yBAwRA;EAvRA,cAAA;AAAA;AAEA;IACA,yBAsRA;IArRA,cAAA;AAAA;AAGA;IACA,yBAmRA;IAlRA,cAAA;AAAA;AAYA;IAEA,mCAAA;IAEA,aAAA;AAAA;AAwUA;EACA,YAAA;EACA,UAAA;EACA,SAAA;EACA,kBAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,oBAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;EACA,2FACA;EAkEA;;;GDheG;ACmeH;AAnFA;IAqBA,UAAA;AAAA;AArBA;IAyBA,yBAAA;AAAA;AAGA;IACA,yBAAA;IACA,mBAAA;AAAA;AA9BA;IAmCA,eAAA;AAAA;AAMA;IACA,6BAAA;AAAA;AAGA;IACA,aAAA;IACA,WAAA;AAAA;AAGA;IACA,kBAAA;IACA,aAAA;IACA,mBAAA;IACA,wBAAA;IACA,UAAA;IACA,WAAA;IACA,6BAAA;AAAA;AAEA;MACA,UAAA;AAAA;AAIA;IAtEA,gBAvDA;IAwDA,eAvDA;IAwDA,kBAvDA;IAwDA,kBAvDA;IAKA,gBAAA;IACA,gBAAA;AAAA;AAJA;MACA,eAAA;AAAA;AA2HA;IA1EA,gBAzCA;IA0CA,eAzCA;IA0CA,kBAzCA;IA0CA,kBAzCA;IAKA,gBAAA;IACA,gBAAA;AAAA;AAJA;MACA,eAAA;AAAA;AAiHA;IA9EA,gBA3BA;IA4BA,eA3BA;IA4BA,kBA3BA;IA4BA,kBA3BA;IAKA,gBAAA;IACA,gBAAA;AAAA;AAJA;MACA,eAAA;AAAA;AAuGA;IAlFA,iBAbA;IAcA,eAbA;IAcA,kBAbA;IAcA,kBAbA;IAKA,gBAAA;IACA,gBAAA;AAAA;AAJA;MACA,eAAA;AAAA;AAaA;IAqFA,kBAAA;AAAA;AAGA;IAEA,eAAA;AAAA;AAFA;MAKA,sBAAA;AAAA;AAKA;IAEA,eAAA;AAAA;AAFA;MAKA,sBAAA;AAAA;AAKA;IAEA,eAAA;AAAA;AAFA;MAKA,sBAAA;AAAA;AAKA;IAEA,eAAA;AAAA;AAFA;MAKA,sBAAA;AAAA;;AAMA;;;;;CD5bC;ACkcD;EACA,kBAAA;EACA,qBAAA;EACA,sBAAA;AAAA;AAGA;;EAEA,kBAAA;EACA,WAAA;AAAA;AAGA;;EAGA,gBAAA;EACA,iBAAA;AAAA;AAJA;EAQA,cAAA;AAAA;AARA;EAYA,iBAAA;AAAA;AAZA;;;;;EAoBA,0BAAA;EACA,6BAAA;EACA,iBAAA;AAAA;AAtBA;;;;EA6BA,0BAAA;EACA,6BAAA;AAAA;AA9BA;;EAmCA,yBAAA;EACA,4BAAA;AAAA;AApCA;EAyCA,yBAAA;EACA,4BAAA;AAAA;AA1CA;EA+CA,WAAA;AAAA;AA/CA;;EAoDA,gBAAA;AAAA;AApDA;;;;EA2DA,0BAAA;EACA,6BAAA;AAAA;AA5DA;;EAiEA,yBAAA;EACA,4BAAA;AAAA;;AAIA;;CDhdC;ACodD;EACA,kBAAA;EACA,+BAAA;EAEA,sBAAA;EACA,sBAAA;AAAA;AAGA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,aAAA;AAAA;AAGA;EACA,WAAA;AAAA;AAGA;;EAGA,gBAAA;EACA,kBAAA;EACA,eAAA;AAAA;AALA;EASA,aAAA;AAAA;AATA;EAaA,kBAAA;AAAA;AAbA;EAiBA,0BAAA;AAAA;AAjBA;;EAsBA,0BAAA;AAAA;AAtBA;EA0BA,WAAA;AAAA;AA1BA;;EA+BA,gBAAA;AAAA;AA/BA;;;;EAsCA,4BAAA;EACA,6BAAA;AAAA;AAvCA;;EA4CA,yBAAA;EACA,4BAAA;AAAA;;AD9dA,uCAAuC","file":"VaButton.vue","sourcesContent":["/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-btn-default {\n  background-color: #f3f4f6;\n  color: #505e77; }\n  .va-btn-default:hover:not(.va-btn-disabled) {\n    background-color: #ebecf0;\n    color: #505e77; }\n  .va-btn-default:active:not(.va-btn-disabled) {\n    background-color: #e0edff;\n    color: #0052cc; }\n  .va-btn-default:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-default-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #4d9aff 0 0 0 2px;\n    outline: none; }\n\n.va-btn-primary {\n  background-color: #0052cc;\n  color: white; }\n  .va-btn-primary:hover:not(.va-btn-disabled) {\n    background-color: #0066ff;\n    color: white; }\n  .va-btn-primary:active:not(.va-btn-disabled) {\n    background-color: #0747a6;\n    color: white; }\n  .va-btn-primary:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-primary-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #4d9aff 0 0 0 2px;\n    outline: none; }\n\n.va-btn-primary-light {\n  background-color: #0066ff;\n  color: white; }\n  .va-btn-primary-light:hover:not(.va-btn-disabled) {\n    background-color: #2483ff;\n    color: white; }\n  .va-btn-primary-light:active:not(.va-btn-disabled) {\n    background-color: #0052cc;\n    color: white; }\n  .va-btn-primary-light:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-primary-light-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #4d9aff 0 0 0 2px;\n    outline: none; }\n\n.va-btn-primary-dark {\n  background-color: #0747a6;\n  color: white; }\n  .va-btn-primary-dark:hover:not(.va-btn-disabled) {\n    background-color: #0066ff;\n    color: white; }\n  .va-btn-primary-dark:active:not(.va-btn-disabled) {\n    background-color: #0052cc;\n    color: white; }\n  .va-btn-primary-dark:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-primary-dark-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #4d9aff 0 0 0 2px;\n    outline: none; }\n\n.va-btn-help {\n  background-color: #413394;\n  color: white; }\n  .va-btn-help:hover:not(.va-btn-disabled) {\n    background-color: #5243a8;\n    color: white; }\n  .va-btn-help:active:not(.va-btn-disabled) {\n    background-color: #473979;\n    color: white; }\n  .va-btn-help:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-help-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #988cd9 0 0 0 2px;\n    outline: none; }\n\n.va-btn-help-light {\n  background-color: #5243a8;\n  color: white; }\n  .va-btn-help-light:hover:not(.va-btn-disabled) {\n    background-color: #6454c0;\n    color: white; }\n  .va-btn-help-light:active:not(.va-btn-disabled) {\n    background-color: #6454c0;\n    color: white; }\n  .va-btn-help-light:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-help-light-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #988cd9 0 0 0 2px;\n    outline: none; }\n\n.va-btn-help-dark {\n  background-color: #3d3168;\n  color: white; }\n  .va-btn-help-dark:hover:not(.va-btn-disabled) {\n    background-color: #5243a8;\n    color: white; }\n  .va-btn-help-dark:active:not(.va-btn-disabled) {\n    background-color: #473979;\n    color: white; }\n  .va-btn-help-dark:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-help-dark-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #6454c0 0 0 0 2px;\n    outline: none; }\n\n.va-btn-paleblue {\n  background-color: #335594;\n  color: white; }\n  .va-btn-paleblue:hover:not(.va-btn-disabled) {\n    background-color: #4a6aa5;\n    color: white; }\n  .va-btn-paleblue:active:not(.va-btn-disabled) {\n    background-color: #1c3e7d;\n    color: white; }\n  .va-btn-paleblue:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-paleblue-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #7591c2 0 0 0 2px;\n    outline: none; }\n\n.va-btn-success {\n  background-color: #008558;\n  color: white; }\n  .va-btn-success:hover:not(.va-btn-disabled) {\n    background-color: #36b580;\n    color: white; }\n  .va-btn-success:active:not(.va-btn-disabled) {\n    background-color: #006644;\n    color: white; }\n  .va-btn-success:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-success-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #36b580 0 0 0 2px;\n    outline: none; }\n\n.va-btn-info {\n  background-color: #00a0bd;\n  color: white; }\n  .va-btn-info:hover:not(.va-btn-disabled) {\n    background-color: #00badb;\n    color: white; }\n  .va-btn-info:active:not(.va-btn-disabled) {\n    background-color: #008fa8;\n    color: white; }\n  .va-btn-info:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-info-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #00c7e6 0 0 0 2px;\n    outline: none; }\n\n.va-btn-warning {\n  background-color: #ff9a1f;\n  color: #091e43; }\n  .va-btn-warning:hover:not(.va-btn-disabled) {\n    background-color: #ffaa00;\n    color: #091e43; }\n  .va-btn-warning:active:not(.va-btn-disabled) {\n    background-color: darkorange;\n    color: #091e43; }\n  .va-btn-warning:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-warning-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #db7900 0 0 0 2px;\n    outline: none; }\n\n.va-btn-danger {\n  background-color: #e0350b;\n  color: white; }\n  .va-btn-danger:hover:not(.va-btn-disabled) {\n    background-color: #ff542e;\n    color: white; }\n  .va-btn-danger:active:not(.va-btn-disabled) {\n    background-color: #bd2600;\n    color: white; }\n  .va-btn-danger:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-danger-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #ff9175 0 0 0 2px;\n    outline: none; }\n\n.va-btn-subtle {\n  background-color: transparent;\n  color: #505e77; }\n  .va-btn-subtle:hover:not(.va-btn-disabled) {\n    background-color: #ebecf0;\n    color: #505e77; }\n  .va-btn-subtle:active:not(.va-btn-disabled) {\n    background-color: #e0edff;\n    color: #0052cc; }\n  .va-btn-subtle:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-subtle-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #2483ff 0 0 0 2px;\n    outline: none; }\n\n.va-btn-link {\n  background-color: transparent;\n  color: #0052cc; }\n  .va-btn-link:hover:not(.va-btn-disabled) {\n    background-color: transparent;\n    color: #0066ff; }\n  .va-btn-link:active:not(.va-btn-disabled) {\n    background-color: transparent;\n    color: #0747a6; }\n  .va-btn-link:hover {\n    text-decoration: underline; }\n  .va-btn-link:active, .va-btn-link:focus {\n    text-decoration: none; }\n  .va-btn-link:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-link-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #2483ff 0 0 0 2px;\n    outline: none; }\n\n.va-btn-subtle-link {\n  background-color: transparent;\n  color: #79859a; }\n  .va-btn-subtle-link:hover:not(.va-btn-disabled) {\n    background-color: transparent;\n    color: #97a0af; }\n  .va-btn-subtle-link:active:not(.va-btn-disabled) {\n    background-color: transparent;\n    color: #505e77; }\n  .va-btn-subtle-link:active, .va-btn-subtle-link:focus {\n    text-decoration: none; }\n  .va-btn-subtle-link:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-subtle-link-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #2483ff 0 0 0 2px;\n    outline: none; }\n\n.va-btn-dark {\n  background-color: #26395a;\n  color: #c2c8d1; }\n  .va-btn-dark:hover:not(.va-btn-disabled) {\n    background-color: #435370;\n    color: #e0e2e6; }\n  .va-btn-dark:active:not(.va-btn-disabled) {\n    background-color: #172c4f;\n    color: #6b788e; }\n  .va-btn-dark:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-dark-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #79859a 0 0 0 2px;\n    outline: none; }\n\n.va-btn-darker {\n  background-color: #172c4f;\n  color: #c2c8d1; }\n  .va-btn-darker:hover:not(.va-btn-disabled) {\n    background-color: #435370;\n    color: #e0e2e6; }\n  .va-btn-darker:active:not(.va-btn-disabled) {\n    background-color: #26395a;\n    color: #6b788e; }\n  .va-btn-darker:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-darker-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #79859a 0 0 0 2px;\n    outline: none; }\n\n.va-btn-active {\n  background-color: #e0edff;\n  color: #0052cc; }\n  .va-btn-active:hover:not(.va-btn-disabled) {\n    background-color: #e0edff;\n    color: #0052cc; }\n  .va-btn-active:active:not(.va-btn-disabled) {\n    background-color: #e0edff;\n    color: #0052cc; }\n  .va-btn-active:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-active-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #4d9aff 0 0 0 2px;\n    outline: none; }\n\n.va-btn-black {\n  background-color: #18171b;\n  color: #6b788e; }\n  .va-btn-black:hover:not(.va-btn-disabled) {\n    background-color: #18171b;\n    color: #97a0af; }\n  .va-btn-black:active:not(.va-btn-disabled) {\n    background-color: #18171b;\n    color: #505e77; }\n  .va-btn-black:focus:not(:active):not(.va-select-btn-open):not(.va-btn-disabled), .va-btn-black-focused:not(:active):not(.va-select-btn-open):not(.va-btn-disabled) {\n    box-shadow: inset #4d9aff 0 0 0 2px;\n    outline: none; }\n\n.va-btn {\n  border: none;\n  outline: 0;\n  margin: 0;\n  text-align: center;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  cursor: default;\n  font-family: inherit;\n  text-decoration: none;\n  vertical-align: middle;\n  white-space: nowrap;\n  transition: background 0.1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38);\n  /**\n  Styles applied to the loading spinner inside of the button element.\n  All sizes defined here.\n  */ }\n  .va-btn:focus, .va-btn:active:focus, .va-btn-active:focus {\n    outline: 0; }\n  .va-btn:active {\n    transition-property: none; }\n  .va-btn-disabled {\n    color: #c2c8d1 !important;\n    cursor: not-allowed; }\n  .va-btn > div > a {\n    cursor: default; }\n  .va-btn-round {\n    border-radius: 50% !important; }\n  .va-btn-block {\n    display: flex;\n    width: 100%; }\n  .va-btn-text-fade {\n    position: relative;\n    display: flex;\n    align-items: center;\n    transition: opacity 0.2s;\n    opacity: 1;\n    width: 100%;\n    justify-content: space-around; }\n    .va-btn-text-fade-out {\n      opacity: 0; }\n  .va-btn-xs {\n    padding: 4px 8px;\n    font-size: 12px;\n    line-height: 1.5em;\n    border-radius: 4px;\n    min-height: 26px;\n    max-height: 26px; }\n    .va-btn-xs > div {\n      min-width: 13px; }\n  .va-btn-sm {\n    padding: 1px 8px;\n    font-size: 13px;\n    line-height: 2.2em;\n    border-radius: 4px;\n    min-height: 30px;\n    max-height: 30px; }\n    .va-btn-sm > div {\n      min-width: 15px; }\n  .va-btn-md {\n    padding: 0px 9px;\n    font-size: 14px;\n    line-height: 2.3em;\n    border-radius: 4px;\n    min-height: 34px;\n    max-height: 34px; }\n    .va-btn-md > div {\n      min-width: 17px; }\n  .va-btn-lg {\n    padding: 2px 15px;\n    font-size: 17px;\n    line-height: 2.5em;\n    border-radius: 4px;\n    min-height: 45px;\n    max-height: 45px; }\n    .va-btn-lg > div {\n      min-width: 23px; }\n  .va-btn .va-page-loading-con {\n    position: absolute; }\n  .va-btn-xs .va-page-loading-con {\n    margin-top: 1px; }\n    .va-btn-xs .va-page-loading-con svg {\n      width: 16px !important; }\n  .va-btn-sm .va-page-loading-con {\n    margin-top: 3px; }\n    .va-btn-sm .va-page-loading-con svg {\n      width: 18px !important; }\n  .va-btn-md .va-page-loading-con {\n    margin-top: 4px; }\n    .va-btn-md .va-page-loading-con svg {\n      width: 20px !important; }\n  .va-btn-lg .va-page-loading-con {\n    margin-top: 6px; }\n    .va-btn-lg .va-page-loading-con svg {\n      width: 25px !important; }\n\n/**\nStyles applied to buttons that are wrapped in a <va-button-group>\nare defined here.\n\nReady to be confused?\n*/\n.va-btn-group {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n\n.va-btn-group > .va-btn,\n.va-btn-group > .va-dropdown-con {\n  position: relative;\n  float: left; }\n\n.va-btn-group > .va-btn:not(:first-child):not(:last-child):not(.va-dropdown-toggle),\n.va-btn-group > .va-dropdown-con:not(:first-child):not(:last-child):not(.va-dropdown-toggle) {\n  border-radius: 0;\n  margin-right: 1px; }\n\n.va-btn-group > .va-btn:first-child {\n  margin-left: 0; }\n\n.va-btn-group > .va-btn:first-child:not(:last-child) {\n  margin-right: 1px; }\n\n.va-btn-group > .va-btn:first-child:not(:last-child):not(.va-dropdown-toggle),\n.va-btn-group > .va-dropdown-con:first-child:not(:last-child):not(.va-dropdown-toggle),\n.va-btn-group > span,\n.va-btn-group > div,\n.va-btn-group > .va-btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  margin-right: 1px; }\n\n.va-btn-group > .va-dropdown-con:not(:first-child):not(:last-child),\n.va-btn-group > span,\n.va-btn-group > div,\n.va-btn-group > .va-btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.va-btn-group > .va-btn:last-child:not(:first-child),\n.va-btn-group > .va-dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.va-btn-group > .va-dropdown-con:not(:first-child) > span > div > .va-btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.va-btn-group > .va-btn-group {\n  float: left; }\n\n.va-btn-group > .va-btn-group:not(:first-child):not(:last-child),\n.va-btn-group > .va-btn {\n  border-radius: 0; }\n\n.va-btn-group > .va-btn-group:first-child:not(:last-child),\n.va-btn-group > .va-btn:last-child,\n.va-btn-group > .va-btn-group:first-child:not(:last-child),\n.va-btn-group > .va-dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.va-btn-group > .va-btn-group:last-child:not(:first-child),\n.va-btn-group > .va-btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n/**\nAnd, of course, when the button group is a vertical button group arrangement.\n*/\n.va-btn-group-vertical {\n  position: relative;\n  display: inline-flex !important;\n  flex-direction: column;\n  vertical-align: middle; }\n\n.va-btn-group-vertical > .va-btn {\n  position: relative;\n  float: left;\n  width: 100%;\n  display: flex; }\n\n.va-btn-group-vertical .va-btn {\n  width: 100%; }\n\n.va-btn-group-vertical > .va-btn:not(:first-child):not(:last-child):not(.va-dropdown-toggle),\n.va-btn-group-vertical > .va-dropdown-con:not(:first-child):not(:last-child):not(.va-dropdown-toggle) {\n  border-radius: 0;\n  margin-bottom: 1px;\n  margin-right: 0; }\n\n.va-btn-group-vertical > .va-btn:first-child {\n  margin-top: 0; }\n\n.va-btn-group-vertical > .va-btn:first-child:not(:last-child) {\n  margin-bottom: 1px; }\n\n.va-btn-group-vertical > .va-btn:first-child:not(:last-child):not(.va-dropdown-toggle) {\n  border-radius: 4px 4px 0 0; }\n\n.va-btn-group-vertical > .va-btn:last-child:not(:first-child),\n.va-btn-group-vertical > .va-dropdown-toggle:not(:first-child) {\n  border-radius: 0 0 4px 4px; }\n\n.va-btn-group-vertical > .va-btn-group-vertical {\n  float: left; }\n\n.va-btn-group-vertical > .va-btn-group-vertical:not(:first-child):not(:last-child),\n.va-btn-group-vertical > .va-btn {\n  border-radius: 0; }\n\n.va-btn-group-vertical > .va-btn-group-vertical:first-child:not(:last-child),\n.va-btn-group-vertical > .va-btn:last-child,\n.va-btn-group-vertical > .va-btn-group-vertical:first-child:not(:last-child),\n.va-btn-group-vertical > .va-dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n\n.va-btn-group-vertical > .va-btn-group-vertical:last-child:not(:first-child),\n.va-btn-group-vertical > .va-btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n\n/*# sourceMappingURL=VaButton.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  

  
  var VaButton = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    createInjector,
    undefined
  );

function extend() {
  let target = {};

  for (let i = 0; i < arguments.length; i++) {
    let source = arguments[i];

    for( let key in source ) {
      if( source.hasOwnProperty(key) ) {
        target[key] = source[key]; } }
  }

  return target
}

let activeFocusTraps = (function() {
  let trapQueue = [];
  return {
    activateTrap: function(trap) {
      if (trapQueue.length > 0) {
        let activeTrap = trapQueue[trapQueue.length - 1];
        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      let trapIndex = trapQueue.indexOf(trap);
      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },

    deactivateTrap: function(trap) {
      let trapIndex = trapQueue.indexOf(trap);
      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
})();

function focusTrap(element, userOptions) {
  let doc = document;
  let container =
    typeof element === 'string' ? doc.querySelector(element) : element;

  let config = extend(
    {
      returnFocusOnDeactivate: true,
      escapeDeactivates: true
    },
    userOptions
  );

  let state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };

  let trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };

  return trap;

  function activate(activateOptions) {
    if (state.active) return;

    updateTabbableNodes();

    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;

    let onActivate =
      activateOptions && activateOptions.onActivate
        ? activateOptions.onActivate
        : config.onActivate;
    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;

    removeListeners();
    state.active = false;
    state.paused = false;

    activeFocusTraps.deactivateTrap(trap);

    let onDeactivate =
      deactivateOptions && deactivateOptions.onDeactivate !== undefined
        ? deactivateOptions.onDeactivate
        : config.onDeactivate;
    if (onDeactivate) {
      onDeactivate();
    }

    let returnFocus =
      deactivateOptions && deactivateOptions.returnFocus !== undefined
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate;
    if (returnFocus) {
      delay(function() {
        tryFocus(state.nodeFocusedBeforeActivation);
      });
    }

    return trap;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    updateTabbableNodes();
    addListeners();
  }

  function addListeners() {
    if (!state.active) return;

    // There can be only one listening focus trap at a time
    activeFocusTraps.activateTrap(trap);

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    delay(function() {
      tryFocus(getInitialFocusNode());
    });
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });

    return trap;
  }

  function removeListeners() {
    if (!state.active) return;

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);

    return trap;
  }

  function getNodeForOption(optionName) {
    let optionValue = config[optionName];
    let node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function getInitialFocusNode() {
    let node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error(
        "You can't have a focus-trap without at least one focusable element"
      );
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  function checkPointerDown(e) {
    if (container.contains(e.target)) return;
    if (config.clickOutsideDeactivates) {
      deactivate({
        returnFocus: !tabbable.isFocusable(e.target)
      });
    } else {
      e.preventDefault();
    }
  }

  // In case focus escapes the trap for some strange reason, pull it back in.
  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (container.contains(e.target) || e.target instanceof Document) {
      return;
    }
    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      deactivate();
      return;
    }
    if (isTabEvent(e)) {
      checkTab(e);
      //return;
    }
  }

  // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  function checkTab(e) {
    updateTabbableNodes();
    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }
    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      //return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    let tabbableNodes = tabbable(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode =
      tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus();
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  }
}

function isSelectableInput(node) {
  return (
    node.tagName &&
    node.tagName.toLowerCase() === 'input' &&
    typeof node.select === 'function'
  );
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' // || e.keyCode === 27;
}

function isTabEvent(e) {
  return e.key === 'Tab' // || e.keyCode === 9;
}

function delay(fn) {
  return setTimeout(fn, 0);
}

let candidateSelectors = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
];
let candidateSelector = candidateSelectors.join(',');

let matches = typeof Element === 'undefined'
  ? function () {}
  : Element.prototype.matches  || Element.prototype.webkitMatchesSelector; // || Element.prototype.msMatchesSelector

function tabbable(el, options) {
  options = options || {};

  let elementDocument = el.ownerDocument || el;
  let regularTabbables = [];
  let orderedTabbables = [];

  let untouchabilityChecker = new UntouchabilityChecker(elementDocument);
  let candidates = el.querySelectorAll(candidateSelector);

  if (options['includeContainer']) {
    if (matches.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  let i, candidate, candidateTabindex;
  for (i = 0; i < candidates.length; i++) {
    candidate = candidates[i];

    if (!isNodeMatchingSelectorTabbable(candidate, untouchabilityChecker)) continue;

    candidateTabindex = getTabindex(candidate);
    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate,
      });
    }
  }

  return orderedTabbables
    .sort(sortOrderedTabbables)
    .map(function (a) {
      return a.node
    })
    .concat(regularTabbables);
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node, untouchabilityChecker) {
  return !(!isNodeMatchingSelectorFocusable(node, untouchabilityChecker)
    || isNonTabbableRadio(node)
    || getTabindex(node) < 0);

}

function isTabbable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, candidateSelector) === false) return false;
  return isNodeMatchingSelectorTabbable(node, untouchabilityChecker);
}

function isNodeMatchingSelectorFocusable(node, untouchabilityChecker) {
  untouchabilityChecker = untouchabilityChecker || new UntouchabilityChecker(node.ownerDocument || node);
  return !(node.disabled
    || isHiddenInput(node)
    || untouchabilityChecker.isUntouchable(node));

}

let focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');
function isFocusable(node, untouchabilityChecker) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, focusableCandidateSelector) === false) return false;
  return isNodeMatchingSelectorFocusable(node, untouchabilityChecker);
}

function getTabindex(node) {
  let tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
  if (!isNaN(tabindexAttr)) return tabindexAttr;
  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}

// Array.prototype.find not available in IE.
function find(list, predicate) {
  for (let i = 0, length = list.length; i < length; i++) {
    if (predicate(list[i])) return list[i];
  }
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }
}

function isTabbableRadio(node) {
  if (!node.name) return true;
  // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.
  let radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  let checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
}

// An element is "untouchable" if *it or one of its ancestors* has
// `visibility: hidden` or `display: none`.
function UntouchabilityChecker(elementDocument) {
  this.doc = elementDocument;
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed. The cache contains tuples
  // mapping nodes to their boolean result.
  this.cache = [];
}

// getComputedStyle accurately reflects `visibility: hidden` of ancestors
// but not `display: none`, so we need to recursively check parents.
UntouchabilityChecker.prototype.hasDisplayNone = function hasDisplayNone(node, nodeComputedStyle) {
  if (node.nodeType !== Node.ELEMENT_NODE) return false;

  // Search for a cached result.
  let cached = find(this.cache, function(item) {
    return item === node;
  });
  if (cached) return cached[1];

  nodeComputedStyle = nodeComputedStyle || this.doc.defaultView.getComputedStyle(node);

  let result = false;

  if (nodeComputedStyle.display === 'none') {
    result = true;
  } else if (node.parentNode) {
    result = this.hasDisplayNone(node.parentNode);
  }

  this.cache.push([node, result]);

  return result;
};

UntouchabilityChecker.prototype.isUntouchable = function isUntouchable(node) {
  if (node === this.doc.documentElement) return false;
  let computedStyle = this.doc.defaultView.getComputedStyle(node);
  if (this.hasDisplayNone(node, computedStyle)) return true;
  return computedStyle.visibility === 'hidden';
};

var getScrollBarWidth = () => {
  let inner = document.createElement('p');
  inner.style.width = '100%';
  inner.style.height = '200px';

  let outer = document.createElement('div');
  outer.style.position = 'absolute';
  outer.style.top = '0px';
  outer.style.left = '0px';
  outer.style.visibility = 'hidden';
  outer.style.width = '200px';
  outer.style.height = '150px';
  outer.style.overflow = 'hidden';
  outer.appendChild(inner);

  document.body.appendChild(outer);
  let w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  let w2 = inner.offsetWidth;
  if (w1 === w2) w2 = outer.clientWidth;

  document.body.removeChild(outer);

  return (w1 - w2)
};

// browser environment sniffing
var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

// UA sniffing for working around browser-specific quirks
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;

/**
 * for IE9 compatibility: when both class and :class are present
 * getAttribute('class') returns wrong value..
 *
 * @param {Element} el
 * @return {String}
 */
function getClass (el) {
  var classname = el.className;
  if (typeof classname === 'object') {
    classname = classname.baseVal || '';
  }
  return classname
}

/**
 * in IE9, setAttribute('class') will result in empty class
 * if the element also has the :class attribute; however in
 * phantomJS, setting `className` does not work on SVG elements..
 * so we have to do a conditional check here.
 *
 * @param {Element} el
 * @param {String} cls
 */
function setClass (el, cls) {
  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
    el.className = cls;
  } else {
    el.setAttribute('class', cls);
  }
}

/**
 * add class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */
function addClass (el, cls) {
  if (el.classList) {
    el.classList.add(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      setClass(el, (cur + cls).trim());
    }
  }
}

/**
 * remove class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */
function removeClass (el, cls) {
  if (el.classList) {
    el.classList.remove(cls);
  } else {
    var cur = ' ' + getClass(el) + ' ';
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    setClass(el, cur.trim());
  }
  if (!el.className) {
    el.removeAttribute('class');
  }
}

var element = {
  getClass,
  removeClass,
  addClass,
  setClass,
  inBrowser,
  UA,
  isIE9
};

var VaModal = {
  confirm: {
    en: 'Confirm',
    es: 'Confirmar',
    fr: 'Confirmer',
    ru: 'Подтвердить'
  },
  cancel: {
    en: 'Cancel',
    es: 'Cancelar',
    fr: 'Annuler',
    ru: 'Отмена'
  }
};

var VaSelect = {
  all: {
    en: 'All',
    es: 'Todos',
    fr: 'Tous',
    ru: 'Все'
  }
};

var VaValidate = {
  required: {
    en: 'This field is required',
    es: 'Este campo es requerido',
    fr: 'Ce champs est requis',
    ru: 'Это поле обязательное'
  },
  maxLength: {
    en: 'Input can not be longer than ',
    es: 'La entrada no puede ser más larga que ',
    fr: 'Le nombre de caractère doit être inférieur ou égale à ',
    ru: 'Данные не могут быть длиннее чем '
  },
  minLength: {
    en: 'Input can not be less than ',
    es: 'La entrada no puede ser menor que ',
    fr: 'Le nombre de caractère doit être supérieur ou égale à ',
    ru: 'Данные не могут быть меньше чем '
  },
  phone: {
    en: 'Please enter a valid phone number',
    es: 'Por favor ingrese un número de teléfono válido',
    fr: "Merci d'inscrire un numéro de téléphone valide",
    ru: 'Введите правильный номер телефона'
  },
  number: {
    en: 'Numbers only',
    es: 'Solo numeros',
    fr: 'Chiffres uniquement',
    ru: 'Только цифры'
  },
  telephone: {
    en: 'Please enter a valid telephone number',
    es: 'Por favor introduce un número de teléfono válido',
    fr: "Merci d'inscrire un numéro de téléphone valide",
    ru: 'Введите праивльный номер телефона'
  },
  email: {
    en: 'Please enter a valid email address',
    es: 'Por favor, introduce una dirección de correo electrónico válida',
    fr: "Merci d'inscrire une adresse email valide",
    ru: 'Введите правильный e-mail адрес'
  }
};

var VaDatepicker = {
  sunday: {
    en: 'Sun',
    es: 'Do',
    fr: 'Dim',
    ru: 'Вс'
  },
  monday: {
    en: 'Mon',
    es: 'Lu',
    fr: 'Lun',
    ru: 'Пн'
  },
  tuesday: {
    en: 'Tue',
    es: 'Ma',
    fr: 'Mar',
    ru: 'Вт'
  },
  wednesday: {
    en: 'Wed',
    es: 'Mi',
    fr: 'Mer',
    ru: 'Ср'
  },
  thursday: {
    en: 'Thu',
    es: 'Ju',
    fr: 'Jeu',
    ru: 'Чт'
  },
  friday: {
    en: 'Fri',
    es: 'Vi',
    fr: 'Ven',
    ru: 'Пт'
  },
  saturday: {
    en: 'Sat',
    es: 'Sá',
    fr: 'Sam',
    ru: 'Сб'
  },
  january: {
    en: 'January',
    es: 'Ene',
    fr: 'Janvier',
    ru: 'Январь'
  },
  february: {
    en: 'February',
    es: 'Feb',
    fr: 'Février',
    ru: 'Февраль'
  },
  march: {
    en: 'March',
    es: 'Mar',
    fr: 'Mars',
    ru: 'Март'
  },
  april: {
    en: 'April',
    es: 'Abr',
    fr: 'Avril',
    ru: 'Апрель'
  },
  may: {
    en: 'May',
    es: 'May',
    fr: 'Mai',
    ru: 'Май'
  },
  june: {
    en: 'June',
    es: 'Jun',
    fr: 'Juin',
    ru: 'Июнь'
  },
  july: {
    en: 'July',
    es: 'Jul',
    fr: 'Juillet',
    ru: 'Июль'
  },
  august: {
    en: 'August',
    es: 'Aug',
    fr: 'Août',
    ru: 'Август'
  },
  september: {
    en: 'September',
    es: 'Sep',
    fr: 'Septembre',
    ru: 'Сентябрь'
  },
  october: {
    en: 'October',
    es: 'Oct',
    fr: 'Octobre',
    ru: 'Октябрь'
  },
  november: {
    en: 'November',
    es: 'Nov',
    fr: 'Novembre',
    ru: 'Ноябрь'
  },
  december: {
    en: 'December',
    es: 'Dec',
    fr: 'Décembre',
    ru: 'Декабрь'
  }
};

var VaTimepicker = {
  hour: {
    en: 'H',
    es: 'H',
    fr: 'H',
    ru: 'Ч'
  },
  minute: {
    en: 'M',
    es: 'M',
    fr: 'M',
    ru: 'М'
  },
  second: {
    en: 'S',
    es: 'S',
    fr: 'S',
    ru: 'С'
  }
};

var locale = {
  VaModal,
  VaSelect,
  VaValidate,
  VaDatepicker,
  VaTimepicker
};

var localeMixin = (name) => {
  return {
    methods: {
      getL (key) {
        return locale[name][key][this.VaLocale || window.VaLocale || 'en']
      }
    }
  }
};

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
//
//

var script$2 = {
  name: 'VaLoading',
  props: {
    type: {
      type: String
    },
    size: {
      type: String,
      default: 'md',
      validator (v) {
        return ['xl', 'lg', 'md', 'sm', 'xs'].includes(v)
      }
    },
    center: {
      type: Boolean
    },
    color: {
      type: String,
      default: '#6C798F',
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  mounted () {
    if (this.center) {
      document.querySelector('body').appendChild(this.$refs.load);
      this.$once('hook:beforeDestroy', () => {
        document.querySelector('body').removeChild(this.$refs.load);
      });
    }
  },
  computed: {
    classObj () {
      let { classPrefix, center } = this;
      let classes = {};

      classes[classPrefix + '-page-loading-con'] = true;
      classes[classPrefix + '-loading-center'] = center;

      return classes
    },
    iclassObj () {
      let { classPrefix, type, size } = this;
      let classes = {};

      classes[classPrefix + '-page-loading'] = true;
      type ? (classes[classPrefix + '-loading-' + type] = true) : '';
      size ? (classes[classPrefix + '-loading-' + size] = true) : '';

      return classes
    }
  }
};

/* script */
const __vue_script__$2 = script$2;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$2.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Loading/VaLoading.vue";

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("transition", { attrs: { name: "fade" } }, [
    _c(
      "span",
      { ref: "load", class: _vm.classObj },
      [
        _c("i", { class: _vm.iclassObj }),
        _vm._v(" "),
        _vm._t("default"),
        _vm._v(" "),
        _c(
          "svg",
          {
            class: _vm.classPrefix + "-spinner",
            attrs: { viewBox: "0 0 50 50" }
          },
          [
            _c("circle", {
              class: _vm.classPrefix + "-path",
              style: { stroke: _vm.color },
              attrs: {
                cx: "25",
                cy: "25",
                r: "20",
                fill: "none",
                "stroke-width": "5"
              }
            })
          ]
        )
      ],
      2
    )
  ])
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-6c0bf8c0_0", { source: "/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-page-loading-con {\n  display: inline-block;\n  z-index: 1000;\n  position: relative;\n  /*see _button.scss for more position information related to*/\n  /*-page-loading-con being inside of a button*/\n  transition: opacity 0.3s ease-in-out;\n}\n.va-path {\n  stroke: #dcdcdc;\n  stroke-linecap: round;\n  stroke-width: 5px;\n  transform-origin: center center 0px;\n  animation: newdash 1s ease-in-out forwards;\n}\n.va-spinner {\n  transform-origin: center center 0px;\n  animation: rotate 1s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite;\n}\n.va-loading-center .va-loading-xl {\n  margin: -35px 0 0 -35px;\n}\n.va-loading-xl {\n  width: 60px;\n}\n.va-loading-xl + svg {\n    width: 60px;\n}\n.va-loading-center .va-loading-lg {\n  margin: -20px 0 0 -20px;\n}\n.va-loading-lg {\n  width: 40px;\n}\n.va-loading-lg + svg {\n    width: 40px;\n}\n.va-loading-center .va-loading-md {\n  margin: -15px 0 0 -15px;\n}\n.va-loading-md {\n  width: 30px;\n}\n.va-loading-md + svg {\n    width: 30px;\n    transform-origin: center center 0px;\n}\n.va-loading-center .va-loading-sm {\n  margin: -9px 0 0 -9px;\n}\n.va-loading-sm {\n  width: 18px;\n}\n.va-loading-sm + svg {\n    width: 18px;\n}\n.va-loading-center .va-loading-xs {\n  margin: -6px 0 0 -6px;\n}\n.va-loading-xs {\n  width: 12px;\n}\n.va-loading-xs + svg {\n    width: 12px;\n}\n.va-page-loading {\n  animation: rotate 2s linear infinite;\n  font-size: 28px;\n  float: left;\n  width: 20px;\n}\n.va-loading-center {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.88);\n  display: flex;\n  align-content: center;\n  justify-content: center;\n}\n@keyframes rotate {\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes newdash {\n0% {\n    transform: rotate(50deg);\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n}\n100% {\n    transform: rotate(120deg);\n    stroke-dasharray: 30, 150;\n    stroke-dashoffset: -35;\n}\n}\n\n/*# sourceMappingURL=VaLoading.vue.map */", map: {"version":3,"sources":["VaLoading.vue","/Users/ax/Documents/prj/cue/app/aaa/src/Loading/VaLoading.vue"],"names":[],"mappings":"AAAA,QAAQ;AACR,YAAY;AACZ,UAAU;AACV,QAAQ;AACR,SAAS;AACT,UAAU;AACV,OAAO;AACP,iBAAiB;AACjB,eAAe;AACf,WAAW;AACX,YAAY;ACuEZ;EACA,qBAAA;EACA,aAAA;EACA,kBAAA;EACA,4DAAA;EACA,6CAAA;EACA,oCAAA;AAAA;AAGA;EACA,eAAA;EACA,qBAAA;EACA,iBAAA;EACA,mCAAA;EACA,0CAAA;AAAA;AAEA;EACA,mCAAA;EACA,gEAAA;AAAA;AAGA;EAEA,uBAAA;AAAA;AAGA;EACA,WAAA;AAAA;AADA;IAGA,WAAA;AAAA;AAIA;EAEA,uBAAA;AAAA;AAGA;EACA,WAAA;AAAA;AADA;IAGA,WAAA;AAAA;AAIA;EAEA,uBAAA;AAAA;AAGA;EACA,WAAA;AAAA;AADA;IAGA,WAAA;IACA,mCAAA;AAAA;AAIA;EAEA,qBAAA;AAAA;AAGA;EACA,WAAA;AAAA;AADA;IAGA,WAAA;AAAA;AAIA;EAEA,qBAAA;AAAA;AAGA;EACA,WAAA;AAAA;AADA;IAGA,WAAA;AAAA;AAIA;EACA,oCAAA;EACA,eAAA;EACA,WAAA;EACA,WAAA;AAAA;AAEA;EACA,eAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,qCAAA;EACA,aAAA;EACA,qBAAA;EACA,uBAAA;AAAA;AAEA;AACA;IACA,yBAAA;AAAA;AAAA;AAGA;AACA;IACA,wBAAA;IACA,wBAAA;IACA,oBAAA;AAAA;AAEA;IACA,yBAAA;IAEA,yBAAA;IACA,sBAAA;AAAA;AAAA;;AD7FA,wCAAwC","file":"VaLoading.vue","sourcesContent":["/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-page-loading-con {\n  display: inline-block;\n  z-index: 1000;\n  position: relative;\n  /*see _button.scss for more position information related to*/\n  /*-page-loading-con being inside of a button*/\n  transition: opacity 0.3s ease-in-out; }\n\n.va-path {\n  stroke: #dcdcdc;\n  stroke-linecap: round;\n  stroke-width: 5px;\n  transform-origin: center center 0px;\n  animation: newdash 1s ease-in-out forwards; }\n\n.va-spinner {\n  transform-origin: center center 0px;\n  animation: rotate 1s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite; }\n\n.va-loading-center .va-loading-xl {\n  margin: -35px 0 0 -35px; }\n\n.va-loading-xl {\n  width: 60px; }\n  .va-loading-xl + svg {\n    width: 60px; }\n\n.va-loading-center .va-loading-lg {\n  margin: -20px 0 0 -20px; }\n\n.va-loading-lg {\n  width: 40px; }\n  .va-loading-lg + svg {\n    width: 40px; }\n\n.va-loading-center .va-loading-md {\n  margin: -15px 0 0 -15px; }\n\n.va-loading-md {\n  width: 30px; }\n  .va-loading-md + svg {\n    width: 30px;\n    transform-origin: center center 0px; }\n\n.va-loading-center .va-loading-sm {\n  margin: -9px 0 0 -9px; }\n\n.va-loading-sm {\n  width: 18px; }\n  .va-loading-sm + svg {\n    width: 18px; }\n\n.va-loading-center .va-loading-xs {\n  margin: -6px 0 0 -6px; }\n\n.va-loading-xs {\n  width: 12px; }\n  .va-loading-xs + svg {\n    width: 12px; }\n\n.va-page-loading {\n  animation: rotate 2s linear infinite;\n  font-size: 28px;\n  float: left;\n  width: 20px; }\n\n.va-loading-center {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.88);\n  display: flex;\n  align-content: center;\n  justify-content: center; }\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes newdash {\n  0% {\n    transform: rotate(50deg);\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0; }\n  100% {\n    transform: rotate(120deg);\n    stroke-dasharray: 30, 150;\n    stroke-dashoffset: -35; } }\n\n/*# sourceMappingURL=VaLoading.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  

  
  var VaLoading = normalizeComponent(
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

const components = { 'va-loading':VaLoading, 'va-button':VaButton, 'va-icon':VaIcon };

var script$3 = {
  name: 'VaModal',
  components: components,
  mixins: [localeMixin('VaModal')],
  props: {
    title: {
      type: String,
      default: '',
      required: false
    },
    show: {
      type: Boolean,
      default: false,
      required: false
    },
    width: {
      type: String,
      default: '600px',
      required: false
    },
    effect: {
      type: String,
      default: 'fade-up',
      required: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    backdrop: {
      type: Boolean,
      default: true,
      required: false
    },
    backdropClickable: {
      type: Boolean,
      default: true,
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    let show = this.show;
    return {
      isShow: show,
      focused: false,
      numberOfParentModals: 0,
      focusTrap: null
    }
  },
  computed: {
    classObj () {
      let { classPrefix, effect } = this;
      let classes = {};

      classes[classPrefix + '-modal'] = true;
      classes[classPrefix + '-modal-' + effect] = true;

      return classes
    },
    styleObj () {
      let { backdrop, numberOfParentModals } = this;
      let style = {};

      if (!backdrop) {
        style['background'] = 'none !important';
      }

      let topMargin = parseInt(numberOfParentModals) * 10;
      style['padding-top'] = topMargin + 'px';

      return style
    },
    modalIsLoading () {
      return this.loading
    }
  },
  created () {
    const escapeHandler = e => {
      if (e.key === 'Escape' && this.isTop()) {
        this.close();
      }
    };
    document.addEventListener('keydown', escapeHandler);
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler);
    });
  },
  mounted () {
    this.focusTrap = focusTrap(this.$refs.modal, {
      clickOutsideDeactivates: true,
      returnFocusOnDeactivate: true,
      fallbackFocus: this.$refs.modal
    });

    //document.querySelector('body').appendChild(this.$refs.modal)
    //this.$once('hook:beforeDestroy', () => {
    //  document.querySelector('body').removeChild(this.$refs.modal) } )
  },
  watch: {
    modalIsLoading (val) {
      if (!val) {
        setTimeout(() => {
          this.focusTrap.activate();
        }, 50);
      }
    },
    isShow (val) {
      /**
       * Stackable logic
       */
      if (val) {
        this.$emit('show', { type: 'show' });
        let x = document.getElementsByClassName(this.classPrefix + '-modal-in');
        this.numberOfParentModals = x.length;

        /**
         * If any parent modals do exist, then let's stack them in a
         * nicely fashion, by moving each over to the left a bit.
         */
        let distanceToMove = 20;
        if (this.numberOfParentModals > 0) {
          for (let i = 0; i < this.numberOfParentModals; i++) {
            let currentMarginLeft = x[i].style['margin-left'];
            if (currentMarginLeft && currentMarginLeft !== '0px') {
              /**
               * If this modal already has a margin-left applied,
               * then we must have hit it already. If that's the case,
               * then we simply double the value by whatever it
               * already is.
               */
              // Slice 'px' off from the end.
              let m = Math.abs(currentMarginLeft.slice(0, -2));
              let dist = parseInt(m + distanceToMove);
              x[i].style['margin-left'] = '-' + dist + 'px';
            } else {
              /**
               * If the modal does not already have a margin-left,
               * then we just move it over by distanceToMove.
               */
              x[i].style['margin-left'] = distanceToMove * -1 + 'px';
            }
          }
        }
      } else {
        this.$emit('hide', { type: 'hide' });

        let x = document.getElementsByClassName(this.classPrefix + '-modal-in');
        this.numberOfParentModals = x.length;
        let distanceToMove = 20;
        if (this.numberOfParentModals > 0) {
          for (let i = 0; i < this.numberOfParentModals; i++) {
            let currentMarginLeft = x[i].style['margin-left'];
            if (currentMarginLeft && currentMarginLeft !== '0px') {
              let m = Math.abs(currentMarginLeft.slice(0, -2));
              let dist = parseInt(m - distanceToMove);
              x[i].style['margin-left'] = '-' + dist + 'px';
            }
          }
        }
      }

      /**
       * Classes
       */
      const el = this.$el;
      const body = document.body;
      const scrollBarWidth = getScrollBarWidth();
      if (val) {
        if (!this.modalIsLoading) {
          el.querySelector('.' + this.classPrefix + '-modal-content').focus();
        }
        el.style.display = 'block';
        // this timeout is required for opacity transition
        setTimeout(() => {
          element.addClass(el, this.classPrefix + '-modal-in');
        }, 20);
        element.addClass(body, this.classPrefix + '-modal-open');
        if (!scrollBarWidth) {
          element.addClass(body, this.classPrefix + '-modal-hide-y');
        }
        if (this.backdropClickable) {
          this._blurModalContentEvent = EventListener.listen(
            this.$el,
            'click',
            e => {
              if (e.target === el) this.isShow = false;
            }
          );
        }

        if (!this.modalIsLoading) {
          this.focusTrap.activate();
        }
      } else {
        if (this._blurModalContentEvent) this._blurModalContentEvent.remove();
        element.removeClass(el, this.classPrefix + '-modal-in');
        element.addClass(el, this.classPrefix + '-modal-out');
        setTimeout(() => {
          el.style.display = 'none';
          element.removeClass(body, this.classPrefix + '-modal-open');
          element.removeClass(body, this.classPrefix + '-modal-hide-y');
          element.removeClass(el, this.classPrefix + '-modal-out');
          body.style.paddingRight = '0';
          this.$emit('closed', { type: 'closed' });
        }, 300);

        this.focusTrap['deactivate']();
      }
    }
  },
  methods: {
    isTop () {
      return (
        this.isShow &&
        (!this.$refs.modal.style['margin-left'] ||
          this.$refs.modal.style['margin-left'] === '0px')
      )
    },
    close () {
      this.isShow = false;
    },
    open () {
      this.isShow = true;
    },
    confirm () {
      this.$emit('confirm', { type: 'confirm' });
    }
  }
};

/* script */
const __vue_script__$3 = script$3;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$3.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Modal/VaModal.vue";

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "modal", class: _vm.classObj, style: _vm.styleObj }, [
    _c(
      "div",
      { class: _vm.classPrefix + "-modal-dialog", style: { width: _vm.width } },
      [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.modalIsLoading,
                expression: "!modalIsLoading"
              }
            ],
            class: _vm.classPrefix + "-modal-content"
          },
          [
            _vm._t("header", [
              _c(
                "div",
                { class: _vm.classPrefix + "-modal-header" },
                [
                  _c(
                    "va-button",
                    {
                      class: _vm.classPrefix + "-close",
                      attrs: { tabindex: "-1", type: "subtle" },
                      on: { click: _vm.close }
                    },
                    [_c("va-icon", { attrs: { type: "times" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { class: _vm.classPrefix + "-modal-title" },
                    [_vm._t("title", [_vm._v(_vm._s(_vm.title))])],
                    2
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { class: _vm.classPrefix + "-modal-body" },
              [_vm._t("body")],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { class: _vm.classPrefix + "-modal-footer" },
              [
                _vm._t("footer", [
                  _c(
                    "va-button",
                    {
                      attrs: { focused: _vm.focused, type: "primary" },
                      nativeOn: {
                        click: function($event) {
                          return _vm.confirm($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.getL("confirm")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "va-button",
                    {
                      attrs: { type: "subtle" },
                      nativeOn: {
                        click: function($event) {
                          return _vm.close($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.getL("cancel")))]
                  )
                ])
              ],
              2
            )
          ],
          2
        )
      ]
    )
  ])
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-956c2eec_0", { source: "/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-modal .va-modal-dialog,\n.va--theme-light.va-modal .va-modal-dialog {\n  box-shadow: rgba(9, 30, 66, 0.2) 0px 0px 0px 1px, rgba(9, 30, 66, 0.08) 0px 2px 1px, rgba(9, 30, 66, 0.51) 0px 0px 20px -6px;\n}\n.va-modal.va-modal-in,\n.va--theme-light.va-modal.va-modal-in {\n  background: rgba(9, 30, 66, 0.55);\n}\n.va-modal .va-modal-content,\n.va--theme-light.va-modal .va-modal-content {\n  background-color: white;\n  color: inherit;\n}\n.va-modal .va-modal-loading,\n.va--theme-light.va-modal .va-modal-loading {\n  background-color: white;\n}\n.va-modal .va-modal-title,\n.va--theme-light.va-modal .va-modal-title {\n  color: #091e43;\n}\n.va-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2100;\n  display: none;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  transition: all 0.3s ease;\n  /*fade*\n  &-fade &-dialog {\n    opacity: 0;\n    transition: opacity 0.3s;\n  }\n  /*expands to class=\"va-modal-fade va-modal-in\" and references a child va-modal-dialog selector*/\n  /*fade-up*/\n}\n.va-modal-open {\n    overflow-x: hidden;\n}\n.va-modal-hide-y {\n    overflow-y: hidden;\n}\n.va-modal-dialog {\n    position: relative;\n    width: auto;\n    margin: 80px auto 80px auto;\n    border-radius: 3px;\n    max-width: 90%;\n}\n.va-modal-content {\n    position: relative;\n    background-clip: padding-box;\n    border-radius: 3px;\n    outline: 0;\n    box-shadow: none;\n    border: none;\n    padding: 15px;\n}\n.va-modal-loading {\n    position: relative;\n    border-radius: 3px;\n    outline: 0;\n    box-shadow: none;\n    border: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 30px 0;\n}\n.va-modal-loading .va-page-loading-con {\n      display: table;\n      margin: 0 auto;\n}\n.va-modal-header {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row-reverse;\n}\n.va-modal-title {\n    margin: 0;\n    line-height: 1.7;\n    font-weight: 500;\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n}\n.va-modal-title .va-fa {\n      font-size: 14px;\n      margin-right: 10px;\n}\n.va-modal-body {\n    padding: 15px 0;\n}\n.va-modal-footer {\n    text-align: right;\n}\n.va-modal-footer .va-btn {\n      margin-left: 5px;\n}\n.va-modal-fade.va-modal-in .va-modal-dialog {\n    opacity: 1 !important;\n}\n.va-modal-fade-up .va-modal-dialog {\n    opacity: 0;\n    transform: translateY(20px);\n    transition: transform 0.3s, opacity 0.3s;\n}\n.va-modal-fade-up.va-modal-in .va-modal-dialog {\n    opacity: 1;\n    transform: translateY(0);\n}\n.va-modal-fade-up.va-modal-out .va-modal-dialog {\n    opacity: 0;\n    transform: translateY(-20px);\n}\n\n/*# sourceMappingURL=VaModal.vue.map */", map: {"version":3,"sources":["VaModal.vue","/Users/ax/Documents/prj/cue/app/aaa/src/Modal/VaModal.vue"],"names":[],"mappings":"AAAA,QAAQ;AACR,YAAY;AACZ,UAAU;AACV,QAAQ;AACR,SAAS;AACT,UAAU;AACV,OAAO;AACP,iBAAiB;AACjB,eAAe;AACf,WAAW;AACX,YAAY;ACwSZ;;EACA,4HAgCA;AAAA;AA7BA;;EACA,iCAoBA;AAAA;AAjBA;;EACA,uBAAA;EACA,cAiBA;AAAA;AAdA;;EACA,uBAAA;AAAA;AAGA;;EACA,cAAA;AAAA;AAoBA;EACA,eAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,aAAA;EACA,aAAA;EACA,cAAA;EACA,iCAAA;EACA,UAAA;EACA,yBAAA;EA6EA;;;;;iGD/XiG;ECyYjG,UAAA;AAAA;AArFA;IACA,kBAAA;AAAA;AAGA;IACA,kBAAA;AAAA;AAGA;IACA,kBAAA;IACA,WAAA;IACA,2BAAA;IACA,kBAAA;IACA,cAAA;AAAA;AAGA;IACA,kBAAA;IACA,4BAAA;IACA,kBAAA;IACA,UAAA;IACA,gBAAA;IACA,YAAA;IACA,aAAA;AAAA;AAGA;IACA,kBAAA;IACA,kBAAA;IACA,UAAA;IACA,gBAAA;IACA,YAAA;IACA,aAAA;IACA,uBAAA;IACA,mBAAA;IACA,eAAA;AAAA;AATA;MAYA,cAAA;MACA,cAAA;AAAA;AAIA;IACA,aAAA;IACA,8BAAA;IACA,2BAAA;AAAA;AAGA;IACA,SAAA;IACA,gBAAA;IACA,gBAAA;IACA,eAAA;IACA,aAAA;IACA,mBAAA;AAAA;AANA;MASA,eAAA;MACA,kBAAA;AAAA;AAIA;IACA,eAAA;AAAA;AAGA;IACA,iBAAA;AAAA;AADA;MAIA,gBAAA;AAAA;AAUA;IACA,qBAAA;AAAA;AAIA;IACA,UAAA;IACA,2BAAA;IACA,wCAAA;AAAA;AAGA;IACA,UAAA;IACA,wBAAA;AAAA;AAIA;IACA,UAAA;IACA,4BAAA;AAAA;;ADtVA,sCAAsC","file":"VaModal.vue","sourcesContent":["/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-modal .va-modal-dialog,\n.va--theme-light.va-modal .va-modal-dialog {\n  box-shadow: rgba(9, 30, 66, 0.2) 0px 0px 0px 1px, rgba(9, 30, 66, 0.08) 0px 2px 1px, rgba(9, 30, 66, 0.51) 0px 0px 20px -6px; }\n\n.va-modal.va-modal-in,\n.va--theme-light.va-modal.va-modal-in {\n  background: rgba(9, 30, 66, 0.55); }\n\n.va-modal .va-modal-content,\n.va--theme-light.va-modal .va-modal-content {\n  background-color: white;\n  color: inherit; }\n\n.va-modal .va-modal-loading,\n.va--theme-light.va-modal .va-modal-loading {\n  background-color: white; }\n\n.va-modal .va-modal-title,\n.va--theme-light.va-modal .va-modal-title {\n  color: #091e43; }\n\n.va-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2100;\n  display: none;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  transition: all 0.3s ease;\n  /*fade*\n  &-fade &-dialog {\n    opacity: 0;\n    transition: opacity 0.3s;\n  }\n  /*expands to class=\"va-modal-fade va-modal-in\" and references a child va-modal-dialog selector*/\n  /*fade-up*/ }\n  .va-modal-open {\n    overflow-x: hidden; }\n  .va-modal-hide-y {\n    overflow-y: hidden; }\n  .va-modal-dialog {\n    position: relative;\n    width: auto;\n    margin: 80px auto 80px auto;\n    border-radius: 3px;\n    max-width: 90%; }\n  .va-modal-content {\n    position: relative;\n    background-clip: padding-box;\n    border-radius: 3px;\n    outline: 0;\n    box-shadow: none;\n    border: none;\n    padding: 15px; }\n  .va-modal-loading {\n    position: relative;\n    border-radius: 3px;\n    outline: 0;\n    box-shadow: none;\n    border: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 30px 0; }\n    .va-modal-loading .va-page-loading-con {\n      display: table;\n      margin: 0 auto; }\n  .va-modal-header {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row-reverse; }\n  .va-modal-title {\n    margin: 0;\n    line-height: 1.7;\n    font-weight: 500;\n    font-size: 20px;\n    display: flex;\n    align-items: center; }\n    .va-modal-title .va-fa {\n      font-size: 14px;\n      margin-right: 10px; }\n  .va-modal-body {\n    padding: 15px 0; }\n  .va-modal-footer {\n    text-align: right; }\n    .va-modal-footer .va-btn {\n      margin-left: 5px; }\n  .va-modal-fade.va-modal-in .va-modal-dialog {\n    opacity: 1 !important; }\n  .va-modal-fade-up .va-modal-dialog {\n    opacity: 0;\n    transform: translateY(20px);\n    transition: transform 0.3s, opacity 0.3s; }\n  .va-modal-fade-up.va-modal-in .va-modal-dialog {\n    opacity: 1;\n    transform: translateY(0); }\n  .va-modal-fade-up.va-modal-out .va-modal-dialog {\n    opacity: 0;\n    transform: translateY(-20px); }\n\n/*# sourceMappingURL=VaModal.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject SSR */
  

  
  var VaModal$1 = normalizeComponent(
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

var script$4 = {
  name: 'VaDesktop',
  mixins: [events],
  props: {
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    return {
      isMobile: false
    }
  },
  created () {
    this.$on('Va@desktopIsMobile', val => {
      this.isMobile = val;
    });

    /**
     * In case this component is instantiated after the App
     * has initially broadcasted isMobile, let's request it.
     */
    this.dispatch('VaApp', 'Va@requestIsMobile', true);
  }
};

/* script */
const __vue_script__$4 = script$4;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$4.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Desktop/VaDesktop.vue";

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [!_vm.isMobile ? _vm._t("default") : _vm._e()], 2)
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VaDesktop = normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );

class ExpiringStorage {
  get (key) {
    const cached = JSON.parse(window.localStorage.getItem(key));
    if (!cached) {
      return null
    }

    const expires = new Date(cached.expires);
    if (expires < new Date()) {
      window.localStorage.removeItem(key);
      return null
    }

    return cached.value
  }

  set (key, value, lifetimeInMinutes) {
    const currentTime = new Date().getTime();
    const expires = new Date(currentTime + lifetimeInMinutes * 60000);

    window.localStorage.setItem(key, JSON.stringify({ value, expires }));
  }
}

var ExpiringStorage$1 = new ExpiringStorage();

//

var script$5 = {
  name: 'VaTabs',
  props: {
    cacheLifetime: {
      type: Number,
      default: 5,
      required: false
    },
    options: {
      type: Object,
      required: false,
      default: () => ({
        useUrlFragment: false
      })
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    return {
      tabs: [],
      activeTabHash: ''
    }
  },
  computed: {
    classObj () {
      let { classPrefix } = this;
      let classes = {};

      classes['clearfix'] = true;
      classes[classPrefix + '-nav-tabs'] = true;

      return classes
    },
    storageKey () {
      return `va-tabs.cache.${window.location.host}${window.location.pathname}`
    }
  },
  created () {
    this.tabs = this.$children;
  },
  mounted () {
    window.addEventListener('hashchange', () =>
      this.selectTab(window.location.hash)
    );

    if (this.findTab(window.location.hash)) {
      this.selectTab(window.location.hash);
      return
    }

    const previousSelectedTabHash = ExpiringStorage$1.get(this.storageKey);

    if (this.findTab(previousSelectedTabHash)) {
      this.selectTab(previousSelectedTabHash);
      return
    }

    if (this.tabs.length) {
      this.selectTab(this.tabs[0].hash);
    }
  },
  methods: {
    findTab (hash) {
      return this.tabs.find(tab => tab.hash === hash)
    },
    selectTab (selectedTabHash, event) {
      if (event && !this.options.useUrlFragment) {
        event.preventDefault();
      }

      const selectedTab = this.findTab(selectedTabHash);

      if (!selectedTab) {
        return
      }

      if (selectedTab.isDisabled) {
        return
      }

      this.tabs.forEach(tab => {
        tab.isActive = tab.hash === selectedTab.hash;
      });

      this.$emit('changed', { tab: selectedTab });

      this.activeTabHash = selectedTab.hash;

      ExpiringStorage$1.set(this.storageKey, selectedTab.hash, this.cacheLifetime);
    },
    setTabVisible (hash, visible) {
      const tab = this.findTab(hash);

      if (!tab) {
        return
      }

      tab.isVisible = visible;

      if (tab.isActive) {
        tab.isActive = visible;

        this.tabs.every(tab => {
          if (tab.isVisible) {
            tab.isActive = true;
            return false
          }
          return true
        });
      }
    },
    liclassObj (tab) {
      let { classPrefix } = this;
      let classes = {};

      classes[classPrefix + '-nav-tab'] = true;
      classes[classPrefix + '-nav-tab-active'] = tab.isActive;

      return classes
    },
    disabledTabClass (tab) {
      if (tab.isDisabled) {
        return this.classPrefix + '-nav-tab-disabled'
      } else {
        return ''
      }
    }
  }
};

/* script */
const __vue_script__$5 = script$5;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$5.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Tabs/VaTabs.vue";

/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [
    _c(
      "ul",
      { class: _vm.classObj },
      _vm._l(_vm.tabs, function(tab, i) {
        return _c(
          "li",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: tab.isVisible,
                expression: "tab.isVisible"
              }
            ],
            key: i,
            class: [_vm.liclassObj(tab), _vm.disabledTabClass(tab)]
          },
          [
            _c("a", {
              attrs: { href: tab.hash },
              domProps: { innerHTML: _vm._s(tab.header) },
              on: {
                click: function($event) {
                  _vm.selectTab(tab.hash, $event);
                }
              }
            })
          ]
        )
      }),
      0
    ),
    _vm._v(" "),
    _c(
      "div",
      { class: _vm.classPrefix + "-tab-content" },
      [_vm._t("default")],
      2
    )
  ])
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = function (inject) {
    if (!inject) return
    inject("data-v-1e84dbe4_0", { source: "/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-nav-tabs {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  border-bottom: 2px solid #ebecf0;\n}\n.va-nav-tabs .va-nav-tab {\n    padding-bottom: 4px;\n    margin-right: 15px;\n    line-height: 20px !important;\n}\n.va-nav-tabs .va-nav-tab-disabled a {\n      color: #a6aeba !important;\n      font-weight: normal !important;\n      cursor: not-allowed;\n}\n.va-nav-tabs .va-nav-tab a, .va-nav-tabs .va-nav-tab a:link {\n      color: #5d6b83;\n      font-weight: 600;\n      padding-bottom: 6px;\n}\n.va-nav-tabs .va-nav-tab a:hover, .va-nav-tabs .va-nav-tab a:link:hover {\n        text-decoration: none !important;\n        color: #0066ff;\n}\n.va-nav-tabs .va-nav-tab a:focus, .va-nav-tabs .va-nav-tab a:link:focus {\n        outline: none;\n}\n.va-nav-tabs .va-nav-tab a:active, .va-nav-tabs .va-nav-tab a:link:active {\n        background: none;\n        color: #0052cc;\n}\n.va-nav-tabs .va-nav-tab-active a, .va-nav-tabs .va-nav-tab-active a:link {\n      color: #0052cc;\n      border-bottom: 2px solid #0066ff;\n}\n\n/*# sourceMappingURL=VaTabs.vue.map */", map: {"version":3,"sources":["VaTabs.vue","/Users/ax/Documents/prj/cue/app/aaa/src/Tabs/VaTabs.vue"],"names":[],"mappings":"AAAA,QAAQ;AACR,YAAY;AACZ,UAAU;AACV,QAAQ;AACR,SAAS;AACT,UAAU;AACV,OAAO;AACP,iBAAiB;AACjB,eAAe;AACf,WAAW;AACX,YAAY;ACuJZ;EACA,qBAAA;EACA,SAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,gCAAA;AAAA;AAPA;IASA,mBAAA;IACA,kBAAA;IACA,4BAAA;AAAA;AAXA;MAcA,yBAAA;MACA,8BAAA;MACA,mBAAA;AAAA;AAhBA;MAoBA,cAAA;MACA,gBAAA;MACA,mBAAA;AAAA;AAtBA;QAwBA,gCAAA;QACA,cAAA;AAAA;AAzBA;QA4BA,aAAA;AAAA;AA5BA;QA+BA,gBAAA;QACA,cAAA;AAAA;AAhCA;MAqCA,cAAA;MACA,gCAAA;AAAA;;AD5JA,qCAAqC","file":"VaTabs.vue","sourcesContent":["/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-nav-tabs {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  border-bottom: 2px solid #ebecf0; }\n  .va-nav-tabs .va-nav-tab {\n    padding-bottom: 4px;\n    margin-right: 15px;\n    line-height: 20px !important; }\n    .va-nav-tabs .va-nav-tab-disabled a {\n      color: #a6aeba !important;\n      font-weight: normal !important;\n      cursor: not-allowed; }\n    .va-nav-tabs .va-nav-tab a, .va-nav-tabs .va-nav-tab a:link {\n      color: #5d6b83;\n      font-weight: 600;\n      padding-bottom: 6px; }\n      .va-nav-tabs .va-nav-tab a:hover, .va-nav-tabs .va-nav-tab a:link:hover {\n        text-decoration: none !important;\n        color: #0066ff; }\n      .va-nav-tabs .va-nav-tab a:focus, .va-nav-tabs .va-nav-tab a:link:focus {\n        outline: none; }\n      .va-nav-tabs .va-nav-tab a:active, .va-nav-tabs .va-nav-tab a:link:active {\n        background: none;\n        color: #0052cc; }\n    .va-nav-tabs .va-nav-tab-active a, .va-nav-tabs .va-nav-tab-active a:link {\n      color: #0052cc;\n      border-bottom: 2px solid #0066ff; }\n\n/*# sourceMappingURL=VaTabs.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject SSR */
  

  
  var VaTabs = normalizeComponent(
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
//

var script$6 = {
  name: 'VaTab',
  props: {
    id: {
      type: Number,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isActive: false,
      isVisible: true
    }
  },
  computed: {
    header () {
      return this.name
    },
    hash () {
      if (this.isDisabled) {
        return '#'
      }

      return this.id
        ? '#' + this.id
        : '#' + this.name.toLowerCase().replace(/ /g, '-')
    }
  }
};

/* script */
const __vue_script__$6 = script$6;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$6.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Tabs/VaTab.vue";

/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "section",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isActive,
          expression: "isActive"
        }
      ],
      attrs: { id: _vm.hash }
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VaTab = normalizeComponent(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    undefined,
    undefined
  );

//

var script$7 = {
  name: 'VaApp',
  mixins: [events],
  props: {
    desktopSidebarWidth: {
      type: [Number, String],
      default: 0,
      required: false
    },
    desktopMinibarWidth: {
      type: [Number, String],
      default: 0,
      required: false
    },
    desktopTopbarHeight: {
      type: [Number, String],
      default: 0,
      required: false
    },
    mobileBreakpoint: {
      type: Number,
      default: 768,
      required: false
    },
    mobileSidebarWidth: {
      type: [Number, String],
      default: 0,
      required: false
    },
    mobileMinibarWidth: {
      type: [Number, String],
      default: 0,
      required: false
    },
    mobileTopbarHeight: {
      type: [Number, String],
      default: 0,
      required: false
    },
    rtl: {
      type: Boolean,
      default: false
    },
    sidebarPriority: {
      type: Boolean,
      default: false,
      required: false
    },
    minibarPriority: {
      type: Boolean,
      default: false,
      required: false
    },
    topbarPriority: {
      type: Boolean,
      default: false,
      required: false
    },
    topbarPadded: {
      type: Boolean,
      default: false,
      required: false
    },
    split: {
      type: Boolean,
      default: false,
      required: false
    },
    reverse: {
      type: Boolean,
      default: false,
      required: false
    },
    desktopMargin: {
      type: [Number, String],
      default: 0,
      required: false
    },
    desktopMinimumWidth: {
      type: [Number, String],
      default: 0,
      required: false
    },
    bgColor: {
      type: String,
      default: '#F4F5F7',
      required: false
    },
    pageBgColor: {
      type: String,
      default: '#FFFFFF',
      required: false
    },
    showToggle: {
      type: Boolean,
      default: false,
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    let dDesktopMinimumWidth = this.desktopMinimumWidth;
    let dDesktopTopbarHeight = this.desktopTopbarHeight;
    let dDesktopMinibarWidth = this.desktopMinibarWidth;
    let dDesktopSidebarWidth = this.desktopSidebarWidth;
    let dMobileSidebarWidth = this.mobileSidebarWidth;
    let dMobileMinibarWidth = this.mobileMinibarWidth;
    let dMobileTopbarHeight = this.mobileTopbarHeight;
    let dSidebarPriority = this.sidebarPriority;
    let dMinibarPriority = this.minibarPriority;
    let currDesktopMargin = this.desktopMargin;
    let dTopbarPriority = this.topbarPriority;
    let dDesktopMargin = this.desktopMargin;
    let dTopbarPadded = this.topbarPadded;
    let dPageBgColor = this.pageBgColor;
    let dReverse = this.reverse;
    let dShowToggle = this.showToggle;
    let dBgColor = this.bgColor;
    let dSplit = this.split;
    let dRtl = this.rtl;
    return {
      mDesktopTopbarHeight: dDesktopTopbarHeight,
      mDesktopMinimumWidth: dDesktopMinimumWidth,
      mDesktopSidebarWidth: dDesktopSidebarWidth,
      mDesktopMinibarWidth: dDesktopMinibarWidth,
      mMobileSidebarWidth: dMobileSidebarWidth,
      mMobileMinibarWidth: dMobileMinibarWidth,
      mMobileTopbarHeight: dMobileTopbarHeight,
      currentDesktopMargin: currDesktopMargin,
      mMinibarPriority: dMinibarPriority,
      mSidebarPriority: dSidebarPriority,
      mTopbarPriority: dTopbarPriority,
      mDesktopMargin: dDesktopMargin,
      mTopbarPadded: dTopbarPadded,
      pastMobileBreakpoint: false,
      mPageBgColor: dPageBgColor,
      allowMarginUpdates: true,
      currentMinibarWidth: 0,
      currentTopbarHeight: 0,
      currentSidebarWidth: 0,
      mMinibarTheme: 'blue',
      mSidebarTheme: 'blue',
      mTopbarTheme: 'blue',
      mReverse: dReverse,
      haveMinibar: false,
      mShowToggle: dShowToggle,
      mBgColor: dBgColor,
      haveSidebar: false,
      haveTopbar: false,
      mTextLinks: false,
      mCompact: false,
      havePage: false,
      isMobile: false,
      contentWidth: 0,
      mPageSize: 'md',
      mSplit: dSplit,
      windowWidth: 0,
      mRtl: dRtl
    }
  },
  watch: {
    pastMobileBreakpoint (val) {
      this.broadcastIsMobile(val);
      this.setAndBroadcastDimensions();
    },
    desktopSidebarWidth (val) {
      this.mDesktopSidebarWidth = val;
    },
    mDesktopSidebarWidth () {
      this.setAndBroadcastDimensions();
    },
    desktopMinibarWidth (val) {
      this.mDesktopMinibarWidth = val;
    },
    mDesktopMinibarWidth () {
      this.setAndBroadcastDimensions();
    },
    desktopTopbarHeight (val) {
      this.mDesktopTopbarHeight = val;
    },
    mDesktopTopbarHeight () {
      this.setAndBroadcastDimensions();
    },
    mobileSidebarWidth (val) {
      this.mMobileSidebarWidth = val;
    },
    mMobileSidebarWidth () {
      this.setAndBroadcastDimensions();
    },
    mobileMinibarWidth (val) {
      this.mMobileMinibarWidth = val;
    },
    mMobileMinibarWidth () {
      this.setAndBroadcastDimensions();
    },
    mobileTopbarHeight (val) {
      this.mMobileTopbarHeight = val;
    },
    mMobileTopbarHeight () {
      this.setAndBroadcastDimensions();
    },
    rtl (val) {
      this.mRtl = val;
    },
    mRtl (val) {
      this.broadcastIsRTL(val);
    },
    sidebarPriority (val) {
      this.mSidebarPriority = val;
    },
    mSidebarPriority (val) {
      this.broadcastSidebarPriority(val);
    },
    minibarPriority (val) {
      this.mMinibarPriority = val;
    },
    mMinibarPriority (val) {
      this.broadcastMinibarPriority(val);
    },
    topbarPriority (val) {
      this.mTopbarPriority = val;
    },
    mTopbarPriority (val) {
      this.broadcastTopbarPriority(val);
    },
    topbarPadded (val) {
      this.mTopbarPadded = val;
    },
    mTopbarPadded (val) {
      this.broadcastTopbarPadded(val);
    },
    bgColor (val) {
      this.mBgColor = val;
    },
    mBgColor (val) {
      this.broadcastBgColor(val);
    },
    pageBgColor (val) {
      this.mPageBgColor = val;
    },
    mPageBgColor (val) {
      this.broadcastPageBgColor(val);
    },
    split (val) {
      this.mSplit = val;
    },
    mSplit (val) {
      this.broadcastIsSplit(val);
    },
    reverse (val) {
      this.mReverse = val;
    },
    mReverse (val) {
      this.broadcastIsReverse(val);
    },
    mCompact (val) {
      this.broadcastCompact(val);
    },
    mTextLinks (val) {
      this.broadcastTextLinks(val);
    },
    showToggle (val) {
      this.mShowToggle = val;
    },
    mShowToggle (val) {
      this.broadcastShowToggle(val);
    },
    desktopMargin (val) {
      this.mDesktopMargin = val;
    },
    mDesktopMargin (val) {
      /**
       * Calling _handleResize here. Why? So a new contentWidth
       * is calculated and broadcasted.
       */
      this._handleResize();
      this.broadcastDesktopMargin(val);
    },
    desktopMinimumWidth (val) {
      this.mDesktopMinimumWidth = val;
    },
    mDesktopMinimumWidth (val) {
      this.broadcastDesktopMinimumWidth(val);
    },
    windowWidth (val) {
      this.broadcastWindowWidth(val);
    },
    contentWidth (val) {
      this.broadcastContentWidth(val);
    },
    allowMarginUpdates (val) {
      this.broadcastAllowMarginUpdates(val);
    },
    mPageSize (val) {
      this.broadcastPageSize(val);
    },
    topbarTheme (val) {
      this.mTopbarTheme = val;
    },
    mTopbarTheme (val) {
      this.broadcastTopbarTheme(val);
    },
    minibarTheme (val) {
      this.mMinibarTheme = val;
    },
    mMinibarTheme (val) {
      this.broadcastMinibarTheme(val);
    },
    sidebarTheme (val) {
      this.mSidebarTheme = val;
    },
    mSidebarTheme (val) {
      this.broadcastSidebarTheme(val);
    }
  },
  methods: {
    _handleResize () {
      let ww = window.innerWidth || document.body.clientWidth;

      if (parseInt(ww) < this.mobileBreakpoint) {
        this.pastMobileBreakpoint = true;
      } else {
        this.pastMobileBreakpoint ? (this.pastMobileBreakpoint = false) : true;
      }

      this.windowWidth = parseInt(ww);
      this.contentWidth = this.windowWidth - this.mDesktopMargin * 2;
    },
    broadcastSidebarWidth (val) {
      this.broadcast('VaSidebar', 'Va@sidebarWidthChange', val);
      this.broadcast('VaMinibar', 'Va@sidebarWidthChange', val);
      this.broadcast('VaTopbar', 'Va@sidebarWidthChange', val);
      this.broadcast('VaPage', 'Va@sidebarWidthChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastMinibarWidth (val) {
      this.broadcast('VaSidebar', 'Va@minibarWidthChange', val);
      this.broadcast('VaMinibar', 'Va@minibarWidthChange', val);
      this.broadcast('VaTopbar', 'Va@minibarWidthChange', val);
      this.broadcast('VaPage', 'Va@minibarWidthChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastTopbarHeight (val) {
      this.broadcast('VaSidebar', 'Va@topbarHeightChange', val);
      this.broadcast('VaMinibar', 'Va@topbarHeightChange', val);
      this.broadcast('VaTopbar', 'Va@topbarHeightChange', val);
      this.broadcast('VaPage', 'Va@topbarHeightChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastIsMobile (val) {
      this.broadcast('VaSidebar', 'Va@sidebarIsMobile', val);
      this.broadcast('VaMinibar', 'Va@minibarIsMobile', val);
      this.broadcast('VaTopbar', 'Va@topbarIsMobile', val);
      this.broadcast('VaPage', 'Va@pageIsMobile', val);
      this.broadcast('VaRange', 'Va@rangeIsMobile', val);
      this.broadcast('VaMobile', 'Va@mobileIsMobile', val);
      this.broadcast('VaDesktop', 'Va@desktopIsMobile', val);
      this.broadcast('VaDatepicker', 'Va@datepickerIsMobile', val);
      this.broadcast('VaTimepicker', 'Va@timepickerIsMobile', val);
    },
    broadcastIsRTL (val) {
      this.broadcast('VaSidebar', 'Va@rtlChange', val);
      this.broadcast('VaMinibar', 'Va@rtlChange', val);
      this.broadcast('VaTopbar', 'Va@rtlChange', val);
      this.broadcast('VaPage', 'Va@rtlChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastIsSplit (val) {
      this.broadcast('VaSidebar', 'Va@splitChange', val);
      this.broadcast('VaMinibar', 'Va@splitChange', val);
      this.broadcast('VaTopbar', 'Va@splitChange', val);
      this.broadcast('VaPage', 'Va@splitChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastCompact (val) {
      this.broadcast('VaSidebar', 'Va@compactChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastTextLinks (val) {
      this.broadcast('VaSidebar', 'Va@textLinksChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastShowToggle (val) {
      this.broadcast('VaSidebar', 'Va@showToggleChange', val);
      this.broadcast('VaSidebarGroupItem', 'Va@showToggleChange', val);
      this.broadcast('VaSidebarGroupLevel', 'Va@showToggleChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastBgColor () {
      /**
       * Nobody needs to know about BgColor.
       * Only relevant to this component.
       */
      this.broadcastDefaultsToConfig(0);
    },
    broadcastPageBgColor (val) {
      this.broadcast('VaPage', 'Va@pageBgColorChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastIsReverse (val) {
      this.broadcast('VaSidebar', 'Va@reverseChange', val);
      this.broadcast('VaMinibar', 'Va@reverseChange', val);
      this.broadcast('VaTopbar', 'Va@reverseChange', val);
      this.broadcast('VaPage', 'Va@reverseChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastSidebarPriority (val) {
      this.broadcast('VaSidebar', 'Va@sidebarPriorityChange', val);
      this.broadcast('VaMinibar', 'Va@sidebarPriorityChange', val);
      this.broadcast('VaTopbar', 'Va@sidebarPriorityChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastMinibarPriority (val) {
      this.broadcast('VaSidebar', 'Va@minibarPriorityChange', val);
      this.broadcast('VaMinibar', 'Va@minibarPriorityChange', val);
      this.broadcast('VaTopbar', 'Va@minibarPriorityChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastTopbarPriority (val) {
      this.broadcast('VaSidebar', 'Va@topbarPriorityChange', val);
      this.broadcast('VaMinibar', 'Va@topbarPriorityChange', val);
      this.broadcast('VaTopbar', 'Va@topbarPriorityChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastTopbarPadded (val) {
      this.broadcast('VaTopbar', 'Va@topbarPaddedChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastDesktopMargin (val) {
      this.broadcast('VaSidebar', 'Va@desktopMarginChange', val);
      this.broadcast('VaMinibar', 'Va@desktopMarginChange', val);
      this.broadcast('VaTopbar', 'Va@desktopMarginChange', val);
      this.broadcast('VaPage', 'Va@desktopMarginChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastDesktopMinimumWidth (val) {
      this.broadcast('VaSidebar', 'Va@desktopMinimumWidthChange', val);
      this.broadcast('VaMinibar', 'Va@desktopMinimumWidthChange', val);
      this.broadcast('VaTopbar', 'Va@desktopMinimumWidthChange', val);
      this.broadcast('VaPage', 'Va@desktopMinimumWidthChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastAllowMarginUpdates () {},
    broadcastWindowWidth (val) {
      this.broadcast('VaSidebar', 'Va@windowWidthChange', val);
      this.broadcast('VaMinibar', 'Va@windowWidthChange', val);
      this.broadcast('VaTopbar', 'Va@windowWidthChange', val);
      this.broadcast('VaPage', 'Va@windowWidthChange', val);
    },
    broadcastContentWidth (val) {
      this.broadcast('VaSidebar', 'Va@contentWidthChange', val);
      this.broadcast('VaMinibar', 'Va@contentWidthChange', val);
      this.broadcast('VaTopbar', 'Va@contentWidthChange', val);
      this.broadcast('VaPage', 'Va@contentWidthChange', val);
    },
    broadcastPageSize (val) {
      this.broadcast('VaPage', 'Va@pageSizeChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastTopbarTheme (val) {
      this.broadcast('VaTopbar', 'Va@topbarThemeChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastSidebarTheme (val) {
      this.broadcast('VaSidebar', 'Va@sidebarThemeChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    broadcastMinibarTheme (val) {
      this.broadcast('VaMinibar', 'Va@minibarThemeChange', val);
      this.broadcastDefaultsToConfig(0);
    },
    checkForPresenceOfTopbar () {
      this.broadcast('VaTopbar', 'Va@topbarPresenceCheck', true);
    },
    checkForPresenceOfSidebar () {
      this.broadcast('VaSidebar', 'Va@sidebarPresenceCheck', true);
    },
    checkForPresenceOfMinibar () {
      this.broadcast('VaMinibar', 'Va@minibarPresenceCheck', true);
    },
    checkForPresenceOfPage () {
      this.broadcast('VaPage', 'Va@pagePresenceCheck', true);
    },
    setAndBroadcastDimensions () {
      if (this.pastMobileBreakpoint) {
        this.currentTopbarHeight = this.mMobileTopbarHeight;
        this.currentMinibarWidth = this.mMobileMinibarWidth;
        this.currentSidebarWidth = this.mMobileSidebarWidth;
      } else {
        this.currentTopbarHeight = this.mDesktopTopbarHeight;
        this.currentMinibarWidth = this.mDesktopMinibarWidth;
        this.currentSidebarWidth = this.mDesktopSidebarWidth;
      }
      this.broadcastSidebarWidth(this.currentSidebarWidth);
      this.broadcastMinibarWidth(this.currentMinibarWidth);
      this.broadcastTopbarHeight(this.currentTopbarHeight);
    },
    enableReceivers () {
      /**
       * These exist for VaAppConfig.
       *
       * Setting these values should trigger the 'watch' on each of them,
       * which in turn calls the value's respective broadcast function,
       * broadcasting the new value to whatever has implemented an
       * App.
       */
      this.$on('Va@configDesktopTopbarHeightChange', val => {
        this.mDesktopTopbarHeight = val;
      });
      this.$on('Va@configDesktopSidebarWidthChange', val => {
        this.mDesktopSidebarWidth = val;
      });
      this.$on('Va@configDesktopMinimumWidthChange', val => {
        this.mDesktopMinimumWidth = val;
      });
      this.$on('Va@configDesktopMinibarWidthChange', val => {
        this.mDesktopMinibarWidth = val;
      });
      this.$on('Va@configMobileTopbarHeightChange', val => {
        this.mMobileTopbarHeight = val;
      });
      this.$on('Va@configMobileSidebarWidthChange', val => {
        this.mMobileSidebarWidth = val;
      });
      this.$on('Va@configMobileMinibarWidthChange', val => {
        this.mMobileMinibarWidth = val;
      });
      this.$on('Va@configSidebarPriorityChange', val => {
        this.mSidebarPriority = val;
      });
      this.$on('Va@configMinibarPriorityChange', val => {
        this.mMinibarPriority = val;
      });
      this.$on('Va@configTopbarPriorityChange', val => {
        this.mTopbarPriority = val;
      });
      this.$on('Va@configDesktopMarginChange', val => {
        this.mDesktopMargin = val;
      });
      this.$on('Va@configTopbarPaddedChange', val => {
        this.mTopbarPadded = val;
      });
      this.$on('Va@configMinibarThemeChange', val => {
        this.mMinibarTheme = val;
      });
      this.$on('Va@configSidebarThemeChange', val => {
        this.mSidebarTheme = val;
      });
      this.$on('Va@configTopbarThemeChange', val => {
        this.mTopbarTheme = val;
      });
      this.$on('Va@configPageBgColorChange', val => {
        this.mPageBgColor = val;
      });
      this.$on('Va@configShowToggleChange', val => {
        this.mShowToggle = val;
      });
      this.$on('Va@configTextLinksChange', val => {
        this.mTextLinks = val;
      });
      this.$on('Va@configPageSizeChange', val => {
        this.mPageSize = val;
      });
      this.$on('Va@configCompactChange', val => {
        this.mCompact = val;
      });
      this.$on('Va@configReverseChange', val => {
        this.mReverse = val;
      });
      this.$on('Va@configBgColorChange', val => {
        this.mBgColor = val;
      });
      this.$on('Va@configSplitChange', val => {
        this.mSplit = val;
      });
      this.$on('Va@configRtlChange', val => {
        this.mRtl = val;
      });

      /**
       * These receives are for when certain components are unmounted
       * and remounted at runtime (during HMR usually).
       */
      this.$on('Va@pageConnected', () => {
        this.setAndBroadcastDimensions();
      });
      this.$on('Va@minibarConnected', () => {
        this.setAndBroadcastDimensions();
      });
      this.$on('Va@sidebarConnected', () => {
        this.setAndBroadcastDimensions();
      });
    },
    broadcastDefaultsToConfig (delay = 100) {
      setTimeout(() => {
        this.broadcast(
          'VaAppConfig',
          'Va@configReceiveDesktopTopbarHeight',
          this.mDesktopTopbarHeight
        );
        this.broadcast(
          'VaAppConfig',
          'Va@configReceiveDesktopMinibarWidth',
          this.mDesktopMinibarWidth
        );
        this.broadcast(
          'VaAppConfig',
          'Va@configReceiveDesktopSidebarWidth',
          this.mDesktopSidebarWidth
        );
        this.broadcast(
          'VaAppConfig',
          'Va@configReceiveDesktopMinimumWidth',
          this.mDesktopMinimumWidth
        );
        this.broadcast(
          'VaAppConfig',
          'Va@configReceiveMobileMinibarWidth',
          this.mMobileMinibarWidth
        );
        this.broadcast(
          'VaAppConfig',
          'Va@configReceiveMobileSidebarWidth',
          this.mMobileSidebarWidth
        );
        this.broadcast(
          'VaAppConfig',
          'Va@configReceiveMobileTopbarHeight',
          this.mMobileTopbarHeight
        );
        this.broadcast(
          'VaAppConfig',
          'Va@configReceiveSidebarPriority',
          this.mSidebarPriority
        );
        this.broadcast(
          'VaAppConfig',
          'Va@configReceiveMinibarPriority',
          this.mMinibarPriority
        );
        this.broadcast(
          'VaAppConfig',
          'Va@configReceiveTopbarPriority',
          this.mTopbarPriority
        );
        this.broadcast(
          'VaAppConfig',
          'Va@configReceiveDesktopMargin',
          this.mDesktopMargin
        );
        this.broadcast(
          'VaAppConfig',
          'Va@configReceiveTopbarPadded',
          this.mTopbarPadded
        );
        this.broadcast(
          'VaAppConfig',
          'Va@configReceiveMinibarTheme',
          this.mMinibarTheme
        );
        this.broadcast(
          'VaAppConfig',
          'Va@configReceiveSidebarTheme',
          this.mSidebarTheme
        );
        this.broadcast(
          'VaAppConfig',
          'Va@configReceiveTopbarTheme',
          this.mTopbarTheme
        );
        this.broadcast(
          'VaAppConfig',
          'Va@configReceivePageBgColor',
          this.mPageBgColor
        );
        this.broadcast(
          'VaAppConfig',
          'Va@configReceiveShowToggle',
          this.mShowToggle
        );
        this.broadcast(
          'VaAppConfig',
          'Va@configReceiveTextLinks',
          this.mTextLinks
        );
        this.broadcast(
          'VaAppConfig',
          'Va@configReceivePageSize',
          this.mPageSize
        );
        this.broadcast('VaAppConfig', 'Va@configReceiveCompact', this.mCompact);
        this.broadcast('VaAppConfig', 'Va@configReceiveReverse', this.mReverse);
        this.broadcast('VaAppConfig', 'Va@configReceiveBgColor', this.mBgColor);
        this.broadcast('VaAppConfig', 'Va@configReceiveSplit', this.mSplit);
        this.broadcast('VaAppConfig', 'Va@configReceiveRtl', this.mRtl);
      }, delay);
    }
  },
  mounted () {
    window.addEventListener('resize', this._handleResize, false);
    /**
     * Call the handler function directly instead of instantiating a resize
     * event like so: window.dispatchEvent(new Event('resize'))
     *
     * Benefit is.. ? Browser compatibility? I dunno.
     */
    this._handleResize();

    /**
     * Mobility check.
     */
    this.setAndBroadcastDimensions();

    /**
     * Presence checks. As of now, this is not really used for
     * anything. Maybe in the future?
     */
    this.checkForPresenceOfSidebar();
    this.checkForPresenceOfTopbar();
    this.checkForPresenceOfPage();

    /**
     * Broadcast props that were passed to the components
     * that need to do stuff based on their values.
     */
    this.broadcastDesktopMinimumWidth(this.mDesktopMinimumWidth);
    this.broadcastMinibarPriority(this.mMinibarPriority);
    this.broadcastSidebarPriority(this.mSidebarPriority);
    this.broadcastTopbarPriority(this.mTopbarPriority);
    this.broadcastDesktopMargin(this.mDesktopMargin);
    this.broadcastTopbarPadded(this.mTopbarPadded);
    this.broadcastContentWidth(this.contentWidth);
    this.broadcastPageBgColor(this.mPageBgColor);
    this.broadcastWindowWidth(this.windowWidth);
    this.broadcastIsReverse(this.mReverse);
    this.broadcastIsSplit(this.mSplit);
    this.broadcastIsRTL(this.mRtl);

    /**
     * --------------------------------------------------
     * Methods related to VaAppConfig
     *
     * enableReceivers() exists so that VaAppConfig
     * can talk to VaApp.
     */
    this.enableReceivers();

    /**
     * broadcastDefaultsToConfig() sends default values to
     * VaAppConfig, in case some values weren't specified.
     */
    this.broadcastDefaultsToConfig();
  },
  beforeDestroy () {
    window.removeEventListener('resize', this._handleResize, false);
  },
  created () {
    // Presence replies
    this.$on('Va@minibarPresenceReply', val => {
      if (val === true) {
        this.haveMinibar = true;
      }
    });
    this.$on('Va@sidebarPresenceReply', val => {
      if (val === true) {
        this.haveSidebar = true;
      }
    });
    this.$on('Va@topbarPresenceReply', val => {
      if (val === true) {
        this.haveTopbar = true;
      }
    });
    this.$on('Va@pagePresenceReply', val => {
      if (val === true) {
        this.havePage = true;
      }
    });

    // Listen for Sidebar width change - implemented when Sidebar's resizer was implemented
    // this.$on('Va@sidebarWidthChange', (val) => {
    //   this.broadcastSidebarWidth(val)
    // })

    // Some components might want to request the isMobile status, for example,
    // if they have been created a while after isMobile was broadcast.
    // See VaRange.
    this.$on('Va@requestIsMobile', val => {
      if (val === true) {
        this.broadcastIsMobile(this.pastMobileBreakpoint);
      }
    });

    // Disconnections
    this.$on('Va@sidebarDisconnect', val => {
      if (val === true) {
        this.haveSidebar = false;
      }
    });
    this.$on('Va@minibarDisconnect', val => {
      if (val === true) {
        this.haveMinibar = false;
      }
    });
    this.$on('Va@topbarDisconnect', val => {
      if (val === true) {
        this.haveTopbar = false;
      }
    });
    this.$on('Va@pageDisconnect', val => {
      if (val === true) {
        this.havePage = false;
      }
    });
  },
  computed: {
    styleObj () {
      let bg = this.mBgColor;
      let style = {};

      style['background'] = bg;
      style['position'] = 'fixed';
      style['top'] = '0px';
      style['right'] = '0px';
      style['bottom'] = '0px';
      style['left'] = '0px';
      style['overflow'] = 'auto';

      return style
    }
  }
};

/* script */
const __vue_script__$7 = script$7;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$7.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/App/VaApp.vue";

/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { style: _vm.styleObj }, [_vm._t("default")], 2)
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VaApp = normalizeComponent(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    undefined,
    undefined
  );

//

var script$8 = {
  name: 'VaPage',
  mixins: [events],
  props: {
    size: {
      type: String,
      default: 'lg',
      validator (v) {
        return ['lg', 'md', 'sm'].includes(v)
      }
    },
    article: {
      type: Boolean,
      default: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    let s = this.size;
    return {
      currentDesktopMinimumWidth: 0,
      currentSidebarWidth: 0,
      currentMinibarWidth: 0,
      currentDesktopMargin: 0,
      currentTopbarHeight: 0,
      currentContentWidth: 0,
      currentWindowWidth: 0,
      isReverse: false,
      isMobile: false,
      isSplit: false,
      isRTL: false,
      bg: '#ffffff',
      sz: s
    }
  },
  mounted () {
    this.dispatch('VaApp', 'Va@pageConnected', true);
    setTimeout(() => {
      this.dispatch('VaApp', 'Va@configPageSizeChange', this.sz);
    }, 10);
  },
  created () {
    this.$on('Va@pagePresenceCheck', () => {
      this.dispatch('VaApp', 'Va@pagePresenceReply', true);
    });
    this.$on('Va@desktopMinimumWidthChange', val => {
      this.currentDesktopMinimumWidth = val;
    });
    this.$on('Va@desktopMarginChange', val => {
      this.currentDesktopMargin = val;
    });
    this.$on('Va@sidebarWidthChange', val => {
      this.currentSidebarWidth = val;
    });
    this.$on('Va@topbarHeightChange', val => {
      this.currentTopbarHeight = val;
    });
    this.$on('Va@contentWidthChange', val => {
      this.currentContentWidth = val;
    });
    this.$on('Va@minibarWidthChange', val => {
      this.currentMinibarWidth = val;
    });
    this.$on('Va@windowWidthChange', val => {
      this.currentWindowWidth = val;
    });
    this.$on('Va@reverseChange', val => {
      this.isReverse = val;
    });
    this.$on('Va@pageIsMobile', val => {
      this.isMobile = val;
    });
    this.$on('Va@pageBgColorChange', val => {
      this.bg = val;
    });
    this.$on('Va@splitChange', val => {
      this.isSplit = val;
    });
    this.$on('Va@pageSizeChange', val => {
      this.sz = val;
    });
    this.$on('Va@rtlChange', val => {
      this.isRTL = val;
    });
  },
  beforeDestroy () {
    this.dispatch('VaApp', 'Va@pageDisconnect', true);
  },
  methods: {
    onScroll () {
      // this.broadcast('VaTextarea', 'Va@pageScroll', true)
      // this.broadcast('VaInput', 'Va@pageScroll', true)
      /**
       * This is probably faster than my broadcast method, and I'd
       * like for this to happen as fast as possible.
       *
       * We're dispatching this scroll event when this element
       * is scrolled so that the VaInputOps (and other fixed
       * position elements) know to reposition themselves.
       *
       * When a VaPage is not used, VaInput and VaTextarea
       * listen to window events, so they still work even when
       * used by themselves.
       */
      window.dispatchEvent(new Event('scroll'));
    }
  },
  computed: {
    classObj () {
      let { classPrefix, sz, article, isMobile } = this;
      let classes = {};

      isMobile
        ? (classes[classPrefix + '-page-container-lg'] = true)
        : (classes[classPrefix + '-page-container-' + sz] = true);
      classes[classPrefix + '-page-container-article'] = article;

      return classes
    },
    containerStyleObj () {
      let style = {};

      return style
    },
    wrapperStyleObj () {
      let split = this.isSplit;
      let rtl = this.isRTL;
      let reverse = this.isReverse;
      let bg = this.bg;
      let style = {};

      let sw = parseInt(this.currentSidebarWidth);
      let mw = parseInt(this.currentMinibarWidth);
      let th = parseInt(this.currentTopbarHeight);
      let dm = parseInt(this.currentDesktopMargin);
      let dmw = parseInt(this.currentDesktopMinimumWidth);
      let cw = parseInt(this.currentContentWidth);
      let mobile = this.isMobile;

      style['background'] = bg;
      style['position'] = 'fixed';
      style['top'] = th + 'px';
      style['height'] = 'calc(100% - ' + th + 'px)';
      style['overflow-y'] = 'scroll';
      style['overflow-x'] = 'auto';

      /**
       * Adjust the margins if content width is smaller than
       * desktop minimum width.
       */
      if (!mobile) {
        if (cw < dmw) {
          let x = dmw - cw;
          dm = dm - x / 2;
        }
      } else {
        dm = 0;
        dmw = 0;
      }

      /**
       * If a minimum desktop width is set...
       */
      if (dmw !== 0) {
        style['min-width'] = dmw - mw - sw + 'px';
      } else {
        style['min-width'] = '0px';
      }

      /**
       * If it's not a split layout, then Page is only
       * concerned with the total width of the bars.
       */
      if (!split) {
        if (rtl) {
          style['left'] = dm + 'px';
          style['right'] = sw + mw + dm + 'px';
        } else {
          style['left'] = sw + mw + dm + 'px';
          style['right'] = dm + 'px';
        }
      } else {
        if (reverse) {
          style['left'] = dm + sw + 'px';
          style['right'] = dm + mw + 'px';
        } else {
          style['left'] = dm + mw + 'px';
          style['right'] = dm + sw + 'px';
        }
      }

      return style
    }
  }
};

/* script */
const __vue_script__$8 = script$8;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$8.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Page/VaPage.vue";

/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: _vm.classPrefix + "-page-wrapper",
      style: _vm.wrapperStyleObj,
      on: { scroll: _vm.onScroll }
    },
    [
      _c(
        "div",
        {
          class: _vm.classPrefix + "-page-container",
          style: _vm.containerStyleObj
        },
        [
          _c(
            "div",
            { class: _vm.classObj },
            [
              _vm._t("default"),
              _vm._v(" "),
              _c("div", { staticStyle: { height: "100px" } }, [_vm._v(" ")])
            ],
            2
          )
        ]
      )
    ]
  )
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  const __vue_inject_styles__$8 = function (inject) {
    if (!inject) return
    inject("data-v-2efe59c0_0", { source: "/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-page-wrapper {\n  background: #ffffff;\n}\n.va-page-wrapper::-webkit-scrollbar {\n    background: #ffffff;\n}\n.va-page-container {\n  color: black;\n}\n.va-page-wrapper {\n  z-index: 1;\n  height: 100%;\n  overflow: hidden;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  overflow-y: hidden;\n  overflow-x: hidden;\n}\n.va-page-wrapper:hover {\n    overflow-y: auto;\n    overflow-x: auto;\n}\n.va-page-wrapper::-webkit-scrollbar-track {\n    border-radius: 10px;\n}\n.va-page-wrapper::-webkit-scrollbar {\n    width: 14px;\n    height: 18px;\n}\n.va-page-wrapper::-webkit-scrollbar-thumb {\n    height: 6px;\n    border: 4px solid rgba(0, 0, 0, 0);\n    background-clip: padding-box;\n    -webkit-border-radius: 7px;\n    background-color: rgba(9, 30, 66, 0.05);\n}\n.va-page-wrapper::-webkit-scrollbar-thumb:hover {\n      background-color: rgba(9, 30, 66, 0.45);\n}\n.va-page-container {\n  position: relative;\n  display: flex;\n}\n.va-page-container-article h1 {\n    margin-top: 28px;\n    margin-bottom: 8px;\n}\n.va-page-container-article h2 {\n    margin-top: 24px;\n    margin-bottom: 8px;\n}\n.va-page-container-article h3 {\n    margin-top: 32px;\n    margin-bottom: 8px;\n}\n.va-page-container-article h4 {\n    margin-top: 24px;\n    margin-bottom: 8px;\n}\n.va-page-container-article p {\n    margin: 16px 0;\n    padding: 0;\n}\n.va-page-container-article ol li {\n    line-height: 26px;\n}\n.va-page-container-article ul li {\n    line-height: 26px;\n}\n.va-page-container-lg {\n    align-items: flex-start;\n    flex-wrap: wrap;\n    width: 100%;\n    max-width: 100%;\n    position: relative;\n    margin: 0;\n    padding: 0 20px;\n}\n.va-page-container-md {\n    align-items: flex-start;\n    flex-wrap: wrap;\n    width: 960px;\n    max-width: 960px;\n    position: relative;\n    margin: 0 auto;\n    padding: 0 20px;\n}\n.va-page-container-sm {\n    align-items: flex-start;\n    flex-wrap: wrap;\n    position: relative;\n    width: 680px;\n    max-width: 680px;\n    margin: 0 auto;\n    padding: 0 20px;\n}\n.va-page-title h1 {\n  font-size: 1.7em;\n  font-style: inherit;\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  line-height: 1.1;\n  margin-top: 40px;\n}\n.va-page-subtitle p {\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4em;\n}\n\n/*# sourceMappingURL=VaPage.vue.map */", map: {"version":3,"sources":["VaPage.vue","/Users/ax/Documents/prj/cue/app/aaa/src/Page/VaPage.vue"],"names":[],"mappings":"AAAA,QAAQ;AACR,YAAY;AACZ,UAAU;AACV,QAAQ;AACR,SAAS;AACT,UAAU;AACV,OAAO;AACP,iBAAiB;AACjB,eAAe;AACf,WAAW;AACX,YAAY;ACoNZ;EACA,mBAcA;AAAA;AAfA;IAGA,mBAcA;AAAA;AATA;EACA,YAOA;AAAA;AAKA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EAEA,kBAAA;EACA,kBAAA;AAAA;AARA;IAWA,gBAAA;IACA,gBAAA;AAAA;AAZA;IAgBA,mBAAA;AAAA;AAhBA;IAoBA,WAAA;IACA,YAAA;AAAA;AArBA;IA6BA,WAAA;IACA,kCAAA;IACA,4BAAA;IACA,0BAAA;IACA,uCAAA;AAAA;AAjCA;MA0BA,uCAAA;AAAA;AAWA;EACA,kBAAA;EACA,aAAA;AAAA;AAEA;IAEA,gBAAA;IACA,kBAAA;AAAA;AAHA;IAOA,gBAAA;IACA,kBAAA;AAAA;AARA;IAYA,gBAAA;IACA,kBAAA;AAAA;AAbA;IAiBA,gBAAA;IACA,kBAAA;AAAA;AAlBA;IAsBA,cAAA;IACA,UAAA;AAAA;AAvBA;IA2BA,iBAAA;AAAA;AA3BA;IA+BA,iBAAA;AAAA;AAIA;IACA,uBAAA;IACA,eAAA;IACA,WAAA;IACA,eAAA;IACA,kBAAA;IACA,SAAA;IACA,eAAA;AAAA;AAGA;IACA,uBAAA;IACA,eAAA;IACA,YAAA;IACA,gBAAA;IACA,kBAAA;IACA,cAAA;IACA,eAAA;AAAA;AAGA;IACA,uBAAA;IACA,eAAA;IACA,kBAAA;IACA,YAAA;IACA,gBAAA;IACA,cAAA;IACA,eAAA;AAAA;AAIA;EAEA,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;EACA,gBAAA;EACA,gBAAA;AAAA;AAIA;EAEA,eAAA;EACA,gBAAA;EACA,kBAAA;AAAA;;ADrQA,qCAAqC","file":"VaPage.vue","sourcesContent":["/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-page-wrapper {\n  background: #ffffff; }\n  .va-page-wrapper::-webkit-scrollbar {\n    background: #ffffff; }\n\n.va-page-container {\n  color: black; }\n\n.va-page-wrapper {\n  z-index: 1;\n  height: 100%;\n  overflow: hidden;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  overflow-y: hidden;\n  overflow-x: hidden; }\n  .va-page-wrapper:hover {\n    overflow-y: auto;\n    overflow-x: auto; }\n  .va-page-wrapper::-webkit-scrollbar-track {\n    border-radius: 10px; }\n  .va-page-wrapper::-webkit-scrollbar {\n    width: 14px;\n    height: 18px; }\n  .va-page-wrapper::-webkit-scrollbar-thumb {\n    height: 6px;\n    border: 4px solid rgba(0, 0, 0, 0);\n    background-clip: padding-box;\n    -webkit-border-radius: 7px;\n    background-color: rgba(9, 30, 66, 0.05); }\n    .va-page-wrapper::-webkit-scrollbar-thumb:hover {\n      background-color: rgba(9, 30, 66, 0.45); }\n\n.va-page-container {\n  position: relative;\n  display: flex; }\n  .va-page-container-article h1 {\n    margin-top: 28px;\n    margin-bottom: 8px; }\n  .va-page-container-article h2 {\n    margin-top: 24px;\n    margin-bottom: 8px; }\n  .va-page-container-article h3 {\n    margin-top: 32px;\n    margin-bottom: 8px; }\n  .va-page-container-article h4 {\n    margin-top: 24px;\n    margin-bottom: 8px; }\n  .va-page-container-article p {\n    margin: 16px 0;\n    padding: 0; }\n  .va-page-container-article ol li {\n    line-height: 26px; }\n  .va-page-container-article ul li {\n    line-height: 26px; }\n  .va-page-container-lg {\n    align-items: flex-start;\n    flex-wrap: wrap;\n    width: 100%;\n    max-width: 100%;\n    position: relative;\n    margin: 0;\n    padding: 0 20px; }\n  .va-page-container-md {\n    align-items: flex-start;\n    flex-wrap: wrap;\n    width: 960px;\n    max-width: 960px;\n    position: relative;\n    margin: 0 auto;\n    padding: 0 20px; }\n  .va-page-container-sm {\n    align-items: flex-start;\n    flex-wrap: wrap;\n    position: relative;\n    width: 680px;\n    max-width: 680px;\n    margin: 0 auto;\n    padding: 0 20px; }\n\n.va-page-title h1 {\n  font-size: 1.7em;\n  font-style: inherit;\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  line-height: 1.1;\n  margin-top: 40px; }\n\n.va-page-subtitle p {\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4em; }\n\n/*# sourceMappingURL=VaPage.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject SSR */
  

  
  var VaPage = normalizeComponent(
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
  name: 'VaSidebar',
  mixins: [events],
  props: {
    compact: {
      type: Boolean,
      default: false,
      required: false
    },
    textLinks: {
      type: Boolean,
      default: false,
      required: false
    },
    theme: {
      type: String,
      default: 'default',
      required: false
    },
    showToggle: {
      type: Boolean,
      default: false,
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    let tli = this.textLinks;
    let s = this.showToggle;
    let c = this.compact;
    let t = this.theme;
    return {
      currentDesktopMinimumWidth: 0,
      currentDesktopMargin: 0,
      currentSidebarWidth: 0,
      currentTopbarHeight: 0,
      minibarPriority: false,
      currentContentWidth: 0,
      sidebarPriority: false,
      currentMinibarWidth: 0,
      currentWindowWidth: 0,
      isReverse: false,
      isMobile: false,
      isSplit: false,
      isRTL: false,
      comp: c,
      tl: tli,
      th: t,
      st: s
    }
  },
  created () {
    this.$on('Va@sidebarPresenceCheck', () => { this.dispatch('VaApp', 'Va@sidebarPresenceReply', true); });
    this.$on('Va@desktopMinimumWidthChange', (val) => { this.currentDesktopMinimumWidth = val; });
    this.$on('Va@desktopMarginChange', (val) => { this.currentDesktopMargin = val; });
    this.$on('Va@minibarWidthChange', (val) => { this.currentMinibarWidth = val; });
    this.$on('Va@topbarHeightChange', (val) => { this.currentTopbarHeight = val; });
    this.$on('Va@contentWidthChange', (val) => { this.currentContentWidth = val; });
    this.$on('Va@sidebarWidthChange', (val) => { this.currentSidebarWidth = val; });
    this.$on('Va@minibarPriorityChange', (val) => { this.minibarPriority = val; });
    this.$on('Va@sidebarPriorityChange', (val) => { this.sidebarPriority = val; });
    this.$on('Va@windowWidthChange', (val) => { this.currentWindowWidth = val; });
    this.$on('Va@sidebarIsMobile', (val) => { this.isMobile = val; });
    this.$on('Va@reverseChange', (val) => { this.isReverse = val; });
    this.$on('Va@sidebarThemeChange', (val) => { this.th = val; });
    this.$on('Va@showToggleChange', (val) => { this.st = val; });
    this.$on('Va@splitChange', (val) => { this.isSplit = val; });
    this.$on('Va@textLinksChange', (val) => { this.tl = val; });
    this.$on('Va@compactChange', (val) => { this.comp = val; });
    this.$on('Va@rtlChange', (val) => { this.isRTL = val; });
  },
  mounted () {
    this.dispatch('VaApp', 'Va@sidebarConnected', true);
    /**
     * This needs to be wrapped in a short setTimeout to give
     * App time to call enableReceivers().
     */
    setTimeout(() => {
      this.dispatch('VaApp', 'Va@configSidebarThemeChange', this.th);
      this.dispatch('VaApp', 'Va@configCompactChange', this.comp);
      this.dispatch('VaApp', 'Va@configTextLinksChange', this.tl);
    }, 10);
  },
  beforeDestroy () {
    this.dispatch('VaApp', 'Va@sidebarDisconnect', true);
  },
  watch: {
    theme (val) {
      this.th = val;
      this.dispatch('VaApp', 'Va@configSidebarThemeChange', this.th);
    }
  },
  computed: {
    classObj () {
      let { classPrefix, th, isMobile, comp, tl } = this;
      let classes = {};

      classes[classPrefix + '-sidebar'] = true;
      classes[classPrefix + '-sidebar--theme-' + th] = true;
      classes[classPrefix + '-sidebar-mobile'] = isMobile;
      classes[classPrefix + '-sidebar-compact'] = comp;
      classes[classPrefix + '-sidebar-text-links'] = tl;

      return classes
    },
    styleObj () {
      let dmw = parseInt(this.currentDesktopMinimumWidth);
      let dm = parseInt(this.currentDesktopMargin);
      let sw = parseInt(this.currentSidebarWidth);
      let th = parseInt(this.currentTopbarHeight);
      let cw = parseInt(this.currentContentWidth);
      let mw = parseInt(this.currentMinibarWidth);
      let sp = this.sidebarPriority;
      let mp = this.minibarPriority;
      let reverse = this.isReverse;
      let mobile = this.isMobile;
      let split = this.isSplit;
      let rtl = this.isRTL;
      let style = {};

      style['width'] = sw + 'px';
      style['min-width'] = sw + 'px';

      if (sp) {
        style['top'] = '0px';
      } else {
        style['top'] = th + 'px';
      }

      /**
       * Adjust the margins if content width is smaller than
       * desktop minimum width.
       */
      if (!mobile) {
        if (cw < dmw) {
          let x = dmw - cw;
          dm = dm - (x / 2);
        }
      } else {
        dm = 0;
        dmw = 0;
      }

      if (split) {
        if (reverse) {
          style['left'] = dm + 'px';
        } else {
          style['right'] = dm + 'px';
        }
      } else {
        if (reverse) {
          if (rtl) {
            style['right'] = (dm + mw) + 'px';
          } else {
            style['left'] = dm + 'px';
          }
        } else {
          if (rtl) {
            style['right'] = dm + 'px';
          } else {
            style['left'] = (dm + mw) + 'px';
          }
        }
      }

      if (!sp && mp && reverse && !split && !rtl) {
        style['top'] = '0px';
      }

      if (rtl && !split && !reverse && !sp && mp) {
        style['top'] = '0px';
      }

      style['bottom'] = '0px';

      return style
    }
  }
  // methods: {
  //   initResize (e) {
  //     /**
  //      * Prevent text selection while dragging.
  //      * https://stackoverflow.com/questions/5429827/how-can-i-prevent-text-element-selection-with-cursor-drag
  //      */
  //     if (e.stopPropagation) {
  //       e.stopPropagation()
  //     }
  //     if (e.preventDefault) {
  //       e.preventDefault()
  //     }
  //     e.cancelBubble = true
  //     e.returnValue = false

  //     window.addEventListener('mousemove', this.doResize, false)
  //     window.addEventListener('mouseup', this.stopResize, false)
  //   },
  //   doResize (e) {
  //     let el = this.$refs.sidebar
  //     this.dispatch('VaApp', 'Va@sidebarWidthChange', e.clientX - el.offsetLeft)
  //   },
  //   stopResize () {
  //     window.removeEventListener('mouseup', this.stopResize, false)
  //     window.removeEventListener('mousemove', this.doResize, false)
  //   }
  // }
};

/* script */
const __vue_script__$9 = script$9;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$9.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Sidebar/VaSidebar.vue";

/* template */
var __vue_render__$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classObj, style: _vm.styleObj }, [
    _c(
      "div",
      { class: _vm.classPrefix + "-sidebar-scrollarea" },
      [_vm._t("default")],
      2
    )
  ])
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  const __vue_inject_styles__$9 = undefined;
  /* scoped */
  const __vue_scope_id__$9 = undefined;
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VaSidebar = normalizeComponent(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$a = {
  name: 'VaLozenge',
  props: {
    type: {
      type: String,
      required: false,
      default: 'default',
      validator (v) {
        return [
          'default',
          'primary',
          'success',
          'warning',
          'danger',
          'subtle',
          'help'
        ].includes(v)
      }
    },
    bold: {
      type: Boolean,
      required: false,
      default: false
    },
    uppercase: {
      type: Boolean,
      required: false,
      default: false
    },
    truncate: {
      type: Boolean,
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      validator (v) {
        return ['lg', 'sm'].includes(v)
      }
    },
    classPrefix: {
      type: String,
      required: false,
      default: 'va'
    }
  },
  computed: {
    classObj () {
      let { classPrefix, bold, type, size, uppercase, truncate } = this;
      let classes = {};

      classes[classPrefix + '-lozenge'] = true;
      classes[classPrefix + '-lozenge-bold'] = bold;
      type ? (classes[classPrefix + '-lozenge-' + type] = true) : '';
      size ? (classes[classPrefix + '-lozenge-' + size] = true) : '';
      uppercase ? (classes[classPrefix + '-lozenge-uppercase'] = true) : '';
      truncate ? (classes[classPrefix + '-lozenge-truncate'] = true) : '';

      return classes
    }
  }
};

/* script */
const __vue_script__$a = script$a;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$a.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Lozenge/VaLozenge.vue";

/* template */
var __vue_render__$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", { class: _vm.classObj }, [_vm._t("default")], 2)
};
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

  /* style */
  const __vue_inject_styles__$a = function (inject) {
    if (!inject) return
    inject("data-v-09e4fc7e_0", { source: "/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-lozenge {\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1;\n  display: inline-block;\n  padding: 3px 4px 3px;\n  border-radius: 3px;\n  overflow: hidden;\n  vertical-align: sub;\n}\n.va-lozenge-truncate {\n    max-width: 180px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.va-lozenge-uppercase {\n    text-transform: uppercase;\n}\n.va-lozenge-sm {\n    padding: 2px 3px 2px;\n    border-radius: 3px;\n    font-size: 10px;\n}\n.va-lozenge-lg {\n    padding: 3px 4px 3px;\n    border-radius: 4px;\n    font-size: 14px;\n    font-weight: 500;\n}\n.va-lozenge.va-lozenge-default {\n    background-color: #f3f4f6;\n    color: #5d6b83;\n}\n.va-lozenge.va-lozenge-default.va-lozenge-bold {\n      background-color: #435370;\n      color: #f3f4f6;\n}\n.va-lozenge.va-lozenge-primary {\n    background-color: #e0edff;\n    color: #0747a6;\n}\n.va-lozenge.va-lozenge-primary.va-lozenge-bold {\n      background-color: #0052cc;\n      color: #f3f4f6;\n}\n.va-lozenge.va-lozenge-success {\n    background-color: #e3fcef;\n    color: #006644;\n}\n.va-lozenge.va-lozenge-success.va-lozenge-bold {\n      background-color: #008558;\n      color: #f3f4f6;\n}\n.va-lozenge.va-lozenge-warning {\n    background-color: #fff0b3;\n    color: #435370;\n}\n.va-lozenge.va-lozenge-warning.va-lozenge-bold {\n      background-color: #ff9a1f;\n      color: #354664;\n}\n.va-lozenge.va-lozenge-help {\n    background-color: #eae6ff;\n    color: #413394;\n}\n.va-lozenge.va-lozenge-help.va-lozenge-bold {\n      background-color: #5243a8;\n      color: #f3f4f6;\n}\n.va-lozenge.va-lozenge-danger {\n    background-color: #ffebe6;\n    color: #bd2600;\n}\n.va-lozenge.va-lozenge-danger.va-lozenge-bold {\n      background-color: #e0350b;\n      color: #f3f4f6;\n}\n.va-lozenge.va-lozenge-subtle {\n    background-color: white;\n    color: #435370;\n}\n.va-lozenge.va-lozenge-subtle.va-lozenge-bold {\n      background-color: white;\n      color: #8993a4;\n}\n\n/*# sourceMappingURL=VaLozenge.vue.map */", map: {"version":3,"sources":["VaLozenge.vue","/Users/ax/Documents/prj/cue/app/aaa/src/Lozenge/VaLozenge.vue"],"names":[],"mappings":"AAAA,QAAQ;AACR,YAAY;AACZ,UAAU;AACV,QAAQ;AACR,SAAS;AACT,UAAU;AACV,OAAO;AACP,iBAAiB;AACjB,eAAe;AACf,WAAW;ACoEX,YAAA;AAEA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;EACA,qBAAA;EACA,oBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AAAA;AAEA;IACA,gBAAA;IACA,uBAAA;IACA,mBAAA;AAAA;AAEA;IACA,yBAAA;AAAA;AAEA;IACA,oBAAA;IACA,kBAAA;IACA,eAAA;AAAA;AAEA;IACA,oBAAA;IACA,kBAAA;IACA,eAAA;IACA,gBAAA;AAAA;AA3BA;IAJA,yBAAA;IACA,cAAA;AAAA;AAGA;MAJA,yBAAA;MACA,cAAA;AAAA;AAGA;IAJA,yBAAA;IACA,cAAA;AAAA;AAGA;MAJA,yBAAA;MACA,cAAA;AAAA;AAGA;IAJA,yBAAA;IACA,cAAA;AAAA;AAGA;MAJA,yBAAA;MACA,cAAA;AAAA;AAGA;IAJA,yBAAA;IACA,cAAA;AAAA;AAGA;MAJA,yBAAA;MACA,cAHA;AAAA;AAMA;IAJA,yBAAA;IACA,cAAA;AAAA;AAGA;MAJA,yBAAA;MACA,cAAA;AAAA;AAGA;IAJA,yBAAA;IACA,cAAA;AAAA;AAGA;MAJA,yBAAA;MACA,cAAA;AAAA;AAGA;IAJA,uBAAA;IACA,cAAA;AAAA;AAGA;MAJA,uBAAA;MACA,cAAA;AAAA;;ADEA,wCAAwC","file":"VaLozenge.vue","sourcesContent":["/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-lozenge {\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1;\n  display: inline-block;\n  padding: 3px 4px 3px;\n  border-radius: 3px;\n  overflow: hidden;\n  vertical-align: sub; }\n  .va-lozenge-truncate {\n    max-width: 180px;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .va-lozenge-uppercase {\n    text-transform: uppercase; }\n  .va-lozenge-sm {\n    padding: 2px 3px 2px;\n    border-radius: 3px;\n    font-size: 10px; }\n  .va-lozenge-lg {\n    padding: 3px 4px 3px;\n    border-radius: 4px;\n    font-size: 14px;\n    font-weight: 500; }\n  .va-lozenge.va-lozenge-default {\n    background-color: #f3f4f6;\n    color: #5d6b83; }\n    .va-lozenge.va-lozenge-default.va-lozenge-bold {\n      background-color: #435370;\n      color: #f3f4f6; }\n  .va-lozenge.va-lozenge-primary {\n    background-color: #e0edff;\n    color: #0747a6; }\n    .va-lozenge.va-lozenge-primary.va-lozenge-bold {\n      background-color: #0052cc;\n      color: #f3f4f6; }\n  .va-lozenge.va-lozenge-success {\n    background-color: #e3fcef;\n    color: #006644; }\n    .va-lozenge.va-lozenge-success.va-lozenge-bold {\n      background-color: #008558;\n      color: #f3f4f6; }\n  .va-lozenge.va-lozenge-warning {\n    background-color: #fff0b3;\n    color: #435370; }\n    .va-lozenge.va-lozenge-warning.va-lozenge-bold {\n      background-color: #ff9a1f;\n      color: #354664; }\n  .va-lozenge.va-lozenge-help {\n    background-color: #eae6ff;\n    color: #413394; }\n    .va-lozenge.va-lozenge-help.va-lozenge-bold {\n      background-color: #5243a8;\n      color: #f3f4f6; }\n  .va-lozenge.va-lozenge-danger {\n    background-color: #ffebe6;\n    color: #bd2600; }\n    .va-lozenge.va-lozenge-danger.va-lozenge-bold {\n      background-color: #e0350b;\n      color: #f3f4f6; }\n  .va-lozenge.va-lozenge-subtle {\n    background-color: white;\n    color: #435370; }\n    .va-lozenge.va-lozenge-subtle.va-lozenge-bold {\n      background-color: white;\n      color: #8993a4; }\n\n/*# sourceMappingURL=VaLozenge.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$a = undefined;
  /* module identifier */
  const __vue_module_identifier__$a = undefined;
  /* functional template */
  const __vue_is_functional_template__$a = false;
  /* style inject SSR */
  

  
  var VaLozenge = normalizeComponent(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    createInjector,
    undefined
  );

//
  
  const  components$1 = { 'va-icon':VaIcon, 'va-lozenge':VaLozenge };
  
var script$b = {
  name: 'VaSidebarGroupItem',
  components: components$1,
  props: {
    item: {
      type: Object
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    showToggle: {
      type: Boolean,
      default: false
    },
    toggleType: {
      type: String,
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    let s = this.showToggle;
    return {
      st: s,
      minified: false
    }
  },
  created () {
    this.$on('Va@showToggleChange', val => {
      this.st = val;
    });
  },
  computed: {
    itemHasMethod () {
      return this.item.method !== undefined
    },
    itemMethod () {
      if (this.itemHasMethod) {
        return {
          click: this.item.method
        }
      }

      return false
    },
    showIcon () {
      return this.item.icon !== undefined
    },
    showLabel () {
      return (
        this.item.route === undefined &&
        this.item.element === undefined &&
        this.item.external === undefined
      )
    },
    showLink () {
      return this.item.route !== undefined || this.item.element !== undefined
    },
    showHyperLink () {
      return this.showLink && this.$router === undefined
    },
    showExternalHyperLink () {
      return this.item.external !== undefined
    },
    showRouterLink () {
      return this.showLink && this.$router !== undefined
    },
    classObj () {
      let { classPrefix, minified } = this;
      let classes = {};

      classes[classPrefix + '-sidebar-group-item-text'] = true;
      classes[classPrefix + '-sidebar-group-item-minified'] = minified;

      return classes
    },
    styleObj () {
      let { showIcon } = this;
      let style = {};

      style['padding-left'] = showIcon ? '0px' : '0px';

      return style
    }
  },
  methods: {
    setAsActiveIfActive () {
      let parentElement = this.$refs.itemText.parentElement;
      if (parentElement.classList) {
        if (parentElement.classList.contains('active')) {
          parentElement.classList.remove('active');
        }
      }
      if (this.item.route !== undefined && this.$route !== undefined ) {
        if (this.$route.path !== undefined) {
          if (this.item.route === this.$route.path) {
            if (parentElement.classList) {
              parentElement.classList.add('active');
            }
          }
        }
      }
    }
  },
  watch: {
    item () {},
    $route () {
      this.setAsActiveIfActive();
    }
  },
  mounted () {
    if (!this.$router) {
      window.addEventListener('hashchange', () => {
        // todo
      });
    }

    this.setAsActiveIfActive();
  }
};

/* script */
const __vue_script__$b = script$b;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$b.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Sidebar/VaSidebarGroupItem.vue";

/* template */
var __vue_render__$b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "span",
    _vm._g({ ref: "itemText", class: _vm.classObj }, _vm.itemMethod),
    [
      _vm.st && _vm.toggleType === "circle"
        ? _c(
            "span",
            { class: _vm.classPrefix + "-sidebar-group-item-text-icon" },
            [_c("va-icon", { attrs: { type: "circle" } })],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "span",
        { class: _vm.classPrefix + "-sidebar-group-item-text" },
        [
          _vm.showIcon
            ? _c(
                "span",
                { class: _vm.classPrefix + "-sidebar-group-item-icon" },
                [
                  _vm.item.iconColor
                    ? _c("va-icon", {
                        attrs: {
                          type: _vm.item.icon,
                          color: _vm.item.iconColor,
                          size: _vm.item.iconSize,
                          "icon-style": _vm.item.iconStyle
                        }
                      })
                    : _c("va-icon", {
                        attrs: {
                          type: _vm.item.icon,
                          size: _vm.item.iconSize,
                          "icon-style": _vm.item.iconStyle
                        }
                      })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.showLabel
            ? _c(
                "span",
                {
                  class: _vm.classPrefix + "-sidebar-group-item-label",
                  style: _vm.styleObj
                },
                [
                  _vm._v("\n      " + _vm._s(_vm.item.name) + "\n      "),
                  _vm.item.sub
                    ? _c(
                        "span",
                        {
                          class:
                            _vm.classPrefix + "-sidebar-group-item-substring"
                        },
                        [_vm._v(_vm._s(_vm.item.sub))]
                      )
                    : _vm._e()
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.showRouterLink
            ? _c(
                "router-link",
                {
                  class: _vm.classPrefix + "-sidebar-group-item-router-link",
                  style: _vm.styleObj,
                  attrs: { to: _vm.item.meta.target }
                },
                [
                  _vm._v("\n      " + _vm._s(_vm.item.name) + "\n      "),
                  _vm.item.sub
                    ? _c(
                        "span",
                        {
                          class:
                            _vm.classPrefix + "-sidebar-group-item-substring"
                        },
                        [_vm._v(_vm._s(_vm.item.sub))]
                      )
                    : _vm._e()
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.showHyperLink
            ? _c(
                "a",
                {
                  class: _vm.classPrefix + "-sidebar-group-item-link",
                  style: _vm.styleObj,
                  attrs: { href: _vm.item.meta.target }
                },
                [
                  _vm._v("\n      " + _vm._s(_vm.item.name) + "\n      "),
                  _vm.item.sub
                    ? _c(
                        "span",
                        {
                          class:
                            _vm.classPrefix + "-sidebar-group-item-substring"
                        },
                        [_vm._v(_vm._s(_vm.item.sub))]
                      )
                    : _vm._e()
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.showExternalHyperLink
            ? _c(
                "a",
                {
                  class: _vm.classPrefix + "-sidebar-group-item-external-link",
                  style: _vm.styleObj,
                  attrs: { href: _vm.item.meta.target, target: "_blank" }
                },
                [
                  _vm._v("\n      " + _vm._s(_vm.item.name) + "\n      "),
                  _vm.item.sub
                    ? _c(
                        "span",
                        {
                          class:
                            _vm.classPrefix + "-sidebar-group-item-substring"
                        },
                        [_vm._v(_vm._s(_vm.item.sub))]
                      )
                    : _vm._e()
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.item.lozenge
            ? _c(
                "span",
                { staticStyle: { display: "flex" } },
                [
                  _c(
                    "va-lozenge",
                    {
                      attrs: {
                        bold: _vm.item.lozenge.bold,
                        uppercase: "",
                        type: _vm.item.lozenge.type
                      }
                    },
                    [_vm._v(_vm._s(_vm.item.lozenge.text))]
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ]
  )
};
var __vue_staticRenderFns__$b = [];
__vue_render__$b._withStripped = true;

  /* style */
  const __vue_inject_styles__$b = undefined;
  /* scoped */
  const __vue_scope_id__$b = undefined;
  /* module identifier */
  const __vue_module_identifier__$b = undefined;
  /* functional template */
  const __vue_is_functional_template__$b = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VaSidebarGroupItem = normalizeComponent(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$b,
    __vue_script__$b,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    undefined,
    undefined
  );

//
  const components$2 = { 'va-icon':VaIcon };
  
var script$c = {
  name: 'VaSidebarGroupToggle',
  components: components$2,
  props: {
    open: {
      type: Boolean,
      default: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  computed: {
    classObj () {
      let { classPrefix, open } = this;
      let classes = {};

      classes[classPrefix + '-sidebar-group-item-toggle'] = true;
      classes[classPrefix + '-sidebar-group-item-toggle-closed'] = !open;

      return classes
    },
    iconObj () {
      let { classPrefix, open } = this;
      let classes = {};

      classes[classPrefix + '-sidebar-group-item-toggle-icon'] = true;
      classes[classPrefix + '-sidebar-group-item-toggle-icon-closed'] = !open;

      return classes
    }
  }
};

/* script */
const __vue_script__$c = script$c;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$c.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Sidebar/VaSidebarGroupToggle.vue";

/* template */
var __vue_render__$c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("span", { class: _vm.classObj }, [
    _c(
      "span",
      { class: _vm.iconObj },
      [
        !_vm.open
          ? _c("va-icon", {
              attrs: { type: "angle-right", size: "12px", margin: "0 6px 0 0" }
            })
          : _c("va-icon", {
              attrs: { type: "angle-down", size: "12px", margin: "0 4.5px 0 0" }
            })
      ],
      1
    )
  ])
};
var __vue_staticRenderFns__$c = [];
__vue_render__$c._withStripped = true;

  /* style */
  const __vue_inject_styles__$c = undefined;
  /* scoped */
  const __vue_scope_id__$c = undefined;
  /* module identifier */
  const __vue_module_identifier__$c = undefined;
  /* functional template */
  const __vue_is_functional_template__$c = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VaSidebarGroupToggle = normalizeComponent(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$c,
    __vue_script__$c,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    undefined,
    undefined
  );

//
  
  const  components$3 = { 'va-sidebar-group-item':VaSidebarGroupItem, 'va-sidebar-group-toggle':VaSidebarGroupToggle };
  
var script$d = {
  name: 'VaSidebarGroupLevel',
  components: components$3,
  props: {
    parentItem: {
      type: Object,
      required: true
    },
    level: {
      type: Number,
      required: true
    },
    open: {
      type: Boolean,
      required: false,
      default: false
    },
    showToggle: {
      type: Boolean,
      default: false
    },
    toggleType: {
      type: String,
      required: false,
      validator (v) {
        return ['arrow', 'circle'].includes(v)
      }
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    let s = this.showToggle;
    return {
      st: s,
      isOpen: this.open
    }
  },
  created () {
    this.$on('Va@showToggleChange', val => {
      this.st = val;
    });
  },
  computed: {
    classObj () {
      let { classPrefix, isOpen, level } = this;
      let classes = {};

      classes[classPrefix + '-sidebar-navigationlevel'] = true;
      classes[classPrefix + '-sidebar-navigationlevel-closed'] = !isOpen;
      classes[classPrefix + '-sidebar-navigationlevel-open'] = isOpen;
      classes[classPrefix + '-sidebar-navigationlevel-level-' + level] = true;

      return classes
    }
  },
  methods: {
    onToggleClick () {
      this.isOpen = !this.isOpen;
    },
    onItemClick () {
      if (this.isOpen === false) {
        this.isOpen = true;
      }
    }
  }
};

/* script */
const __vue_script__$d = script$d;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$d.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Sidebar/VaSidebarGroupLevel.vue";

/* template */
var __vue_render__$d = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classObj }, [
    _c("div", { class: _vm.classPrefix + "-sidebar-navigationlevel-parent" }, [
      _c(
        "div",
        { class: _vm.classPrefix + "-sidebar-group-item" },
        [
          _vm.st
            ? _c("va-sidebar-group-toggle", {
                attrs: { open: _vm.isOpen },
                nativeOn: {
                  click: function($event) {
                    return _vm.onToggleClick($event)
                  }
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("va-sidebar-group-item", {
            attrs: {
              item: _vm.parentItem,
              "is-open": _vm.isOpen,
              "show-toggle": _vm.st
            },
            nativeOn: {
              click: function($event) {
                return _vm.onItemClick($event)
              }
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "ul",
      { class: _vm.classPrefix + "-sidebar-navigationlevel-children" },
      [_vm._t("default")],
      2
    )
  ])
};
var __vue_staticRenderFns__$d = [];
__vue_render__$d._withStripped = true;

  /* style */
  const __vue_inject_styles__$d = undefined;
  /* scoped */
  const __vue_scope_id__$d = undefined;
  /* module identifier */
  const __vue_module_identifier__$d = undefined;
  /* functional template */
  const __vue_is_functional_template__$d = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VaSidebarGroupLevel = normalizeComponent(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$d,
    __vue_script__$d,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    undefined,
    undefined
  );

/**
 * Original implementation by MisRob and released under the MIT license.
 * https://github.com/MisRob/vue-tree-navigation
 * Modified for use with vue-atlas
 *
 * Remove a domain and router's `/#` from URL.
 */
const getRelativeUrl = (url, origin) => {
  let relativeUrl = url.replace('/#/', '/');

  if (origin[origin.length - 1] === '/') {
    origin = origin.slice(0, -1);
  }
  relativeUrl = relativeUrl.replace(origin, '');

  return sanitizeRoute(relativeUrl)
};

/**
 * Remove an element appended to the end of a path.
 */
const removeElementFromPath = path => {
  let hashPos;

  while (hashPos !== -1) {
    hashPos = path.lastIndexOf('#');

    if (hashPos === -1) {
      return path
    }

    // do not cut of router url
    if (hashPos === path.indexOf('#/')) {
      return path
    }

    path = path.slice(0, hashPos);
  }
};

/**
 * First character should be backslash.
 * Last character shouldn't be backslash.
 */
const sanitizeRoute = route => {
  if (route === undefined) {
    return
  }

  if (route[0] !== '/') {
    route = '/' + route;
  }

  if (route[route.length - 1] === '/') {
    route = route.slice(0, -1);
  }

  return route
};

/**
 * Check if a parent URL starts with another URL.
 * Ignore elements.
 */
const startsWithUrl = (parentUrl, url) => {
  if (!url.startsWith('/#')) {
    url = removeElementFromPath(url);
  }

  if (parentUrl.startsWith(url)) {
    return true
  }

  return false
};

/**
 * Original implementation by MisRob and released under the MIT license.
 * https://github.com/MisRob/vue-tree-navigation
 * Modified for use with vue-atlas
 */

/**
 * Recursive function.
 * One call generates one level of the tree.
 */
const generateLevel = (
  createElement,
  items,
  level,
  defaultOpenLevel,
  showToggle
) => {
  const children = [];

  if (items !== undefined && items !== false) {
    items.forEach(item => {
      if (item.hasOwnProperty('children')) {
        const navLevel = createElement(
          VaSidebarGroupLevel,
          {
            props: {
              parentItem: item,
              level,
              open: renderLevelAsOpen(item, level, defaultOpenLevel),
              showToggle
            }
          },
          [
            ...generateLevel(
              createElement,
              item.children,
              level + 1,
              defaultOpenLevel,
              showToggle
            )
          ]
        );

        children.push(createElement('li', [navLevel]));
      } else {
        const navItem = createElement(VaSidebarGroupItem, {
          props: {
            item,
            showToggle,
            toggleType: 'circle'
          }
        });

        children.push(createElement('li', { class: 'va-sidebar-group-item' }, [navItem]));
      }
    });
  }

  return children
};

/**
 * Level should be opened in following cases
 * - level is less than or equal to default open level
 * - its URL is a part of an active URL
 * - it contains a child which URL is a part of an active URL
 */
const renderLevelAsOpen = (parentItem, level, defaultOpenLevel) => {
  if (defaultOpenLevel >= level) {
    return true
  }

  const currentUrl = getRelativeUrl(
    window.location.href,
    window.location.origin
  );

  if (
    parentItem.meta.target !== '' &&
    startsWithUrl(currentUrl, parentItem.meta.target) === true
  ) {
    return true
  }

  for (let i = 0; i < parentItem.children.length; i++) {
    let child = parentItem.children[i];

    if (
      child.meta.target !== '' &&
      startsWithUrl(currentUrl, child.meta.target) === true
    ) {
      return true
    }
  }

  return false
};

/**
 * Recursive function.
 * Insert metadata containing the navigation path and its type to each item.
 **/
const insertMetadataToItems = (items, parent) => {
  if (items !== undefined && items !== false) {
    items.forEach(item => {
      item.meta = getItemMetadata(item, parent);

      if (item.hasOwnProperty('children')) {
        item.children = insertMetadataToItems(item.children, item);
      }
    });

    return items
  }

  return false
};

/**
 * Return item metadata object: { path: ..., target: ... }
 */
const getItemMetadata = (item, parent) => {
  // const element = sanitizeElement(item.element)
  // const route = sanitizeRoute(item.route)
  const element = item.element;
  const route = item.route;
  const external = item.external;
  const icon = item.icon || false;
  const method = item.method || false;
  const iconColor = item.iconColor || false;
  const iconSize = item.iconSize || '1em';
  const iconStyle = item.iconStyle || 'solid';

  // item is its own parent
  if (parent === undefined) {
    if (
      element === undefined &&
      route === undefined &&
      external === undefined
    ) {
      return {
        path: '',
        target: ''
      }
    }

    if (external !== undefined) {
      return {
        path: '',
        target: external
      }
    }

    if (route !== undefined) {
      return {
        path: route,
        target: route
      }
    }

    if (element !== undefined) {
      return {
        path: '',
        target: '/' + element
      }
    }
  }

  const parentPath = sanitizeRoute(parent.meta.path);

  if (external !== undefined) {
    return {
      icon,
      iconColor,
      iconSize,
      iconStyle,
      method,
      path: parentPath,
      target: external
    }
  }

  if (route !== undefined) {
    return {
      icon,
      iconColor,
      iconSize,
      iconStyle,
      method,
      path: route,
      target: route
    }
  }

  if (element !== undefined) {
    return {
      icon,
      iconColor,
      iconSize,
      iconStyle,
      method,
      path: parentPath,
      target: sanitizeRoute(parentPath + element)
    }
  }

  return {
    icon,
    iconColor,
    iconSize,
    iconStyle,
    method,
    path: parentPath,
    target: ''
  }
};

/**
 * Original implementation by MisRob and released under the MIT license.
 * https://github.com/MisRob/vue-tree-navigation
 * Modified for use with vue-atlas
 */



const VaSidebarGroup = {
  mixins: [events],
  props: {
    items: {
      type: Array,
      required: false
    },
    defaultOpenLevel: {
      type: Number,
      default: 0
    },
    showToggle: {
      type: Boolean,
      default: false,
      required: false
    },
    title: {
      type: String,
      default: '',
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  computed: {
    itemsWithMetadata () {
      const self = this;

      if (self.items !== undefined) {
        const items = JSON.parse(JSON.stringify(self.items));
        return insertMetadataToItems(items)
      }

      return false
    }
  },
  watch: {
    showToggle (val) {
      this.dispatch('VaApp', 'Va@configShowToggleChange', val);
    }
  },
  mounted () {
    setTimeout(() => {
      this.dispatch('VaApp', 'Va@configShowToggleChange', this.showToggle);
    }, 10);
  },
  render (createElement) {
    let { classPrefix, title } = this;
    const self = this;
    const level = 1;
    const tree = createElement(
      'ul',
      generateLevel(
        createElement,
        self.itemsWithMetadata,
        level,
        self.defaultOpenLevel,
        self.showToggle
      )
    );
    const level0 = createElement(
      'div',
      {
        class: [classPrefix + '-sidebar-navigationlevel', classPrefix + '-sidebar-navigationlevel-level-0']
      },
      [tree]
    );
    const treeNavigation = createElement(
      'div',
      {
        class: classPrefix + '-sidebar-treenavigation'
      },
      [level0]
    );
    const contentSlot = createElement('div', this.$slots.default);
    const headerItem = createElement(
      'div',
      {
        class: classPrefix + '-sidebar-group-title'
      },
      [
        createElement('span', title)
      ]
    );
    const entireGroup = createElement(
      'div',
      {

      },
      [headerItem, contentSlot, treeNavigation]
    );

    return entireGroup
  }
};

const PopoverMixin = {
  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    effect: {
      type: String,
      default: 'fadeDown'
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    header: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'top'
    },
    noresize: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function
    }
  },
  data () {
    let show = this.show;
    return {
      isShow: show,
      listeners: this.getListeners(),
      position: {
        top: 0,
        left: 0
      }
    }
  },
  watch: {
    isShow (val) {
      if (val && !this.noresize) {
        this.$nextTick(() => {
          this.resize();
        });
      }
    }
  },
  methods: {
    getListeners () {
      switch (this.trigger) {
        case 'hover':
          return {
            mouseenter: this.showHandler,
            mouseleave: this.hide
          }
        case 'focus':
          return {}
        case 'mouse':
          return {
            mousedown: this.showHandler,
            mouseup: this.hide
          }
        default:
          return {
            click: this.click
          }
      }
    },
    click () {
      this.toggle();
      if (this.onClick) {
        this.onClick();
      }
    },
    showHandler () {
      setTimeout(() => {
        this.isShow = true;
      }, 200);
    },
    hide () {
      setTimeout(() => {
        this.isShow = false;
      }, 200);
    },
    toggle () {
      this.isShow = !this.isShow;
    },
    resize () {
      let popover = this.$refs.popover;
      if (!popover) return
      let triger = this.$refs.trigger;
      if (!triger) return
      popover.style.display = 'block';

      switch (this.placement) {
        case 'top':
          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
          this.position.top = triger.offsetTop - popover.offsetHeight;
          break
        case 'top left':
          this.position.left = triger.offsetLeft;
          this.position.top = triger.offsetTop - popover.offsetHeight;
          break
        case 'top right':
          this.position.left = triger.offsetLeft - (Math.abs(triger.offsetWidth - popover.offsetWidth));
          this.position.top = triger.offsetTop - popover.offsetHeight;
          break
        case 'left':
          this.position.left = triger.offsetLeft - popover.offsetWidth;
          this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
          break
        case 'left top':
          this.position.left = triger.offsetLeft - popover.offsetWidth;
          this.position.top = triger.offsetTop;
          break
        case 'left bottom':
          this.position.left = triger.offsetLeft - popover.offsetWidth;
          this.position.top = triger.offsetTop - (Math.abs(triger.offsetHeight - popover.offsetHeight));
          break
        case 'right':
          this.position.left = triger.offsetLeft + triger.offsetWidth;
          this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
          break
        case 'right top':
          this.position.left = triger.offsetLeft + triger.offsetWidth;
          this.position.top = triger.offsetTop;
          break
        case 'right bottom':
          this.position.left = triger.offsetLeft + triger.offsetWidth;
          this.position.top = triger.offsetTop - (Math.abs(triger.offsetHeight - popover.offsetHeight));
          break
        case 'bottom':
          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
          this.position.top = triger.offsetTop + triger.offsetHeight;
          break
        case 'bottom left':
          this.position.left = triger.offsetLeft;
          this.position.top = triger.offsetTop + triger.offsetHeight;
          break
        case 'bottom right':
          this.position.left = triger.offsetLeft - (Math.abs(triger.offsetWidth - popover.offsetWidth));
          this.position.top = triger.offsetTop + triger.offsetHeight;
          break
        default:
          console.error('Wrong placement group');
      }
      popover.style.top = this.position.top + 'px';
      popover.style.left = this.position.left + 'px';
    }
  },
  mounted () {
    if (!this.$refs.popover) return
    this.resize();
    this.$refs.popover.style.display = 'none';
    this.isShow = false;
    if (this.trigger === 'focus') {
      const input = this.$refs.trigger.querySelector('input');
      if (input) {
        input.removeEventListener('focus', this.showHandler);
        input.removeEventListener('blur', this.hide);

        input.addEventListener('focus', this.showHandler);
        input.addEventListener('blur', this.hide);
      }
    }
  }
};

//

var script$e = {
  name: 'VaTooltip',
  props: {
    arrow: {
      type: Boolean,
      default: false
    },
    effect: {
      type: String,
      default: 'tooltip-fade-top' // tooltip-fade-top, -left, -right, -bottom
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  mixins: [PopoverMixin],
  computed: {
    classObj () {
      let { classPrefix } = this;
      let classes = {};

      classes[classPrefix + '-tooltip'] = true;
      classes[classPrefix + '-tooltip-' + this.placement.split(' ').join('-')] = true;

      return classes
    }
  }
};

/* script */
const __vue_script__$e = script$e;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$e.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Tooltip/VaTooltip.vue";

/* template */
var __vue_render__$e = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "span",
    { ref: "tooltip", class: _vm.classPrefix + "-tooltip_wrapper" },
    [
      _c(
        "span",
        _vm._g(
          { ref: "trigger", class: _vm.classPrefix + "-tooltip_trigger" },
          _vm.listeners
        ),
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: _vm.effect } }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isShow,
                expression: "isShow"
              }
            ],
            ref: "popover",
            class: _vm.classObj
          },
          [
            _vm.arrow
              ? _c("div", { class: _vm.classPrefix + "-tooltip-arrow" })
              : _vm._e(),
            _vm._v(" "),
            _c("div", { class: _vm.classPrefix + "-tooltip-inner" }, [
              _c("span", { domProps: { innerHTML: _vm._s(_vm.content) } })
            ])
          ]
        )
      ])
    ],
    1
  )
};
var __vue_staticRenderFns__$e = [];
__vue_render__$e._withStripped = true;

  /* style */
  const __vue_inject_styles__$e = function (inject) {
    if (!inject) return
    inject("data-v-0a614527_0", { source: "/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-tooltip_wrapper[data-v-0a614527],\n.va-tooltip_trigger[data-v-0a614527] {\n  display: inline-block;\n  width: auto;\n  height: auto;\n}\n.va-tooltip[data-v-0a614527] {\n  position: absolute;\n  z-index: 1010;\n  display: block;\n  font-size: 12px;\n  font-weight: normal;\n  visibility: visible;\n  background-color: #172c4f;\n  color: white;\n  padding: 2px 6px;\n  border-radius: 3px;\n  line-height: 1.3;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  white-space: nowrap;\n}\n.va-tooltip-arrow[data-v-0a614527] {\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-color: transparent;\n    border-style: solid;\n}\n.va-tooltip-top[data-v-0a614527], .va-tooltip-top-left[data-v-0a614527], .va-tooltip-top-right[data-v-0a614527] {\n    margin-top: -5px;\n}\n.va-tooltip-bottom[data-v-0a614527], .va-tooltip-bottom-left[data-v-0a614527], .va-tooltip-bottom-right[data-v-0a614527] {\n    margin-top: 5px;\n}\n.va-tooltip-left[data-v-0a614527], .va-tooltip-left-top[data-v-0a614527], .va-tooltip-left-bottom[data-v-0a614527] {\n    margin-left: -5px;\n}\n.va-tooltip-left .va-tooltip-arrow[data-v-0a614527], .va-tooltip-left-top .va-tooltip-arrow[data-v-0a614527], .va-tooltip-left-bottom .va-tooltip-arrow[data-v-0a614527] {\n      top: 50%;\n      right: -5px;\n      margin-top: -5px;\n      border-width: 5px 0 5px 5px;\n      border-left-color: #172c4f;\n}\n.va-tooltip-right[data-v-0a614527], .va-tooltip-right-top[data-v-0a614527], .va-tooltip-right-bottom[data-v-0a614527] {\n    margin-left: 5px;\n}\n.va-tooltip-right .va-tooltip-arrow[data-v-0a614527], .va-tooltip-right-top .va-tooltip-arrow[data-v-0a614527], .va-tooltip-right-bottom .va-tooltip-arrow[data-v-0a614527] {\n      top: 50%;\n      left: -5px;\n      margin-top: -5px;\n      border-width: 5px 5px 5px 0;\n      border-right-color: #172c4f;\n}\n\n/*# sourceMappingURL=VaTooltip.vue.map */", map: {"version":3,"sources":["VaTooltip.vue","/Users/ax/Documents/prj/cue/app/aaa/src/Tooltip/VaTooltip.vue"],"names":[],"mappings":"AAAA,QAAQ;AACR,YAAY;AACZ,UAAU;AACV,QAAQ;AACR,SAAS;AACT,UAAU;AACV,OAAO;ACiDP,iBAAA;AAOA,eAAA;AASA,WAAA;AAMA,YAAA;AArBA;;EAEA,qBAAA;EACA,WAAA;EACA,YAAA;AAAA;AAEA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,eAAA;EACA,mBAAA;EACA,mBAAA;EACA,yBAMA;EALA,YAdA;EAeA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,qBAAA;EACA,yBAAA;EACA,mBAAA;AAAA;AACA;IACA,kBAAA;IACA,QAAA;IACA,SAAA;IACA,yBAAA;IACA,mBAAA;AAAA;AAEA;IAGA,gBAAA;AAAA;AAEA;IAGA,eAAA;AAAA;AAEA;IAGA,iBAAA;AAAA;AAHA;MAKA,QAAA;MACA,WAAA;MACA,gBAAA;MACA,2BAAA;MACA,0BA5BA;AAAA;AA+BA;IAGA,gBAAA;AAAA;AAHA;MAKA,QAAA;MACA,UAAA;MACA,gBAAA;MACA,2BAAA;MACA,2BAxCA;AAAA;;ADhBA,wCAAwC","file":"VaTooltip.vue","sourcesContent":["/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-tooltip_wrapper,\n.va-tooltip_trigger {\n  display: inline-block;\n  width: auto;\n  height: auto; }\n\n.va-tooltip {\n  position: absolute;\n  z-index: 1010;\n  display: block;\n  font-size: 12px;\n  font-weight: normal;\n  visibility: visible;\n  background-color: #172c4f;\n  color: white;\n  padding: 2px 6px;\n  border-radius: 3px;\n  line-height: 1.3;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  white-space: nowrap; }\n  .va-tooltip-arrow {\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-color: transparent;\n    border-style: solid; }\n  .va-tooltip-top, .va-tooltip-top-left, .va-tooltip-top-right {\n    margin-top: -5px; }\n  .va-tooltip-bottom, .va-tooltip-bottom-left, .va-tooltip-bottom-right {\n    margin-top: 5px; }\n  .va-tooltip-left, .va-tooltip-left-top, .va-tooltip-left-bottom {\n    margin-left: -5px; }\n    .va-tooltip-left .va-tooltip-arrow, .va-tooltip-left-top .va-tooltip-arrow, .va-tooltip-left-bottom .va-tooltip-arrow {\n      top: 50%;\n      right: -5px;\n      margin-top: -5px;\n      border-width: 5px 0 5px 5px;\n      border-left-color: #172c4f; }\n  .va-tooltip-right, .va-tooltip-right-top, .va-tooltip-right-bottom {\n    margin-left: 5px; }\n    .va-tooltip-right .va-tooltip-arrow, .va-tooltip-right-top .va-tooltip-arrow, .va-tooltip-right-bottom .va-tooltip-arrow {\n      top: 50%;\n      left: -5px;\n      margin-top: -5px;\n      border-width: 5px 5px 5px 0;\n      border-right-color: #172c4f; }\n\n/*# sourceMappingURL=VaTooltip.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$e = "data-v-0a614527";
  /* module identifier */
  const __vue_module_identifier__$e = undefined;
  /* functional template */
  const __vue_is_functional_template__$e = false;
  /* style inject SSR */
  

  
  var VaTooltip = normalizeComponent(
    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
    __vue_inject_styles__$e,
    __vue_script__$e,
    __vue_scope_id__$e,
    __vue_is_functional_template__$e,
    __vue_module_identifier__$e,
    createInjector,
    undefined
  );

//

const components$4 = { 'va-tooltip':VaTooltip };


var script$f = {
  name: 'VaMinibarItem',
  components: components$4,
  props: {
    brand: {
      type: Boolean,
      default: false,
      required: false
    },
    tooltip: {
      type: String,
      default: '',
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  computed: {
    classObj () {
      let { classPrefix, brand } = this;
      let classes = {};

      classes[classPrefix + '-minibar-item'] = true;
      classes[classPrefix + '-minibar-item-brand'] = brand;

      return classes
    }
  }
};

/* script */
const __vue_script__$f = script$f;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$f.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Minibar/VaMinibarItem.vue";

/* template */
var __vue_render__$f = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _vm.tooltip
        ? _c(
            "va-tooltip",
            {
              attrs: {
                content: _vm.tooltip,
                placement: "right",
                trigger: "hover",
                effect: "tooltip-fade-right",
                arrow: ""
              }
            },
            [_c("div", { class: _vm.classObj }, [_vm._t("default")], 2)]
          )
        : _c("div", { class: _vm.classObj }, [_vm._t("default")], 2)
    ],
    1
  )
};
var __vue_staticRenderFns__$f = [];
__vue_render__$f._withStripped = true;

  /* style */
  const __vue_inject_styles__$f = undefined;
  /* scoped */
  const __vue_scope_id__$f = undefined;
  /* module identifier */
  const __vue_module_identifier__$f = undefined;
  /* functional template */
  const __vue_is_functional_template__$f = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VaMinibarItem = normalizeComponent(
    { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
    __vue_inject_styles__$f,
    __vue_script__$f,
    __vue_scope_id__$f,
    __vue_is_functional_template__$f,
    __vue_module_identifier__$f,
    undefined,
    undefined
  );

//

const components$5 = { 'va-icon':VaIcon, 'va-minibar-item':VaMinibarItem };

var script$g = {
  name: 'VaMinibar',
  components: components$5,
  mixins: [events],
  props: {
    topItems: {
      type: Array,
      required: false
    },
    bottomItems: {
      type: Array,
      required: false
    },
    theme: {
      type: String,
      default: 'blue',
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    let t = this.theme;
    return {
      currentDesktopMinimumWidth: 0,
      currentDesktopMargin: 0,
      currentContentWidth: 0,
      currentMinibarWidth: 0,
      currentTopbarHeight: 0,
      minibarPriority: false,
      currentSidebarWidth: 0,
      sidebarPriority: false,
      currentWindowWidth: 0,
      isReverse: false,
      isMobile: false,
      isSplit: false,
      isRTL: false,
      th: t
    }
  },
  mounted () {
    this.dispatch('VaApp', 'Va@minibarConnected', true);
    /**
     * This needs to be wrapped in a short setTimeout to give
     * App time to call enableReceivers().
     */
    setTimeout(() => {
      this.dispatch('VaApp', 'Va@configMinibarThemeChange', this.th);
    }, 10);
  },
  created () {
    this.$on('Va@minibarPresenceCheck', () => {
      this.dispatch('VaApp', 'Va@minibarPresenceReply', true);
    });
    this.$on('Va@desktopMinimumWidthChange', val => {
      this.currentDesktopMinimumWidth = val;
    });
    this.$on('Va@desktopMarginChange', val => {
      this.currentDesktopMargin = val;
    });
    this.$on('Va@contentWidthChange', val => {
      this.currentContentWidth = val;
    });
    this.$on('Va@topbarHeightChange', val => {
      this.currentTopbarHeight = val;
    });
    this.$on('Va@minibarWidthChange', val => {
      this.currentMinibarWidth = val;
    });
    this.$on('Va@sidebarWidthChange', val => {
      this.currentSidebarWidth = val;
    });
    this.$on('Va@minibarPriorityChange', val => {
      this.minibarPriority = val;
    });
    this.$on('Va@sidebarPriorityChange', val => {
      this.sidebarPriority = val;
    });
    this.$on('Va@windowWidthChange', val => {
      this.currentWindowWidth = val;
    });
    this.$on('Va@minibarIsMobile', val => {
      this.isMobile = val;
    });
    this.$on('Va@reverseChange', val => {
      this.isReverse = val;
    });
    this.$on('Va@minibarThemeChange', val => {
      this.th = val;
    });
    this.$on('Va@splitChange', val => {
      this.isSplit = val;
    });
    this.$on('Va@rtlChange', val => {
      this.isRTL = val;
    });
  },
  beforeDestroy () {
    this.dispatch('VaApp', 'Va@minibarDisconnect', true);
  },
  watch: {
    theme (val) {
      this.th = val;
      this.dispatch('VaApp', 'Va@configMinibarThemeChange', this.th);
    }
  },
  computed: {
    classObj () {
      let { classPrefix, th } = this;
      let classes = {};

      classes[classPrefix + '-minibar'] = true;
      classes[classPrefix + '-minibar--theme-' + th] = true;

      return classes
    },
    styleObjInner () {
      let style = {};

      style['background'] = 'linear-gradient(to left, rgba(0, 0, 0, 0.1) 0px, rgba(0, 0, 0, 0.15) 1px, rgba(0, 0, 0, 0.1) 1px, rgba(0, 0, 0, 0) 40px)';

      return style
    },
    styleObj () {
      let dmw = parseInt(this.currentDesktopMinimumWidth);
      let dm = parseInt(this.currentDesktopMargin);
      let mw = parseInt(this.currentMinibarWidth);
      let th = parseInt(this.currentTopbarHeight);
      let cw = parseInt(this.currentContentWidth);
      let sw = parseInt(this.currentSidebarWidth);
      let sp = this.sidebarPriority;
      let mp = this.minibarPriority;
      let reverse = this.isReverse;
      let mobile = this.isMobile;
      let split = this.isSplit;
      let rtl = this.isRTL;
      let style = {};

      style['width'] = mw + 'px';
      style['min-width'] = mw + 'px';

      if (mp) {
        style['top'] = '0px';
      } else {
        style['top'] = th + 'px';
      }

      style['bottom'] = '0px';

      /**
       * Adjust the margins if content width is smaller than
       * desktop minimum width.
       */
      if (!mobile) {
        if (cw < dmw) {
          let x = dmw - cw;
          dm = dm - x / 2;
        }
      } else {
        dm = 0;
        dmw = 0;
      }

      if (split) {
        if (reverse) {
          style['right'] = dm + 'px';
        } else {
          style['left'] = dm + 'px';
        }
      } else {
        if (reverse) {
          if (rtl) {
            style['right'] = dm + 'px';
          } else {
            style['left'] = dm + sw + 'px';
          }
        } else {
          if (rtl) {
            style['right'] = dm + sw + 'px';
          } else {
            style['left'] = dm + 'px';
          }
        }
      }

      if (!mp && sp && !reverse && !split && !rtl) {
        style['top'] = '0px';
      }

      if (rtl && !split && !reverse && mp) {
        style['top'] = '0px';
      }

      if (rtl && !split && reverse && !mp && sp) {
        style['top'] = '0px';
      }

      /**
       * Less than 20 and we don't want overflow.
       * Greater than 20 and we do, because we don't want
       * to hide tooltips.
       */
      if (mw < 20) {
        style['overflow'] = 'hidden';
      } else {
        style['overflow'] = 'visible';
      }

      return style
    }
  }
};

/* script */
const __vue_script__$g = script$g;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$g.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Minibar/VaMinibar.vue";

/* template */
var __vue_render__$g = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classObj, style: _vm.styleObj }, [
    _c(
      "div",
      { class: _vm.classPrefix + "-minibar-inner", style: _vm.styleObjInner },
      [
        _c(
          "div",
          { class: _vm.classPrefix + "-minibar-top" },
          _vm._l(_vm.topItems, function(item, index) {
            return _c(
              "div",
              { key: index },
              [
                item.method
                  ? _c(
                      "va-minibar-item",
                      {
                        attrs: { tooltip: item.tooltip, brand: item.brand },
                        nativeOn: {
                          click: function($event) {
                            return item.method($event)
                          }
                        }
                      },
                      [
                        _c("va-icon", {
                          attrs: {
                            type: item.icon,
                            size: item.size,
                            "icon-style": item.iconStyle || "solid"
                          }
                        })
                      ],
                      1
                    )
                  : _c(
                      "va-minibar-item",
                      { attrs: { brand: item.brand, tooltip: item.tooltip } },
                      [
                        _c("va-icon", {
                          attrs: {
                            type: item.icon,
                            size: item.size,
                            "icon-style": item.iconStyle || "solid"
                          }
                        })
                      ],
                      1
                    )
              ],
              1
            )
          }),
          0
        ),
        _vm._v(" "),
        _c(
          "div",
          { class: _vm.classPrefix + "-minibar-bottom" },
          _vm._l(_vm.bottomItems, function(item, index) {
            return _c(
              "div",
              { key: index },
              [
                item.method
                  ? _c(
                      "va-minibar-item",
                      {
                        attrs: { tooltip: item.tooltip },
                        nativeOn: {
                          click: function($event) {
                            return item.method($event)
                          }
                        }
                      },
                      [
                        _c("va-icon", {
                          attrs: {
                            type: item.icon,
                            size: item.size,
                            "icon-style": item.iconStyle || "solid"
                          }
                        })
                      ],
                      1
                    )
                  : _c(
                      "va-minibar-item",
                      { attrs: { tooltip: item.tooltip } },
                      [
                        _c("va-icon", {
                          attrs: {
                            type: item.icon,
                            size: item.size,
                            "icon-style": item.iconStyle || "solid"
                          }
                        })
                      ],
                      1
                    )
              ],
              1
            )
          }),
          0
        )
      ]
    )
  ])
};
var __vue_staticRenderFns__$g = [];
__vue_render__$g._withStripped = true;

  /* style */
  const __vue_inject_styles__$g = undefined;
  /* scoped */
  const __vue_scope_id__$g = undefined;
  /* module identifier */
  const __vue_module_identifier__$g = undefined;
  /* functional template */
  const __vue_is_functional_template__$g = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VaMinibar = normalizeComponent(
    { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
    __vue_inject_styles__$g,
    __vue_script__$g,
    __vue_scope_id__$g,
    __vue_is_functional_template__$g,
    __vue_module_identifier__$g,
    undefined,
    undefined
  );

//

var script$h = {
  name: 'VaTopbar',
  mixins: [events],
  props: {
    theme: {
      type: String,
      default: 'blue',
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    let t = this.theme;
    return {
      currentDesktopMinimumWidth: 0,
      currentDesktopMargin: 0,
      currentContentWidth: 0,
      currentTopbarHeight: 0,
      currentMinibarWidth: 0,
      currentSidebarWidth: 0,
      sidebarPriority: false,
      minibarPriority: false,
      currentWindowWidth: 0,
      topbarPriority: false,
      topbarPadded: false,
      isReverse: false,
      isMobile: false,
      isSplit: false,
      isRTL: false,
      th: t
    }
  },
  mounted () {
    /**
     * This needs to be wrapped in a short setTimeout to give
     * App time to call enableReceivers().
     */
    setTimeout(() => {
      this.dispatch('VaApp', 'Va@configTopbarThemeChange', this.th);
    }, 10);
  },
  created () {
    this.$on('Va@topbarPresenceCheck', () => {
      this.dispatch('VaApp', 'Va@topbarPresenceReply', true);
    });
    this.$on('Va@desktopMinimumWidthChange', val => {
      this.currentDesktopMinimumWidth = val;
    });
    this.$on('Va@desktopMarginChange', val => {
      this.currentDesktopMargin = val;
    });
    this.$on('Va@minibarWidthChange', val => {
      this.currentMinibarWidth = val;
    });
    this.$on('Va@topbarHeightChange', val => {
      this.currentTopbarHeight = val;
    });
    this.$on('Va@contentWidthChange', val => {
      this.currentContentWidth = val;
    });
    this.$on('Va@sidebarWidthChange', val => {
      this.currentSidebarWidth = val;
    });
    this.$on('Va@sidebarPriorityChange', val => {
      this.sidebarPriority = val;
    });
    this.$on('Va@minibarPriorityChange', val => {
      this.minibarPriority = val;
    });
    this.$on('Va@windowWidthChange', val => {
      this.currentWindowWidth = val;
    });
    this.$on('Va@topbarPriorityChange', val => {
      this.topbarPriority = val;
    });
    this.$on('Va@topbarPaddedChange', val => {
      this.topbarPadded = val;
    });
    this.$on('Va@reverseChange', val => {
      this.isReverse = val;
    });
    this.$on('Va@topbarIsMobile', val => {
      this.isMobile = val;
    });
    this.$on('Va@topbarThemeChange', val => {
      this.th = val;
    });
    this.$on('Va@splitChange', val => {
      this.isSplit = val;
    });
    this.$on('Va@rtlChange', val => {
      this.isRTL = val;
    });
  },
  beforeDestroy () {
    this.dispatch('VaApp', 'Va@topbarDisconnect', true);
  },
  watch: {
    theme (val) {
      this.th = val;
      this.dispatch('VaApp', 'Va@configTopbarThemeChange', this.th);
    }
  },
  computed: {
    classObj () {
      let { classPrefix, th } = this;
      let classes = {};

      classes[classPrefix + '-topbar'] = true;
      classes[classPrefix + '-topbar--theme-' + th] = true;

      return classes
    },
    styleObj () {
      let dmw = parseInt(this.currentDesktopMinimumWidth);
      let dm = parseInt(this.currentDesktopMargin);
      let th = parseInt(this.currentTopbarHeight);
      let sw = parseInt(this.currentSidebarWidth);
      let cw = parseInt(this.currentContentWidth);
      let mw = parseInt(this.currentMinibarWidth);
      let sp = this.sidebarPriority;
      let mp = this.minibarPriority;
      let tp = this.topbarPriority;
      let tpad = this.topbarPadded;
      let reverse = this.isReverse;
      let mobile = this.isMobile;
      let split = this.isSplit;
      let rtl = this.isRTL;
      let style = {};

      style['height'] = th + 'px';
      style['left'] = '0px';
      style['right'] = '0px';

      /**
       * Adjust the margins if content width is smaller than
       * desktop minimum width.
       */
      if (!mobile) {
        if (cw < dmw) {
          let x = dmw - cw;
          dm = dm - x / 2;
        }
      } else {
        dm = 0;
        dmw = 0;
      }

      /**
       * If a minimum desktop width is set
       */
      if (dmw !== 0) {
        style['min-width'] = dmw - mw - sw + 'px';
      } else {
        style['min-width'] = '0px';
      }

      /**
       * Ready to be thoroughly confused?
       */
      if (sp) {
        if (split) {
          if (reverse) {
            if (mp) {
              style['left'] = dm + sw + 'px';
              style['right'] = dm + mw + 'px';
            } else {
              style['left'] = dm + sw + 'px';
              style['right'] = dm + 'px';
            }
          } else {
            if (mp) {
              style['left'] = dm + mw + 'px';
              style['right'] = dm + sw + 'px';
            } else {
              style['left'] = dm + 'px';
              style['right'] = dm + sw + 'px';
            }
          }
        } else {
          if (reverse) {
            if (mp) {
              style['left'] = sw + mw + dm + 'px';
              style['right'] = dm + 'px';
            } else {
              style['left'] = dm + sw + 'px';
              style['right'] = dm + 'px';
            }
          } else {
            if (mp) {
              style['left'] = sw + mw + dm + 'px';
              style['right'] = dm + 'px';
            } else {
              style['left'] = sw + mw + dm + 'px';
              style['right'] = dm + 'px';
            }
          }
        }
      }

      if (!sp) {
        if (split) {
          if (reverse) {
            if (mp) {
              style['left'] = dm + 'px';
              style['right'] = dm + mw + 'px';
            } else {
              style['left'] = dm + 'px';
              style['right'] = dm + 'px';
            }
          } else {
            if (mp) {
              style['left'] = dm + mw + 'px';
              style['right'] = dm + 'px';
            } else {
              style['left'] = dm + 'px';
              style['right'] = dm + 'px';
            }
          }
        } else {
          if (reverse) {
            if (mp) {
              style['left'] = sw + mw + dm + 'px';
              style['right'] = dm + 'px';
            } else {
              style['left'] = dm + 'px';
              style['right'] = dm + 'px';
            }
          } else {
            if (mp) {
              style['left'] = dm + mw + 'px';
              style['right'] = dm + 'px';
            } else {
              style['left'] = dm + 'px';
              style['right'] = dm + 'px';
            }
          }
        }
      }

      if (rtl) {
        // rtl only effective when not split
        if (!split) {
          if (reverse) {
            if (sp) {
              style['left'] = dm + 'px';
              style['right'] = sw + mw + dm + 'px';
            } else {
              if (mp) {
                style['left'] = dm + 'px';
                style['right'] = dm + mw + 'px';
              }
            }
          } else {
            if (sp) {
              if (mp) {
                style['right'] = mw + sw + dm + 'px';
                style['left'] = dm + 'px';
              } else {
                style['right'] = dm + sw + 'px';
                style['left'] = dm + 'px';
              }
            } else {
              if (mp) {
                style['right'] = mw + sw + dm + 'px';
                style['left'] = dm + 'px';
              }
            }
          }
        }
      }

      if (tp) {
        style['left'] = '0px';
        style['right'] = '0px';

        if (tpad) {
          style['padding-left'] = dm + 8 + 'px';
          style['padding-right'] = dm + 8 + 'px';
          /**
           * Why 8px?
           * Because a 50px Minibar looks best, and if the
           * first or last element in a padded topbar is
           * an icon, this lines it up nicely with the
           * icons in the Minibar.
           */
        }
      }

      // Less than 40 and we don't want overflow.
      // Greater than 40 and we do, because we don't want
      // to hide dropdown menus.
      // That means..
      // Dropdown menus in the topbar won't appear when the
      // topbar has a height of less than 40px.
      if (th < 40) {
        style['overflow'] = 'hidden';
      } else {
        style['overflow'] = 'visible';
      }

      return style
    }
  }
};

/* script */
const __vue_script__$h = script$h;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$h.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Topbar/VaTopbar.vue";

/* template */
var __vue_render__$h = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classObj, style: _vm.styleObj }, [
    _c("div", { class: _vm.classPrefix + "-topbar-inner" }, [
      _c(
        "div",
        { class: _vm.classPrefix + "-topbar-left" },
        [_vm._t("left")],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { class: _vm.classPrefix + "-topbar-center" },
        [_vm._t("center")],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { class: _vm.classPrefix + "-topbar-right" },
        [_vm._t("right")],
        2
      )
    ])
  ])
};
var __vue_staticRenderFns__$h = [];
__vue_render__$h._withStripped = true;

  /* style */
  const __vue_inject_styles__$h = undefined;
  /* scoped */
  const __vue_scope_id__$h = undefined;
  /* module identifier */
  const __vue_module_identifier__$h = undefined;
  /* functional template */
  const __vue_is_functional_template__$h = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VaTopbar = normalizeComponent(
    { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
    __vue_inject_styles__$h,
    __vue_script__$h,
    __vue_scope_id__$h,
    __vue_is_functional_template__$h,
    __vue_module_identifier__$h,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$i = {
  name: 'VaColumn',
  props: {
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  computed: {
    classObj () {
      let { classPrefix } = this;

      return [
        `${classPrefix}-col`,
        {
          [`${classPrefix}-col-xs-${this.xs}`]: this.xs,
          [`${classPrefix}-col-sm-${this.sm}`]: this.sm,
          [`${classPrefix}-col-md-${this.md}`]: this.md,
          [`${classPrefix}-col-lg-${this.lg}`]: this.lg
        }
      ]
    }
  }
};

/* script */
const __vue_script__$i = script$i;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$i.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Grid/VaColumn.vue";

/* template */
var __vue_render__$i = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classObj }, [_vm._t("default")], 2)
};
var __vue_staticRenderFns__$i = [];
__vue_render__$i._withStripped = true;

  /* style */
  const __vue_inject_styles__$i = undefined;
  /* scoped */
  const __vue_scope_id__$i = undefined;
  /* module identifier */
  const __vue_module_identifier__$i = undefined;
  /* functional template */
  const __vue_is_functional_template__$i = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VaColumn = normalizeComponent(
    { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
    __vue_inject_styles__$i,
    __vue_script__$i,
    __vue_scope_id__$i,
    __vue_is_functional_template__$i,
    __vue_module_identifier__$i,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$j = {
  name: 'VaRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  computed: {
    styles () {
      let ret = {};
      let half = Math.floor(this.gutter / 2);
      ret.marginLeft = ret.marginRight = `${-half}px`;
      this.$nextTick(() => {
        this.$children.forEach(children => {
          children.$el.style.paddingLeft = children.$el.style.paddingRight = `${half}px`;
          children.$el.style.marginBottom = this.gutter + 'px';
        });
      });
      return ret
    }
  }
};

/* script */
const __vue_script__$j = script$j;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$j.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Grid/VaRow.vue";

/* template */
var __vue_render__$j = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: _vm.classPrefix + "-row", style: _vm.styles },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$j = [];
__vue_render__$j._withStripped = true;

  /* style */
  const __vue_inject_styles__$j = function (inject) {
    if (!inject) return
    inject("data-v-6b3d94ef_0", { source: "/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-container {\n  box-sizing: border-box;\n  width: 480px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.va-start-xs {\n  justify-content: flex-start;\n  text-align: start;\n}\n.va-center-xs {\n  justify-content: center;\n  text-align: center;\n}\n.va-end-xs {\n  justify-content: flex-end;\n  text-align: end;\n}\n.va-top-xs {\n  align-items: flex-start;\n}\n.va-middle-xs {\n  align-items: center;\n}\n.va-bottom-xs {\n  align-items: flex-end;\n}\n.va-around-xs {\n  justify-content: space-around;\n}\n.va-between-xs {\n  justify-content: space-between;\n}\n.va-first-xs {\n  order: -1;\n}\n.va-last-xs {\n  order: 1;\n}\n.va-col-xs-1 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 8.33333%;\n  max-width: 8.33333%;\n}\n.va-col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n.va-col-xs-2 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 16.66667%;\n  max-width: 16.66667%;\n}\n.va-col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n.va-col-xs-3 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n.va-col-xs-offset-3 {\n  margin-left: 25%;\n}\n.va-col-xs-4 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 33.33333%;\n  max-width: 33.33333%;\n}\n.va-col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n.va-col-xs-5 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 41.66667%;\n  max-width: 41.66667%;\n}\n.va-col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n.va-col-xs-6 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n.va-col-xs-offset-6 {\n  margin-left: 50%;\n}\n.va-col-xs-7 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 58.33333%;\n  max-width: 58.33333%;\n}\n.va-col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n.va-col-xs-8 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 66.66667%;\n  max-width: 66.66667%;\n}\n.va-col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n.va-col-xs-9 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n.va-col-xs-offset-9 {\n  margin-left: 75%;\n}\n.va-col-xs-10 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 83.33333%;\n  max-width: 83.33333%;\n}\n.va-col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n.va-col-xs-11 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 91.66667%;\n  max-width: 91.66667%;\n}\n.va-col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n.va-col-xs-12 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n.va-col-xs-offset-12 {\n  margin-left: 100%;\n}\n@media only screen and (min-width: 48rem) {\n.va-container {\n    box-sizing: border-box;\n    width: 48rem;\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n.va-start-sm {\n    justify-content: flex-start;\n    text-align: start;\n}\n.va-center-sm {\n    justify-content: center;\n    text-align: center;\n}\n.va-end-sm {\n    justify-content: flex-end;\n    text-align: end;\n}\n.va-top-sm {\n    align-items: flex-start;\n}\n.va-middle-sm {\n    align-items: center;\n}\n.va-bottom-sm {\n    align-items: flex-end;\n}\n.va-around-sm {\n    justify-content: space-around;\n}\n.va-between-sm {\n    justify-content: space-between;\n}\n.va-first-sm {\n    order: -1;\n}\n.va-last-sm {\n    order: 1;\n}\n.va-col-sm-1 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 8.33333%;\n    max-width: 8.33333%;\n}\n.va-col-sm-offset-1 {\n    margin-left: 8.33333%;\n}\n.va-col-sm-2 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 16.66667%;\n    max-width: 16.66667%;\n}\n.va-col-sm-offset-2 {\n    margin-left: 16.66667%;\n}\n.va-col-sm-3 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 25%;\n    max-width: 25%;\n}\n.va-col-sm-offset-3 {\n    margin-left: 25%;\n}\n.va-col-sm-4 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 33.33333%;\n    max-width: 33.33333%;\n}\n.va-col-sm-offset-4 {\n    margin-left: 33.33333%;\n}\n.va-col-sm-5 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 41.66667%;\n    max-width: 41.66667%;\n}\n.va-col-sm-offset-5 {\n    margin-left: 41.66667%;\n}\n.va-col-sm-6 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 50%;\n    max-width: 50%;\n}\n.va-col-sm-offset-6 {\n    margin-left: 50%;\n}\n.va-col-sm-7 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 58.33333%;\n    max-width: 58.33333%;\n}\n.va-col-sm-offset-7 {\n    margin-left: 58.33333%;\n}\n.va-col-sm-8 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 66.66667%;\n    max-width: 66.66667%;\n}\n.va-col-sm-offset-8 {\n    margin-left: 66.66667%;\n}\n.va-col-sm-9 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 75%;\n    max-width: 75%;\n}\n.va-col-sm-offset-9 {\n    margin-left: 75%;\n}\n.va-col-sm-10 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 83.33333%;\n    max-width: 83.33333%;\n}\n.va-col-sm-offset-10 {\n    margin-left: 83.33333%;\n}\n.va-col-sm-11 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 91.66667%;\n    max-width: 91.66667%;\n}\n.va-col-sm-offset-11 {\n    margin-left: 91.66667%;\n}\n.va-col-sm-12 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 100%;\n    max-width: 100%;\n}\n.va-col-sm-offset-12 {\n    margin-left: 100%;\n}\n}\n@media only screen and (min-width: 60rem) {\n.va-container {\n    box-sizing: border-box;\n    width: 60rem;\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n.va-start-md {\n    justify-content: flex-start;\n    text-align: start;\n}\n.va-center-md {\n    justify-content: center;\n    text-align: center;\n}\n.va-end-md {\n    justify-content: flex-end;\n    text-align: end;\n}\n.va-top-md {\n    align-items: flex-start;\n}\n.va-middle-md {\n    align-items: center;\n}\n.va-bottom-md {\n    align-items: flex-end;\n}\n.va-around-md {\n    justify-content: space-around;\n}\n.va-between-md {\n    justify-content: space-between;\n}\n.va-first-md {\n    order: -1;\n}\n.va-last-md {\n    order: 1;\n}\n.va-col-md-1 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 8.33333%;\n    max-width: 8.33333%;\n}\n.va-col-md-offset-1 {\n    margin-left: 8.33333%;\n}\n.va-col-md-2 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 16.66667%;\n    max-width: 16.66667%;\n}\n.va-col-md-offset-2 {\n    margin-left: 16.66667%;\n}\n.va-col-md-3 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 25%;\n    max-width: 25%;\n}\n.va-col-md-offset-3 {\n    margin-left: 25%;\n}\n.va-col-md-4 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 33.33333%;\n    max-width: 33.33333%;\n}\n.va-col-md-offset-4 {\n    margin-left: 33.33333%;\n}\n.va-col-md-5 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 41.66667%;\n    max-width: 41.66667%;\n}\n.va-col-md-offset-5 {\n    margin-left: 41.66667%;\n}\n.va-col-md-6 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 50%;\n    max-width: 50%;\n}\n.va-col-md-offset-6 {\n    margin-left: 50%;\n}\n.va-col-md-7 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 58.33333%;\n    max-width: 58.33333%;\n}\n.va-col-md-offset-7 {\n    margin-left: 58.33333%;\n}\n.va-col-md-8 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 66.66667%;\n    max-width: 66.66667%;\n}\n.va-col-md-offset-8 {\n    margin-left: 66.66667%;\n}\n.va-col-md-9 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 75%;\n    max-width: 75%;\n}\n.va-col-md-offset-9 {\n    margin-left: 75%;\n}\n.va-col-md-10 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 83.33333%;\n    max-width: 83.33333%;\n}\n.va-col-md-offset-10 {\n    margin-left: 83.33333%;\n}\n.va-col-md-11 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 91.66667%;\n    max-width: 91.66667%;\n}\n.va-col-md-offset-11 {\n    margin-left: 91.66667%;\n}\n.va-col-md-12 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 100%;\n    max-width: 100%;\n}\n.va-col-md-offset-12 {\n    margin-left: 100%;\n}\n}\n@media only screen and (min-width: 80rem) {\n.va-container {\n    box-sizing: border-box;\n    width: 80rem;\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n.va-start-lg {\n    justify-content: flex-start;\n    text-align: start;\n}\n.va-center-lg {\n    justify-content: center;\n    text-align: center;\n}\n.va-end-lg {\n    justify-content: flex-end;\n    text-align: end;\n}\n.va-top-lg {\n    align-items: flex-start;\n}\n.va-middle-lg {\n    align-items: center;\n}\n.va-bottom-lg {\n    align-items: flex-end;\n}\n.va-around-lg {\n    justify-content: space-around;\n}\n.va-between-lg {\n    justify-content: space-between;\n}\n.va-first-lg {\n    order: -1;\n}\n.va-last-lg {\n    order: 1;\n}\n.va-col-lg-1 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 8.33333%;\n    max-width: 8.33333%;\n}\n.va-col-lg-offset-1 {\n    margin-left: 8.33333%;\n}\n.va-col-lg-2 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 16.66667%;\n    max-width: 16.66667%;\n}\n.va-col-lg-offset-2 {\n    margin-left: 16.66667%;\n}\n.va-col-lg-3 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 25%;\n    max-width: 25%;\n}\n.va-col-lg-offset-3 {\n    margin-left: 25%;\n}\n.va-col-lg-4 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 33.33333%;\n    max-width: 33.33333%;\n}\n.va-col-lg-offset-4 {\n    margin-left: 33.33333%;\n}\n.va-col-lg-5 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 41.66667%;\n    max-width: 41.66667%;\n}\n.va-col-lg-offset-5 {\n    margin-left: 41.66667%;\n}\n.va-col-lg-6 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 50%;\n    max-width: 50%;\n}\n.va-col-lg-offset-6 {\n    margin-left: 50%;\n}\n.va-col-lg-7 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 58.33333%;\n    max-width: 58.33333%;\n}\n.va-col-lg-offset-7 {\n    margin-left: 58.33333%;\n}\n.va-col-lg-8 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 66.66667%;\n    max-width: 66.66667%;\n}\n.va-col-lg-offset-8 {\n    margin-left: 66.66667%;\n}\n.va-col-lg-9 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 75%;\n    max-width: 75%;\n}\n.va-col-lg-offset-9 {\n    margin-left: 75%;\n}\n.va-col-lg-10 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 83.33333%;\n    max-width: 83.33333%;\n}\n.va-col-lg-offset-10 {\n    margin-left: 83.33333%;\n}\n.va-col-lg-11 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 91.66667%;\n    max-width: 91.66667%;\n}\n.va-col-lg-offset-11 {\n    margin-left: 91.66667%;\n}\n.va-col-lg-12 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 100%;\n    max-width: 100%;\n}\n.va-col-lg-offset-12 {\n    margin-left: 100%;\n}\n}\n.va-row {\n  display: flex;\n  flex-flow: row wrap;\n  flex: 0 1 auto;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n/*# sourceMappingURL=VaRow.vue.map */", map: {"version":3,"sources":["VaRow.vue","/Users/ax/Documents/prj/cue/app/aaa/src/Grid/VaRow.vue"],"names":[],"mappings":"AAAA,QAAQ;AACR,YAAY;AACZ,UAAU;AACV,QAAQ;AACR,SAAS;ACmCT,UAAA;AAQA,OAAA;AAQA,iBAAA;AAOA,eAAA;AASA,WAAA;AAMA,YAAA;AAYA;EACA,sBAAA;EACA,YAxCA;EAyCA,kBAAA;EACA,iBAAA;EACA,kBAhDA;EAiDA,mBAjDA;AAAA;AAsDA;EACA,2BAAA;EACA,iBAAA;AAAA;AAGA;EACA,uBAAA;EACA,kBAAA;AAAA;AAGA;EACA,yBAAA;EACA,eAAA;AAAA;AAGA;EACA,uBAAA;AAAA;AAGA;EACA,mBAAA;AAAA;AAGA;EACA,qBAAA;AAAA;AAGA;EACA,6BAAA;AAAA;AAGA;EACA,8BAAA;AAAA;AAGA;EACA,SAAA;AAAA;AAGA;EACA,QAAA;AAAA;AApEA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;EACA,oBAAA;EACA,mBAAA;AAAA;AAKA;EACA,qBAAA;AAAA;AAZA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;EACA,qBAAA;EACA,oBAAA;AAAA;AAKA;EACA,sBAAA;AAAA;AAZA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;EACA,eAAA;EACA,cAAA;AAAA;AAKA;EACA,gBAAA;AAAA;AAZA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;EACA,qBAAA;EACA,oBAAA;AAAA;AAKA;EACA,sBAAA;AAAA;AAZA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;EACA,qBAAA;EACA,oBAAA;AAAA;AAKA;EACA,sBAAA;AAAA;AAZA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;EACA,eAAA;EACA,cAAA;AAAA;AAKA;EACA,gBAAA;AAAA;AAZA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;EACA,qBAAA;EACA,oBAAA;AAAA;AAKA;EACA,sBAAA;AAAA;AAZA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;EACA,qBAAA;EACA,oBAAA;AAAA;AAKA;EACA,sBAAA;AAAA;AAZA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;EACA,eAAA;EACA,cAAA;AAAA;AAKA;EACA,gBAAA;AAAA;AAZA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;EACA,qBAAA;EACA,oBAAA;AAAA;AAKA;EACA,sBAAA;AAAA;AAZA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;EACA,qBAAA;EACA,oBAAA;AAAA;AAKA;EACA,sBAAA;AAAA;AAZA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;EACA,sBAAA;EACA,gBAAA;EACA,eAAA;AAAA;AAKA;EACA,iBAAA;AAAA;AAqEA;AAhEA;IACA,sBAAA;IACA,YA7CA;IA8CA,kBAAA;IACA,iBAAA;IACA,kBAhDA;IAiDA,mBAjDA;AAAA;AAsDA;IACA,2BAAA;IACA,iBAAA;AAAA;AAGA;IACA,uBAAA;IACA,kBAAA;AAAA;AAGA;IACA,yBAAA;IACA,eAAA;AAAA;AAGA;IACA,uBAAA;AAAA;AAGA;IACA,mBAAA;AAAA;AAGA;IACA,qBAAA;AAAA;AAGA;IACA,6BAAA;AAAA;AAGA;IACA,8BAAA;AAAA;AAGA;IACA,SAAA;AAAA;AAGA;IACA,QAAA;AAAA;AApEA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,oBAAA;IACA,mBAAA;AAAA;AAKA;IACA,qBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,eAAA;IACA,cAAA;AAAA;AAKA;IACA,gBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,eAAA;IACA,cAAA;AAAA;AAKA;IACA,gBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,eAAA;IACA,cAAA;AAAA;AAKA;IACA,gBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,gBAAA;IACA,eAAA;AAAA;AAKA;IACA,iBAAA;AAAA;AACA;AAoEA;AAhEA;IACA,sBAAA;IACA,YA7CA;IA8CA,kBAAA;IACA,iBAAA;IACA,kBAhDA;IAiDA,mBAjDA;AAAA;AAsDA;IACA,2BAAA;IACA,iBAAA;AAAA;AAGA;IACA,uBAAA;IACA,kBAAA;AAAA;AAGA;IACA,yBAAA;IACA,eAAA;AAAA;AAGA;IACA,uBAAA;AAAA;AAGA;IACA,mBAAA;AAAA;AAGA;IACA,qBAAA;AAAA;AAGA;IACA,6BAAA;AAAA;AAGA;IACA,8BAAA;AAAA;AAGA;IACA,SAAA;AAAA;AAGA;IACA,QAAA;AAAA;AApEA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,oBAAA;IACA,mBAAA;AAAA;AAKA;IACA,qBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,eAAA;IACA,cAAA;AAAA;AAKA;IACA,gBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,eAAA;IACA,cAAA;AAAA;AAKA;IACA,gBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,eAAA;IACA,cAAA;AAAA;AAKA;IACA,gBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,gBAAA;IACA,eAAA;AAAA;AAKA;IACA,iBAAA;AAAA;AACA;AAoEA;AAhEA;IACA,sBAAA;IACA,YA7CA;IA8CA,kBAAA;IACA,iBAAA;IACA,kBAhDA;IAiDA,mBAjDA;AAAA;AAsDA;IACA,2BAAA;IACA,iBAAA;AAAA;AAGA;IACA,uBAAA;IACA,kBAAA;AAAA;AAGA;IACA,yBAAA;IACA,eAAA;AAAA;AAGA;IACA,uBAAA;AAAA;AAGA;IACA,mBAAA;AAAA;AAGA;IACA,qBAAA;AAAA;AAGA;IACA,6BAAA;AAAA;AAGA;IACA,8BAAA;AAAA;AAGA;IACA,SAAA;AAAA;AAGA;IACA,QAAA;AAAA;AApEA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,oBAAA;IACA,mBAAA;AAAA;AAKA;IACA,qBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,eAAA;IACA,cAAA;AAAA;AAKA;IACA,gBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,eAAA;IACA,cAAA;AAAA;AAKA;IACA,gBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,eAAA;IACA,cAAA;AAAA;AAKA;IACA,gBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,oBAAA;AAAA;AAKA;IACA,sBAAA;AAAA;AAZA;IACA,sBAAA;IACA,cAAA;IACA,uBAAA;IACA,sBAAA;IACA,gBAAA;IACA,eAAA;AAAA;AAKA;IACA,iBAAA;AAAA;AACA;AA8EA;EACA,aAAA;EACA,mBAAA;EACA,cAAA;EAGA,gBAAA;EACA,iBAAA;AAAA;;ADybA,oCAAoC","file":"VaRow.vue","sourcesContent":["/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-container {\n  box-sizing: border-box;\n  width: 480px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 1rem;\n  padding-right: 1rem; }\n\n.va-start-xs {\n  justify-content: flex-start;\n  text-align: start; }\n\n.va-center-xs {\n  justify-content: center;\n  text-align: center; }\n\n.va-end-xs {\n  justify-content: flex-end;\n  text-align: end; }\n\n.va-top-xs {\n  align-items: flex-start; }\n\n.va-middle-xs {\n  align-items: center; }\n\n.va-bottom-xs {\n  align-items: flex-end; }\n\n.va-around-xs {\n  justify-content: space-around; }\n\n.va-between-xs {\n  justify-content: space-between; }\n\n.va-first-xs {\n  order: -1; }\n\n.va-last-xs {\n  order: 1; }\n\n.va-col-xs-1 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 8.33333%;\n  max-width: 8.33333%; }\n\n.va-col-xs-offset-1 {\n  margin-left: 8.33333%; }\n\n.va-col-xs-2 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 16.66667%;\n  max-width: 16.66667%; }\n\n.va-col-xs-offset-2 {\n  margin-left: 16.66667%; }\n\n.va-col-xs-3 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 25%;\n  max-width: 25%; }\n\n.va-col-xs-offset-3 {\n  margin-left: 25%; }\n\n.va-col-xs-4 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 33.33333%;\n  max-width: 33.33333%; }\n\n.va-col-xs-offset-4 {\n  margin-left: 33.33333%; }\n\n.va-col-xs-5 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 41.66667%;\n  max-width: 41.66667%; }\n\n.va-col-xs-offset-5 {\n  margin-left: 41.66667%; }\n\n.va-col-xs-6 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 50%;\n  max-width: 50%; }\n\n.va-col-xs-offset-6 {\n  margin-left: 50%; }\n\n.va-col-xs-7 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 58.33333%;\n  max-width: 58.33333%; }\n\n.va-col-xs-offset-7 {\n  margin-left: 58.33333%; }\n\n.va-col-xs-8 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 66.66667%;\n  max-width: 66.66667%; }\n\n.va-col-xs-offset-8 {\n  margin-left: 66.66667%; }\n\n.va-col-xs-9 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 75%;\n  max-width: 75%; }\n\n.va-col-xs-offset-9 {\n  margin-left: 75%; }\n\n.va-col-xs-10 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 83.33333%;\n  max-width: 83.33333%; }\n\n.va-col-xs-offset-10 {\n  margin-left: 83.33333%; }\n\n.va-col-xs-11 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 91.66667%;\n  max-width: 91.66667%; }\n\n.va-col-xs-offset-11 {\n  margin-left: 91.66667%; }\n\n.va-col-xs-12 {\n  box-sizing: border-box;\n  flex: 0 0 auto;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  flex-basis: 100%;\n  max-width: 100%; }\n\n.va-col-xs-offset-12 {\n  margin-left: 100%; }\n\n@media only screen and (min-width: 48rem) {\n  .va-container {\n    box-sizing: border-box;\n    width: 48rem;\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 1rem;\n    padding-right: 1rem; }\n  .va-start-sm {\n    justify-content: flex-start;\n    text-align: start; }\n  .va-center-sm {\n    justify-content: center;\n    text-align: center; }\n  .va-end-sm {\n    justify-content: flex-end;\n    text-align: end; }\n  .va-top-sm {\n    align-items: flex-start; }\n  .va-middle-sm {\n    align-items: center; }\n  .va-bottom-sm {\n    align-items: flex-end; }\n  .va-around-sm {\n    justify-content: space-around; }\n  .va-between-sm {\n    justify-content: space-between; }\n  .va-first-sm {\n    order: -1; }\n  .va-last-sm {\n    order: 1; }\n  .va-col-sm-1 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 8.33333%;\n    max-width: 8.33333%; }\n  .va-col-sm-offset-1 {\n    margin-left: 8.33333%; }\n  .va-col-sm-2 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 16.66667%;\n    max-width: 16.66667%; }\n  .va-col-sm-offset-2 {\n    margin-left: 16.66667%; }\n  .va-col-sm-3 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 25%;\n    max-width: 25%; }\n  .va-col-sm-offset-3 {\n    margin-left: 25%; }\n  .va-col-sm-4 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 33.33333%;\n    max-width: 33.33333%; }\n  .va-col-sm-offset-4 {\n    margin-left: 33.33333%; }\n  .va-col-sm-5 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 41.66667%;\n    max-width: 41.66667%; }\n  .va-col-sm-offset-5 {\n    margin-left: 41.66667%; }\n  .va-col-sm-6 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 50%;\n    max-width: 50%; }\n  .va-col-sm-offset-6 {\n    margin-left: 50%; }\n  .va-col-sm-7 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 58.33333%;\n    max-width: 58.33333%; }\n  .va-col-sm-offset-7 {\n    margin-left: 58.33333%; }\n  .va-col-sm-8 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 66.66667%;\n    max-width: 66.66667%; }\n  .va-col-sm-offset-8 {\n    margin-left: 66.66667%; }\n  .va-col-sm-9 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 75%;\n    max-width: 75%; }\n  .va-col-sm-offset-9 {\n    margin-left: 75%; }\n  .va-col-sm-10 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 83.33333%;\n    max-width: 83.33333%; }\n  .va-col-sm-offset-10 {\n    margin-left: 83.33333%; }\n  .va-col-sm-11 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 91.66667%;\n    max-width: 91.66667%; }\n  .va-col-sm-offset-11 {\n    margin-left: 91.66667%; }\n  .va-col-sm-12 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 100%;\n    max-width: 100%; }\n  .va-col-sm-offset-12 {\n    margin-left: 100%; } }\n\n@media only screen and (min-width: 60rem) {\n  .va-container {\n    box-sizing: border-box;\n    width: 60rem;\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 1rem;\n    padding-right: 1rem; }\n  .va-start-md {\n    justify-content: flex-start;\n    text-align: start; }\n  .va-center-md {\n    justify-content: center;\n    text-align: center; }\n  .va-end-md {\n    justify-content: flex-end;\n    text-align: end; }\n  .va-top-md {\n    align-items: flex-start; }\n  .va-middle-md {\n    align-items: center; }\n  .va-bottom-md {\n    align-items: flex-end; }\n  .va-around-md {\n    justify-content: space-around; }\n  .va-between-md {\n    justify-content: space-between; }\n  .va-first-md {\n    order: -1; }\n  .va-last-md {\n    order: 1; }\n  .va-col-md-1 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 8.33333%;\n    max-width: 8.33333%; }\n  .va-col-md-offset-1 {\n    margin-left: 8.33333%; }\n  .va-col-md-2 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 16.66667%;\n    max-width: 16.66667%; }\n  .va-col-md-offset-2 {\n    margin-left: 16.66667%; }\n  .va-col-md-3 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 25%;\n    max-width: 25%; }\n  .va-col-md-offset-3 {\n    margin-left: 25%; }\n  .va-col-md-4 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 33.33333%;\n    max-width: 33.33333%; }\n  .va-col-md-offset-4 {\n    margin-left: 33.33333%; }\n  .va-col-md-5 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 41.66667%;\n    max-width: 41.66667%; }\n  .va-col-md-offset-5 {\n    margin-left: 41.66667%; }\n  .va-col-md-6 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 50%;\n    max-width: 50%; }\n  .va-col-md-offset-6 {\n    margin-left: 50%; }\n  .va-col-md-7 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 58.33333%;\n    max-width: 58.33333%; }\n  .va-col-md-offset-7 {\n    margin-left: 58.33333%; }\n  .va-col-md-8 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 66.66667%;\n    max-width: 66.66667%; }\n  .va-col-md-offset-8 {\n    margin-left: 66.66667%; }\n  .va-col-md-9 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 75%;\n    max-width: 75%; }\n  .va-col-md-offset-9 {\n    margin-left: 75%; }\n  .va-col-md-10 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 83.33333%;\n    max-width: 83.33333%; }\n  .va-col-md-offset-10 {\n    margin-left: 83.33333%; }\n  .va-col-md-11 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 91.66667%;\n    max-width: 91.66667%; }\n  .va-col-md-offset-11 {\n    margin-left: 91.66667%; }\n  .va-col-md-12 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 100%;\n    max-width: 100%; }\n  .va-col-md-offset-12 {\n    margin-left: 100%; } }\n\n@media only screen and (min-width: 80rem) {\n  .va-container {\n    box-sizing: border-box;\n    width: 80rem;\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 1rem;\n    padding-right: 1rem; }\n  .va-start-lg {\n    justify-content: flex-start;\n    text-align: start; }\n  .va-center-lg {\n    justify-content: center;\n    text-align: center; }\n  .va-end-lg {\n    justify-content: flex-end;\n    text-align: end; }\n  .va-top-lg {\n    align-items: flex-start; }\n  .va-middle-lg {\n    align-items: center; }\n  .va-bottom-lg {\n    align-items: flex-end; }\n  .va-around-lg {\n    justify-content: space-around; }\n  .va-between-lg {\n    justify-content: space-between; }\n  .va-first-lg {\n    order: -1; }\n  .va-last-lg {\n    order: 1; }\n  .va-col-lg-1 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 8.33333%;\n    max-width: 8.33333%; }\n  .va-col-lg-offset-1 {\n    margin-left: 8.33333%; }\n  .va-col-lg-2 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 16.66667%;\n    max-width: 16.66667%; }\n  .va-col-lg-offset-2 {\n    margin-left: 16.66667%; }\n  .va-col-lg-3 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 25%;\n    max-width: 25%; }\n  .va-col-lg-offset-3 {\n    margin-left: 25%; }\n  .va-col-lg-4 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 33.33333%;\n    max-width: 33.33333%; }\n  .va-col-lg-offset-4 {\n    margin-left: 33.33333%; }\n  .va-col-lg-5 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 41.66667%;\n    max-width: 41.66667%; }\n  .va-col-lg-offset-5 {\n    margin-left: 41.66667%; }\n  .va-col-lg-6 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 50%;\n    max-width: 50%; }\n  .va-col-lg-offset-6 {\n    margin-left: 50%; }\n  .va-col-lg-7 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 58.33333%;\n    max-width: 58.33333%; }\n  .va-col-lg-offset-7 {\n    margin-left: 58.33333%; }\n  .va-col-lg-8 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 66.66667%;\n    max-width: 66.66667%; }\n  .va-col-lg-offset-8 {\n    margin-left: 66.66667%; }\n  .va-col-lg-9 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 75%;\n    max-width: 75%; }\n  .va-col-lg-offset-9 {\n    margin-left: 75%; }\n  .va-col-lg-10 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 83.33333%;\n    max-width: 83.33333%; }\n  .va-col-lg-offset-10 {\n    margin-left: 83.33333%; }\n  .va-col-lg-11 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 91.66667%;\n    max-width: 91.66667%; }\n  .va-col-lg-offset-11 {\n    margin-left: 91.66667%; }\n  .va-col-lg-12 {\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    padding-right: 0.625rem;\n    padding-left: 0.625rem;\n    flex-basis: 100%;\n    max-width: 100%; }\n  .va-col-lg-offset-12 {\n    margin-left: 100%; } }\n\n.va-row {\n  display: flex;\n  flex-flow: row wrap;\n  flex: 0 1 auto;\n  margin-left: 0px;\n  margin-right: 0px; }\n\n/*# sourceMappingURL=VaRow.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$j = undefined;
  /* module identifier */
  const __vue_module_identifier__$j = undefined;
  /* functional template */
  const __vue_is_functional_template__$j = false;
  /* style inject SSR */
  

  
  var VaRow = normalizeComponent(
    { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
    __vue_inject_styles__$j,
    __vue_script__$j,
    __vue_scope_id__$j,
    __vue_is_functional_template__$j,
    __vue_module_identifier__$j,
    createInjector,
    undefined
  );

//

var script$k = {
  name: 'VaRange',
  mixins: [events],
  props: {
    name: {
      type: String
    },
    min: {
      type: [String, Number],
      default: '0',
      required: false
    },
    max: {
      type: [String, Number],
      default: '100',
      required: false
    },
    step: {
      type: [String, Number],
      default: '1',
      required: false
    },
    value: {
      type: [Number, String],
      default: 0,
      required: false
    },
    width: {
      type: String
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    let value = this.value;
    return {
      showoutput: false,
      currentValue: value,
      preBarElement: null,
      isMobile: false
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('input', val);
      this.$emit('change', val);
      this.update();
    },
    value (val) {
      this.currentValue = parseInt(val);
    },
    min () {
      this.update();
    },
    max () {
      this.update();
    },
    step () {
      this.update();
    }
  },
  methods: {
    update () {
      this.preBarElement.style.width = this.getVal() + 'px';
    },
    onInput (e) {
      this.currentValue = parseInt(e.target.value);
      this.$emit('input', parseInt(e.target.value));
    },
    getVal () {
      if (!this.$refs.range) return
      var w = parseInt(this.$refs.range.clientWidth, 10);
      let cv = parseInt(this.currentValue, 10);
      let min = parseInt(this.min, 10);
      let max = parseInt(this.max, 10);

      /**
       *  I wonder if there's a way to figure out the width of the runnable track..
       *  Right now, we listen for isMobile from App.
       *  Width is 16px on desktop, 28px on mobile.
       */

      let thumbWidth;
      this.isMobile ? (thumbWidth = 28) : (thumbWidth = 16);

      max = max - min;
      cv = cv - min;
      min = min - min;

      if (min === 0 && max === 100) {
        return (cv * w) / 100 - (cv * thumbWidth) / 100 // because the thumb is 16px wide
      } else {
        let p = (cv * 100) / max;
        let pp = (p * w) / 100;
        pp = pp - (p * thumbWidth) / 100;

        return pp
      }
    },
    init () {
      let { classPrefix } = this;
      var wrp = document.createElement('div');
      var preBar = document.createElement('p');

      wrp.className = classPrefix + '-range-barCnt';
      preBar.className = classPrefix + '-range-preBar';

      this.$refs.range.className = this.$refs.range.className.length
        ? this.$refs.range.className + ' colorized'
        : 'colorized';
      this.$refs.range.parentNode.replaceChild(wrp, this.$refs.range);

      wrp.appendChild(this.$refs.range);
      wrp.appendChild(preBar);

      let r = this.$refs.range;
      this._inputEvent = EventListener.listen(r, 'input', () => {
        preBar.style.width = this.getVal() + 'px';
      });

      this.$nextTick(() => {
        preBar.style.width = this.getVal() + 'px';
      });

      this.$refs.range.value = this.value;
      this.preBarElement = preBar;
    },
    _resizeEvent () {
      this.update();
    }
  },
  computed: {
    styleObj () {
      let style = {};

      let l = this.value - this.min;
      let r = this.max - this.min;

      style['transform'] = 'translate(calc(' + l / r + ' * 11.25em - 50%))';

      return style
    }
  },
  created () {
    this.$on('Va@rangeIsMobile', val => {
      if (val === true) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
    this.dispatch('VaApp', 'Va@requestIsMobile', true);
  },
  mounted () {
    this.init();
    window.addEventListener('resize', this._resizeEvent, false);
  },
  beforeDestroy () {
    if (this._inputEvent) this._inputEvent.remove();
    if (this._mouseupEvent) this._mouseupEvent.remove();
    if (this._mousedownEvent) this._mousedownEvent.remove();

    /**
     * This event was not created using EventListener.
     */
    window.removeEventListener('resize', this._resizeEvent, false);
  }
};

/* script */
const __vue_script__$k = script$k;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$k.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Range/VaRange.vue";

/* template */
var __vue_render__$k = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "wrap", style: { width: _vm.width || "100%" } },
    [
      _c("input", {
        ref: "range",
        class: _vm.classPrefix + "-range",
        attrs: {
          type: "range",
          name: _vm.name,
          min: _vm.min,
          max: _vm.max,
          step: _vm.step
        },
        domProps: { value: _vm.currentValue },
        on: { input: _vm.onInput }
      }),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade" } }, [
        _vm.showoutput
          ? _c("div", { staticClass: "output_position" }, [
              _c("output", { attrs: { for: "r" } })
            ])
          : _vm._e()
      ])
    ],
    1
  )
};
var __vue_staticRenderFns__$k = [];
__vue_render__$k._withStripped = true;

  /* style */
  const __vue_inject_styles__$k = function (inject) {
    if (!inject) return
    inject("data-v-7700af6b_0", { source: "/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-range-barCnt {\n  position: relative;\n  height: 10px;\n  padding: 5px 0px;\n}\n.va-range-barCnt .va-range-preBar {\n  position: absolute;\n  background-color: #0052cc;\n  height: 5px;\n  line-height: 5px;\n  z-index: 200;\n  border-radius: 3px;\n  padding: 0px;\n  margin: 0px;\n  pointer-events: none;\n}\ninput[type='range'].va-range.colorized {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 5px;\n  position: absolute;\n  padding: 0px;\n  margin: 0px;\n  cursor: default;\n  z-index: 100;\n  left: 0px;\n}\ninput[type='range'].va-range.colorized::-webkit-slider-runnable-track {\n  height: 5px;\n  background: #ebecf0;\n  border: none;\n  border-radius: 3px;\n}\ninput[type='range'].va-range.colorized::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  position: relative;\n  z-index: 201 !important;\n  border: none;\n  height: 16px;\n  width: 16px;\n  border-radius: 50%;\n  background: white;\n  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 3px 1px;\n  margin-top: -5px;\n}\n@media (max-width: 768px) {\ninput[type='range'].va-range.colorized::-webkit-slider-thumb {\n    height: 28px;\n    width: 28px;\n    margin-top: -12px;\n}\n.va-range-barCnt {\n    margin-top: 14px;\n    height: 28px;\n    line-height: 28px;\n}\n.va-range-barCnt .va-range-preBar {\n    height: 7px;\n    line-height: 7px;\n}\n}\ninput[type='range'].va-range.colorized:focus {\n  outline: none;\n}\ninput[type='range'].va-range.colorized:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 1px 2px #0b42af, 0 7px 12px -3px rgba(9, 30, 66, 0.25);\n}\ninput[type='range'].va-range.colorized:focus::-webkit-slider-runnable-track {\n  background: #ebecf0;\n}\ninput[type='range'].va-range.colorized::-moz-range-track {\n  width: 100%;\n  height: 5px;\n  background: #ebecf0;\n  border: none;\n  border-radius: 3px;\n}\ninput[type='range'].va-range.colorized::-moz-range-thumb {\n  border: none;\n  height: 16px;\n  width: 16px;\n  border-radius: 50%;\n  background: white;\n  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 3px 1px;\n  z-index: 400;\n}\ninput[type='range'].va-range.colorized::-moz-focus-outer {\n  border: 0;\n}\ninput[type='range'].va-range.colored:focus::-moz-range-thumb {\n  box-shadow: 0 0 1px 2px #0b42af, 0 7px 12px -3px rgba(9, 30, 66, 0.25);\n}\n\n/*# sourceMappingURL=VaRange.vue.map */", map: {"version":3,"sources":["VaRange.vue","/Users/ax/Documents/prj/cue/app/aaa/src/Range/VaRange.vue"],"names":[],"mappings":"AAAA,QAAQ;AACR,YAAY;AACZ,UAAU;AACV,QAAQ;AACR,SAAS;AACT,UAAU;AACV,OAAO;AACP,iBAAiB;AACjB,eAAe;AACf,WAAW;AACX,YAAY;AC6LZ;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;AAAA;AAGA;EACA,kBAAA;EACA,yBAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AAAA;AAGA;EACA,wBAAA;EACA,WAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,SAAA;AAAA;AAGA;EACA,WAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;AAAA;AAGA;EACA,wBAAA;EACA,kBAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,yFACA;EACA,gBAAA;AAAA;AAGA;AACA;IACA,YAAA;IACA,WAAA;IACA,iBAAA;AAAA;AAEA;IACA,gBAAA;IACA,YAAA;IACA,iBAAA;AAAA;AAEA;IACA,WAAA;IACA,gBAAA;AAAA;AACA;AAGA;EACA,aAAA;AAAA;AAGA;EACA,sEACA;AAAA;AAGA;EACA,mBAAA;AAAA;AAGA;EACA,WAAA;EACA,WAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;AAAA;AAGA;EACA,YAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,yFACA;EACA,YAAA;AAAA;AAGA;EACA,SAAA;AAAA;AAGA;EACA,sEACA;AAAA;;AD7MA,sCAAsC","file":"VaRange.vue","sourcesContent":["/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-range-barCnt {\n  position: relative;\n  height: 10px;\n  padding: 5px 0px; }\n\n.va-range-barCnt .va-range-preBar {\n  position: absolute;\n  background-color: #0052cc;\n  height: 5px;\n  line-height: 5px;\n  z-index: 200;\n  border-radius: 3px;\n  padding: 0px;\n  margin: 0px;\n  pointer-events: none; }\n\ninput[type='range'].va-range.colorized {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 5px;\n  position: absolute;\n  padding: 0px;\n  margin: 0px;\n  cursor: default;\n  z-index: 100;\n  left: 0px; }\n\ninput[type='range'].va-range.colorized::-webkit-slider-runnable-track {\n  height: 5px;\n  background: #ebecf0;\n  border: none;\n  border-radius: 3px; }\n\ninput[type='range'].va-range.colorized::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  position: relative;\n  z-index: 201 !important;\n  border: none;\n  height: 16px;\n  width: 16px;\n  border-radius: 50%;\n  background: white;\n  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 3px 1px;\n  margin-top: -5px; }\n\n@media (max-width: 768px) {\n  input[type='range'].va-range.colorized::-webkit-slider-thumb {\n    height: 28px;\n    width: 28px;\n    margin-top: -12px; }\n  .va-range-barCnt {\n    margin-top: 14px;\n    height: 28px;\n    line-height: 28px; }\n  .va-range-barCnt .va-range-preBar {\n    height: 7px;\n    line-height: 7px; } }\n\ninput[type='range'].va-range.colorized:focus {\n  outline: none; }\n\ninput[type='range'].va-range.colorized:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 1px 2px #0b42af, 0 7px 12px -3px rgba(9, 30, 66, 0.25); }\n\ninput[type='range'].va-range.colorized:focus::-webkit-slider-runnable-track {\n  background: #ebecf0; }\n\ninput[type='range'].va-range.colorized::-moz-range-track {\n  width: 100%;\n  height: 5px;\n  background: #ebecf0;\n  border: none;\n  border-radius: 3px; }\n\ninput[type='range'].va-range.colorized::-moz-range-thumb {\n  border: none;\n  height: 16px;\n  width: 16px;\n  border-radius: 50%;\n  background: white;\n  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 3px 1px;\n  z-index: 400; }\n\ninput[type='range'].va-range.colorized::-moz-focus-outer {\n  border: 0; }\n\ninput[type='range'].va-range.colored:focus::-moz-range-thumb {\n  box-shadow: 0 0 1px 2px #0b42af, 0 7px 12px -3px rgba(9, 30, 66, 0.25); }\n\n/*# sourceMappingURL=VaRange.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$k = undefined;
  /* module identifier */
  const __vue_module_identifier__$k = undefined;
  /* functional template */
  const __vue_is_functional_template__$k = false;
  /* style inject SSR */
  

  
  var VaRange = normalizeComponent(
    { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
    __vue_inject_styles__$k,
    __vue_script__$k,
    __vue_scope_id__$k,
    __vue_is_functional_template__$k,
    __vue_module_identifier__$k,
    createInjector,
    undefined
  );

var validationMixin = {
  props: {
    name: {
      type: String
    },
    customValidate: {
      type: Function
    },
    rules: {
      type: Array
    }
  }
};

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

var type = {

  isArray (arg) {
    if (Array.isArray) {
      return Array.isArray(arg)
    }
    return this.objectToString(arg) === '[object Array]'
  },

  isBoolean (arg) {
    return typeof arg === 'boolean'
  },

  isNull (arg) {
    return arg === null
  },

  isNullOrUndefined (arg) {
    return arg == null
  },

  isNumber (arg) {
    return typeof arg === 'number'
  },

  isString (arg) {
    return typeof arg === 'string'
  },

  isSymbol (arg) {
    return typeof arg === 'symbol'
  },

  isUndefined (arg) {
    return arg === void 0
  },

  isRegExp (re) {
    return this.objectToString(re) === '[object RegExp]'
  },

  isObject (arg) {
    return typeof arg === 'object' && arg !== null
  },

  isDate (d) {
    return this.objectToString(d) === '[object Date]'
  },

  isError (e) {
    return (this.objectToString(e) === '[object Error]' || e instanceof Error)
  },

  isFunction (arg) {
    return typeof arg === 'function'
  },

  isPrimitive (arg) {
    return arg === null ||
           typeof arg === 'boolean' ||
           typeof arg === 'number' ||
           typeof arg === 'string' ||
           typeof arg === 'symbol' || // ES6 symbol
           typeof arg === 'undefined'
  },

  objectToString (o) {
    return Object.prototype.toString.call(o)
  },

  isPromise (promise) {
    return this.isObject(promise) && this.isFunction(promise.then) && this.isFunction(promise.catch)
  }
};

//

var script$l = {
  name: 'VaValidate',
  mixins: [events, localeMixin('VaValidate')],
  props: {
    value: {
      type: String
    },
    customValidate: {
      type: Function
    },
    rules: {
      type: Array
    },
    name: {
      type: String
    },
    current: {},
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    return {
      tips: '',
      validate: false,
      status: '',
      vStatus: this.value,
      results: {}
    }
  },
  created () {
    this.$on('Va@openValidate', val => {
      this.validate = val;
      val ? (this.vStatus = this.status) : (this.vStatus = '');
    });
  },
  beforeDestroy () {
    this.dispatch('VaForm', 'Va@validateChange', {
      name: this.name,
      result: { results: {}, isvalid: true }
    });
    this.dispatch('VaForm', 'Va@validateDestroy', {
      name: this.name,
      result: this.results
    });
  },
  computed: {
    _results: {
      get () {
        return this.results
      },
      set (val) {
        let self = this;
        let tips = '' ;
        let status = '';

        for (let key in val) {
          let obj = val[key];
          if (type.isObject(obj)) {
            obj.tips ? (tips += obj.tips + '  ') : '';
            if (obj.validStatus !== 'success') {
              status = 'error';
            }
          }
        }

        status !== 'error' ? (status = 'success') : 0;

        self.status = status;

        if (self.validate) {
          self.vStatus = self.status;
        }

        let isvalid = true;
        self.tips = tips;

        for (let i in val) {
          let validStatus = val[i]['validStatus'];
          if (validStatus === 'error') {
            isvalid = false;
            break
          }
        }

        let newVal = Object.assign({}, val);
        newVal.isvalid = isvalid;

        if (this.isEqual(newVal, this.results)) {
          return
        }

        this.results = newVal;

        self.dispatch('VaForm', 'Va@validateChange', {
          name: self.name,
          result: self.results
        });
      }
    }
  },
  watch: {
    current: {
      handler (newVal) {
        this.valid(newVal);
      },
      immediate: true
    },
    vStatus (val) {
      this.$emit('input', val);
    }
  },
  methods: {
    isEqual (a, b) {
      let e = true;
      let propsA = Object.keys(a);
      let propsB = Object.keys(b);

      if (propsA.length !== propsB.length) {
        return false
      }

      propsA.forEach(i => {
        if (a[i]['validStatus'] !== b[i]['validStatus']) {
          e = false;
          return false
        }
      });

      return e
    },
    setResult (key, value) {
      let o = Object.assign({}, this.results);
      o[key] = value;
      this._results = o;
    },
    valid (val) {
      if (this.rules || type.isFunction(this.customValidate)) {
        this.rulesValid(val);
      }
    },
    rulesItemValid (rule, value) {
      let self = this;
      let tip = rule['tip'];
      let type$$1 = rule.type;

      switch (type$$1) {
        case 'required':
          self.requiredValid(value, tip);
          break
        case 'phone':
          self.phoneValid(value, tip);
          break
        case 'number':
          self.numberValid(value, tip);
          break
        case 'telephone':
          self.telValid(value, tip);
          break
        case 'email':
          self.emailValid(value, tip);
          break
      }

      if (type$$1.indexOf('maxlength') > -1) {
        self.maxlengthValid(type$$1, value, tip);
        // eslint-disable-next-line
        return
      }

      if (type$$1.indexOf('minlength') > -1) {
        self.minlengthValid(type$$1, value, tip);
        // eslint-disable-next-line
        //return
      }
    },
    customValid (val) {
      this.setResult('customValidate', this.customValidate(val));
    },
    requiredValid (val, tip) {
      let self = this;

      self._results = self._results || {};

      if (type.isNullOrUndefined(val) || val.length === 0) {
        self.setResult('requiredValid', {
          validStatus: 'error',
          tips: tip || self.getL('required')
        });
      } else {
        self.setResult('requiredValid', {
          validStatus: 'success',
          tips: ''
        });
      }
    },
    maxlengthValid (type$$1, val, tip) {
      let self = this;
      let maxlength = type$$1.split('=')[1] - 0;

      self._results = self._results || {};

      if (val) {
        if (val.length > maxlength) {
          self.setResult('maxlengthValid', {
            validStatus: 'error',
            tips: tip || self.getL('maxLength') + maxlength
          });
        } else {
          self.setResult('maxlengthValid', {
            validStatus: 'success',
            tips: ''
          });
        }
      }
    },
    minlengthValid (type$$1, val, tip) {
      let self = this;
      let minlength = type$$1.split('=')[1] - 0;

      self._results = self._results || {};

      if (val) {
        if (val.length < minlength) {
          self.setResult('minlengthValid', {
            validStatus: 'error',
            tips: tip || self.getL('minLength') + minlength
          });
        } else {
          self.setResult('minlengthValid', {
            validStatus: 'success',
            tips: ''
          });
        }
      }
    },
    rulesValid (value) {
      let self = this;

      self.rules.forEach(val => {
        self.rulesItemValid(val, value);
      });

      if (type.isFunction(self.customValidate)) {
        self.customValid(value);
      }
    },
    phoneValid (value, tip) {
      let rule = /^1\d{10}$/;

      if (rule.test(value) || value === '') {
        this.setResult('isPhoneValid', {
          validStatus: 'success',
          tips: ''
        });
      } else {
        this.setResult('isPhoneValid', {
          validStatus: 'error',
          tips: tip || this.getL('phone')
        });
      }
    },
    numberValid (value, tip) {
      let rule = /^\d*$/;

      if (rule.test(value) || value === '') {
        this.setResult('isNumberValid', {
          validStatus: 'success',
          tips: ''
        });
      } else {
        this.setResult('isNumberValid', {
          validStatus: 'error',
          tips: tip || this.getL('number')
        });
      }
    },
    telValid (value, tip) {
      // eslint-disable-next-line
      let rule = /^[2-9]\d{2}-\d{3}-\d{4}$/;

      if (rule.test(value) || value === '') {
        this.setResult('isTelValid', {
          validStatus: 'success',
          tips: ''
        });
      } else {
        this.setResult('isTelValid', {
          validStatus: 'error',
          tips: tip || this.getL('telephone')
        });
      }
    },
    emailValid (value, tip) {
      let rule = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

      if (rule.test(value) || value === '') {
        this.setResult('isEmailValid', {
          validStatus: 'success',
          tips: ''
        });
      } else {
        this.setResult('isEmailValid', {
          validStatus: 'error',
          tips: tip || this.getL('email')
        });
      }
    }
  }
};

/* script */
const __vue_script__$l = script$l;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$l.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/validate.vue";

/* template */
var __vue_render__$l = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.validate && _vm.tips
    ? _c("div", { class: _vm.classPrefix + "-err-tip" }, [
        _vm._v(_vm._s(_vm.tips))
      ])
    : _vm._e()
};
var __vue_staticRenderFns__$l = [];
__vue_render__$l._withStripped = true;

  /* style */
  const __vue_inject_styles__$l = undefined;
  /* scoped */
  const __vue_scope_id__$l = undefined;
  /* module identifier */
  const __vue_module_identifier__$l = undefined;
  /* functional template */
  const __vue_is_functional_template__$l = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var validate = normalizeComponent(
    { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
    __vue_inject_styles__$l,
    __vue_script__$l,
    __vue_scope_id__$l,
    __vue_is_functional_template__$l,
    __vue_module_identifier__$l,
    undefined,
    undefined
  );

//

const components$6 = { 'va-icon':VaIcon, validate };

var script$m = {
  name: 'VaCheckbox',
  components: components$6,
  mixins: [validationMixin, events],
  props: {
    name: {
      type: String
    },
    value: {
      type: [String, Boolean]
    },
    checked: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    let checked = this.checked;
    if (checked !== undefined) {
      this.$emit('input', checked);
    } else {
      checked = !!this.value;
    }

    return {
      currentChecked: checked
    }
  },
  watch: {
    value (val) {
      this.currentChecked = val;
    },
    checked (val) {
      this.currentChecked = val;
    },
    currentChecked (val) {
      this.$emit('input', val);
    }
  },
  computed: {
    classObj () {
      let { classPrefix, currentChecked, disabled } = this;
      let classes = {};

      classes[classPrefix + '-checkbox-label'] = true;
      classes[classPrefix + '-checkbox-checked'] = currentChecked;
      classes[classPrefix + '-checkbox-disabled'] = disabled;

      return classes
    }
  },
  created () {
    this.$on('Va@checkboxgroupChange', val => {
      this.currentChecked = val.indexOf(this.label) > -1;
    });
  },
  methods: {
    handleClick () {
      this.currentChecked = !this.currentChecked;
      this.dispatch('VaCheckboxGroup', 'Va@checkboxChange', this);
      this.$emit('change', this.currentChecked);
    },
    enterPressed () {
      this.handleClick();
    }
  }
};

/* script */
const __vue_script__$m = script$m;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$m.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Checkbox/VaCheckbox.vue";

/* template */
var __vue_render__$m = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "label",
    { class: _vm.classObj },
    [
      _c("span", [
        _c(
          "span",
          {
            class: _vm.classPrefix + "-checkbox-inner",
            attrs: { tabindex: _vm.disabled ? -1 : 0 },
            on: {
              keypress: function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "space", 32, $event.key, [
                    " ",
                    "Spacebar"
                  ])
                ) {
                  return null
                }
                $event.preventDefault();
                return _vm.handleClick($event)
              },
              keyup: function($event) {
                if (
                  !("button" in $event) &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.enterPressed($event)
              }
            }
          },
          [
            _c("va-icon", {
              class: _vm.classPrefix + "-checkbox-inner-check",
              attrs: { type: "check" }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("input", {
          class: _vm.classPrefix + "-checkbox-input",
          attrs: {
            disabled: _vm.disabled,
            name: _vm.name,
            tabindex: "-1",
            type: "checkbox"
          },
          domProps: { checked: _vm.currentChecked },
          on: { click: _vm.handleClick }
        })
      ]),
      _vm._v(" "),
      _c("span", { class: _vm.classPrefix + "-label" }, [_vm._t("default")], 2),
      _vm._v(" "),
      _c("validate", {
        attrs: {
          current: _vm.currentChecked,
          "custom-validate": _vm.customValidate,
          name: _vm.name,
          rules: _vm.rules
        }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$m = [];
__vue_render__$m._withStripped = true;

  /* style */
  const __vue_inject_styles__$m = function (inject) {
    if (!inject) return
    inject("data-v-143f0fed_0", { source: "/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-checkbox-label {\n  white-space: nowrap;\n  cursor: default;\n  outline: none;\n  display: inline-block;\n  line-height: 1;\n  position: relative;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.va-checkbox-label:not(.va-checkbox-checked):hover .va-checkbox-inner {\n  border-color: #dfe1e6;\n  background-color: #ebecf0;\n}\n.va-checkbox-label:not(.va-checkbox-checked):hover .va-checkbox-inner-check {\n    color: #ebecf0;\n}\n.va-checkbox-label:not(.va-checkbox-checked):active .va-checkbox-inner {\n  border-color: transparent;\n  background-color: #b3d4ff;\n}\n.va-checkbox-label:not(.va-checkbox-checked):active .va-checkbox-inner-check {\n    color: #b3d4ff;\n}\n.va-checkbox-label.va-checkbox-checked:hover .va-checkbox-inner {\n  background-color: #0066ff;\n  border-color: #0066ff;\n}\n.va-checkbox-label.va-checkbox-checked:active .va-checkbox-inner {\n  background-color: #b3d4ff;\n  border-color: #b3d4ff;\n}\n.va-checkbox-label.va-checkbox-checked:active .va-checkbox-inner-check {\n    color: #0747a6;\n}\n.va-checkbox-inner {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 3px;\n  border-color: #dfe1e6;\n  background-color: #fafbfc;\n  transition: all 0.3s;\n}\n.va-checkbox-inner-check {\n    color: #fafbfc;\n    font-size: 9px !important;\n    position: relative;\n    top: -2px;\n    left: 2px;\n    transition: all 0.3s;\n}\n.va-checkbox-inner:focus:not(:active):not(:hover), .va-checkbox-inner-focused:not(:active):not(:hover) {\n    box-shadow: rgba(36, 131, 255, 0.6) 0 0 0 2px;\n    outline: none;\n}\n.va-checkbox-input {\n  position: absolute !important;\n  left: 0;\n  z-index: 1;\n  cursor: default;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n.va-checkbox-checked .va-checkbox-inner {\n  border-color: #0052cc;\n  background-color: #0052cc;\n}\n.va-checkbox-checked .va-checkbox-inner-check {\n    color: white;\n}\n.va-checkbox-disabled .va-checkbox-inner {\n  border-color: #435370;\n  background-color: #435370;\n}\n.va-checkbox-disabled .va-checkbox-inner i.va-checkbox-inner-check {\n    color: #435370;\n}\n.va-checkbox-disabled.va-checkbox-label:hover:hover .va-checkbox-inner {\n  background-color: #435370;\n  border-color: #435370;\n}\n.va-checkbox-disabled.va-checkbox-label:hover:hover i.va-checkbox-inner-check {\n  color: #435370;\n}\n.va-checkbox-disabled .va-checkbox-inner:after {\n  display: none;\n}\n.va-checkbox-label span {\n  vertical-align: top;\n}\n.va-checkbox-label span.va-label {\n  margin-left: 7px;\n  position: relative;\n  top: 1px;\n}\n.va-checkbox-btn input[type='checkbox'] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.va-checkbox-group {\n  display: flex;\n  flex-direction: row;\n}\n.va-checkbox-group-vertical {\n    display: flex;\n    flex-direction: column;\n}\n.va-checkbox-group-vertical .va-checkbox-label {\n      margin-bottom: 9px;\n}\n\n/*# sourceMappingURL=VaCheckbox.vue.map */", map: {"version":3,"sources":["VaCheckbox.vue","/Users/ax/Documents/prj/cue/app/aaa/src/Checkbox/VaCheckbox.vue"],"names":[],"mappings":"AAAA,QAAQ;AACR,YAAY;AACZ,UAAU;AACV,QAAQ;AACR,SAAS;AACT,UAAU;AACV,OAAO;AACP,iBAAiB;AACjB,eAAe;AACf,WAAW;AACX,YAAY;AC4HZ;EACA,mBAAA;EACA,eAAA;EACA,aAAA;EACA,qBAAA;EACA,cAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;AAAA;AAIA;EAGA,qBAAA;EACA,yBAAA;AAAA;AAJA;IAMA,cAAA;AAAA;AANA;EAYA,yBAAA;EACA,yBAAA;AAAA;AAbA;IAeA,cAAA;AAAA;AAMA;EAGA,yBAAA;EACA,qBAAA;AAAA;AAJA;EASA,yBAAA;EACA,qBAAA;AAAA;AAVA;IAYA,cAAA;AAAA;AAMA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,qBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;EACA,yBAAA;EACA,oBAAA;AAAA;AACA;IACA,cAAA;IACA,yBAAA;IACA,kBAAA;IACA,SAAA;IACA,SAAA;IACA,oBAAA;AAAA;AA9EA;IAGA,6CAAA;IACA,aAAA;AAAA;AA+EA;EACA,6BAAA;EACA,OAAA;EACA,UAAA;EACA,eAAA;EACA,UAAA;EACA,MAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;AAAA;AAGA;EACA,qBAAA;EACA,yBAAA;AAAA;AAFA;IAIA,YAAA;AAAA;AAIA;EACA,qBAAA;EACA,yBAAA;AAAA;AAFA;IAIA,cAAA;AAAA;AAIA;EAGA,yBAAA;EACA,qBAAA;AAAA;AAJA;EAOA,cAAA;AAAA;AAKA;EACA,aAAA;AAAA;AAGA;EACA,mBAAA;AAAA;AAGA;EACA,gBAAA;EACA,kBAAA;EACA,QAAA;AAAA;AAGA;EACA,kBAAA;EACA,sBAAA;EACA,oBAAA;AAAA;AAGA;EACA,aAAA;EACA,mBAAA;AAAA;AACA;IACA,aAAA;IACA,sBAAA;AAAA;AAFA;MAIA,kBAAA;AAAA;;AD1JA,yCAAyC","file":"VaCheckbox.vue","sourcesContent":["/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-checkbox-label {\n  white-space: nowrap;\n  cursor: default;\n  outline: none;\n  display: inline-block;\n  line-height: 1;\n  position: relative;\n  vertical-align: middle;\n  margin-right: 10px; }\n\n.va-checkbox-label:not(.va-checkbox-checked):hover .va-checkbox-inner {\n  border-color: #dfe1e6;\n  background-color: #ebecf0; }\n  .va-checkbox-label:not(.va-checkbox-checked):hover .va-checkbox-inner-check {\n    color: #ebecf0; }\n\n.va-checkbox-label:not(.va-checkbox-checked):active .va-checkbox-inner {\n  border-color: transparent;\n  background-color: #b3d4ff; }\n  .va-checkbox-label:not(.va-checkbox-checked):active .va-checkbox-inner-check {\n    color: #b3d4ff; }\n\n.va-checkbox-label.va-checkbox-checked:hover .va-checkbox-inner {\n  background-color: #0066ff;\n  border-color: #0066ff; }\n\n.va-checkbox-label.va-checkbox-checked:active .va-checkbox-inner {\n  background-color: #b3d4ff;\n  border-color: #b3d4ff; }\n  .va-checkbox-label.va-checkbox-checked:active .va-checkbox-inner-check {\n    color: #0747a6; }\n\n.va-checkbox-inner {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 3px;\n  border-color: #dfe1e6;\n  background-color: #fafbfc;\n  transition: all 0.3s; }\n  .va-checkbox-inner-check {\n    color: #fafbfc;\n    font-size: 9px !important;\n    position: relative;\n    top: -2px;\n    left: 2px;\n    transition: all 0.3s; }\n  .va-checkbox-inner:focus:not(:active):not(:hover), .va-checkbox-inner-focused:not(:active):not(:hover) {\n    box-shadow: rgba(36, 131, 255, 0.6) 0 0 0 2px;\n    outline: none; }\n\n.va-checkbox-input {\n  position: absolute !important;\n  left: 0;\n  z-index: 1;\n  cursor: default;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%; }\n\n.va-checkbox-checked .va-checkbox-inner {\n  border-color: #0052cc;\n  background-color: #0052cc; }\n  .va-checkbox-checked .va-checkbox-inner-check {\n    color: white; }\n\n.va-checkbox-disabled .va-checkbox-inner {\n  border-color: #435370;\n  background-color: #435370; }\n  .va-checkbox-disabled .va-checkbox-inner i.va-checkbox-inner-check {\n    color: #435370; }\n\n.va-checkbox-disabled.va-checkbox-label:hover:hover .va-checkbox-inner {\n  background-color: #435370;\n  border-color: #435370; }\n\n.va-checkbox-disabled.va-checkbox-label:hover:hover i.va-checkbox-inner-check {\n  color: #435370; }\n\n.va-checkbox-disabled .va-checkbox-inner:after {\n  display: none; }\n\n.va-checkbox-label span {\n  vertical-align: top; }\n\n.va-checkbox-label span.va-label {\n  margin-left: 7px;\n  position: relative;\n  top: 1px; }\n\n.va-checkbox-btn input[type='checkbox'] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n\n.va-checkbox-group {\n  display: flex;\n  flex-direction: row; }\n  .va-checkbox-group-vertical {\n    display: flex;\n    flex-direction: column; }\n    .va-checkbox-group-vertical .va-checkbox-label {\n      margin-bottom: 9px; }\n\n/*# sourceMappingURL=VaCheckbox.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$m = undefined;
  /* module identifier */
  const __vue_module_identifier__$m = undefined;
  /* functional template */
  const __vue_is_functional_template__$m = false;
  /* style inject SSR */
  

  
  var VaCheckbox = normalizeComponent(
    { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
    __vue_inject_styles__$m,
    __vue_script__$m,
    __vue_scope_id__$m,
    __vue_is_functional_template__$m,
    __vue_module_identifier__$m,
    createInjector,
    undefined
  );

var inputMixin = {
  props: {
    name: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    placeholder: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    customValidate: {
      type: Function
    },
    rules: {
      type: Array
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      validStatus: ''
    }
  },
  computed: {
    actualWidth () {
      let { width } = this;

      switch (width) {
        case 'xs':
          return '80px'
        case 'sm':
          return '160px'
        case 'md':
          return '255px'
        case 'lg':
          return '320px'
        case 'xl':
          return '480px'
      }

      return width
    }
  }
};

//

const components$7 = { 'va-button':VaButton, 'va-icon':VaIcon, validate };

var script$n = {
  name: 'VaSelect',
  components: components$7,
  mixins: [validationMixin, inputMixin, localeMixin('VaSelect')],
  props: {
    showSelected: {
      type: Boolean,
      default: true,
      required: false
    },
    inputPlaceholder: {
      type: String,
      default: '',
      required: false
    },
    size: {
      type: String,
      required: false
    },
    context: {},
    type: {
      type: String,
      default: 'default',
      required: false
    },
    options: {
      type: Array,
      default () {
        return []
      },
      required: false
    },
    value: {},
    multiple: {
      type: Boolean,
      default: false,
      required: false
    },
    search: {
      type: Boolean,
      default: false,
      required: false
    },
    extra: {
      type: Boolean,
      default: false,
      required: false
    },
    limit: {
      type: Number,
      default: 1024,
      required: false
    },
    menuMaxHeight: {
      type: String,
      default: '300px',
      required: false
    },
    matchCase: {
      type: Boolean,
      default: false,
      required: false
    },
    format: {
      type: Function,
      default (item) {
        if (!item) return ''
        return item.label
      }
    },
    noUncheck: {
      type: Boolean,
      default: false,
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    return {
      validStatus: '',
      searchText: '',
      show: false,
      showNotify: false,
      currentValue: this.value,
      currentOptions: this.options,
      activeItemClass: this.classPrefix + '-select-item-active'
    }
  },
  provide () {
    return {
      addSelectOption: this.addOption,
      selectOption: this.select,
      isOptionSelected: this.isSelected
    }
  },
  watch: {
    value (val) {
      if (this.inner) {
        this.inner = false;
        return
      }
      this.inner = true;
      this.currentValue = val;
    },
    options (val) {
      this.currentOptions = val;
    },
    currentValue (val) {
      if (this.inner) {
        this.inner = false;
        return
      }
      this.inner = true;
      this.$emit('input', val);
      this.$emit('change', val);
    },
    multiple (val) {
      if (val === false) {
        if (Array.isArray(this.value) && this.value.length > 1) {
          this.value = this.value[0];
        }
      }
    },
    show (val) {
      if (val) {
        if (this.search) {
          this.$refs.searchInput.focus();
        }
      }
    }
  },
  created () {
    document.addEventListener('keyup', this.keyup);
  },
  computed: {
    defaultSlotWasUsed () {
      return !!this.$slots.default
    },
    styleObj () {
      let style = {};
      let { actualWidth } = this;

      actualWidth.slice(-1) === '%'
        ? (style['width'] = actualWidth)
        : (style['min-width'] = actualWidth);

      return style
    },
    classObj () {
      let { classPrefix, validStatus } = this;
      let classes = {};

      classes[classPrefix + '-has-error'] = validStatus === 'error';
      classes[classPrefix + '-has-success'] = validStatus === 'success';
      classes[classPrefix + '-has-warn'] = validStatus === 'warn';

      classes[classPrefix + '-btn-group'] = true;
      classes[classPrefix + '-select-group'] = true;
      classes[classPrefix + '-dropdown-con'] = true;

      return classes
    },
    filterOptions () {
      return this.filter(this.currentOptions, this.searchText)
    },
    selectedItems: {
      get () {
        let a;
        if (type.isArray(this.currentValue)) {
          a = this.currentValue;
        } else {
          a = [this.currentValue];
        }
        return this.findInOptions(a)
      },
      set (value) {
        let self = this;
        if (this.multiple) {
          let ret = [];
          for (let i = 0; i < value.length; i++) {
            ret.push(value[i].value);
          }
          let timeout;
          if (timeout) clearTimeout(timeout);
          if (ret.length > this.limit) {
            this.showNotify = true;
            this.remove(value, this.limit);
            timeout = setTimeout(() => {
              self.showNotify = false;
            }, 1000);
          } else {
            this.currentValue = ret;
          }
        } else {
          this.currentValue = value[0] ? value[0].value : '';
        }
      }
    },
    allSelected () {
      let options = this.filter(this.currentOptions, this.searchText);
      let values = this.currentValue;

      if (!values || options.length !== values.length || options.length === 0) {
        return false
      }

      for (let i = 0, l = options.length; i < l; i++) {
        let value = options[i].value;
        if (values.indexOf(value) === -1) {
          return false
        }
      }
      return true
    },
    showPlaceholder () {
      if (type.isArray(this.currentValue)) {
        return this.currentValue.length <= 0
      } else {
        return !this.currentValue
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._closeEvent = EventListener.listen( this.$el, 'click', e => {
        if (!this.$el.contains(e.target)) this.show = false;
      });
    });
  },
  beforeDestroy () {
    if (this._closeEvent) this._closeEvent.remove();
    document.removeEventListener('keyup', this.keyup);
  },
  methods: {
    isSelected (option) {
      return this.findIndex(option.value) !== -1
    },
    keyup (e) {
      if (e['keyCode'] === 27) {
        this.show = false;
      }
    },
    filter (options, search) {
      if (search === '') return options
      let ret = [];
      for (let i = 0, l = options.length; i < l; i++) {
        let v = options[i] && String(options[i].label).replace(/<.*?>/g, '');
        let s = search;

        if (!this.matchCase) {
          v = v.toLocaleLowerCase();
          s = s.toLocaleLowerCase();
        }

        if (v !== '' && v.includes(s)) {
          ret.push(options[i]);
        }
      }
      return ret
    },
    selectAll () {
      if (this.allSelected) {
        this.selectedItems = [];
      } else {
        this.selectedItems = this.filter(this.currentOptions, this.searchText);
      }
    },
    addExtra () {
      if (this.extra && this.searchText.replace(/\s+$|^\s+/g, '')) {
        this.addOption(this.searchText, this.searchText);
        this.add({ value: this.searchText, label: this.searchText });
        this.searchText = '';
      }
    },
    findInOptions (a) {
      let options = this.currentOptions;
      let ret = [];

      for (let i = 0; i < a.length; i++) {
        let s = this.find(a[i], options);
        s != null ? ret.push(s) : 0;
      }
      return ret
    },
    find (v, array) {
      let a = array || this.selectedItems;
      for (let i = 0; i < a.length; i++) {
        if (v === a[i].value) {
          return a[i]
        }
      }
      return null
    },
    findIndex (v, array) {
      let a = array || this.selectedItems;
      for (let i = 0; i < a.length; i++) {
        if (v === a[i].value) {
          return i
        }
      }
      return -1
    },
    optionExists (option) {
      return (
        this.currentOptions
          .map(option => option.value)
          .indexOf(option.value) !== -1
      )
    },
    addOption (value, label) {
      let option = {
        value,
        label
      };
      if (this.optionExists(option)) {
        return
      }
      this.currentOptions.push(option);
    },
    add (option) {
      let a = this.selectedItems.slice(0);
      if (this.multiple) {
        a.push(option);
      } else {
        a = [option];
      }
      this.selectedItems = a;
    },
    del (item) {
      let index = this.findIndex(item.value);
      this.remove(this.selectedItems, index, 1);
    },
    remove (array, index, num) {
      let a = array.slice(0);
      num ? a.splice(index, num) : a.splice(index);
      this.selectedItems = a;
    },
    select (option) {
      let index = this.findIndex(option.value);
      if (this.multiple) {
        index === -1
          ? this.add(option)
          : this.remove(this.selectedItems, index, 1);
      } else {
        index === -1
          ? (this.selectedItems = [option])
          : this.noUncheck
            ? (this.selectedItems = [option])
            : (this.selectedItems = []);
        this.show = false;
        this.$refs.button.focus();
      }
    },
    toggleDropdown () {
      if (!this.disabled && !this.readonly) {
        this.show = !this.show;
      }
    }
  }
};

/* script */
const __vue_script__$n = script$n;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$n.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Select/VaSelect.vue";

/* template */
var __vue_render__$n = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: _vm.classObj, style: _vm.styleObj },
    [
      _c(
        "va-button",
        {
          ref: "button",
          class: [
            _vm.classPrefix + "-dropdown-toggle",
            _vm.classPrefix + "-select-btn",
            _vm.showSelected && _vm.multiple && _vm.value.length
              ? _vm.classPrefix + "-select-multiple"
              : "",
            _vm.show ? _vm.classPrefix + "-select-btn-open" : ""
          ],
          style: { minWidth: "100%" },
          attrs: { disabled: _vm.disabled, size: _vm.size, type: _vm.type },
          nativeOn: {
            click: function($event) {
              return _vm.toggleDropdown($event)
            }
          }
        },
        [
          _vm.showPlaceholder || !_vm.showSelected
            ? _c("span", { class: _vm.classPrefix + "-select-placeholder" }, [
                _vm._v(_vm._s(_vm.placeholder))
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.showSelected
            ? _c(
                "span",
                { staticStyle: { display: "flex" } },
                [
                  _vm.multiple
                    ? _vm._l(_vm.selectedItems, function(item, index) {
                        return _c(
                          "div",
                          {
                            key: index,
                            class: _vm.classPrefix + "-selected-tag",
                            attrs: { tabindex: "0" },
                            on: {
                              click: function($event) {
                                $event.stopPropagation();
                                _vm.del(item);
                              }
                            }
                          },
                          [
                            _c(
                              "span",
                              {
                                class: _vm.classPrefix + "-selected-tag__label"
                              },
                              [
                                _vm._t(
                                  "item",
                                  [
                                    _c("span", {
                                      domProps: {
                                        innerHTML: _vm._s(_vm.format(item))
                                      }
                                    })
                                  ],
                                  { item: item }
                                )
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                class: _vm.classPrefix + "-selected-tag__icon"
                              },
                              [_c("va-icon", { attrs: { type: "times" } })],
                              1
                            )
                          ]
                        )
                      })
                    : [
                        _c(
                          "div",
                          [
                            _vm._t(
                              "item",
                              [
                                _c("span", {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.format(_vm.selectedItems[0])
                                    )
                                  }
                                })
                              ],
                              { item: _vm.selectedItems[0] }
                            )
                          ],
                          2
                        )
                      ]
                ],
                2
              )
            : _vm._e(),
          _vm._v("\n      \n    "),
          _c("va-icon", {
            attrs: {
              type: _vm.show ? "angle-up" : "angle-down",
              color: "#A5ADBA"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fadeDown" } }, [
        _c(
          "ul",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.show,
                expression: "show"
              }
            ],
            ref: "menu",
            class: [
              _vm.classPrefix + "-dropdown-menu",
              _vm.search ? _vm.classPrefix + "-has-search" : ""
            ],
            style: { minWidth: "100%", maxHeight: _vm.menuMaxHeight }
          },
          [
            _vm.search
              ? _c("li", [
                  _c(
                    "div",
                    { class: _vm.classPrefix + "-search-wrap" },
                    [
                      _c("va-input", {
                        ref: "searchInput",
                        class: _vm.classPrefix + "-select-search",
                        attrs: {
                          placeholder: _vm.inputPlaceholder,
                          icon: "search",
                          "icon-style": "solid",
                          clearable: ""
                        },
                        on: { confirm: _vm.addExtra },
                        model: {
                          value: _vm.searchText,
                          callback: function($$v) {
                            _vm.searchText = $$v;
                          },
                          expression: "searchText"
                        }
                      })
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.multiple
              ? _c("li", { class: _vm.classPrefix + "-select-all" }, [
                  _c(
                    "a",
                    {
                      on: {
                        click: function($event) {
                          $event.preventDefault();
                          return _vm.selectAll($event)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.getL("all")) +
                          "\n          "
                      ),
                      _c("va-icon", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.allSelected,
                            expression: "allSelected"
                          }
                        ],
                        attrs: {
                          color: "#0052CC",
                          margin: "5px 0 0 0",
                          size: "10px",
                          type: "check"
                        }
                      })
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { class: _vm.classPrefix + "-select-items-wrapper" },
              [
                _vm._t(
                  "default",
                  _vm._l(_vm.filterOptions, function(option, index) {
                    return _c("va-option", {
                      key: index,
                      attrs: { label: option.label, value: option.value }
                    })
                  })
                )
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showNotify,
                    expression: "showNotify"
                  }
                ],
                class: _vm.classPrefix + "-notify"
              },
              [_vm._v("Limit: " + _vm._s(_vm.limit))]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "clearfix" }),
      _vm._v(" "),
      _c("validate", {
        attrs: {
          current: _vm.value,
          "custom-validate": _vm.customValidate,
          name: _vm.name,
          rules: _vm.rules
        },
        model: {
          value: _vm.validStatus,
          callback: function($$v) {
            _vm.validStatus = $$v;
          },
          expression: "validStatus"
        }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$n = [];
__vue_render__$n._withStripped = true;

  /* style */
  const __vue_inject_styles__$n = function (inject) {
    if (!inject) return
    inject("data-v-704ff2d6_0", { source: "/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-select,\n.va--theme-light .va-select {\n  /**\n  No focus ring on an open Select\n  */\n}\n.va-select-search,\n  .va--theme-light .va-select-search {\n    outline: none;\n    border-bottom: 0px solid #e0e2e6;\n}\n.va-select-btn-open,\n  .va--theme-light .va-select-btn-open {\n    background-color: #e0edff !important;\n    color: #0052cc !important !important;\n}\n.va-select-group.va-has-error .va-btn:after,\n  .va--theme-light .va-select-group.va-has-error .va-btn:after {\n    border: 2px solid #e0350b !important;\n}\n.va-select-group .va-search-wrap,\n  .va--theme-light .va-select-group .va-search-wrap {\n    background: #f4f5f7;\n    border-bottom: 1px solid #e0e0e0;\n}\n.va-select-group .va-selected-tag,\n  .va--theme-light .va-select-group .va-selected-tag {\n    background: none;\n}\n.va-select-group .va-selected-tag:focus,\n    .va--theme-light .va-select-group .va-selected-tag:focus {\n      outline: none;\n}\n.va-select-group .va-selected-tag__icon,\n    .va--theme-light .va-select-group .va-selected-tag__icon {\n      color: #b4bbc5;\n}\n.va-select-group .va-selected-tag:hover,\n    .va--theme-light .va-select-group .va-selected-tag:hover {\n      color: #ff542e;\n}\n.va-select-group .va-selected-tag:hover .va-selected-tag__icon,\n      .va--theme-light .va-select-group .va-selected-tag:hover .va-selected-tag__icon {\n        color: #ff542e !important;\n}\n.va-select-group .va-selected-tag:active,\n    .va--theme-light .va-select-group .va-selected-tag:active {\n      color: #bd2600 !important;\n}\n.va-select-group .va-selected-tag:active .va-selected-tag__icon,\n      .va--theme-light .va-select-group .va-selected-tag:active .va-selected-tag__icon {\n        color: #bd2600 !important !important;\n}\n.va-select-group .va-dropdown-menu,\n  .va--theme-light .va-select-group .va-dropdown-menu {\n    background-color: white;\n    -webkit-box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;\n    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;\n}\n.va-select-group .va-dropdown-menu .va-notify,\n    .va--theme-light .va-select-group .va-dropdown-menu .va-notify {\n      background: #ffe380;\n      border: 1px solid #79859a;\n      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n}\n.va-select-group .va-dropdown-menu .va-fa-plus-square-o,\n    .va--theme-light .va-select-group .va-dropdown-menu .va-fa-plus-square-o {\n      color: #b4bbc5;\n}\n.va-select-group .va-dropdown-menu .va-select-all,\n    .va--theme-light .va-select-group .va-dropdown-menu .va-select-all {\n      border-bottom: 1px solid #e0e2e6;\n}\n.va-select-group .va-dropdown-menu .va-select-all a i,\n      .va--theme-light .va-select-group .va-dropdown-menu .va-select-all a i {\n        color: #b4bbc5;\n}\n.va-select-group .va-dropdown-toggle .va-select-placeholder,\n  .va--theme-light .va-select-group .va-dropdown-toggle .va-select-placeholder {\n    color: #a6aeba !important;\n}\n.va-select-group .va-dropdown-toggle:active:not(.va-select-btn-open) .va-select-placeholder,\n  .va--theme-light .va-select-group .va-dropdown-toggle:active:not(.va-select-btn-open) .va-select-placeholder {\n    color: #0052cc !important;\n}\n.va-select-group .va-dropdown-toggle:active:not(.va-select-btn-open) i,\n  .va--theme-light .va-select-group .va-dropdown-toggle:active:not(.va-select-btn-open) i {\n    color: #0052cc !important;\n}\n.va-select-group .va-select-btn-open .va-select-placeholder,\n  .va--theme-light .va-select-group .va-select-btn-open .va-select-placeholder {\n    color: #0052cc !important;\n}\n.va-select-group .va-select-btn-open i,\n  .va--theme-light .va-select-group .va-select-btn-open i {\n    color: #0052cc !important;\n}\n.va-select-item-active,\n  .va--theme-light .va-select-item-active {\n    background: #f3f4f6;\n}\n.va-select-item-active:hover,\n    .va--theme-light .va-select-item-active:hover {\n      background: #f3f4f6 !important !important;\n}\n.va-select-btn-open.va-btn:focus, .va-select-btn-open.va-btn-focused,\n  .va--theme-light .va-select-btn-open.va-btn:focus,\n  .va--theme-light .va-select-btn-open.va-btn-focused {\n    box-shadow: none;\n}\n.va-select-group .va-select-btn-open:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: 3px;\n}\n.va-select-group .va-selected-tag {\n  display: flex;\n  align-items: baseline;\n  padding: 0 0 0 8px;\n  margin-right: 3px;\n  border-radius: 2px;\n  line-height: 2;\n  position: relative;\n  z-index: 20;\n}\n.va-select-group .va-selected-tag__label {\n    margin-right: 0.5em;\n}\n.va-select-group .va-selected-tag__icon {\n    font-size: 0.8em;\n}\n.va-select-group .va-select-btn.va-btn {\n  cursor: default;\n}\n.va-select-group .va-select-btn.va-btn:after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    border-radius: 3px;\n    z-index: 15;\n}\n.va-select-group .va-search-wrap {\n  padding: 10px 10px 10px 10px;\n  z-index: 10;\n  margin-top: -4px;\n}\n.va-select-group .va-select-search {\n  border: 0;\n  padding: 0;\n  width: 100%;\n  font-size: 14px;\n  z-index: 10;\n}\n.va-select-group .va-dropdown-menu {\n  display: block;\n  overflow-y: auto;\n  list-style-type: none;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  float: left;\n  min-width: 200px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 4px 0;\n  margin-top: 6px;\n  margin-bottom: 6px;\n  border-radius: 3px;\n}\n.va-select-group .va-dropdown-menu li a {\n    padding: 8px 34px 8px 12px;\n}\n.va-select-group .va-dropdown-menu li a span {\n      cursor: default;\n}\n.va-select-group .va-dropdown-menu .va-notify {\n    position: absolute;\n    bottom: 5px;\n    width: 96%;\n    margin: 0 2%;\n    min-height: 26px;\n    padding: 3px 5px;\n    border-radius: 3px;\n    pointer-events: none;\n}\n.va-select-group .va-dropdown-menu .va-select-all {\n    position: relative;\n    cursor: default;\n}\n.va-select-group .va-has-search {\n  width: 230px;\n}\n.va-select-group .va-dropdown-toggle {\n  text-align: left;\n  display: flex;\n  align-items: center;\n  min-width: 80px;\n  justify-content: space-evenly;\n}\n.va-select-group .va-dropdown-toggle .va-btn-text-fade {\n    justify-content: space-between !important;\n}\n.va-select-group .va-dropdown-toggle .va-btn-text-fade i {\n      position: inherit;\n      right: 7px;\n      top: 50%;\n      margin-top: -1px;\n      margin-right: 3px;\n}\n.va-select-group .va-dropdown-toggle > span {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n}\n.va-select-items-wrapper {\n  overflow-y: auto;\n  cursor: default;\n}\n.va-select-group .va-dropdown-toggle {\n  width: 100%;\n}\n\n/*# sourceMappingURL=VaSelect.vue.map */", map: {"version":3,"sources":["VaSelect.vue","/Users/ax/Documents/prj/cue/app/aaa/src/Select/VaSelect.vue"],"names":[],"mappings":"AAAA,QAAQ;AACR,YAAY;AACZ,UAAU;AACV,QAAQ;AACR,SAAS;AACT,UAAU;AACV,OAAO;AACP,iBAAiB;AACjB,eAAe;AACf,WAAW;AACX,YAAY;ACinBZ;;EATA;;GDnmBG;ACqmBH;AAjHA;;IACA,aAoIA;IAnIA,gCAoIA;AAAA;AAjIA;;IACA,oCAsHA;IArHA,oCAAA;AAAA;AAEA;;IAIA,oCA8GA;AAAA;AAlHA;;IAUA,mBAoIA;IAnIA,gCAoIA;AAAA;AA/IA;;IAgBA,gBAqGA;AAAA;AArHA;;MAmBA,aAmGA;AAAA;AAtHA;;MAuBA,cAAA;AAAA;AAvBA;;MA2BA,cAAA;AAAA;AA3BA;;QA8BA,yBAAA;AAAA;AA9BA;;MAmCA,yBAuFA;AAAA;AA1HA;;QAsCA,oCAAA;AAAA;AAtCA;;IA4CA,uBAAA;IACA,6FAoFA;IAnFA,qFAmFA;AAAA;AAjIA;;MAiDA,mBAAA;MACA,yBAkFA;MAjFA,+CAkFA;AAAA;AArIA;;MAuDA,cAAA;AAAA;AAvDA;;MA2DA,gCA4EA;AAAA;AAvIA;;QA+DA,cAAA;AAAA;AA/DA;;IAuEA,yBAAA;AAAA;AAvEA;;IA4EA,yBAAA;AAAA;AA5EA;;IA+EA,yBAAA;AAAA;AA/EA;;IAsFA,yBAAA;AAAA;AAtFA;;IAyFA,yBAAA;AAAA;AAKA;;IACA,mBAAA;AAAA;AADA;;MAIA,yCAAA;AAAA;AAOA;;;IAEA,gBAkCA;AAAA;AAMA;EAGA,WAAA;EACA,cAAA;EACA,kBAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,kBAAA;AAAA;AAVA;EAgBA,aAAA;EACA,qBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA;EACA,WAAA;AAAA;AAvBA;IA0BA,mBAAA;AAAA;AA1BA;IA8BA,gBAAA;AAAA;AA9BA;EAmCA,eAAA;AAAA;AAnCA;IAsCA,WAAA;IACA,cAAA;IACA,kBAAA;IACA,MAAA;IACA,QAAA;IACA,SAAA;IACA,OAAA;IACA,kBAAA;IACA,WAAA;AAAA;AA9CA;EAmDA,4BAAA;EACA,WAAA;EACA,gBAAA;AAAA;AArDA;EAyDA,SAAA;EACA,UAAA;EACA,WAAA;EACA,eAAA;EACA,WAAA;AAAA;AA7DA;EAiEA,cAAA;EACA,gBAAA;EACA,qBAAA;EAEA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,aAAA;EACA,WAAA;EACA,gBAAA;EACA,8BAAA;EACA,sBAAA;EACA,cAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;AAAA;AAhFA;IAoFA,0BAAA;AAAA;AApFA;MAuFA,eAAA;AAAA;AAvFA;IA6FA,kBAAA;IACA,WAAA;IACA,UAAA;IACA,YAAA;IACA,gBAAA;IACA,gBAAA;IACA,kBAAA;IACA,oBAAA;AAAA;AApGA;IAwGA,kBAAA;IACA,eAAA;AAAA;AAzGA;EA8GA,YAAA;AAAA;AA9GA;EAkHA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;EACA,6BAAA;AAAA;AAtHA;IAyHA,yCAAA;AAAA;AAzHA;MA4HA,iBAAA;MACA,UAAA;MACA,QAAA;MACA,gBAAA;MACA,iBAAA;AAAA;AAhIA;IAqIA,aAAA;IACA,eAAA;IACA,uBAAA;AAAA;AAKA;EACA,gBAAA;EACA,eAAA;AAAA;AAGA;EAEA,WAAA;AAAA;;ADlmBA,uCAAuC","file":"VaSelect.vue","sourcesContent":["/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-select,\n.va--theme-light .va-select {\n  /**\n  No focus ring on an open Select\n  */ }\n  .va-select-search,\n  .va--theme-light .va-select-search {\n    outline: none;\n    border-bottom: 0px solid #e0e2e6; }\n  .va-select-btn-open,\n  .va--theme-light .va-select-btn-open {\n    background-color: #e0edff !important;\n    color: #0052cc !important !important; }\n  .va-select-group.va-has-error .va-btn:after,\n  .va--theme-light .va-select-group.va-has-error .va-btn:after {\n    border: 2px solid #e0350b !important; }\n  .va-select-group .va-search-wrap,\n  .va--theme-light .va-select-group .va-search-wrap {\n    background: #f4f5f7;\n    border-bottom: 1px solid #e0e0e0; }\n  .va-select-group .va-selected-tag,\n  .va--theme-light .va-select-group .va-selected-tag {\n    background: none; }\n    .va-select-group .va-selected-tag:focus,\n    .va--theme-light .va-select-group .va-selected-tag:focus {\n      outline: none; }\n    .va-select-group .va-selected-tag__icon,\n    .va--theme-light .va-select-group .va-selected-tag__icon {\n      color: #b4bbc5; }\n    .va-select-group .va-selected-tag:hover,\n    .va--theme-light .va-select-group .va-selected-tag:hover {\n      color: #ff542e; }\n      .va-select-group .va-selected-tag:hover .va-selected-tag__icon,\n      .va--theme-light .va-select-group .va-selected-tag:hover .va-selected-tag__icon {\n        color: #ff542e !important; }\n    .va-select-group .va-selected-tag:active,\n    .va--theme-light .va-select-group .va-selected-tag:active {\n      color: #bd2600 !important; }\n      .va-select-group .va-selected-tag:active .va-selected-tag__icon,\n      .va--theme-light .va-select-group .va-selected-tag:active .va-selected-tag__icon {\n        color: #bd2600 !important !important; }\n  .va-select-group .va-dropdown-menu,\n  .va--theme-light .va-select-group .va-dropdown-menu {\n    background-color: white;\n    -webkit-box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;\n    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px; }\n    .va-select-group .va-dropdown-menu .va-notify,\n    .va--theme-light .va-select-group .va-dropdown-menu .va-notify {\n      background: #ffe380;\n      border: 1px solid #79859a;\n      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n    .va-select-group .va-dropdown-menu .va-fa-plus-square-o,\n    .va--theme-light .va-select-group .va-dropdown-menu .va-fa-plus-square-o {\n      color: #b4bbc5; }\n    .va-select-group .va-dropdown-menu .va-select-all,\n    .va--theme-light .va-select-group .va-dropdown-menu .va-select-all {\n      border-bottom: 1px solid #e0e2e6; }\n      .va-select-group .va-dropdown-menu .va-select-all a i,\n      .va--theme-light .va-select-group .va-dropdown-menu .va-select-all a i {\n        color: #b4bbc5; }\n  .va-select-group .va-dropdown-toggle .va-select-placeholder,\n  .va--theme-light .va-select-group .va-dropdown-toggle .va-select-placeholder {\n    color: #a6aeba !important; }\n  .va-select-group .va-dropdown-toggle:active:not(.va-select-btn-open) .va-select-placeholder,\n  .va--theme-light .va-select-group .va-dropdown-toggle:active:not(.va-select-btn-open) .va-select-placeholder {\n    color: #0052cc !important; }\n  .va-select-group .va-dropdown-toggle:active:not(.va-select-btn-open) i,\n  .va--theme-light .va-select-group .va-dropdown-toggle:active:not(.va-select-btn-open) i {\n    color: #0052cc !important; }\n  .va-select-group .va-select-btn-open .va-select-placeholder,\n  .va--theme-light .va-select-group .va-select-btn-open .va-select-placeholder {\n    color: #0052cc !important; }\n  .va-select-group .va-select-btn-open i,\n  .va--theme-light .va-select-group .va-select-btn-open i {\n    color: #0052cc !important; }\n  .va-select-item-active,\n  .va--theme-light .va-select-item-active {\n    background: #f3f4f6; }\n    .va-select-item-active:hover,\n    .va--theme-light .va-select-item-active:hover {\n      background: #f3f4f6 !important !important; }\n  .va-select-btn-open.va-btn:focus, .va-select-btn-open.va-btn-focused,\n  .va--theme-light .va-select-btn-open.va-btn:focus,\n  .va--theme-light .va-select-btn-open.va-btn-focused {\n    box-shadow: none; }\n\n.va-select-group .va-select-btn-open:after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: 3px; }\n\n.va-select-group .va-selected-tag {\n  display: flex;\n  align-items: baseline;\n  padding: 0 0 0 8px;\n  margin-right: 3px;\n  border-radius: 2px;\n  line-height: 2;\n  position: relative;\n  z-index: 20; }\n  .va-select-group .va-selected-tag__label {\n    margin-right: 0.5em; }\n  .va-select-group .va-selected-tag__icon {\n    font-size: 0.8em; }\n\n.va-select-group .va-select-btn.va-btn {\n  cursor: default; }\n  .va-select-group .va-select-btn.va-btn:after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    border-radius: 3px;\n    z-index: 15; }\n\n.va-select-group .va-search-wrap {\n  padding: 10px 10px 10px 10px;\n  z-index: 10;\n  margin-top: -4px; }\n\n.va-select-group .va-select-search {\n  border: 0;\n  padding: 0;\n  width: 100%;\n  font-size: 14px;\n  z-index: 10; }\n\n.va-select-group .va-dropdown-menu {\n  display: block;\n  overflow-y: auto;\n  list-style-type: none;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  float: left;\n  min-width: 200px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 4px 0;\n  margin-top: 6px;\n  margin-bottom: 6px;\n  border-radius: 3px; }\n  .va-select-group .va-dropdown-menu li a {\n    padding: 8px 34px 8px 12px; }\n    .va-select-group .va-dropdown-menu li a span {\n      cursor: default; }\n  .va-select-group .va-dropdown-menu .va-notify {\n    position: absolute;\n    bottom: 5px;\n    width: 96%;\n    margin: 0 2%;\n    min-height: 26px;\n    padding: 3px 5px;\n    border-radius: 3px;\n    pointer-events: none; }\n  .va-select-group .va-dropdown-menu .va-select-all {\n    position: relative;\n    cursor: default; }\n\n.va-select-group .va-has-search {\n  width: 230px; }\n\n.va-select-group .va-dropdown-toggle {\n  text-align: left;\n  display: flex;\n  align-items: center;\n  min-width: 80px;\n  justify-content: space-evenly; }\n  .va-select-group .va-dropdown-toggle .va-btn-text-fade {\n    justify-content: space-between !important; }\n    .va-select-group .va-dropdown-toggle .va-btn-text-fade i {\n      position: inherit;\n      right: 7px;\n      top: 50%;\n      margin-top: -1px;\n      margin-right: 3px; }\n  .va-select-group .va-dropdown-toggle > span {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start; }\n\n.va-select-items-wrapper {\n  overflow-y: auto;\n  cursor: default; }\n\n.va-select-group .va-dropdown-toggle {\n  width: 100%; }\n\n/*# sourceMappingURL=VaSelect.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$n = undefined;
  /* module identifier */
  const __vue_module_identifier__$n = undefined;
  /* functional template */
  const __vue_is_functional_template__$n = false;
  /* style inject SSR */
  

  
  var VaSelect$1 = normalizeComponent(
    { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
    __vue_inject_styles__$n,
    __vue_script__$n,
    __vue_scope_id__$n,
    __vue_is_functional_template__$n,
    __vue_module_identifier__$n,
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

var script$o = {
  name: 'VaOption',
  inject: ['addSelectOption', 'isOptionSelected', 'selectOption'],
  props: {
    value: {},
    label: {
      type: String,
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  computed: {
    fullLabel () {
      return this.label || this.value
    },
    option () {
      return { label: this.fullLabel, value: this.value }
    },
    classes () {
      let classes = {};

      classes[`${this.classPrefix}-select-item-active`] = this.isOptionSelected(
        this.option
      );

      return classes
    }
  },
  mounted () {
    this.addSelectOption(this.value, this.fullLabel);
  }
};

/* script */
const __vue_script__$o = script$o;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$o.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Select/VaOption.vue";

/* template */
var __vue_render__$o = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("li", { staticStyle: { position: "relative" } }, [
    _c(
      "a",
      {
        class: _vm.classes,
        on: {
          click: function($event) {
            $event.preventDefault();
            _vm.selectOption(_vm.option);
          }
        }
      },
      [_vm._t("default", [_vm._v(_vm._s(_vm.fullLabel))])],
      2
    )
  ])
};
var __vue_staticRenderFns__$o = [];
__vue_render__$o._withStripped = true;

  /* style */
  const __vue_inject_styles__$o = undefined;
  /* scoped */
  const __vue_scope_id__$o = undefined;
  /* module identifier */
  const __vue_module_identifier__$o = undefined;
  /* functional template */
  const __vue_is_functional_template__$o = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VaOption = normalizeComponent(
    { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
    __vue_inject_styles__$o,
    __vue_script__$o,
    __vue_scope_id__$o,
    __vue_is_functional_template__$o,
    __vue_module_identifier__$o,
    undefined,
    undefined
  );

//

var script$p = {
  name: 'VaForm',
  mixins: [events],
  inheritAttrs: false,
  props: {
    id: {
      type: String
    },
    name: {
      type: String
    },
    type: {
      type: String,
      default: 'horizontal',
      required: false,
      validator (v) {
        return ['horizontal', 'inline', 'vertical'].includes(v)
      }
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  methods: {
    noop () {},
    validateFields (cb) {
      this.validate = false;
      this.$nextTick(() => {
        this.validate = true;
        this.$nextTick(() => {
          if (type.isFunction(cb)) {
            cb(this.result);
          }
        });
      });
    },
    resetValidation (cb) {
      this.validate = false;
      this.$nextTick(() => {
        this.result = { results: {}, isvalid: true };
        this.$emit('validateChange', this.result);
        if (type.isFunction(cb)) {
          cb(this.result);
        }
      });
    }
  },
  watch: {
    validate (val) {
      this.broadcast('VaValidate', 'Va@openValidate', val);
      if (val) {
        this.result = this._result;
      } else {
        this.result = { results: {}, isvalid: true };
      }
    },
    result (val) {
      if (this.validate) {
        this.$emit('validateChange', val);
      }
    },
    type (val) {
      this.broadcast('VaFormItem', 'Va@formTypeChange', val);
    }
  },
  mounted () {
    if (!this.validate) {
      this.result = { results: {}, isvalid: true };
    }
    this.broadcast('VaValidate', 'Va@openValidate', this.validate);
    this.broadcast('VaFormItem', 'Va@formTypeChange', this.type);
  },
  computed: {
    classObj () {
      let { classPrefix, type: type$$1 } = this;
      let classes = {};

      classes[classPrefix + '-form-horizontal'] = type$$1 === 'horizontal';
      classes[classPrefix + '-form-inline'] = type$$1 === 'inline';
      classes['clearfix'] = true;

      return classes
    }
  },
  created () {
    this.$on('openValidate', () => {
      this.validate = true;
    });

    this.$on('closeValidate', () => {
      this.validate = false;
    });

    this.$on('Va@validateChange', val => {
      let name = val.name;
      let validateResult = Object.assign({}, this._result);

      if (!validateResult.results) validateResult.results = {};
      validateResult.results[name] = val.result;

      validateResult.isvalid = true;

      for (let i in validateResult.results) {
        if (!validateResult.results[i]['isvalid']) {
          validateResult.isvalid = false;
          break
        }
      }

      this._result = validateResult;

      if (this.validate) {
        this.result = this._result;
        this.$emit('validateChange', this.result);
      }
    });

    this.$on('Va@validateDestroy', val => {
      delete this.result.results[val.name];
      delete this._result.results[val.name];
    });

    this.$on('Va@requestFormType', () => {
      this.broadcast('VaFormItem', 'Va@formTypeChange', this.type);
    });
  },

  data () {
    return {
      // eslint-disable-next-line
      _result: { results: {}, isvalid: true },
      result: { results: {}, isvalid: true },
      validate: false
    }
  }
};

/* script */
const __vue_script__$p = script$p;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$p.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Form/VaForm.vue";

/* template */
var __vue_render__$p = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "form",
    _vm._b(
      {
        class: _vm.classObj,
        attrs: { id: _vm.id, name: _vm.name },
        on: {
          submit: function($event) {
            $event.preventDefault();
            return _vm.noop($event)
          }
        }
      },
      "form",
      _vm.$attrs,
      false
    ),
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$p = [];
__vue_render__$p._withStripped = true;

  /* style */
  const __vue_inject_styles__$p = undefined;
  /* scoped */
  const __vue_scope_id__$p = undefined;
  /* module identifier */
  const __vue_module_identifier__$p = undefined;
  /* functional template */
  const __vue_is_functional_template__$p = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VaForm = normalizeComponent(
    { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
    __vue_inject_styles__$p,
    __vue_script__$p,
    __vue_scope_id__$p,
    __vue_is_functional_template__$p,
    __vue_module_identifier__$p,
    undefined,
    undefined
  );

//

var script$q = {
  name: 'VaFormItem',
  mixins: [events],
  inheritAttrs: false,
  props: {
    label: {
      type: String
    },
    labelCol: {
      type: [Number, String],
      default: 0,
      required: false
    },
    wrapCol: {
      type: Number
    },
    formCol: {
      type: Number
    },
    need: {
      type: Boolean,
      default: false,
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    return {
      inline: false,
      vertical: false,
      horizontal: true
    }
  },
  created () {
    this.$on('Va@formTypeChange', val => {
      this.inline = val === 'inline';
      this.vertical = val === 'vertical';
      this.horizontal = val === 'horizontal';
    });
    this.dispatch('VaForm', 'Va@requestFormType', true);
  },
  computed: {
    label_col () {
      let lc = parseInt(this.labelCol);
      let defaultCol = this.inline ? 0 : 2;
      defaultCol = this.vertical ? 12 : defaultCol;
      return lc || defaultCol
    },
    col () {
      if (this.inline && !this.formCol) {
        return 0
      }

      if (this.formCol) {
        return this.formCol
      }

      let wrapCol = this.wrapCol ? this.wrapCol : 12;
      return this.label_col === 12 ? 12 : wrapCol - this.label_col
    },
    classObj () {
      let { classPrefix } = this;
      let classes = {};

      classes[classPrefix + '-form-group'] = true;

      return classes
    }
  }
};

/* script */
const __vue_script__$q = script$q;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$q.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Form/VaFormItem.vue";

/* template */
var __vue_render__$q = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classObj }, [
    _vm.label || _vm.inline || _vm.horizontal
      ? _c(
          "label",
          _vm._b(
            {
              class:
                _vm.classPrefix +
                "-col-sm-" +
                _vm.label_col +
                " " +
                _vm.classPrefix +
                "-control-label"
            },
            "label",
            _vm.$attrs,
            false
          ),
          [
            _vm._v("\n    " + _vm._s(_vm.label || " ") + "\n    "),
            _vm.need
              ? _c("em", { class: _vm.classPrefix + "-form-need" }, [
                  _vm._v("*")
                ])
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        class:
          _vm.classPrefix +
          "-col-sm-" +
          _vm.col +
          " " +
          _vm.classPrefix +
          "-flex"
      },
      [_vm._t("default")],
      2
    )
  ])
};
var __vue_staticRenderFns__$q = [];
__vue_render__$q._withStripped = true;

  /* style */
  const __vue_inject_styles__$q = undefined;
  /* scoped */
  const __vue_scope_id__$q = undefined;
  /* module identifier */
  const __vue_module_identifier__$q = undefined;
  /* functional template */
  const __vue_is_functional_template__$q = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VaFormItem = normalizeComponent(
    { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
    __vue_inject_styles__$q,
    __vue_script__$q,
    __vue_scope_id__$q,
    __vue_is_functional_template__$q,
    __vue_module_identifier__$q,
    undefined,
    undefined
  );

//

var script$r = {
  name: 'VaDropdown',
  props: {
    triggerEvent: {
      type: String,
      default: 'click',
      required: false
    },
    clickClose: {
      type: Boolean,
      default: false,
      required: false
    },
    effect: {
      type: String,
      default: 'fadeDown',
      required: false
    },
    tall: {
      type: Boolean,
      default: false,
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    open () {
      this.show = true;
      this.$emit('show');
    },
    close () {
      this.show = false;
      this.$emit('hide');
    },
    toggle () {
      this.show ? this.close() : this.open();
      this.$emit('toggle');
    },
    onFocus () {}
  },
  computed: {
    classObj () {
      let { classPrefix, tall } = this;
      let classes = {};

      classes[classPrefix + '-dropdown-selected'] = this.show;
      classes[classPrefix + '-dropdown-con-tall'] = tall;

      return classes
    }
  },
  mounted () {
    this.$nextTick(() => {
      let el = this.$el;
    //let trig = this.$refs.trigger.children[0]
      if (this.triggerEvent === 'click') {
        this._clickEvent = EventListener.listen( el, 'click', this.toggle);
        this._closeEvent = EventListener.listen( el, 'click', e => {
          if (!this.clickClose && !el.contains(e.target) && this.show) {
            this.close();
          }
        });
      } else if (this.triggerEvent === 'hover') {
        this._mouseenterEvent = EventListener.listen(this.$el, 'mouseenter', () => {
          this.open();
        });
        this._closeEvent = EventListener.listen(this.$el, 'mouseleave', () => {
          setTimeout(() => {
            this.close();
          }, 500);
        });
      }
    });
  },
  beforeDestroy () {
    if (this._closeEvent) this._closeEvent.remove();
    if (this._clickEvent) this._clickEvent.remove();
    if (this._mouseenterEvent) this._mouseenterEvent.remove();
  }
};

/* script */
const __vue_script__$r = script$r;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$r.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Dropdown/VaDropdown.vue";

/* template */
var __vue_render__$r = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: [_vm.classPrefix + "-dropdown-con", _vm.classObj] },
    [
      _c(
        "span",
        { ref: "trigger", attrs: { focus: _vm.onFocus } },
        [_vm._t("trigger")],
        2
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: _vm.effect } }, [
        _c(
          "ul",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.show,
                expression: "show"
              }
            ],
            class: _vm.classPrefix + "-dropdown-menu"
          },
          [_vm._t("default")],
          2
        )
      ])
    ],
    1
  )
};
var __vue_staticRenderFns__$r = [];
__vue_render__$r._withStripped = true;

  /* style */
  const __vue_inject_styles__$r = function (inject) {
    if (!inject) return
    inject("data-v-6f9de675_0", { source: "/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-dropdown,\n.va--theme-light.va-dropdown {\n  /*\n  The following styles apply to a button that exists as a dropdown\n  trigger that is currently active, meaning the dropdown is opened.\n  */\n  /*\n  If we want, we can apply different styles to different types of buttons,\n  doing something like this:\n\n  &-selected {\n    >span>div>a.va-btn-primary {\n      background: $B300;\n      color: $N20;\n    }\n  }\n\n  For now, though, we just use one style for all types of buttons.\n  */\n}\n.va-dropdown-con .va-dropdown-menu,\n  .va--theme-light.va-dropdown-con .va-dropdown-menu {\n    background: white;\n    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;\n}\n.va-dropdown-con .va-dropdown-menu::-webkit-scrollbar-thumb,\n    .va--theme-light.va-dropdown-con .va-dropdown-menu::-webkit-scrollbar-thumb {\n      background: rgba(23, 47, 87, 0.22);\n}\n.va-dropdown-con .va-dropdown-menu::-webkit-scrollbar-thumb:hover,\n      .va--theme-light.va-dropdown-con .va-dropdown-menu::-webkit-scrollbar-thumb:hover {\n        background: rgba(9, 30, 66, 0.45);\n}\n.va-dropdown-con .va-dropdown-menu > li > a,\n    .va-dropdown-con .va-dropdown-menu > div > li > a,\n    .va--theme-light.va-dropdown-con .va-dropdown-menu > li > a,\n    .va--theme-light.va-dropdown-con .va-dropdown-menu > div > li > a {\n      color: #172c4f;\n}\n.va-dropdown-con .va-dropdown-menu > li > a:hover,\n      .va-dropdown-con .va-dropdown-menu > div > li > a:hover,\n      .va--theme-light.va-dropdown-con .va-dropdown-menu > li > a:hover,\n      .va--theme-light.va-dropdown-con .va-dropdown-menu > div > li > a:hover {\n        background: #e8eaef;\n}\n.va-dropdown-con .va-dropdown-menu > li > a:active,\n      .va-dropdown-con .va-dropdown-menu > div > li > a:active,\n      .va--theme-light.va-dropdown-con .va-dropdown-menu > li > a:active,\n      .va--theme-light.va-dropdown-con .va-dropdown-menu > div > li > a:active {\n        color: inherit;\n        background: #b3d4ff;\n}\n.va-dropdown-selected > span > div > a.va-btn,\n  .va--theme-light.va-dropdown-selected > span > div > a.va-btn {\n    background: #e0edff;\n    color: #0052cc;\n}\n.va-dropdown-selected > span > div > a.va-btn:hover,\n    .va--theme-light.va-dropdown-selected > span > div > a.va-btn:hover {\n      background: #e0edff;\n      color: #0052cc;\n}\n.va-dropdown-con > span > div > a.va-btn,\n.va-dropdown-con > span > div > a.va-btn:hover {\n  cursor: default;\n}\n.va-dropdown-con {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.va-dropdown-con .va-dropdown-menu {\n    position: absolute;\n    overflow: auto;\n    top: 100%;\n    left: 0;\n    z-index: 1000;\n    float: left;\n    min-width: 160px;\n    max-height: 300px;\n    box-sizing: border-box;\n    padding: 4px 0;\n    margin-top: 6px;\n    margin-bottom: 6px;\n    border-radius: 4px;\n    list-style-type: none;\n    -webkit-overflow-scrolling: touch;\n}\n.va-dropdown-con .va-dropdown-menu hr {\n      margin: 5px 0;\n      border-bottom-width: 1px;\n}\n.va-dropdown-con .va-dropdown-menu::-webkit-scrollbar-track {\n      border-radius: 5px;\n}\n.va-dropdown-con .va-dropdown-menu::-webkit-scrollbar {\n      width: 0;\n      padding: 5px 2px 5px 0;\n}\n.va-dropdown-con .va-dropdown-menu::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n}\n.va-dropdown-con .va-dropdown-menu:hover::-webkit-scrollbar {\n      width: 7px;\n}\n.va-dropdown-con .va-dropdown-menu > li,\n    .va-dropdown-con .va-dropdown-menu > div > li {\n      white-space: nowrap;\n      display: block;\n}\n.va-dropdown-con .va-dropdown-menu > li a i,\n      .va-dropdown-con .va-dropdown-menu > div > li a i {\n        padding-left: 12px !important;\n        position: relative;\n        top: 3px;\n}\n.va-dropdown-con .va-dropdown-menu > li > a,\n    .va-dropdown-con .va-dropdown-menu > div > li > a {\n      display: flex;\n      justify-content: space-between;\n      padding: 5px 12px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      line-height: 1.5;\n}\n.va-dropdown-con .va-dropdown-menu > li > a:hover,\n      .va-dropdown-con .va-dropdown-menu > div > li > a:hover {\n        text-decoration: none;\n}\n.va-dropdown-con .va-dropdown-menu > li > a:active,\n      .va-dropdown-con .va-dropdown-menu > div > li > a:active {\n        text-decoration: none;\n        outline: none;\n}\n.va-dropdown-con .va-dropdown-menu > li > a:focus,\n      .va-dropdown-con .va-dropdown-menu > div > li > a:focus {\n        outline: none;\n}\n.va-dropdown {\n  position: relative;\n}\n.va-dropdown-toggle:focus {\n  outline: 0;\n}\n\n/**\nDropdowns, while active, don't need a focus ring. It shows focus state by changing the background color.\n*/\n.va-dropdown-con.va-dropdown-selected,\n> span,\n> div,\n> .va-btn:focus:not(:active):not(.va-select-btn-open),\n.va-dropdown-con.va-dropdown-selected,\n> span,\n> div,\n> .va-btn-focused:not(:active):not(.va-select-btn-open) {\n  box-shadow: none !important;\n}\n\n/**\nThe following styles apply to a button that exists as a dropdown trigger\nthat resides inside of the va-topbar element.\n*/\n.va-topbar--theme-blue .va-dropdown-selected > span > div > a.va-btn {\n  background-color: #0747a6;\n  color: #f3f4f6;\n}\n.va-topbar--theme-blue .va-dropdown-selected > span > div > a.va-btn-primary-dark {\n  background: #0052cc;\n}\n.va-topbar--theme-purple .va-dropdown-selected > span > div > a.va-btn {\n  background-color: #5243a8;\n  color: #f3f4f6;\n}\n.va-topbar--theme-purple .va-dropdown-selected > span > div > a.va-btn-purple-dark {\n  background: #5243a8;\n}\n.va-topbar .va-dropdown-con-tall {\n  height: 100%;\n}\n.va-topbar .va-dropdown-con-tall > span {\n    height: 100%;\n}\n.va-topbar .va-dropdown-con-tall > span > div {\n      height: 100%;\n}\n.va-topbar .va-dropdown-con-tall > span > div > a {\n        height: 100%;\n        border-radius: 0 !important;\n}\n\n/*# sourceMappingURL=VaDropdown.vue.map */", map: {"version":3,"sources":["VaDropdown.vue","/Users/ax/Documents/prj/cue/app/aaa/src/Dropdown/VaDropdown.vue"],"names":[],"mappings":"AAAA,QAAQ;AACR,YAAY;AACZ,UAAU;AACV,QAAQ;AACR,SAAS;AACT,UAAU;AACV,OAAO;AACP,iBAAiB;AACjB,eAAe;AACf,WAAW;AACX,YAAY;ACwKZ;;EA7BA;;;GDrIG;ECmJH;;;;;;;;;;;;GDtIG;ACkJH;AAjDA;;IAEA,iBAAA;IACA,qFAuDA;AAAA;AA1DA;;MAKA,kCAuDA;AAAA;AA5DA;;QAOA,iCAsDA;AAAA;AA7DA;;;;MAYA,cAAA;AAAA;AAZA;;;;QAcA,mBAiDA;AAAA;AA/DA;;;;QAiBA,cAgDA;QA/CA,mBAAA;AAAA;AASA;;IAEA,mBAAA;IACA,cAAA;AAAA;AAHA;;MAKA,mBAAA;MACA,cAAA;AAAA;AAwCA;;EAEA,eAAA;AAAA;AAGA;EACA,kBAAA;EACA,qBAAA;EACA,sBAAA;AAAA;AAHA;IAMA,kBAAA;IACA,cAAA;IACA,SAAA;IACA,OAAA;IACA,aAAA;IACA,WAAA;IACA,gBAAA;IACA,iBAAA;IACA,sBAAA;IACA,cAAA;IACA,eAAA;IACA,kBAAA;IACA,kBAAA;IACA,qBAAA;IACA,iCAAA;AAAA;AApBA;MAuBA,aAAA;MACA,wBAAA;AAAA;AAxBA;MA4BA,kBAAA;AAAA;AA5BA;MAgCA,QAAA;MACA,sBAAA;AAAA;AAjCA;MAqCA,kBAAA;AAAA;AArCA;MA0CA,UAAA;AAAA;AA1CA;;MAkDA,mBAAA;MACA,cAAA;AAAA;AAnDA;;QAuDA,6BAAA;QACA,kBAAA;QACA,QAAA;AAAA;AAzDA;;MAgEA,aAAA;MACA,8BAAA;MACA,iBAAA;MACA,mBAAA;MACA,gBAAA;MACA,uBAAA;MACA,gBAAA;AAAA;AAtEA;;QAyEA,qBAAA;AAAA;AAzEA;;QA6EA,qBAAA;QACA,aAAA;AAAA;AA9EA;;QAkFA,aAAA;AAAA;AAMA;EACA,kBAAA;AAAA;AAGA;EACA,UAAA;AAAA;;AAGA;;CDlKC;ACqKD;;;;;;;;EAQA,2BAAA;AAAA;;AAGA;;;CDlKC;ACuKD;EAGA,yBAAA;EACA,cAAA;AAAA;AAJA;EAQA,mBAAA;AAAA;AAKA;EAGA,yBAAA;EACA,cAAA;AAAA;AAJA;EAQA,mBAAA;AAAA;AAKA;EAEA,YAAA;AAAA;AAFA;IAIA,YAAA;AAAA;AAJA;MAMA,YAAA;AAAA;AANA;QAQA,YAAA;QACA,2BAAA;AAAA;;ADjLA,yCAAyC","file":"VaDropdown.vue","sourcesContent":["/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-dropdown,\n.va--theme-light.va-dropdown {\n  /*\n  The following styles apply to a button that exists as a dropdown\n  trigger that is currently active, meaning the dropdown is opened.\n  */\n  /*\n  If we want, we can apply different styles to different types of buttons,\n  doing something like this:\n\n  &-selected {\n    >span>div>a.va-btn-primary {\n      background: $B300;\n      color: $N20;\n    }\n  }\n\n  For now, though, we just use one style for all types of buttons.\n  */ }\n  .va-dropdown-con .va-dropdown-menu,\n  .va--theme-light.va-dropdown-con .va-dropdown-menu {\n    background: white;\n    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px; }\n    .va-dropdown-con .va-dropdown-menu::-webkit-scrollbar-thumb,\n    .va--theme-light.va-dropdown-con .va-dropdown-menu::-webkit-scrollbar-thumb {\n      background: rgba(23, 47, 87, 0.22); }\n      .va-dropdown-con .va-dropdown-menu::-webkit-scrollbar-thumb:hover,\n      .va--theme-light.va-dropdown-con .va-dropdown-menu::-webkit-scrollbar-thumb:hover {\n        background: rgba(9, 30, 66, 0.45); }\n    .va-dropdown-con .va-dropdown-menu > li > a,\n    .va-dropdown-con .va-dropdown-menu > div > li > a,\n    .va--theme-light.va-dropdown-con .va-dropdown-menu > li > a,\n    .va--theme-light.va-dropdown-con .va-dropdown-menu > div > li > a {\n      color: #172c4f; }\n      .va-dropdown-con .va-dropdown-menu > li > a:hover,\n      .va-dropdown-con .va-dropdown-menu > div > li > a:hover,\n      .va--theme-light.va-dropdown-con .va-dropdown-menu > li > a:hover,\n      .va--theme-light.va-dropdown-con .va-dropdown-menu > div > li > a:hover {\n        background: #e8eaef; }\n      .va-dropdown-con .va-dropdown-menu > li > a:active,\n      .va-dropdown-con .va-dropdown-menu > div > li > a:active,\n      .va--theme-light.va-dropdown-con .va-dropdown-menu > li > a:active,\n      .va--theme-light.va-dropdown-con .va-dropdown-menu > div > li > a:active {\n        color: inherit;\n        background: #b3d4ff; }\n  .va-dropdown-selected > span > div > a.va-btn,\n  .va--theme-light.va-dropdown-selected > span > div > a.va-btn {\n    background: #e0edff;\n    color: #0052cc; }\n    .va-dropdown-selected > span > div > a.va-btn:hover,\n    .va--theme-light.va-dropdown-selected > span > div > a.va-btn:hover {\n      background: #e0edff;\n      color: #0052cc; }\n\n.va-dropdown-con > span > div > a.va-btn,\n.va-dropdown-con > span > div > a.va-btn:hover {\n  cursor: default; }\n\n.va-dropdown-con {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n  .va-dropdown-con .va-dropdown-menu {\n    position: absolute;\n    overflow: auto;\n    top: 100%;\n    left: 0;\n    z-index: 1000;\n    float: left;\n    min-width: 160px;\n    max-height: 300px;\n    box-sizing: border-box;\n    padding: 4px 0;\n    margin-top: 6px;\n    margin-bottom: 6px;\n    border-radius: 4px;\n    list-style-type: none;\n    -webkit-overflow-scrolling: touch; }\n    .va-dropdown-con .va-dropdown-menu hr {\n      margin: 5px 0;\n      border-bottom-width: 1px; }\n    .va-dropdown-con .va-dropdown-menu::-webkit-scrollbar-track {\n      border-radius: 5px; }\n    .va-dropdown-con .va-dropdown-menu::-webkit-scrollbar {\n      width: 0;\n      padding: 5px 2px 5px 0; }\n    .va-dropdown-con .va-dropdown-menu::-webkit-scrollbar-thumb {\n      border-radius: 5px; }\n    .va-dropdown-con .va-dropdown-menu:hover::-webkit-scrollbar {\n      width: 7px; }\n    .va-dropdown-con .va-dropdown-menu > li,\n    .va-dropdown-con .va-dropdown-menu > div > li {\n      white-space: nowrap;\n      display: block; }\n      .va-dropdown-con .va-dropdown-menu > li a i,\n      .va-dropdown-con .va-dropdown-menu > div > li a i {\n        padding-left: 12px !important;\n        position: relative;\n        top: 3px; }\n    .va-dropdown-con .va-dropdown-menu > li > a,\n    .va-dropdown-con .va-dropdown-menu > div > li > a {\n      display: flex;\n      justify-content: space-between;\n      padding: 5px 12px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      line-height: 1.5; }\n      .va-dropdown-con .va-dropdown-menu > li > a:hover,\n      .va-dropdown-con .va-dropdown-menu > div > li > a:hover {\n        text-decoration: none; }\n      .va-dropdown-con .va-dropdown-menu > li > a:active,\n      .va-dropdown-con .va-dropdown-menu > div > li > a:active {\n        text-decoration: none;\n        outline: none; }\n      .va-dropdown-con .va-dropdown-menu > li > a:focus,\n      .va-dropdown-con .va-dropdown-menu > div > li > a:focus {\n        outline: none; }\n\n.va-dropdown {\n  position: relative; }\n\n.va-dropdown-toggle:focus {\n  outline: 0; }\n\n/**\nDropdowns, while active, don't need a focus ring. It shows focus state by changing the background color.\n*/\n.va-dropdown-con.va-dropdown-selected,\n> span,\n> div,\n> .va-btn:focus:not(:active):not(.va-select-btn-open),\n.va-dropdown-con.va-dropdown-selected,\n> span,\n> div,\n> .va-btn-focused:not(:active):not(.va-select-btn-open) {\n  box-shadow: none !important; }\n\n/**\nThe following styles apply to a button that exists as a dropdown trigger\nthat resides inside of the va-topbar element.\n*/\n.va-topbar--theme-blue .va-dropdown-selected > span > div > a.va-btn {\n  background-color: #0747a6;\n  color: #f3f4f6; }\n\n.va-topbar--theme-blue .va-dropdown-selected > span > div > a.va-btn-primary-dark {\n  background: #0052cc; }\n\n.va-topbar--theme-purple .va-dropdown-selected > span > div > a.va-btn {\n  background-color: #5243a8;\n  color: #f3f4f6; }\n\n.va-topbar--theme-purple .va-dropdown-selected > span > div > a.va-btn-purple-dark {\n  background: #5243a8; }\n\n.va-topbar .va-dropdown-con-tall {\n  height: 100%; }\n  .va-topbar .va-dropdown-con-tall > span {\n    height: 100%; }\n    .va-topbar .va-dropdown-con-tall > span > div {\n      height: 100%; }\n      .va-topbar .va-dropdown-con-tall > span > div > a {\n        height: 100%;\n        border-radius: 0 !important; }\n\n/*# sourceMappingURL=VaDropdown.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$r = undefined;
  /* module identifier */
  const __vue_module_identifier__$r = undefined;
  /* functional template */
  const __vue_is_functional_template__$r = false;
  /* style inject SSR */
  

  
  var VaDropdown = normalizeComponent(
    { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
    __vue_inject_styles__$r,
    __vue_script__$r,
    __vue_scope_id__$r,
    __vue_is_functional_template__$r,
    __vue_module_identifier__$r,
    createInjector,
    undefined
  );

/**
 * the hue value H runs from 0 to 360 degrees. the saturation
 * S is the degree of strength or purity and is from 0 to 1.
 * purity is how much white is added to the color, so S=1 makes
 * the purest color (no white). brightness B ranges from 0 to 1,
 * where 0 is black.
 */
const rgbToHsb = (rgb) => {
  let hsb = { h: 0, s: 0, b: 0 };
  let min = Math.min(rgb.r, rgb.g, rgb.b);
  let max = Math.max(rgb.r, rgb.g, rgb.b);
  let delta = max - min;

  hsb.b = max;
  hsb.s = max !== 0 ? 255 * delta / max : 0;

  if (hsb.s !== 0) {
    if (rgb.r === max) {
      hsb.h = (rgb.g - rgb.b) / delta; // between yellow and magenta
    } else if (rgb.g === max) {
      hsb.h = 2 + (rgb.b - rgb.r) / delta; // between cyan and yellow
    } else {
      hsb.h = 4 + (rgb.r - rgb.g) / delta; // between magenta and cyan
    }
  } else {
    hsb.h = -1;
  }

  if (max === min) {
    hsb.h = 0;
  }

  hsb.h *= 60; // degrees

  if (hsb.h < 0) {
    hsb.h += 360;
  }

  hsb.s *= 100 / 255;
  hsb.b *= 100 / 255;

  // return {h:Math.round(hsb.h), s:Math.round(hsb.s), b:Math.round(hsb.b)}
  return hsb
};

const hsbToRgb = (hsb) => {
  let rgb = {};
  let h = hsb.h;
  let s = hsb.s * 255 / 100;
  let b = hsb.b * 255 / 100;

  if (s === 0) {
    rgb.r = rgb.g = rgb.b = b;
  } else {
    let p = b;
    let q = (255 - s) * b / 255;
    let t = (p - q) * (h % 60) / 60;
    if (h === 360) h = 0;

    if (h < 60) {
      rgb.r = p;
      rgb.b = q;
      rgb.g = q + t;
    } else if (h < 120) {
      rgb.g = p;
      rgb.b = q;
      rgb.r = p - t;
    } else if (h < 180) {
      rgb.g = p;
      rgb.r = q;
      rgb.b = q + t;
    } else if (h < 240) {
      rgb.b = p;
      rgb.r = q;
      rgb.g = p - t;
    } else if (h < 300) {
      rgb.b = p;
      rgb.g = q;
      rgb.r = q + t;
    } else if (h < 360) {
      rgb.r = p;
      rgb.g = q;
      rgb.b = p - t;
    } else {
      rgb.r = 0;
      rgb.g = 0;
      rgb.b = 0;
    }
  }
  return { r: Math.round(rgb.r), g: Math.round(rgb.g), b: Math.round(rgb.b) }
};

const hexToHsb = (h) => {
  let hex = h.indexOf('#') > -1 ? h.substring(1) : h;
  if (hex.length === 3) {
    let num = hex.split('');
    hex = num[0] + num[0] + num[1] + num[1] + num[2] + num[2];
  }
  hex = parseInt(hex, 16);
  let rgb = { r: hex >> 16, g: (hex & 0x00FF00) >> 8, b: (hex & 0x0000FF) };

  return rgbToHsb(rgb)
};

const hsbToHex = (hsb) => {
  let rgb = hsbToRgb(hsb);
  let hex = [
    rgb.r.toString(16),
    rgb.g.toString(16),
    rgb.b.toString(16)
  ];

  for (let i = 0; i < hex.length; i++) {
    if (hex[i].length === 1) {
      hex[i] = '0' + hex[i];
    }
  }

  return '#' + hex.join('')
};

// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb/5623914#5623914
const rgbToHex = (rgb) => {
  return '#' + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1)
};

// export const rgbToHex = (rgb) => {
//   let hsb = rgbToHsb(rgb)
//   return hsbToHex(hsb)
// }

//

var script$s = {
  name: 'VaInput',
  mixins: [inputMixin, events],
  inheritAttrs: false,
  props: {
    value: {},
    size: {
      type: String
    },
    onChange: {
      type: Function
    },
    type: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: 'undefined'
    },
    iconStyle: {
      type: String,
      default: 'regular',
      required: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false,
      required: false
    },
    buttons: {
      type: Boolean,
      default: false,
      required: false
    },
    loading: {
      type: Boolean,
      default: undefined
    },
    prefix: {
      type: String,
      default: '',
      required: false
    },
    postfix: {
      type: String,
      default: '',
      required: false
    },
    noVModel: {
      type: Boolean,
      default: false,
      required: false
    },
    theme: {
      type: String,
      default: 'primary',
      required: false,
      validator (v) {
        return [
          'default',
          'primary',
          'success',
          'warning',
          'danger',
          'purple'
        ].includes(v)
      }
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    let cv = this.value;
    return {
      focused: false,
      currentValue: cv,
      position: {},
      showButtonsWarning: false,
      autofilled: false
    }
  },
  created () {
    this.$on('Va@inputOpsCancel', val => {
      this.currentValue = val;
    });
    this.$on('Va@inputOpsConfirm', () => {});
    this.$on('Va@inputOpsBlur', () => {
      this.focused = false;
    });
    this.$on('Va@pageScroll', () => {
      this.setPosition();
    });
  },
  mounted () {
    window.addEventListener('resize', this.setPosition, false);
    window.addEventListener('scroll', this.setPosition, false);

    if (this.buttons && this.loading === undefined) {
      this.showButtonsWarning = true;
    }

    if (this.autofocus) {
      this.focused = true;
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.setPosition, false);
  },
  components: {
    validate
  },
  computed: {
    inputStyleObj () {
      let { type } = this;
      let style = {};

      if (type === 'file') {
        style['opacity'] = '0.2';
        style['z-index'] = '1';
        style['position'] = 'absolute';
      }
      style['width'] = this.actualWidth;

      return style
    },
    classObj () {
      let {
        classPrefix,
        validStatus,
        clearable,
        size,
        icon,
        prefix,
        postfix,
        type
      } = this;
      let classes = {};

      classes[classPrefix + '-has-error'] = validStatus === 'error';
      classes[classPrefix + '-has-success'] = validStatus === 'success';
      classes[classPrefix + '-has-warn'] = validStatus === 'warn';
      classes[classPrefix + '-input-con'] = true;
      classes[classPrefix + '-clearable'] = clearable;
      classes[classPrefix + '-show-icon'] = !!icon;
      size ? (classes[classPrefix + '-input-' + size] = true) : '';
      classes[classPrefix + '-input-has-prefix'] = prefix !== '';
      classes[classPrefix + '-input-has-postfix'] =
        postfix !== '';
      classes[classPrefix + '-input-file'] = type === 'file';
      classes['inline'] = true;

      return classes
    },
    inputClassObj () {
      let { classPrefix, theme } = this;
      let classes = {};

      classes[classPrefix + '-form-control'] = true;
      classes[classPrefix + '-form-control-' + theme] = true;

      return classes
    }
  },
  watch: {
    loading (val) {
      this.broadcast('VaInputOps', 'Va@inputLoading', val);
    },
    currentValue (val) {
      this.broadcast('VaInputOps', 'Va@inputCurrentValueUpdate', val);
    },
    value (val) {
      this.currentValue = val;
      this.$refs.input.value = val;
    }
  },
  methods: {
    clean () {
      this.$emit('input', '');
      this.$emit('clean');
      this.$refs.input.value = '';
      this.$refs.input.focus();
    },
    update (val) {
      this.$emit('input', val);
      this.$emit('change', val);
      if (this.buttons) {
        this.broadcast('VaInputOps', 'Va@inputUpdate', this.currentValue);
      }
    },
    onBlur () {
      this.$emit('blur', this.value);
      if (this.buttons) {
        this.broadcast('VaInputOps', 'Va@inputBlur', this.currentValue);
      }
    },
    blur () {
      this.focused = false;
    },
    onFocus () {
      this.$emit('focus', this.value);
      if (this.buttons) {
        this.position = this.getPosition();
        this.broadcast('VaInputOps', 'Va@inputFocus', this.currentValue);
      }
    },
    focus () {
      setTimeout(() => {
        this.focused = true;
        this.$refs.input.focus();
      }, 50);
    },
    enterPressed (e) {
      this.$emit('keyup', e);
      this.opsConfirm();
    },
    setPosition () {
      this.position = this.getPosition();
    },
    getPosition () {
      let rect = this.$refs.input.getBoundingClientRect();
      return {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        x: rect.x,
        y: rect.y
      }
    },
    opsConfirm () {
      this.$emit('confirm', this.value);
    },
    opsCancel () {
      this.$emit('cancel');
    }
  }
};

/* script */
const __vue_script__$s = script$s;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$s.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Input/VaInput.vue";

/* template */
var __vue_render__$s = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return !_vm.showButtonsWarning
    ? _c(
        "div",
        { class: _vm.classObj, style: { width: _vm.actualWidth } },
        [
          _vm.prefix !== ""
            ? _c("span", { class: _vm.classPrefix + "-input-prefix" }, [
                _vm._v(_vm._s(_vm.prefix))
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.noVModel
            ? _c(
                "input",
                _vm._b(
                  {
                    ref: "input",
                    class: _vm.inputClassObj,
                    style: _vm.inputStyleObj,
                    attrs: {
                      name: _vm.name,
                      readonly: _vm.readonly,
                      disabled: _vm.disabled,
                      placeholder: _vm.placeholder,
                      autofocus: _vm.autofocus,
                      type: _vm.type,
                      tabindex: "0"
                    },
                    domProps: { value: _vm.value },
                    on: {
                      blur: _vm.onBlur,
                      focus: _vm.onFocus,
                      input: function($event) {
                        _vm.update($event.target.value);
                      },
                      keyup: function($event) {
                        if (
                          !("button" in $event) &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.enterPressed($event)
                      }
                    }
                  },
                  "input",
                  _vm.$attrs,
                  false
                )
              )
            : _vm.type === "checkbox"
              ? _c(
                  "input",
                  _vm._b(
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.currentValue,
                          expression: "currentValue"
                        }
                      ],
                      ref: "input",
                      class: _vm.inputClassObj,
                      style: _vm.inputStyleObj,
                      attrs: {
                        name: _vm.name,
                        readonly: _vm.readonly,
                        disabled: _vm.disabled,
                        placeholder: _vm.placeholder,
                        autofocus: _vm.autofocus,
                        tabindex: "0",
                        type: "checkbox"
                      },
                      domProps: {
                        value: _vm.value,
                        checked: Array.isArray(_vm.currentValue)
                          ? _vm._i(_vm.currentValue, _vm.value) > -1
                          : _vm.currentValue
                      },
                      on: {
                        blur: _vm.onBlur,
                        focus: _vm.onFocus,
                        input: function($event) {
                          _vm.update($event.target.value);
                        },
                        keyup: function($event) {
                          if (
                            !("button" in $event) &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.enterPressed($event)
                        },
                        change: function($event) {
                          var $$a = _vm.currentValue,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false;
                          if (Array.isArray($$a)) {
                            var $$v = _vm.value,
                              $$i = _vm._i($$a, $$v);
                            if ($$el.checked) {
                              $$i < 0 && (_vm.currentValue = $$a.concat([$$v]));
                            } else {
                              $$i > -1 &&
                                (_vm.currentValue = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)));
                            }
                          } else {
                            _vm.currentValue = $$c;
                          }
                        }
                      }
                    },
                    "input",
                    _vm.$attrs,
                    false
                  )
                )
              : _vm.type === "radio"
                ? _c(
                    "input",
                    _vm._b(
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.currentValue,
                            expression: "currentValue"
                          }
                        ],
                        ref: "input",
                        class: _vm.inputClassObj,
                        style: _vm.inputStyleObj,
                        attrs: {
                          name: _vm.name,
                          readonly: _vm.readonly,
                          disabled: _vm.disabled,
                          placeholder: _vm.placeholder,
                          autofocus: _vm.autofocus,
                          tabindex: "0",
                          type: "radio"
                        },
                        domProps: {
                          value: _vm.value,
                          checked: _vm._q(_vm.currentValue, _vm.value)
                        },
                        on: {
                          blur: _vm.onBlur,
                          focus: _vm.onFocus,
                          input: function($event) {
                            _vm.update($event.target.value);
                          },
                          keyup: function($event) {
                            if (
                              !("button" in $event) &&
                              _vm._k(
                                $event.keyCode,
                                "enter",
                                13,
                                $event.key,
                                "Enter"
                              )
                            ) {
                              return null
                            }
                            return _vm.enterPressed($event)
                          },
                          change: function($event) {
                            _vm.currentValue = _vm.value;
                          }
                        }
                      },
                      "input",
                      _vm.$attrs,
                      false
                    )
                  )
                : _c(
                    "input",
                    _vm._b(
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.currentValue,
                            expression: "currentValue"
                          }
                        ],
                        ref: "input",
                        class: _vm.inputClassObj,
                        style: _vm.inputStyleObj,
                        attrs: {
                          name: _vm.name,
                          readonly: _vm.readonly,
                          disabled: _vm.disabled,
                          placeholder: _vm.placeholder,
                          autofocus: _vm.autofocus,
                          tabindex: "0",
                          type: _vm.type
                        },
                        domProps: { value: _vm.value, value: _vm.currentValue },
                        on: {
                          blur: _vm.onBlur,
                          focus: _vm.onFocus,
                          input: [
                            function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.currentValue = $event.target.value;
                            },
                            function($event) {
                              _vm.update($event.target.value);
                            }
                          ],
                          keyup: function($event) {
                            if (
                              !("button" in $event) &&
                              _vm._k(
                                $event.keyCode,
                                "enter",
                                13,
                                $event.key,
                                "Enter"
                              )
                            ) {
                              return null
                            }
                            return _vm.enterPressed($event)
                          }
                        }
                      },
                      "input",
                      _vm.$attrs,
                      false
                    )
                  ),
          _vm._v(" "),
          _vm.icon !== "undefined" || _vm.clearable
            ? _c(
                "div",
                { class: _vm.classPrefix + "-input-icon-wrapper" },
                [
                  _vm.clearable
                    ? _c("va-icon", {
                        class: _vm.classPrefix + "-input-clearable",
                        attrs: { type: "times", "icon-style": "solid" },
                        nativeOn: {
                          click: function($event) {
                            $event.stopPropagation();
                            return _vm.clean($event)
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("va-icon", {
                    class: _vm.classPrefix + "-input-show-icon",
                    attrs: { type: _vm.icon, "icon-style": _vm.iconStyle }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.postfix !== ""
            ? _c("span", { class: _vm.classPrefix + "-input-postfix" }, [
                _vm._v(_vm._s(_vm.postfix))
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.buttons
            ? _c("va-input-ops", {
                attrs: { "parent-position": _vm.position },
                on: { confirm: _vm.opsConfirm, cancel: _vm.opsCancel }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("validate", {
            attrs: {
              name: _vm.name,
              rules: _vm.rules,
              "custom-validate": _vm.customValidate,
              current: _vm.value
            },
            model: {
              value: _vm.validStatus,
              callback: function($$v) {
                _vm.validStatus = $$v;
              },
              expression: "validStatus"
            }
          })
        ],
        1
      )
    : _c(
        "div",
        [
          _c("va-alert", { attrs: { type: "warning" } }, [
            _c("h4", [_vm._v("Hold on")]),
            _vm._v(" "),
            _c("p", [
              _vm._v("\n      If you're going to use\n      "),
              _c("b", [_vm._v("buttons")]),
              _vm._v(
                " with this input component, you need\n      to also use the\n      "
              ),
              _c("b", [_vm._v("loading")]),
              _vm._v(" prop.\n      Handle the\n      "),
              _c("b", [_vm._v("@confirm")]),
              _vm._v(
                " event emitted by the input component by setting the\n      "
              ),
              _c("b", [_vm._v("loading")]),
              _vm._v(" prop to true,\n      "),
              _c("i", [_vm._v("doing some task")]),
              _vm._v(", and finally setting the\n      "),
              _c("b", [_vm._v("loading")]),
              _vm._v(
                " prop back to false.\n      It is important that events happen in that order, because the input component\n      is watching the\n      "
              ),
              _c("b", [_vm._v("loading")]),
              _vm._v(
                " prop for those changes. That's how it knows to hide\n      the confirm and cancel buttons.\n    "
              )
            ])
          ])
        ],
        1
      )
};
var __vue_staticRenderFns__$s = [];
__vue_render__$s._withStripped = true;

  /* style */
  const __vue_inject_styles__$s = function (inject) {
    if (!inject) return
    inject("data-v-33125107_0", { source: "/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-input-con .va-input-clearable,\n.va-input-con .va-input-show-icon,\n.va--theme-light.va-input-con .va-input-clearable,\n.va--theme-light.va-input-con .va-input-show-icon {\n  color: #97a0af;\n}\n.va-input-con .va-input-clearable:hover,\n.va--theme-light.va-input-con .va-input-clearable:hover {\n  color: #79859a;\n}\n.va-input-con .va-input-clearable:active, .va-input-con .va-input-clearable:focus,\n.va--theme-light.va-input-con .va-input-clearable:active,\n.va--theme-light.va-input-con .va-input-clearable:focus {\n  color: #4d9aff;\n}\n.va-input-ops,\n.va--theme-light.va-input-ops {\n  background: transparent;\n}\n.va-input-ops .va-btn,\n  .va--theme-light.va-input-ops .va-btn {\n    box-shadow: 0 2px 4px -1px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.25);\n}\n.va-input-con {\n  position: relative;\n  display: flex;\n}\n.va-input-con:hover .va-input-clearable {\n    opacity: 1;\n}\n.va-clearable:hover .va-input-show-icon {\n  display: none;\n}\n\n/*the icon*/\n.va-input-icon-wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  height: 100%;\n  width: 30px;\n}\n.va-input-file {\n  overflow: hidden;\n}\n.va-input-clearable,\n.va-input-show-icon {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 26px;\n  padding: 0;\n  -webkit-transition: opacity 0.1s linear;\n  transition: opacity 0.1s linear;\n}\n.va-input-clearable {\n  opacity: 0;\n  cursor: default;\n}\n.va-input-show-icon {\n  opacity: 1;\n}\n\n/*positioning the icon based on input size*/\n/*sm*/\n.va-input-sm .va-input-icon-wrapper i {\n  top: 8px;\n}\n\n/*xs*/\n.va-input-xs .va-input-icon-wrapper i {\n  font-size: 12px !important;\n  top: 8px;\n}\n.va-input-ops {\n  position: absolute;\n  z-index: 4;\n}\n.va-input-prefix,\n.va-input-postfix {\n  display: flex;\n  background: #f4f5f7;\n  border: 2px solid #e0e2e6;\n  line-height: 2.15em;\n  padding: 0 8px;\n  color: #5d6b83;\n  white-space: nowrap;\n}\n.va-input-prefix {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-right: 0;\n}\n.va-input-postfix {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-left: 0;\n}\n.va-input-has-prefix .va-form-control {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n}\n.va-input-has-postfix .va-form-control {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n.va-input-has-postfix .va-input-icon-wrapper {\n  position: relative;\n  width: initial;\n  left: initial;\n  right: initial;\n}\n\n/*# sourceMappingURL=VaInput.vue.map */", map: {"version":3,"sources":["VaInput.vue","/Users/ax/Documents/prj/cue/app/aaa/src/Input/VaInput.vue"],"names":[],"mappings":"AAAA,QAAQ;AACR,YAAY;AACZ,UAAU;AACV,QAAQ;AACR,SAAS;AACT,UAAU;AACV,OAAO;AACP,iBAAiB;AACjB,eAAe;AACf,WAAW;AACX,YAAY;AC6VZ;;;;EAEA,cAAA;AAAA;AAIA;;EACA,cAAA;AAAA;AAGA;;;EAEA,cAAA;AAAA;AAsBA;;EAhBA,uBAkBA;AAAA;AAhBA;;IACA,+EAkBA;AAAA;AAMA;EACA,kBAAA;EACA,aAAA;AAAA;AAFA;IAMA,UAAA;AAAA;AAKA;EACA,aAAA;AAAA;;AAGA,WAAA;AAEA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,YAAA;EACA,WAAA;AAAA;AAGA;EACA,gBAAA;AAAA;AAGA;;EAEA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,eAAA;EACA,UAAA;EACA,uCAAA;EACA,+BAAA;AAAA;AAGA;EACA,UAAA;EACA,eAAA;AAAA;AAGA;EACA,UAAA;AAAA;;AAGA,2CAAA;AAEA,KAAA;AAEA;EAGA,QAAA;AAAA;;AAKA,KAAA;AAEA;EAGA,0BAAA;EACA,QAAA;AAAA;AAKA;EACA,kBAAA;EACA,UAAA;AAAA;AAGA;;EAEA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,cAAA;EACA,cAAA;EACA,mBAAA;AAAA;AAEA;EACA,2BAAA;EACA,8BAAA;EACA,eAAA;AAAA;AAEA;EACA,4BAAA;EACA,+BAAA;EACA,cAAA;AAAA;AAGA;EAEA,2BAAA;EACA,8BAAA;AAAA;AAGA;EAEA,4BAAA;EACA,+BAAA;AAAA;AAIA;EAEA,kBAAA;EACA,cAAA;EACA,aAAA;EACA,cAAA;AAAA;;ADlZA,sCAAsC","file":"VaInput.vue","sourcesContent":["/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-input-con .va-input-clearable,\n.va-input-con .va-input-show-icon,\n.va--theme-light.va-input-con .va-input-clearable,\n.va--theme-light.va-input-con .va-input-show-icon {\n  color: #97a0af; }\n\n.va-input-con .va-input-clearable:hover,\n.va--theme-light.va-input-con .va-input-clearable:hover {\n  color: #79859a; }\n\n.va-input-con .va-input-clearable:active, .va-input-con .va-input-clearable:focus,\n.va--theme-light.va-input-con .va-input-clearable:active,\n.va--theme-light.va-input-con .va-input-clearable:focus {\n  color: #4d9aff; }\n\n.va-input-ops,\n.va--theme-light.va-input-ops {\n  background: transparent; }\n  .va-input-ops .va-btn,\n  .va--theme-light.va-input-ops .va-btn {\n    box-shadow: 0 2px 4px -1px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.25); }\n\n.va-input-con {\n  position: relative;\n  display: flex; }\n  .va-input-con:hover .va-input-clearable {\n    opacity: 1; }\n\n.va-clearable:hover .va-input-show-icon {\n  display: none; }\n\n/*the icon*/\n.va-input-icon-wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  height: 100%;\n  width: 30px; }\n\n.va-input-file {\n  overflow: hidden; }\n\n.va-input-clearable,\n.va-input-show-icon {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 26px;\n  padding: 0;\n  -webkit-transition: opacity 0.1s linear;\n  transition: opacity 0.1s linear; }\n\n.va-input-clearable {\n  opacity: 0;\n  cursor: default; }\n\n.va-input-show-icon {\n  opacity: 1; }\n\n/*positioning the icon based on input size*/\n/*sm*/\n.va-input-sm .va-input-icon-wrapper i {\n  top: 8px; }\n\n/*xs*/\n.va-input-xs .va-input-icon-wrapper i {\n  font-size: 12px !important;\n  top: 8px; }\n\n.va-input-ops {\n  position: absolute;\n  z-index: 4; }\n\n.va-input-prefix,\n.va-input-postfix {\n  display: flex;\n  background: #f4f5f7;\n  border: 2px solid #e0e2e6;\n  line-height: 2.15em;\n  padding: 0 8px;\n  color: #5d6b83;\n  white-space: nowrap; }\n\n.va-input-prefix {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-right: 0; }\n\n.va-input-postfix {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-left: 0; }\n\n.va-input-has-prefix .va-form-control {\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px; }\n\n.va-input-has-postfix .va-form-control {\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n.va-input-has-postfix .va-input-icon-wrapper {\n  position: relative;\n  width: initial;\n  left: initial;\n  right: initial; }\n\n/*# sourceMappingURL=VaInput.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$s = undefined;
  /* module identifier */
  const __vue_module_identifier__$s = undefined;
  /* functional template */
  const __vue_is_functional_template__$s = false;
  /* style inject SSR */
  

  
  var VaInput = normalizeComponent(
    { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
    __vue_inject_styles__$s,
    __vue_script__$s,
    __vue_scope_id__$s,
    __vue_is_functional_template__$s,
    __vue_module_identifier__$s,
    createInjector,
    undefined
  );

//

const components$8 = { 'va-input':VaInput };

var script$t = {
  name: 'VaColorPickerPopup',
  components: components$8,
  props: {
    color: {
      type: String
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    return {
      gradientPosition: {},
      hueSliderPosition: {},
      alphaSliderPosition: {},
      cursorOffsetLeft: 5,
      cursorOffsetTop: 5,
      alpha: 1,
      hsb: {
        h: 0,
        s: 0,
        b: 0
      },
      rgb: {
        r: 255,
        g: 255,
        b: 255
      },
      hex: '',
      x: 0,
      y: 0
    }
  },
  mounted () {
    this.hex = this.color;
    this.hsb = hexToHsb(this.hex);
    this.rgb = hsbToRgb(this.hsb);

    this.emitColors();
  },
  computed: {
    gradientStyleObj () {
      let { hsb, alpha } = this;
      let style = {};

      style['background'] = 'hsl(' + hsb.h + ', 100%, 50%, ' + alpha + ')';

      return style
    },
    alphaStyleObj () {
      let { hsb } = this;
      let style = {};

      style['background'] =
        'linear-gradient(180deg, hsl(' +
        hsb.h +
        ', 100%, 50%, 0), hsl(' +
        hsb.h +
        ', 100%, 50%, 1))';

      return style
    }
  },
  methods: {
    doShow () {
      setTimeout(() => {
        this.hsb = hexToHsb(this.hex);
        this.updateControls();
      }, 50);
    },
    emitColors () {
      let colorsToEmit = {
        rgb: this.rgb,
        rgba: {
          r: this.rgb.r,
          g: this.rgb.g,
          b: this.rgb.b,
          a: this.alpha
        },
        hex: this.hex,
        hsb: this.hsb
      };

      this.$emit('change', colorsToEmit);
    },
    rChange (e) {
      let rgb = { r: e, g: this.rgb.g, b: this.rgb.b };
      this.hsb = rgbToHsb(rgb);
      this.hex = hsbToHex(rgbToHsb(rgb));
      this.updateControls();
    },
    gChange (e) {
      let rgb = { r: this.rgb.r, g: e, b: this.rgb.b };
      this.hsb = rgbToHsb(rgb);
      this.hex = hsbToHex(rgbToHsb(rgb));
      this.updateControls();
    },
    bChange (e) {
      let rgb = { r: this.rgb.r, g: this.rgb.g, b: e };
      this.hsb = rgbToHsb(rgb);
      this.hex = hsbToHex(rgbToHsb(rgb));
      this.updateControls();
    },
    aChange () {
      this.updateControls();
    },
    hexChange (e) {
      this.hsb = hexToHsb(e);
      this.rgb = hsbToRgb(this.hsb);
      this.updateControls();
    },
    prevent (e) {
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.cancelBubble = true;
      e.returnValue = false;
    },
    getElementRect (el) {
      let rect = el.getBoundingClientRect();
      return {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        x: rect.x,
        y: rect.y
      }
    },
    selectGradientColor () {
      this.hsb.s = (this.x / this.gradientPosition.width) * 100;
      this.hsb.b = 100 - (this.y / this.gradientPosition.height) * 100;

      this.rgb = hsbToRgb(this.hsb);
      this.hex = rgbToHex(this.rgb);

      this.emitColors();
    },
    makeGradientSelection (e) {
      /**
       * the offset for where the cursor appears in
       * relation to the system cursor.
       */
      let cursorOffsetArrowLeft = 1;
      let cursorOffsetArrowTop = 2;

      /**
       * absolute x and y position of the system cursor
       * in relation to the gradient
       */
      let arrowx = '';
      let arrowy = '';

      if (e.clientX && e.clientY) {
        arrowx = e.clientX - this.gradientPosition.left - cursorOffsetArrowLeft;
        arrowy = e.clientY - this.gradientPosition.top - cursorOffsetArrowTop;
      } else if (e.changedTouches !== undefined) {
        arrowx =
          e.changedTouches[0].clientX -
          this.gradientPosition.left -
          cursorOffsetArrowLeft;
        arrowy =
          e.changedTouches[0].clientY -
          this.gradientPosition.top -
          cursorOffsetArrowTop;
      }

      /**
       * absolute x and y position of the system cursor
       * in relation to the gradient, clamped within gradient bounds
       */
      let x = arrowx - this.cursorOffsetLeft;
      let y = arrowy - this.cursorOffsetTop;

      /**
       * clamp
       */
      if (x < 0 - this.cursorOffsetLeft) x = 0 - this.cursorOffsetLeft;
      if (x > this.gradientPosition.width - this.cursorOffsetLeft) { x = this.gradientPosition.width - this.cursorOffsetLeft; }

      if (y < 0 - this.cursorOffsetTop) y = 0 - this.cursorOffsetTop;
      if (y > this.gradientPosition.height - this.cursorOffsetTop) { y = this.gradientPosition.height - this.cursorOffsetTop; }

      /**
       * place the cursor, taking note that x and y are still affected
       * by cursorOffsetLeft and cursorOffsetTop.. we need to adjust before
       * actually figuring out the color
       */
      this.$refs.gradientCursor.style.top = y + 'px';
      this.$refs.gradientCursor.style.left = x + 'px';

      x += this.cursorOffsetLeft;
      y += this.cursorOffsetTop;

      this.x = x;
      this.y = y;

      this.selectGradientColor();
    },

    gradientOnMousedown (e) {
      this.prevent(e);
      this.gradientPosition = this.getElementRect(this.$refs.gradient);
      this.makeGradientSelection(e);

      // set hooks
      window.addEventListener('mousemove', this.gradientOnMousemove, false);
      window.addEventListener('mouseup', this.gradientOnMouseup, false);

      window.addEventListener('touchmove', this.gradientOnMousemove, false);
      window.addEventListener('touchend', this.gradientOnMouseup, false);
    },
    gradientOnMousemove (e) {
      this.makeGradientSelection(e);
    },
    gradientOnMouseup () {
      // remove hooks
      window.removeEventListener('mouseup', this.gradientOnMouseup, false);
      window.removeEventListener('mousemove', this.gradientOnMousemove, false);

      window.removeEventListener('touchend', this.gradientOnMouseup, false);
      window.removeEventListener('touchmove', this.gradientOnMousemove, false);
    },

    updateControls () {
      this.setHueSliderPositionFromHsb();
      this.setAlphaSliderPositionFromAlpha();
      this.setGradientCursorPositionFromHsb();
      this.emitColors();
    },

    makeHueSelection (e) {
      let cursorOffsetArrowTop = 2;
      /**
       * absolute y position of the system cursor
       * in relation to the hue track
       */
      let arrowy = '';

      if (e.clientY) {
        arrowy = e.clientY - this.hueSliderPosition.top - cursorOffsetArrowTop;
      } else if (e.changedTouches !== undefined) {
        arrowy =
          e.changedTouches[0].clientY -
          this.hueSliderPosition.top -
          cursorOffsetArrowTop;
      }

      /**
       * absolute y position of the system cursor
       * in relation to the hue track, clamped within the track
       */
      let y = arrowy - this.cursorOffsetTop;

      /**
       * clamp
       */
      if (y < 0 - this.cursorOffsetTop) y = 0 - this.cursorOffsetTop;
      if (y > this.hueSliderPosition.height - this.cursorOffsetTop) { y = this.hueSliderPosition.height - this.cursorOffsetTop; }

      /**
       * place the cursor, taking note that y is still affected
       * by cursorOffsetTop.. we need to adjust before
       * actually figuring out the color
       */
      this.$refs.hueCursor.style.top = y + 'px';

      y += this.cursorOffsetTop;

      this.hsb.h = (y / this.hueSliderPosition.height) * 360;

      this.selectGradientColor();
    },
    setAlphaSliderPositionFromAlpha () {
      this.alphaSliderPosition = this.getElementRect(this.$refs.alpha);
      this.$refs.alphaCursor.style.top =
        this.alpha * this.alphaSliderPosition.height -
        this.cursorOffsetTop +
        'px';
    },
    setHueSliderPositionFromHsb () {
      this.$refs.hueCursor.style.top = this.hsb.h / 2 + 'px';
    },
    setGradientCursorPositionFromHsb () {
      this.gradientPosition = this.getElementRect(this.$refs.gradient);

      /**
       * find where it needs to be in the x
       */
      let left =
        (this.hsb.s * this.gradientPosition.width) / 100 - this.cursorOffsetLeft;
      this.x = left;
      this.$refs.gradientCursor.style.left = left + 'px';
      this.x += this.cursorOffsetLeft;

      /**
       * find where it needs to be in the y
       */
      let top = this.hsb.b - 100;

      if (top < 0) {
        top *= -1;
      }

      top = (top * this.gradientPosition.height) / 100 - this.cursorOffsetTop;

      this.y = top;
      this.$refs.gradientCursor.style.top = top + 'px';
      this.y += this.cursorOffsetTop;
    },
    hueSliderOnMousedown (e) {
      this.prevent(e);
      this.hueSliderPosition = this.getElementRect(this.$refs.hue);
      this.makeHueSelection(e);

      // set hooks
      window.addEventListener('mousemove', this.hueSliderOnMousemove, false);
      window.addEventListener('mouseup', this.hueSliderOnMouseup, false);

      window.addEventListener('touchmove', this.hueSliderOnMousemove, false);
      window.addEventListener('touchend', this.hueSliderOnMouseup, false);
    },
    hueSliderOnMousemove (e) {
      this.makeHueSelection(e);
    },
    hueSliderOnMouseup () {
      // remove hooks
      window.removeEventListener('mouseup', this.hueSliderOnMouseup, false);
      window.removeEventListener('mousemove', this.hueSliderOnMousemove, false);

      window.removeEventListener('touchend', this.hueSliderOnMouseup, false);
      window.removeEventListener('touchmove', this.hueSliderOnMousemove, false);
    },

    makeAlphaSelection (e) {
      let cursorOffsetArrowTop = 2;
      /**
       * absolute y position of the system cursor
       * in relation to the alpha track
       */
      let arrowy = '';

      if (e.clientY) {
        arrowy = e.clientY - this.alphaSliderPosition.top - cursorOffsetArrowTop;
      } else if (e.changedTouches !== undefined) {
        arrowy =
          e.changedTouches[0].clientY -
          this.alphaSliderPosition.top -
          cursorOffsetArrowTop;
      }

      /**
       * absolute y position of the system cursor
       * in relation to the alpha track, clamped within the track
       */
      let y = arrowy - this.cursorOffsetTop;

      /**
       * clamp
       */
      if (y < 0 - this.cursorOffsetTop) y = 0 - this.cursorOffsetTop;
      if (y > this.alphaSliderPosition.height - this.cursorOffsetTop) { y = this.alphaSliderPosition.height - this.cursorOffsetTop; }
      /**
       * place the cursor, taking note that x and y are still affected
       * by cursorOffsetLeft and cursorOffsetTop.. we need to adjust before
       * actually figuring out the color
       */
      this.$refs.alphaCursor.style.top = y + 'px';

      y += this.cursorOffsetTop;

      this.alpha = ((y / this.alphaSliderPosition.height) * 100) / 100;

      this.selectGradientColor();
    },
    alphaSliderOnMousedown (e) {
      this.prevent(e);
      this.alphaSliderPosition = this.getElementRect(this.$refs.alpha);
      this.makeAlphaSelection(e);

      // set hooks
      window.addEventListener('mousemove', this.alphaSliderOnMousemove, false);
      window.addEventListener('mouseup', this.alphaSliderOnMouseup, false);

      window.addEventListener('touchmove', this.alphaSliderOnMousemove, false);
      window.addEventListener('touchend', this.alphaSliderOnMouseup, false);
    },
    alphaSliderOnMousemove (e) {
      this.makeAlphaSelection(e);
    },
    alphaSliderOnMouseup () {
      // remove hooks
      window.removeEventListener('mouseup', this.alphaSliderOnMouseup, false);
      window.removeEventListener(
        'mousemove',
        this.alphaSliderOnMousemove,
        false
      );

      window.removeEventListener('touchend', this.alphaSliderOnMouseup, false);
      window.removeEventListener(
        'touchmove',
        this.alphaSliderOnMousemove,
        false
      );
    }
  }
};

/* script */
const __vue_script__$t = script$t;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$t.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/ColorPicker/VaColorPickerPopup.vue";

/* template */
var __vue_render__$t = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("transition", { attrs: { name: "fadeDown" } }, [
    _c(
      "div",
      { ref: "popup", class: _vm.classPrefix + "-color-picker-popup" },
      [
        _c("div", { class: _vm.classPrefix + "-color-picker-upper" }, [
          _c(
            "div",
            {
              ref: "gradient",
              class: _vm.classPrefix + "-color-picker-gradient",
              style: _vm.gradientStyleObj,
              on: {
                mousedown: _vm.gradientOnMousedown,
                touchstart: _vm.gradientOnMousedown
              }
            },
            [
              _c("div", {
                class: _vm.classPrefix + "-color-picker-gradient-white"
              }),
              _vm._v(" "),
              _c("div", {
                class: _vm.classPrefix + "-color-picker-gradient-black"
              }),
              _vm._v(" "),
              _c("div", { class: _vm.classPrefix + "-color-picker-border" }),
              _vm._v(" "),
              _c("div", {
                ref: "gradientCursor",
                class: _vm.classPrefix + "-color-picker-gradient-cursor"
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "hue",
              class: _vm.classPrefix + "-color-picker-hue-track",
              on: {
                mousedown: _vm.hueSliderOnMousedown,
                touchstart: _vm.hueSliderOnMousedown
              }
            },
            [
              _c("div", { class: _vm.classPrefix + "-color-picker-border" }),
              _vm._v(" "),
              _c("div", {
                ref: "hueCursor",
                class: _vm.classPrefix + "-color-picker-hue-cursor"
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "alpha",
              class: _vm.classPrefix + "-color-picker-alpha-track",
              on: {
                mousedown: _vm.alphaSliderOnMousedown,
                touchstart: _vm.alphaSliderOnMousedown
              }
            },
            [
              _c("div", {
                class: _vm.classPrefix + "-color-picker-alpha-track-color",
                style: _vm.alphaStyleObj
              }),
              _vm._v(" "),
              _c("div", { class: _vm.classPrefix + "-color-picker-border" }),
              _vm._v(" "),
              _c("div", {
                ref: "alphaCursor",
                class: _vm.classPrefix + "-color-picker-alpha-cursor"
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { class: _vm.classPrefix + "-color-picker-lower" },
          [
            _c("va-input", {
              attrs: { size: "xs", width: "68px" },
              on: { change: _vm.hexChange },
              model: {
                value: _vm.hex,
                callback: function($$v) {
                  _vm.hex = $$v;
                },
                expression: "hex"
              }
            }),
            _vm._v(" "),
            _c("va-input", {
              attrs: { size: "xs", width: "38px" },
              on: { change: _vm.rChange },
              model: {
                value: _vm.rgb.r,
                callback: function($$v) {
                  _vm.$set(_vm.rgb, "r", $$v);
                },
                expression: "rgb.r"
              }
            }),
            _vm._v(" "),
            _c("va-input", {
              attrs: { size: "xs", width: "38px" },
              on: { change: _vm.gChange },
              model: {
                value: _vm.rgb.g,
                callback: function($$v) {
                  _vm.$set(_vm.rgb, "g", $$v);
                },
                expression: "rgb.g"
              }
            }),
            _vm._v(" "),
            _c("va-input", {
              attrs: { size: "xs", width: "38px" },
              on: { change: _vm.bChange },
              model: {
                value: _vm.rgb.b,
                callback: function($$v) {
                  _vm.$set(_vm.rgb, "b", $$v);
                },
                expression: "rgb.b"
              }
            }),
            _vm._v(" "),
            _c("va-input", {
              attrs: { size: "xs", width: "40px" },
              on: { change: _vm.aChange },
              model: {
                value: _vm.alpha,
                callback: function($$v) {
                  _vm.alpha = $$v;
                },
                expression: "alpha"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            class: _vm.classPrefix + "-color-picker-lower",
            staticStyle: { margin: "0", color: "#999" }
          },
          [
            _c(
              "span",
              {
                staticStyle: {
                  "text-align": "center",
                  width: "68px",
                  "font-size": "10px"
                }
              },
              [_vm._v("HEX")]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticStyle: {
                  "text-align": "center",
                  width: "38px",
                  "font-size": "10px"
                }
              },
              [_vm._v("R")]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticStyle: {
                  "text-align": "center",
                  width: "38px",
                  "font-size": "10px"
                }
              },
              [_vm._v("G")]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticStyle: {
                  "text-align": "center",
                  width: "38px",
                  "font-size": "10px"
                }
              },
              [_vm._v("B")]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticStyle: {
                  "text-align": "center",
                  width: "38px",
                  "font-size": "10px"
                }
              },
              [_vm._v("A")]
            )
          ]
        )
      ]
    )
  ])
};
var __vue_staticRenderFns__$t = [];
__vue_render__$t._withStripped = true;

  /* style */
  const __vue_inject_styles__$t = undefined;
  /* scoped */
  const __vue_scope_id__$t = undefined;
  /* module identifier */
  const __vue_module_identifier__$t = undefined;
  /* functional template */
  const __vue_is_functional_template__$t = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VaColorPickerPopup = normalizeComponent(
    { render: __vue_render__$t, staticRenderFns: __vue_staticRenderFns__$t },
    __vue_inject_styles__$t,
    __vue_script__$t,
    __vue_scope_id__$t,
    __vue_is_functional_template__$t,
    __vue_module_identifier__$t,
    undefined,
    undefined
  );

//

  const components$9 = { 'va-button':VaButton, 'va-dropdown':VaDropdown, 'va-color-picker-popup':VaColorPickerPopup };
  
var script$u = {
  name: 'VaColorPicker',
  components: components$9,
  props: {
    color: {
      type: String,
      default: '#ff6900',
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    let c = this.color;
    return {
      col: c,
      colors: {},
      show: false,
      rgba: '',
      rgb: ''
    }
  },
  methods: {
    toggleColorPicker () {
      this.$refs.colorpickerpopup.doShow();
    },
    onChange (e) {
      this.colors = e;
      this.col =
        'rgba(' +
        e.rgba.r +
        ', ' +
        e.rgba.g +
        ', ' +
        e.rgba.b +
        ', ' +
        e.rgba.a +
        ')';
      this.rgba =
        'rgba(' +
        e.rgba.r +
        ', ' +
        e.rgba.g +
        ', ' +
        e.rgba.b +
        ', ' +
        e.rgba.a +
        ')';
      this.rgb = 'rgb(' + e.rgba.r + ', ' + e.rgba.g + ', ' + e.rgba.b + ')';

      this.$emit('change', e);
    }
  },
  computed: {
    buttonStyleObj () {
      let style = {};

      style['width'] = '15px';
      style['height'] = '100%';
      style['border-radius'] = '50%';
      style['box-shadow'] = this.rgb + ' 0px 0px 0px 1px';
      style['background'] = this.rgba;

      return style
    },
    classObj () {
      let { classPrefix } = this;
      let classes = {};

      classes[classPrefix + '-color-picker'] = true;

      return classes
    }
  }
};

/* script */
const __vue_script__$u = script$u;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$u.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/ColorPicker/VaColorPicker.vue";

/* template */
var __vue_render__$u = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "va-dropdown",
    [
      _c(
        "div",
        { attrs: { slot: "trigger" }, slot: "trigger" },
        [
          _c(
            "va-button",
            {
              ref: "colorpicker",
              nativeOn: {
                click: function($event) {
                  return _vm.toggleColorPicker($event)
                }
              }
            },
            [
              _c(
                "div",
                { class: _vm.classPrefix + "-color-picker-button-inner" },
                [_c("div", { style: _vm.buttonStyleObj })]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("va-color-picker-popup", {
        ref: "colorpickerpopup",
        attrs: { color: _vm.color, show: _vm.show },
        on: { change: _vm.onChange }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$u = [];
__vue_render__$u._withStripped = true;

  /* style */
  const __vue_inject_styles__$u = function (inject) {
    if (!inject) return
    inject("data-v-5a23fde2_0", { source: "/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-color-picker-button-inner {\n  height: 15px;\n  line-height: 1;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);\n  border-radius: 50%;\n}\n.va-color-picker-popup {\n  margin: 5px 10px;\n  overflow: hidden;\n}\n.va-color-picker-upper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.va-color-picker-gradient {\n  position: relative;\n  width: 190px;\n  height: 190px;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.va-color-picker-gradient-white {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 3px;\n    background: linear-gradient(90deg, #fff, rgba(255, 255, 255, 0));\n}\n.va-color-picker-gradient-black {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 3px;\n    background: linear-gradient(0deg, #000, transparent);\n}\n.va-color-picker-gradient-cursor {\n    position: absolute;\n    cursor: default;\n    width: 10px;\n    height: 10px;\n    border: 2px solid #fff;\n    border-radius: 50%;\n    top: 50px;\n    left: 50px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 1px;\n}\n.va-color-picker-border {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 3px;\n  box-shadow: inset rgba(223, 225, 229, 0.5) 0 0 0 2px;\n}\n.va-color-picker-hue-track {\n  position: relative;\n  width: 16px;\n  height: 190px;\n  border-radius: 3px;\n  margin-left: 10px;\n  background: linear-gradient(180deg, red, #ff0, #0f0, #0ff, #00f, #f0f, red);\n  overflow: hidden;\n}\n.va-color-picker-alpha-cursor,\n.va-color-picker-hue-cursor {\n  position: absolute;\n  cursor: default;\n  width: 10px;\n  height: 10px;\n  left: 3px;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 1px;\n}\n.va-color-picker-alpha-track {\n  position: relative;\n  width: 16px;\n  height: 190px;\n  border-radius: 3px;\n  margin-left: 10px;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);\n  overflow: hidden;\n}\n.va-color-picker-alpha-track-color {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 3px;\n}\n.va-color-picker-lower {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n\n/*# sourceMappingURL=VaColorPicker.vue.map */", map: {"version":3,"sources":["VaColorPicker.vue","/Users/ax/Documents/prj/cue/app/aaa/src/ColorPicker/VaColorPicker.vue"],"names":[],"mappings":"AAAA,QAAQ;AACR,YAAY;AACZ,UAAU;AACV,QAAQ;AACR,SAAS;AACT,UAAU;AACV,OAAO;AACP,iBAAiB;AACjB,eAAe;AACf,WAAW;AACX,YAAY;ACkGZ;EACA,YAAA;EACA,cAAA;EACA,uJAAA;EACA,kBAAA;AAAA;AAGA;EACA,gBAAA;EACA,gBAAA;AAAA;AAGA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AAAA;AAGA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;AAAA;AAEA;IACA,kBAAA;IACA,MAAA;IACA,OAAA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;IACA,gEAAA;AAAA;AAGA;IACA,kBAAA;IACA,MAAA;IACA,OAAA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;IACA,oDAAA;AAAA;AAGA;IACA,kBAAA;IACA,eAAA;IACA,WAAA;IACA,YAAA;IACA,sBAAA;IACA,kBAAA;IACA,SAAA;IACA,UAAA;IACA,wCAAA;AAAA;AAIA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,oDAAA;AAAA;AAGA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;EACA,iBAAA;EACA,2EAAA;EACA,gBAAA;AAAA;AAGA;;EAEA,kBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,sBAAA;EACA,kBAAA;EACA,wCAAA;AAAA;AAGA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;EACA,iBAAA;EACA,uJAAA;EACA,gBAAA;AAAA;AAEA;IACA,kBAAA;IACA,MAAA;IACA,OAAA;IACA,WAAA;IACA,YAAA;IACA,kBAAA;AAAA;AAIA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,gBAAA;AAAA;;AD/GA,4CAA4C","file":"VaColorPicker.vue","sourcesContent":["/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-color-picker-button-inner {\n  height: 15px;\n  line-height: 1;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);\n  border-radius: 50%; }\n\n.va-color-picker-popup {\n  margin: 5px 10px;\n  overflow: hidden; }\n\n.va-color-picker-upper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.va-color-picker-gradient {\n  position: relative;\n  width: 190px;\n  height: 190px;\n  border-radius: 3px;\n  overflow: hidden; }\n  .va-color-picker-gradient-white {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 3px;\n    background: linear-gradient(90deg, #fff, rgba(255, 255, 255, 0)); }\n  .va-color-picker-gradient-black {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 3px;\n    background: linear-gradient(0deg, #000, transparent); }\n  .va-color-picker-gradient-cursor {\n    position: absolute;\n    cursor: default;\n    width: 10px;\n    height: 10px;\n    border: 2px solid #fff;\n    border-radius: 50%;\n    top: 50px;\n    left: 50px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 1px; }\n\n.va-color-picker-border {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 3px;\n  box-shadow: inset rgba(223, 225, 229, 0.5) 0 0 0 2px; }\n\n.va-color-picker-hue-track {\n  position: relative;\n  width: 16px;\n  height: 190px;\n  border-radius: 3px;\n  margin-left: 10px;\n  background: linear-gradient(180deg, red, #ff0, #0f0, #0ff, #00f, #f0f, red);\n  overflow: hidden; }\n\n.va-color-picker-alpha-cursor,\n.va-color-picker-hue-cursor {\n  position: absolute;\n  cursor: default;\n  width: 10px;\n  height: 10px;\n  left: 3px;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 1px; }\n\n.va-color-picker-alpha-track {\n  position: relative;\n  width: 16px;\n  height: 190px;\n  border-radius: 3px;\n  margin-left: 10px;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==);\n  overflow: hidden; }\n  .va-color-picker-alpha-track-color {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 3px; }\n\n.va-color-picker-lower {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 10px; }\n\n/*# sourceMappingURL=VaColorPicker.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$u = undefined;
  /* module identifier */
  const __vue_module_identifier__$u = undefined;
  /* functional template */
  const __vue_is_functional_template__$u = false;
  /* style inject SSR */
  

  
  var VaColorPicker = normalizeComponent(
    { render: __vue_render__$u, staticRenderFns: __vue_staticRenderFns__$u },
    __vue_inject_styles__$u,
    __vue_script__$u,
    __vue_scope_id__$u,
    __vue_is_functional_template__$u,
    __vue_module_identifier__$u,
    createInjector,
    undefined
  );

//

var script$v = {
  name: 'VaMobile',
  mixins: [events],
  props: {
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    return {
      isMobile: false
    }
  },
  created () {
    this.$on('Va@mobileIsMobile', val => {
      this.isMobile = val;
    });

    /**
     * In case this component is instantiated after the App
     * has initially broadcasted isMobile, let's request it.
     */
    this.dispatch('VaApp', 'Va@requestIsMobile', true);
  }
};

/* script */
const __vue_script__$v = script$v;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$v.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Mobile/VaMobile.vue";

/* template */
var __vue_render__$v = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm.isMobile ? _vm._t("default") : _vm._e()], 2)
};
var __vue_staticRenderFns__$v = [];
__vue_render__$v._withStripped = true;

  /* style */
  const __vue_inject_styles__$v = undefined;
  /* scoped */
  const __vue_scope_id__$v = undefined;
  /* module identifier */
  const __vue_module_identifier__$v = undefined;
  /* functional template */
  const __vue_is_functional_template__$v = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VaMobile = normalizeComponent(
    { render: __vue_render__$v, staticRenderFns: __vue_staticRenderFns__$v },
    __vue_inject_styles__$v,
    __vue_script__$v,
    __vue_scope_id__$v,
    __vue_is_functional_template__$v,
    __vue_module_identifier__$v,
    undefined,
    undefined
  );

//

/* va-button va-icon va-modal va-mobile va-desktop va-tabs va-tab va-row va-column va-select */
/* va-option va-form va-form-item va-input va-color-picker va-checkbox va-range va-sidebar-group  */
/* <va-collapse-transition va-loading */

var script$w = {
  name: 'VaAppConfig',
  components:{ 'va-button':VaButton, 'va-modal':VaModal$1, 'va-desktop':VaDesktop, 'va-tabs':VaTabs,
    'va-tab':VaTab, 'va-app':VaApp,  'va-page':VaPage, 'va-sidebar-group':VaSidebarGroup,
    'va-sidebar':VaSidebar, 'va-minibar':VaMinibar, 'va-topbar':VaTopbar, 'va-row':VaRow,
    'va-column':VaColumn, 'va-range':VaRange, 'va-checkbox':VaCheckbox, 'va-tooltip':VaTooltip,
    'va-select':VaSelect$1, 'va-option':VaOption, 'va-form':VaForm, 'va-form-item':VaFormItem,
    'va-color-picker':VaColorPicker, 'va-mobile':VaMobile, 'va-icon':VaIcon, 'va-input':VaInput },
  mixins: [events],
  props: {
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    return {
      /**
       * Sensible defaults, but will be overwritten by
       * VaApp when it broadcasts initial values.
       * See broadcastDefaultsToConfig()
       */
      minibarTheme: 'default',
      sidebarTheme: 'default',
      topbarTheme: 'blue',

      showToggle: false,
      compact: false,
      textLinks: false,

      desktopSidebarWidth: 210,
      desktopMinibarWidth: 50,
      desktopTopbarHeight: 48,
      desktopMargin: 0,
      desktopMinimumWidth: 1024,
      mobileSidebarWidth: 0,
      mobileMinibarWidth: 0,
      mobileTopbarHeight: 50,
      sidebarPriority: false,
      minibarPriority: false,
      topbarPriority: false,
      topbarPadded: false,
      rtl: false,
      reverse: false,
      split: false,
      pageSize: 'md',
      bgColor: '#F4F5F7',
      pageBgColor: '#FFFFFF'
    }
  },
  watch: {
    desktopSidebarWidth (val) { this.dispatch('VaApp', 'Va@configDesktopSidebarWidthChange', val); },
    desktopTopbarHeight (val) { this.dispatch('VaApp', 'Va@configDesktopTopbarHeightChange', val); },
    desktopMinibarWidth (val) { this.dispatch('VaApp', 'Va@configDesktopMinibarWidthChange', val); },
    desktopMargin (val) { this.dispatch('VaApp', 'Va@configDesktopMarginChange', val); },
    desktopMinimumWidth (val) { this.dispatch('VaApp', 'Va@configDesktopMinimumWidthChange', val); },
    mobileSidebarWidth (val) { this.dispatch('VaApp', 'Va@configMobileSidebarWidthChange', val); },
    mobileTopbarHeight (val) { this.dispatch('VaApp', 'Va@configMobileTopbarHeightChange', val); },
    mobileMinibarWidth (val) { this.dispatch('VaApp', 'Va@configMobileMinibarWidthChange', val); },
    sidebarPriority (val) { this.dispatch('VaApp', 'Va@configSidebarPriorityChange', val); },
    minibarPriority (val) { this.dispatch('VaApp', 'Va@configMinibarPriorityChange', val); },
    topbarPriority (val) { this.dispatch('VaApp', 'Va@configTopbarPriorityChange', val); },
    topbarPadded (val) { this.dispatch('VaApp', 'Va@configTopbarPaddedChange', val); },
    rtl (val) { this.dispatch('VaApp', 'Va@configRtlChange', val); },
    split (val) { this.dispatch('VaApp', 'Va@configSplitChange', val); },
    reverse (val) { this.dispatch('VaApp', 'Va@configReverseChange', val); },
    compact (val) { this.dispatch('VaApp', 'Va@configCompactChange', val); },
    showToggle (val) { this.dispatch('VaApp', 'Va@configShowToggleChange', val); },
    textLinks (val) { this.dispatch('VaApp', 'Va@configTextLinksChange', val); },
    pageSize (val) { this.dispatch('VaApp', 'Va@configPageSizeChange', val); },

    topbarTheme (val) { this.dispatch('VaApp', 'Va@configTopbarThemeChange', val); },
    minibarTheme (val) { this.dispatch('VaApp', 'Va@configMinibarThemeChange', val); },
    sidebarTheme (val) { this.dispatch('VaApp', 'Va@configSidebarThemeChange', val); },

    bgColor (val) { this.dispatch('VaApp', 'Va@configBgColorChange', val); },
    pageBgColor (val) { this.dispatch('VaApp', 'Va@configPageBgColorChange', val); }
  },
  methods: {
    showConfigModal () {
      this.$refs.configModal.open();

      setTimeout(() => {
        this.$refs.desktopSidebarWidthRange.update();
        this.$refs.desktopMinibarWidthRange.update();
        this.$refs.desktopTopbarHeightRange.update();
        this.$refs.mobileSidebarWidthRange.update();
        this.$refs.mobileMinibarWidthRange.update();
        this.$refs.mobileTopbarHeightRange.update();
        this.$refs.desktopMarginRange.update();
        this.$refs.desktopMinimumWidthRange.update();
      }, 10);
    },
    getPosition (el) {
      let rect = el.getBoundingClientRect();
      return {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        x: rect.x,
        y: rect.y
      }
    },
    onBgColorChange (e) {
      this.bgColor = e.hex;
    },
    onPageBgColorChange (e) {
      this.pageBgColor = e.hex;
    }
  },
  created () {
    /**
     * Here we set up receiver events so that if we pass defaults to the
     * App component, we can send them over to the config component.
     */
    this.$on('Va@configReceiveDesktopTopbarHeight', (val) => { this.desktopTopbarHeight = val; });
    this.$on('Va@configReceiveDesktopMinibarWidth', (val) => { this.desktopMinibarWidth = val; });
    this.$on('Va@configReceiveDesktopSidebarWidth', (val) => { this.desktopSidebarWidth = val; });
    this.$on('Va@configReceiveDesktopMinimumWidth', (val) => { this.desktopMinimumWidth = val; });
    this.$on('Va@configReceiveMobileMinibarWidth', (val) => { this.mobileMinibarWidth = val; });
    this.$on('Va@configReceiveMobileSidebarWidth', (val) => { this.mobileSidebarWidth = val; });
    this.$on('Va@configReceiveMobileTopbarHeight', (val) => { this.mobileTopbarHeight = val; });
    this.$on('Va@configReceiveSidebarPriority', (val) => { this.sidebarPriority = val; });
    this.$on('Va@configReceiveMinibarPriority', (val) => { this.minibarPriority = val; });
    this.$on('Va@configReceiveTopbarPriority', (val) => { this.topbarPriority = val; });
    this.$on('Va@configReceiveDesktopMargin', (val) => { this.desktopMargin = val; });
    this.$on('Va@configReceiveTopbarPadded', (val) => { this.topbarPadded = val; });
    this.$on('Va@configReceiveMinibarTheme', (val) => { this.minibarTheme = val; });
    this.$on('Va@configReceiveSidebarTheme', (val) => { this.sidebarTheme = val; });
    this.$on('Va@configReceiveTopbarTheme', (val) => { this.topbarTheme = val; });
    this.$on('Va@configReceivePageBgColor', (val) => { this.pageBgColor = val; });
    this.$on('Va@configReceiveShowToggle', (val) => { this.showToggle = val; });
    this.$on('Va@configReceiveTextLinks', (val) => { this.textLinks = val; });
    this.$on('Va@configReceivePageSize', (val) => { this.pageSize = val; });
    this.$on('Va@configReceiveCompact', (val) => { this.compact = val; });
    this.$on('Va@configReceiveReverse', (val) => { this.reverse = val; });
    this.$on('Va@configReceiveBgColor', (val) => { this.bgColor = val; });
    this.$on('Va@configReceiveSplit', (val) => { this.split = val; });
    this.$on('Va@configReceiveRtl', (val) => { this.rtl = val; });
  },
  computed: {
    classObj () {
      // let classPrefix = this
      return {}
    },
    styleObj () {
      let style = {};

      style['position'] = 'fixed';
      style['right'] = '20px';
      style['z-index'] = '99999';
      style['bottom'] = '20px';

      return style
    },
    shouldTopbarPriorityBeDisabled () {
      if (this.sidebarPriority || this.minibarPriority) {
        return true
      }
      return this.desktopMargin === 0;

      
    },
    shouldTopbarPaddedBeDisabled: function () {
      return this.desktopMargin === 0 ? true : !this.topbarPriority;
    }
  }
};

/* script */
const __vue_script__$w = script$w;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$w.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/App/VaAppConfig.vue";

/* template */
var __vue_render__$w = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _c(
        "va-button",
        {
          ref: "cfgbtn",
          style: _vm.styleObj,
          attrs: { type: "default", size: "md" },
          nativeOn: {
            click: function($event) {
              return _vm.showConfigModal($event)
            }
          }
        },
        [
          _vm._v("\n    AppConfig\n    "),
          _c("va-icon", {
            attrs: {
              type: "sliders-h",
              "icon-style": "solid",
              margin: "0 0 0 10px"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "va-modal",
        {
          ref: "configModal",
          attrs: { title: "AppConfig", width: "800px", backdrop: true }
        },
        [
          _c(
            "div",
            {
              staticClass: "themeModalBody",
              attrs: { slot: "body" },
              slot: "body"
            },
            [
              _c("va-mobile", [
                _c("p", [
                  _vm._v(
                    "\n          The AppConfig is meant to be used on a desktop. If you're on a desktop, try increasing your resolution.\n        "
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "va-desktop",
                [
                  _c(
                    "va-tabs",
                    [
                      _c(
                        "va-tab",
                        { attrs: { name: "Colors and themes" } },
                        [
                          _c(
                            "p",
                            { staticStyle: { "margin-bottom": "10px" } },
                            [
                              _vm._v(
                                "There are hundreds of combinations of layouts that you can build when using the atlas App component."
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("h3", [_vm._v("Built-in themes")]),
                          _vm._v(" "),
                          _c("hr"),
                          _vm._v(" "),
                          _c(
                            "va-row",
                            { attrs: { gutter: 10 } },
                            [
                              _c("va-column", { attrs: { xs: 4 } }, [
                                _c(
                                  "p",
                                  [
                                    _vm._v("\n                  Minibar"),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c(
                                      "va-select",
                                      {
                                        attrs: { "no-uncheck": "" },
                                        model: {
                                          value: _vm.minibarTheme,
                                          callback: function($$v) {
                                            _vm.minibarTheme = $$v;
                                          },
                                          expression: "minibarTheme"
                                        }
                                      },
                                      [
                                        _c("va-option", {
                                          attrs: {
                                            value: "default",
                                            label: "Default"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "white",
                                            label: "White"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "blue",
                                            label: "Blue"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "dark",
                                            label: "Dark"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "darker",
                                            label: "Darker"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "purple",
                                            label: "Purple"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "black",
                                            label: "Black"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("va-column", { attrs: { xs: 4 } }, [
                                _c(
                                  "p",
                                  [
                                    _vm._v("\n                  Sidebar"),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c(
                                      "va-select",
                                      {
                                        attrs: { "no-uncheck": "" },
                                        model: {
                                          value: _vm.sidebarTheme,
                                          callback: function($$v) {
                                            _vm.sidebarTheme = $$v;
                                          },
                                          expression: "sidebarTheme"
                                        }
                                      },
                                      [
                                        _c("va-option", {
                                          attrs: {
                                            value: "default",
                                            label: "Default"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "white",
                                            label: "White"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "blue",
                                            label: "Blue"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "dark",
                                            label: "Dark"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "darker",
                                            label: "Darker"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "purple",
                                            label: "Purple"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "black",
                                            label: "Black"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("va-column", { attrs: { xs: 4 } }, [
                                _c(
                                  "p",
                                  [
                                    _vm._v("\n                  Topbar"),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c(
                                      "va-select",
                                      {
                                        attrs: { "no-uncheck": "" },
                                        model: {
                                          value: _vm.topbarTheme,
                                          callback: function($$v) {
                                            _vm.topbarTheme = $$v;
                                          },
                                          expression: "topbarTheme"
                                        }
                                      },
                                      [
                                        _c("va-option", {
                                          attrs: {
                                            value: "default",
                                            label: "Default"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "white",
                                            label: "White"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "blue",
                                            label: "Blue"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "dark",
                                            label: "Dark"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "darker",
                                            label: "Darker"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "purple",
                                            label: "Purple"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "black",
                                            label: "Black"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "va-row",
                            { attrs: { gutter: 10 } },
                            [
                              _c("h3", [_vm._v("Background colors")]),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _c(
                                "va-column",
                                { attrs: { xs: 6 } },
                                [
                                  _c(
                                    "va-form",
                                    { attrs: { type: "vertical" } },
                                    [
                                      _c(
                                        "va-form-item",
                                        { attrs: { label: "Document" } },
                                        [
                                          _c("va-input", {
                                            model: {
                                              value: _vm.bgColor,
                                              callback: function($$v) {
                                                _vm.bgColor = $$v;
                                              },
                                              expression: "bgColor"
                                            }
                                          }),
                                          _vm._v(
                                            "\n                     \n                    "
                                          ),
                                          _c("va-color-picker", {
                                            attrs: { color: _vm.bgColor },
                                            on: { change: _vm.onBgColorChange }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "va-column",
                                { attrs: { xs: 6 } },
                                [
                                  _c(
                                    "va-form",
                                    { attrs: { type: "vertical" } },
                                    [
                                      _c(
                                        "va-form-item",
                                        { attrs: { label: "Page (content)" } },
                                        [
                                          _c("va-input", {
                                            model: {
                                              value: _vm.pageBgColor,
                                              callback: function($$v) {
                                                _vm.pageBgColor = $$v;
                                              },
                                              expression: "pageBgColor"
                                            }
                                          }),
                                          _vm._v(
                                            "\n                     \n                    "
                                          ),
                                          _c("va-color-picker", {
                                            attrs: { color: _vm.pageBgColor },
                                            on: {
                                              change: _vm.onPageBgColorChange
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "va-tab",
                        { attrs: { name: "Dimensions and positioning" } },
                        [
                          _c("h3", [_vm._v("Page")]),
                          _vm._v(" "),
                          _c("hr"),
                          _vm._v(" "),
                          _c(
                            "va-row",
                            { attrs: { gutter: 10 } },
                            [
                              _c("va-column", { attrs: { xs: 12 } }, [
                                _c(
                                  "p",
                                  [
                                    _vm._v("\n                Size"),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c(
                                      "va-select",
                                      {
                                        attrs: { "no-uncheck": "" },
                                        model: {
                                          value: _vm.pageSize,
                                          callback: function($$v) {
                                            _vm.pageSize = $$v;
                                          },
                                          expression: "pageSize"
                                        }
                                      },
                                      [
                                        _c("va-option", {
                                          attrs: { value: "sm", label: "Small" }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: {
                                            value: "md",
                                            label: "Medium"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("va-option", {
                                          attrs: { value: "lg", label: "Large" }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "va-row",
                            { attrs: { gutter: 10 } },
                            [
                              _c("h3", [_vm._v("Misc. App props")]),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _c("va-column", { attrs: { xs: 4 } }, [
                                _c(
                                  "p",
                                  [
                                    _c(
                                      "va-checkbox",
                                      {
                                        model: {
                                          value: _vm.sidebarPriority,
                                          callback: function($$v) {
                                            _vm.sidebarPriority = $$v;
                                          },
                                          expression: "sidebarPriority"
                                        }
                                      },
                                      [_vm._v("sidebarPriority")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  [
                                    _c(
                                      "va-checkbox",
                                      {
                                        model: {
                                          value: _vm.minibarPriority,
                                          callback: function($$v) {
                                            _vm.minibarPriority = $$v;
                                          },
                                          expression: "minibarPriority"
                                        }
                                      },
                                      [_vm._v("minibarPriority")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  [
                                    _c(
                                      "va-tooltip",
                                      {
                                        attrs: {
                                          trigger: "hover",
                                          content:
                                            "Disabled unless !topbarPriority, !minibarPriority and desktopMargin !== 0",
                                          placement: "right",
                                          effect: "tooltip-fade-right"
                                        }
                                      },
                                      [
                                        _c(
                                          "va-checkbox",
                                          {
                                            attrs: {
                                              disabled:
                                                _vm.shouldTopbarPriorityBeDisabled
                                            },
                                            model: {
                                              value: _vm.topbarPriority,
                                              callback: function($$v) {
                                                _vm.topbarPriority = $$v;
                                              },
                                              expression: "topbarPriority"
                                            }
                                          },
                                          [_vm._v("topbarPriority")]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  [
                                    _c(
                                      "va-tooltip",
                                      {
                                        attrs: {
                                          trigger: "hover",
                                          content:
                                            "Disabled unless topbarPriority and desktopMargin !== 0",
                                          placement: "right",
                                          effect: "tooltip-fade-right"
                                        }
                                      },
                                      [
                                        _c(
                                          "va-checkbox",
                                          {
                                            attrs: {
                                              disabled:
                                                _vm.shouldTopbarPaddedBeDisabled
                                            },
                                            model: {
                                              value: _vm.topbarPadded,
                                              callback: function($$v) {
                                                _vm.topbarPadded = $$v;
                                              },
                                              expression: "topbarPadded"
                                            }
                                          },
                                          [_vm._v("topbarPadded")]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("va-column", { attrs: { xs: 4 } }, [
                                _c(
                                  "p",
                                  [
                                    _c(
                                      "va-checkbox",
                                      {
                                        model: {
                                          value: _vm.rtl,
                                          callback: function($$v) {
                                            _vm.rtl = $$v;
                                          },
                                          expression: "rtl"
                                        }
                                      },
                                      [_vm._v("rtl")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  [
                                    _c(
                                      "va-checkbox",
                                      {
                                        model: {
                                          value: _vm.reverse,
                                          callback: function($$v) {
                                            _vm.reverse = $$v;
                                          },
                                          expression: "reverse"
                                        }
                                      },
                                      [_vm._v("reverse")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  [
                                    _c(
                                      "va-checkbox",
                                      {
                                        model: {
                                          value: _vm.split,
                                          callback: function($$v) {
                                            _vm.split = $$v;
                                          },
                                          expression: "split"
                                        }
                                      },
                                      [_vm._v("split")]
                                    )
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("va-column", { attrs: { xs: 4 } }, [
                                _c(
                                  "p",
                                  [
                                    _c(
                                      "va-checkbox",
                                      {
                                        model: {
                                          value: _vm.showToggle,
                                          callback: function($$v) {
                                            _vm.showToggle = $$v;
                                          },
                                          expression: "showToggle"
                                        }
                                      },
                                      [_vm._v("showToggle")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  [
                                    _c(
                                      "va-checkbox",
                                      {
                                        model: {
                                          value: _vm.compact,
                                          callback: function($$v) {
                                            _vm.compact = $$v;
                                          },
                                          expression: "compact"
                                        }
                                      },
                                      [_vm._v("compact")]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  [
                                    _c(
                                      "va-checkbox",
                                      {
                                        model: {
                                          value: _vm.textLinks,
                                          callback: function($$v) {
                                            _vm.textLinks = $$v;
                                          },
                                          expression: "textLinks"
                                        }
                                      },
                                      [_vm._v("textLinks")]
                                    )
                                  ],
                                  1
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "va-row",
                            { attrs: { gutter: 10 } },
                            [
                              _c("h3", [
                                _vm._v("Content margin and minimum width")
                              ]),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _c("va-column", { attrs: { xs: 4 } }, [
                                _c(
                                  "p",
                                  [
                                    _vm._v(
                                      "\n                  Desktop margin: " +
                                        _vm._s(_vm.desktopMargin)
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("va-range", {
                                      ref: "desktopMarginRange",
                                      attrs: { min: 0, max: 1000, step: 1 },
                                      model: {
                                        value: _vm.desktopMargin,
                                        callback: function($$v) {
                                          _vm.desktopMargin = $$v;
                                        },
                                        expression: "desktopMargin"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("va-column", { attrs: { xs: 4 } }, [
                                _c(
                                  "p",
                                  [
                                    _vm._v(
                                      "\n                  Desktop minimum width: " +
                                        _vm._s(_vm.desktopMinimumWidth)
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("va-range", {
                                      ref: "desktopMinimumWidthRange",
                                      attrs: { min: 0, max: 1024, step: 1 },
                                      model: {
                                        value: _vm.desktopMinimumWidth,
                                        callback: function($$v) {
                                          _vm.desktopMinimumWidth = $$v;
                                        },
                                        expression: "desktopMinimumWidth"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("va-column", { attrs: { xs: 4 } }, [
                                _c("p", [
                                  _vm._v(
                                    "\n                   \n                "
                                  )
                                ])
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "va-row",
                            { attrs: { gutter: 10 } },
                            [
                              _c("h3", [_vm._v("Desktop bar dimensions")]),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _c("va-column", { attrs: { xs: 4 } }, [
                                _c(
                                  "p",
                                  [
                                    _vm._v(
                                      "\n                  Sidebar width: " +
                                        _vm._s(_vm.desktopSidebarWidth)
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("va-range", {
                                      ref: "desktopSidebarWidthRange",
                                      attrs: { min: 0, max: 400, step: 5 },
                                      model: {
                                        value: _vm.desktopSidebarWidth,
                                        callback: function($$v) {
                                          _vm.desktopSidebarWidth = $$v;
                                        },
                                        expression: "desktopSidebarWidth"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("va-column", { attrs: { xs: 4 } }, [
                                _c(
                                  "p",
                                  [
                                    _vm._v(
                                      "\n                  Minibar width: " +
                                        _vm._s(_vm.desktopMinibarWidth)
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("va-range", {
                                      ref: "desktopMinibarWidthRange",
                                      attrs: { min: 0, max: 150, step: 5 },
                                      model: {
                                        value: _vm.desktopMinibarWidth,
                                        callback: function($$v) {
                                          _vm.desktopMinibarWidth = $$v;
                                        },
                                        expression: "desktopMinibarWidth"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("va-column", { attrs: { xs: 4 } }, [
                                _c(
                                  "p",
                                  [
                                    _vm._v(
                                      "\n                  Topbar height: " +
                                        _vm._s(_vm.desktopTopbarHeight)
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("va-range", {
                                      ref: "desktopTopbarHeightRange",
                                      attrs: { min: 0, max: 150, step: 5 },
                                      model: {
                                        value: _vm.desktopTopbarHeight,
                                        callback: function($$v) {
                                          _vm.desktopTopbarHeight = $$v;
                                        },
                                        expression: "desktopTopbarHeight"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "va-row",
                            { attrs: { gutter: 10 } },
                            [
                              _c("h3", [_vm._v("Mobile bar dimensions")]),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _c("va-column", { attrs: { xs: 4 } }, [
                                _c(
                                  "p",
                                  [
                                    _vm._v(
                                      "\n                  Sidebar width: " +
                                        _vm._s(_vm.mobileSidebarWidth)
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("va-range", {
                                      ref: "mobileSidebarWidthRange",
                                      attrs: { min: 0, max: 400, step: 5 },
                                      model: {
                                        value: _vm.mobileSidebarWidth,
                                        callback: function($$v) {
                                          _vm.mobileSidebarWidth = $$v;
                                        },
                                        expression: "mobileSidebarWidth"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("va-column", { attrs: { xs: 4 } }, [
                                _c(
                                  "p",
                                  [
                                    _vm._v(
                                      "\n                  Minibar width: " +
                                        _vm._s(_vm.mobileMinibarWidth)
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("va-range", {
                                      ref: "mobileMinibarWidthRange",
                                      attrs: { min: 0, max: 150, step: 5 },
                                      model: {
                                        value: _vm.mobileMinibarWidth,
                                        callback: function($$v) {
                                          _vm.mobileMinibarWidth = $$v;
                                        },
                                        expression: "mobileMinibarWidth"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("va-column", { attrs: { xs: 4 } }, [
                                _c(
                                  "p",
                                  [
                                    _vm._v(
                                      "\n                  Topbar height: " +
                                        _vm._s(_vm.mobileTopbarHeight)
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("va-range", {
                                      ref: "mobileTopbarHeightRange",
                                      attrs: { min: 0, max: 150, step: 5 },
                                      model: {
                                        value: _vm.mobileTopbarHeight,
                                        callback: function($$v) {
                                          _vm.mobileTopbarHeight = $$v;
                                        },
                                        expression: "mobileTopbarHeight"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("va-tab", { attrs: { name: "Source" } }, [
                        _c("code", [
                          _c("pre", { staticClass: "back" }, [
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("<template>")
                            ]),
                            _vm._v("\n  "),
                            _c("span", { staticClass: "comment" }),
                            _vm._v("\n  "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("<va-app")
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("bg-color")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.bgColor) + '"')
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("page-bg-color")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.pageBgColor) + '"')
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("desktop-margin")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.desktopMargin) + '"')
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("desktop-minimum-width")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v(
                                '"' + _vm._s(_vm.desktopMinimumWidth) + '"'
                              )
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("desktop-sidebar-width")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v(
                                '"' + _vm._s(_vm.desktopSidebarWidth) + '"'
                              )
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("desktop-minibar-width")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v(
                                '"' + _vm._s(_vm.desktopMinibarWidth) + '"'
                              )
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("desktop-topbar-height")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v(
                                '"' + _vm._s(_vm.desktopTopbarHeight) + '"'
                              )
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("mobile-sidebar-width")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.mobileSidebarWidth) + '"')
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("mobile-minibar-width")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.mobileMinibarWidth) + '"')
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("mobile-topbar-height")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.mobileTopbarHeight) + '"')
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v(":rtl")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.rtl) + '"')
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v(":reverse")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.reverse) + '"')
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v(":split")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.split) + '"')
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v(":sidebar-priority")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.sidebarPriority) + '"')
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v(":minibar-priority")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.minibarPriority) + '"')
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v(":topbar-priority")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.topbarPriority) + '"')
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v(":topbar-padded")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.topbarPadded) + '"')
                            ]),
                            _c("span", { staticClass: "blue" }, [_vm._v(">")]),
                            _vm._v("\n\n    "),
                            _c("span", { staticClass: "comment" }, [
                              _vm._v(";")
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("<va-topbar")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("theme")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.topbarTheme) + '"')
                            ]),
                            _c("span", { staticClass: "blue" }, [_vm._v(">")]),
                            _vm._v("\n      "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("<div")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("slot")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"left"')
                            ]),
                            _c("span", { staticClass: "blue" }, [_vm._v(">")]),
                            _vm._v(" L "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("</div>")
                            ]),
                            _vm._v("\n      "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("<div")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("slot")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"center"')
                            ]),
                            _c("span", { staticClass: "blue" }, [_vm._v(">")]),
                            _vm._v(" C "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("</div>")
                            ]),
                            _vm._v("\n      "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("<div")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("slot")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"right"')
                            ]),
                            _c("span", { staticClass: "blue" }, [_vm._v(">")]),
                            _vm._v(" R "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("</div>")
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("</va-topbar>")
                            ]),
                            _vm._v("\n\n    "),
                            _c("span", { staticClass: "comment" }, [
                              _vm._v(";")
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("<va-minibar")
                            ]),
                            _vm._v("\n      "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v(":top-items")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v(
                                "\"[{icon:'home'},{icon:'search'},{icon:'user'}]\""
                              )
                            ]),
                            _vm._v("\n      "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v(":bottom-items")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v("\"[{icon:'question'}]\"")
                            ]),
                            _vm._v("\n      "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("theme")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.minibarTheme) + '"')
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "blue" }, [_vm._v("/>")]),
                            _vm._v("\n\n    "),
                            _c("span", { staticClass: "comment" }, [
                              _vm._v(";")
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("<va-sidebar")
                            ]),
                            _vm._v("\n      "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("theme")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.sidebarTheme) + '"')
                            ]),
                            _vm._v("\n      "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v(":compact")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.compact) + '"')
                            ]),
                            _vm._v("\n      "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v(":text-links")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.textLinks) + '"')
                            ]),
                            _c("span", { staticClass: "blue" }, [_vm._v(">")]),
                            _vm._v("\n      "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("<va-sidebar-group")
                            ]),
                            _vm._v("\n        "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v(":items")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v("\"[{name:'Item1'}]\"")
                            ]),
                            _vm._v("\n        "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("title")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"Category 1"')
                            ]),
                            _vm._v("\n        "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v(":show-toggle")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.showToggle) + '"')
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "blue" }, [_vm._v("/>")]),
                            _vm._v("\n      "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("<va-sidebar-group")
                            ]),
                            _vm._v("\n        "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v(":items")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v("\"[{name:'Item1'}]\"")
                            ]),
                            _vm._v("\n        "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("title")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"Category 2"')
                            ]),
                            _vm._v("\n        "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v(":show-toggle")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.showToggle) + '"')
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "blue" }, [_vm._v("/>")]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("</va-sidebar>")
                            ]),
                            _vm._v("\n\n    "),
                            _c("span", { staticClass: "comment" }, [
                              _vm._v(";")
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("<va-page")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "yellow" }, [
                              _vm._v("size")
                            ]),
                            _vm._v("="),
                            _c("span", { staticClass: "green" }, [
                              _vm._v('"' + _vm._s(_vm.pageSize) + '"')
                            ]),
                            _c("span", { staticClass: "blue" }, [_vm._v(">")]),
                            _vm._v("\n      "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("<transition>")
                            ]),
                            _vm._v("\n        "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("<router-view>")
                            ]),
                            _vm._v("\n          ...\n        "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("</router-view>")
                            ]),
                            _vm._v("\n      "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("</transition>")
                            ]),
                            _vm._v("\n    "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("</va-page>")
                            ]),
                            _vm._v("\n\n  "),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("</va-app>")
                            ]),
                            _vm._v("\n"),
                            _c("span", { staticClass: "blue" }, [
                              _vm._v("</template>")
                            ])
                          ])
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
            _c(
              "div",
              { staticStyle: { "text-align": "right" } },
              [
                _c(
                  "va-button",
                  {
                    attrs: { type: "primary" },
                    nativeOn: {
                      click: function($event) {
                        _vm.$refs.configModal.close();
                      }
                    }
                  },
                  [_vm._v("\n          Close\n        ")]
                )
              ],
              1
            )
          ])
        ]
      )
    ],
    1
  )
};
var __vue_staticRenderFns__$w = [];
__vue_render__$w._withStripped = true;

  /* style */
  const __vue_inject_styles__$w = function (inject) {
    if (!inject) return
    inject("data-v-8c4106a6_0", { source: "/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.themeModalBody hr {\n  margin-bottom: 5px;\n}\n.themeModalBody .va-col p {\n  margin-top: 0;\n}\n.back {\n  background-color: #212733;\n  padding: 10px;\n  font-size: 12px;\n  line-height: 16px;\n  color: #B0AFAB;\n  border-radius: 5px;\n}\n.comment {\n  color: #5C676D;\n  font-style: italic;\n}\n.blue {\n  color: #5CCFE0;\n}\n.yellow {\n  color: #FFD580;\n}\n.green {\n  color: #BAE36D;\n}\n\n/*# sourceMappingURL=VaAppConfig.vue.map */", map: {"version":3,"sources":["VaAppConfig.vue","/Users/ax/Documents/prj/cue/app/aaa/src/App/VaAppConfig.vue"],"names":[],"mappings":"AAAA,QAAQ;AACR,YAAY;AACZ,UAAU;AACV,QAAQ;AACR,SAAS;AACT,UAAU;AACV,OAAO;AACP,iBAAiB;AACjB,eAAe;AACf,WAAW;AACX,YAAY;ACofZ;EAEA,kBAAA;AAAA;AAGA;EAEA,aAAA;AAAA;AAGA;EACA,yBAAA;EACA,aAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;AAAA;AAEA;EACA,cAAA;EACA,kBAAA;AAAA;AAEA;EACA,cAAA;AAAA;AAEA;EACA,cAAA;AAAA;AAEA;EACA,cAAA;AAAA;;ADrfA,0CAA0C","file":"VaAppConfig.vue","sourcesContent":["/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.themeModalBody hr {\n  margin-bottom: 5px; }\n\n.themeModalBody .va-col p {\n  margin-top: 0; }\n\n.back {\n  background-color: #212733;\n  padding: 10px;\n  font-size: 12px;\n  line-height: 16px;\n  color: #B0AFAB;\n  border-radius: 5px; }\n\n.comment {\n  color: #5C676D;\n  font-style: italic; }\n\n.blue {\n  color: #5CCFE0; }\n\n.yellow {\n  color: #FFD580; }\n\n.green {\n  color: #BAE36D; }\n\n/*# sourceMappingURL=VaAppConfig.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$w = undefined;
  /* module identifier */
  const __vue_module_identifier__$w = undefined;
  /* functional template */
  const __vue_is_functional_template__$w = false;
  /* style inject SSR */
  

  
  var VaAppConfig = normalizeComponent(
    { render: __vue_render__$w, staticRenderFns: __vue_staticRenderFns__$w },
    __vue_inject_styles__$w,
    __vue_script__$w,
    __vue_scope_id__$w,
    __vue_is_functional_template__$w,
    __vue_module_identifier__$w,
    createInjector,
    undefined
  );

//

var script$x = {
  name: 'VaAside',
  components: { 'va-button': VaButton },
  props: {
    placement: {
      type: String,
      default: 'left',
      required: false
    },
    title: {
      type: String,
      default: '',
      required: false
    },
    header: {
      type: Boolean,
      default: false,
      required: false
    },
    width: {
      type: String,
      default: '304px',
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va',
      required: false
    }
  },
  data () {
    return {
      show: false,
      focusTrap: null
    }
  },
  computed: {
    classObj () {
      let { classPrefix, placement } = this;
      let classes = {};

      classes[classPrefix + '-aside'] = true;
      classes[classPrefix + '-aside-left'] = placement === 'left';
      classes[classPrefix + '-aside-right'] = placement === 'right';

      return classes
    }
  },
  created () {
    const escapeHandler = e => {
      if (e.key === 'Escape' && this.show) {
        this.close();
      }
    };
    document.addEventListener('keydown', escapeHandler);
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler);
    });
  },
  mounted () {
    //document.querySelector('body').appendChild(this.$refs.aside)
    //this.$once('hook:beforeDestroy', () => {
    //  document.querySelector('body').removeChild(this.$refs.aside)
    //}),

   this.focusTrap = focusTrap(this.$refs.aside, {
      clickOutsideDeactivates: true,
      returnFocusOnDeactivate: true,
      fallbackFocus: this.$refs.aside
    });
  },
  beforeDestroy () {
    this.performClose();
  },
  watch: {
    show (val) {
      let backdrop = document.createElement('div');
      let classPrefix = this.classPrefix;
      const body = document.body;
      backdrop.className = classPrefix + '-aside-backdrop';

      if (val) {
        body.appendChild(backdrop);
        element.addClass(body, classPrefix + '-modal-open');

        // This timeout is included to allow for opacity transition.
        setTimeout( (backdrop) => {
          backdrop.className += ' ' + classPrefix + '-aside-in';
          this._clickEvent = EventListener.listen( backdrop, 'click', this.close);
          this.$emit('show');
        }, 20);

        this.focusTrap.activate();
      } else {
        this.focusTrap['deactivate']();
        this.performClose();
      }
    }
  },
  methods: {
    open () {
      this.show = true;
    },
    close () {
      this.show = false;
    },
    performClose () {
      if (this._clickEvent) this._clickEvent.remove();

      const body = document.body;
      let classPrefix = this.classPrefix;
      let backdrop = document.querySelector(
        '.' + classPrefix + '-aside-backdrop'
      );

      if (backdrop) {
        backdrop.className = classPrefix + '-aside-backdrop';
        setTimeout(() => {
          element.removeClass(body, classPrefix + '-modal-open');
          body.removeChild(backdrop);
        }, 300);
        this.$emit('hide');
      }
    }
  }
};

/* script */
const __vue_script__$x = script$x;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$x.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Aside/VaAside.vue";

/* template */
var __vue_render__$x = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "transition",
    { attrs: { name: this.placement === "left" ? "slideleft" : "slideright" } },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.show,
              expression: "show"
            }
          ],
          ref: "aside",
          class: _vm.classObj,
          style: { width: _vm.width }
        },
        [
          _c("div", { class: _vm.classPrefix + "-aside-dialog" }, [
            _c("div", { class: _vm.classPrefix + "-aside-content" }, [
              _vm.header
                ? _c(
                    "div",
                    { class: _vm.classPrefix + "-aside-header" },
                    [
                      _c(
                        "va-button",
                        {
                          class: _vm.classPrefix + "-close",
                          attrs: { type: "button" },
                          on: { click: _vm.close }
                        },
                        [_c("span", [_vm._v("×")])]
                      ),
                      _vm._v(" "),
                      _c("div", { class: _vm.classPrefix + "-aside-title" }, [
                        _vm._v(_vm._s(_vm.title))
                      ])
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { class: _vm.classPrefix + "-aside-body" },
                [_vm._t("default")],
                2
              )
            ])
          ])
        ]
      )
    ]
  )
};
var __vue_staticRenderFns__$x = [];
__vue_render__$x._withStripped = true;

  /* style */
  const __vue_inject_styles__$x = function (inject) {
    if (!inject) return
    inject("data-v-6789a60c_0", { source: "/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-aside-open {\n  transition: transform 0.3s;\n}\n.va-aside {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  z-index: 10;\n  overflow: auto;\n  background: white;\n}\n.va-aside-left {\n    left: 0;\n    right: auto;\n}\n.va-aside-right {\n    right: 0;\n    left: auto;\n}\n.va-aside:focus {\n    outline: 0;\n}\n.va-aside-dialog .va-aside-header .va-close {\n    font-size: 24px;\n    color: #5d6b83;\n}\n.va-aside-dialog .va-aside-header .va-aside-title {\n    padding-top: 8px;\n    font-size: 24px;\n    color: #5d6b83;\n}\n.va-aside-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 5;\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n    background: rgba(9, 30, 66, 0.54);\n}\n.va-aside-in {\n    opacity: 1;\n}\n\n/*# sourceMappingURL=VaAside.vue.map */", map: {"version":3,"sources":["VaAside.vue","/Users/ax/Documents/prj/cue/app/aaa/src/Aside/VaAside.vue"],"names":[],"mappings":"AAAA,QAAQ;AACR,YAAY;AACZ,UAAU;AACV,QAAQ;AACR,SAAS;AACT,UAAU;AACV,OAAO;AACP,iBAAiB;AACjB,eAAe;AACf,WAAW;AACX,YAAY;ACsJZ;EACA,0BAAA;AAAA;AAGA;EACA,eAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,cAAA;EACA,iBAAA;AAAA;AACA;IACA,OAAA;IACA,WAAA;AAAA;AAEA;IACA,QAAA;IACA,UAAA;AAAA;AAbA;IAgBA,UAAA;AAAA;AAEA;IAGA,eAAA;IACA,cAAA;AAAA;AAJA;IAOA,gBAAA;IACA,eAAA;IACA,cAAA;AAAA;AAIA;IACA,eAAA;IACA,MAAA;IACA,QAAA;IACA,SAAA;IACA,OAAA;IACA,UAAA;IACA,UAAA;IACA,oCAAA;IACA,iCAAA;AAAA;AAEA;IACA,UAAA;AAAA;;AD9JA,sCAAsC","file":"VaAside.vue","sourcesContent":["/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-aside-open {\n  transition: transform 0.3s; }\n\n.va-aside {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  z-index: 10;\n  overflow: auto;\n  background: white; }\n  .va-aside-left {\n    left: 0;\n    right: auto; }\n  .va-aside-right {\n    right: 0;\n    left: auto; }\n  .va-aside:focus {\n    outline: 0; }\n  .va-aside-dialog .va-aside-header .va-close {\n    font-size: 24px;\n    color: #5d6b83; }\n  .va-aside-dialog .va-aside-header .va-aside-title {\n    padding-top: 8px;\n    font-size: 24px;\n    color: #5d6b83; }\n  .va-aside-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 5;\n    opacity: 0;\n    transition: opacity 0.3s ease-in-out;\n    background: rgba(9, 30, 66, 0.54); }\n  .va-aside-in {\n    opacity: 1; }\n\n/*# sourceMappingURL=VaAside.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$x = undefined;
  /* module identifier */
  const __vue_module_identifier__$x = undefined;
  /* functional template */
  const __vue_is_functional_template__$x = false;
  /* style inject SSR */
  

  
  var VaAside = normalizeComponent(
    { render: __vue_render__$x, staticRenderFns: __vue_staticRenderFns__$x },
    __vue_inject_styles__$x,
    __vue_script__$x,
    __vue_scope_id__$x,
    __vue_is_functional_template__$x,
    __vue_module_identifier__$x,
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

var script$y = {
  name: 'VaPageHeader',
  props: {
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  computed: {
    hasActions () {
      return !!this.$slots['actions']
    },
    hasBottom () {
      return !!this.$slots['bottom']
    },
    hasBreadcrumb () {
      return !!this.$slots['breadcrumb']
    },
    hasSubtitle () {
      return !!this.$slots['subtitle']
    }
  }
};

/* script */
const __vue_script__$y = script$y;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$y.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/PageHeader/VaPageHeader.vue";

/* template */
var __vue_render__$y = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classPrefix + "-page-header" }, [
    _vm.hasBreadcrumb
      ? _c(
          "div",
          { class: _vm.classPrefix + "-page-header-breadcrumb-wrapper" },
          [
            _c(
              "div",
              { class: _vm.classPrefix + "-page-header-breadcrumb-container" },
              [_vm._t("breadcrumb", [_vm._v(" ")])],
              2
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { class: _vm.classPrefix + "-page-header-title-wrapper" }, [
      _c("div", { class: _vm.classPrefix + "-page-header-title-container" }, [
        _c("h1", [_vm._t("title")], 2),
        _vm._v(" "),
        _vm.hasSubtitle ? _c("h2", [_vm._t("subtitle")], 2) : _vm._e()
      ]),
      _vm._v(" "),
      _vm.hasActions
        ? _c(
            "div",
            { class: _vm.classPrefix + "-page-header-actions-wrapper" },
            [_vm._t("actions")],
            2
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _vm.hasBottom
      ? _c(
          "div",
          { class: _vm.classPrefix + "-page-header-bottom-wrapper" },
          [_vm._t("bottom", [_vm._v(" ")])],
          2
        )
      : _vm._e()
  ])
};
var __vue_staticRenderFns__$y = [];
__vue_render__$y._withStripped = true;

  /* style */
  const __vue_inject_styles__$y = function (inject) {
    if (!inject) return
    inject("data-v-473d4cb3_0", { source: "/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-page-header {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  /* TITLE */\n  /* ACTIONS */\n}\n.va-page-header-title-wrapper {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n}\n.va-page-header-title-container {\n    width: 100%;\n    flex-shrink: 1;\n    min-width: 0;\n}\n.va-page-header-title-container h1 {\n      font-weight: 500;\n      font-size: 1.71em;\n      font-style: inherit;\n      letter-spacing: -0.01em;\n      line-height: 32px;\n      margin-top: 0;\n      margin-bottom: 8px;\n}\n.va-page-header-title-container h2 {\n      font-weight: 400;\n      font-size: 1.25em;\n      font-style: inherit;\n      letter-spacing: -0.01em;\n      line-height: 26px;\n      margin-top: 0;\n      margin-bottom: 8px;\n}\n.va-page-header-actions-wrapper {\n    white-space: nowrap;\n    padding-left: 32px;\n    min-width: 0;\n    flex-shrink: 0;\n}\n.va-page-header-actions-wrapper > div > * {\n      margin-left: 6px;\n}\n.va-page-header-breadcrumb-container {\n    display: flex;\n    flex-wrap: wrap;\n}\n.va-page-header-bottom-wrapper {\n    display: flex;\n    justify-content: start;\n    margin-top: 16px;\n}\n.va-page-header-bottom-wrapper > div {\n      display: contents;\n      flex-direction: row;\n}\n.va-page-header-bottom-wrapper > div > * {\n        margin-right: 6px;\n}\n\n/*# sourceMappingURL=VaPageHeader.vue.map */", map: {"version":3,"sources":["VaPageHeader.vue","/Users/ax/Documents/prj/cue/app/aaa/src/PageHeader/VaPageHeader.vue"],"names":[],"mappings":"AAAA,QAAQ;AACR,YAAY;AACZ,UAAU;AACV,QAAQ;AACR,SAAS;AACT,UAAU;AACV,OAAO;AACP,iBAAiB;AACjB,eAAe;AC+Df,WAAA;AAMA,YAAA;AAbA;EACA,gBAAA;EACA,mBAAA;EAEA,UAAA;EAiCA,YAAA;AAAA;AAhCA;IACA,aAAA;IACA,uBAAA;IACA,8BAAA;AAAA;AAGA;IACA,WAAA;IACA,cAAA;IACA,YAAA;AAAA;AAHA;MAMA,gBAAA;MACA,iBAAA;MACA,mBAAA;MACA,uBAAA;MACA,iBAAA;MACA,aAAA;MACA,kBAAA;AAAA;AAZA;MAgBA,gBAAA;MACA,iBAAA;MACA,mBAAA;MACA,uBAAA;MACA,iBAAA;MACA,aAAA;MACA,kBAAA;AAAA;AAKA;IACA,mBAAA;IACA,kBAAA;IACA,YAAA;IACA,cAAA;AAAA;AAJA;MAQA,gBAAA;AAAA;AAKA;IACA,aAAA;IACA,eAAA;AAAA;AAGA;IACA,aAAA;IACA,sBAAA;IACA,gBAAA;AAAA;AAHA;MAMA,iBAAA;MACA,mBAAA;AAAA;AAPA;QASA,iBAAA;AAAA;;ADrEA,2CAA2C","file":"VaPageHeader.vue","sourcesContent":["/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-page-header {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  /* TITLE */\n  /* ACTIONS */ }\n  .va-page-header-title-wrapper {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between; }\n  .va-page-header-title-container {\n    width: 100%;\n    flex-shrink: 1;\n    min-width: 0; }\n    .va-page-header-title-container h1 {\n      font-weight: 500;\n      font-size: 1.71em;\n      font-style: inherit;\n      letter-spacing: -0.01em;\n      line-height: 32px;\n      margin-top: 0;\n      margin-bottom: 8px; }\n    .va-page-header-title-container h2 {\n      font-weight: 400;\n      font-size: 1.25em;\n      font-style: inherit;\n      letter-spacing: -0.01em;\n      line-height: 26px;\n      margin-top: 0;\n      margin-bottom: 8px; }\n  .va-page-header-actions-wrapper {\n    white-space: nowrap;\n    padding-left: 32px;\n    min-width: 0;\n    flex-shrink: 0; }\n    .va-page-header-actions-wrapper > div > * {\n      margin-left: 6px; }\n  .va-page-header-breadcrumb-container {\n    display: flex;\n    flex-wrap: wrap; }\n  .va-page-header-bottom-wrapper {\n    display: flex;\n    justify-content: start;\n    margin-top: 16px; }\n    .va-page-header-bottom-wrapper > div {\n      display: contents;\n      flex-direction: row; }\n      .va-page-header-bottom-wrapper > div > * {\n        margin-right: 6px; }\n\n/*# sourceMappingURL=VaPageHeader.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$y = undefined;
  /* module identifier */
  const __vue_module_identifier__$y = undefined;
  /* functional template */
  const __vue_is_functional_template__$y = false;
  /* style inject SSR */
  

  
  var VaPageHeader = normalizeComponent(
    { render: __vue_render__$y, staticRenderFns: __vue_staticRenderFns__$y },
    __vue_inject_styles__$y,
    __vue_script__$y,
    __vue_scope_id__$y,
    __vue_is_functional_template__$y,
    __vue_module_identifier__$y,
    createInjector,
    undefined
  );

//
//
//
//
//
//

var script$z = {
  name: 'VaBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/',
      required: false
    },
    separatorIcon: {
      type: String,
      default: '',
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  provide () {
    return {
      VaBreadcrumbParent: this
    }
  }
};

/* script */
const __vue_script__$z = script$z;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$z.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Breadcrumb/VaBreadcrumb.vue";

/* template */
var __vue_render__$z = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: _vm.classPrefix + "-breadcrumb" },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$z = [];
__vue_render__$z._withStripped = true;

  /* style */
  const __vue_inject_styles__$z = function (inject) {
    if (!inject) return
    inject("data-v-5ba85f22_0", { source: "/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-breadcrumb {\n  cursor: default;\n}\n.va-breadcrumb-item {\n    color: #6b788e;\n}\n.va-breadcrumb-item-icon, .va-breadcrumb-item-separator {\n      margin: 0 5px !important;\n}\n.va-breadcrumb-item:last-child .va-breadcrumb-item-icon {\n      display: none;\n}\n.va-breadcrumb-item:last-child .va-breadcrumb-item-separator {\n      display: none !important;\n}\n.va-breadcrumb-link {\n    cursor: pointer;\n}\n.va-breadcrumb-link:hover {\n      text-decoration: underline;\n      color: #0066ff;\n}\n.va-breadcrumb-link:active {\n      color: #0747a6;\n      text-decoration: none;\n}\n\n/*# sourceMappingURL=VaBreadcrumb.vue.map */", map: {"version":3,"sources":["VaBreadcrumb.vue","/Users/ax/Documents/prj/cue/app/aaa/src/Breadcrumb/VaBreadcrumb.vue"],"names":[],"mappings":"AAAA,QAAQ;AACR,YAAY;AACZ,UAAU;AACV,QAAQ;AACR,SAAS;ACmCT,UAAA;AAQA,OAAA;AAQA,iBAAA;AAOA,eAAA;ADrDA,WAAW;AACX,YAAY;AC0BZ;EACA,eAAA;AAAA;AACA;IACA,cAAA;AAAA;AACA;MAEA,wBAAA;AAAA;AAJA;MAQA,aAAA;AAAA;AARA;MAWA,wBAAA;AAAA;AAIA;IACA,eAAA;AAAA;AADA;MAGA,0BAAA;MACA,cAAA;AAAA;AAJA;MAOA,cAAA;MACA,qBAAA;AAAA;;AD/BA,2CAA2C","file":"VaBreadcrumb.vue","sourcesContent":["/*blues*/\n/*paleblues*/\n/*purples*/\n/*teals*/\n/*greens*/\n/*yellows*/\n/*reds*/\n/*light neutrals*/\n/*mid neutrals*/\n/*neutrals*/\n/*grayscale*/\n.va-breadcrumb {\n  cursor: default; }\n  .va-breadcrumb-item {\n    color: #6b788e; }\n    .va-breadcrumb-item-icon, .va-breadcrumb-item-separator {\n      margin: 0 5px !important; }\n    .va-breadcrumb-item:last-child .va-breadcrumb-item-icon {\n      display: none; }\n    .va-breadcrumb-item:last-child .va-breadcrumb-item-separator {\n      display: none !important; }\n  .va-breadcrumb-link {\n    cursor: pointer; }\n    .va-breadcrumb-link:hover {\n      text-decoration: underline;\n      color: #0066ff; }\n    .va-breadcrumb-link:active {\n      color: #0747a6;\n      text-decoration: none; }\n\n/*# sourceMappingURL=VaBreadcrumb.vue.map */",null]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$z = undefined;
  /* module identifier */
  const __vue_module_identifier__$z = undefined;
  /* functional template */
  const __vue_is_functional_template__$z = false;
  /* style inject SSR */
  

  
  var VaBreadcrumb = normalizeComponent(
    { render: __vue_render__$z, staticRenderFns: __vue_staticRenderFns__$z },
    __vue_inject_styles__$z,
    __vue_script__$z,
    __vue_scope_id__$z,
    __vue_is_functional_template__$z,
    __vue_module_identifier__$z,
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
//
//

var script$A = {
  name: 'VaBreadcrumbItem',
  props: {
    to: {},
    replace: {
      type: Boolean,
      default: false,
      required: false
    },
    classPrefix: {
      type: String,
      default: 'va'
    }
  },
  data () {
    return {
      separator: '',
      separatorIcon: ''
    }
  },
  inject: ['VaBreadcrumbParent'],
  mounted () {
    this.separator = this.VaBreadcrumbParent.separator;
    this.separatorIcon = this.VaBreadcrumbParent.separatorIcon;
    const link = this.$refs.link;

    link.addEventListener('click', () => {
      const { to, $router } = this;

      if (!to || !$router) return
      this.replace ? $router.replace(to) : $router.push(to);
    });
  }
};

/* script */
const __vue_script__$A = script$A;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$A.__file = "/Users/ax/Documents/prj/cue/app/aaa/src/Breadcrumb/VaBreadcrumbItem.vue";

/* template */
var __vue_render__$A = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "span",
    { class: _vm.classPrefix + "-breadcrumb-item" },
    [
      _c(
        "span",
        {
          ref: "link",
          class: [
            _vm.classPrefix + "-breadcrumb-item-inner",
            _vm.to ? _vm.classPrefix + "-breadcrumb-link" : ""
          ]
        },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _vm.separatorIcon
        ? _c("va-icon", {
            class: _vm.classPrefix + "-breadcrumb-item-icon",
            attrs: { type: _vm.separatorIcon }
          })
        : _c(
            "span",
            { class: _vm.classPrefix + "-breadcrumb-item-separator" },
            [_vm._v(_vm._s(_vm.separator))]
          )
    ],
    1
  )
};
var __vue_staticRenderFns__$A = [];
__vue_render__$A._withStripped = true;

  /* style */
  const __vue_inject_styles__$A = undefined;
  /* scoped */
  const __vue_scope_id__$A = undefined;
  /* module identifier */
  const __vue_module_identifier__$A = undefined;
  /* functional template */
  const __vue_is_functional_template__$A = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VaBreadcrumbItem = normalizeComponent(
    { render: __vue_render__$A, staticRenderFns: __vue_staticRenderFns__$A },
    __vue_inject_styles__$A,
    __vue_script__$A,
    __vue_scope_id__$A,
    __vue_is_functional_template__$A,
    __vue_module_identifier__$A,
    undefined,
    undefined
  );

const AaaVues = { // 'va-app':VaApp,
  'va-app-config':VaAppConfig,   'va-topbar':VaTopbar,               'va-minibar':VaMinibar,
  'va-sidebar':VaSidebar,        'va-sidebar-group':VaSidebarGroup, 'va-page':VaPage,
  'va-page-header':VaPageHeader, 'va-breadcrumb':VaBreadcrumb,       'va-breadcrumb-item':VaBreadcrumbItem,
  'va-button':VaButton,          'va-modal':VaModal$1,                 'va-aside':VaAside
};

/*
const install = function (Vue, locale) {
  for (let i in Components) {
    Vue.component(i, Components[i])
  }

  Vue.directive('VaPosition', relocate);
  Vue.prototype['VaToast'] = VaToastMethod;
  Vue.prototype.VaModal    = VaModalMethod;
  Vue.prototype.notification = VaNotificationMethod;
  Vue.prototype.VaLocale = locale || 'en';
  window.VaLocale = locale || 'en';
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

Components.install = install;

import relocate from './relocate.js'

import VaApp from './App/VaApp.vue'
import VaTab from './Tabs/VaTab.vue'
import VaRow from './Grid/VaRow.vue'
import VaPage from './Page/VaPage.vue'
import VaForm from './Form/VaForm.vue'
import VaCard from './Card/VaCard.vue'
import VaTabs from './Tabs/VaTabs.vue'
import VaIcon from './Icon/VaIcon.vue'
import VaToggleIcon from './ToggleIcon/VaToggleIcon.vue'
import VaToggle from './Toggle/VaToggle'
import VaInput from './Input/VaInput.vue'
import VaModal from './Modal/VaModal.vue'
import VaAffix from './Affix/VaAffix.vue'
import VaRadio from './Radio/VaRadio.vue'
import VaTable from './Table/VaTable.vue'
import VaAlert from './Alert/VaAlert.vue'
import VaAside from './Aside/VaAside.vue'
import VaRange from './Range/VaRange.vue'
import VaBadge from './Badge/VaBadge.vue'
import VaColumn from './Grid/VaColumn.vue'
import VaOption from './Select/VaOption.vue'
import VaButton from './Button/VaButton.vue'
import VaSelect from './Select/VaSelect.vue'
import VaTopbar from './Topbar/VaTopbar.vue'
import VaMobile from './Mobile/VaMobile.vue'
import VaFormItem from './Form/VaFormItem.vue'
import VaCollapse from './Collapse/VaCollapse.vue'
import VaCollapsePanel from './Collapse/VaCollapsePanel.vue'
import VaCollapseTransition from './Collapse/VaCollapseTransition.vue'
import VaMinibar from './Minibar/VaMinibar.vue'
import VaLoading from './Loading/VaLoading.vue'
import VaTooltip from './Tooltip/VaTooltip.vue'
import VaDesktop from './Desktop/VaDesktop.vue'
import VaRadioBtn from './Radio/VaRadioBtn.vue'
import VaSidebar from './Sidebar/VaSidebar.vue'
import VaAppConfig from './App/VaAppConfig.vue'
import VaInputOps from './Input/VaInputOps.vue'
import VaLozenge from './Lozenge/VaLozenge.vue'
import VaContainer from './Grid/VaContainer.vue'
import VaDropdown from './Dropdown/VaDropdown.vue'
import VaCheckbox from './Checkbox/VaCheckbox.vue'
import VaTextarea from './Textarea/VaTextarea.vue'
import VaRadioGroup from './Radio/VaRadioGroup.vue'
import VaModalMethod from './Modal/VaModalMethod.js'
import VaToastMethod from './Toast/VaToastMethod.js'
import VaSidebarGroup from './Sidebar/VaSidebarGroup'
import VaAnimQueue from './AnimQueue/VaAnimQueue.vue'
import VaTypeahead from './Typeahead/VaTypeahead.vue'
import VaButtonGroup from './Button/VaButtonGroup.vue'
import VaMinibarItem from './Minibar/VaMinibarItem.vue'
import VaTimepicker from './Timepicker/VaTimepicker.vue'
import VaDatepicker from './Datepicker/VaDatepicker.vue'
import VaPageHeader from './PageHeader/VaPageHeader.vue'
import VaBreadcrumb from './Breadcrumb/VaBreadcrumb.vue'
import VaCheckboxBtn from './Checkbox/VaCheckboxBtn.vue'
import VaPagination from './Pagination/VaPagination.vue'
import VaColorPicker from './ColorPicker/VaColorPicker.vue'
import VaSidebarHeader from './Sidebar/VaSidebarHeader.vue'
import VaPlaceholder from './Placeholder/VaPlaceholder.vue'
import VaCheckboxGroup from './Checkbox/VaCheckboxGroup.vue'
import VaNotification from './Notification/VaNotification.vue'
import VaBreadcrumbItem from './Breadcrumb/VaBreadcrumbItem.vue'
import VaPaginationItem from './Pagination/VaPaginationItem.vue'
import VaSidebarGroupItem from './Sidebar/VaSidebarGroupItem.vue'
import VaSidebarGroupLevel from './Sidebar/VaSidebarGroupLevel.vue'
import VaSidebarGroupTitle from './Sidebar/VaSidebarGroupTitle.vue'
import VaPlaceholderText from './Placeholder/VaPlaceholderText.vue'
import VaPlaceholderImage from './Placeholder/VaPlaceholderImage.vue'
import VaColorPickerPopup from './ColorPicker/VaColorPickerPopup.vue'
import VaSidebarGroupToggle from './Sidebar/VaSidebarGroupToggle.vue'
import VaProgressTracker from './ProgressTracker/VaProgressTracker.vue'
import VaPlaceholderHeading from './Placeholder/VaPlaceholderHeading.vue'
import VaFilePicker from './FilePicker/VaFilePicker.vue'
import VaNotificationMethod from './Notification/VaNotificationMethod.js'
 */

//
  
var script$B = {
  name: 'va-app',
  components:AaaVues,
  data () {
    return {
      mbTopItems: [
        { icon:'vuejs',  brand: true, iconStyle:'brands', size: '22px', tooltip:'Made with Vue.js'},
        { icon:'search', tooltip:'Search', method:this.showAside },
        { icon:'user',   tooltip:'Account' } ],
      mbBottomItems: [
        { icon: 'question-circle'} ],
      groupOneItems: [
        { name: 'Sandbox', route: '/' } ],
      groupTwoItems: [ {
          name: 'External',
          children: [
            { name:'GitHub', external:'https://github.com/nvms/vue-atlas',       icon:'github-alt', iconStyle:'brands' },
            { name:'npm',    external:'https://www.npmjs.com/package/vue-atlas', icon:'npm', iconStyle:'brands' } ] }
            ] }
  },
  methods: {
    showModal    () { this.$refs.modal.open();  },
    modalConfirm () { this.$refs.modal.close(); },
    showAside    () { this.$refs.aside.open();  } }
};

/* script */
const __vue_script__$B = script$B;
// For security concerns, we use only base name in production mode. See https://github.com/vuejs/rollup-plugin-vue/issues/258
script$B.__file = "/Users/ax/Documents/prj/cue/app/aaa/vue/App.vue";

/* template */
var __vue_render__$B = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      attrs: {
        "desktop-sidebar-width": 195,
        "desktop-minibar-width": 0,
        "desktop-topbar-height": 45
      }
    },
    [
      _c("va-app-config"),
      _vm._v(" "),
      _c("va-topbar"),
      _vm._v(" "),
      _c("va-minibar", {
        attrs: {
          "top-items": _vm.mbTopItems,
          "bottom-items": _vm.mbBottomItems
        }
      }),
      _vm._v(" "),
      _c(
        "va-sidebar",
        { attrs: { compact: "" } },
        [
          _c("va-sidebar-group", {
            attrs: {
              "show-toggle": "",
              title: "Navigation",
              items: _vm.groupOneItems
            }
          }),
          _vm._v(" "),
          _c("va-sidebar-group", {
            attrs: {
              "show-toggle": "",
              title: "Resources",
              items: _vm.groupTwoItems
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "va-page",
        { attrs: { size: "lg" } },
        [
          _c("va-page-header", [
            _c(
              "div",
              { attrs: { slot: "breadcrumb" }, slot: "breadcrumb" },
              [
                _c(
                  "va-breadcrumb",
                  { attrs: { separator: "/" } },
                  [
                    _c("va-breadcrumb-item", { attrs: { to: { path: "/" } } }, [
                      _vm._v("atlas")
                    ]),
                    _vm._v(" "),
                    _c("va-breadcrumb-item", [_vm._v("Sandbox")])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { attrs: { slot: "title" }, slot: "title" }, [
              _vm._v("Sandbox")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { attrs: { slot: "actions" }, slot: "actions" },
              [
                _c(
                  "va-button",
                  {
                    attrs: {
                      type: "subtle-link",
                      href: "https://github.com/nvms/vue-atlas"
                    }
                  },
                  [_vm._v("GitHub")]
                ),
                _vm._v(" "),
                _c(
                  "va-button",
                  {
                    attrs: {
                      type: "subtle-link",
                      href: "https://www.npmjs.com/package/vue-atlas"
                    }
                  },
                  [_vm._v("npm")]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "va-button",
            {
              attrs: { block: "", "icon-after": "window-maximize" },
              on: { click: _vm.showModal }
            },
            [_vm._v("Modal")]
          ),
          _vm._v(" "),
          _c(
            "va-modal",
            {
              ref: "modal",
              attrs: { title: "Modal title" },
              on: { confirm: _vm.modalConfirm }
            },
            [
              _c("div", { attrs: { slot: "body" }, slot: "body" }, [
                _c("p", [_vm._v("That's some fancy modal.")])
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("va-aside", { ref: "aside", attrs: { placement: "right" } }, [
        _vm._v("Hey!")
      ])
    ],
    1
  )
};
var __vue_staticRenderFns__$B = [];
__vue_render__$B._withStripped = true;

  /* style */
  const __vue_inject_styles__$B = undefined;
  /* scoped */
  const __vue_scope_id__$B = undefined;
  /* module identifier */
  const __vue_module_identifier__$B = undefined;
  /* functional template */
  const __vue_is_functional_template__$B = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var App = normalizeComponent(
    { render: __vue_render__$B, staticRenderFns: __vue_staticRenderFns__$B },
    __vue_inject_styles__$B,
    __vue_script__$B,
    __vue_scope_id__$B,
    __vue_is_functional_template__$B,
    __vue_module_identifier__$B,
    undefined,
    undefined
  );

export default App;
