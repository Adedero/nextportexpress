import { resolve, isArray, mergeKeys, isEmpty, isNotEmpty, omit } from '@primeuix/utils';
import { reactive, computed, getCurrentInstance, onMounted, nextTick, mergeProps, toValue, ref, watch, createElementBlock, openBlock, withModifiers, renderSlot } from 'vue';
import { B as BaseStyle, y as script$2 } from './server.mjs';
import '../_/nitro.mjs';
import 'nodemailer';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/utils/object';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/button';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'node:path';
import 'ipx';
import 'vue-router';
import '@iconify/vue';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import 'mongoose';
import 'vue/server-renderer';
import '@primeuix/utils/uuid';
import '@primeuix/utils/zindex';

function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime2() {
    return e;
  };
  var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
    t2[e2] = r2.value;
  }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
  function define(t2, e2, r2) {
    return Object.defineProperty(t2, e2, { value: r2, enumerable: true, configurable: true, writable: true }), t2[e2];
  }
  try {
    define({}, "");
  } catch (t2) {
    define = function define2(t3, e2, r2) {
      return t3[e2] = r2;
    };
  }
  function wrap(t2, e2, r2, n2) {
    var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
    return o(a2, "_invoke", { value: makeInvokeMethod(t2, r2, c2) }), a2;
  }
  function tryCatch(t2, e2, r2) {
    try {
      return { type: "normal", arg: t2.call(e2, r2) };
    } catch (t3) {
      return { type: "throw", arg: t3 };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  var p = {};
  define(p, a, function() {
    return this;
  });
  var d = Object.getPrototypeOf, v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t2) {
    ["next", "throw", "return"].forEach(function(e2) {
      define(t2, e2, function(t3) {
        return this._invoke(e2, t3);
      });
    });
  }
  function AsyncIterator(t2, e2) {
    function invoke(r3, o2, i2, a2) {
      var c2 = tryCatch(t2[r3], t2, o2);
      if ("throw" !== c2.type) {
        var u2 = c2.arg, h2 = u2.value;
        return h2 && "object" == _typeof$1(h2) && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
          invoke("next", t3, i2, a2);
        }, function(t3) {
          invoke("throw", t3, i2, a2);
        }) : e2.resolve(h2).then(function(t3) {
          u2.value = t3, i2(u2);
        }, function(t3) {
          return invoke("throw", t3, i2, a2);
        });
      }
      a2(c2.arg);
    }
    var r2;
    o(this, "_invoke", { value: function value(t3, n2) {
      function callInvokeWithMethodAndArg() {
        return new e2(function(e3, r3) {
          invoke(t3, n2, e3, r3);
        });
      }
      return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } });
  }
  function makeInvokeMethod(e2, r2, n2) {
    var o2 = h;
    return function(i2, a2) {
      if (o2 === f) throw Error("Generator is already running");
      if (o2 === s) {
        if ("throw" === i2) throw a2;
        return { value: t, done: true };
      }
      for (n2.method = i2, n2.arg = a2; ; ) {
        var c2 = n2.delegate;
        if (c2) {
          var u2 = maybeInvokeDelegate(c2, n2);
          if (u2) {
            if (u2 === y) continue;
            return u2;
          }
        }
        if ("next" === n2.method) n2.sent = n2._sent = n2.arg;
        else if ("throw" === n2.method) {
          if (o2 === h) throw o2 = s, n2.arg;
          n2.dispatchException(n2.arg);
        } else "return" === n2.method && n2.abrupt("return", n2.arg);
        o2 = f;
        var p2 = tryCatch(e2, r2, n2);
        if ("normal" === p2.type) {
          if (o2 = n2.done ? s : l, p2.arg === y) continue;
          return { value: p2.arg, done: n2.done };
        }
        "throw" === p2.type && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
      }
    };
  }
  function maybeInvokeDelegate(e2, r2) {
    var n2 = r2.method, o2 = e2.iterator[n2];
    if (o2 === t) return r2.delegate = null, "throw" === n2 && e2.iterator["return"] && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), "throw" === r2.method) || "return" !== n2 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
    var i2 = tryCatch(o2, e2.iterator, r2.arg);
    if ("throw" === i2.type) return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
    var a2 = i2.arg;
    return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
  }
  function pushTryEntry(t2) {
    var e2 = { tryLoc: t2[0] };
    1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
  }
  function resetTryEntry(t2) {
    var e2 = t2.completion || {};
    e2.type = "normal", delete e2.arg, t2.completion = e2;
  }
  function Context(t2) {
    this.tryEntries = [{ tryLoc: "root" }], t2.forEach(pushTryEntry, this), this.reset(true);
  }
  function values(e2) {
    if (e2 || "" === e2) {
      var r2 = e2[a];
      if (r2) return r2.call(e2);
      if ("function" == typeof e2.next) return e2;
      if (!isNaN(e2.length)) {
        var o2 = -1, i2 = function next() {
          for (; ++o2 < e2.length; ) if (n.call(e2, o2)) return next.value = e2[o2], next.done = false, next;
          return next.value = t, next.done = true, next;
        };
        return i2.next = i2;
      }
    }
    throw new TypeError(_typeof$1(e2) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: true }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: true }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
    var e2 = "function" == typeof t2 && t2.constructor;
    return !!e2 && (e2 === GeneratorFunction || "GeneratorFunction" === (e2.displayName || e2.name));
  }, e.mark = function(t2) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
  }, e.awrap = function(t2) {
    return { __await: t2 };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
    void 0 === i2 && (i2 = Promise);
    var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
    return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
      return t3.done ? t3.value : a2.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
    return this;
  }), define(g, "toString", function() {
    return "[object Generator]";
  }), e.keys = function(t2) {
    var e2 = Object(t2), r2 = [];
    for (var n2 in e2) r2.push(n2);
    return r2.reverse(), function next() {
      for (; r2.length; ) {
        var t3 = r2.pop();
        if (t3 in e2) return next.value = t3, next.done = false, next;
      }
      return next.done = true, next;
    };
  }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e2) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2) for (var r2 in this) "t" === r2.charAt(0) && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
  }, stop: function stop() {
    this.done = true;
    var t2 = this.tryEntries[0].completion;
    if ("throw" === t2.type) throw t2.arg;
    return this.rval;
  }, dispatchException: function dispatchException(e2) {
    if (this.done) throw e2;
    var r2 = this;
    function handle(n2, o3) {
      return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
    }
    for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
      var i2 = this.tryEntries[o2], a2 = i2.completion;
      if ("root" === i2.tryLoc) return handle("end");
      if (i2.tryLoc <= this.prev) {
        var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
        if (c2 && u2) {
          if (this.prev < i2.catchLoc) return handle(i2.catchLoc, true);
          if (this.prev < i2.finallyLoc) return handle(i2.finallyLoc);
        } else if (c2) {
          if (this.prev < i2.catchLoc) return handle(i2.catchLoc, true);
        } else {
          if (!u2) throw Error("try statement without catch or finally");
          if (this.prev < i2.finallyLoc) return handle(i2.finallyLoc);
        }
      }
    }
  }, abrupt: function abrupt(t2, e2) {
    for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
      var o2 = this.tryEntries[r2];
      if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
        var i2 = o2;
        break;
      }
    }
    i2 && ("break" === t2 || "continue" === t2) && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
    var a2 = i2 ? i2.completion : {};
    return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
  }, complete: function complete(t2, e2) {
    if ("throw" === t2.type) throw t2.arg;
    return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && e2 && (this.next = e2), y;
  }, finish: function finish(t2) {
    for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
      var r2 = this.tryEntries[e2];
      if (r2.finallyLoc === t2) return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
    }
  }, "catch": function _catch(t2) {
    for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
      var r2 = this.tryEntries[e2];
      if (r2.tryLoc === t2) {
        var n2 = r2.completion;
        if ("throw" === n2.type) {
          var o2 = n2.arg;
          resetTryEntry(r2);
        }
        return o2;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function delegateYield(e2, r2, n2) {
    return this.delegate = { iterator: values(e2), resultName: r2, nextLoc: n2 }, "next" === this.method && (this.arg = t), y;
  } }, e;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
function _slicedToArray$1(r, e) {
  return _arrayWithHoles$1(r) || _iterableToArrayLimit$1(r, e) || _unsupportedIterableToArray$1(r, e) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}
function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit$1(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles$1(r) {
  if (Array.isArray(r)) return r;
}
function tryOnMounted(fn) {
  var sync = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (getCurrentInstance()) onMounted(fn);
  else if (sync) fn();
  else nextTick(fn);
}
function watchPausable(source, callback, options) {
  var isActive = ref(true);
  var stop = watch(source, function(newValue, oldValue) {
    if (!isActive.value) return;
    callback(newValue, oldValue);
  }, options);
  return {
    stop,
    pause: function pause() {
      isActive.value = false;
    },
    resume: function resume() {
      isActive.value = true;
    }
  };
}
function groupKeys(obj) {
  return Object.entries(obj).reduce(function(result, _ref) {
    var _ref2 = _slicedToArray$1(_ref, 2), key = _ref2[0], value = _ref2[1];
    key.split(/[\.\[\]]+/).filter(Boolean).reduce(function(acc, curr, idx, arr) {
      var _acc$curr;
      return (_acc$curr = acc[curr]) !== null && _acc$curr !== void 0 ? _acc$curr : acc[curr] = isNaN(arr[idx + 1]) ? idx === arr.length - 1 ? value : {} : [];
    }, result);
    return result;
  }, {});
}
function getValueByPath(obj, path) {
  if (!obj || !path) {
    return null;
  }
  try {
    var value = obj[path];
    if (isNotEmpty(value)) return value;
  } catch (_unused) {
  }
  var keys = path.split(/[\.\[\]]+/).filter(Boolean);
  return keys.reduce(function(acc, key) {
    return acc && acc[key] !== void 0 ? acc[key] : void 0;
  }, obj);
}
var useForm = function useForm2() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _states = reactive({});
  var fields = reactive({});
  var valid = computed(function() {
    return Object.values(_states).every(function(field) {
      return !field.invalid;
    });
  });
  var states = computed(function() {
    return groupKeys(_states);
  });
  var getInitialState = function getInitialState2(field, initialValue) {
    return {
      value: initialValue !== null && initialValue !== void 0 ? initialValue : getValueByPath(options.initialValues, field),
      touched: false,
      dirty: false,
      pristine: true,
      valid: true,
      invalid: false,
      error: null,
      errors: []
    };
  };
  var isFieldValidate = function isFieldValidate2(field, validateOn2) {
    var value = resolve(validateOn2, field);
    return value === true || isArray(value) && value.includes(field);
  };
  var validateOn = /* @__PURE__ */ function() {
    var _ref3 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee(option, defaultValue) {
      var _options$option;
      var results, fieldArr;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            results = {};
            if (!isArray(options[option])) {
              _context.next = 7;
              break;
            }
            _context.next = 4;
            return validate(options[option]);
          case 4:
            results = _context.sent;
            _context.next = 12;
            break;
          case 7:
            _context.t0 = (_options$option = options[option]) !== null && _options$option !== void 0 ? _options$option : defaultValue;
            if (!_context.t0) {
              _context.next = 12;
              break;
            }
            _context.next = 11;
            return validate();
          case 11:
            results = _context.sent;
          case 12:
            fieldArr = Object.keys(fields).filter(function(field) {
              var _fields$field;
              return (_fields$field = fields[field]) === null || _fields$field === void 0 || (_fields$field = _fields$field.options) === null || _fields$field === void 0 ? void 0 : _fields$field[option];
            }) || [];
            _context.t1 = isNotEmpty(fieldArr);
            if (!_context.t1) {
              _context.next = 18;
              break;
            }
            _context.next = 17;
            return validate(fieldArr);
          case 17:
            results = _context.sent;
          case 18:
            return _context.abrupt("return", results);
          case 19:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function validateOn2(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var validateFieldOn = function validateFieldOn2(field, fieldOptions, option, defaultValue) {
    var _fieldOptions$option, _options$option2;
    ((_fieldOptions$option = fieldOptions === null || fieldOptions === void 0 ? void 0 : fieldOptions[option]) !== null && _fieldOptions$option !== void 0 ? _fieldOptions$option : isFieldValidate(field, (_options$option2 = options[option]) !== null && _options$option2 !== void 0 ? _options$option2 : defaultValue)) && validate(field);
  };
  var defineField = function defineField2(field, fieldOptions) {
    var _fields$field2, _resolve;
    if (!field) {
      return [];
    }
    (_fields$field2 = fields[field]) === null || _fields$field2 === void 0 || _fields$field2._watcher.stop();
    _states[field] || (_states[field] = getInitialState(field, fieldOptions === null || fieldOptions === void 0 ? void 0 : fieldOptions.initialValue));
    var props = mergeProps((_resolve = resolve(fieldOptions, _states[field])) === null || _resolve === void 0 ? void 0 : _resolve.props, resolve(fieldOptions === null || fieldOptions === void 0 ? void 0 : fieldOptions.props, _states[field]), {
      name: field,
      onBlur: function onBlur() {
        _states[field].touched = true;
        validateFieldOn(field, fieldOptions, "validateOnBlur");
      },
      onInput: function onInput(event) {
        _states[field].value = event && Object.hasOwn(event, "value") ? event.value : event.target.value;
      },
      onChange: function onChange(event) {
        _states[field].value = event && Object.hasOwn(event, "value") ? event.value : event.target.type === "checkbox" || event.target.type === "radio" ? event.target.checked : event.target.value;
      },
      onInvalid: function onInvalid(errors) {
        var _errors$;
        _states[field].invalid = true;
        _states[field].errors = errors;
        _states[field].error = (_errors$ = errors === null || errors === void 0 ? void 0 : errors[0]) !== null && _errors$ !== void 0 ? _errors$ : null;
      }
    });
    var _watcher = watchPausable(function() {
      return _states[field].value;
    }, function(newValue, oldValue) {
      if (_states[field].pristine) {
        _states[field].pristine = false;
      }
      if (newValue !== oldValue) {
        _states[field].dirty = true;
      }
      validateFieldOn(field, fieldOptions, "validateOnValueUpdate", true);
    });
    fields[field] = {
      props,
      states: _states[field],
      options: fieldOptions,
      _watcher
    };
    return [_states[field], props];
  };
  var handleSubmit = function handleSubmit2(callback) {
    return /* @__PURE__ */ function() {
      var _ref4 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(event) {
        var results;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return validateOn("validateOnSubmit", true);
            case 2:
              results = _context2.sent;
              return _context2.abrupt("return", callback(_objectSpread$1({
                originalEvent: event,
                valid: toValue(valid),
                states: toValue(states),
                reset
              }, results)));
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function(_x3) {
        return _ref4.apply(this, arguments);
      };
    }();
  };
  var handleReset = function handleReset2(callback) {
    return /* @__PURE__ */ function() {
      var _ref5 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee3(event) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              reset();
              return _context3.abrupt("return", callback({
                originalEvent: event
              }));
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function(_x4) {
        return _ref5.apply(this, arguments);
      };
    }();
  };
  var validate = /* @__PURE__ */ function() {
    var _ref6 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee4(field) {
      var _yield$options$resolv, _options$resolver, _result, _result$errors;
      var resolverOptions, _ref9, names, values, result, flattenFields, _i, _Object$entries, _Object$entries$_i, fieldName, fieldInst, _fieldInst$options, _getValueByPath, _errors$2, fieldResolver, _yield$fieldResolver, fieldValue, fieldResult, errors;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            resolverOptions = Object.entries(_states).reduce(function(acc, _ref7) {
              var _ref8 = _slicedToArray$1(_ref7, 2), key = _ref8[0], val = _ref8[1];
              acc.names.push(key);
              acc.values[key] = val.value;
              return acc;
            }, {
              names: [],
              values: {}
            });
            _ref9 = [resolverOptions.names, groupKeys(resolverOptions.values)], names = _ref9[0], values = _ref9[1];
            _context4.next = 4;
            return (_options$resolver = options.resolver) === null || _options$resolver === void 0 ? void 0 : _options$resolver.call(options, {
              names,
              values
            });
          case 4:
            _context4.t1 = _yield$options$resolv = _context4.sent;
            _context4.t0 = _context4.t1 !== null;
            if (!_context4.t0) {
              _context4.next = 8;
              break;
            }
            _context4.t0 = _yield$options$resolv !== void 0;
          case 8:
            if (!_context4.t0) {
              _context4.next = 12;
              break;
            }
            _context4.t2 = _yield$options$resolv;
            _context4.next = 13;
            break;
          case 12:
            _context4.t2 = {
              values
            };
          case 13:
            result = _context4.t2;
            (_result$errors = (_result = result).errors) !== null && _result$errors !== void 0 ? _result$errors : _result.errors = {};
            flattenFields = [field].flat();
            _i = 0, _Object$entries = Object.entries(fields);
          case 17:
            if (!(_i < _Object$entries.length)) {
              _context4.next = 45;
              break;
            }
            _Object$entries$_i = _slicedToArray$1(_Object$entries[_i], 2), fieldName = _Object$entries$_i[0], fieldInst = _Object$entries$_i[1];
            if (!(flattenFields.includes(fieldName) || !field || isEmpty(result.errors))) {
              _context4.next = 42;
              break;
            }
            fieldResolver = (_fieldInst$options = fieldInst.options) === null || _fieldInst$options === void 0 ? void 0 : _fieldInst$options.resolver;
            if (!fieldResolver) {
              _context4.next = 37;
              break;
            }
            fieldValue = fieldInst.states.value;
            _context4.next = 25;
            return fieldResolver({
              values: fieldValue,
              value: fieldValue,
              name: fieldName
            });
          case 25:
            _context4.t4 = _yield$fieldResolver = _context4.sent;
            _context4.t3 = _context4.t4 !== null;
            if (!_context4.t3) {
              _context4.next = 29;
              break;
            }
            _context4.t3 = _yield$fieldResolver !== void 0;
          case 29:
            if (!_context4.t3) {
              _context4.next = 33;
              break;
            }
            _context4.t5 = _yield$fieldResolver;
            _context4.next = 34;
            break;
          case 33:
            _context4.t5 = {
              values: fieldValue
            };
          case 34:
            fieldResult = _context4.t5;
            isArray(fieldResult.errors) && (fieldResult.errors = _defineProperty$1({}, fieldName, fieldResult.errors));
            result = mergeKeys(result, fieldResult);
          case 37:
            errors = (_getValueByPath = getValueByPath(result.errors, fieldName)) !== null && _getValueByPath !== void 0 ? _getValueByPath : [];
            _states[fieldName].invalid = errors.length > 0;
            _states[fieldName].valid = !_states[fieldName].invalid;
            _states[fieldName].errors = errors;
            _states[fieldName].error = (_errors$2 = errors === null || errors === void 0 ? void 0 : errors[0]) !== null && _errors$2 !== void 0 ? _errors$2 : null;
          //states[fieldName].value = value;
          case 42:
            _i++;
            _context4.next = 17;
            break;
          case 45:
            return _context4.abrupt("return", _objectSpread$1(_objectSpread$1({}, result), {}, {
              errors: groupKeys(result.errors)
            }));
          case 46:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function validate2(_x5) {
      return _ref6.apply(this, arguments);
    };
  }();
  var reset = function reset2() {
    Object.keys(_states).forEach(/* @__PURE__ */ function() {
      var _ref10 = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function _callee5(field) {
        var _fields$field3;
        var watcher;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              watcher = fields[field]._watcher;
              watcher.pause();
              fields[field].states = _states[field] = getInitialState(field, (_fields$field3 = fields[field]) === null || _fields$field3 === void 0 || (_fields$field3 = _fields$field3.options) === null || _fields$field3 === void 0 ? void 0 : _fields$field3.initialValue);
              _context5.next = 5;
              return nextTick();
            case 5:
              watcher.resume();
            case 6:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function(_x6) {
        return _ref10.apply(this, arguments);
      };
    }());
  };
  var setFieldValue = function setFieldValue2(field, value) {
    _states[field].value = value;
  };
  var getFieldState = function getFieldState2(field) {
    var _fields$field4;
    return (_fields$field4 = fields[field]) === null || _fields$field4 === void 0 ? void 0 : _fields$field4.states;
  };
  var setValues = function setValues2(values) {
    Object.keys(values).forEach(function(field) {
      return setFieldValue(field, values[field]);
    });
  };
  var validateOnMounted = function validateOnMounted2() {
    validateOn("validateOnMount");
  };
  tryOnMounted(validateOnMounted);
  return {
    defineField,
    setFieldValue,
    getFieldState,
    handleSubmit,
    handleReset,
    validate,
    setValues,
    reset,
    valid,
    states,
    fields
  };
};

var classes = {
  root: "p-form p-component"
};
var FormStyle = BaseStyle.extend({
  name: "form",
  classes
});

var script$1 = {
  name: "BaseForm",
  "extends": script$2,
  style: FormStyle,
  props: {
    resolver: {
      type: Function,
      "default": null
    },
    initialValues: {
      type: Object,
      "default": null
    },
    validateOnValueUpdate: {
      type: [Boolean, Array],
      "default": true
    },
    validateOnBlur: {
      type: [Boolean, Array],
      "default": false
    },
    validateOnMount: {
      type: [Boolean, Array],
      "default": false
    },
    validateOnSubmit: {
      type: [Boolean, Array],
      "default": true
    }
  },
  provide: function provide() {
    return {
      $pcForm: this,
      $parentInstance: this
    };
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
var script = {
  name: "Form",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["submit", "reset"],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var formRef = ref(null);
    var $form = useForm(props);
    var submit = function submit2() {
      var _formRef$value;
      (_formRef$value = formRef.value) === null || _formRef$value === void 0 || _formRef$value.requestSubmit();
    };
    var register = function register2(field, options) {
      if (!(options !== null && options !== void 0 && options.novalidate)) {
        var _$form$defineField = $form.defineField(field, options), _$form$defineField2 = _slicedToArray(_$form$defineField, 2), fieldProps = _$form$defineField2[1];
        return fieldProps;
      }
      return {};
    };
    var onSubmit = $form.handleSubmit(function(e) {
      emit("submit", e);
    });
    var onReset = $form.handleReset(function(e) {
      emit("reset", e);
    });
    return _objectSpread({
      formRef,
      submit,
      register,
      onSubmit,
      onReset
    }, omit($form, ["handleSubmit", "handleReset"]));
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("form", mergeProps({
    ref: "formRef",
    onSubmit: _cache[0] || (_cache[0] = withModifiers(function() {
      return $setup.onSubmit && $setup.onSubmit.apply($setup, arguments);
    }, ["prevent"])),
    onReset: _cache[1] || (_cache[1] = withModifiers(function() {
      return $setup.onReset && $setup.onReset.apply($setup, arguments);
    }, ["prevent"])),
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default", mergeProps({
    register: $setup.register,
    valid: _ctx.valid,
    reset: _ctx.reset
  }, _ctx.states))], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index2115.mjs.map
