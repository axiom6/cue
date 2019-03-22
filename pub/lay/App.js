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

var Util,
  indexOf = [].indexOf,
  hasProp = {}.hasOwnProperty;

Util = (function() {
  class Util {
    constructor() {
      this.dummy = "";
      Util.noop(Util.loadScript, Util.hasMethod, Util.dependsOn, Util.setInstance, Util.getInstance);
      Util.noop(Util.toError, Util.logJSON, Util.isNot, Util.isVal, Util.isntStr);
      Util.noop(Util.inIndex, Util.isEvent, Util.atArray, Util.atLength, Util.isStrInteger);
      Util.noop(Util.isStrCurrency, Util.isStrFloat, Util.isDefs, Util.toPosition, Util.xyScale);
      Util.noop(Util.resizeTimeout, Util.eventErrorCode, Util.toAlpha, Util.hashCode, Util.pdfCSS);
      Util.noop(Util.padStr, Util.isoDateTime, Util.toHMS, Util.toInt, Util.hex32);
      Util.noop(Util.toFloat, Util.toCap, Util.match_test, Util.svgId, Util.saveFile);
    }

    static element($elem) {
      // console.log( 'Dom.element()', $elem, Dom.isJQueryElem( $elem ) )
      if (Util.isJQueryElem($elem)) {
        return $elem.get(0);
      } else if (Util.isStr($elem)) {
        return $($elem).get(0);
      } else {
        console.error('Dom.domElement( $elem )', typeof $elem, $elem, '$elem is neither jQuery object nor selector');
        return $().get(0);
      }
    }

    static isJQueryElem($elem) {
      return (typeof $ !== "undefined" && $ !== null) && ($elem != null) && ($elem instanceof $ || indexOf.call(Object($elem), 'jquery') >= 0);
    }

    static loadScript(path, fn) {
      var head, script;
      head = document.getElementsByTagName('head')[0];
      script = document.createElement('script');
      script.src = path;
      script.async = false;
      if (Util.isFunc(fn)) {
        script.onload = fn;
      }
      head.appendChild(script);
    }

    static ready(fn) {
      if (!Util.isFunc(fn)) { // Sanity check
        return;
      } else if (Util.skipReady) {
        fn();
      } else if (document.readyState === 'complete') { // If document is already loaded, run method
        fn();
      } else {
        document.addEventListener('DOMContentLoaded', fn, false);
      }
    }

    static isChild(key) {
      var a;
      a = key.charAt(0);
      return a === a.toUpperCase() && a !== '$';
    }

    // ---- Inquiry ----
    static hasMethod(obj, method, issue = false) {
      var has;
      has = typeof obj[method] === 'function';
      if (!has && issue) {
        console.log('Util.hasMethod()', method, has);
      }
      return has;
    }

    static hasGlobal(global, issue = true) {
      var has;
      has = window[global] != null;
      if (!has && issue) {
        console.error(`Util.hasGlobal() ${global} not present`);
      }
      return has;
    }

    static getGlobal(global, issue = true) {
      if (Util.hasGlobal(global, issue)) {
        return window[global];
      } else {
        return null;
      }
    }

    static hasModule(path, issue = true) {
      var has;
      has = Util.modules[path] != null;
      if (!has && issue) {
        console.error(`Util.hasModule() ${path} not present`);
      }
      return has;
    }

    static dependsOn() {
      var arg, has, j, len1, ok;
      ok = true;
      for (j = 0, len1 = arguments.length; j < len1; j++) {
        arg = arguments[j];
        has = Util.hasGlobal(arg, false) || Util.hasModule(arg, false) || Util.hasPlugin(arg, false);
        if (!has) {
          console.error('Missing Dependency', arg);
        }
        if (has === false) {
          ok = has;
        }
      }
      return ok;
    }

    // ---- Instances ----
    static setInstance(instance, path) {
      console.log('Util.setInstance()', path);
      if ((instance == null) && (path != null)) {
        console.error('Util.setInstance() instance not defined for path', path);
      } else if ((instance != null) && (path == null)) {
        console.error('Util.setInstance() path not defined for instance', instance.toString());
      } else {
        Util.instances[path] = instance;
      }
    }

    static getInstance(path, dbg = false) {
      var instance;
      if (dbg) {
        console.log('getInstance', path);
      }
      instance = Util.instances[path];
      if (instance == null) {
        console.error('Util.getInstance() instance not defined for path', path);
      }
      return instance;
    }

    // ---- Logging -------

    // args should be the arguments passed by the original calling function
    // This method should not be called directly
    static toStrArgs(prefix, args) {
      var arg, j, len1, str;
      Util.logStackNum = 0;
      str = Util.isStr(prefix) ? prefix + " " : "";
      for (j = 0, len1 = args.length; j < len1; j++) {
        arg = args[j];
        str += Util.toStr(arg) + " ";
      }
      return str;
    }

    static toStr(arg) {
      Util.logStackNum++;
      if (Util.logStackNum > Util.logStackMax) {
        return '';
      }
      switch (typeof arg) {
        case 'null':
          return 'null';
        case 'string':
          return Util.toStrStr(arg);
        case 'number':
          return arg.toString();
        case 'object':
          return Util.toStrObj(arg);
        default:
          return arg;
      }
    }

    // Recusively stringify arrays and objects
    static toStrObj(arg) {
      var a, j, key, len1, str, val;
      str = "";
      if (arg == null) {
        str += "null";
      } else if (Util.isArray(arg)) {
        str += "[ ";
        for (j = 0, len1 = arg.length; j < len1; j++) {
          a = arg[j];
          str += Util.toStr(a) + ",";
        }
        str = str.substr(0, str.length - 1) + " ]";
      } else if (Util.isObjEmpty(arg)) {
        str += "{}";
      } else {
        str += "{ ";
        for (key in arg) {
          if (!hasProp.call(arg, key)) continue;
          val = arg[key];
          str += key + ":" + Util.toStr(val) + ", ";
        }
        str = str.substr(0, str.length - 2) + " }"; // Removes last comma
      }
      return str;
    }

    static toStrStr(arg) {
      if (arg.length > 0) {
        return arg;
      } else {
        return '""';
      }
    }

    static toOut(obj, level = 0) {
      var ind, key, out, val;
      ind = Util.indent(level * 2);
      out = "";
      for (key in obj) {
        if (!hasProp.call(obj, key)) continue;
        val = obj[key];
        if (!(key.charAt(0) === key.charAt(0).toUpperCase())) {
          continue;
        }
        out += ind + key + '\n';
        if (Util.isObj(val)) {
          out += Util.toOut(val, level + 1);
        }
      }
      return out;
    }

    // Consume unused but mandated variable to pass code inspections
    static noop(...args) {
    }

    static toError() {
      var str;
      str = Util.toStrArgs('Error:', arguments);
      return new Error(str);
    }

    static alert() {
      var str;
      str = Util.toStrArgs('', arguments);
      console.log(str);
      alert(str);
    }

    static logJSON(json) {
      var obj;
      obj = JSON.parse(json);
      console.log(obj);
    }

    static jQueryHasNotBeenLoaded() {
      if (typeof jQuery === 'undefined') {
        console.error('Util JQuery has not been loaded');
        return true;
      } else {
        return false;
      }
    }

    // ------ Validators ------
    static isDef(d) {
      return d !== null && typeof d !== 'undefined';
    }

    static isNot(d) {
      return !Util.isDef(d);
    }

    static isStr(s) {
      return Util.isDef(s) && typeof s === "string" && s.length > 0;
    }

    static isntStr(s) {
      return !Util.isStr(s);
    }

    static isNum(n) {
      return !isNaN(n);
    }

    static isObj(o) {
      return Util.isDef(o) && typeof o === "object";
    }

    static isVal(v) {
      return typeof v === "number" || typeof v === "string" || typeof v === "boolean";
    }

    static isNaN(v) {
      return Util.isDef(v) && typeof v === "number" && Number.isNaN(v);
    }

    static isSym(v) {
      return typeof v === "symbol";
    }

    static isObjEmpty(o) {
      return Util.isObj(o) && Object.getOwnPropertyNames(o).length === 0;
    }

    static isFunc(f) {
      return Util.isDef(f) && typeof f === "function";
    }

    static isArray(a) {
      return Util.isDef(a) && typeof a !== "string" && (a.length != null) && a.length > 0;
    }

    static isEvent(e) {
      return Util.isDef(e) && (e.target != null);
    }

    static inIndex(a, i) {
      return Util.isArray(a) && 0 <= i && i < a.length;
    }

    static inArray(a, e) {
      return Util.isArray(a) && a.indexOf(e) > -1;
    }

    static atArray(a, e) {
      if (Util.inArray(a, e)) {
        return a.indexOf(e);
      } else {
        return -1;
      }
    }

    static inString(s, e) {
      return Util.isStr(s) && s.indexOf(e) > -1;
    }

    static atLength(a, n) {
      return Util.isArray(a) && a.length === n;
    }

    static head(a) {
      if (Util.isArray(a)) {
        return a[0];
      } else {
        return null;
      }
    }

    static tail(a) {
      if (Util.isArray(a)) {
        return a[a.length - 1];
      } else {
        return null;
      }
    }

    static time() {
      return new Date().getTime();
    }

    static isStrInteger(s) {
      return /^\s*(\+|-)?\d+\s*$/.test(s);
    }

    static isStrFloat(s) {
      return /^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/.test(s);
    }

    static isStrCurrency(s) {
      return /^\s*(\+|-)?((\d+(\.\d\d)?)|(\.\d\d))\s*$/.test(s);
    }

    //@isStrEmail:(s)   -> /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test(s)
    static isDefs() {
      var arg, j, len1;
      for (j = 0, len1 = arguments.length; j < len1; j++) {
        arg = arguments[j];
        if (arg == null) {
          return false;
        }
      }
      return true;
    }

    static checkTypes(type, args) {
      var arg, key;
      for (key in args) {
        if (!hasProp.call(args, key)) continue;
        arg = args[key];
        // console.log( "Util.checkTypes isNum() argument #{key} is #{type}", arg, Util.isNum(arg) )
        if (!Util.checkType(type, arg)) {
          console.log(`Util.checkTypes(type,args) argument ${key} is not ${type}`, arg);
          console.trace();
        }
      }
    }

    static checkType(type, arg) {
      switch (type) {
        case "string":
          return Util.isStr(arg);
        case "number":
          return Util.isNum(arg);
        case "object":
          return Util.isObj(arg);
        case "symbol":
          return Util.isSym(arg);
        case "function":
          return Util.isFunc(arg);
        case "array":
          return Util.isArray(arg);
        default:
          return false;
      }
    }

    static copyProperties(to, from) {
      var key, val;
      for (key in from) {
        if (!hasProp.call(from, key)) continue;
        val = from[key];
        to[key] = val;
      }
      return to;
    }

    static contains(array, value) {
      return Util.isArray(array) && array.indexOf(value) !== -1;
    }

    // Screen absolute (left top width height) percent positioning and scaling

    // Percent array to position mapping
    static toPosition(array) {
      return {
        left: array[0],
        top: array[1],
        width: array[2],
        height: array[3]
      };
    }

    // Adds Percent from array for CSS position mapping
    static toPositionPc(array) {
      return {
        position: 'absolute',
        left: array[0] + '%',
        top: array[1] + '%',
        width: array[2] + '%',
        height: array[3] + '%'
      };
    }

    static xyScale(prev, next, port, land) {
      var xn, xp, xs, yn, yp, ys;
      xp = 0;
      yp = 0;
      xn = 0;
      yn = 0;
      [xp, yp] = prev.orientation === 'Portrait' ? [port[2], port[3]] : [land[2], land[3]];
      [xn, yn] = next.orientation === 'Portrait' ? [port[2], port[3]] : [land[2], land[3]];
      xs = next.width * xn / (prev.width * xp);
      ys = next.height * yn / (prev.height * yp);
      return [xs, ys];
    }

    // ----------------- Guarded jQuery dependent calls -----------------
    static resize(callback) {
      window.onresize = function() {
        return setTimeout(callback, 100);
      };
    }

    static resizeTimeout(callback, timeout = null) {
      window.onresize = function() {
        if (timeout != null) {
          clearTimeout(timeout);
        }
        return timeout = setTimeout(callback, 100);
      };
    }

    // ------ Html ------------
    static getHtmlId(name, type = '', ext = '') {
      var id;
      id = name + type + ext + Util.uniqueIdExt;
      return id.replace(/[ \.]/g, "");
    }

    static htmlId(name, type = '', ext = '', issueError = true) {
      var id;
      id = Util.getHtmlId(name, type, ext);
      if ((Util.htmlIds[id] != null) && issueError) {
        console.error('Util.htmlId() duplicate html id', id);
      }
      Util.htmlIds[id] = id;
      return id;
    }

    static clearHtmlIds() {
      return Util.htmlIds = {};
    }

    // ------ Converters ------
    static extend(obj, mixin) {
      var method, name;
      for (name in mixin) {
        if (!hasProp.call(mixin, name)) continue;
        method = mixin[name];
        obj[name] = method;
      }
      return obj;
    }

    static include(klass, mixin) {
      return Util.extend(klass.prototype, mixin);
    }

    static eventErrorCode(e) {
      var errorCode;
      errorCode = (e.target != null) && e.target.errorCode ? e.target.errorCode : 'unknown';
      return {
        errorCode: errorCode
      };
    }

    static toName(s1) {
      var s2, s3, s4, s5;
      if (s1 == null) {
        console.trace();
        return "???";
      }
      s2 = s1.replace('_', ' ');
      s3 = s2.replace(/([A-Z][a-z])/g, ' $1');
      s4 = s3.replace(/([A-Z]+)/g, ' $1');
      s5 = s4.replace(/([0-9][A-Z])/g, ' $1');
      return s5;
    }

    static toAlpha(s1) {
      return s1.replace(/\W/g, '');
    }

    static indent(n) {
      var i, j, ref, str;
      str = '';
      for (i = j = 0, ref = n; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
        str += ' ';
      }
      return str;
    }

    static hashCode(str) {
      var hash, i, j, ref;
      hash = 0;
      for (i = j = 0, ref = str.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
      }
      return hash;
    }

    static lastTok(str, delim) {
      return str.split(delim).pop();
    }

    static firstTok(str, delim) {
      if (Util.isStr(str) && (str.split != null)) {
        return str.split(delim)[0];
      } else {
        console.error("Util.firstTok() str is not at string", str);
        return '';
      }
    }

    static pdfCSS(href) {
      var link;
      if (!window.location.search.match(/pdf/gi)) {
        return;
      }
      link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = href;
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    /*
    parse = document.createElement('a')
    parse.href =  "http://example.com:3000/dir1/dir2/file.ext?search=test#hash"
    parse.protocol  "http:"
    parse.hostname  "example.com"
    parse.port      "3000"
    parse.pathname  "/dir1/dir2/file.ext"
    parse.segments  ['dir1','dir2','file.ext']
    parse.fileExt   ['file','ext']
    parse.file       'file'
    parse.ext        'ext'
    parse.search    "?search=test"
    parse.hash      "#hash"
    parse.host      "example.com:3000"
    */
    static parseURI(uri) {
      var a, j, len1, name, nameValue, nameValues, parse, value;
      parse = {};
      parse.params = {};
      a = document.createElement('a');
      a.href = uri;
      parse.href = a.href;
      parse.protocol = a.protocol;
      parse.hostname = a.hostname;
      parse.port = a.port;
      parse.segments = a.pathname.split('/');
      parse.fileExt = parse.segments.pop().split('.');
      parse.file = parse.fileExt[0];
      parse.ext = parse.fileExt.length === 2 ? parse.fileExt[1] : '';
      parse.dbName = parse.file;
      parse.fragment = a.hash;
      parse.query = Util.isStr(a.search) ? a.search.substring(1) : '';
      nameValues = parse.query.split('&');
      if (Util.isArray(nameValues)) {
        for (j = 0, len1 = nameValues.length; j < len1; j++) {
          nameValue = nameValues[j];
          name = '';
          value = '';
          [name, value] = nameValue.split('=');
          parse.params[name] = value;
        }
      }
      return parse;
    }

    static quicksort(array) {
      var a, head, large, small;
      if (array.length === 0) {
        return [];
      }
      head = array.pop();
      small = (function() {
        var j, len1, results;
        results = [];
        for (j = 0, len1 = array.length; j < len1; j++) {
          a = array[j];
          if (a <= head) {
            results.push(a);
          }
        }
        return results;
      })();
      large = (function() {
        var j, len1, results;
        results = [];
        for (j = 0, len1 = array.length; j < len1; j++) {
          a = array[j];
          if (a > head) {
            results.push(a);
          }
        }
        return results;
      })();
      return (Util.quicksort(small)).concat([head]).concat(Util.quicksort(large));
    }

    static pad(n) {
      if (n < 10) {
        return '0' + n;
      } else {
        return n;
      }
    }

    static padStr(n) {
      if (n < 10) {
        return '0' + n.toString();
      } else {
        return n.toString();
      }
    }

    // Return and ISO formated data string
    static isoDateTime(dateIn) {
      var date, pad;
      date = dateIn != null ? dateIn : new Date();
      console.log('Util.isoDatetime()', date);
      console.log('Util.isoDatetime()', date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes, date.getUTCSeconds);
      pad = function(n) {
        return Util.pad(n);
      };
      return date.getFullYear()(+'-' + pad(date.getUTCMonth() + 1) + '-' + pad(date.getUTCDate()) + 'T' + pad(date.getUTCHours()) + ':' + pad(date.getUTCMinutes()) + ':' + pad(date.getUTCSeconds()) + 'Z');
    }

    static toHMS(unixTime) {
      var ampm, date, hour, min, sec, time;
      date = new Date();
      if (Util.isNum(unixTime)) {
        date.setTime(unixTime);
      }
      hour = date.getHours();
      ampm = 'AM';
      if (hour > 12) {
        hour = hour - 12;
        ampm = 'PM';
      }
      min = ('0' + date.getMinutes()).slice(-2);
      sec = ('0' + date.getSeconds()).slice(-2);
      time = `${hour}:${min}:${sec} ${ampm}`;
      return time;
    }

    // Generate four random hex digits
    static hex4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    // Generate a 32 bits hex
    static hex32() {
      var hex, i, j;
      hex = this.hex4();
      for (i = j = 1; j <= 4; i = ++j) {
        Util.noop(i);
        hex += this.hex4();
      }
      return hex;
    }

    // Return a number with fixed decimal places
    static toFixed(arg, dec = 2) {
      var num;
      num = (function() {
        switch (typeof arg) {
          case 'number':
            return arg;
          case 'string':
            return parseFloat(arg);
          default:
            return 0;
        }
      })();
      return num.toFixed(dec);
    }

    static toInt(arg) {
      switch (typeof arg) {
        case 'number':
          return Math.floor(arg);
        case 'string':
          return parseInt(arg);
        default:
          return 0;
      }
    }

    static toFloat(arg) {
      switch (typeof arg) {
        case 'number':
          return arg;
        case 'string':
          return parseFloat(arg);
        default:
          return 0;
      }
    }

    static toCap(str) {
      return str.charAt(0).toUpperCase() + str.substring(1);
    }

    static unCap(str) {
      return str.charAt(0).toLowerCase() + str.substring(1);
    }

    static toArray(objects, whereIn = null, keyField = 'id') {
      var array, j, key, len1, object, where;
      where = whereIn != null ? whereIn : function() {
        return true;
      };
      array = [];
      if (Util.isArray(objects)) {
        for (j = 0, len1 = array.length; j < len1; j++) {
          object = array[j];
          if (!(where(object))) {
            continue;
          }
          if ((object['id'] != null) && keyField !== 'id') {
            object[keyField] = object['id'];
          }
          array.push(object);
        }
      } else {
        for (key in objects) {
          if (!hasProp.call(objects, key)) continue;
          object = objects[key];
          if (!(where(key, object))) {
            continue;
          }
          object[keyField] = key;
          array.push(object);
        }
      }
      return array;
    }

    static toObjects(rows, whereIn = null, keyField = 'id') {
      var j, key, len1, objects, row, where;
      where = whereIn != null ? whereIn : function() {
        return true;
      };
      objects = {};
      if (Util.isArray(rows)) {
        for (j = 0, len1 = rows.length; j < len1; j++) {
          row = rows[j];
          if (!(where(row))) {
            continue;
          }
          if ((row['id'] != null) && keyField !== 'id') {
            row[keyField] = row['id'];
          }
          objects[row[keyField]] = row;
        }
      } else {
        for (key in rows) {
          row = rows[key];
          if (!(where(row))) {
            continue;
          }
          row[keyField] = key;
          objects[key] = row;
        }
      }
      return objects;
    }

    static lenObject(object, where = function() {
        return true;
      }) {
      var key, len, obj;
      len = 0;
      for (key in object) {
        if (!hasProp.call(object, key)) continue;
        obj = object[key];
        if (where(key)) {
          len = len + 1;
        }
      }
      return len;
    }

    // Beautiful Code, Chapter 1.
    // Implements a regular expression matcher that supports character matches,
    // '.', '^', '$', and '*'.

    // Search for the regexp anywhere in the text.
    static match(regexp, text) {
      if (regexp[0] === '^') {
        return Util.match_here(regexp.slice(1), text);
      }
      while (text) {
        if (Util.match_here(regexp, text)) {
          return true;
        }
        text = text.slice(1);
      }
      return false;
    }

    // Search for the regexp at the beginning of the text.
    static match_here(regexp, text) {
      var cur, next;
      cur = "";
      next = "";
      [cur, next] = [regexp[0], regexp[1]];
      if (regexp.length === 0) {
        return true;
      }
      if (next === '*') {
        return Util.match_star(cur, regexp.slice(2), text);
      }
      if (cur === '$' && !next) {
        return text.length === 0;
      }
      if (text && (cur === '.' || cur === text[0])) {
        return Util.match_here(regexp.slice(1), text.slice(1));
      }
      return false;
    }

    // Search for a kleene star match at the beginning of the text.
    static match_star(c, regexp, text) {
      while (true) {
        if (Util.match_here(regexp, text)) {
          return true;
        }
        if (!(text && (text[0] === c || c === '.'))) {
          return false;
        }
        text = text.slice(1);
      }
    }

    static match_test() {
      console.log(Util.match_args("ex", "some text"));
      console.log(Util.match_args("s..t", "spit"));
      console.log(Util.match_args("^..t", "buttercup"));
      console.log(Util.match_args("i..$", "cherries"));
      console.log(Util.match_args("o*m", "vrooooommm!"));
      return console.log(Util.match_args("^hel*o$", "hellllllo"));
    }

    static match_args(regexp, text) {
      return console.log(regexp, text, Util.match(regexp, text));
    }

    static svgId(name, type, svgType, check = false) {
      if (check) {
        return this.id(name, type, svgType);
      } else {
        return name + type + svgType;
      }
    }

    static css(name, type = '') {
      return name + type;
    }

    static icon(name, type, fa) {
      return name + type + ' fa fa-' + fa;
    }

    // json - "application/json;charset=utf-8"
    // svg
    static mineType(fileType) {
      var mine;
      mine = (function() {
        switch (fileType) {
          case 'json':
            return "application/json";
          case 'adoc':
            return "text/plain";
          case 'html':
            return "text/html";
          case 'svg':
            return "image/svg+xml";
          default:
            return "text/plain";
        }
      })();
      mine += ";charset=utf-8";
      return mine;
    }

    static saveFile(stuff, fileName, fileType) {
      var blob, downloadLink, url;
      blob = new Blob([stuff], {
        type: this.mineType(fileType)
      });
      url = window['URL'].createObjectURL(blob);
      downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = fileName;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }

  }
  Util.myVar = 'myVar';

  Util.skipReady = false;

  Util.isCommonJS = false;

  Util.isWebPack = false;

  Util.Load = null;

  Util.ModuleGlobals = [];

  Util.app = {};

  Util.testTrue = true;

  Util.debug = false;

  Util.message = false;

  Util.count = 0;

  Util.modules = [];

  Util.instances = [];

  Util.globalPaths = [];

  Util.root = '../../'; // Used internally

  Util.rootJS = Util.root + 'js/';

  Util.databases = {};

  Util.htmlIds = {}; // Object of unique Html Ids

  Util.logStackNum = 0;

  Util.logStackMax = 100;

  Util.fills = {};

  Util.uniqueIdExt = '';

  return Util;

}).call(undefined);

var Util$1 = Util;

var Data,
  hasProp$1 = {}.hasOwnProperty;

Data = (function() {
  class Data {
    // ---- Read JSON with batch async
    static batchRead(batch, callback, create = null) {
      var key, obj;
      for (key in batch) {
        if (!hasProp$1.call(batch, key)) continue;
        obj = batch[key];
        this.batchJSON(obj, batch, callback, create);
      }
    }

    static batchComplete(batch) {
      var key, obj;
      for (key in batch) {
        if (!hasProp$1.call(batch, key)) continue;
        obj = batch[key];
        if (!obj['data']) {
          return false;
        }
      }
      return true;
    }

    static batchJSON(obj, batch, callback, create = null) {
      var settings, url;
      if (Util$1.jQueryHasNotBeenLoaded()) {
        return;
      }
      url = Data.baseUrl() + obj.url;
      settings = {
        url: url,
        type: 'GET',
        dataType: 'json',
        processData: false,
        contentType: 'application/json',
        accepts: 'application/json'
      };
      settings.success = (data, status, jqXHR) => {
        Util$1.noop(status, jqXHR);
        obj['data'] = Util$1.isFunc(create) ? create(data, obj.type) : data;
        if (Data.batchComplete(batch)) {
          return callback(batch);
        }
      };
      settings.error = (jqXHR, status, error) => {
        Util$1.noop(jqXHR);
        return console.error("Data.batchJSON()", {
          url: url,
          status: status,
          error: error
        });
      };
      $.ajax(settings);
    }

    static planeData(batch, plane) {
      return batch[plane].data[plane];
    }

    static baseUrl() {
      if (window.location.href.includes('localhost')) {
        return Data.local;
      } else {
        return Data.hosted;
      }
    }

    static asyncJSON(url, callback) {
      var settings;
      if (Util$1.jQueryHasNotBeenLoaded()) {
        return;
      }
      url = Data.baseUrl() + url;
      settings = {
        url: url,
        type: 'GET',
        dataType: 'json',
        processData: false,
        contentType: 'application/json',
        accepts: 'application/json'
      };
      settings.success = (data, status, jqXHR) => {
        Util$1.noop(status, jqXHR);
        return callback(data);
      };
      settings.error = (jqXHR, status, error) => {
        Util$1.noop(jqXHR);
        return console.error("Data.asyncJSON()", {
          url: url,
          status: status,
          error: error
        });
      };
      $.ajax(settings);
    }

    static syncJSON(path) {
      var jqxhr;
      if (Util$1.jQueryHasNotBeenLoaded()) {
        return {};
      }
      jqxhr = $.ajax({
        type: "GET",
        url: path,
        dataType: 'json',
        cache: false,
        async: false
      });
      return jqxhr['responseJSON'];
    }

    // ------ Quick JSON read ------
    static read(url, doJson) {
      if (Util$1.isObj(url)) {
        Data.readFile(url, doJson);
      } else {
        Data.readAjax(url, doJson);
      }
    }

    static readFile(fileObj, doJson) {
      var fileReader;
      fileReader = new FileReader();
      fileReader.onerror = function(e) {
        return console.error('Store.readFile', fileObj.name, e.target.error);
      };
      fileReader.onload = function(e) {
        return doJson(JSON.parse(e.target.result));
      };
      fileReader.readAsText(fileObj);
    }

    static readAjax(url, doJson) { //jsonp
      var settings;
      settings = {
        url: url,
        type: 'get',
        dataType: 'json',
        processData: false,
        contentType: 'application/json',
        accepts: 'application/json'
      };
      settings.success = (data, status, jqXHR) => {
        var json;
        Util$1.noop(status, jqXHR);
        json = JSON.parse(data);
        return doJson(json);
      };
      settings.error = (jqXHR, status, error) => {
        return console.error('Store.ajaxGet', {
          url: url,
          status: status,
          error: error
        });
      };
      $.ajax(settings);
    }

    static saveFile(data, fileName) {
      var downloadLink, htmlBlob, htmlUrl;
      htmlBlob = new Blob([data], {
        type: "text/html;charset=utf-8"
      });
      htmlUrl = window['URL'].createObjectURL(htmlBlob);
      downloadLink = document.createElement("a");
      downloadLink.href = htmlUrl;
      downloadLink.download = fileName;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }

  }
  Data.hosted = "https://ui-48413.firebaseapp.com/";

  Data.local = "http://localhost:63342/muse/public/";

  Data.localJSON = "http://localhost:63342/muse/public/json";

  Util$1.noop(Data.hosted, Data.batchRead, Data.syncJSON, Data.planeData);

  Data.Databases = {
    color: {
      id: "color",
      key: "id",
      uriLoc: Data.localJSON + '/color',
      uriWeb: 'https://github.com/axiom6/ui/data/color',
      tables: ['master', 'ncs', 'gray']
    },
    exit: {
      id: "exit",
      key: "_id",
      uriLoc: Data.localJSON + '/exit',
      uriWeb: 'https://github.com/axiom6/ui/data/exit',
      tables: ['ConditionsEast', 'ConditionsWest', 'Deals', 'Forecasts', 'I70Mileposts', 'SegmentsEast', 'SegmentsWest']
    },
    radar: {
      id: "radar",
      key: "name",
      uriLoc: Data.localJSON + '/radar',
      uriWeb: 'https://github.com/axiom6/ui/data/radar',
      tables: ['axiom-techs', 'axiom-quads', 'axiom-techs-schema', 'axiom-quads-schema', 'polyglot-principles']
    },
    sankey: {
      id: "radar",
      uriLoc: Data.localJSON + '/sankey',
      uriWeb: 'https://github.com/axiom6/ui/data/sankey',
      tables: ['energy', 'flare', 'noob', 'plot']
    },
    muse: {
      id: "muse",
      uriLoc: Data.localJSON + '/muse',
      uriWeb: 'https://github.com/axiom6/ui/data/muse',
      tables: ['Columns', 'Rows', 'Practices']
    },
    pivot: {
      id: "pivot",
      uriLoc: Data.localJSON + '/pivot',
      uriWeb: 'https://github.com/axiom6/ui/data/pivot',
      tables: ['mps']
    },
    geo: {
      id: "geo",
      uriLoc: Data.localJSON + '/geo',
      uriWeb: 'https://github.com/axiom6/ui/data/geo',
      tables: ['upperLarimerGeo'],
      schemas: ['GeoJSON']
    },
    f6s: {
      id: "f6s",
      uriLoc: Data.localJSON + '/f6s',
      uriWeb: 'https://github.com/axiom6/ui/data/fs6',
      tables: ['applications', 'followers', 'mentors', 'profile', 'teams']
    }
  };

  return Data;

}).call(undefined);

var Data$1 = Data;

var Stream,
  hasProp$2 = {}.hasOwnProperty;

// Stream   is standalone base class for all publish and subscribe steams
// StreamRx extends Stream for RxJS
// SteamsXs extends Stream for xstream
Stream = class Stream {
  constructor(subjectNames, info) {
    var i, len, ref, subjectName;
    this.subjectNames = subjectNames;
    this.info = info;
    this.subjects = {};
    ref = this.subjectNames;
    for (i = 0, len = ref.length; i < len; i++) {
      subjectName = ref[i];
      this.addSubject(subjectName);
    }
    Util$1.noop(this.allInfo);
  }

  subscribe(subjectName, subscriberName, onCallback) {
    var subject;
    subject = this.getSubject(subjectName, false);
    subject['subscribers'][subscriberName] = onCallback;
    if (this.isInfo(subjectName, 'subscribe')) {
      console.info('Strean.subscribe()', {
        subject: subjectName,
        subscriber: subscriberName
      });
    }
  }

  publish(subjectName, object) {
    var onCallback, ref, subject, subscriberName;
    subject = this.getSubject(subjectName, false);
    ref = subject['subscribers'];
    for (subscriberName in ref) {
      if (!hasProp$2.call(ref, subscriberName)) continue;
      onCallback = ref[subscriberName];
      onCallback(object);
    }
    if (this.isInfo(subjectName, 'publish')) {
      console.info('Stream.publish()', {
        subject: subjectName,
        object: object
      });
    }
  }

  event(subjectName, object, element, eventType) {
    var onEvent;
    onEvent = (event) => {
      if (event != null) {
        event.stopPropagation();
      }
      if (event != null) {
        event.preventDefault();
      }
      this.publish(subjectName, object);
    };
    element.addEventListener(eventType, onEvent);
  }

  complete(subjectName, object, completeName, onComplete, completeObject) {
    var onCallback, onSubscribe, ref, ref1, subject, subscriberName;
    subject = this.getSubject(subjectName, false);
    subject[completeName] = {};
    ref = subject['subscribers'];
    for (subscriberName in ref) {
      if (!hasProp$2.call(ref, subscriberName)) continue;
      onCallback = ref[subscriberName];
      subject[completeName][subscriberName] = false;
    }
    ref1 = subject['subscribers'];
    for (subscriberName in ref1) {
      if (!hasProp$2.call(ref1, subscriberName)) continue;
      onCallback = ref1[subscriberName];
      onSubscribe = (object) => {
        onCallback(object);
        subject[completeName][subscriberName] = true;
        if (this.isComplete(subject, completeName)) {
          onComplete(completeObject);
          if (this.isInfo(subjectName, 'complete')) {
            return console.info('Stream.complete()', {
              subject: subjectName,
              object: object,
              complete: completeName,
              completeObject: completeObject
            });
          }
        }
      };
      onSubscribe(object);
    }
  }

  isComplete(subject, completeName) {
    var ref, status, subscriberName;
    ref = subject[completeName];
    for (subscriberName in ref) {
      if (!hasProp$2.call(ref, subscriberName)) continue;
      status = ref[subscriberName];
      if (status === false) {
        return false;
      }
    }
    return true;
  }

  unsubscribe(subjectName, subscriberName) {
    if (this.hasSubject(subjectName)) {
      if (this.hasSubscriber(subjectName, subscriberName)) {
        delete this.subjects[subjectName].subscribers[subscriberName];
      } else {
        console.error('Strean.unsubscribe() unknown subscriber', {
          subject: subjectName,
          subscriber: subscriberName
        });
      }
    } else {
      console.error('Strean.unsubscribe() unknown subject', {
        subject: subjectName,
        subscriber: subscriberName
      });
    }
    if (this.isInfo(subjectName, 'subscribe')) {
      console.info('Stream.unsubscribe()', {
        subject: subjectName,
        subscriber: subscriberName
      });
    }
  }

  unsubscribeAll() {
    var onCallback, ref, ref1, subject, subjectName, subscriberName;
    ref = this.subjects;
    for (subjectName in ref) {
      if (!hasProp$2.call(ref, subjectName)) continue;
      subject = ref[subjectName];
      ref1 = subject['subscribers'];
      for (subscriberName in ref1) {
        if (!hasProp$2.call(ref1, subscriberName)) continue;
        onCallback = ref1[subscriberName];
        this.unsubscribe(subjectName, subscriberName);
      }
    }
  }

  addSubject(subjectName, warn = true) {
    var subject;
    if (!this.hasSubject(subjectName)) {
      subject = {};
      subject['subscribers'] = {};
      this.subjects[subjectName] = subject;
    } else {
      if (warn) {
        console.warn('Stream.addSubject() subject already exists', subjectName);
      }
    }
  }

  hasSubject(subjectName) {
    return this.subjects[subjectName] != null;
  }

  hasSubscriber(subjectName, subscriberName) {
    return this.hasSubject(subjectName) && (this.subjects[subjectName]['subscribers'][subscriberName] != null);
  }

  // Get a subject by name. Create a new one if need with a warning
  getSubject(subjectName, warn = true) {
    if (!this.hasSubject(subjectName)) {
      if (warn) {
        console.warn('Stream.getSubject() unknown name for subject so creating one for', subjectName);
      }
      this.addSubject(subjectName, false);
    }
    return this.subjects[subjectName];
  }

  isInfo(subjectName, op) {
    return Util$1.inArray(this.info.subjects, subjectName) && (this.info[op] != null) && this.info[op];
  }

  allInfo() {
    var ref, ref1, subject, subjectName, subscriber, subscriberName;
    console.info('--- Stream.Subjects --- ');
    ref = this.subjects;
    for (subjectName in ref) {
      if (!hasProp$2.call(ref, subjectName)) continue;
      subject = ref[subjectName];
      console.info(`  Subject ${subjectName}`);
      ref1 = subject.subscribers;
      for (subscriberName in ref1) {
        if (!hasProp$2.call(ref1, subscriberName)) continue;
        subscriber = ref1[subscriberName];
        console.info(`    Subscriber ${subscriberName}`);
      }
    }
  }

};

var Stream$1 = Stream;

var Main;

Main = (function() {
  class Main {
    static init(data) {
      var infoSpec, subjects;
      Main.Spec = data;
      subjects = ["Ready", "Select", "Choice", "Test"];
      subjects = subjects.concat(Main.NavbSubjects);
      infoSpec = {
        subscribe: false,
        publish: false,
        subjects: ["Select", "Choice", "Test"]
      };
      Main.stream = new Stream$1(subjects, infoSpec);
      Main.main = new Main();
      Main.main.onReady();
    }

    constructor(stream) {
      this.onReady = this.onReady.bind(this);
      this.stream = stream;
      Main.stream.subscribe("Ready", "Main", () => {
        return this.onReady();
      });
    }

    onReady() {}

  }
  Data$1.local = "http://localhost:63342/cue/pub/";

  Data$1.hosted = "https://ui-48413.firebaseapp.com/";

  Data$1.asyncJSON("json/lay/Lay.json", Main.init);

  Main.NavbSubjects = ["Search", "Contact", "Settings", "SignOn"];

  Main.NavbSpecs = [
    {
      type: "NavBarLeft"
    },
    {
      type: "Item",
      name: "Home",
      icon: "fa-home",
      topic: 'SelectView',
      subject: "Select"
    },
    {
      type: "NavBarEnd"
    },
    {
      type: "NavBarRight"
    },
    {
      type: "Search",
      name: "Search",
      icon: "fa-search",
      size: "10",
      topic: 'Search',
      subject: "Search"
    },
    {
      type: "Contact",
      name: "Contact",
      icon: "fa-user",
      topic: "http://twitter.com/TheTomFlaherty",
      subject: "Contact"
    },
    {
      type: "Dropdown",
      name: "Settings",
      icon: "fa-cog",
      items: [
        {
          type: "Item",
          name: "Preferences",
          topic: "Preferences",
          subject: "Settings"
        },
        {
          type: "Item",
          name: "Connection",
          topic: "Connection",
          subject: "Settings"
        },
        {
          type: "Item",
          name: "Privacy",
          topic: "Privacy",
          subject: "Settings"
        }
      ]
    },
    {
      type: "SignOn",
      name: "SignOn",
      icon: "fa-sign-in",
      size: "10",
      topic: 'SignOn',
      subject: "SignOn"
    },
    {
      type: "NavBarEnd"
    }
  ];

  Util$1.noop(Main.NavbSpecs);

  return Main;

}).call(undefined);

var Main$1 = Main;

//
var script$3 = {
  methods: {
    doSelect: function (select) {
      console.log( 'tocs.vue', select );
      Main$1.stream.publish("Select", select ); }
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
    inject("data-v-d622e7c0_0", { source: "\n.tocs             { position:absolute; left:0; top:50px; width:140px; bottom:50px; background-color:darkgrey;\n}\n.tocs ul          { margin:0; padding:0; list-style: none;\n}\n.tocs ul li       { margin:0; background-color:black; color:white; border:white solid 1px; padding-left:0.25em;\n}\n.tocs ul li:hover { margin:0; background-color:white; color:black; border:white solid 1px;\n}\n", map: {"version":3,"sources":["/Users/ax/Documents/prj/cue/app/lay/vue/tocs.vue"],"names":[],"mappings":";AA8BA,oBAAA,iBAAA,EAAA,MAAA,EAAA,QAAA,EAAA,WAAA,EAAA,WAAA,EAAA,yBAAA;AAAA;AACA,oBAAA,QAAA,EAAA,SAAA,EAAA,gBAAA;AAAA;AACA,oBAAA,QAAA,EAAA,sBAAA,EAAA,WAAA,EAAA,sBAAA,EAAA,mBAAA;AAAA;AACA,oBAAA,QAAA,EAAA,sBAAA,EAAA,WAAA,EAAA,sBAAA;AAAA","file":"tocs.vue","sourcesContent":["\n<template>\n  <div class=\"tocs\">\n    <ul>\n      <li @click=\"doSelect('Collaborate')\">Collaborate</li>\n      <li @click=\"doSelect('Domain')\"    >Domain</li>\n      <li @click=\"doSelect('Discover')\"  >Discover</li>\n      <li @click=\"doSelect('Adapt')\"     >Adapt</li>\n      <li @click=\"doSelect('Technology')\">Technology</li>\n      <li @click=\"doSelect('Benefit')\"   >Benefit</li>\n      <li @click=\"doSelect('Change')\"    >Change</li>\n      <li @click=\"doSelect('Deliver')\"   >Deliver</li>\n      <li @click=\"doSelect('Govern')\"    >Govern</li>\n      <li @click=\"doSelect('View')\"      >View</li>\n    </ul>\n  </div>\n</template>\n\n<script type=\"module\">\n  import Main from '../js/util/Main.js';\n  export default {\n    methods: {\n      doSelect: function (select) {\n        console.log( 'tocs.vue', select );\n        Main.stream.publish(\"Select\", select ); }\n    },\n  }\n</script>\n\n<style>\n  .tocs             { position:absolute; left:0; top:50px; width:140px; bottom:50px; background-color:darkgrey;  }\n  .tocs ul          { margin:0; padding:0; list-style: none; }\n  .tocs ul li       { margin:0; background-color:black; color:white; border:white solid 1px; padding-left:0.25em; }\n  .tocs ul li:hover { margin:0; background-color:white; color:black; border:white solid 1px; }\n</style>\n"]}, media: undefined });

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
var script$4 = {
  data() { return { sel:"View" } },
  methods: {
    onSelect: function (select) {
      this.sel =  select;
      console.log( 'view.vue', select ); } },
  mounted: function () {
    console.log( 'view.vue', 'mounted' );
    Main$1.stream.subscribe( 'Select', 'view.vue', (select) => this.onSelect(select) ); },
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
    inject("data-v-51c37317_0", { source: "\n.view { position:absolute; left:140px; top:50px; right:50px; bottom:50px; background-color:grey;\n   display:grid;\n   grid-template-columns: 33%  33% 34%;\n   grid-template-rows:    33%  33% 34%;\n   grid-template-areas:\n     \"nw   north ne\"\n     \"west cen   east\"\n     \"sw   south se\";\n   justify-items:center; align-items:center;\n/* grid-column-gap: @layout-gap;\n   grid-row-gap:    @layout-gap; */\n}\n.view .nw     { grid-area:nw;    justify-self:stretch; align-self:stretch; display:grid;\n}\n.view .north  { grid-area:north; justify-self:stretch; align-self:stretch; display:grid;\n}\n.view .ne     { grid-area:ne;    justify-self:stretch; align-self:stretch; display:grid;\n}\n.view .west   { grid-area:west;  justify-self:stretch; align-self:stretch; display:grid;\n}\n.view .cen    { grid-area:cen;   justify-self:stretch; align-self:stretch; display:grid;\n}\n.view .east   { grid-area:east;  justify-self:stretch; align-self:stretch; display:grid;\n}\n.view .sw     { grid-area:sw;    justify-self:stretch; align-self:stretch; display:grid;\n}\n.view .south  { grid-area:south; justify-self:stretch; align-self:stretch; display:grid;\n}\n.view .se     { grid-area:se;    justify-self:stretch; align-self:stretch; display:grid;\n}\n.view div .pane { font-size:1.5em; width:90%; height:80%; background-color:tan;\n   justify-self:center; align-self:center; display:grid; border-radius:0.5em;\n}\n.view div .pane .name  { font-size:2em; background-color:tan;\n   justify-self:center; align-self:center; text-align:center;\n} /* width:50%; height:50%; */\n \n\n", map: {"version":3,"sources":["/Users/ax/Documents/prj/cue/app/lay/vue/view.vue"],"names":[],"mappings":";AAyCA,QAAA,iBAAA,EAAA,UAAA,EAAA,QAAA,EAAA,UAAA,EAAA,WAAA,EAAA,qBAAA;GACA,YAAA;GACA,mCAAA;GACA,mCAAA;GACA;;;oBAGA;GACA,oBAAA,EAAA,kBAAA;AACA;kCACA;AAAA;AACA,gBAAA,YAAA,KAAA,oBAAA,EAAA,kBAAA,EAAA,YAAA;AAAA;AACA,gBAAA,eAAA,EAAA,oBAAA,EAAA,kBAAA,EAAA,YAAA;AAAA;AACA,gBAAA,YAAA,KAAA,oBAAA,EAAA,kBAAA,EAAA,YAAA;AAAA;AACA,gBAAA,cAAA,GAAA,oBAAA,EAAA,kBAAA,EAAA,YAAA;AAAA;AACA,gBAAA,aAAA,IAAA,oBAAA,EAAA,kBAAA,EAAA,YAAA;AAAA;AACA,gBAAA,cAAA,GAAA,oBAAA,EAAA,kBAAA,EAAA,YAAA;AAAA;AACA,gBAAA,YAAA,KAAA,oBAAA,EAAA,kBAAA,EAAA,YAAA;AAAA;AACA,gBAAA,eAAA,EAAA,oBAAA,EAAA,kBAAA,EAAA,YAAA;AAAA;AACA,gBAAA,YAAA,KAAA,oBAAA,EAAA,kBAAA,EAAA,YAAA;AAAA;AACA,kBAAA,eAAA,EAAA,SAAA,EAAA,UAAA,EAAA,oBAAA;GACA,mBAAA,EAAA,iBAAA,EAAA,YAAA,EAAA,mBAAA;AAAA;AACA,yBAAA,aAAA,EAAA,oBAAA;GACA,mBAAA,EAAA,iBAAA,EAAA,iBAAA;AAAA,EAAA,2BAAA","file":"view.vue","sourcesContent":["\n<template>\n  <div class=\"view\">\n    <div id=\"Collab\"     class=\"nw\"    v-show=\"Collab\"><div class=\"pane\"><div class=\"name\">Collab</div></div></div>\n    <div id=\"Domain\"     class=\"north\" v-show=\"Domain\"  ><div class=\"pane\"><div class=\"name\">Domain</div></div></div>\n    <div id=\"Discover\"   class=\"ne\" v-show=\"Discover\"><div class=\"pane\"><div class=\"name\">Discover</div></div></div>\n    <div id=\"Adapt\"      class=\"west\"  v-show=\"Adapt\"     ><div class=\"pane\"><div class=\"name\">Adapt</div></div></div>\n    <div id=\"Technology\" class=\"cen\"   v-show=\"Technology\"><div class=\"pane\"><div class=\"name\">Technology</div></div></div>\n    <div id=\"Benefit\"    class=\"east\"  v-show=\"Benefit\"><div class=\"pane\"><div class=\"name\">Benefit</div></div></div>\n    <div id=\"Change\"     class=\"sw\"    v-show=\"Change\"><div class=\"pane\"><div class=\"name\">Change</div></div></div>\n    <div id=\"Deliver\"    class=\"south\" v-show=\"Deliver\"><div class=\"pane\"><div class=\"name\">Deliver</div></div></div>\n    <div id=\"Govern\"     class=\"se\"    v-show=\"Govern\"><div class=\"pane\"><div class=\"name\">Govern</div></div></div>\n  </div>\n</template>\n\n<script type=\"module\">\n  import Main from '../js/util/Main.js';\n  export default {\n    data() { return { sel:\"View\" } },\n    methods: {\n      onSelect: function (select) {\n        this.sel =  select;\n        console.log( 'view.vue', select ); } },\n    mounted: function () {\n      console.log( 'view.vue', 'mounted' );\n      Main.stream.subscribe( 'Select', 'view.vue', (select) => this.onSelect(select) ); },\n    computed: {\n      Collab()     { return this.sel === \"View\" || this.sel === \"Collaborate\" },\n      Domain()     { return this.sel === \"View\" || this.sel === \"Domain\"      },\n      Discover()   { return this.sel === \"View\" || this.sel === \"Discover\"    },\n      Adapt()      { return this.sel === \"View\" || this.sel === \"Adapt\"       },\n      Technology() { return this.sel === \"View\" || this.sel === \"Technology\"  },\n      Benefit()    { return this.sel === \"View\" || this.sel === \"Benefit\"     },\n      Change()     { return this.sel === \"View\" || this.sel === \"Change\"      },\n      Deliver()    { return this.sel === \"View\" || this.sel === \"Deliver\"     },\n      Govern()     { return this.sel === \"View\" || this.sel === \"Govern\"      }\n    }\n  }\n</script>\n\n<style>\n  .view { position:absolute; left:140px; top:50px; right:50px; bottom:50px; background-color:grey;\n    display:grid;\n    grid-template-columns: 33%  33% 34%;\n    grid-template-rows:    33%  33% 34%;\n    grid-template-areas:\n      \"nw   north ne\"\n      \"west cen   east\"\n      \"sw   south se\";\n    justify-items:center; align-items:center;\n /* grid-column-gap: @layout-gap;\n    grid-row-gap:    @layout-gap; */ }\n  .view .nw     { grid-area:nw;    justify-self:stretch; align-self:stretch; display:grid; }\n  .view .north  { grid-area:north; justify-self:stretch; align-self:stretch; display:grid; }\n  .view .ne     { grid-area:ne;    justify-self:stretch; align-self:stretch; display:grid; }\n  .view .west   { grid-area:west;  justify-self:stretch; align-self:stretch; display:grid; }\n  .view .cen    { grid-area:cen;   justify-self:stretch; align-self:stretch; display:grid; }\n  .view .east   { grid-area:east;  justify-self:stretch; align-self:stretch; display:grid; }\n  .view .sw     { grid-area:sw;    justify-self:stretch; align-self:stretch; display:grid; }\n  .view .south  { grid-area:south; justify-self:stretch; align-self:stretch; display:grid; }\n  .view .se     { grid-area:se;    justify-self:stretch; align-self:stretch; display:grid; }\n  .view div .pane { font-size:1.5em; width:90%; height:80%; background-color:tan;\n    justify-self:center; align-self:center; display:grid; border-radius:0.5em; }\n  .view div .pane .name  { font-size:2em; background-color:tan;\n    justify-self:center; align-self:center; text-align:center; } /* width:50%; height:50%; */\n  \n\n</style>\n\n<!--style>\n  .view         { position:absolute; left:140px; top:50px; right:50px; bottom:50px; background-color:grey; }\n  .view .nw     { position:absolute; left: 0;  top: 0;  width:33%; height:33%; display:grid; }\n  .view .north  { position:absolute; left:33%; top: 0;  width:33%; height:33%; display:grid; }\n  .view .ne     { position:absolute; left:66%; top: 0;  width:34%; height:33%; display:grid; }\n  .view .west   { position:absolute; left: 0;  top:33%; width:33%; height:33%; display:grid; }\n  .view .cen    { position:absolute; left:33%; top:33%; width:33%; height:33%; display:grid; }\n  .view .east   { position:absolute; left:66%; top:33%; width:34%; height:33%; display:grid; }\n  .view .sw     { position:absolute; left: 0;  top:66%; width:33%; height:34%; display:grid; }\n  .view .south  { position:absolute; left:33%; top:66%; width:33%; height:34%; display:grid; }\n  .view .se     { position:absolute; left:66%; top:66%; width:34%; height:34%; display:grid; }\n  .view div .pane { font-size:1.5em; width:90%; height:80%; background-color:tan;\n    justify-self:center; align-self:center; display:grid; border-radius:0.5em; }\n  .view div .pane .name  { font-size:2em; background-color:tan;\n    justify-self:center; align-self:center; text-align:center; } /* width:50%; height:50%; */\n</style-->\n"]}, media: undefined });

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
