import { d as defineComponent, r as ref, w as watch, o as onMounted, a as onUnmounted, n as nextTick, h, b as render$1, c as openBlock, e as createElementBlock, f as renderSlot, g as boot, __tla as __tla_0 } from "./index.99fce08b.js";
let vViewer;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var viewer = "";
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty$1(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
  var DEFAULTS = {
    backdrop: true,
    button: true,
    navbar: true,
    title: true,
    toolbar: true,
    className: "",
    container: "body",
    filter: null,
    fullscreen: true,
    inheritedAttributes: [
      "crossOrigin",
      "decoding",
      "isMap",
      "loading",
      "referrerPolicy",
      "sizes",
      "srcset",
      "useMap"
    ],
    initialCoverage: 0.9,
    initialViewIndex: 0,
    inline: false,
    interval: 5e3,
    keyboard: true,
    focus: true,
    loading: true,
    loop: true,
    minWidth: 200,
    minHeight: 100,
    movable: true,
    rotatable: true,
    scalable: true,
    zoomable: true,
    zoomOnTouch: true,
    zoomOnWheel: true,
    slideOnTouch: true,
    toggleOnDblclick: true,
    tooltip: true,
    transition: true,
    zIndex: 2015,
    zIndexInline: 0,
    zoomRatio: 0.1,
    minZoomRatio: 0.01,
    maxZoomRatio: 100,
    url: "src",
    ready: null,
    show: null,
    shown: null,
    hide: null,
    hidden: null,
    view: null,
    viewed: null,
    move: null,
    moved: null,
    rotate: null,
    rotated: null,
    scale: null,
    scaled: null,
    zoom: null,
    zoomed: null,
    play: null,
    stop: null
  };
  var TEMPLATE = '<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>';
  var IS_BROWSER = typeof window !== "undefined" && typeof window.document !== "undefined";
  var WINDOW = IS_BROWSER ? window : {};
  var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? "ontouchstart" in WINDOW.document.documentElement : false;
  var HAS_POINTER_EVENT = IS_BROWSER ? "PointerEvent" in WINDOW : false;
  var NAMESPACE = "viewer";
  var ACTION_MOVE = "move";
  var ACTION_SWITCH = "switch";
  var ACTION_ZOOM = "zoom";
  var CLASS_ACTIVE = "".concat(NAMESPACE, "-active");
  var CLASS_CLOSE = "".concat(NAMESPACE, "-close");
  var CLASS_FADE = "".concat(NAMESPACE, "-fade");
  var CLASS_FIXED = "".concat(NAMESPACE, "-fixed");
  var CLASS_FULLSCREEN = "".concat(NAMESPACE, "-fullscreen");
  var CLASS_FULLSCREEN_EXIT = "".concat(NAMESPACE, "-fullscreen-exit");
  var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
  var CLASS_HIDE_MD_DOWN = "".concat(NAMESPACE, "-hide-md-down");
  var CLASS_HIDE_SM_DOWN = "".concat(NAMESPACE, "-hide-sm-down");
  var CLASS_HIDE_XS_DOWN = "".concat(NAMESPACE, "-hide-xs-down");
  var CLASS_IN = "".concat(NAMESPACE, "-in");
  var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
  var CLASS_LOADING = "".concat(NAMESPACE, "-loading");
  var CLASS_MOVE = "".concat(NAMESPACE, "-move");
  var CLASS_OPEN = "".concat(NAMESPACE, "-open");
  var CLASS_SHOW = "".concat(NAMESPACE, "-show");
  var CLASS_TRANSITION = "".concat(NAMESPACE, "-transition");
  var EVENT_CLICK = "click";
  var EVENT_DBLCLICK = "dblclick";
  var EVENT_DRAG_START = "dragstart";
  var EVENT_FOCUSIN = "focusin";
  var EVENT_KEY_DOWN = "keydown";
  var EVENT_LOAD = "load";
  var EVENT_ERROR = "error";
  var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? "touchend touchcancel" : "mouseup";
  var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? "touchmove" : "mousemove";
  var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? "touchstart" : "mousedown";
  var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? "pointerdown" : EVENT_TOUCH_START;
  var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? "pointermove" : EVENT_TOUCH_MOVE;
  var EVENT_POINTER_UP = HAS_POINTER_EVENT ? "pointerup pointercancel" : EVENT_TOUCH_END;
  var EVENT_RESIZE = "resize";
  var EVENT_TRANSITION_END = "transitionend";
  var EVENT_WHEEL = "wheel";
  var EVENT_READY = "ready";
  var EVENT_SHOW = "show";
  var EVENT_SHOWN = "shown";
  var EVENT_HIDE = "hide";
  var EVENT_HIDDEN = "hidden";
  var EVENT_VIEW = "view";
  var EVENT_VIEWED = "viewed";
  var EVENT_MOVE = "move";
  var EVENT_MOVED = "moved";
  var EVENT_ROTATE = "rotate";
  var EVENT_ROTATED = "rotated";
  var EVENT_SCALE = "scale";
  var EVENT_SCALED = "scaled";
  var EVENT_ZOOM = "zoom";
  var EVENT_ZOOMED = "zoomed";
  var EVENT_PLAY = "play";
  var EVENT_STOP = "stop";
  var DATA_ACTION = "".concat(NAMESPACE, "Action");
  var REGEXP_SPACES = /\s\s*/;
  var BUTTONS = [
    "zoom-in",
    "zoom-out",
    "one-to-one",
    "reset",
    "prev",
    "play",
    "next",
    "rotate-left",
    "rotate-right",
    "flip-horizontal",
    "flip-vertical"
  ];
  function isString(value) {
    return typeof value === "string";
  }
  var isNaN = Number.isNaN || WINDOW.isNaN;
  function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
  }
  function isUndefined(value) {
    return typeof value === "undefined";
  }
  function isObject$8(value) {
    return _typeof(value) === "object" && value !== null;
  }
  var hasOwnProperty$6 = Object.prototype.hasOwnProperty;
  function isPlainObject(value) {
    if (!isObject$8(value)) {
      return false;
    }
    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;
      return _constructor && prototype && hasOwnProperty$6.call(prototype, "isPrototypeOf");
    } catch (error) {
      return false;
    }
  }
  function isFunction$3(value) {
    return typeof value === "function";
  }
  function forEach(data, callback) {
    if (data && isFunction$3(callback)) {
      if (Array.isArray(data) || isNumber(data.length)) {
        var length = data.length;
        var i;
        for (i = 0; i < length; i += 1) {
          if (callback.call(data, data[i], i, data) === false) {
            break;
          }
        }
      } else if (isObject$8(data)) {
        Object.keys(data).forEach(function(key) {
          callback.call(data, data[key], key, data);
        });
      }
    }
    return data;
  }
  var assign$1 = Object.assign || function assign2(obj) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (isObject$8(obj) && args.length > 0) {
      args.forEach(function(arg) {
        if (isObject$8(arg)) {
          Object.keys(arg).forEach(function(key) {
            obj[key] = arg[key];
          });
        }
      });
    }
    return obj;
  };
  var REGEXP_SUFFIX = /^(?:width|height|left|top|marginLeft|marginTop)$/;
  function setStyle(element, styles) {
    var style = element.style;
    forEach(styles, function(value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value += "px";
      }
      style[property] = value;
    });
  }
  function escapeHTMLEntities(value) {
    return isString(value) ? value.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : value;
  }
  function hasClass(element, value) {
    if (!element || !value) {
      return false;
    }
    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }
  function addClass(element, value) {
    if (!element || !value) {
      return;
    }
    if (isNumber(element.length)) {
      forEach(element, function(elem) {
        addClass(elem, value);
      });
      return;
    }
    if (element.classList) {
      element.classList.add(value);
      return;
    }
    var className = element.className.trim();
    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }
  function removeClass(element, value) {
    if (!element || !value) {
      return;
    }
    if (isNumber(element.length)) {
      forEach(element, function(elem) {
        removeClass(elem, value);
      });
      return;
    }
    if (element.classList) {
      element.classList.remove(value);
      return;
    }
    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, "");
    }
  }
  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }
    if (isNumber(element.length)) {
      forEach(element, function(elem) {
        toggleClass(elem, value, added);
      });
      return;
    }
    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }
  var REGEXP_HYPHENATE = /([a-z\d])([A-Z])/g;
  function hyphenate(value) {
    return value.replace(REGEXP_HYPHENATE, "$1-$2").toLowerCase();
  }
  function getData(element, name) {
    if (isObject$8(element[name])) {
      return element[name];
    }
    if (element.dataset) {
      return element.dataset[name];
    }
    return element.getAttribute("data-".concat(hyphenate(name)));
  }
  function setData(element, name, data) {
    if (isObject$8(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute("data-".concat(hyphenate(name)), data);
    }
  }
  var onceSupported = function() {
    var supported = false;
    if (IS_BROWSER) {
      var once = false;
      var listener = function listener2() {
      };
      var options = Object.defineProperty({}, "once", {
        get: function get() {
          supported = true;
          return once;
        },
        set: function set(value) {
          once = value;
        }
      });
      WINDOW.addEventListener("test", listener, options);
      WINDOW.removeEventListener("test", listener, options);
    }
    return supported;
  }();
  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    var handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function(event) {
      if (!onceSupported) {
        var listeners = element.listeners;
        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];
          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }
          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }
      element.removeEventListener(event, handler, options);
    });
  }
  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    var _handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function(event) {
      if (options.once && !onceSupported) {
        var _element$listeners = element.listeners, listeners = _element$listeners === void 0 ? {} : _element$listeners;
        _handler = function handler() {
          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          listener.apply(element, args);
        };
        if (!listeners[event]) {
          listeners[event] = {};
        }
        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }
        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }
      element.addEventListener(event, _handler, options);
    });
  }
  function dispatchEvent(element, type, data, options) {
    var event;
    if (isFunction$3(Event) && isFunction$3(CustomEvent)) {
      event = new CustomEvent(type, _objectSpread2({
        bubbles: true,
        cancelable: true,
        detail: data
      }, options));
    } else {
      event = document.createEvent("CustomEvent");
      event.initCustomEvent(type, true, true, data);
    }
    return element.dispatchEvent(event);
  }
  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }
  function getTransforms(_ref) {
    var rotate = _ref.rotate, scaleX = _ref.scaleX, scaleY = _ref.scaleY, translateX = _ref.translateX, translateY = _ref.translateY;
    var values = [];
    if (isNumber(translateX) && translateX !== 0) {
      values.push("translateX(".concat(translateX, "px)"));
    }
    if (isNumber(translateY) && translateY !== 0) {
      values.push("translateY(".concat(translateY, "px)"));
    }
    if (isNumber(rotate) && rotate !== 0) {
      values.push("rotate(".concat(rotate, "deg)"));
    }
    if (isNumber(scaleX) && scaleX !== 1) {
      values.push("scaleX(".concat(scaleX, ")"));
    }
    if (isNumber(scaleY) && scaleY !== 1) {
      values.push("scaleY(".concat(scaleY, ")"));
    }
    var transform = values.length ? values.join(" ") : "none";
    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform
    };
  }
  function getImageNameFromURL(url) {
    return isString(url) ? decodeURIComponent(url.replace(/^.*\//, "").replace(/[?&#].*$/, "")) : "";
  }
  var IS_SAFARI = WINDOW.navigator && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(WINDOW.navigator.userAgent);
  function getImageNaturalSizes(image, options, callback) {
    var newImage = document.createElement("img");
    if (image.naturalWidth && !IS_SAFARI) {
      callback(image.naturalWidth, image.naturalHeight);
      return newImage;
    }
    var body = document.body || document.documentElement;
    newImage.onload = function() {
      callback(newImage.width, newImage.height);
      if (!IS_SAFARI) {
        body.removeChild(newImage);
      }
    };
    forEach(options.inheritedAttributes, function(name) {
      var value = image.getAttribute(name);
      if (value !== null) {
        newImage.setAttribute(name, value);
      }
    });
    newImage.src = image.src;
    if (!IS_SAFARI) {
      newImage.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;";
      body.appendChild(newImage);
    }
    return newImage;
  }
  function getResponsiveClass(type) {
    switch (type) {
      case 2:
        return CLASS_HIDE_XS_DOWN;
      case 3:
        return CLASS_HIDE_SM_DOWN;
      case 4:
        return CLASS_HIDE_MD_DOWN;
      default:
        return "";
    }
  }
  function getMaxZoomRatio(pointers) {
    var pointers2 = _objectSpread2({}, pointers);
    var ratios = [];
    forEach(pointers, function(pointer, pointerId) {
      delete pointers2[pointerId];
      forEach(pointers2, function(pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;
        ratios.push(ratio);
      });
    });
    ratios.sort(function(a, b) {
      return Math.abs(a) < Math.abs(b);
    });
    return ratios[0];
  }
  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX, pageY = _ref2.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : _objectSpread2({
      timeStamp: Date.now(),
      startX: pageX,
      startY: pageY
    }, end);
  }
  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;
    forEach(pointers, function(_ref3) {
      var startX = _ref3.startX, startY = _ref3.startY;
      pageX += startX;
      pageY += startY;
      count += 1;
    });
    pageX /= count;
    pageY /= count;
    return {
      pageX,
      pageY
    };
  }
  var render = {
    render: function render2() {
      this.initContainer();
      this.initViewer();
      this.initList();
      this.renderViewer();
    },
    initBody: function initBody() {
      var ownerDocument = this.element.ownerDocument;
      var body = ownerDocument.body || ownerDocument.documentElement;
      this.body = body;
      this.scrollbarWidth = window.innerWidth - ownerDocument.documentElement.clientWidth;
      this.initialBodyPaddingRight = body.style.paddingRight;
      this.initialBodyComputedPaddingRight = window.getComputedStyle(body).paddingRight;
    },
    initContainer: function initContainer() {
      this.containerData = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    initViewer: function initViewer() {
      var options = this.options, parent = this.parent;
      var viewerData;
      if (options.inline) {
        viewerData = {
          width: Math.max(parent.offsetWidth, options.minWidth),
          height: Math.max(parent.offsetHeight, options.minHeight)
        };
        this.parentData = viewerData;
      }
      if (this.fulled || !viewerData) {
        viewerData = this.containerData;
      }
      this.viewerData = assign$1({}, viewerData);
    },
    renderViewer: function renderViewer() {
      if (this.options.inline && !this.fulled) {
        setStyle(this.viewer, this.viewerData);
      }
    },
    initList: function initList() {
      var _this = this;
      var element = this.element, options = this.options, list = this.list;
      var items = [];
      list.innerHTML = "";
      forEach(this.images, function(image, index2) {
        var src = image.src;
        var alt = image.alt || getImageNameFromURL(src);
        var url = _this.getImageURL(image);
        if (src || url) {
          var item = document.createElement("li");
          var img = document.createElement("img");
          forEach(options.inheritedAttributes, function(name) {
            var value = image.getAttribute(name);
            if (value !== null) {
              img.setAttribute(name, value);
            }
          });
          if (options.navbar) {
            img.src = src || url;
          }
          img.alt = alt;
          img.setAttribute("data-original-url", url || src);
          item.setAttribute("data-index", index2);
          item.setAttribute("data-viewer-action", "view");
          item.setAttribute("role", "button");
          if (options.keyboard) {
            item.setAttribute("tabindex", 0);
          }
          item.appendChild(img);
          list.appendChild(item);
          items.push(item);
        }
      });
      this.items = items;
      forEach(items, function(item) {
        var image = item.firstElementChild;
        var onLoad;
        var onError;
        setData(image, "filled", true);
        if (options.loading) {
          addClass(item, CLASS_LOADING);
        }
        addListener(image, EVENT_LOAD, onLoad = function onLoad2(event) {
          removeListener(image, EVENT_ERROR, onError);
          if (options.loading) {
            removeClass(item, CLASS_LOADING);
          }
          _this.loadImage(event);
        }, {
          once: true
        });
        addListener(image, EVENT_ERROR, onError = function onError2() {
          removeListener(image, EVENT_LOAD, onLoad);
          if (options.loading) {
            removeClass(item, CLASS_LOADING);
          }
        }, {
          once: true
        });
      });
      if (options.transition) {
        addListener(element, EVENT_VIEWED, function() {
          addClass(list, CLASS_TRANSITION);
        }, {
          once: true
        });
      }
    },
    renderList: function renderList() {
      var index2 = this.index;
      var item = this.items[index2];
      if (!item) {
        return;
      }
      var next = item.nextElementSibling;
      var gutter = parseInt(window.getComputedStyle(next || item).marginLeft, 10);
      var offsetWidth = item.offsetWidth;
      var outerWidth = offsetWidth + gutter;
      setStyle(this.list, assign$1({
        width: outerWidth * this.length - gutter
      }, getTransforms({
        translateX: (this.viewerData.width - offsetWidth) / 2 - outerWidth * index2
      })));
    },
    resetList: function resetList() {
      var list = this.list;
      list.innerHTML = "";
      removeClass(list, CLASS_TRANSITION);
      setStyle(list, getTransforms({
        translateX: 0
      }));
    },
    initImage: function initImage(done) {
      var _this2 = this;
      var options = this.options, image = this.image, viewerData = this.viewerData;
      var footerHeight = this.footer.offsetHeight;
      var viewerWidth = viewerData.width;
      var viewerHeight = Math.max(viewerData.height - footerHeight, footerHeight);
      var oldImageData = this.imageData || {};
      var sizingImage;
      this.imageInitializing = {
        abort: function abort() {
          sizingImage.onload = null;
        }
      };
      sizingImage = getImageNaturalSizes(image, options, function(naturalWidth, naturalHeight) {
        var aspectRatio = naturalWidth / naturalHeight;
        var initialCoverage = Math.max(0, Math.min(1, options.initialCoverage));
        var width = viewerWidth;
        var height = viewerHeight;
        _this2.imageInitializing = false;
        if (viewerHeight * aspectRatio > viewerWidth) {
          height = viewerWidth / aspectRatio;
        } else {
          width = viewerHeight * aspectRatio;
        }
        initialCoverage = isNumber(initialCoverage) ? initialCoverage : 0.9;
        width = Math.min(width * initialCoverage, naturalWidth);
        height = Math.min(height * initialCoverage, naturalHeight);
        var left = (viewerWidth - width) / 2;
        var top = (viewerHeight - height) / 2;
        var imageData = {
          left,
          top,
          x: left,
          y: top,
          width,
          height,
          oldRatio: 1,
          ratio: width / naturalWidth,
          aspectRatio,
          naturalWidth,
          naturalHeight
        };
        var initialImageData = assign$1({}, imageData);
        if (options.rotatable) {
          imageData.rotate = oldImageData.rotate || 0;
          initialImageData.rotate = 0;
        }
        if (options.scalable) {
          imageData.scaleX = oldImageData.scaleX || 1;
          imageData.scaleY = oldImageData.scaleY || 1;
          initialImageData.scaleX = 1;
          initialImageData.scaleY = 1;
        }
        _this2.imageData = imageData;
        _this2.initialImageData = initialImageData;
        if (done) {
          done();
        }
      });
    },
    renderImage: function renderImage(done) {
      var _this3 = this;
      var image = this.image, imageData = this.imageData;
      setStyle(image, assign$1({
        width: imageData.width,
        height: imageData.height,
        marginLeft: imageData.x,
        marginTop: imageData.y
      }, getTransforms(imageData)));
      if (done) {
        if ((this.viewing || this.moving || this.rotating || this.scaling || this.zooming) && this.options.transition && hasClass(image, CLASS_TRANSITION)) {
          var onTransitionEnd = function onTransitionEnd2() {
            _this3.imageRendering = false;
            done();
          };
          this.imageRendering = {
            abort: function abort() {
              removeListener(image, EVENT_TRANSITION_END, onTransitionEnd);
            }
          };
          addListener(image, EVENT_TRANSITION_END, onTransitionEnd, {
            once: true
          });
        } else {
          done();
        }
      }
    },
    resetImage: function resetImage() {
      if (this.viewing || this.viewed) {
        var image = this.image;
        if (this.viewing) {
          this.viewing.abort();
        }
        image.parentNode.removeChild(image);
        this.image = null;
      }
    }
  };
  var events = {
    bind: function bind() {
      var options = this.options, viewer2 = this.viewer, canvas = this.canvas;
      var document2 = this.element.ownerDocument;
      addListener(viewer2, EVENT_CLICK, this.onClick = this.click.bind(this));
      addListener(viewer2, EVENT_DRAG_START, this.onDragStart = this.dragstart.bind(this));
      addListener(canvas, EVENT_POINTER_DOWN, this.onPointerDown = this.pointerdown.bind(this));
      addListener(document2, EVENT_POINTER_MOVE, this.onPointerMove = this.pointermove.bind(this));
      addListener(document2, EVENT_POINTER_UP, this.onPointerUp = this.pointerup.bind(this));
      addListener(document2, EVENT_KEY_DOWN, this.onKeyDown = this.keydown.bind(this));
      addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
      if (options.zoomable && options.zoomOnWheel) {
        addListener(viewer2, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
          passive: false,
          capture: true
        });
      }
      if (options.toggleOnDblclick) {
        addListener(canvas, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
      }
    },
    unbind: function unbind() {
      var options = this.options, viewer2 = this.viewer, canvas = this.canvas;
      var document2 = this.element.ownerDocument;
      removeListener(viewer2, EVENT_CLICK, this.onClick);
      removeListener(viewer2, EVENT_DRAG_START, this.onDragStart);
      removeListener(canvas, EVENT_POINTER_DOWN, this.onPointerDown);
      removeListener(document2, EVENT_POINTER_MOVE, this.onPointerMove);
      removeListener(document2, EVENT_POINTER_UP, this.onPointerUp);
      removeListener(document2, EVENT_KEY_DOWN, this.onKeyDown);
      removeListener(window, EVENT_RESIZE, this.onResize);
      if (options.zoomable && options.zoomOnWheel) {
        removeListener(viewer2, EVENT_WHEEL, this.onWheel, {
          passive: false,
          capture: true
        });
      }
      if (options.toggleOnDblclick) {
        removeListener(canvas, EVENT_DBLCLICK, this.onDblclick);
      }
    }
  };
  var handlers = {
    click: function click(event) {
      var options = this.options, imageData = this.imageData;
      var target = event.target;
      var action = getData(target, DATA_ACTION);
      if (!action && target.localName === "img" && target.parentElement.localName === "li") {
        target = target.parentElement;
        action = getData(target, DATA_ACTION);
      }
      if (IS_TOUCH_DEVICE && event.isTrusted && target === this.canvas) {
        clearTimeout(this.clickCanvasTimeout);
      }
      switch (action) {
        case "mix":
          if (this.played) {
            this.stop();
          } else if (options.inline) {
            if (this.fulled) {
              this.exit();
            } else {
              this.full();
            }
          } else {
            this.hide();
          }
          break;
        case "hide":
          if (!this.pointerMoved) {
            this.hide();
          }
          break;
        case "view":
          this.view(getData(target, "index"));
          break;
        case "zoom-in":
          this.zoom(0.1, true);
          break;
        case "zoom-out":
          this.zoom(-0.1, true);
          break;
        case "one-to-one":
          this.toggle();
          break;
        case "reset":
          this.reset();
          break;
        case "prev":
          this.prev(options.loop);
          break;
        case "play":
          this.play(options.fullscreen);
          break;
        case "next":
          this.next(options.loop);
          break;
        case "rotate-left":
          this.rotate(-90);
          break;
        case "rotate-right":
          this.rotate(90);
          break;
        case "flip-horizontal":
          this.scaleX(-imageData.scaleX || -1);
          break;
        case "flip-vertical":
          this.scaleY(-imageData.scaleY || -1);
          break;
        default:
          if (this.played) {
            this.stop();
          }
      }
    },
    dblclick: function dblclick(event) {
      event.preventDefault();
      if (this.viewed && event.target === this.image) {
        if (IS_TOUCH_DEVICE && event.isTrusted) {
          clearTimeout(this.doubleClickImageTimeout);
        }
        this.toggle(event.isTrusted ? event : event.detail && event.detail.originalEvent);
      }
    },
    load: function load() {
      var _this = this;
      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = false;
      }
      var element = this.element, options = this.options, image = this.image, index2 = this.index, viewerData = this.viewerData;
      removeClass(image, CLASS_INVISIBLE);
      if (options.loading) {
        removeClass(this.canvas, CLASS_LOADING);
      }
      image.style.cssText = "height:0;" + "margin-left:".concat(viewerData.width / 2, "px;") + "margin-top:".concat(viewerData.height / 2, "px;") + "max-width:none!important;position:relative;width:0;";
      this.initImage(function() {
        toggleClass(image, CLASS_MOVE, options.movable);
        toggleClass(image, CLASS_TRANSITION, options.transition);
        _this.renderImage(function() {
          _this.viewed = true;
          _this.viewing = false;
          if (isFunction$3(options.viewed)) {
            addListener(element, EVENT_VIEWED, options.viewed, {
              once: true
            });
          }
          dispatchEvent(element, EVENT_VIEWED, {
            originalImage: _this.images[index2],
            index: index2,
            image
          }, {
            cancelable: false
          });
        });
      });
    },
    loadImage: function loadImage(event) {
      var image = event.target;
      var parent = image.parentNode;
      var parentWidth = parent.offsetWidth || 30;
      var parentHeight = parent.offsetHeight || 50;
      var filled = !!getData(image, "filled");
      getImageNaturalSizes(image, this.options, function(naturalWidth, naturalHeight) {
        var aspectRatio = naturalWidth / naturalHeight;
        var width = parentWidth;
        var height = parentHeight;
        if (parentHeight * aspectRatio > parentWidth) {
          if (filled) {
            width = parentHeight * aspectRatio;
          } else {
            height = parentWidth / aspectRatio;
          }
        } else if (filled) {
          height = parentWidth / aspectRatio;
        } else {
          width = parentHeight * aspectRatio;
        }
        setStyle(image, assign$1({
          width,
          height
        }, getTransforms({
          translateX: (parentWidth - width) / 2,
          translateY: (parentHeight - height) / 2
        })));
      });
    },
    keydown: function keydown(event) {
      var options = this.options;
      if (!options.keyboard) {
        return;
      }
      var keyCode = event.keyCode || event.which || event.charCode;
      switch (keyCode) {
        case 13:
          if (this.viewer.contains(event.target)) {
            this.click(event);
          }
          break;
      }
      if (!this.fulled) {
        return;
      }
      switch (keyCode) {
        case 27:
          if (this.played) {
            this.stop();
          } else if (options.inline) {
            if (this.fulled) {
              this.exit();
            }
          } else {
            this.hide();
          }
          break;
        case 32:
          if (this.played) {
            this.stop();
          }
          break;
        case 37:
          if (this.played && this.playing) {
            this.playing.prev();
          } else {
            this.prev(options.loop);
          }
          break;
        case 38:
          event.preventDefault();
          this.zoom(options.zoomRatio, true);
          break;
        case 39:
          if (this.played && this.playing) {
            this.playing.next();
          } else {
            this.next(options.loop);
          }
          break;
        case 40:
          event.preventDefault();
          this.zoom(-options.zoomRatio, true);
          break;
        case 48:
        case 49:
          if (event.ctrlKey) {
            event.preventDefault();
            this.toggle();
          }
          break;
      }
    },
    dragstart: function dragstart(event) {
      if (event.target.localName === "img") {
        event.preventDefault();
      }
    },
    pointerdown: function pointerdown(event) {
      var options = this.options, pointers = this.pointers;
      var buttons = event.buttons, button = event.button;
      this.pointerMoved = false;
      if (!this.viewed || this.showing || this.viewing || this.hiding || (event.type === "mousedown" || event.type === "pointerdown" && event.pointerType === "mouse") && (isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 || event.ctrlKey)) {
        return;
      }
      event.preventDefault();
      if (event.changedTouches) {
        forEach(event.changedTouches, function(touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        pointers[event.pointerId || 0] = getPointer(event);
      }
      var action = options.movable ? ACTION_MOVE : false;
      if (options.zoomOnTouch && options.zoomable && Object.keys(pointers).length > 1) {
        action = ACTION_ZOOM;
      } else if (options.slideOnTouch && (event.pointerType === "touch" || event.type === "touchstart") && this.isSwitchable()) {
        action = ACTION_SWITCH;
      }
      if (options.transition && (action === ACTION_MOVE || action === ACTION_ZOOM)) {
        removeClass(this.image, CLASS_TRANSITION);
      }
      this.action = action;
    },
    pointermove: function pointermove(event) {
      var pointers = this.pointers, action = this.action;
      if (!this.viewed || !action) {
        return;
      }
      event.preventDefault();
      this.pointerMoved = true;
      if (event.changedTouches) {
        forEach(event.changedTouches, function(touch) {
          assign$1(pointers[touch.identifier] || {}, getPointer(touch, true));
        });
      } else {
        assign$1(pointers[event.pointerId || 0] || {}, getPointer(event, true));
      }
      this.change(event);
    },
    pointerup: function pointerup(event) {
      var _this2 = this;
      var options = this.options, action = this.action, pointers = this.pointers;
      var pointer;
      if (event.changedTouches) {
        forEach(event.changedTouches, function(touch) {
          pointer = pointers[touch.identifier];
          delete pointers[touch.identifier];
        });
      } else {
        pointer = pointers[event.pointerId || 0];
        delete pointers[event.pointerId || 0];
      }
      if (!action) {
        return;
      }
      event.preventDefault();
      if (options.transition && (action === ACTION_MOVE || action === ACTION_ZOOM)) {
        addClass(this.image, CLASS_TRANSITION);
      }
      this.action = false;
      if (IS_TOUCH_DEVICE && action !== ACTION_ZOOM && pointer && Date.now() - pointer.timeStamp < 500) {
        clearTimeout(this.clickCanvasTimeout);
        clearTimeout(this.doubleClickImageTimeout);
        if (options.toggleOnDblclick && this.viewed && event.target === this.image) {
          if (this.imageClicked) {
            this.imageClicked = false;
            this.doubleClickImageTimeout = setTimeout(function() {
              dispatchEvent(_this2.image, EVENT_DBLCLICK, {
                originalEvent: event
              });
            }, 50);
          } else {
            this.imageClicked = true;
            this.doubleClickImageTimeout = setTimeout(function() {
              _this2.imageClicked = false;
            }, 500);
          }
        } else {
          this.imageClicked = false;
          if (options.backdrop && options.backdrop !== "static" && event.target === this.canvas) {
            this.clickCanvasTimeout = setTimeout(function() {
              dispatchEvent(_this2.canvas, EVENT_CLICK, {
                originalEvent: event
              });
            }, 50);
          }
        }
      }
    },
    resize: function resize() {
      var _this3 = this;
      if (!this.isShown || this.hiding) {
        return;
      }
      if (this.fulled) {
        this.close();
        this.initBody();
        this.open();
      }
      this.initContainer();
      this.initViewer();
      this.renderViewer();
      this.renderList();
      if (this.viewed) {
        this.initImage(function() {
          _this3.renderImage();
        });
      }
      if (this.played) {
        if (this.options.fullscreen && this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
          this.stop();
          return;
        }
        forEach(this.player.getElementsByTagName("img"), function(image) {
          addListener(image, EVENT_LOAD, _this3.loadImage.bind(_this3), {
            once: true
          });
          dispatchEvent(image, EVENT_LOAD);
        });
      }
    },
    wheel: function wheel(event) {
      var _this4 = this;
      if (!this.viewed) {
        return;
      }
      event.preventDefault();
      if (this.wheeling) {
        return;
      }
      this.wheeling = true;
      setTimeout(function() {
        _this4.wheeling = false;
      }, 50);
      var ratio = Number(this.options.zoomRatio) || 0.1;
      var delta = 1;
      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }
      this.zoom(-delta * ratio, true, null, event);
    }
  };
  var methods = {
    show: function show() {
      var immediate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      var element = this.element, options = this.options;
      if (options.inline || this.showing || this.isShown || this.showing) {
        return this;
      }
      if (!this.ready) {
        this.build();
        if (this.ready) {
          this.show(immediate);
        }
        return this;
      }
      if (isFunction$3(options.show)) {
        addListener(element, EVENT_SHOW, options.show, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_SHOW) === false || !this.ready) {
        return this;
      }
      if (this.hiding) {
        this.transitioning.abort();
      }
      this.showing = true;
      this.open();
      var viewer2 = this.viewer;
      removeClass(viewer2, CLASS_HIDE);
      viewer2.setAttribute("role", "dialog");
      viewer2.setAttribute("aria-labelledby", this.title.id);
      viewer2.setAttribute("aria-modal", true);
      viewer2.removeAttribute("aria-hidden");
      if (options.transition && !immediate) {
        var shown = this.shown.bind(this);
        this.transitioning = {
          abort: function abort() {
            removeListener(viewer2, EVENT_TRANSITION_END, shown);
            removeClass(viewer2, CLASS_IN);
          }
        };
        addClass(viewer2, CLASS_TRANSITION);
        viewer2.initialOffsetWidth = viewer2.offsetWidth;
        addListener(viewer2, EVENT_TRANSITION_END, shown, {
          once: true
        });
        addClass(viewer2, CLASS_IN);
      } else {
        addClass(viewer2, CLASS_IN);
        this.shown();
      }
      return this;
    },
    hide: function hide() {
      var _this = this;
      var immediate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      var element = this.element, options = this.options;
      if (options.inline || this.hiding || !(this.isShown || this.showing)) {
        return this;
      }
      if (isFunction$3(options.hide)) {
        addListener(element, EVENT_HIDE, options.hide, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_HIDE) === false) {
        return this;
      }
      if (this.showing) {
        this.transitioning.abort();
      }
      this.hiding = true;
      if (this.played) {
        this.stop();
      } else if (this.viewing) {
        this.viewing.abort();
      }
      var viewer2 = this.viewer, image = this.image;
      var hideImmediately = function hideImmediately2() {
        removeClass(viewer2, CLASS_IN);
        _this.hidden();
      };
      if (options.transition && !immediate) {
        var onViewerTransitionEnd = function onViewerTransitionEnd2(event) {
          if (event && event.target === viewer2) {
            removeListener(viewer2, EVENT_TRANSITION_END, onViewerTransitionEnd2);
            _this.hidden();
          }
        };
        var onImageTransitionEnd = function onImageTransitionEnd2() {
          if (hasClass(viewer2, CLASS_TRANSITION)) {
            addListener(viewer2, EVENT_TRANSITION_END, onViewerTransitionEnd);
            removeClass(viewer2, CLASS_IN);
          } else {
            hideImmediately();
          }
        };
        this.transitioning = {
          abort: function abort() {
            if (_this.viewed && hasClass(image, CLASS_TRANSITION)) {
              removeListener(image, EVENT_TRANSITION_END, onImageTransitionEnd);
            } else if (hasClass(viewer2, CLASS_TRANSITION)) {
              removeListener(viewer2, EVENT_TRANSITION_END, onViewerTransitionEnd);
            }
          }
        };
        if (this.viewed && hasClass(image, CLASS_TRANSITION)) {
          addListener(image, EVENT_TRANSITION_END, onImageTransitionEnd, {
            once: true
          });
          this.zoomTo(0, false, null, null, true);
        } else {
          onImageTransitionEnd();
        }
      } else {
        hideImmediately();
      }
      return this;
    },
    view: function view() {
      var _this2 = this;
      var index2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.initialViewIndex;
      index2 = Number(index2) || 0;
      if (this.hiding || this.played || index2 < 0 || index2 >= this.length || this.viewed && index2 === this.index) {
        return this;
      }
      if (!this.isShown) {
        this.index = index2;
        return this.show();
      }
      if (this.viewing) {
        this.viewing.abort();
      }
      var element = this.element, options = this.options, title = this.title, canvas = this.canvas;
      var item = this.items[index2];
      var img = item.querySelector("img");
      var url = getData(img, "originalUrl");
      var alt = img.getAttribute("alt");
      var image = document.createElement("img");
      forEach(options.inheritedAttributes, function(name) {
        var value = img.getAttribute(name);
        if (value !== null) {
          image.setAttribute(name, value);
        }
      });
      image.src = url;
      image.alt = alt;
      if (isFunction$3(options.view)) {
        addListener(element, EVENT_VIEW, options.view, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_VIEW, {
        originalImage: this.images[index2],
        index: index2,
        image
      }) === false || !this.isShown || this.hiding || this.played) {
        return this;
      }
      var activeItem = this.items[this.index];
      if (activeItem) {
        removeClass(activeItem, CLASS_ACTIVE);
        activeItem.removeAttribute("aria-selected");
      }
      addClass(item, CLASS_ACTIVE);
      item.setAttribute("aria-selected", true);
      if (options.focus) {
        item.focus();
      }
      this.image = image;
      this.viewed = false;
      this.index = index2;
      this.imageData = {};
      addClass(image, CLASS_INVISIBLE);
      if (options.loading) {
        addClass(canvas, CLASS_LOADING);
      }
      canvas.innerHTML = "";
      canvas.appendChild(image);
      this.renderList();
      title.innerHTML = "";
      var onViewed = function onViewed2() {
        var imageData = _this2.imageData;
        var render2 = Array.isArray(options.title) ? options.title[1] : options.title;
        title.innerHTML = escapeHTMLEntities(isFunction$3(render2) ? render2.call(_this2, image, imageData) : "".concat(alt, " (").concat(imageData.naturalWidth, " \xD7 ").concat(imageData.naturalHeight, ")"));
      };
      var onLoad;
      var onError;
      addListener(element, EVENT_VIEWED, onViewed, {
        once: true
      });
      this.viewing = {
        abort: function abort() {
          removeListener(element, EVENT_VIEWED, onViewed);
          if (image.complete) {
            if (_this2.imageRendering) {
              _this2.imageRendering.abort();
            } else if (_this2.imageInitializing) {
              _this2.imageInitializing.abort();
            }
          } else {
            image.src = "";
            removeListener(image, EVENT_LOAD, onLoad);
            if (_this2.timeout) {
              clearTimeout(_this2.timeout);
            }
          }
        }
      };
      if (image.complete) {
        this.load();
      } else {
        addListener(image, EVENT_LOAD, onLoad = function onLoad2() {
          removeListener(image, EVENT_ERROR, onError);
          _this2.load();
        }, {
          once: true
        });
        addListener(image, EVENT_ERROR, onError = function onError2() {
          removeListener(image, EVENT_LOAD, onLoad);
          if (_this2.timeout) {
            clearTimeout(_this2.timeout);
            _this2.timeout = false;
          }
          removeClass(image, CLASS_INVISIBLE);
          if (options.loading) {
            removeClass(_this2.canvas, CLASS_LOADING);
          }
        }, {
          once: true
        });
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(function() {
          removeClass(image, CLASS_INVISIBLE);
          _this2.timeout = false;
        }, 1e3);
      }
      return this;
    },
    prev: function prev() {
      var loop = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      var index2 = this.index - 1;
      if (index2 < 0) {
        index2 = loop ? this.length - 1 : 0;
      }
      this.view(index2);
      return this;
    },
    next: function next() {
      var loop = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      var maxIndex = this.length - 1;
      var index2 = this.index + 1;
      if (index2 > maxIndex) {
        index2 = loop ? 0 : maxIndex;
      }
      this.view(index2);
      return this;
    },
    move: function move(x) {
      var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
      var imageData = this.imageData;
      this.moveTo(isUndefined(x) ? x : imageData.x + Number(x), isUndefined(y) ? y : imageData.y + Number(y));
      return this;
    },
    moveTo: function moveTo(x) {
      var _this3 = this;
      var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
      var _originalEvent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      var element = this.element, options = this.options, imageData = this.imageData;
      x = Number(x);
      y = Number(y);
      if (this.viewed && !this.played && options.movable) {
        var oldX = imageData.x;
        var oldY = imageData.y;
        var changed = false;
        if (isNumber(x)) {
          changed = true;
        } else {
          x = oldX;
        }
        if (isNumber(y)) {
          changed = true;
        } else {
          y = oldY;
        }
        if (changed) {
          if (isFunction$3(options.move)) {
            addListener(element, EVENT_MOVE, options.move, {
              once: true
            });
          }
          if (dispatchEvent(element, EVENT_MOVE, {
            x,
            y,
            oldX,
            oldY,
            originalEvent: _originalEvent
          }) === false) {
            return this;
          }
          imageData.x = x;
          imageData.y = y;
          imageData.left = x;
          imageData.top = y;
          this.moving = true;
          this.renderImage(function() {
            _this3.moving = false;
            if (isFunction$3(options.moved)) {
              addListener(element, EVENT_MOVED, options.moved, {
                once: true
              });
            }
            dispatchEvent(element, EVENT_MOVED, {
              x,
              y,
              oldX,
              oldY,
              originalEvent: _originalEvent
            }, {
              cancelable: false
            });
          });
        }
      }
      return this;
    },
    rotate: function rotate(degree) {
      this.rotateTo((this.imageData.rotate || 0) + Number(degree));
      return this;
    },
    rotateTo: function rotateTo(degree) {
      var _this4 = this;
      var element = this.element, options = this.options, imageData = this.imageData;
      degree = Number(degree);
      if (isNumber(degree) && this.viewed && !this.played && options.rotatable) {
        var oldDegree = imageData.rotate;
        if (isFunction$3(options.rotate)) {
          addListener(element, EVENT_ROTATE, options.rotate, {
            once: true
          });
        }
        if (dispatchEvent(element, EVENT_ROTATE, {
          degree,
          oldDegree
        }) === false) {
          return this;
        }
        imageData.rotate = degree;
        this.rotating = true;
        this.renderImage(function() {
          _this4.rotating = false;
          if (isFunction$3(options.rotated)) {
            addListener(element, EVENT_ROTATED, options.rotated, {
              once: true
            });
          }
          dispatchEvent(element, EVENT_ROTATED, {
            degree,
            oldDegree
          }, {
            cancelable: false
          });
        });
      }
      return this;
    },
    scaleX: function scaleX(_scaleX) {
      this.scale(_scaleX, this.imageData.scaleY);
      return this;
    },
    scaleY: function scaleY(_scaleY) {
      this.scale(this.imageData.scaleX, _scaleY);
      return this;
    },
    scale: function scale(scaleX) {
      var _this5 = this;
      var scaleY = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : scaleX;
      var element = this.element, options = this.options, imageData = this.imageData;
      scaleX = Number(scaleX);
      scaleY = Number(scaleY);
      if (this.viewed && !this.played && options.scalable) {
        var oldScaleX = imageData.scaleX;
        var oldScaleY = imageData.scaleY;
        var changed = false;
        if (isNumber(scaleX)) {
          changed = true;
        } else {
          scaleX = oldScaleX;
        }
        if (isNumber(scaleY)) {
          changed = true;
        } else {
          scaleY = oldScaleY;
        }
        if (changed) {
          if (isFunction$3(options.scale)) {
            addListener(element, EVENT_SCALE, options.scale, {
              once: true
            });
          }
          if (dispatchEvent(element, EVENT_SCALE, {
            scaleX,
            scaleY,
            oldScaleX,
            oldScaleY
          }) === false) {
            return this;
          }
          imageData.scaleX = scaleX;
          imageData.scaleY = scaleY;
          this.scaling = true;
          this.renderImage(function() {
            _this5.scaling = false;
            if (isFunction$3(options.scaled)) {
              addListener(element, EVENT_SCALED, options.scaled, {
                once: true
              });
            }
            dispatchEvent(element, EVENT_SCALED, {
              scaleX,
              scaleY,
              oldScaleX,
              oldScaleY
            }, {
              cancelable: false
            });
          });
        }
      }
      return this;
    },
    zoom: function zoom(ratio) {
      var showTooltip = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var pivot = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      var _originalEvent = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      var imageData = this.imageData;
      ratio = Number(ratio);
      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }
      this.zoomTo(imageData.width * ratio / imageData.naturalWidth, showTooltip, pivot, _originalEvent);
      return this;
    },
    zoomTo: function zoomTo(ratio) {
      var _this6 = this;
      var showTooltip = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var pivot = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      var _originalEvent = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      var _zoomable = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
      var element = this.element, options = this.options, pointers = this.pointers, imageData = this.imageData;
      var x = imageData.x, y = imageData.y, width = imageData.width, height = imageData.height, naturalWidth = imageData.naturalWidth, naturalHeight = imageData.naturalHeight;
      ratio = Math.max(0, ratio);
      if (isNumber(ratio) && this.viewed && !this.played && (_zoomable || options.zoomable)) {
        if (!_zoomable) {
          var minZoomRatio = Math.max(0.01, options.minZoomRatio);
          var maxZoomRatio = Math.min(100, options.maxZoomRatio);
          ratio = Math.min(Math.max(ratio, minZoomRatio), maxZoomRatio);
        }
        if (_originalEvent) {
          switch (_originalEvent.type) {
            case "wheel":
              if (options.zoomRatio >= 0.055 && ratio > 0.95 && ratio < 1.05) {
                ratio = 1;
              }
              break;
            case "pointermove":
            case "touchmove":
            case "mousemove":
              if (ratio > 0.99 && ratio < 1.01) {
                ratio = 1;
              }
              break;
          }
        }
        var newWidth = naturalWidth * ratio;
        var newHeight = naturalHeight * ratio;
        var offsetWidth = newWidth - width;
        var offsetHeight = newHeight - height;
        var oldRatio = imageData.ratio;
        if (isFunction$3(options.zoom)) {
          addListener(element, EVENT_ZOOM, options.zoom, {
            once: true
          });
        }
        if (dispatchEvent(element, EVENT_ZOOM, {
          ratio,
          oldRatio,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }
        this.zooming = true;
        if (_originalEvent) {
          var offset = getOffset(this.viewer);
          var center = pointers && Object.keys(pointers).length > 0 ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          };
          imageData.x -= offsetWidth * ((center.pageX - offset.left - x) / width);
          imageData.y -= offsetHeight * ((center.pageY - offset.top - y) / height);
        } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
          imageData.x -= offsetWidth * ((pivot.x - x) / width);
          imageData.y -= offsetHeight * ((pivot.y - y) / height);
        } else {
          imageData.x -= offsetWidth / 2;
          imageData.y -= offsetHeight / 2;
        }
        imageData.left = imageData.x;
        imageData.top = imageData.y;
        imageData.width = newWidth;
        imageData.height = newHeight;
        imageData.oldRatio = oldRatio;
        imageData.ratio = ratio;
        this.renderImage(function() {
          _this6.zooming = false;
          if (isFunction$3(options.zoomed)) {
            addListener(element, EVENT_ZOOMED, options.zoomed, {
              once: true
            });
          }
          dispatchEvent(element, EVENT_ZOOMED, {
            ratio,
            oldRatio,
            originalEvent: _originalEvent
          }, {
            cancelable: false
          });
        });
        if (showTooltip) {
          this.tooltip();
        }
      }
      return this;
    },
    play: function play() {
      var _this7 = this;
      var fullscreen = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      if (!this.isShown || this.played) {
        return this;
      }
      var element = this.element, options = this.options;
      if (isFunction$3(options.play)) {
        addListener(element, EVENT_PLAY, options.play, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_PLAY) === false) {
        return this;
      }
      var player = this.player;
      var onLoad = this.loadImage.bind(this);
      var list = [];
      var total = 0;
      var index2 = 0;
      this.played = true;
      this.onLoadWhenPlay = onLoad;
      if (fullscreen) {
        this.requestFullscreen(fullscreen);
      }
      addClass(player, CLASS_SHOW);
      forEach(this.items, function(item, i) {
        var img = item.querySelector("img");
        var image = document.createElement("img");
        image.src = getData(img, "originalUrl");
        image.alt = img.getAttribute("alt");
        image.referrerPolicy = img.referrerPolicy;
        total += 1;
        addClass(image, CLASS_FADE);
        toggleClass(image, CLASS_TRANSITION, options.transition);
        if (hasClass(item, CLASS_ACTIVE)) {
          addClass(image, CLASS_IN);
          index2 = i;
        }
        list.push(image);
        addListener(image, EVENT_LOAD, onLoad, {
          once: true
        });
        player.appendChild(image);
      });
      if (isNumber(options.interval) && options.interval > 0) {
        var prev = function prev2() {
          clearTimeout(_this7.playing.timeout);
          removeClass(list[index2], CLASS_IN);
          index2 -= 1;
          index2 = index2 >= 0 ? index2 : total - 1;
          addClass(list[index2], CLASS_IN);
          _this7.playing.timeout = setTimeout(prev2, options.interval);
        };
        var next = function next2() {
          clearTimeout(_this7.playing.timeout);
          removeClass(list[index2], CLASS_IN);
          index2 += 1;
          index2 = index2 < total ? index2 : 0;
          addClass(list[index2], CLASS_IN);
          _this7.playing.timeout = setTimeout(next2, options.interval);
        };
        if (total > 1) {
          this.playing = {
            prev,
            next,
            timeout: setTimeout(next, options.interval)
          };
        }
      }
      return this;
    },
    stop: function stop() {
      var _this8 = this;
      if (!this.played) {
        return this;
      }
      var element = this.element, options = this.options;
      if (isFunction$3(options.stop)) {
        addListener(element, EVENT_STOP, options.stop, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_STOP) === false) {
        return this;
      }
      var player = this.player;
      clearTimeout(this.playing.timeout);
      this.playing = false;
      this.played = false;
      forEach(player.getElementsByTagName("img"), function(image) {
        removeListener(image, EVENT_LOAD, _this8.onLoadWhenPlay);
      });
      removeClass(player, CLASS_SHOW);
      player.innerHTML = "";
      this.exitFullscreen();
      return this;
    },
    full: function full() {
      var _this9 = this;
      var options = this.options, viewer2 = this.viewer, image = this.image, list = this.list;
      if (!this.isShown || this.played || this.fulled || !options.inline) {
        return this;
      }
      this.fulled = true;
      this.open();
      addClass(this.button, CLASS_FULLSCREEN_EXIT);
      if (options.transition) {
        removeClass(list, CLASS_TRANSITION);
        if (this.viewed) {
          removeClass(image, CLASS_TRANSITION);
        }
      }
      addClass(viewer2, CLASS_FIXED);
      viewer2.setAttribute("role", "dialog");
      viewer2.setAttribute("aria-labelledby", this.title.id);
      viewer2.setAttribute("aria-modal", true);
      viewer2.removeAttribute("style");
      setStyle(viewer2, {
        zIndex: options.zIndex
      });
      if (options.focus) {
        this.enforceFocus();
      }
      this.initContainer();
      this.viewerData = assign$1({}, this.containerData);
      this.renderList();
      if (this.viewed) {
        this.initImage(function() {
          _this9.renderImage(function() {
            if (options.transition) {
              setTimeout(function() {
                addClass(image, CLASS_TRANSITION);
                addClass(list, CLASS_TRANSITION);
              }, 0);
            }
          });
        });
      }
      return this;
    },
    exit: function exit() {
      var _this10 = this;
      var options = this.options, viewer2 = this.viewer, image = this.image, list = this.list;
      if (!this.isShown || this.played || !this.fulled || !options.inline) {
        return this;
      }
      this.fulled = false;
      this.close();
      removeClass(this.button, CLASS_FULLSCREEN_EXIT);
      if (options.transition) {
        removeClass(list, CLASS_TRANSITION);
        if (this.viewed) {
          removeClass(image, CLASS_TRANSITION);
        }
      }
      if (options.focus) {
        this.clearEnforceFocus();
      }
      viewer2.removeAttribute("role");
      viewer2.removeAttribute("aria-labelledby");
      viewer2.removeAttribute("aria-modal");
      removeClass(viewer2, CLASS_FIXED);
      setStyle(viewer2, {
        zIndex: options.zIndexInline
      });
      this.viewerData = assign$1({}, this.parentData);
      this.renderViewer();
      this.renderList();
      if (this.viewed) {
        this.initImage(function() {
          _this10.renderImage(function() {
            if (options.transition) {
              setTimeout(function() {
                addClass(image, CLASS_TRANSITION);
                addClass(list, CLASS_TRANSITION);
              }, 0);
            }
          });
        });
      }
      return this;
    },
    tooltip: function tooltip() {
      var _this11 = this;
      var options = this.options, tooltipBox = this.tooltipBox, imageData = this.imageData;
      if (!this.viewed || this.played || !options.tooltip) {
        return this;
      }
      tooltipBox.textContent = "".concat(Math.round(imageData.ratio * 100), "%");
      if (!this.tooltipping) {
        if (options.transition) {
          if (this.fading) {
            dispatchEvent(tooltipBox, EVENT_TRANSITION_END);
          }
          addClass(tooltipBox, CLASS_SHOW);
          addClass(tooltipBox, CLASS_FADE);
          addClass(tooltipBox, CLASS_TRANSITION);
          tooltipBox.removeAttribute("aria-hidden");
          tooltipBox.initialOffsetWidth = tooltipBox.offsetWidth;
          addClass(tooltipBox, CLASS_IN);
        } else {
          addClass(tooltipBox, CLASS_SHOW);
          tooltipBox.removeAttribute("aria-hidden");
        }
      } else {
        clearTimeout(this.tooltipping);
      }
      this.tooltipping = setTimeout(function() {
        if (options.transition) {
          addListener(tooltipBox, EVENT_TRANSITION_END, function() {
            removeClass(tooltipBox, CLASS_SHOW);
            removeClass(tooltipBox, CLASS_FADE);
            removeClass(tooltipBox, CLASS_TRANSITION);
            tooltipBox.setAttribute("aria-hidden", true);
            _this11.fading = false;
          }, {
            once: true
          });
          removeClass(tooltipBox, CLASS_IN);
          _this11.fading = true;
        } else {
          removeClass(tooltipBox, CLASS_SHOW);
          tooltipBox.setAttribute("aria-hidden", true);
        }
        _this11.tooltipping = false;
      }, 1e3);
      return this;
    },
    toggle: function toggle() {
      var _originalEvent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      if (this.imageData.ratio === 1) {
        this.zoomTo(this.imageData.oldRatio, true, null, _originalEvent);
      } else {
        this.zoomTo(1, true, null, _originalEvent);
      }
      return this;
    },
    reset: function reset() {
      if (this.viewed && !this.played) {
        this.imageData = assign$1({}, this.initialImageData);
        this.renderImage();
      }
      return this;
    },
    update: function update() {
      var _this12 = this;
      var element = this.element, options = this.options, isImg = this.isImg;
      if (isImg && !element.parentNode) {
        return this.destroy();
      }
      var images = [];
      forEach(isImg ? [
        element
      ] : element.querySelectorAll("img"), function(image) {
        if (isFunction$3(options.filter)) {
          if (options.filter.call(_this12, image)) {
            images.push(image);
          }
        } else if (_this12.getImageURL(image)) {
          images.push(image);
        }
      });
      if (!images.length) {
        return this;
      }
      this.images = images;
      this.length = images.length;
      if (this.ready) {
        var changedIndexes = [];
        forEach(this.items, function(item, i) {
          var img = item.querySelector("img");
          var image = images[i];
          if (image && img) {
            if (image.src !== img.src || image.alt !== img.alt) {
              changedIndexes.push(i);
            }
          } else {
            changedIndexes.push(i);
          }
        });
        setStyle(this.list, {
          width: "auto"
        });
        this.initList();
        if (this.isShown) {
          if (this.length) {
            if (this.viewed) {
              var changedIndex = changedIndexes.indexOf(this.index);
              if (changedIndex >= 0) {
                this.viewed = false;
                this.view(Math.max(Math.min(this.index - changedIndex, this.length - 1), 0));
              } else {
                var activeItem = this.items[this.index];
                addClass(activeItem, CLASS_ACTIVE);
                activeItem.setAttribute("aria-selected", true);
              }
            }
          } else {
            this.image = null;
            this.viewed = false;
            this.index = 0;
            this.imageData = {};
            this.canvas.innerHTML = "";
            this.title.innerHTML = "";
          }
        }
      } else {
        this.build();
      }
      return this;
    },
    destroy: function destroy() {
      var element = this.element, options = this.options;
      if (!element[NAMESPACE]) {
        return this;
      }
      this.destroyed = true;
      if (this.ready) {
        if (this.played) {
          this.stop();
        }
        if (options.inline) {
          if (this.fulled) {
            this.exit();
          }
          this.unbind();
        } else if (this.isShown) {
          if (this.viewing) {
            if (this.imageRendering) {
              this.imageRendering.abort();
            } else if (this.imageInitializing) {
              this.imageInitializing.abort();
            }
          }
          if (this.hiding) {
            this.transitioning.abort();
          }
          this.hidden();
        } else if (this.showing) {
          this.transitioning.abort();
          this.hidden();
        }
        this.ready = false;
        this.viewer.parentNode.removeChild(this.viewer);
      } else if (options.inline) {
        if (this.delaying) {
          this.delaying.abort();
        } else if (this.initializing) {
          this.initializing.abort();
        }
      }
      if (!options.inline) {
        removeListener(element, EVENT_CLICK, this.onStart);
      }
      element[NAMESPACE] = void 0;
      return this;
    }
  };
  var others = {
    getImageURL: function getImageURL(image) {
      var url = this.options.url;
      if (isString(url)) {
        url = image.getAttribute(url);
      } else if (isFunction$3(url)) {
        url = url.call(this, image);
      } else {
        url = "";
      }
      return url;
    },
    enforceFocus: function enforceFocus() {
      var _this = this;
      this.clearEnforceFocus();
      addListener(document, EVENT_FOCUSIN, this.onFocusin = function(event) {
        var viewer2 = _this.viewer;
        var target = event.target;
        if (target === document || target === viewer2 || viewer2.contains(target)) {
          return;
        }
        while (target) {
          if (target.getAttribute("tabindex") !== null || target.getAttribute("aria-modal") === "true") {
            return;
          }
          target = target.parentElement;
        }
        viewer2.focus();
      });
    },
    clearEnforceFocus: function clearEnforceFocus() {
      if (this.onFocusin) {
        removeListener(document, EVENT_FOCUSIN, this.onFocusin);
        this.onFocusin = null;
      }
    },
    open: function open() {
      var body = this.body;
      addClass(body, CLASS_OPEN);
      if (this.scrollbarWidth > 0) {
        body.style.paddingRight = "".concat(this.scrollbarWidth + (parseFloat(this.initialBodyComputedPaddingRight) || 0), "px");
      }
    },
    close: function close() {
      var body = this.body;
      removeClass(body, CLASS_OPEN);
      if (this.scrollbarWidth > 0) {
        body.style.paddingRight = this.initialBodyPaddingRight;
      }
    },
    shown: function shown() {
      var element = this.element, options = this.options, viewer2 = this.viewer;
      this.fulled = true;
      this.isShown = true;
      this.render();
      this.bind();
      this.showing = false;
      if (options.focus) {
        viewer2.focus();
        this.enforceFocus();
      }
      if (isFunction$3(options.shown)) {
        addListener(element, EVENT_SHOWN, options.shown, {
          once: true
        });
      }
      if (dispatchEvent(element, EVENT_SHOWN) === false) {
        return;
      }
      if (this.ready && this.isShown && !this.hiding) {
        this.view(this.index);
      }
    },
    hidden: function hidden() {
      var element = this.element, options = this.options, viewer2 = this.viewer;
      if (options.fucus) {
        this.clearEnforceFocus();
      }
      this.fulled = false;
      this.viewed = false;
      this.isShown = false;
      this.close();
      this.unbind();
      addClass(viewer2, CLASS_HIDE);
      viewer2.removeAttribute("role");
      viewer2.removeAttribute("aria-labelledby");
      viewer2.removeAttribute("aria-modal");
      viewer2.setAttribute("aria-hidden", true);
      this.resetList();
      this.resetImage();
      this.hiding = false;
      if (!this.destroyed) {
        if (isFunction$3(options.hidden)) {
          addListener(element, EVENT_HIDDEN, options.hidden, {
            once: true
          });
        }
        dispatchEvent(element, EVENT_HIDDEN, null, {
          cancelable: false
        });
      }
    },
    requestFullscreen: function requestFullscreen(options) {
      var document2 = this.element.ownerDocument;
      if (this.fulled && !(document2.fullscreenElement || document2.webkitFullscreenElement || document2.mozFullScreenElement || document2.msFullscreenElement)) {
        var documentElement = document2.documentElement;
        if (documentElement.requestFullscreen) {
          if (isPlainObject(options)) {
            documentElement.requestFullscreen(options);
          } else {
            documentElement.requestFullscreen();
          }
        } else if (documentElement.webkitRequestFullscreen) {
          documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (documentElement.mozRequestFullScreen) {
          documentElement.mozRequestFullScreen();
        } else if (documentElement.msRequestFullscreen) {
          documentElement.msRequestFullscreen();
        }
      }
    },
    exitFullscreen: function exitFullscreen() {
      var document2 = this.element.ownerDocument;
      if (this.fulled && (document2.fullscreenElement || document2.webkitFullscreenElement || document2.mozFullScreenElement || document2.msFullscreenElement)) {
        if (document2.exitFullscreen) {
          document2.exitFullscreen();
        } else if (document2.webkitExitFullscreen) {
          document2.webkitExitFullscreen();
        } else if (document2.mozCancelFullScreen) {
          document2.mozCancelFullScreen();
        } else if (document2.msExitFullscreen) {
          document2.msExitFullscreen();
        }
      }
    },
    change: function change(event) {
      var options = this.options, pointers = this.pointers;
      var pointer = pointers[Object.keys(pointers)[0]];
      if (!pointer) {
        return;
      }
      var offsetX = pointer.endX - pointer.startX;
      var offsetY = pointer.endY - pointer.startY;
      switch (this.action) {
        case ACTION_MOVE:
          this.move(offsetX, offsetY, event);
          break;
        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), false, null, event);
          break;
        case ACTION_SWITCH: {
          this.action = "switched";
          var absoluteOffsetX = Math.abs(offsetX);
          if (absoluteOffsetX > 1 && absoluteOffsetX > Math.abs(offsetY)) {
            this.pointers = {};
            if (offsetX > 1) {
              this.prev(options.loop);
            } else if (offsetX < -1) {
              this.next(options.loop);
            }
          }
          break;
        }
      }
      forEach(pointers, function(p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    },
    isSwitchable: function isSwitchable() {
      var imageData = this.imageData, viewerData = this.viewerData;
      return this.length > 1 && imageData.x >= 0 && imageData.y >= 0 && imageData.width <= viewerData.width && imageData.height <= viewerData.height;
    }
  };
  var AnotherViewer = WINDOW.Viewer;
  var getUniqueID = function(id) {
    return function() {
      id += 1;
      return id;
    };
  }(-1);
  var Viewer = function() {
    function Viewer2(element) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      _classCallCheck(this, Viewer2);
      if (!element || element.nodeType !== 1) {
        throw new Error("The first argument is required and must be an element.");
      }
      this.element = element;
      this.options = assign$1({}, DEFAULTS, isPlainObject(options) && options);
      this.action = false;
      this.fading = false;
      this.fulled = false;
      this.hiding = false;
      this.imageClicked = false;
      this.imageData = {};
      this.index = this.options.initialViewIndex;
      this.isImg = false;
      this.isShown = false;
      this.length = 0;
      this.moving = false;
      this.played = false;
      this.playing = false;
      this.pointers = {};
      this.ready = false;
      this.rotating = false;
      this.scaling = false;
      this.showing = false;
      this.timeout = false;
      this.tooltipping = false;
      this.viewed = false;
      this.viewing = false;
      this.wheeling = false;
      this.zooming = false;
      this.pointerMoved = false;
      this.id = getUniqueID();
      this.init();
    }
    _createClass(Viewer2, [
      {
        key: "init",
        value: function init() {
          var _this = this;
          var element = this.element, options = this.options;
          if (element[NAMESPACE]) {
            return;
          }
          element[NAMESPACE] = this;
          if (options.focus && !options.keyboard) {
            options.focus = false;
          }
          var isImg = element.localName === "img";
          var images = [];
          forEach(isImg ? [
            element
          ] : element.querySelectorAll("img"), function(image) {
            if (isFunction$3(options.filter)) {
              if (options.filter.call(_this, image)) {
                images.push(image);
              }
            } else if (_this.getImageURL(image)) {
              images.push(image);
            }
          });
          this.isImg = isImg;
          this.length = images.length;
          this.images = images;
          this.initBody();
          if (isUndefined(document.createElement(NAMESPACE).style.transition)) {
            options.transition = false;
          }
          if (options.inline) {
            var count = 0;
            var progress = function progress2() {
              count += 1;
              if (count === _this.length) {
                var timeout;
                _this.initializing = false;
                _this.delaying = {
                  abort: function abort() {
                    clearTimeout(timeout);
                  }
                };
                timeout = setTimeout(function() {
                  _this.delaying = false;
                  _this.build();
                }, 0);
              }
            };
            this.initializing = {
              abort: function abort() {
                forEach(images, function(image) {
                  if (!image.complete) {
                    removeListener(image, EVENT_LOAD, progress);
                    removeListener(image, EVENT_ERROR, progress);
                  }
                });
              }
            };
            forEach(images, function(image) {
              if (image.complete) {
                progress();
              } else {
                var onLoad;
                var onError;
                addListener(image, EVENT_LOAD, onLoad = function onLoad2() {
                  removeListener(image, EVENT_ERROR, onError);
                  progress();
                }, {
                  once: true
                });
                addListener(image, EVENT_ERROR, onError = function onError2() {
                  removeListener(image, EVENT_LOAD, onLoad);
                  progress();
                }, {
                  once: true
                });
              }
            });
          } else {
            addListener(element, EVENT_CLICK, this.onStart = function(_ref) {
              var target = _ref.target;
              if (target.localName === "img" && (!isFunction$3(options.filter) || options.filter.call(_this, target))) {
                _this.view(_this.images.indexOf(target));
              }
            });
          }
        }
      },
      {
        key: "build",
        value: function build() {
          if (this.ready) {
            return;
          }
          var element = this.element, options = this.options;
          var parent = element.parentNode;
          var template = document.createElement("div");
          template.innerHTML = TEMPLATE;
          var viewer2 = template.querySelector(".".concat(NAMESPACE, "-container"));
          var title = viewer2.querySelector(".".concat(NAMESPACE, "-title"));
          var toolbar = viewer2.querySelector(".".concat(NAMESPACE, "-toolbar"));
          var navbar = viewer2.querySelector(".".concat(NAMESPACE, "-navbar"));
          var button = viewer2.querySelector(".".concat(NAMESPACE, "-button"));
          var canvas = viewer2.querySelector(".".concat(NAMESPACE, "-canvas"));
          this.parent = parent;
          this.viewer = viewer2;
          this.title = title;
          this.toolbar = toolbar;
          this.navbar = navbar;
          this.button = button;
          this.canvas = canvas;
          this.footer = viewer2.querySelector(".".concat(NAMESPACE, "-footer"));
          this.tooltipBox = viewer2.querySelector(".".concat(NAMESPACE, "-tooltip"));
          this.player = viewer2.querySelector(".".concat(NAMESPACE, "-player"));
          this.list = viewer2.querySelector(".".concat(NAMESPACE, "-list"));
          viewer2.id = "".concat(NAMESPACE).concat(this.id);
          title.id = "".concat(NAMESPACE, "Title").concat(this.id);
          addClass(title, !options.title ? CLASS_HIDE : getResponsiveClass(Array.isArray(options.title) ? options.title[0] : options.title));
          addClass(navbar, !options.navbar ? CLASS_HIDE : getResponsiveClass(options.navbar));
          toggleClass(button, CLASS_HIDE, !options.button);
          if (options.keyboard) {
            button.setAttribute("tabindex", 0);
          }
          if (options.backdrop) {
            addClass(viewer2, "".concat(NAMESPACE, "-backdrop"));
            if (!options.inline && options.backdrop !== "static") {
              setData(canvas, DATA_ACTION, "hide");
            }
          }
          if (isString(options.className) && options.className) {
            options.className.split(REGEXP_SPACES).forEach(function(className) {
              addClass(viewer2, className);
            });
          }
          if (options.toolbar) {
            var list = document.createElement("ul");
            var custom = isPlainObject(options.toolbar);
            var zoomButtons = BUTTONS.slice(0, 3);
            var rotateButtons = BUTTONS.slice(7, 9);
            var scaleButtons = BUTTONS.slice(9);
            if (!custom) {
              addClass(toolbar, getResponsiveClass(options.toolbar));
            }
            forEach(custom ? options.toolbar : BUTTONS, function(value, index2) {
              var deep = custom && isPlainObject(value);
              var name = custom ? hyphenate(index2) : value;
              var show = deep && !isUndefined(value.show) ? value.show : value;
              if (!show || !options.zoomable && zoomButtons.indexOf(name) !== -1 || !options.rotatable && rotateButtons.indexOf(name) !== -1 || !options.scalable && scaleButtons.indexOf(name) !== -1) {
                return;
              }
              var size = deep && !isUndefined(value.size) ? value.size : value;
              var click = deep && !isUndefined(value.click) ? value.click : value;
              var item = document.createElement("li");
              if (options.keyboard) {
                item.setAttribute("tabindex", 0);
              }
              item.setAttribute("role", "button");
              addClass(item, "".concat(NAMESPACE, "-").concat(name));
              if (!isFunction$3(click)) {
                setData(item, DATA_ACTION, name);
              }
              if (isNumber(show)) {
                addClass(item, getResponsiveClass(show));
              }
              if ([
                "small",
                "large"
              ].indexOf(size) !== -1) {
                addClass(item, "".concat(NAMESPACE, "-").concat(size));
              } else if (name === "play") {
                addClass(item, "".concat(NAMESPACE, "-large"));
              }
              if (isFunction$3(click)) {
                addListener(item, EVENT_CLICK, click);
              }
              list.appendChild(item);
            });
            toolbar.appendChild(list);
          } else {
            addClass(toolbar, CLASS_HIDE);
          }
          if (!options.rotatable) {
            var rotates = toolbar.querySelectorAll('li[class*="rotate"]');
            addClass(rotates, CLASS_INVISIBLE);
            forEach(rotates, function(rotate) {
              toolbar.appendChild(rotate);
            });
          }
          if (options.inline) {
            addClass(button, CLASS_FULLSCREEN);
            setStyle(viewer2, {
              zIndex: options.zIndexInline
            });
            if (window.getComputedStyle(parent).position === "static") {
              setStyle(parent, {
                position: "relative"
              });
            }
            parent.insertBefore(viewer2, element.nextSibling);
          } else {
            addClass(button, CLASS_CLOSE);
            addClass(viewer2, CLASS_FIXED);
            addClass(viewer2, CLASS_FADE);
            addClass(viewer2, CLASS_HIDE);
            setStyle(viewer2, {
              zIndex: options.zIndex
            });
            var container = options.container;
            if (isString(container)) {
              container = element.ownerDocument.querySelector(container);
            }
            if (!container) {
              container = this.body;
            }
            container.appendChild(viewer2);
          }
          if (options.inline) {
            this.render();
            this.bind();
            this.isShown = true;
          }
          this.ready = true;
          if (isFunction$3(options.ready)) {
            addListener(element, EVENT_READY, options.ready, {
              once: true
            });
          }
          if (dispatchEvent(element, EVENT_READY) === false) {
            this.ready = false;
            return;
          }
          if (this.ready && options.inline) {
            this.view(this.index);
          }
        }
      }
    ], [
      {
        key: "noConflict",
        value: function noConflict() {
          window.Viewer = AnotherViewer;
          return Viewer2;
        }
      },
      {
        key: "setDefaults",
        value: function setDefaults(options) {
          assign$1(DEFAULTS, isPlainObject(options) && options);
        }
      }
    ]);
    return Viewer2;
  }();
  assign$1(Viewer.prototype, render, events, handlers, methods, others);
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function identity$2(value) {
    return value;
  }
  var identity_1 = identity$2;
  function apply$1(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  var _apply = apply$1;
  var apply = _apply;
  var nativeMax$1 = Math.max;
  function overRest$1(func, start, transform) {
    start = nativeMax$1(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index2 = -1, length = nativeMax$1(args.length - start, 0), array = Array(length);
      while (++index2 < length) {
        array[index2] = args[start + index2];
      }
      index2 = -1;
      var otherArgs = Array(start + 1);
      while (++index2 < start) {
        otherArgs[index2] = args[index2];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }
  var _overRest = overRest$1;
  function constant$1(value) {
    return function() {
      return value;
    };
  }
  var constant_1 = constant$1;
  var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var _freeGlobal = freeGlobal$1;
  var freeGlobal = _freeGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root$3 = freeGlobal || freeSelf || Function("return this")();
  var _root = root$3;
  var root$2 = _root;
  var Symbol$3 = root$2.Symbol;
  var _Symbol = Symbol$3;
  var Symbol$2 = _Symbol;
  var objectProto$7 = Object.prototype;
  var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$7.toString;
  var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$5.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }
  var _getRawTag = getRawTag$1;
  var objectProto$6 = Object.prototype;
  var nativeObjectToString = objectProto$6.toString;
  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }
  var _objectToString = objectToString$1;
  var Symbol$1 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
  function baseGetTag$4(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  var _baseGetTag = baseGetTag$4;
  function isObject$7(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_1 = isObject$7;
  var baseGetTag$3 = _baseGetTag, isObject$6 = isObject_1;
  var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
  function isFunction$2(value) {
    if (!isObject$6(value)) {
      return false;
    }
    var tag = baseGetTag$3(value);
    return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_1 = isFunction$2;
  var root$1 = _root;
  var coreJsData$1 = root$1["__core-js_shared__"];
  var _coreJsData = coreJsData$1;
  var coreJsData = _coreJsData;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked$1(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var _isMasked = isMasked$1;
  var funcProto$1 = Function.prototype;
  var funcToString$1 = funcProto$1.toString;
  function toSource$1(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  var _toSource = toSource$1;
  var isFunction$1 = isFunction_1, isMasked = _isMasked, isObject$5 = isObject_1, toSource = _toSource;
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto = Function.prototype, objectProto$5 = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
  var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$4).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function baseIsNative$1(value) {
    if (!isObject$5(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  var _baseIsNative = baseIsNative$1;
  function getValue$1(object, key) {
    return object == null ? void 0 : object[key];
  }
  var _getValue = getValue$1;
  var baseIsNative = _baseIsNative, getValue = _getValue;
  function getNative$1(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  var _getNative = getNative$1;
  var getNative = _getNative;
  var defineProperty$1 = function() {
    try {
      var func = getNative(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {
    }
  }();
  var _defineProperty = defineProperty$1;
  var constant = constant_1, defineProperty = _defineProperty, identity$1 = identity_1;
  var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
    return defineProperty(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant(string),
      "writable": true
    });
  };
  var _baseSetToString = baseSetToString$1;
  var HOT_COUNT = 800, HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut$1(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  var _shortOut = shortOut$1;
  var baseSetToString = _baseSetToString, shortOut = _shortOut;
  var setToString$1 = shortOut(baseSetToString);
  var _setToString = setToString$1;
  var identity = identity_1, overRest = _overRest, setToString = _setToString;
  function baseRest$1(func, start) {
    return setToString(overRest(func, start, identity), func + "");
  }
  var _baseRest = baseRest$1;
  function eq$2(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_1 = eq$2;
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  function isLength$2(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
  }
  var isLength_1 = isLength$2;
  var isFunction = isFunction_1, isLength$1 = isLength_1;
  function isArrayLike$2(value) {
    return value != null && isLength$1(value.length) && !isFunction(value);
  }
  var isArrayLike_1 = isArrayLike$2;
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex$2(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  var _isIndex = isIndex$2;
  var eq$1 = eq_1, isArrayLike$1 = isArrayLike_1, isIndex$1 = _isIndex, isObject$4 = isObject_1;
  function isIterateeCall$1(value, index2, object) {
    if (!isObject$4(object)) {
      return false;
    }
    var type = typeof index2;
    if (type == "number" ? isArrayLike$1(object) && isIndex$1(index2, object.length) : type == "string" && index2 in object) {
      return eq$1(object[index2], value);
    }
    return false;
  }
  var _isIterateeCall = isIterateeCall$1;
  function baseTimes$1(n, iteratee) {
    var index2 = -1, result = Array(n);
    while (++index2 < n) {
      result[index2] = iteratee(index2);
    }
    return result;
  }
  var _baseTimes = baseTimes$1;
  function isObjectLike$4(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_1 = isObjectLike$4;
  var baseGetTag$2 = _baseGetTag, isObjectLike$3 = isObjectLike_1;
  var argsTag$1 = "[object Arguments]";
  function baseIsArguments$1(value) {
    return isObjectLike$3(value) && baseGetTag$2(value) == argsTag$1;
  }
  var _baseIsArguments = baseIsArguments$1;
  var baseIsArguments = _baseIsArguments, isObjectLike$2 = isObjectLike_1;
  var objectProto$4 = Object.prototype;
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
  var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;
  var isArguments$1 = baseIsArguments(function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike$2(value) && hasOwnProperty$3.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArguments_1 = isArguments$1;
  var isArray$1 = Array.isArray;
  var isArray_1 = isArray$1;
  var isBuffer$1 = {
    exports: {}
  };
  function stubFalse() {
    return false;
  }
  var stubFalse_1 = stubFalse;
  (function(module, exports) {
    var root2 = _root, stubFalse2 = stubFalse_1;
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root2.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer2 = nativeIsBuffer || stubFalse2;
    module.exports = isBuffer2;
  })(isBuffer$1, isBuffer$1.exports);
  var baseGetTag$1 = _baseGetTag, isLength = isLength_1, isObjectLike$1 = isObjectLike_1;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray$1(value) {
    return isObjectLike$1(value) && isLength(value.length) && !!typedArrayTags[baseGetTag$1(value)];
  }
  var _baseIsTypedArray = baseIsTypedArray$1;
  function baseUnary$1(func) {
    return function(value) {
      return func(value);
    };
  }
  var _baseUnary = baseUnary$1;
  var _nodeUtil = {
    exports: {}
  };
  (function(module, exports) {
    var freeGlobal2 = _freeGlobal;
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal2.process;
    var nodeUtil2 = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil2;
  })(_nodeUtil, _nodeUtil.exports);
  var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtil.exports;
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  var isTypedArray_1 = isTypedArray$1;
  var baseTimes = _baseTimes, isArguments = isArguments_1, isArray = isArray_1, isBuffer = isBuffer$1.exports, isIndex = _isIndex, isTypedArray = isTypedArray_1;
  var objectProto$3 = Object.prototype;
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
  function arrayLikeKeys$1(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty$2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  var _arrayLikeKeys = arrayLikeKeys$1;
  var objectProto$2 = Object.prototype;
  function isPrototype$1(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$2;
    return value === proto;
  }
  var _isPrototype = isPrototype$1;
  function nativeKeysIn$1(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  var _nativeKeysIn = nativeKeysIn$1;
  var isObject$3 = isObject_1, isPrototype = _isPrototype, nativeKeysIn = _nativeKeysIn;
  var objectProto$1 = Object.prototype;
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
  function baseKeysIn$1(object) {
    if (!isObject$3(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty$1.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  var _baseKeysIn = baseKeysIn$1;
  var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike = isArrayLike_1;
  function keysIn$1(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }
  var keysIn_1 = keysIn$1;
  var baseRest = _baseRest, eq = eq_1, isIterateeCall = _isIterateeCall, keysIn = keysIn_1;
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var defaults = baseRest(function(object, sources) {
    object = Object(object);
    var index2 = -1;
    var length = sources.length;
    var guard = length > 2 ? sources[2] : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      length = 1;
    }
    while (++index2 < length) {
      var source = sources[index2];
      var props = keysIn(source);
      var propsIndex = -1;
      var propsLength = props.length;
      while (++propsIndex < propsLength) {
        var key = props[propsIndex];
        var value = object[key];
        if (value === void 0 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
          object[key] = source[key];
        }
      }
    }
    return object;
  });
  var defaults_1 = defaults;
  const inBrowser = typeof window !== "undefined" && window !== null;
  checkIntersectionObserver();
  const isEnumerable = Object.prototype.propertyIsEnumerable;
  const getSymbols = Object.getOwnPropertySymbols;
  function isObject$2(val) {
    return typeof val === "function" || toString.call(val) === "[object Object]";
  }
  function isPrimitive(val) {
    return typeof val === "object" ? val === null : typeof val !== "function";
  }
  function isValidKey(key) {
    return key !== "__proto__" && key !== "constructor" && key !== "prototype";
  }
  function checkIntersectionObserver() {
    if (inBrowser && "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
      if (!("isIntersecting" in window.IntersectionObserverEntry.prototype)) {
        Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
          get() {
            return this.intersectionRatio > 0;
          }
        });
      }
      return true;
    }
    return false;
  }
  function assignSymbols(target, ...args) {
    if (!isObject$2(target)) {
      throw new TypeError("expected the first argument to be an object");
    }
    if (args.length === 0 || typeof Symbol !== "function" || typeof getSymbols !== "function") {
      return target;
    }
    for (const arg of args) {
      const names = getSymbols(arg);
      for (const key of names) {
        if (isEnumerable.call(arg, key)) {
          target[key] = arg[key];
        }
      }
    }
    return target;
  }
  function assign(target, ...args) {
    let i = 0;
    if (isPrimitive(target))
      target = args[i++];
    if (!target)
      target = {};
    for (; i < args.length; i++) {
      if (isObject$2(args[i])) {
        for (const key of Object.keys(args[i])) {
          if (isValidKey(key)) {
            if (isObject$2(target[key]) && isObject$2(args[i][key])) {
              assign(target[key], args[i][key]);
            } else {
              target[key] = args[i][key];
            }
          }
        }
        assignSymbols(target, args[i]);
      }
    }
    return target;
  }
  const api = ({ images = [], options }) => {
    options = assign(options, {
      inline: false
    });
    const token = document.createElement("div");
    const ViewerToken = h("div", {
      style: {
        display: "none"
      },
      class: [
        "__viewer-token"
      ]
    }, images.map((attr) => {
      return h("img", typeof attr === "string" ? {
        src: attr
      } : attr);
    }));
    render$1(ViewerToken, token);
    const tokenElement = token.firstElementChild;
    document.body.appendChild(tokenElement);
    const $viewerJs = new Viewer(tokenElement, options);
    const $destroy = $viewerJs.destroy.bind($viewerJs);
    $viewerJs.destroy = function() {
      $destroy();
      render$1(null, token);
      return $viewerJs;
    };
    $viewerJs.show();
    tokenElement.addEventListener("hidden", function() {
      if (this.viewer === $viewerJs) {
        $viewerJs.destroy();
      }
    });
    return $viewerJs;
  };
  var root = _root;
  var now$1 = function() {
    return root.Date.now();
  };
  var now_1 = now$1;
  var reWhitespace = /\s/;
  function trimmedEndIndex$1(string) {
    var index2 = string.length;
    while (index2-- && reWhitespace.test(string.charAt(index2))) {
    }
    return index2;
  }
  var _trimmedEndIndex = trimmedEndIndex$1;
  var trimmedEndIndex = _trimmedEndIndex;
  var reTrimStart = /^\s+/;
  function baseTrim$1(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
  }
  var _baseTrim = baseTrim$1;
  var baseGetTag = _baseGetTag, isObjectLike = isObjectLike_1;
  var symbolTag = "[object Symbol]";
  function isSymbol$1(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  var isSymbol_1 = isSymbol$1;
  var baseTrim = _baseTrim, isObject$1 = isObject_1, isSymbol = isSymbol_1;
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber$1(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject$1(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject$1(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var toNumber_1 = toNumber$1;
  var isObject = isObject_1, now = now_1, toNumber = toNumber_1;
  var FUNC_ERROR_TEXT = "Expected a function";
  var nativeMax = Math.max, nativeMin = Math.min;
  function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now());
    }
    function debounced() {
      var time = now(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  var debounce_1 = debounce;
  const directive = ({ name = "viewer", debug = false } = {}) => {
    async function createViewer(el, options, rebuild = false, observer = false) {
      await nextTick();
      if (observer && !imageDiff(el))
        return;
      if (rebuild || !el[`$${name}`]) {
        destroyViewer(el);
        el[`$${name}`] = new Viewer(el, options);
        log("Viewer created");
      } else {
        el[`$${name}`].update();
        log("Viewer updated");
      }
    }
    function imageDiff(el) {
      const imageContent = el.innerHTML.match(/<img([\w\W]+?)[\\/]?>/g);
      const viewerImageText = imageContent ? imageContent.join("") : void 0;
      if (el.__viewerImageDiffCache === viewerImageText) {
        log("Element change detected, but image(s) has not changed");
        return false;
      } else {
        log("Image change detected");
        el.__viewerImageDiffCache = viewerImageText;
        return true;
      }
    }
    function createObserver(el, options, debouncedCreateViewer, rebuild) {
      destroyObserver(el);
      const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      if (!MutationObserver) {
        log("Observer not supported");
        return;
      }
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          log(`Viewer mutation:${mutation.type}`);
          debouncedCreateViewer(el, options, rebuild, true);
        });
      });
      const config = {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      };
      observer.observe(el, config);
      el.__viewerMutationObserver = observer;
      log("Observer created");
    }
    function createWatcher(el, binding, vnode, debouncedCreateViewer) {
      el.__viewerUnwatch = watch(() => binding.value, (newVal, oldVal) => {
        log("Change detected by watcher: ", binding.value);
        debouncedCreateViewer(el, newVal, true, false);
      }, {
        deep: true
      });
      log("Watcher created, expression: ", binding.value);
    }
    function destroyViewer(el) {
      if (!el[`$${name}`]) {
        return;
      }
      el[`$${name}`].destroy();
      delete el[`$${name}`];
      log("Viewer destroyed");
    }
    function destroyObserver(el) {
      if (!el.__viewerMutationObserver) {
        return;
      }
      el.__viewerMutationObserver.disconnect();
      delete el.__viewerMutationObserver;
      log("observer destroyed");
    }
    function destroyWatcher(el) {
      if (!el.__viewerUnwatch) {
        return;
      }
      el.__viewerUnwatch();
      delete el.__viewerUnwatch;
      log("Watcher destroyed");
    }
    function log(...args) {
      debug && console.log(...args);
    }
    const directive2 = {
      mounted(el, binding, vnode) {
        log("Viewer bind");
        const debouncedCreateViewer = debounce_1(createViewer, 50);
        debouncedCreateViewer(el, binding.value);
        createWatcher(el, binding, vnode, debouncedCreateViewer);
        if (!binding.modifiers.static) {
          createObserver(el, binding.value, debouncedCreateViewer, binding.modifiers.rebuild);
        }
      },
      unmounted(el) {
        log("Viewer unbind");
        destroyObserver(el);
        destroyWatcher(el);
        destroyViewer(el);
      }
    };
    return directive2;
  };
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main = defineComponent({
    name: "Viewer",
    props: {
      images: {
        type: Array,
        default: () => []
      },
      rebuild: {
        type: Boolean,
        default: false
      },
      trigger: {
        type: Object,
        default: null
      },
      options: {
        type: Object,
        default: () => null
      }
    },
    emits: [
      "inited"
    ],
    setup(props, { emit }) {
      let $viewer;
      const root2 = ref();
      function createViewer() {
        $viewer = new Viewer(root2.value, props.options);
        emit("inited", $viewer);
      }
      function destroyViewer() {
        $viewer && $viewer.destroy();
      }
      function rebuildViewer() {
        destroyViewer();
        createViewer();
      }
      function updateViewer() {
        if ($viewer) {
          $viewer.update();
          emit("inited", $viewer);
        } else {
          createViewer();
        }
      }
      function changeViewer() {
        if (props.rebuild) {
          rebuildViewer();
        } else {
          updateViewer();
        }
      }
      const options = {
        deep: true
      };
      watch(() => props.images, () => nextTick(() => changeViewer()), options);
      watch(() => props.trigger, () => nextTick(() => changeViewer()), options);
      watch(() => props.options, () => nextTick(() => rebuildViewer()), options);
      onMounted(() => createViewer());
      onUnmounted(() => destroyViewer());
      return {
        root: root2,
        createViewer,
        rebuildViewer,
        updateViewer,
        destroyViewer
      };
    }
  });
  const _hoisted_1 = {
    ref: "root"
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return openBlock(), createElementBlock("div", _hoisted_1, [
      renderSlot(_ctx.$slots, "default", {
        images: _ctx.images,
        options: _ctx.options
      })
    ], 512);
  }
  var component = _export_sfc(_sfc_main, [
    [
      "render",
      _sfc_render
    ]
  ]);
  var index = {
    install(app, { name = "viewer", debug = false, defaultOptions } = {}) {
      if (defaultOptions) {
        Viewer.setDefaults(defaultOptions);
      }
      app.config.globalProperties[`$${name}Api`] = api;
      app.component(name, defaults_1(component, {
        name
      }));
      app.directive(name, directive({
        name,
        debug
      }));
    },
    setDefaults(defaultOptions) {
      Viewer.setDefaults(defaultOptions);
    }
  };
  vViewer = boot(async ({ app }) => {
    app.use(index);
  });
});
export {
  __tla,
  vViewer as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidi12aWV3ZXIuMmNhNzdmMWMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92aWV3ZXJqcy9kaXN0L3ZpZXdlci5lc20uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdi12aWV3ZXIvZGlzdC9pbmRleC5lcy5qcyIsIi4uLy4uLy4uL3NyYy9ib290L3Ytdmlld2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogVmlld2VyLmpzIHYxLjExLjJcbiAqIGh0dHBzOi8vZmVuZ3l1YW5jaGVuLmdpdGh1Yi5pby92aWV3ZXJqc1xuICpcbiAqIENvcHlyaWdodCAyMDE1LXByZXNlbnQgQ2hlbiBGZW5neXVhblxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKlxuICogRGF0ZTogMjAyMy0wMS0wMVQxMDoxNDo0OS42MzhaXG4gKi9cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG4gIHJldHVybiBrZXlzO1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmICh0eXBlb2YgcmVzICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gX3RvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiB0eXBlb2Yga2V5ID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5cbnZhciBERUZBVUxUUyA9IHtcbiAgLyoqXG4gICAqIEVuYWJsZSBhIG1vZGFsIGJhY2tkcm9wLCBzcGVjaWZ5IGBzdGF0aWNgIGZvciBhIGJhY2tkcm9wXG4gICAqIHdoaWNoIGRvZXNuJ3QgY2xvc2UgdGhlIG1vZGFsIG9uIGNsaWNrLlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGJhY2tkcm9wOiB0cnVlLFxuICAvKipcbiAgICogU2hvdyB0aGUgYnV0dG9uIG9uIHRoZSB0b3AtcmlnaHQgb2YgdGhlIHZpZXdlci5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBidXR0b246IHRydWUsXG4gIC8qKlxuICAgKiBTaG93IHRoZSBuYXZiYXIuXG4gICAqIEB0eXBlIHtib29sZWFuIHwgbnVtYmVyfVxuICAgKi9cbiAgbmF2YmFyOiB0cnVlLFxuICAvKipcbiAgICogU3BlY2lmeSB0aGUgdmlzaWJpbGl0eSBhbmQgdGhlIGNvbnRlbnQgb2YgdGhlIHRpdGxlLlxuICAgKiBAdHlwZSB7Ym9vbGVhbiB8IG51bWJlciB8IEZ1bmN0aW9uIHwgQXJyYXl9XG4gICAqL1xuICB0aXRsZTogdHJ1ZSxcbiAgLyoqXG4gICAqIFNob3cgdGhlIHRvb2xiYXIuXG4gICAqIEB0eXBlIHtib29sZWFuIHwgbnVtYmVyIHwgT2JqZWN0fVxuICAgKi9cbiAgdG9vbGJhcjogdHJ1ZSxcbiAgLyoqXG4gICAqIEN1c3RvbSBjbGFzcyBuYW1lKHMpIHRvIGFkZCB0byB0aGUgdmlld2VyJ3Mgcm9vdCBlbGVtZW50LlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgY2xhc3NOYW1lOiAnJyxcbiAgLyoqXG4gICAqIERlZmluZSB3aGVyZSB0byBwdXQgdGhlIHZpZXdlciBpbiBtb2RhbCBtb2RlLlxuICAgKiBAdHlwZSB7c3RyaW5nIHwgRWxlbWVudH1cbiAgICovXG4gIGNvbnRhaW5lcjogJ2JvZHknLFxuICAvKipcbiAgICogRmlsdGVyIHRoZSBpbWFnZXMgZm9yIHZpZXdpbmcuIFJldHVybiB0cnVlIGlmIHRoZSBpbWFnZSBpcyB2aWV3YWJsZS5cbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKi9cbiAgZmlsdGVyOiBudWxsLFxuICAvKipcbiAgICogRW5hYmxlIHRvIHJlcXVlc3QgZnVsbHNjcmVlbiB3aGVuIHBsYXkuXG4gICAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRnVsbHNjcmVlbk9wdGlvbnN9XG4gICAqIEB0eXBlIHtib29sZWFufEZ1bGxzY3JlZW5PcHRpb25zfVxuICAgKi9cbiAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgLyoqXG4gICAqIERlZmluZSB0aGUgZXh0cmEgYXR0cmlidXRlcyB0byBpbmhlcml0IGZyb20gdGhlIG9yaWdpbmFsIGltYWdlLlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuICBpbmhlcml0ZWRBdHRyaWJ1dGVzOiBbJ2Nyb3NzT3JpZ2luJywgJ2RlY29kaW5nJywgJ2lzTWFwJywgJ2xvYWRpbmcnLCAncmVmZXJyZXJQb2xpY3knLCAnc2l6ZXMnLCAnc3Jjc2V0JywgJ3VzZU1hcCddLFxuICAvKipcbiAgICogRGVmaW5lIHRoZSBpbml0aWFsIGNvdmVyYWdlIG9mIHRoZSB2aWV3aW5nIGltYWdlLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgaW5pdGlhbENvdmVyYWdlOiAwLjksXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIGluaXRpYWwgaW5kZXggb2YgdGhlIGltYWdlIGZvciB2aWV3aW5nLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgaW5pdGlhbFZpZXdJbmRleDogMCxcbiAgLyoqXG4gICAqIEVuYWJsZSBpbmxpbmUgbW9kZS5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBpbmxpbmU6IGZhbHNlLFxuICAvKipcbiAgICogVGhlIGFtb3VudCBvZiB0aW1lIHRvIGRlbGF5IGJldHdlZW4gYXV0b21hdGljYWxseSBjeWNsaW5nIGFuIGltYWdlIHdoZW4gcGxheWluZy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGludGVydmFsOiA1MDAwLFxuICAvKipcbiAgICogRW5hYmxlIGtleWJvYXJkIHN1cHBvcnQuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAga2V5Ym9hcmQ6IHRydWUsXG4gIC8qKlxuICAgKiBGb2N1cyB0aGUgdmlld2VyIHdoZW4gaW5pdGlhbGl6ZWQuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgZm9jdXM6IHRydWUsXG4gIC8qKlxuICAgKiBJbmRpY2F0ZSBpZiBzaG93IGEgbG9hZGluZyBzcGlubmVyIHdoZW4gbG9hZCBpbWFnZSBvciBub3QuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgbG9hZGluZzogdHJ1ZSxcbiAgLyoqXG4gICAqIEluZGljYXRlIGlmIGVuYWJsZSBsb29wIHZpZXdpbmcgb3Igbm90LlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGxvb3A6IHRydWUsXG4gIC8qKlxuICAgKiBNaW4gd2lkdGggb2YgdGhlIHZpZXdlciBpbiBpbmxpbmUgbW9kZS5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIG1pbldpZHRoOiAyMDAsXG4gIC8qKlxuICAgKiBNaW4gaGVpZ2h0IG9mIHRoZSB2aWV3ZXIgaW4gaW5saW5lIG1vZGUuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBtaW5IZWlnaHQ6IDEwMCxcbiAgLyoqXG4gICAqIEVuYWJsZSB0byBtb3ZlIHRoZSBpbWFnZS5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBtb3ZhYmxlOiB0cnVlLFxuICAvKipcbiAgICogRW5hYmxlIHRvIHJvdGF0ZSB0aGUgaW1hZ2UuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgcm90YXRhYmxlOiB0cnVlLFxuICAvKipcbiAgICogRW5hYmxlIHRvIHNjYWxlIHRoZSBpbWFnZS5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICBzY2FsYWJsZTogdHJ1ZSxcbiAgLyoqXG4gICAqIEVuYWJsZSB0byB6b29tIHRoZSBpbWFnZS5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICB6b29tYWJsZTogdHJ1ZSxcbiAgLyoqXG4gICAqIEVuYWJsZSB0byB6b29tIHRoZSBjdXJyZW50IGltYWdlIGJ5IGRyYWdnaW5nIG9uIHRoZSB0b3VjaCBzY3JlZW4uXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgem9vbU9uVG91Y2g6IHRydWUsXG4gIC8qKlxuICAgKiBFbmFibGUgdG8gem9vbSB0aGUgaW1hZ2UgYnkgd2hlZWxpbmcgbW91c2UuXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cbiAgem9vbU9uV2hlZWw6IHRydWUsXG4gIC8qKlxuICAgKiBFbmFibGUgdG8gc2xpZGUgdG8gdGhlIG5leHQgb3IgcHJldmlvdXMgaW1hZ2UgYnkgc3dpcGluZyBvbiB0aGUgdG91Y2ggc2NyZWVuLlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHNsaWRlT25Ub3VjaDogdHJ1ZSxcbiAgLyoqXG4gICAqIEluZGljYXRlIGlmIHRvZ2dsZSB0aGUgaW1hZ2Ugc2l6ZSBiZXR3ZWVuIGl0cyBuYXR1cmFsIHNpemVcbiAgICogYW5kIGluaXRpYWwgc2l6ZSB3aGVuIGRvdWJsZSBjbGljayBvbiB0aGUgaW1hZ2Ugb3Igbm90LlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHRvZ2dsZU9uRGJsY2xpY2s6IHRydWUsXG4gIC8qKlxuICAgKiBTaG93IHRoZSB0b29sdGlwIHdpdGggaW1hZ2UgcmF0aW8gKHBlcmNlbnRhZ2UpIHdoZW4gem9vbSBpbiBvciB6b29tIG91dC5cbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuICB0b29sdGlwOiB0cnVlLFxuICAvKipcbiAgICogRW5hYmxlIENTUzMgVHJhbnNpdGlvbiBmb3Igc29tZSBzcGVjaWFsIGVsZW1lbnRzLlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIHRyYW5zaXRpb246IHRydWUsXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIENTUyBgei1pbmRleGAgdmFsdWUgb2Ygdmlld2VyIGluIG1vZGFsIG1vZGUuXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICB6SW5kZXg6IDIwMTUsXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIENTUyBgei1pbmRleGAgdmFsdWUgb2Ygdmlld2VyIGluIGlubGluZSBtb2RlLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgekluZGV4SW5saW5lOiAwLFxuICAvKipcbiAgICogRGVmaW5lIHRoZSByYXRpbyB3aGVuIHpvb20gdGhlIGltYWdlIGJ5IHdoZWVsaW5nIG1vdXNlLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgem9vbVJhdGlvOiAwLjEsXG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIG1pbiByYXRpbyBvZiB0aGUgaW1hZ2Ugd2hlbiB6b29tIG91dC5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIG1pblpvb21SYXRpbzogMC4wMSxcbiAgLyoqXG4gICAqIERlZmluZSB0aGUgbWF4IHJhdGlvIG9mIHRoZSBpbWFnZSB3aGVuIHpvb20gaW4uXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBtYXhab29tUmF0aW86IDEwMCxcbiAgLyoqXG4gICAqIERlZmluZSB3aGVyZSB0byBnZXQgdGhlIG9yaWdpbmFsIGltYWdlIFVSTCBmb3Igdmlld2luZy5cbiAgICogQHR5cGUge3N0cmluZyB8IEZ1bmN0aW9ufVxuICAgKi9cbiAgdXJsOiAnc3JjJyxcbiAgLyoqXG4gICAqIEV2ZW50IHNob3J0Y3V0cy5cbiAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgKi9cbiAgcmVhZHk6IG51bGwsXG4gIHNob3c6IG51bGwsXG4gIHNob3duOiBudWxsLFxuICBoaWRlOiBudWxsLFxuICBoaWRkZW46IG51bGwsXG4gIHZpZXc6IG51bGwsXG4gIHZpZXdlZDogbnVsbCxcbiAgbW92ZTogbnVsbCxcbiAgbW92ZWQ6IG51bGwsXG4gIHJvdGF0ZTogbnVsbCxcbiAgcm90YXRlZDogbnVsbCxcbiAgc2NhbGU6IG51bGwsXG4gIHNjYWxlZDogbnVsbCxcbiAgem9vbTogbnVsbCxcbiAgem9vbWVkOiBudWxsLFxuICBwbGF5OiBudWxsLFxuICBzdG9wOiBudWxsXG59O1xuXG52YXIgVEVNUExBVEUgPSAnPGRpdiBjbGFzcz1cInZpZXdlci1jb250YWluZXJcIiB0YWJpbmRleD1cIi0xXCIgdG91Y2gtYWN0aW9uPVwibm9uZVwiPicgKyAnPGRpdiBjbGFzcz1cInZpZXdlci1jYW52YXNcIj48L2Rpdj4nICsgJzxkaXYgY2xhc3M9XCJ2aWV3ZXItZm9vdGVyXCI+JyArICc8ZGl2IGNsYXNzPVwidmlld2VyLXRpdGxlXCI+PC9kaXY+JyArICc8ZGl2IGNsYXNzPVwidmlld2VyLXRvb2xiYXJcIj48L2Rpdj4nICsgJzxkaXYgY2xhc3M9XCJ2aWV3ZXItbmF2YmFyXCI+JyArICc8dWwgY2xhc3M9XCJ2aWV3ZXItbGlzdFwiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+PC91bD4nICsgJzwvZGl2PicgKyAnPC9kaXY+JyArICc8ZGl2IGNsYXNzPVwidmlld2VyLXRvb2x0aXBcIiByb2xlPVwiYWxlcnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2Rpdj4nICsgJzxkaXYgY2xhc3M9XCJ2aWV3ZXItYnV0dG9uXCIgZGF0YS12aWV3ZXItYWN0aW9uPVwibWl4XCIgcm9sZT1cImJ1dHRvblwiPjwvZGl2PicgKyAnPGRpdiBjbGFzcz1cInZpZXdlci1wbGF5ZXJcIj48L2Rpdj4nICsgJzwvZGl2Pic7XG5cbnZhciBJU19CUk9XU0VSID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgV0lORE9XID0gSVNfQlJPV1NFUiA/IHdpbmRvdyA6IHt9O1xudmFyIElTX1RPVUNIX0RFVklDRSA9IElTX0JST1dTRVIgJiYgV0lORE9XLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/ICdvbnRvdWNoc3RhcnQnIGluIFdJTkRPVy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBmYWxzZTtcbnZhciBIQVNfUE9JTlRFUl9FVkVOVCA9IElTX0JST1dTRVIgPyAnUG9pbnRlckV2ZW50JyBpbiBXSU5ET1cgOiBmYWxzZTtcbnZhciBOQU1FU1BBQ0UgPSAndmlld2VyJztcblxuLy8gQWN0aW9uc1xudmFyIEFDVElPTl9NT1ZFID0gJ21vdmUnO1xudmFyIEFDVElPTl9TV0lUQ0ggPSAnc3dpdGNoJztcbnZhciBBQ1RJT05fWk9PTSA9ICd6b29tJztcblxuLy8gQ2xhc3Nlc1xudmFyIENMQVNTX0FDVElWRSA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItYWN0aXZlXCIpO1xudmFyIENMQVNTX0NMT1NFID0gXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1jbG9zZVwiKTtcbnZhciBDTEFTU19GQURFID0gXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1mYWRlXCIpO1xudmFyIENMQVNTX0ZJWEVEID0gXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1maXhlZFwiKTtcbnZhciBDTEFTU19GVUxMU0NSRUVOID0gXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1mdWxsc2NyZWVuXCIpO1xudmFyIENMQVNTX0ZVTExTQ1JFRU5fRVhJVCA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItZnVsbHNjcmVlbi1leGl0XCIpO1xudmFyIENMQVNTX0hJREUgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWhpZGVcIik7XG52YXIgQ0xBU1NfSElERV9NRF9ET1dOID0gXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1oaWRlLW1kLWRvd25cIik7XG52YXIgQ0xBU1NfSElERV9TTV9ET1dOID0gXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1oaWRlLXNtLWRvd25cIik7XG52YXIgQ0xBU1NfSElERV9YU19ET1dOID0gXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1oaWRlLXhzLWRvd25cIik7XG52YXIgQ0xBU1NfSU4gPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWluXCIpO1xudmFyIENMQVNTX0lOVklTSUJMRSA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItaW52aXNpYmxlXCIpO1xudmFyIENMQVNTX0xPQURJTkcgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWxvYWRpbmdcIik7XG52YXIgQ0xBU1NfTU9WRSA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItbW92ZVwiKTtcbnZhciBDTEFTU19PUEVOID0gXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1vcGVuXCIpO1xudmFyIENMQVNTX1NIT1cgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLXNob3dcIik7XG52YXIgQ0xBU1NfVFJBTlNJVElPTiA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItdHJhbnNpdGlvblwiKTtcblxuLy8gTmF0aXZlIGV2ZW50c1xudmFyIEVWRU5UX0NMSUNLID0gJ2NsaWNrJztcbnZhciBFVkVOVF9EQkxDTElDSyA9ICdkYmxjbGljayc7XG52YXIgRVZFTlRfRFJBR19TVEFSVCA9ICdkcmFnc3RhcnQnO1xudmFyIEVWRU5UX0ZPQ1VTSU4gPSAnZm9jdXNpbic7XG52YXIgRVZFTlRfS0VZX0RPV04gPSAna2V5ZG93bic7XG52YXIgRVZFTlRfTE9BRCA9ICdsb2FkJztcbnZhciBFVkVOVF9FUlJPUiA9ICdlcnJvcic7XG52YXIgRVZFTlRfVE9VQ0hfRU5EID0gSVNfVE9VQ0hfREVWSUNFID8gJ3RvdWNoZW5kIHRvdWNoY2FuY2VsJyA6ICdtb3VzZXVwJztcbnZhciBFVkVOVF9UT1VDSF9NT1ZFID0gSVNfVE9VQ0hfREVWSUNFID8gJ3RvdWNobW92ZScgOiAnbW91c2Vtb3ZlJztcbnZhciBFVkVOVF9UT1VDSF9TVEFSVCA9IElTX1RPVUNIX0RFVklDRSA/ICd0b3VjaHN0YXJ0JyA6ICdtb3VzZWRvd24nO1xudmFyIEVWRU5UX1BPSU5URVJfRE9XTiA9IEhBU19QT0lOVEVSX0VWRU5UID8gJ3BvaW50ZXJkb3duJyA6IEVWRU5UX1RPVUNIX1NUQVJUO1xudmFyIEVWRU5UX1BPSU5URVJfTU9WRSA9IEhBU19QT0lOVEVSX0VWRU5UID8gJ3BvaW50ZXJtb3ZlJyA6IEVWRU5UX1RPVUNIX01PVkU7XG52YXIgRVZFTlRfUE9JTlRFUl9VUCA9IEhBU19QT0lOVEVSX0VWRU5UID8gJ3BvaW50ZXJ1cCBwb2ludGVyY2FuY2VsJyA6IEVWRU5UX1RPVUNIX0VORDtcbnZhciBFVkVOVF9SRVNJWkUgPSAncmVzaXplJztcbnZhciBFVkVOVF9UUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJztcbnZhciBFVkVOVF9XSEVFTCA9ICd3aGVlbCc7XG5cbi8vIEN1c3RvbSBldmVudHNcbnZhciBFVkVOVF9SRUFEWSA9ICdyZWFkeSc7XG52YXIgRVZFTlRfU0hPVyA9ICdzaG93JztcbnZhciBFVkVOVF9TSE9XTiA9ICdzaG93bic7XG52YXIgRVZFTlRfSElERSA9ICdoaWRlJztcbnZhciBFVkVOVF9ISURERU4gPSAnaGlkZGVuJztcbnZhciBFVkVOVF9WSUVXID0gJ3ZpZXcnO1xudmFyIEVWRU5UX1ZJRVdFRCA9ICd2aWV3ZWQnO1xudmFyIEVWRU5UX01PVkUgPSAnbW92ZSc7XG52YXIgRVZFTlRfTU9WRUQgPSAnbW92ZWQnO1xudmFyIEVWRU5UX1JPVEFURSA9ICdyb3RhdGUnO1xudmFyIEVWRU5UX1JPVEFURUQgPSAncm90YXRlZCc7XG52YXIgRVZFTlRfU0NBTEUgPSAnc2NhbGUnO1xudmFyIEVWRU5UX1NDQUxFRCA9ICdzY2FsZWQnO1xudmFyIEVWRU5UX1pPT00gPSAnem9vbSc7XG52YXIgRVZFTlRfWk9PTUVEID0gJ3pvb21lZCc7XG52YXIgRVZFTlRfUExBWSA9ICdwbGF5JztcbnZhciBFVkVOVF9TVE9QID0gJ3N0b3AnO1xuXG4vLyBEYXRhIGtleXNcbnZhciBEQVRBX0FDVElPTiA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCJBY3Rpb25cIik7XG5cbi8vIFJlZ0V4cHNcbnZhciBSRUdFWFBfU1BBQ0VTID0gL1xcc1xccyovO1xuXG4vLyBNaXNjXG52YXIgQlVUVE9OUyA9IFsnem9vbS1pbicsICd6b29tLW91dCcsICdvbmUtdG8tb25lJywgJ3Jlc2V0JywgJ3ByZXYnLCAncGxheScsICduZXh0JywgJ3JvdGF0ZS1sZWZ0JywgJ3JvdGF0ZS1yaWdodCcsICdmbGlwLWhvcml6b250YWwnLCAnZmxpcC12ZXJ0aWNhbCddO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgc3RyaW5nLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBub3QgYSBudW1iZXIuXG4gKi9cbnZhciBpc05hTiA9IE51bWJlci5pc05hTiB8fCBXSU5ET1cuaXNOYU47XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBudW1iZXIsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgdW5kZWZpbmVkLlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgdW5kZWZpbmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBvYmplY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbDtcbn1cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB0cnkge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSB2YWx1ZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgcHJvdG90eXBlID0gX2NvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICByZXR1cm4gX2NvbnN0cnVjdG9yICYmIHByb3RvdHlwZSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvdHlwZSwgJ2lzUHJvdG90eXBlT2YnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgdGhlIGdpdmVuIGRhdGEuXG4gKiBAcGFyYW0geyp9IGRhdGEgLSBUaGUgZGF0YSB0byBpdGVyYXRlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgcHJvY2VzcyBmdW5jdGlvbiBmb3IgZWFjaCBlbGVtZW50LlxuICogQHJldHVybnMgeyp9IFRoZSBvcmlnaW5hbCBkYXRhLlxuICovXG5mdW5jdGlvbiBmb3JFYWNoKGRhdGEsIGNhbGxiYWNrKSB7XG4gIGlmIChkYXRhICYmIGlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkgfHwgaXNOdW1iZXIoZGF0YS5sZW5ndGgpIC8qIGFycmF5LWxpa2UgKi8pIHtcbiAgICAgIHZhciBsZW5ndGggPSBkYXRhLmxlbmd0aDtcbiAgICAgIHZhciBpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGRhdGEsIGRhdGFbaV0sIGksIGRhdGEpID09PSBmYWxzZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc09iamVjdChkYXRhKSkge1xuICAgICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwoZGF0YSwgZGF0YVtrZXldLCBrZXksIGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEV4dGVuZCB0aGUgZ2l2ZW4gb2JqZWN0LlxuICogQHBhcmFtIHsqfSBvYmogLSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkLlxuICogQHBhcmFtIHsqfSBhcmdzIC0gVGhlIHJlc3Qgb2JqZWN0cyB3aGljaCB3aWxsIGJlIG1lcmdlZCB0byB0aGUgZmlyc3Qgb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gVGhlIGV4dGVuZGVkIG9iamVjdC5cbiAqL1xudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gYXNzaWduKG9iaikge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9iaikgJiYgYXJncy5sZW5ndGggPiAwKSB7XG4gICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIGlmIChpc09iamVjdChhcmcpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGFyZykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgb2JqW2tleV0gPSBhcmdba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG52YXIgUkVHRVhQX1NVRkZJWCA9IC9eKD86d2lkdGh8aGVpZ2h0fGxlZnR8dG9wfG1hcmdpbkxlZnR8bWFyZ2luVG9wKSQvO1xuXG4vKipcbiAqIEFwcGx5IHN0eWxlcyB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSB0YXJnZXQgZWxlbWVudC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXMgLSBUaGUgc3R5bGVzIGZvciBhcHBseWluZy5cbiAqL1xuZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwgc3R5bGVzKSB7XG4gIHZhciBzdHlsZSA9IGVsZW1lbnQuc3R5bGU7XG4gIGZvckVhY2goc3R5bGVzLCBmdW5jdGlvbiAodmFsdWUsIHByb3BlcnR5KSB7XG4gICAgaWYgKFJFR0VYUF9TVUZGSVgudGVzdChwcm9wZXJ0eSkgJiYgaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICB2YWx1ZSArPSAncHgnO1xuICAgIH1cbiAgICBzdHlsZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgfSk7XG59XG5cbi8qKlxuICogRXNjYXBlIGEgc3RyaW5nIGZvciB1c2luZyBpbiBIVE1MLlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIC0gVGhlIHN0cmluZyB0byBlc2NhcGUuXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBSZXR1cm5zIHRoZSBlc2NhcGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlSFRNTEVudGl0aWVzKHZhbHVlKSB7XG4gIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5yZXBsYWNlKC8mKD8hYW1wO3xxdW90O3wjMzk7fGx0O3xndDspL2csICcmYW1wOycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKS5yZXBsYWNlKC8nL2csICcmIzM5OycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7JykgOiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBoYXMgYSBzcGVjaWFsIGNsYXNzLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gY2hlY2suXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgY2xhc3MgdG8gc2VhcmNoLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBzcGVjaWFsIGNsYXNzIHdhcyBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbWVudCwgdmFsdWUpIHtcbiAgaWYgKCFlbGVtZW50IHx8ICF2YWx1ZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QgPyBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyh2YWx1ZSkgOiBlbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKHZhbHVlKSA+IC0xO1xufVxuXG4vKipcbiAqIEFkZCBjbGFzc2VzIHRvIHRoZSBnaXZlbiBlbGVtZW50LlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIHRhcmdldCBlbGVtZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIGNsYXNzZXMgdG8gYmUgYWRkZWQuXG4gKi9cbmZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIHZhbHVlKSB7XG4gIGlmICghZWxlbWVudCB8fCAhdmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGlzTnVtYmVyKGVsZW1lbnQubGVuZ3RoKSkge1xuICAgIGZvckVhY2goZWxlbWVudCwgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIGFkZENsYXNzKGVsZW0sIHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHZhbHVlKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnRyaW0oKTtcbiAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IHZhbHVlO1xuICB9IGVsc2UgaWYgKGNsYXNzTmFtZS5pbmRleE9mKHZhbHVlKSA8IDApIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIgXCIpLmNvbmNhdCh2YWx1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgY2xhc3NlcyBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIHRhcmdldCBlbGVtZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIGNsYXNzZXMgdG8gYmUgcmVtb3ZlZC5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgdmFsdWUpIHtcbiAgaWYgKCFlbGVtZW50IHx8ICF2YWx1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaXNOdW1iZXIoZWxlbWVudC5sZW5ndGgpKSB7XG4gICAgZm9yRWFjaChlbGVtZW50LCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgcmVtb3ZlQ2xhc3MoZWxlbSwgdmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZWxlbWVudC5jbGFzc0xpc3QpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodmFsdWUpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZih2YWx1ZSkgPj0gMCkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZSh2YWx1ZSwgJycpO1xuICB9XG59XG5cbi8qKlxuICogQWRkIG9yIHJlbW92ZSBjbGFzc2VzIGZyb20gdGhlIGdpdmVuIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgY2xhc3NlcyB0byBiZSB0b2dnbGVkLlxuICogQHBhcmFtIHtib29sZWFufSBhZGRlZCAtIEFkZCBvbmx5LlxuICovXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtZW50LCB2YWx1ZSwgYWRkZWQpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaXNOdW1iZXIoZWxlbWVudC5sZW5ndGgpKSB7XG4gICAgZm9yRWFjaChlbGVtZW50LCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgdG9nZ2xlQ2xhc3MoZWxlbSwgdmFsdWUsIGFkZGVkKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBJRTEwLTExIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgc2Vjb25kIHBhcmFtZXRlciBvZiBgY2xhc3NMaXN0LnRvZ2dsZWBcbiAgaWYgKGFkZGVkKSB7XG4gICAgYWRkQ2xhc3MoZWxlbWVudCwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKGVsZW1lbnQsIHZhbHVlKTtcbiAgfVxufVxudmFyIFJFR0VYUF9IWVBIRU5BVEUgPSAvKFthLXpcXGRdKShbQS1aXSkvZztcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGdpdmVuIHN0cmluZyBmcm9tIGNhbWVsQ2FzZSB0byBrZWJhYi1jYXNlXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgdmFsdWUgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHRyYW5zZm9ybWVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBoeXBoZW5hdGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoUkVHRVhQX0hZUEhFTkFURSwgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBHZXQgZGF0YSBmcm9tIHRoZSBnaXZlbiBlbGVtZW50LlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIHRhcmdldCBlbGVtZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgZGF0YSBrZXkgdG8gZ2V0LlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGRhdGEgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldERhdGEoZWxlbWVudCwgbmFtZSkge1xuICBpZiAoaXNPYmplY3QoZWxlbWVudFtuYW1lXSkpIHtcbiAgICByZXR1cm4gZWxlbWVudFtuYW1lXTtcbiAgfVxuICBpZiAoZWxlbWVudC5kYXRhc2V0KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZGF0YXNldFtuYW1lXTtcbiAgfVxuICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiLmNvbmNhdChoeXBoZW5hdGUobmFtZSkpKTtcbn1cblxuLyoqXG4gKiBTZXQgZGF0YSB0byB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSB0YXJnZXQgZWxlbWVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gVGhlIGRhdGEga2V5IHRvIHNldC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIC0gVGhlIGRhdGEgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHNldERhdGEoZWxlbWVudCwgbmFtZSwgZGF0YSkge1xuICBpZiAoaXNPYmplY3QoZGF0YSkpIHtcbiAgICBlbGVtZW50W25hbWVdID0gZGF0YTtcbiAgfSBlbHNlIGlmIChlbGVtZW50LmRhdGFzZXQpIHtcbiAgICBlbGVtZW50LmRhdGFzZXRbbmFtZV0gPSBkYXRhO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1cIi5jb25jYXQoaHlwaGVuYXRlKG5hbWUpKSwgZGF0YSk7XG4gIH1cbn1cbnZhciBvbmNlU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3VwcG9ydGVkID0gZmFsc2U7XG4gIGlmIChJU19CUk9XU0VSKSB7XG4gICAgdmFyIG9uY2UgPSBmYWxzZTtcbiAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcigpIHt9O1xuICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnb25jZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICBzdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gb25jZTtcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFRoaXMgc2V0dGVyIGNhbiBmaXggYSBgVHlwZUVycm9yYCBpbiBzdHJpY3QgbW9kZVxuICAgICAgICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0Vycm9ycy9HZXR0ZXJfb25seX1cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gc2V0XG4gICAgICAgKi9cbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICAgIG9uY2UgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBXSU5ET1cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgICBXSU5ET1cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIGxpc3RlbmVyLCBvcHRpb25zKTtcbiAgfVxuICByZXR1cm4gc3VwcG9ydGVkO1xufSgpO1xuXG4vKipcbiAqIFJlbW92ZSBldmVudCBsaXN0ZW5lciBmcm9tIHRoZSB0YXJnZXQgZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCB0YXJnZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSBldmVudCB0eXBlKHMpLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBUaGUgZXZlbnQgbGlzdGVuZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBldmVudCBvcHRpb25zLlxuICovXG5mdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gIHZhciBoYW5kbGVyID0gbGlzdGVuZXI7XG4gIHR5cGUudHJpbSgpLnNwbGl0KFJFR0VYUF9TUEFDRVMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCFvbmNlU3VwcG9ydGVkKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gZWxlbWVudC5saXN0ZW5lcnM7XG4gICAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVyc1tldmVudF0gJiYgbGlzdGVuZXJzW2V2ZW50XVtsaXN0ZW5lcl0pIHtcbiAgICAgICAgaGFuZGxlciA9IGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdO1xuICAgICAgICBkZWxldGUgbGlzdGVuZXJzW2V2ZW50XVtsaXN0ZW5lcl07XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhsaXN0ZW5lcnNbZXZlbnRdKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBkZWxldGUgbGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoT2JqZWN0LmtleXMobGlzdGVuZXJzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBkZWxldGUgZWxlbWVudC5saXN0ZW5lcnM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbi8qKlxuICogQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSB0YXJnZXQgZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCB0YXJnZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFRoZSBldmVudCB0eXBlKHMpLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBUaGUgZXZlbnQgbGlzdGVuZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFRoZSBldmVudCBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcihlbGVtZW50LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge307XG4gIHZhciBfaGFuZGxlciA9IGxpc3RlbmVyO1xuICB0eXBlLnRyaW0oKS5zcGxpdChSRUdFWFBfU1BBQ0VTKS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChvcHRpb25zLm9uY2UgJiYgIW9uY2VTdXBwb3J0ZWQpIHtcbiAgICAgIHZhciBfZWxlbWVudCRsaXN0ZW5lcnMgPSBlbGVtZW50Lmxpc3RlbmVycyxcbiAgICAgICAgbGlzdGVuZXJzID0gX2VsZW1lbnQkbGlzdGVuZXJzID09PSB2b2lkIDAgPyB7fSA6IF9lbGVtZW50JGxpc3RlbmVycztcbiAgICAgIF9oYW5kbGVyID0gZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgZGVsZXRlIGxpc3RlbmVyc1tldmVudF1bbGlzdGVuZXJdO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIF9oYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG4gICAgICAgIGxpc3RlbmVyLmFwcGx5KGVsZW1lbnQsIGFyZ3MpO1xuICAgICAgfTtcbiAgICAgIGlmICghbGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgICBsaXN0ZW5lcnNbZXZlbnRdID0ge307XG4gICAgICB9XG4gICAgICBpZiAobGlzdGVuZXJzW2V2ZW50XVtsaXN0ZW5lcl0pIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnNbZXZlbnRdW2xpc3RlbmVyXSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBsaXN0ZW5lcnNbZXZlbnRdW2xpc3RlbmVyXSA9IF9oYW5kbGVyO1xuICAgICAgZWxlbWVudC5saXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gICAgfVxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgX2hhbmRsZXIsIG9wdGlvbnMpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBldmVudCBvbiB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZXZlbnQgdGFyZ2V0LlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUaGUgZXZlbnQgdHlwZShzKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIGFkZGl0aW9uYWwgZXZlbnQgZGF0YS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gVGhlIGFkZGl0aW9uYWwgZXZlbnQgb3B0aW9ucy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBJbmRpY2F0ZSBpZiB0aGUgZXZlbnQgaXMgZGVmYXVsdCBwcmV2ZW50ZWQgb3Igbm90LlxuICovXG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVsZW1lbnQsIHR5cGUsIGRhdGEsIG9wdGlvbnMpIHtcbiAgdmFyIGV2ZW50O1xuXG4gIC8vIEV2ZW50IGFuZCBDdXN0b21FdmVudCBvbiBJRTktMTEgYXJlIGdsb2JhbCBvYmplY3RzLCBub3QgY29uc3RydWN0b3JzXG4gIGlmIChpc0Z1bmN0aW9uKEV2ZW50KSAmJiBpc0Z1bmN0aW9uKEN1c3RvbUV2ZW50KSkge1xuICAgIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIF9vYmplY3RTcHJlYWQyKHtcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgZGV0YWlsOiBkYXRhXG4gICAgfSwgb3B0aW9ucykpO1xuICB9IGVsc2Uge1xuICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIHRydWUsIHRydWUsIGRhdGEpO1xuICB9XG4gIHJldHVybiBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgb2Zmc2V0IGJhc2Ugb24gdGhlIGRvY3VtZW50LlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIHRhcmdldCBlbGVtZW50LlxuICogQHJldHVybnMge09iamVjdH0gVGhlIG9mZnNldCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRPZmZzZXQoZWxlbWVudCkge1xuICB2YXIgYm94ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiBib3gubGVmdCArICh3aW5kb3cucGFnZVhPZmZzZXQgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCksXG4gICAgdG9wOiBib3gudG9wICsgKHdpbmRvdy5wYWdlWU9mZnNldCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3ApXG4gIH07XG59XG5cbi8qKlxuICogR2V0IHRyYW5zZm9ybXMgYmFzZSBvbiB0aGUgZ2l2ZW4gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIFRoZSB0YXJnZXQgb2JqZWN0LlxuICogQHJldHVybnMge3N0cmluZ30gQSBzdHJpbmcgY29udGFpbnMgdHJhbnNmb3JtIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtcyhfcmVmKSB7XG4gIHZhciByb3RhdGUgPSBfcmVmLnJvdGF0ZSxcbiAgICBzY2FsZVggPSBfcmVmLnNjYWxlWCxcbiAgICBzY2FsZVkgPSBfcmVmLnNjYWxlWSxcbiAgICB0cmFuc2xhdGVYID0gX3JlZi50cmFuc2xhdGVYLFxuICAgIHRyYW5zbGF0ZVkgPSBfcmVmLnRyYW5zbGF0ZVk7XG4gIHZhciB2YWx1ZXMgPSBbXTtcbiAgaWYgKGlzTnVtYmVyKHRyYW5zbGF0ZVgpICYmIHRyYW5zbGF0ZVggIT09IDApIHtcbiAgICB2YWx1ZXMucHVzaChcInRyYW5zbGF0ZVgoXCIuY29uY2F0KHRyYW5zbGF0ZVgsIFwicHgpXCIpKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIodHJhbnNsYXRlWSkgJiYgdHJhbnNsYXRlWSAhPT0gMCkge1xuICAgIHZhbHVlcy5wdXNoKFwidHJhbnNsYXRlWShcIi5jb25jYXQodHJhbnNsYXRlWSwgXCJweClcIikpO1xuICB9XG5cbiAgLy8gUm90YXRlIHNob3VsZCBjb21lIGZpcnN0IGJlZm9yZSBzY2FsZSB0byBtYXRjaCBvcmllbnRhdGlvbiB0cmFuc2Zvcm1cbiAgaWYgKGlzTnVtYmVyKHJvdGF0ZSkgJiYgcm90YXRlICE9PSAwKSB7XG4gICAgdmFsdWVzLnB1c2goXCJyb3RhdGUoXCIuY29uY2F0KHJvdGF0ZSwgXCJkZWcpXCIpKTtcbiAgfVxuICBpZiAoaXNOdW1iZXIoc2NhbGVYKSAmJiBzY2FsZVggIT09IDEpIHtcbiAgICB2YWx1ZXMucHVzaChcInNjYWxlWChcIi5jb25jYXQoc2NhbGVYLCBcIilcIikpO1xuICB9XG4gIGlmIChpc051bWJlcihzY2FsZVkpICYmIHNjYWxlWSAhPT0gMSkge1xuICAgIHZhbHVlcy5wdXNoKFwic2NhbGVZKFwiLmNvbmNhdChzY2FsZVksIFwiKVwiKSk7XG4gIH1cbiAgdmFyIHRyYW5zZm9ybSA9IHZhbHVlcy5sZW5ndGggPyB2YWx1ZXMuam9pbignICcpIDogJ25vbmUnO1xuICByZXR1cm4ge1xuICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIG1zVHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgfTtcbn1cblxuLyoqXG4gKiBHZXQgYW4gaW1hZ2UgbmFtZSBmcm9tIGFuIGltYWdlIHVybC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBUaGUgdGFyZ2V0IHVybC5cbiAqIEBleGFtcGxlXG4gKiAvLyBwaWN0dXJlLmpwZ1xuICogZ2V0SW1hZ2VOYW1lRnJvbVVSTCgnaHR0cHM6Ly9kb21haW4uY29tL3BhdGgvdG8vcGljdHVyZS5qcGc/c2l6ZT0xMjgww5c5NjAnKVxuICogQHJldHVybnMge3N0cmluZ30gQSBzdHJpbmcgY29udGFpbnMgdGhlIGltYWdlIG5hbWUuXG4gKi9cbmZ1bmN0aW9uIGdldEltYWdlTmFtZUZyb21VUkwodXJsKSB7XG4gIHJldHVybiBpc1N0cmluZyh1cmwpID8gZGVjb2RlVVJJQ29tcG9uZW50KHVybC5yZXBsYWNlKC9eLipcXC8vLCAnJykucmVwbGFjZSgvWz8mI10uKiQvLCAnJykpIDogJyc7XG59XG52YXIgSVNfU0FGQVJJID0gV0lORE9XLm5hdmlnYXRvciAmJiAvKE1hY2ludG9zaHxpUGhvbmV8aVBvZHxpUGFkKS4qQXBwbGVXZWJLaXQvaS50ZXN0KFdJTkRPVy5uYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBHZXQgYW4gaW1hZ2UncyBuYXR1cmFsIHNpemVzLlxuICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIC0gVGhlIHRhcmdldCBpbWFnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gVGhlIHZpZXdlciBvcHRpb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7SFRNTEltYWdlRWxlbWVudH0gVGhlIG5ldyBpbWFnZS5cbiAqL1xuZnVuY3Rpb24gZ2V0SW1hZ2VOYXR1cmFsU2l6ZXMoaW1hZ2UsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBuZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gIC8vIE1vZGVybiBicm93c2VycyAoZXhjZXB0IFNhZmFyaSlcbiAgaWYgKGltYWdlLm5hdHVyYWxXaWR0aCAmJiAhSVNfU0FGQVJJKSB7XG4gICAgY2FsbGJhY2soaW1hZ2UubmF0dXJhbFdpZHRoLCBpbWFnZS5uYXR1cmFsSGVpZ2h0KTtcbiAgICByZXR1cm4gbmV3SW1hZ2U7XG4gIH1cbiAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgbmV3SW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGNhbGxiYWNrKG5ld0ltYWdlLndpZHRoLCBuZXdJbWFnZS5oZWlnaHQpO1xuICAgIGlmICghSVNfU0FGQVJJKSB7XG4gICAgICBib2R5LnJlbW92ZUNoaWxkKG5ld0ltYWdlKTtcbiAgICB9XG4gIH07XG4gIGZvckVhY2gob3B0aW9ucy5pbmhlcml0ZWRBdHRyaWJ1dGVzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciB2YWx1ZSA9IGltYWdlLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIG5ld0ltYWdlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9KTtcbiAgbmV3SW1hZ2Uuc3JjID0gaW1hZ2Uuc3JjO1xuXG4gIC8vIGlPUyBTYWZhcmkgd2lsbCBjb252ZXJ0IHRoZSBpbWFnZSBhdXRvbWF0aWNhbGx5XG4gIC8vIHdpdGggaXRzIG9yaWVudGF0aW9uIG9uY2UgYXBwZW5kIGl0IGludG8gRE9NXG4gIGlmICghSVNfU0FGQVJJKSB7XG4gICAgbmV3SW1hZ2Uuc3R5bGUuY3NzVGV4dCA9ICdsZWZ0OjA7JyArICdtYXgtaGVpZ2h0Om5vbmUhaW1wb3J0YW50OycgKyAnbWF4LXdpZHRoOm5vbmUhaW1wb3J0YW50OycgKyAnbWluLWhlaWdodDowIWltcG9ydGFudDsnICsgJ21pbi13aWR0aDowIWltcG9ydGFudDsnICsgJ29wYWNpdHk6MDsnICsgJ3Bvc2l0aW9uOmFic29sdXRlOycgKyAndG9wOjA7JyArICd6LWluZGV4Oi0xOyc7XG4gICAgYm9keS5hcHBlbmRDaGlsZChuZXdJbWFnZSk7XG4gIH1cbiAgcmV0dXJuIG5ld0ltYWdlO1xufVxuXG4vKipcbiAqIEdldCB0aGUgcmVsYXRlZCBjbGFzcyBuYW1lIG9mIGEgcmVzcG9uc2l2ZSB0eXBlIG51bWJlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIHJlc3BvbnNpdmUgdHlwZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByZWxhdGVkIGNsYXNzIG5hbWUuXG4gKi9cbmZ1bmN0aW9uIGdldFJlc3BvbnNpdmVDbGFzcyh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBDTEFTU19ISURFX1hTX0RPV047XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIENMQVNTX0hJREVfU01fRE9XTjtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gQ0xBU1NfSElERV9NRF9ET1dOO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIG1heCByYXRpbyBvZiBhIGdyb3VwIG9mIHBvaW50ZXJzLlxuICogQHBhcmFtIHtzdHJpbmd9IHBvaW50ZXJzIC0gVGhlIHRhcmdldCBwb2ludGVycy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSByZXN1bHQgcmF0aW8uXG4gKi9cbmZ1bmN0aW9uIGdldE1heFpvb21SYXRpbyhwb2ludGVycykge1xuICB2YXIgcG9pbnRlcnMyID0gX29iamVjdFNwcmVhZDIoe30sIHBvaW50ZXJzKTtcbiAgdmFyIHJhdGlvcyA9IFtdO1xuICBmb3JFYWNoKHBvaW50ZXJzLCBmdW5jdGlvbiAocG9pbnRlciwgcG9pbnRlcklkKSB7XG4gICAgZGVsZXRlIHBvaW50ZXJzMltwb2ludGVySWRdO1xuICAgIGZvckVhY2gocG9pbnRlcnMyLCBmdW5jdGlvbiAocG9pbnRlcjIpIHtcbiAgICAgIHZhciB4MSA9IE1hdGguYWJzKHBvaW50ZXIuc3RhcnRYIC0gcG9pbnRlcjIuc3RhcnRYKTtcbiAgICAgIHZhciB5MSA9IE1hdGguYWJzKHBvaW50ZXIuc3RhcnRZIC0gcG9pbnRlcjIuc3RhcnRZKTtcbiAgICAgIHZhciB4MiA9IE1hdGguYWJzKHBvaW50ZXIuZW5kWCAtIHBvaW50ZXIyLmVuZFgpO1xuICAgICAgdmFyIHkyID0gTWF0aC5hYnMocG9pbnRlci5lbmRZIC0gcG9pbnRlcjIuZW5kWSk7XG4gICAgICB2YXIgejEgPSBNYXRoLnNxcnQoeDEgKiB4MSArIHkxICogeTEpO1xuICAgICAgdmFyIHoyID0gTWF0aC5zcXJ0KHgyICogeDIgKyB5MiAqIHkyKTtcbiAgICAgIHZhciByYXRpbyA9ICh6MiAtIHoxKSAvIHoxO1xuICAgICAgcmF0aW9zLnB1c2gocmF0aW8pO1xuICAgIH0pO1xuICB9KTtcbiAgcmF0aW9zLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoYSkgPCBNYXRoLmFicyhiKTtcbiAgfSk7XG4gIHJldHVybiByYXRpb3NbMF07XG59XG5cbi8qKlxuICogR2V0IGEgcG9pbnRlciBmcm9tIGFuIGV2ZW50IG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBldmVudCAtIFRoZSB0YXJnZXQgZXZlbnQgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBlbmRPbmx5IC0gSW5kaWNhdGVzIGlmIG9ubHkgcmV0dXJucyB0aGUgZW5kIHBvaW50IGNvb3JkaW5hdGUgb3Igbm90LlxuICogQHJldHVybnMge09iamVjdH0gVGhlIHJlc3VsdCBwb2ludGVyIGNvbnRhaW5zIHN0YXJ0IGFuZC9vciBlbmQgcG9pbnQgY29vcmRpbmF0ZXMuXG4gKi9cbmZ1bmN0aW9uIGdldFBvaW50ZXIoX3JlZjIsIGVuZE9ubHkpIHtcbiAgdmFyIHBhZ2VYID0gX3JlZjIucGFnZVgsXG4gICAgcGFnZVkgPSBfcmVmMi5wYWdlWTtcbiAgdmFyIGVuZCA9IHtcbiAgICBlbmRYOiBwYWdlWCxcbiAgICBlbmRZOiBwYWdlWVxuICB9O1xuICByZXR1cm4gZW5kT25seSA/IGVuZCA6IF9vYmplY3RTcHJlYWQyKHtcbiAgICB0aW1lU3RhbXA6IERhdGUubm93KCksXG4gICAgc3RhcnRYOiBwYWdlWCxcbiAgICBzdGFydFk6IHBhZ2VZXG4gIH0sIGVuZCk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBjZW50ZXIgcG9pbnQgY29vcmRpbmF0ZSBvZiBhIGdyb3VwIG9mIHBvaW50ZXJzLlxuICogQHBhcmFtIHtPYmplY3R9IHBvaW50ZXJzIC0gVGhlIHRhcmdldCBwb2ludGVycy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBjZW50ZXIgcG9pbnQgY29vcmRpbmF0ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0UG9pbnRlcnNDZW50ZXIocG9pbnRlcnMpIHtcbiAgdmFyIHBhZ2VYID0gMDtcbiAgdmFyIHBhZ2VZID0gMDtcbiAgdmFyIGNvdW50ID0gMDtcbiAgZm9yRWFjaChwb2ludGVycywgZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgdmFyIHN0YXJ0WCA9IF9yZWYzLnN0YXJ0WCxcbiAgICAgIHN0YXJ0WSA9IF9yZWYzLnN0YXJ0WTtcbiAgICBwYWdlWCArPSBzdGFydFg7XG4gICAgcGFnZVkgKz0gc3RhcnRZO1xuICAgIGNvdW50ICs9IDE7XG4gIH0pO1xuICBwYWdlWCAvPSBjb3VudDtcbiAgcGFnZVkgLz0gY291bnQ7XG4gIHJldHVybiB7XG4gICAgcGFnZVg6IHBhZ2VYLFxuICAgIHBhZ2VZOiBwYWdlWVxuICB9O1xufVxuXG52YXIgcmVuZGVyID0ge1xuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB0aGlzLmluaXRDb250YWluZXIoKTtcbiAgICB0aGlzLmluaXRWaWV3ZXIoKTtcbiAgICB0aGlzLmluaXRMaXN0KCk7XG4gICAgdGhpcy5yZW5kZXJWaWV3ZXIoKTtcbiAgfSxcbiAgaW5pdEJvZHk6IGZ1bmN0aW9uIGluaXRCb2R5KCkge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgdmFyIGJvZHkgPSBvd25lckRvY3VtZW50LmJvZHkgfHwgb3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICB0aGlzLnNjcm9sbGJhcldpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBvd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICB0aGlzLmluaXRpYWxCb2R5UGFkZGluZ1JpZ2h0ID0gYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ7XG4gICAgdGhpcy5pbml0aWFsQm9keUNvbXB1dGVkUGFkZGluZ1JpZ2h0ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoYm9keSkucGFkZGluZ1JpZ2h0O1xuICB9LFxuICBpbml0Q29udGFpbmVyOiBmdW5jdGlvbiBpbml0Q29udGFpbmVyKCkge1xuICAgIHRoaXMuY29udGFpbmVyRGF0YSA9IHtcbiAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgfTtcbiAgfSxcbiAgaW5pdFZpZXdlcjogZnVuY3Rpb24gaW5pdFZpZXdlcigpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgIHBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgIHZhciB2aWV3ZXJEYXRhO1xuICAgIGlmIChvcHRpb25zLmlubGluZSkge1xuICAgICAgdmlld2VyRGF0YSA9IHtcbiAgICAgICAgd2lkdGg6IE1hdGgubWF4KHBhcmVudC5vZmZzZXRXaWR0aCwgb3B0aW9ucy5taW5XaWR0aCksXG4gICAgICAgIGhlaWdodDogTWF0aC5tYXgocGFyZW50Lm9mZnNldEhlaWdodCwgb3B0aW9ucy5taW5IZWlnaHQpXG4gICAgICB9O1xuICAgICAgdGhpcy5wYXJlbnREYXRhID0gdmlld2VyRGF0YTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZnVsbGVkIHx8ICF2aWV3ZXJEYXRhKSB7XG4gICAgICB2aWV3ZXJEYXRhID0gdGhpcy5jb250YWluZXJEYXRhO1xuICAgIH1cbiAgICB0aGlzLnZpZXdlckRhdGEgPSBhc3NpZ24oe30sIHZpZXdlckRhdGEpO1xuICB9LFxuICByZW5kZXJWaWV3ZXI6IGZ1bmN0aW9uIHJlbmRlclZpZXdlcigpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmlubGluZSAmJiAhdGhpcy5mdWxsZWQpIHtcbiAgICAgIHNldFN0eWxlKHRoaXMudmlld2VyLCB0aGlzLnZpZXdlckRhdGEpO1xuICAgIH1cbiAgfSxcbiAgaW5pdExpc3Q6IGZ1bmN0aW9uIGluaXRMaXN0KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgbGlzdCA9IHRoaXMubGlzdDtcbiAgICB2YXIgaXRlbXMgPSBbXTtcblxuICAgIC8vIGluaXRMaXN0IG1heSBiZSBjYWxsZWQgaW4gdGhpcy51cGRhdGUsIHNvIHNob3VsZCBrZWVwIGlkZW1wb3RlbnRcbiAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xuICAgIGZvckVhY2godGhpcy5pbWFnZXMsIGZ1bmN0aW9uIChpbWFnZSwgaW5kZXgpIHtcbiAgICAgIHZhciBzcmMgPSBpbWFnZS5zcmM7XG4gICAgICB2YXIgYWx0ID0gaW1hZ2UuYWx0IHx8IGdldEltYWdlTmFtZUZyb21VUkwoc3JjKTtcbiAgICAgIHZhciB1cmwgPSBfdGhpcy5nZXRJbWFnZVVSTChpbWFnZSk7XG4gICAgICBpZiAoc3JjIHx8IHVybCkge1xuICAgICAgICB2YXIgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZm9yRWFjaChvcHRpb25zLmluaGVyaXRlZEF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gaW1hZ2UuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9wdGlvbnMubmF2YmFyKSB7XG4gICAgICAgICAgaW1nLnNyYyA9IHNyYyB8fCB1cmw7XG4gICAgICAgIH1cbiAgICAgICAgaW1nLmFsdCA9IGFsdDtcbiAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC11cmwnLCB1cmwgfHwgc3JjKTtcbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkYXRhLXZpZXdlci1hY3Rpb24nLCAndmlldycpO1xuICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcbiAgICAgICAgaWYgKG9wdGlvbnMua2V5Ym9hcmQpIHtcbiAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgIGZvckVhY2goaXRlbXMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgaW1hZ2UgPSBpdGVtLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgdmFyIG9uTG9hZDtcbiAgICAgIHZhciBvbkVycm9yO1xuICAgICAgc2V0RGF0YShpbWFnZSwgJ2ZpbGxlZCcsIHRydWUpO1xuICAgICAgaWYgKG9wdGlvbnMubG9hZGluZykge1xuICAgICAgICBhZGRDbGFzcyhpdGVtLCBDTEFTU19MT0FESU5HKTtcbiAgICAgIH1cbiAgICAgIGFkZExpc3RlbmVyKGltYWdlLCBFVkVOVF9MT0FELCBvbkxvYWQgPSBmdW5jdGlvbiBvbkxvYWQoZXZlbnQpIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIoaW1hZ2UsIEVWRU5UX0VSUk9SLCBvbkVycm9yKTtcbiAgICAgICAgaWYgKG9wdGlvbnMubG9hZGluZykge1xuICAgICAgICAgIHJlbW92ZUNsYXNzKGl0ZW0sIENMQVNTX0xPQURJTkcpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmxvYWRJbWFnZShldmVudCk7XG4gICAgICB9LCB7XG4gICAgICAgIG9uY2U6IHRydWVcbiAgICAgIH0pO1xuICAgICAgYWRkTGlzdGVuZXIoaW1hZ2UsIEVWRU5UX0VSUk9SLCBvbkVycm9yID0gZnVuY3Rpb24gb25FcnJvcigpIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIoaW1hZ2UsIEVWRU5UX0xPQUQsIG9uTG9hZCk7XG4gICAgICAgIGlmIChvcHRpb25zLmxvYWRpbmcpIHtcbiAgICAgICAgICByZW1vdmVDbGFzcyhpdGVtLCBDTEFTU19MT0FESU5HKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBvbmNlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAob3B0aW9ucy50cmFuc2l0aW9uKSB7XG4gICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9WSUVXRUQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkQ2xhc3MobGlzdCwgQ0xBU1NfVFJBTlNJVElPTik7XG4gICAgICB9LCB7XG4gICAgICAgIG9uY2U6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyTGlzdDogZnVuY3Rpb24gcmVuZGVyTGlzdCgpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4O1xuICAgIHZhciBpdGVtID0gdGhpcy5pdGVtc1tpbmRleF07XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBuZXh0ID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgdmFyIGd1dHRlciA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5leHQgfHwgaXRlbSkubWFyZ2luTGVmdCwgMTApO1xuICAgIHZhciBvZmZzZXRXaWR0aCA9IGl0ZW0ub2Zmc2V0V2lkdGg7XG4gICAgdmFyIG91dGVyV2lkdGggPSBvZmZzZXRXaWR0aCArIGd1dHRlcjtcblxuICAgIC8vIFBsYWNlIHRoZSBhY3RpdmUgaXRlbSBpbiB0aGUgY2VudGVyIG9mIHRoZSBzY3JlZW5cbiAgICBzZXRTdHlsZSh0aGlzLmxpc3QsIGFzc2lnbih7XG4gICAgICB3aWR0aDogb3V0ZXJXaWR0aCAqIHRoaXMubGVuZ3RoIC0gZ3V0dGVyXG4gICAgfSwgZ2V0VHJhbnNmb3Jtcyh7XG4gICAgICB0cmFuc2xhdGVYOiAodGhpcy52aWV3ZXJEYXRhLndpZHRoIC0gb2Zmc2V0V2lkdGgpIC8gMiAtIG91dGVyV2lkdGggKiBpbmRleFxuICAgIH0pKSk7XG4gIH0sXG4gIHJlc2V0TGlzdDogZnVuY3Rpb24gcmVzZXRMaXN0KCkge1xuICAgIHZhciBsaXN0ID0gdGhpcy5saXN0O1xuICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgcmVtb3ZlQ2xhc3MobGlzdCwgQ0xBU1NfVFJBTlNJVElPTik7XG4gICAgc2V0U3R5bGUobGlzdCwgZ2V0VHJhbnNmb3Jtcyh7XG4gICAgICB0cmFuc2xhdGVYOiAwXG4gICAgfSkpO1xuICB9LFxuICBpbml0SW1hZ2U6IGZ1bmN0aW9uIGluaXRJbWFnZShkb25lKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBpbWFnZSA9IHRoaXMuaW1hZ2UsXG4gICAgICB2aWV3ZXJEYXRhID0gdGhpcy52aWV3ZXJEYXRhO1xuICAgIHZhciBmb290ZXJIZWlnaHQgPSB0aGlzLmZvb3Rlci5vZmZzZXRIZWlnaHQ7XG4gICAgdmFyIHZpZXdlcldpZHRoID0gdmlld2VyRGF0YS53aWR0aDtcbiAgICB2YXIgdmlld2VySGVpZ2h0ID0gTWF0aC5tYXgodmlld2VyRGF0YS5oZWlnaHQgLSBmb290ZXJIZWlnaHQsIGZvb3RlckhlaWdodCk7XG4gICAgdmFyIG9sZEltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhIHx8IHt9O1xuICAgIHZhciBzaXppbmdJbWFnZTtcbiAgICB0aGlzLmltYWdlSW5pdGlhbGl6aW5nID0ge1xuICAgICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgICBzaXppbmdJbWFnZS5vbmxvYWQgPSBudWxsO1xuICAgICAgfVxuICAgIH07XG4gICAgc2l6aW5nSW1hZ2UgPSBnZXRJbWFnZU5hdHVyYWxTaXplcyhpbWFnZSwgb3B0aW9ucywgZnVuY3Rpb24gKG5hdHVyYWxXaWR0aCwgbmF0dXJhbEhlaWdodCkge1xuICAgICAgdmFyIGFzcGVjdFJhdGlvID0gbmF0dXJhbFdpZHRoIC8gbmF0dXJhbEhlaWdodDtcbiAgICAgIHZhciBpbml0aWFsQ292ZXJhZ2UgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBvcHRpb25zLmluaXRpYWxDb3ZlcmFnZSkpO1xuICAgICAgdmFyIHdpZHRoID0gdmlld2VyV2lkdGg7XG4gICAgICB2YXIgaGVpZ2h0ID0gdmlld2VySGVpZ2h0O1xuICAgICAgX3RoaXMyLmltYWdlSW5pdGlhbGl6aW5nID0gZmFsc2U7XG4gICAgICBpZiAodmlld2VySGVpZ2h0ICogYXNwZWN0UmF0aW8gPiB2aWV3ZXJXaWR0aCkge1xuICAgICAgICBoZWlnaHQgPSB2aWV3ZXJXaWR0aCAvIGFzcGVjdFJhdGlvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGggPSB2aWV3ZXJIZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgIH1cbiAgICAgIGluaXRpYWxDb3ZlcmFnZSA9IGlzTnVtYmVyKGluaXRpYWxDb3ZlcmFnZSkgPyBpbml0aWFsQ292ZXJhZ2UgOiAwLjk7XG4gICAgICB3aWR0aCA9IE1hdGgubWluKHdpZHRoICogaW5pdGlhbENvdmVyYWdlLCBuYXR1cmFsV2lkdGgpO1xuICAgICAgaGVpZ2h0ID0gTWF0aC5taW4oaGVpZ2h0ICogaW5pdGlhbENvdmVyYWdlLCBuYXR1cmFsSGVpZ2h0KTtcbiAgICAgIHZhciBsZWZ0ID0gKHZpZXdlcldpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICAgIHZhciB0b3AgPSAodmlld2VySGVpZ2h0IC0gaGVpZ2h0KSAvIDI7XG4gICAgICB2YXIgaW1hZ2VEYXRhID0ge1xuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgeDogbGVmdCxcbiAgICAgICAgeTogdG9wLFxuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICBvbGRSYXRpbzogMSxcbiAgICAgICAgcmF0aW86IHdpZHRoIC8gbmF0dXJhbFdpZHRoLFxuICAgICAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW8sXG4gICAgICAgIG5hdHVyYWxXaWR0aDogbmF0dXJhbFdpZHRoLFxuICAgICAgICBuYXR1cmFsSGVpZ2h0OiBuYXR1cmFsSGVpZ2h0XG4gICAgICB9O1xuICAgICAgdmFyIGluaXRpYWxJbWFnZURhdGEgPSBhc3NpZ24oe30sIGltYWdlRGF0YSk7XG4gICAgICBpZiAob3B0aW9ucy5yb3RhdGFibGUpIHtcbiAgICAgICAgaW1hZ2VEYXRhLnJvdGF0ZSA9IG9sZEltYWdlRGF0YS5yb3RhdGUgfHwgMDtcbiAgICAgICAgaW5pdGlhbEltYWdlRGF0YS5yb3RhdGUgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMuc2NhbGFibGUpIHtcbiAgICAgICAgaW1hZ2VEYXRhLnNjYWxlWCA9IG9sZEltYWdlRGF0YS5zY2FsZVggfHwgMTtcbiAgICAgICAgaW1hZ2VEYXRhLnNjYWxlWSA9IG9sZEltYWdlRGF0YS5zY2FsZVkgfHwgMTtcbiAgICAgICAgaW5pdGlhbEltYWdlRGF0YS5zY2FsZVggPSAxO1xuICAgICAgICBpbml0aWFsSW1hZ2VEYXRhLnNjYWxlWSA9IDE7XG4gICAgICB9XG4gICAgICBfdGhpczIuaW1hZ2VEYXRhID0gaW1hZ2VEYXRhO1xuICAgICAgX3RoaXMyLmluaXRpYWxJbWFnZURhdGEgPSBpbml0aWFsSW1hZ2VEYXRhO1xuICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICByZW5kZXJJbWFnZTogZnVuY3Rpb24gcmVuZGVySW1hZ2UoZG9uZSkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuICAgIHZhciBpbWFnZSA9IHRoaXMuaW1hZ2UsXG4gICAgICBpbWFnZURhdGEgPSB0aGlzLmltYWdlRGF0YTtcbiAgICBzZXRTdHlsZShpbWFnZSwgYXNzaWduKHtcbiAgICAgIHdpZHRoOiBpbWFnZURhdGEud2lkdGgsXG4gICAgICBoZWlnaHQ6IGltYWdlRGF0YS5oZWlnaHQsXG4gICAgICAvLyBYWFg6IE5vdCB0byB1c2UgdHJhbnNsYXRlWC9ZIHRvIGF2b2lkIGltYWdlIHNoYWtpbmcgd2hlbiB6b29taW5nXG4gICAgICBtYXJnaW5MZWZ0OiBpbWFnZURhdGEueCxcbiAgICAgIG1hcmdpblRvcDogaW1hZ2VEYXRhLnlcbiAgICB9LCBnZXRUcmFuc2Zvcm1zKGltYWdlRGF0YSkpKTtcbiAgICBpZiAoZG9uZSkge1xuICAgICAgaWYgKCh0aGlzLnZpZXdpbmcgfHwgdGhpcy5tb3ZpbmcgfHwgdGhpcy5yb3RhdGluZyB8fCB0aGlzLnNjYWxpbmcgfHwgdGhpcy56b29taW5nKSAmJiB0aGlzLm9wdGlvbnMudHJhbnNpdGlvbiAmJiBoYXNDbGFzcyhpbWFnZSwgQ0xBU1NfVFJBTlNJVElPTikpIHtcbiAgICAgICAgdmFyIG9uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgICAgICBfdGhpczMuaW1hZ2VSZW5kZXJpbmcgPSBmYWxzZTtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW1hZ2VSZW5kZXJpbmcgPSB7XG4gICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoaW1hZ2UsIEVWRU5UX1RSQU5TSVRJT05fRU5ELCBvblRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgYWRkTGlzdGVuZXIoaW1hZ2UsIEVWRU5UX1RSQU5TSVRJT05fRU5ELCBvblRyYW5zaXRpb25FbmQsIHtcbiAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcmVzZXRJbWFnZTogZnVuY3Rpb24gcmVzZXRJbWFnZSgpIHtcbiAgICAvLyB0aGlzLmltYWdlIG9ubHkgZGVmaW5lZCBhZnRlciB2aWV3ZWRcbiAgICBpZiAodGhpcy52aWV3aW5nIHx8IHRoaXMudmlld2VkKSB7XG4gICAgICB2YXIgaW1hZ2UgPSB0aGlzLmltYWdlO1xuICAgICAgaWYgKHRoaXMudmlld2luZykge1xuICAgICAgICB0aGlzLnZpZXdpbmcuYWJvcnQoKTtcbiAgICAgIH1cbiAgICAgIGltYWdlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaW1hZ2UpO1xuICAgICAgdGhpcy5pbWFnZSA9IG51bGw7XG4gICAgfVxuICB9XG59O1xuXG52YXIgZXZlbnRzID0ge1xuICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgdmlld2VyID0gdGhpcy52aWV3ZXIsXG4gICAgICBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICB2YXIgZG9jdW1lbnQgPSB0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgICBhZGRMaXN0ZW5lcih2aWV3ZXIsIEVWRU5UX0NMSUNLLCB0aGlzLm9uQ2xpY2sgPSB0aGlzLmNsaWNrLmJpbmQodGhpcykpO1xuICAgIGFkZExpc3RlbmVyKHZpZXdlciwgRVZFTlRfRFJBR19TVEFSVCwgdGhpcy5vbkRyYWdTdGFydCA9IHRoaXMuZHJhZ3N0YXJ0LmJpbmQodGhpcykpO1xuICAgIGFkZExpc3RlbmVyKGNhbnZhcywgRVZFTlRfUE9JTlRFUl9ET1dOLCB0aGlzLm9uUG9pbnRlckRvd24gPSB0aGlzLnBvaW50ZXJkb3duLmJpbmQodGhpcykpO1xuICAgIGFkZExpc3RlbmVyKGRvY3VtZW50LCBFVkVOVF9QT0lOVEVSX01PVkUsIHRoaXMub25Qb2ludGVyTW92ZSA9IHRoaXMucG9pbnRlcm1vdmUuYmluZCh0aGlzKSk7XG4gICAgYWRkTGlzdGVuZXIoZG9jdW1lbnQsIEVWRU5UX1BPSU5URVJfVVAsIHRoaXMub25Qb2ludGVyVXAgPSB0aGlzLnBvaW50ZXJ1cC5iaW5kKHRoaXMpKTtcbiAgICBhZGRMaXN0ZW5lcihkb2N1bWVudCwgRVZFTlRfS0VZX0RPV04sIHRoaXMub25LZXlEb3duID0gdGhpcy5rZXlkb3duLmJpbmQodGhpcykpO1xuICAgIGFkZExpc3RlbmVyKHdpbmRvdywgRVZFTlRfUkVTSVpFLCB0aGlzLm9uUmVzaXplID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XG4gICAgaWYgKG9wdGlvbnMuem9vbWFibGUgJiYgb3B0aW9ucy56b29tT25XaGVlbCkge1xuICAgICAgYWRkTGlzdGVuZXIodmlld2VyLCBFVkVOVF9XSEVFTCwgdGhpcy5vbldoZWVsID0gdGhpcy53aGVlbC5iaW5kKHRoaXMpLCB7XG4gICAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgICAgICBjYXB0dXJlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudG9nZ2xlT25EYmxjbGljaykge1xuICAgICAgYWRkTGlzdGVuZXIoY2FudmFzLCBFVkVOVF9EQkxDTElDSywgdGhpcy5vbkRibGNsaWNrID0gdGhpcy5kYmxjbGljay5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH0sXG4gIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgdmlld2VyID0gdGhpcy52aWV3ZXIsXG4gICAgICBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICB2YXIgZG9jdW1lbnQgPSB0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgICByZW1vdmVMaXN0ZW5lcih2aWV3ZXIsIEVWRU5UX0NMSUNLLCB0aGlzLm9uQ2xpY2spO1xuICAgIHJlbW92ZUxpc3RlbmVyKHZpZXdlciwgRVZFTlRfRFJBR19TVEFSVCwgdGhpcy5vbkRyYWdTdGFydCk7XG4gICAgcmVtb3ZlTGlzdGVuZXIoY2FudmFzLCBFVkVOVF9QT0lOVEVSX0RPV04sIHRoaXMub25Qb2ludGVyRG93bik7XG4gICAgcmVtb3ZlTGlzdGVuZXIoZG9jdW1lbnQsIEVWRU5UX1BPSU5URVJfTU9WRSwgdGhpcy5vblBvaW50ZXJNb3ZlKTtcbiAgICByZW1vdmVMaXN0ZW5lcihkb2N1bWVudCwgRVZFTlRfUE9JTlRFUl9VUCwgdGhpcy5vblBvaW50ZXJVcCk7XG4gICAgcmVtb3ZlTGlzdGVuZXIoZG9jdW1lbnQsIEVWRU5UX0tFWV9ET1dOLCB0aGlzLm9uS2V5RG93bik7XG4gICAgcmVtb3ZlTGlzdGVuZXIod2luZG93LCBFVkVOVF9SRVNJWkUsIHRoaXMub25SZXNpemUpO1xuICAgIGlmIChvcHRpb25zLnpvb21hYmxlICYmIG9wdGlvbnMuem9vbU9uV2hlZWwpIHtcbiAgICAgIHJlbW92ZUxpc3RlbmVyKHZpZXdlciwgRVZFTlRfV0hFRUwsIHRoaXMub25XaGVlbCwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICAgICAgY2FwdHVyZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnRvZ2dsZU9uRGJsY2xpY2spIHtcbiAgICAgIHJlbW92ZUxpc3RlbmVyKGNhbnZhcywgRVZFTlRfREJMQ0xJQ0ssIHRoaXMub25EYmxjbGljayk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgaGFuZGxlcnMgPSB7XG4gIGNsaWNrOiBmdW5jdGlvbiBjbGljayhldmVudCkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgaW1hZ2VEYXRhID0gdGhpcy5pbWFnZURhdGE7XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICB2YXIgYWN0aW9uID0gZ2V0RGF0YSh0YXJnZXQsIERBVEFfQUNUSU9OKTtcbiAgICBpZiAoIWFjdGlvbiAmJiB0YXJnZXQubG9jYWxOYW1lID09PSAnaW1nJyAmJiB0YXJnZXQucGFyZW50RWxlbWVudC5sb2NhbE5hbWUgPT09ICdsaScpIHtcbiAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgYWN0aW9uID0gZ2V0RGF0YSh0YXJnZXQsIERBVEFfQUNUSU9OKTtcbiAgICB9XG5cbiAgICAvLyBDYW5jZWwgdGhlIGVtdWxhdGVkIGNsaWNrIHdoZW4gdGhlIG5hdGl2ZSBjbGljayBldmVudCB3YXMgdHJpZ2dlcmVkLlxuICAgIGlmIChJU19UT1VDSF9ERVZJQ0UgJiYgZXZlbnQuaXNUcnVzdGVkICYmIHRhcmdldCA9PT0gdGhpcy5jYW52YXMpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsaWNrQ2FudmFzVGltZW91dCk7XG4gICAgfVxuICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICBjYXNlICdtaXgnOlxuICAgICAgICBpZiAodGhpcy5wbGF5ZWQpIHtcbiAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmlubGluZSkge1xuICAgICAgICAgIGlmICh0aGlzLmZ1bGxlZCkge1xuICAgICAgICAgICAgdGhpcy5leGl0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZnVsbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2hpZGUnOlxuICAgICAgICBpZiAoIXRoaXMucG9pbnRlck1vdmVkKSB7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd2aWV3JzpcbiAgICAgICAgdGhpcy52aWV3KGdldERhdGEodGFyZ2V0LCAnaW5kZXgnKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnem9vbS1pbic6XG4gICAgICAgIHRoaXMuem9vbSgwLjEsIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3pvb20tb3V0JzpcbiAgICAgICAgdGhpcy56b29tKC0wLjEsIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29uZS10by1vbmUnOlxuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Jlc2V0JzpcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3ByZXYnOlxuICAgICAgICB0aGlzLnByZXYob3B0aW9ucy5sb29wKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwbGF5JzpcbiAgICAgICAgdGhpcy5wbGF5KG9wdGlvbnMuZnVsbHNjcmVlbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgIHRoaXMubmV4dChvcHRpb25zLmxvb3ApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JvdGF0ZS1sZWZ0JzpcbiAgICAgICAgdGhpcy5yb3RhdGUoLTkwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyb3RhdGUtcmlnaHQnOlxuICAgICAgICB0aGlzLnJvdGF0ZSg5MCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZmxpcC1ob3Jpem9udGFsJzpcbiAgICAgICAgdGhpcy5zY2FsZVgoLWltYWdlRGF0YS5zY2FsZVggfHwgLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ZsaXAtdmVydGljYWwnOlxuICAgICAgICB0aGlzLnNjYWxlWSgtaW1hZ2VEYXRhLnNjYWxlWSB8fCAtMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHRoaXMucGxheWVkKSB7XG4gICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRibGNsaWNrOiBmdW5jdGlvbiBkYmxjbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMudmlld2VkICYmIGV2ZW50LnRhcmdldCA9PT0gdGhpcy5pbWFnZSkge1xuICAgICAgLy8gQ2FuY2VsIHRoZSBlbXVsYXRlZCBkb3VibGUgY2xpY2sgd2hlbiB0aGUgbmF0aXZlIGRibGNsaWNrIGV2ZW50IHdhcyB0cmlnZ2VyZWQuXG4gICAgICBpZiAoSVNfVE9VQ0hfREVWSUNFICYmIGV2ZW50LmlzVHJ1c3RlZCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kb3VibGVDbGlja0ltYWdlVGltZW91dCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFhYWDogTm8gcGFnZVgvWSBwcm9wZXJ0aWVzIGluIGN1c3RvbSBldmVudCwgZmFsbGJhY2sgdG8gdGhlIG9yaWdpbmFsIGV2ZW50LlxuICAgICAgdGhpcy50b2dnbGUoZXZlbnQuaXNUcnVzdGVkID8gZXZlbnQgOiBldmVudC5kZXRhaWwgJiYgZXZlbnQuZGV0YWlsLm9yaWdpbmFsRXZlbnQpO1xuICAgIH1cbiAgfSxcbiAgbG9hZDogZnVuY3Rpb24gbG9hZCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGlmICh0aGlzLnRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgdGhpcy50aW1lb3V0ID0gZmFsc2U7XG4gICAgfVxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgIGltYWdlID0gdGhpcy5pbWFnZSxcbiAgICAgIGluZGV4ID0gdGhpcy5pbmRleCxcbiAgICAgIHZpZXdlckRhdGEgPSB0aGlzLnZpZXdlckRhdGE7XG4gICAgcmVtb3ZlQ2xhc3MoaW1hZ2UsIENMQVNTX0lOVklTSUJMRSk7XG4gICAgaWYgKG9wdGlvbnMubG9hZGluZykge1xuICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5jYW52YXMsIENMQVNTX0xPQURJTkcpO1xuICAgIH1cbiAgICBpbWFnZS5zdHlsZS5jc3NUZXh0ID0gJ2hlaWdodDowOycgKyBcIm1hcmdpbi1sZWZ0OlwiLmNvbmNhdCh2aWV3ZXJEYXRhLndpZHRoIC8gMiwgXCJweDtcIikgKyBcIm1hcmdpbi10b3A6XCIuY29uY2F0KHZpZXdlckRhdGEuaGVpZ2h0IC8gMiwgXCJweDtcIikgKyAnbWF4LXdpZHRoOm5vbmUhaW1wb3J0YW50OycgKyAncG9zaXRpb246cmVsYXRpdmU7JyArICd3aWR0aDowOyc7XG4gICAgdGhpcy5pbml0SW1hZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgdG9nZ2xlQ2xhc3MoaW1hZ2UsIENMQVNTX01PVkUsIG9wdGlvbnMubW92YWJsZSk7XG4gICAgICB0b2dnbGVDbGFzcyhpbWFnZSwgQ0xBU1NfVFJBTlNJVElPTiwgb3B0aW9ucy50cmFuc2l0aW9uKTtcbiAgICAgIF90aGlzLnJlbmRlckltYWdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMudmlld2VkID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMudmlld2luZyA9IGZhbHNlO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLnZpZXdlZCkpIHtcbiAgICAgICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9WSUVXRUQsIG9wdGlvbnMudmlld2VkLCB7XG4gICAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbGVtZW50LCBFVkVOVF9WSUVXRUQsIHtcbiAgICAgICAgICBvcmlnaW5hbEltYWdlOiBfdGhpcy5pbWFnZXNbaW5kZXhdLFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBpbWFnZTogaW1hZ2VcbiAgICAgICAgfSwge1xuICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGxvYWRJbWFnZTogZnVuY3Rpb24gbG9hZEltYWdlKGV2ZW50KSB7XG4gICAgdmFyIGltYWdlID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciBwYXJlbnQgPSBpbWFnZS5wYXJlbnROb2RlO1xuICAgIHZhciBwYXJlbnRXaWR0aCA9IHBhcmVudC5vZmZzZXRXaWR0aCB8fCAzMDtcbiAgICB2YXIgcGFyZW50SGVpZ2h0ID0gcGFyZW50Lm9mZnNldEhlaWdodCB8fCA1MDtcbiAgICB2YXIgZmlsbGVkID0gISFnZXREYXRhKGltYWdlLCAnZmlsbGVkJyk7XG4gICAgZ2V0SW1hZ2VOYXR1cmFsU2l6ZXMoaW1hZ2UsIHRoaXMub3B0aW9ucywgZnVuY3Rpb24gKG5hdHVyYWxXaWR0aCwgbmF0dXJhbEhlaWdodCkge1xuICAgICAgdmFyIGFzcGVjdFJhdGlvID0gbmF0dXJhbFdpZHRoIC8gbmF0dXJhbEhlaWdodDtcbiAgICAgIHZhciB3aWR0aCA9IHBhcmVudFdpZHRoO1xuICAgICAgdmFyIGhlaWdodCA9IHBhcmVudEhlaWdodDtcbiAgICAgIGlmIChwYXJlbnRIZWlnaHQgKiBhc3BlY3RSYXRpbyA+IHBhcmVudFdpZHRoKSB7XG4gICAgICAgIGlmIChmaWxsZWQpIHtcbiAgICAgICAgICB3aWR0aCA9IHBhcmVudEhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhlaWdodCA9IHBhcmVudFdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZmlsbGVkKSB7XG4gICAgICAgIGhlaWdodCA9IHBhcmVudFdpZHRoIC8gYXNwZWN0UmF0aW87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aWR0aCA9IHBhcmVudEhlaWdodCAqIGFzcGVjdFJhdGlvO1xuICAgICAgfVxuICAgICAgc2V0U3R5bGUoaW1hZ2UsIGFzc2lnbih7XG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgIH0sIGdldFRyYW5zZm9ybXMoe1xuICAgICAgICB0cmFuc2xhdGVYOiAocGFyZW50V2lkdGggLSB3aWR0aCkgLyAyLFxuICAgICAgICB0cmFuc2xhdGVZOiAocGFyZW50SGVpZ2h0IC0gaGVpZ2h0KSAvIDJcbiAgICAgIH0pKSk7XG4gICAgfSk7XG4gIH0sXG4gIGtleWRvd246IGZ1bmN0aW9uIGtleWRvd24oZXZlbnQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAoIW9wdGlvbnMua2V5Ym9hcmQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGtleUNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoIHx8IGV2ZW50LmNoYXJDb2RlO1xuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgLy8gRW50ZXJcbiAgICAgIGNhc2UgMTM6XG4gICAgICAgIGlmICh0aGlzLnZpZXdlci5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgdGhpcy5jbGljayhldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICghdGhpcy5mdWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAvLyBFc2NhcGVcbiAgICAgIGNhc2UgMjc6XG4gICAgICAgIGlmICh0aGlzLnBsYXllZCkge1xuICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuaW5saW5lKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZnVsbGVkKSB7XG4gICAgICAgICAgICB0aGlzLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIFNwYWNlXG4gICAgICBjYXNlIDMyOlxuICAgICAgICBpZiAodGhpcy5wbGF5ZWQpIHtcbiAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgLy8gQXJyb3dMZWZ0XG4gICAgICBjYXNlIDM3OlxuICAgICAgICBpZiAodGhpcy5wbGF5ZWQgJiYgdGhpcy5wbGF5aW5nKSB7XG4gICAgICAgICAgdGhpcy5wbGF5aW5nLnByZXYoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnByZXYob3B0aW9ucy5sb29wKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgLy8gQXJyb3dVcFxuICAgICAgY2FzZSAzODpcbiAgICAgICAgLy8gUHJldmVudCBzY3JvbGwgb24gRmlyZWZveFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIFpvb20gaW5cbiAgICAgICAgdGhpcy56b29tKG9wdGlvbnMuem9vbVJhdGlvLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIEFycm93UmlnaHRcbiAgICAgIGNhc2UgMzk6XG4gICAgICAgIGlmICh0aGlzLnBsYXllZCAmJiB0aGlzLnBsYXlpbmcpIHtcbiAgICAgICAgICB0aGlzLnBsYXlpbmcubmV4dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubmV4dChvcHRpb25zLmxvb3ApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBBcnJvd0Rvd25cbiAgICAgIGNhc2UgNDA6XG4gICAgICAgIC8vIFByZXZlbnQgc2Nyb2xsIG9uIEZpcmVmb3hcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBab29tIG91dFxuICAgICAgICB0aGlzLnpvb20oLW9wdGlvbnMuem9vbVJhdGlvLCB0cnVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIEN0cmwgKyAwXG4gICAgICBjYXNlIDQ4OlxuICAgICAgLy8gRmFsbCB0aHJvdWdoXG5cbiAgICAgIC8vIEN0cmwgKyAxXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZmFsbHRocm91Z2hcbiAgICAgIGNhc2UgNDk6XG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSxcbiAgZHJhZ3N0YXJ0OiBmdW5jdGlvbiBkcmFnc3RhcnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmxvY2FsTmFtZSA9PT0gJ2ltZycpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LFxuICBwb2ludGVyZG93bjogZnVuY3Rpb24gcG9pbnRlcmRvd24oZXZlbnQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgIHBvaW50ZXJzID0gdGhpcy5wb2ludGVycztcbiAgICB2YXIgYnV0dG9ucyA9IGV2ZW50LmJ1dHRvbnMsXG4gICAgICBidXR0b24gPSBldmVudC5idXR0b247XG4gICAgdGhpcy5wb2ludGVyTW92ZWQgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMudmlld2VkIHx8IHRoaXMuc2hvd2luZyB8fCB0aGlzLnZpZXdpbmcgfHwgdGhpcy5oaWRpbmdcblxuICAgIC8vIEhhbmRsZSBtb3VzZSBldmVudCBhbmQgcG9pbnRlciBldmVudCBhbmQgaWdub3JlIHRvdWNoIGV2ZW50XG4gICAgfHwgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGV2ZW50LnR5cGUgPT09ICdwb2ludGVyZG93bicgJiYgZXZlbnQucG9pbnRlclR5cGUgPT09ICdtb3VzZScpICYmIChcbiAgICAvLyBObyBwcmltYXJ5IGJ1dHRvbiAoVXN1YWxseSB0aGUgbGVmdCBidXR0b24pXG4gICAgaXNOdW1iZXIoYnV0dG9ucykgJiYgYnV0dG9ucyAhPT0gMSB8fCBpc051bWJlcihidXR0b24pICYmIGJ1dHRvbiAhPT0gMFxuXG4gICAgLy8gT3BlbiBjb250ZXh0IG1lbnVcbiAgICB8fCBldmVudC5jdHJsS2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXZlbnQgZGVmYXVsdCBiZWhhdmlvdXJzIGFzIHBhZ2Ugem9vbWluZyBpbiB0b3VjaCBkZXZpY2VzLlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICBmb3JFYWNoKGV2ZW50LmNoYW5nZWRUb3VjaGVzLCBmdW5jdGlvbiAodG91Y2gpIHtcbiAgICAgICAgcG9pbnRlcnNbdG91Y2guaWRlbnRpZmllcl0gPSBnZXRQb2ludGVyKHRvdWNoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb2ludGVyc1tldmVudC5wb2ludGVySWQgfHwgMF0gPSBnZXRQb2ludGVyKGV2ZW50KTtcbiAgICB9XG4gICAgdmFyIGFjdGlvbiA9IG9wdGlvbnMubW92YWJsZSA/IEFDVElPTl9NT1ZFIDogZmFsc2U7XG4gICAgaWYgKG9wdGlvbnMuem9vbU9uVG91Y2ggJiYgb3B0aW9ucy56b29tYWJsZSAmJiBPYmplY3Qua2V5cyhwb2ludGVycykubGVuZ3RoID4gMSkge1xuICAgICAgYWN0aW9uID0gQUNUSU9OX1pPT007XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnNsaWRlT25Ub3VjaCAmJiAoZXZlbnQucG9pbnRlclR5cGUgPT09ICd0b3VjaCcgfHwgZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSAmJiB0aGlzLmlzU3dpdGNoYWJsZSgpKSB7XG4gICAgICBhY3Rpb24gPSBBQ1RJT05fU1dJVENIO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy50cmFuc2l0aW9uICYmIChhY3Rpb24gPT09IEFDVElPTl9NT1ZFIHx8IGFjdGlvbiA9PT0gQUNUSU9OX1pPT00pKSB7XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmltYWdlLCBDTEFTU19UUkFOU0lUSU9OKTtcbiAgICB9XG4gICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gIH0sXG4gIHBvaW50ZXJtb3ZlOiBmdW5jdGlvbiBwb2ludGVybW92ZShldmVudCkge1xuICAgIHZhciBwb2ludGVycyA9IHRoaXMucG9pbnRlcnMsXG4gICAgICBhY3Rpb24gPSB0aGlzLmFjdGlvbjtcbiAgICBpZiAoIXRoaXMudmlld2VkIHx8ICFhY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnBvaW50ZXJNb3ZlZCA9IHRydWU7XG4gICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzKSB7XG4gICAgICBmb3JFYWNoKGV2ZW50LmNoYW5nZWRUb3VjaGVzLCBmdW5jdGlvbiAodG91Y2gpIHtcbiAgICAgICAgYXNzaWduKHBvaW50ZXJzW3RvdWNoLmlkZW50aWZpZXJdIHx8IHt9LCBnZXRQb2ludGVyKHRvdWNoLCB0cnVlKSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzaWduKHBvaW50ZXJzW2V2ZW50LnBvaW50ZXJJZCB8fCAwXSB8fCB7fSwgZ2V0UG9pbnRlcihldmVudCwgdHJ1ZSkpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZShldmVudCk7XG4gIH0sXG4gIHBvaW50ZXJ1cDogZnVuY3Rpb24gcG9pbnRlcnVwKGV2ZW50KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBhY3Rpb24gPSB0aGlzLmFjdGlvbixcbiAgICAgIHBvaW50ZXJzID0gdGhpcy5wb2ludGVycztcbiAgICB2YXIgcG9pbnRlcjtcbiAgICBpZiAoZXZlbnQuY2hhbmdlZFRvdWNoZXMpIHtcbiAgICAgIGZvckVhY2goZXZlbnQuY2hhbmdlZFRvdWNoZXMsIGZ1bmN0aW9uICh0b3VjaCkge1xuICAgICAgICBwb2ludGVyID0gcG9pbnRlcnNbdG91Y2guaWRlbnRpZmllcl07XG4gICAgICAgIGRlbGV0ZSBwb2ludGVyc1t0b3VjaC5pZGVudGlmaWVyXTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb2ludGVyID0gcG9pbnRlcnNbZXZlbnQucG9pbnRlcklkIHx8IDBdO1xuICAgICAgZGVsZXRlIHBvaW50ZXJzW2V2ZW50LnBvaW50ZXJJZCB8fCAwXTtcbiAgICB9XG4gICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAob3B0aW9ucy50cmFuc2l0aW9uICYmIChhY3Rpb24gPT09IEFDVElPTl9NT1ZFIHx8IGFjdGlvbiA9PT0gQUNUSU9OX1pPT00pKSB7XG4gICAgICBhZGRDbGFzcyh0aGlzLmltYWdlLCBDTEFTU19UUkFOU0lUSU9OKTtcbiAgICB9XG4gICAgdGhpcy5hY3Rpb24gPSBmYWxzZTtcblxuICAgIC8vIEVtdWxhdGUgY2xpY2sgYW5kIGRvdWJsZSBjbGljayBpbiB0b3VjaCBkZXZpY2VzIHRvIHN1cHBvcnQgYmFja2Ryb3AgYW5kIGltYWdlIHpvb21pbmcgKCMyMTApLlxuICAgIGlmIChJU19UT1VDSF9ERVZJQ0UgJiYgYWN0aW9uICE9PSBBQ1RJT05fWk9PTSAmJiBwb2ludGVyICYmIERhdGUubm93KCkgLSBwb2ludGVyLnRpbWVTdGFtcCA8IDUwMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xpY2tDYW52YXNUaW1lb3V0KTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRvdWJsZUNsaWNrSW1hZ2VUaW1lb3V0KTtcbiAgICAgIGlmIChvcHRpb25zLnRvZ2dsZU9uRGJsY2xpY2sgJiYgdGhpcy52aWV3ZWQgJiYgZXZlbnQudGFyZ2V0ID09PSB0aGlzLmltYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlQ2xpY2tlZCkge1xuICAgICAgICAgIHRoaXMuaW1hZ2VDbGlja2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAvLyBUaGlzIHRpbWVvdXQgd2lsbCBiZSBjbGVhcmVkIGxhdGVyIHdoZW4gYSBuYXRpdmUgZGJsY2xpY2sgZXZlbnQgaXMgdHJpZ2dlcmluZ1xuICAgICAgICAgIHRoaXMuZG91YmxlQ2xpY2tJbWFnZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoX3RoaXMyLmltYWdlLCBFVkVOVF9EQkxDTElDSywge1xuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgNTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaW1hZ2VDbGlja2VkID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIFRoZSBkZWZhdWx0IHRpbWluZyBvZiBhIGRvdWJsZSBjbGljayBpbiBXaW5kb3dzIGlzIDUwMCBtc1xuICAgICAgICAgIHRoaXMuZG91YmxlQ2xpY2tJbWFnZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMi5pbWFnZUNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmltYWdlQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICBpZiAob3B0aW9ucy5iYWNrZHJvcCAmJiBvcHRpb25zLmJhY2tkcm9wICE9PSAnc3RhdGljJyAmJiBldmVudC50YXJnZXQgPT09IHRoaXMuY2FudmFzKSB7XG4gICAgICAgICAgLy8gVGhpcyB0aW1lb3V0IHdpbGwgYmUgY2xlYXJlZCBsYXRlciB3aGVuIGEgbmF0aXZlIGNsaWNrIGV2ZW50IGlzIHRyaWdnZXJpbmdcbiAgICAgICAgICB0aGlzLmNsaWNrQ2FudmFzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGlzcGF0Y2hFdmVudChfdGhpczIuY2FudmFzLCBFVkVOVF9DTElDSywge1xuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgNTApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICByZXNpemU6IGZ1bmN0aW9uIHJlc2l6ZSgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICBpZiAoIXRoaXMuaXNTaG93biB8fCB0aGlzLmhpZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5mdWxsZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHRoaXMuaW5pdEJvZHkoKTtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgICB0aGlzLmluaXRDb250YWluZXIoKTtcbiAgICB0aGlzLmluaXRWaWV3ZXIoKTtcbiAgICB0aGlzLnJlbmRlclZpZXdlcigpO1xuICAgIHRoaXMucmVuZGVyTGlzdCgpO1xuICAgIGlmICh0aGlzLnZpZXdlZCkge1xuICAgICAgdGhpcy5pbml0SW1hZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMucmVuZGVySW1hZ2UoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5wbGF5ZWQpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZnVsbHNjcmVlbiAmJiB0aGlzLmZ1bGxlZCAmJiAhKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50IHx8IGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50IHx8IGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50IHx8IGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnQpKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3JFYWNoKHRoaXMucGxheWVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKSwgZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgIGFkZExpc3RlbmVyKGltYWdlLCBFVkVOVF9MT0FELCBfdGhpczMubG9hZEltYWdlLmJpbmQoX3RoaXMzKSwge1xuICAgICAgICAgIG9uY2U6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoaW1hZ2UsIEVWRU5UX0xPQUQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICB3aGVlbDogZnVuY3Rpb24gd2hlZWwoZXZlbnQpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcbiAgICBpZiAoIXRoaXMudmlld2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBMaW1pdCB3aGVlbCBzcGVlZCB0byBwcmV2ZW50IHpvb20gdG9vIGZhc3RcbiAgICBpZiAodGhpcy53aGVlbGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLndoZWVsaW5nID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzNC53aGVlbGluZyA9IGZhbHNlO1xuICAgIH0sIDUwKTtcbiAgICB2YXIgcmF0aW8gPSBOdW1iZXIodGhpcy5vcHRpb25zLnpvb21SYXRpbykgfHwgMC4xO1xuICAgIHZhciBkZWx0YSA9IDE7XG4gICAgaWYgKGV2ZW50LmRlbHRhWSkge1xuICAgICAgZGVsdGEgPSBldmVudC5kZWx0YVkgPiAwID8gMSA6IC0xO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQud2hlZWxEZWx0YSkge1xuICAgICAgZGVsdGEgPSAtZXZlbnQud2hlZWxEZWx0YSAvIDEyMDtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmRldGFpbCkge1xuICAgICAgZGVsdGEgPSBldmVudC5kZXRhaWwgPiAwID8gMSA6IC0xO1xuICAgIH1cbiAgICB0aGlzLnpvb20oLWRlbHRhICogcmF0aW8sIHRydWUsIG51bGwsIGV2ZW50KTtcbiAgfVxufTtcblxudmFyIG1ldGhvZHMgPSB7XG4gIC8qKiBTaG93IHRoZSB2aWV3ZXIgKG9ubHkgYXZhaWxhYmxlIGluIG1vZGFsIG1vZGUpXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ltbWVkaWF0ZT1mYWxzZV0gLSBJbmRpY2F0ZXMgaWYgc2hvdyB0aGUgdmlld2VyIGltbWVkaWF0ZWx5IG9yIG5vdC5cbiAgICogQHJldHVybnMge1ZpZXdlcn0gdGhpc1xuICAgKi9cbiAgc2hvdzogZnVuY3Rpb24gc2hvdygpIHtcbiAgICB2YXIgaW1tZWRpYXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMuaW5saW5lIHx8IHRoaXMuc2hvd2luZyB8fCB0aGlzLmlzU2hvd24gfHwgdGhpcy5zaG93aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaWYgKCF0aGlzLnJlYWR5KSB7XG4gICAgICB0aGlzLmJ1aWxkKCk7XG4gICAgICBpZiAodGhpcy5yZWFkeSkge1xuICAgICAgICB0aGlzLnNob3coaW1tZWRpYXRlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLnNob3cpKSB7XG4gICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9TSE9XLCBvcHRpb25zLnNob3csIHtcbiAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkaXNwYXRjaEV2ZW50KGVsZW1lbnQsIEVWRU5UX1NIT1cpID09PSBmYWxzZSB8fCAhdGhpcy5yZWFkeSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGlmICh0aGlzLmhpZGluZykge1xuICAgICAgdGhpcy50cmFuc2l0aW9uaW5nLmFib3J0KCk7XG4gICAgfVxuICAgIHRoaXMuc2hvd2luZyA9IHRydWU7XG4gICAgdGhpcy5vcGVuKCk7XG4gICAgdmFyIHZpZXdlciA9IHRoaXMudmlld2VyO1xuICAgIHJlbW92ZUNsYXNzKHZpZXdlciwgQ0xBU1NfSElERSk7XG4gICAgdmlld2VyLnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcbiAgICB2aWV3ZXIuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCB0aGlzLnRpdGxlLmlkKTtcbiAgICB2aWV3ZXIuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgdHJ1ZSk7XG4gICAgdmlld2VyLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICBpZiAob3B0aW9ucy50cmFuc2l0aW9uICYmICFpbW1lZGlhdGUpIHtcbiAgICAgIHZhciBzaG93biA9IHRoaXMuc2hvd24uYmluZCh0aGlzKTtcbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHtcbiAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKHZpZXdlciwgRVZFTlRfVFJBTlNJVElPTl9FTkQsIHNob3duKTtcbiAgICAgICAgICByZW1vdmVDbGFzcyh2aWV3ZXIsIENMQVNTX0lOKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGFkZENsYXNzKHZpZXdlciwgQ0xBU1NfVFJBTlNJVElPTik7XG5cbiAgICAgIC8vIEZvcmNlIHJlZmxvdyB0byBlbmFibGUgQ1NTMyB0cmFuc2l0aW9uXG4gICAgICB2aWV3ZXIuaW5pdGlhbE9mZnNldFdpZHRoID0gdmlld2VyLm9mZnNldFdpZHRoO1xuICAgICAgYWRkTGlzdGVuZXIodmlld2VyLCBFVkVOVF9UUkFOU0lUSU9OX0VORCwgc2hvd24sIHtcbiAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBhZGRDbGFzcyh2aWV3ZXIsIENMQVNTX0lOKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3Modmlld2VyLCBDTEFTU19JTik7XG4gICAgICB0aGlzLnNob3duKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvKipcbiAgICogSGlkZSB0aGUgdmlld2VyIChvbmx5IGF2YWlsYWJsZSBpbiBtb2RhbCBtb2RlKVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpbW1lZGlhdGU9ZmFsc2VdIC0gSW5kaWNhdGVzIGlmIGhpZGUgdGhlIHZpZXdlciBpbW1lZGlhdGVseSBvciBub3QuXG4gICAqIEByZXR1cm5zIHtWaWV3ZXJ9IHRoaXNcbiAgICovXG4gIGhpZGU6IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgaW1tZWRpYXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMuaW5saW5lIHx8IHRoaXMuaGlkaW5nIHx8ICEodGhpcy5pc1Nob3duIHx8IHRoaXMuc2hvd2luZykpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLmhpZGUpKSB7XG4gICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9ISURFLCBvcHRpb25zLmhpZGUsIHtcbiAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkaXNwYXRjaEV2ZW50KGVsZW1lbnQsIEVWRU5UX0hJREUpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGlmICh0aGlzLnNob3dpbmcpIHtcbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZy5hYm9ydCgpO1xuICAgIH1cbiAgICB0aGlzLmhpZGluZyA9IHRydWU7XG4gICAgaWYgKHRoaXMucGxheWVkKSB7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmlld2luZykge1xuICAgICAgdGhpcy52aWV3aW5nLmFib3J0KCk7XG4gICAgfVxuICAgIHZhciB2aWV3ZXIgPSB0aGlzLnZpZXdlcixcbiAgICAgIGltYWdlID0gdGhpcy5pbWFnZTtcbiAgICB2YXIgaGlkZUltbWVkaWF0ZWx5ID0gZnVuY3Rpb24gaGlkZUltbWVkaWF0ZWx5KCkge1xuICAgICAgcmVtb3ZlQ2xhc3Modmlld2VyLCBDTEFTU19JTik7XG4gICAgICBfdGhpcy5oaWRkZW4oKTtcbiAgICB9O1xuICAgIGlmIChvcHRpb25zLnRyYW5zaXRpb24gJiYgIWltbWVkaWF0ZSkge1xuICAgICAgdmFyIG9uVmlld2VyVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIG9uVmlld2VyVHJhbnNpdGlvbkVuZChldmVudCkge1xuICAgICAgICAvLyBJZ25vcmUgYWxsIHByb3BhZ2F0aW5nIGB0cmFuc2l0aW9uZW5kYCBldmVudHMgKCMyNzUpLlxuICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0ID09PSB2aWV3ZXIpIHtcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcih2aWV3ZXIsIEVWRU5UX1RSQU5TSVRJT05fRU5ELCBvblZpZXdlclRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgIF90aGlzLmhpZGRlbigpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIG9uSW1hZ2VUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gb25JbWFnZVRyYW5zaXRpb25FbmQoKSB7XG4gICAgICAgIC8vIEluIGNhc2Ugb2Ygc2hvdyB0aGUgdmlld2VyIGJ5IGB2aWV3ZXIuc2hvdyh0cnVlKWAgcHJldmlvdXNseSAoIzQwNykuXG4gICAgICAgIGlmIChoYXNDbGFzcyh2aWV3ZXIsIENMQVNTX1RSQU5TSVRJT04pKSB7XG4gICAgICAgICAgYWRkTGlzdGVuZXIodmlld2VyLCBFVkVOVF9UUkFOU0lUSU9OX0VORCwgb25WaWV3ZXJUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICByZW1vdmVDbGFzcyh2aWV3ZXIsIENMQVNTX0lOKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoaWRlSW1tZWRpYXRlbHkoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IHtcbiAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgICAgIGlmIChfdGhpcy52aWV3ZWQgJiYgaGFzQ2xhc3MoaW1hZ2UsIENMQVNTX1RSQU5TSVRJT04pKSB7XG4gICAgICAgICAgICByZW1vdmVMaXN0ZW5lcihpbWFnZSwgRVZFTlRfVFJBTlNJVElPTl9FTkQsIG9uSW1hZ2VUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NsYXNzKHZpZXdlciwgQ0xBU1NfVFJBTlNJVElPTikpIHtcbiAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKHZpZXdlciwgRVZFTlRfVFJBTlNJVElPTl9FTkQsIG9uVmlld2VyVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBJbiBjYXNlIG9mIGhpZGluZyB0aGUgdmlld2VyIHdoZW4gaG9sZGluZyBvbiB0aGUgaW1hZ2UgKCMyNTUpLFxuICAgICAgLy8gbm90ZSB0aGF0IHRoZSBgQ0xBU1NfVFJBTlNJVElPTmAgY2xhc3Mgd2lsbCBiZSByZW1vdmVkIG9uIHBvaW50ZXIgZG93bi5cbiAgICAgIGlmICh0aGlzLnZpZXdlZCAmJiBoYXNDbGFzcyhpbWFnZSwgQ0xBU1NfVFJBTlNJVElPTikpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoaW1hZ2UsIEVWRU5UX1RSQU5TSVRJT05fRU5ELCBvbkltYWdlVHJhbnNpdGlvbkVuZCwge1xuICAgICAgICAgIG9uY2U6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuem9vbVRvKDAsIGZhbHNlLCBudWxsLCBudWxsLCB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uSW1hZ2VUcmFuc2l0aW9uRW5kKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZGVJbW1lZGlhdGVseSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIFZpZXcgb25lIG9mIHRoZSBpbWFnZXMgd2l0aCBpbWFnZSdzIGluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgaW1hZ2UgdG8gdmlldy5cbiAgICogQHJldHVybnMge1ZpZXdlcn0gdGhpc1xuICAgKi9cbiAgdmlldzogZnVuY3Rpb24gdmlldygpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICB2YXIgaW5kZXggPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRoaXMub3B0aW9ucy5pbml0aWFsVmlld0luZGV4O1xuICAgIGluZGV4ID0gTnVtYmVyKGluZGV4KSB8fCAwO1xuICAgIGlmICh0aGlzLmhpZGluZyB8fCB0aGlzLnBsYXllZCB8fCBpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5sZW5ndGggfHwgdGhpcy52aWV3ZWQgJiYgaW5kZXggPT09IHRoaXMuaW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNTaG93bikge1xuICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgcmV0dXJuIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgICBpZiAodGhpcy52aWV3aW5nKSB7XG4gICAgICB0aGlzLnZpZXdpbmcuYWJvcnQoKTtcbiAgICB9XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgdGl0bGUgPSB0aGlzLnRpdGxlLFxuICAgICAgY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zW2luZGV4XTtcbiAgICB2YXIgaW1nID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICB2YXIgdXJsID0gZ2V0RGF0YShpbWcsICdvcmlnaW5hbFVybCcpO1xuICAgIHZhciBhbHQgPSBpbWcuZ2V0QXR0cmlidXRlKCdhbHQnKTtcbiAgICB2YXIgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBmb3JFYWNoKG9wdGlvbnMuaW5oZXJpdGVkQXR0cmlidXRlcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGltZy5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpbWFnZS5zcmMgPSB1cmw7XG4gICAgaW1hZ2UuYWx0ID0gYWx0O1xuICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMudmlldykpIHtcbiAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX1ZJRVcsIG9wdGlvbnMudmlldywge1xuICAgICAgICBvbmNlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRpc3BhdGNoRXZlbnQoZWxlbWVudCwgRVZFTlRfVklFVywge1xuICAgICAgb3JpZ2luYWxJbWFnZTogdGhpcy5pbWFnZXNbaW5kZXhdLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgaW1hZ2U6IGltYWdlXG4gICAgfSkgPT09IGZhbHNlIHx8ICF0aGlzLmlzU2hvd24gfHwgdGhpcy5oaWRpbmcgfHwgdGhpcy5wbGF5ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB2YXIgYWN0aXZlSXRlbSA9IHRoaXMuaXRlbXNbdGhpcy5pbmRleF07XG4gICAgaWYgKGFjdGl2ZUl0ZW0pIHtcbiAgICAgIHJlbW92ZUNsYXNzKGFjdGl2ZUl0ZW0sIENMQVNTX0FDVElWRSk7XG4gICAgICBhY3RpdmVJdGVtLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpO1xuICAgIH1cbiAgICBhZGRDbGFzcyhpdGVtLCBDTEFTU19BQ1RJVkUpO1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSk7XG4gICAgaWYgKG9wdGlvbnMuZm9jdXMpIHtcbiAgICAgIGl0ZW0uZm9jdXMoKTtcbiAgICB9XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMudmlld2VkID0gZmFsc2U7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgIHRoaXMuaW1hZ2VEYXRhID0ge307XG4gICAgYWRkQ2xhc3MoaW1hZ2UsIENMQVNTX0lOVklTSUJMRSk7XG4gICAgaWYgKG9wdGlvbnMubG9hZGluZykge1xuICAgICAgYWRkQ2xhc3MoY2FudmFzLCBDTEFTU19MT0FESU5HKTtcbiAgICB9XG4gICAgY2FudmFzLmlubmVySFRNTCA9ICcnO1xuICAgIGNhbnZhcy5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICAvLyBDZW50ZXIgY3VycmVudCBpdGVtXG4gICAgdGhpcy5yZW5kZXJMaXN0KCk7XG5cbiAgICAvLyBDbGVhciB0aXRsZVxuICAgIHRpdGxlLmlubmVySFRNTCA9ICcnO1xuXG4gICAgLy8gR2VuZXJhdGUgdGl0bGUgYWZ0ZXIgdmlld2VkXG4gICAgdmFyIG9uVmlld2VkID0gZnVuY3Rpb24gb25WaWV3ZWQoKSB7XG4gICAgICB2YXIgaW1hZ2VEYXRhID0gX3RoaXMyLmltYWdlRGF0YTtcbiAgICAgIHZhciByZW5kZXIgPSBBcnJheS5pc0FycmF5KG9wdGlvbnMudGl0bGUpID8gb3B0aW9ucy50aXRsZVsxXSA6IG9wdGlvbnMudGl0bGU7XG4gICAgICB0aXRsZS5pbm5lckhUTUwgPSBlc2NhcGVIVE1MRW50aXRpZXMoaXNGdW5jdGlvbihyZW5kZXIpID8gcmVuZGVyLmNhbGwoX3RoaXMyLCBpbWFnZSwgaW1hZ2VEYXRhKSA6IFwiXCIuY29uY2F0KGFsdCwgXCIgKFwiKS5jb25jYXQoaW1hZ2VEYXRhLm5hdHVyYWxXaWR0aCwgXCIgXFx4RDcgXCIpLmNvbmNhdChpbWFnZURhdGEubmF0dXJhbEhlaWdodCwgXCIpXCIpKTtcbiAgICB9O1xuICAgIHZhciBvbkxvYWQ7XG4gICAgdmFyIG9uRXJyb3I7XG4gICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfVklFV0VELCBvblZpZXdlZCwge1xuICAgICAgb25jZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMudmlld2luZyA9IHtcbiAgICAgIGFib3J0OiBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfVklFV0VELCBvblZpZXdlZCk7XG4gICAgICAgIGlmIChpbWFnZS5jb21wbGV0ZSkge1xuICAgICAgICAgIGlmIChfdGhpczIuaW1hZ2VSZW5kZXJpbmcpIHtcbiAgICAgICAgICAgIF90aGlzMi5pbWFnZVJlbmRlcmluZy5hYm9ydCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoX3RoaXMyLmltYWdlSW5pdGlhbGl6aW5nKSB7XG4gICAgICAgICAgICBfdGhpczIuaW1hZ2VJbml0aWFsaXppbmcuYWJvcnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQ2FuY2VsIGRvd25sb2FkIHRvIHNhdmUgYmFuZHdpZHRoLlxuICAgICAgICAgIGltYWdlLnNyYyA9ICcnO1xuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGltYWdlLCBFVkVOVF9MT0FELCBvbkxvYWQpO1xuICAgICAgICAgIGlmIChfdGhpczIudGltZW91dCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzMi50aW1lb3V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpbWFnZS5jb21wbGV0ZSkge1xuICAgICAgdGhpcy5sb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZExpc3RlbmVyKGltYWdlLCBFVkVOVF9MT0FELCBvbkxvYWQgPSBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVyKGltYWdlLCBFVkVOVF9FUlJPUiwgb25FcnJvcik7XG4gICAgICAgIF90aGlzMi5sb2FkKCk7XG4gICAgICB9LCB7XG4gICAgICAgIG9uY2U6IHRydWVcbiAgICAgIH0pO1xuICAgICAgYWRkTGlzdGVuZXIoaW1hZ2UsIEVWRU5UX0VSUk9SLCBvbkVycm9yID0gZnVuY3Rpb24gb25FcnJvcigpIHtcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIoaW1hZ2UsIEVWRU5UX0xPQUQsIG9uTG9hZCk7XG4gICAgICAgIGlmIChfdGhpczIudGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpczIudGltZW91dCk7XG4gICAgICAgICAgX3RoaXMyLnRpbWVvdXQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVDbGFzcyhpbWFnZSwgQ0xBU1NfSU5WSVNJQkxFKTtcbiAgICAgICAgaWYgKG9wdGlvbnMubG9hZGluZykge1xuICAgICAgICAgIHJlbW92ZUNsYXNzKF90aGlzMi5jYW52YXMsIENMQVNTX0xPQURJTkcpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIG9uY2U6IHRydWVcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMudGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgLy8gTWFrZSB0aGUgaW1hZ2UgdmlzaWJsZSBpZiBpdCBmYWlscyB0byBsb2FkIHdpdGhpbiAxc1xuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGltYWdlLCBDTEFTU19JTlZJU0lCTEUpO1xuICAgICAgICBfdGhpczIudGltZW91dCA9IGZhbHNlO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvKipcbiAgICogVmlldyB0aGUgcHJldmlvdXMgaW1hZ2VcbiAgICogQHBhcmFtIHtib29sZWFufSBbbG9vcD1mYWxzZV0gLSBJbmRpY2F0ZSBpZiB2aWV3IHRoZSBsYXN0IG9uZVxuICAgKiB3aGVuIGl0IGlzIHRoZSBmaXJzdCBvbmUgYXQgcHJlc2VudC5cbiAgICogQHJldHVybnMge1ZpZXdlcn0gdGhpc1xuICAgKi9cbiAgcHJldjogZnVuY3Rpb24gcHJldigpIHtcbiAgICB2YXIgbG9vcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleCAtIDE7XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaW5kZXggPSBsb29wID8gdGhpcy5sZW5ndGggLSAxIDogMDtcbiAgICB9XG4gICAgdGhpcy52aWV3KGluZGV4KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIFZpZXcgdGhlIG5leHQgaW1hZ2VcbiAgICogQHBhcmFtIHtib29sZWFufSBbbG9vcD1mYWxzZV0gLSBJbmRpY2F0ZSBpZiB2aWV3IHRoZSBmaXJzdCBvbmVcbiAgICogd2hlbiBpdCBpcyB0aGUgbGFzdCBvbmUgYXQgcHJlc2VudC5cbiAgICogQHJldHVybnMge1ZpZXdlcn0gdGhpc1xuICAgKi9cbiAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB2YXIgbG9vcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogZmFsc2U7XG4gICAgdmFyIG1heEluZGV4ID0gdGhpcy5sZW5ndGggLSAxO1xuICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXggKyAxO1xuICAgIGlmIChpbmRleCA+IG1heEluZGV4KSB7XG4gICAgICBpbmRleCA9IGxvb3AgPyAwIDogbWF4SW5kZXg7XG4gICAgfVxuICAgIHRoaXMudmlldyhpbmRleCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIC8qKlxuICAgKiBNb3ZlIHRoZSBpbWFnZSB3aXRoIHJlbGF0aXZlIG9mZnNldHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIG1vdmluZyBkaXN0YW5jZSBpbiB0aGUgaG9yaXpvbnRhbCBkaXJlY3Rpb24uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbeT14XSBUaGUgbW92aW5nIGRpc3RhbmNlIGluIHRoZSB2ZXJ0aWNhbCBkaXJlY3Rpb24uXG4gICAqIEByZXR1cm5zIHtWaWV3ZXJ9IHRoaXNcbiAgICovXG4gIG1vdmU6IGZ1bmN0aW9uIG1vdmUoeCkge1xuICAgIHZhciB5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB4O1xuICAgIHZhciBpbWFnZURhdGEgPSB0aGlzLmltYWdlRGF0YTtcbiAgICB0aGlzLm1vdmVUbyhpc1VuZGVmaW5lZCh4KSA/IHggOiBpbWFnZURhdGEueCArIE51bWJlcih4KSwgaXNVbmRlZmluZWQoeSkgPyB5IDogaW1hZ2VEYXRhLnkgKyBOdW1iZXIoeSkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvKipcbiAgICogTW92ZSB0aGUgaW1hZ2UgdG8gYW4gYWJzb2x1dGUgcG9pbnQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4IC0gVGhlIG5ldyBwb3NpdGlvbiBpbiB0aGUgaG9yaXpvbnRhbCBkaXJlY3Rpb24uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbeT14XSAtIFRoZSBuZXcgcG9zaXRpb24gaW4gdGhlIHZlcnRpY2FsIGRpcmVjdGlvbi5cbiAgICogQHBhcmFtIHtFdmVudH0gW19vcmlnaW5hbEV2ZW50PW51bGxdIC0gVGhlIG9yaWdpbmFsIGV2ZW50IGlmIGFueS5cbiAgICogQHJldHVybnMge1ZpZXdlcn0gdGhpc1xuICAgKi9cbiAgbW92ZVRvOiBmdW5jdGlvbiBtb3ZlVG8oeCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuICAgIHZhciB5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB4O1xuICAgIHZhciBfb3JpZ2luYWxFdmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBpbWFnZURhdGEgPSB0aGlzLmltYWdlRGF0YTtcbiAgICB4ID0gTnVtYmVyKHgpO1xuICAgIHkgPSBOdW1iZXIoeSk7XG4gICAgaWYgKHRoaXMudmlld2VkICYmICF0aGlzLnBsYXllZCAmJiBvcHRpb25zLm1vdmFibGUpIHtcbiAgICAgIHZhciBvbGRYID0gaW1hZ2VEYXRhLng7XG4gICAgICB2YXIgb2xkWSA9IGltYWdlRGF0YS55O1xuICAgICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIGlmIChpc051bWJlcih4KSkge1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHggPSBvbGRYO1xuICAgICAgfVxuICAgICAgaWYgKGlzTnVtYmVyKHkpKSB7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeSA9IG9sZFk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLm1vdmUpKSB7XG4gICAgICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfTU9WRSwgb3B0aW9ucy5tb3ZlLCB7XG4gICAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpc3BhdGNoRXZlbnQoZWxlbWVudCwgRVZFTlRfTU9WRSwge1xuICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgeTogeSxcbiAgICAgICAgICBvbGRYOiBvbGRYLFxuICAgICAgICAgIG9sZFk6IG9sZFksXG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogX29yaWdpbmFsRXZlbnRcbiAgICAgICAgfSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2VEYXRhLnggPSB4O1xuICAgICAgICBpbWFnZURhdGEueSA9IHk7XG4gICAgICAgIGltYWdlRGF0YS5sZWZ0ID0geDtcbiAgICAgICAgaW1hZ2VEYXRhLnRvcCA9IHk7XG4gICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXJJbWFnZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMubW92ZWQpKSB7XG4gICAgICAgICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9NT1ZFRCwgb3B0aW9ucy5tb3ZlZCwge1xuICAgICAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGlzcGF0Y2hFdmVudChlbGVtZW50LCBFVkVOVF9NT1ZFRCwge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHksXG4gICAgICAgICAgICBvbGRYOiBvbGRYLFxuICAgICAgICAgICAgb2xkWTogb2xkWSxcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IF9vcmlnaW5hbEV2ZW50XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvKipcbiAgICogUm90YXRlIHRoZSBpbWFnZSB3aXRoIGEgcmVsYXRpdmUgZGVncmVlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVncmVlIC0gVGhlIHJvdGF0ZSBkZWdyZWUuXG4gICAqIEByZXR1cm5zIHtWaWV3ZXJ9IHRoaXNcbiAgICovXG4gIHJvdGF0ZTogZnVuY3Rpb24gcm90YXRlKGRlZ3JlZSkge1xuICAgIHRoaXMucm90YXRlVG8oKHRoaXMuaW1hZ2VEYXRhLnJvdGF0ZSB8fCAwKSArIE51bWJlcihkZWdyZWUpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIFJvdGF0ZSB0aGUgaW1hZ2UgdG8gYW4gYWJzb2x1dGUgZGVncmVlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVncmVlIC0gVGhlIHJvdGF0ZSBkZWdyZWUuXG4gICAqIEByZXR1cm5zIHtWaWV3ZXJ9IHRoaXNcbiAgICovXG4gIHJvdGF0ZVRvOiBmdW5jdGlvbiByb3RhdGVUbyhkZWdyZWUpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBpbWFnZURhdGEgPSB0aGlzLmltYWdlRGF0YTtcbiAgICBkZWdyZWUgPSBOdW1iZXIoZGVncmVlKTtcbiAgICBpZiAoaXNOdW1iZXIoZGVncmVlKSAmJiB0aGlzLnZpZXdlZCAmJiAhdGhpcy5wbGF5ZWQgJiYgb3B0aW9ucy5yb3RhdGFibGUpIHtcbiAgICAgIHZhciBvbGREZWdyZWUgPSBpbWFnZURhdGEucm90YXRlO1xuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5yb3RhdGUpKSB7XG4gICAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX1JPVEFURSwgb3B0aW9ucy5yb3RhdGUsIHtcbiAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGRpc3BhdGNoRXZlbnQoZWxlbWVudCwgRVZFTlRfUk9UQVRFLCB7XG4gICAgICAgIGRlZ3JlZTogZGVncmVlLFxuICAgICAgICBvbGREZWdyZWU6IG9sZERlZ3JlZVxuICAgICAgfSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICAgaW1hZ2VEYXRhLnJvdGF0ZSA9IGRlZ3JlZTtcbiAgICAgIHRoaXMucm90YXRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5yZW5kZXJJbWFnZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzNC5yb3RhdGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLnJvdGF0ZWQpKSB7XG4gICAgICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfUk9UQVRFRCwgb3B0aW9ucy5yb3RhdGVkLCB7XG4gICAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2hFdmVudChlbGVtZW50LCBFVkVOVF9ST1RBVEVELCB7XG4gICAgICAgICAgZGVncmVlOiBkZWdyZWUsXG4gICAgICAgICAgb2xkRGVncmVlOiBvbGREZWdyZWVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvKipcbiAgICogU2NhbGUgdGhlIGltYWdlIG9uIHRoZSB4LWF4aXMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVggLSBUaGUgc2NhbGUgcmF0aW8gb24gdGhlIHgtYXhpcy5cbiAgICogQHJldHVybnMge1ZpZXdlcn0gdGhpc1xuICAgKi9cbiAgc2NhbGVYOiBmdW5jdGlvbiBzY2FsZVgoX3NjYWxlWCkge1xuICAgIHRoaXMuc2NhbGUoX3NjYWxlWCwgdGhpcy5pbWFnZURhdGEuc2NhbGVZKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIFNjYWxlIHRoZSBpbWFnZSBvbiB0aGUgeS1heGlzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVZIC0gVGhlIHNjYWxlIHJhdGlvIG9uIHRoZSB5LWF4aXMuXG4gICAqIEByZXR1cm5zIHtWaWV3ZXJ9IHRoaXNcbiAgICovXG4gIHNjYWxlWTogZnVuY3Rpb24gc2NhbGVZKF9zY2FsZVkpIHtcbiAgICB0aGlzLnNjYWxlKHRoaXMuaW1hZ2VEYXRhLnNjYWxlWCwgX3NjYWxlWSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIC8qKlxuICAgKiBTY2FsZSB0aGUgaW1hZ2UuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVggLSBUaGUgc2NhbGUgcmF0aW8gb24gdGhlIHgtYXhpcy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzY2FsZVk9c2NhbGVYXSAtIFRoZSBzY2FsZSByYXRpbyBvbiB0aGUgeS1heGlzLlxuICAgKiBAcmV0dXJucyB7Vmlld2VyfSB0aGlzXG4gICAqL1xuICBzY2FsZTogZnVuY3Rpb24gc2NhbGUoc2NhbGVYKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG4gICAgdmFyIHNjYWxlWSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogc2NhbGVYO1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhO1xuICAgIHNjYWxlWCA9IE51bWJlcihzY2FsZVgpO1xuICAgIHNjYWxlWSA9IE51bWJlcihzY2FsZVkpO1xuICAgIGlmICh0aGlzLnZpZXdlZCAmJiAhdGhpcy5wbGF5ZWQgJiYgb3B0aW9ucy5zY2FsYWJsZSkge1xuICAgICAgdmFyIG9sZFNjYWxlWCA9IGltYWdlRGF0YS5zY2FsZVg7XG4gICAgICB2YXIgb2xkU2NhbGVZID0gaW1hZ2VEYXRhLnNjYWxlWTtcbiAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICBpZiAoaXNOdW1iZXIoc2NhbGVYKSkge1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjYWxlWCA9IG9sZFNjYWxlWDtcbiAgICAgIH1cbiAgICAgIGlmIChpc051bWJlcihzY2FsZVkpKSB7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NhbGVZID0gb2xkU2NhbGVZO1xuICAgICAgfVxuICAgICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5zY2FsZSkpIHtcbiAgICAgICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9TQ0FMRSwgb3B0aW9ucy5zY2FsZSwge1xuICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXNwYXRjaEV2ZW50KGVsZW1lbnQsIEVWRU5UX1NDQUxFLCB7XG4gICAgICAgICAgc2NhbGVYOiBzY2FsZVgsXG4gICAgICAgICAgc2NhbGVZOiBzY2FsZVksXG4gICAgICAgICAgb2xkU2NhbGVYOiBvbGRTY2FsZVgsXG4gICAgICAgICAgb2xkU2NhbGVZOiBvbGRTY2FsZVlcbiAgICAgICAgfSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2VEYXRhLnNjYWxlWCA9IHNjYWxlWDtcbiAgICAgICAgaW1hZ2VEYXRhLnNjYWxlWSA9IHNjYWxlWTtcbiAgICAgICAgdGhpcy5zY2FsaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXJJbWFnZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXM1LnNjYWxpbmcgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLnNjYWxlZCkpIHtcbiAgICAgICAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX1NDQUxFRCwgb3B0aW9ucy5zY2FsZWQsIHtcbiAgICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZWxlbWVudCwgRVZFTlRfU0NBTEVELCB7XG4gICAgICAgICAgICBzY2FsZVg6IHNjYWxlWCxcbiAgICAgICAgICAgIHNjYWxlWTogc2NhbGVZLFxuICAgICAgICAgICAgb2xkU2NhbGVYOiBvbGRTY2FsZVgsXG4gICAgICAgICAgICBvbGRTY2FsZVk6IG9sZFNjYWxlWVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIFpvb20gdGhlIGltYWdlIHdpdGggYSByZWxhdGl2ZSByYXRpby5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHJhdGlvIC0gVGhlIHRhcmdldCByYXRpby5cbiAgICogQHBhcmFtIHtib29sZWFufSBbc2hvd1Rvb2x0aXA9ZmFsc2VdIC0gSW5kaWNhdGVzIHdoZXRoZXIgdG8gc2hvdyB0aGUgdG9vbHRpcC5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtwaXZvdF0gLSBUaGUgcGl2b3QgcG9pbnQgY29vcmRpbmF0ZSBmb3Igem9vbWluZy5cbiAgICogQHBhcmFtIHtFdmVudH0gW19vcmlnaW5hbEV2ZW50PW51bGxdIC0gVGhlIG9yaWdpbmFsIGV2ZW50IGlmIGFueS5cbiAgICogQHJldHVybnMge1ZpZXdlcn0gdGhpc1xuICAgKi9cbiAgem9vbTogZnVuY3Rpb24gem9vbShyYXRpbykge1xuICAgIHZhciBzaG93VG9vbHRpcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgdmFyIHBpdm90ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBudWxsO1xuICAgIHZhciBfb3JpZ2luYWxFdmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbnVsbDtcbiAgICB2YXIgaW1hZ2VEYXRhID0gdGhpcy5pbWFnZURhdGE7XG4gICAgcmF0aW8gPSBOdW1iZXIocmF0aW8pO1xuICAgIGlmIChyYXRpbyA8IDApIHtcbiAgICAgIHJhdGlvID0gMSAvICgxIC0gcmF0aW8pO1xuICAgIH0gZWxzZSB7XG4gICAgICByYXRpbyA9IDEgKyByYXRpbztcbiAgICB9XG4gICAgdGhpcy56b29tVG8oaW1hZ2VEYXRhLndpZHRoICogcmF0aW8gLyBpbWFnZURhdGEubmF0dXJhbFdpZHRoLCBzaG93VG9vbHRpcCwgcGl2b3QsIF9vcmlnaW5hbEV2ZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIFpvb20gdGhlIGltYWdlIHRvIGFuIGFic29sdXRlIHJhdGlvLlxuICAgKiBAcGFyYW0ge251bWJlcn0gcmF0aW8gLSBUaGUgdGFyZ2V0IHJhdGlvLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtzaG93VG9vbHRpcF0gLSBJbmRpY2F0ZXMgd2hldGhlciB0byBzaG93IHRoZSB0b29sdGlwLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW3Bpdm90XSAtIFRoZSBwaXZvdCBwb2ludCBjb29yZGluYXRlIGZvciB6b29taW5nLlxuICAgKiBAcGFyYW0ge0V2ZW50fSBbX29yaWdpbmFsRXZlbnQ9bnVsbF0gLSBUaGUgb3JpZ2luYWwgZXZlbnQgaWYgYW55LlxuICAgKiBAcGFyYW0ge0V2ZW50fSBbX3pvb21hYmxlPWZhbHNlXSAtIEluZGljYXRlcyBpZiB0aGUgY3VycmVudCB6b29tIGlzIGF2YWlsYWJsZSBvciBub3QuXG4gICAqIEByZXR1cm5zIHtWaWV3ZXJ9IHRoaXNcbiAgICovXG4gIHpvb21UbzogZnVuY3Rpb24gem9vbVRvKHJhdGlvKSB7XG4gICAgdmFyIF90aGlzNiA9IHRoaXM7XG4gICAgdmFyIHNob3dUb29sdGlwID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICB2YXIgcGl2b3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG4gICAgdmFyIF9vcmlnaW5hbEV2ZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBudWxsO1xuICAgIHZhciBfem9vbWFibGUgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IGZhbHNlO1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgIHBvaW50ZXJzID0gdGhpcy5wb2ludGVycyxcbiAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhO1xuICAgIHZhciB4ID0gaW1hZ2VEYXRhLngsXG4gICAgICB5ID0gaW1hZ2VEYXRhLnksXG4gICAgICB3aWR0aCA9IGltYWdlRGF0YS53aWR0aCxcbiAgICAgIGhlaWdodCA9IGltYWdlRGF0YS5oZWlnaHQsXG4gICAgICBuYXR1cmFsV2lkdGggPSBpbWFnZURhdGEubmF0dXJhbFdpZHRoLFxuICAgICAgbmF0dXJhbEhlaWdodCA9IGltYWdlRGF0YS5uYXR1cmFsSGVpZ2h0O1xuICAgIHJhdGlvID0gTWF0aC5tYXgoMCwgcmF0aW8pO1xuICAgIGlmIChpc051bWJlcihyYXRpbykgJiYgdGhpcy52aWV3ZWQgJiYgIXRoaXMucGxheWVkICYmIChfem9vbWFibGUgfHwgb3B0aW9ucy56b29tYWJsZSkpIHtcbiAgICAgIGlmICghX3pvb21hYmxlKSB7XG4gICAgICAgIHZhciBtaW5ab29tUmF0aW8gPSBNYXRoLm1heCgwLjAxLCBvcHRpb25zLm1pblpvb21SYXRpbyk7XG4gICAgICAgIHZhciBtYXhab29tUmF0aW8gPSBNYXRoLm1pbigxMDAsIG9wdGlvbnMubWF4Wm9vbVJhdGlvKTtcbiAgICAgICAgcmF0aW8gPSBNYXRoLm1pbihNYXRoLm1heChyYXRpbywgbWluWm9vbVJhdGlvKSwgbWF4Wm9vbVJhdGlvKTtcbiAgICAgIH1cbiAgICAgIGlmIChfb3JpZ2luYWxFdmVudCkge1xuICAgICAgICBzd2l0Y2ggKF9vcmlnaW5hbEV2ZW50LnR5cGUpIHtcbiAgICAgICAgICBjYXNlICd3aGVlbCc6XG4gICAgICAgICAgICBpZiAob3B0aW9ucy56b29tUmF0aW8gPj0gMC4wNTUgJiYgcmF0aW8gPiAwLjk1ICYmIHJhdGlvIDwgMS4wNSkge1xuICAgICAgICAgICAgICByYXRpbyA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdwb2ludGVybW92ZSc6XG4gICAgICAgICAgY2FzZSAndG91Y2htb3ZlJzpcbiAgICAgICAgICBjYXNlICdtb3VzZW1vdmUnOlxuICAgICAgICAgICAgaWYgKHJhdGlvID4gMC45OSAmJiByYXRpbyA8IDEuMDEpIHtcbiAgICAgICAgICAgICAgcmF0aW8gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBuZXdXaWR0aCA9IG5hdHVyYWxXaWR0aCAqIHJhdGlvO1xuICAgICAgdmFyIG5ld0hlaWdodCA9IG5hdHVyYWxIZWlnaHQgKiByYXRpbztcbiAgICAgIHZhciBvZmZzZXRXaWR0aCA9IG5ld1dpZHRoIC0gd2lkdGg7XG4gICAgICB2YXIgb2Zmc2V0SGVpZ2h0ID0gbmV3SGVpZ2h0IC0gaGVpZ2h0O1xuICAgICAgdmFyIG9sZFJhdGlvID0gaW1hZ2VEYXRhLnJhdGlvO1xuICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy56b29tKSkge1xuICAgICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9aT09NLCBvcHRpb25zLnpvb20sIHtcbiAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGRpc3BhdGNoRXZlbnQoZWxlbWVudCwgRVZFTlRfWk9PTSwge1xuICAgICAgICByYXRpbzogcmF0aW8sXG4gICAgICAgIG9sZFJhdGlvOiBvbGRSYXRpbyxcbiAgICAgICAgb3JpZ2luYWxFdmVudDogX29yaWdpbmFsRXZlbnRcbiAgICAgIH0pID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIHRoaXMuem9vbWluZyA9IHRydWU7XG4gICAgICBpZiAoX29yaWdpbmFsRXZlbnQpIHtcbiAgICAgICAgdmFyIG9mZnNldCA9IGdldE9mZnNldCh0aGlzLnZpZXdlcik7XG4gICAgICAgIHZhciBjZW50ZXIgPSBwb2ludGVycyAmJiBPYmplY3Qua2V5cyhwb2ludGVycykubGVuZ3RoID4gMCA/IGdldFBvaW50ZXJzQ2VudGVyKHBvaW50ZXJzKSA6IHtcbiAgICAgICAgICBwYWdlWDogX29yaWdpbmFsRXZlbnQucGFnZVgsXG4gICAgICAgICAgcGFnZVk6IF9vcmlnaW5hbEV2ZW50LnBhZ2VZXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gWm9vbSBmcm9tIHRoZSB0cmlnZ2VyaW5nIHBvaW50IG9mIHRoZSBldmVudFxuICAgICAgICBpbWFnZURhdGEueCAtPSBvZmZzZXRXaWR0aCAqICgoY2VudGVyLnBhZ2VYIC0gb2Zmc2V0LmxlZnQgLSB4KSAvIHdpZHRoKTtcbiAgICAgICAgaW1hZ2VEYXRhLnkgLT0gb2Zmc2V0SGVpZ2h0ICogKChjZW50ZXIucGFnZVkgLSBvZmZzZXQudG9wIC0geSkgLyBoZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHBpdm90KSAmJiBpc051bWJlcihwaXZvdC54KSAmJiBpc051bWJlcihwaXZvdC55KSkge1xuICAgICAgICBpbWFnZURhdGEueCAtPSBvZmZzZXRXaWR0aCAqICgocGl2b3QueCAtIHgpIC8gd2lkdGgpO1xuICAgICAgICBpbWFnZURhdGEueSAtPSBvZmZzZXRIZWlnaHQgKiAoKHBpdm90LnkgLSB5KSAvIGhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBab29tIGZyb20gdGhlIGNlbnRlciBvZiB0aGUgaW1hZ2VcbiAgICAgICAgaW1hZ2VEYXRhLnggLT0gb2Zmc2V0V2lkdGggLyAyO1xuICAgICAgICBpbWFnZURhdGEueSAtPSBvZmZzZXRIZWlnaHQgLyAyO1xuICAgICAgfVxuICAgICAgaW1hZ2VEYXRhLmxlZnQgPSBpbWFnZURhdGEueDtcbiAgICAgIGltYWdlRGF0YS50b3AgPSBpbWFnZURhdGEueTtcbiAgICAgIGltYWdlRGF0YS53aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgaW1hZ2VEYXRhLmhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgIGltYWdlRGF0YS5vbGRSYXRpbyA9IG9sZFJhdGlvO1xuICAgICAgaW1hZ2VEYXRhLnJhdGlvID0gcmF0aW87XG4gICAgICB0aGlzLnJlbmRlckltYWdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXM2Lnpvb21pbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy56b29tZWQpKSB7XG4gICAgICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfWk9PTUVELCBvcHRpb25zLnpvb21lZCwge1xuICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoZWxlbWVudCwgRVZFTlRfWk9PTUVELCB7XG4gICAgICAgICAgcmF0aW86IHJhdGlvLFxuICAgICAgICAgIG9sZFJhdGlvOiBvbGRSYXRpbyxcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBfb3JpZ2luYWxFdmVudFxuICAgICAgICB9LCB7XG4gICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChzaG93VG9vbHRpcCkge1xuICAgICAgICB0aGlzLnRvb2x0aXAoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIC8qKlxuICAgKiBQbGF5IHRoZSBpbWFnZXNcbiAgICogQHBhcmFtIHtib29sZWFufEZ1bGxzY3JlZW5PcHRpb25zfSBbZnVsbHNjcmVlbj1mYWxzZV0gLSBJbmRpY2F0ZSBpZiByZXF1ZXN0IGZ1bGxzY3JlZW4gb3Igbm90LlxuICAgKiBAcmV0dXJucyB7Vmlld2VyfSB0aGlzXG4gICAqL1xuICBwbGF5OiBmdW5jdGlvbiBwbGF5KCkge1xuICAgIHZhciBfdGhpczcgPSB0aGlzO1xuICAgIHZhciBmdWxsc2NyZWVuID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcbiAgICBpZiAoIXRoaXMuaXNTaG93biB8fCB0aGlzLnBsYXllZCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLnBsYXkpKSB7XG4gICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9QTEFZLCBvcHRpb25zLnBsYXksIHtcbiAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkaXNwYXRjaEV2ZW50KGVsZW1lbnQsIEVWRU5UX1BMQVkpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgICB2YXIgb25Mb2FkID0gdGhpcy5sb2FkSW1hZ2UuYmluZCh0aGlzKTtcbiAgICB2YXIgbGlzdCA9IFtdO1xuICAgIHZhciB0b3RhbCA9IDA7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB0aGlzLnBsYXllZCA9IHRydWU7XG4gICAgdGhpcy5vbkxvYWRXaGVuUGxheSA9IG9uTG9hZDtcbiAgICBpZiAoZnVsbHNjcmVlbikge1xuICAgICAgdGhpcy5yZXF1ZXN0RnVsbHNjcmVlbihmdWxsc2NyZWVuKTtcbiAgICB9XG4gICAgYWRkQ2xhc3MocGxheWVyLCBDTEFTU19TSE9XKTtcbiAgICBmb3JFYWNoKHRoaXMuaXRlbXMsIGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICB2YXIgaW1nID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICAgIHZhciBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgaW1hZ2Uuc3JjID0gZ2V0RGF0YShpbWcsICdvcmlnaW5hbFVybCcpO1xuICAgICAgaW1hZ2UuYWx0ID0gaW1nLmdldEF0dHJpYnV0ZSgnYWx0Jyk7XG4gICAgICBpbWFnZS5yZWZlcnJlclBvbGljeSA9IGltZy5yZWZlcnJlclBvbGljeTtcbiAgICAgIHRvdGFsICs9IDE7XG4gICAgICBhZGRDbGFzcyhpbWFnZSwgQ0xBU1NfRkFERSk7XG4gICAgICB0b2dnbGVDbGFzcyhpbWFnZSwgQ0xBU1NfVFJBTlNJVElPTiwgb3B0aW9ucy50cmFuc2l0aW9uKTtcbiAgICAgIGlmIChoYXNDbGFzcyhpdGVtLCBDTEFTU19BQ1RJVkUpKSB7XG4gICAgICAgIGFkZENsYXNzKGltYWdlLCBDTEFTU19JTik7XG4gICAgICAgIGluZGV4ID0gaTtcbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpbWFnZSk7XG4gICAgICBhZGRMaXN0ZW5lcihpbWFnZSwgRVZFTlRfTE9BRCwgb25Mb2FkLCB7XG4gICAgICAgIG9uY2U6IHRydWVcbiAgICAgIH0pO1xuICAgICAgcGxheWVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICB9KTtcbiAgICBpZiAoaXNOdW1iZXIob3B0aW9ucy5pbnRlcnZhbCkgJiYgb3B0aW9ucy5pbnRlcnZhbCA+IDApIHtcbiAgICAgIHZhciBwcmV2ID0gZnVuY3Rpb24gcHJldigpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzNy5wbGF5aW5nLnRpbWVvdXQpO1xuICAgICAgICByZW1vdmVDbGFzcyhsaXN0W2luZGV4XSwgQ0xBU1NfSU4pO1xuICAgICAgICBpbmRleCAtPSAxO1xuICAgICAgICBpbmRleCA9IGluZGV4ID49IDAgPyBpbmRleCA6IHRvdGFsIC0gMTtcbiAgICAgICAgYWRkQ2xhc3MobGlzdFtpbmRleF0sIENMQVNTX0lOKTtcbiAgICAgICAgX3RoaXM3LnBsYXlpbmcudGltZW91dCA9IHNldFRpbWVvdXQocHJldiwgb3B0aW9ucy5pbnRlcnZhbCk7XG4gICAgICB9O1xuICAgICAgdmFyIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXM3LnBsYXlpbmcudGltZW91dCk7XG4gICAgICAgIHJlbW92ZUNsYXNzKGxpc3RbaW5kZXhdLCBDTEFTU19JTik7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIGluZGV4ID0gaW5kZXggPCB0b3RhbCA/IGluZGV4IDogMDtcbiAgICAgICAgYWRkQ2xhc3MobGlzdFtpbmRleF0sIENMQVNTX0lOKTtcbiAgICAgICAgX3RoaXM3LnBsYXlpbmcudGltZW91dCA9IHNldFRpbWVvdXQobmV4dCwgb3B0aW9ucy5pbnRlcnZhbCk7XG4gICAgICB9O1xuICAgICAgaWYgKHRvdGFsID4gMSkge1xuICAgICAgICB0aGlzLnBsYXlpbmcgPSB7XG4gICAgICAgICAgcHJldjogcHJldixcbiAgICAgICAgICBuZXh0OiBuZXh0LFxuICAgICAgICAgIHRpbWVvdXQ6IHNldFRpbWVvdXQobmV4dCwgb3B0aW9ucy5pbnRlcnZhbClcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIC8vIFN0b3AgcGxheVxuICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgIHZhciBfdGhpczggPSB0aGlzO1xuICAgIGlmICghdGhpcy5wbGF5ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucy5zdG9wKSkge1xuICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfU1RPUCwgb3B0aW9ucy5zdG9wLCB7XG4gICAgICAgIG9uY2U6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGlzcGF0Y2hFdmVudChlbGVtZW50LCBFVkVOVF9TVE9QKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucGxheWluZy50aW1lb3V0KTtcbiAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnBsYXllZCA9IGZhbHNlO1xuICAgIGZvckVhY2gocGxheWVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKSwgZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICByZW1vdmVMaXN0ZW5lcihpbWFnZSwgRVZFTlRfTE9BRCwgX3RoaXM4Lm9uTG9hZFdoZW5QbGF5KTtcbiAgICB9KTtcbiAgICByZW1vdmVDbGFzcyhwbGF5ZXIsIENMQVNTX1NIT1cpO1xuICAgIHBsYXllci5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIC8vIEVudGVyIG1vZGFsIG1vZGUgKG9ubHkgYXZhaWxhYmxlIGluIGlubGluZSBtb2RlKVxuICBmdWxsOiBmdW5jdGlvbiBmdWxsKCkge1xuICAgIHZhciBfdGhpczkgPSB0aGlzO1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgdmlld2VyID0gdGhpcy52aWV3ZXIsXG4gICAgICBpbWFnZSA9IHRoaXMuaW1hZ2UsXG4gICAgICBsaXN0ID0gdGhpcy5saXN0O1xuICAgIGlmICghdGhpcy5pc1Nob3duIHx8IHRoaXMucGxheWVkIHx8IHRoaXMuZnVsbGVkIHx8ICFvcHRpb25zLmlubGluZSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMuZnVsbGVkID0gdHJ1ZTtcbiAgICB0aGlzLm9wZW4oKTtcbiAgICBhZGRDbGFzcyh0aGlzLmJ1dHRvbiwgQ0xBU1NfRlVMTFNDUkVFTl9FWElUKTtcbiAgICBpZiAob3B0aW9ucy50cmFuc2l0aW9uKSB7XG4gICAgICByZW1vdmVDbGFzcyhsaXN0LCBDTEFTU19UUkFOU0lUSU9OKTtcbiAgICAgIGlmICh0aGlzLnZpZXdlZCkge1xuICAgICAgICByZW1vdmVDbGFzcyhpbWFnZSwgQ0xBU1NfVFJBTlNJVElPTik7XG4gICAgICB9XG4gICAgfVxuICAgIGFkZENsYXNzKHZpZXdlciwgQ0xBU1NfRklYRUQpO1xuICAgIHZpZXdlci5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG4gICAgdmlld2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgdGhpcy50aXRsZS5pZCk7XG4gICAgdmlld2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpO1xuICAgIHZpZXdlci5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgc2V0U3R5bGUodmlld2VyLCB7XG4gICAgICB6SW5kZXg6IG9wdGlvbnMuekluZGV4XG4gICAgfSk7XG4gICAgaWYgKG9wdGlvbnMuZm9jdXMpIHtcbiAgICAgIHRoaXMuZW5mb3JjZUZvY3VzKCk7XG4gICAgfVxuICAgIHRoaXMuaW5pdENvbnRhaW5lcigpO1xuICAgIHRoaXMudmlld2VyRGF0YSA9IGFzc2lnbih7fSwgdGhpcy5jb250YWluZXJEYXRhKTtcbiAgICB0aGlzLnJlbmRlckxpc3QoKTtcbiAgICBpZiAodGhpcy52aWV3ZWQpIHtcbiAgICAgIHRoaXMuaW5pdEltYWdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXM5LnJlbmRlckltYWdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy50cmFuc2l0aW9uKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgYWRkQ2xhc3MoaW1hZ2UsIENMQVNTX1RSQU5TSVRJT04pO1xuICAgICAgICAgICAgICBhZGRDbGFzcyhsaXN0LCBDTEFTU19UUkFOU0lUSU9OKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIC8vIEV4aXQgbW9kYWwgbW9kZSAob25seSBhdmFpbGFibGUgaW4gaW5saW5lIG1vZGUpXG4gIGV4aXQ6IGZ1bmN0aW9uIGV4aXQoKSB7XG4gICAgdmFyIF90aGlzMTAgPSB0aGlzO1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgdmlld2VyID0gdGhpcy52aWV3ZXIsXG4gICAgICBpbWFnZSA9IHRoaXMuaW1hZ2UsXG4gICAgICBsaXN0ID0gdGhpcy5saXN0O1xuICAgIGlmICghdGhpcy5pc1Nob3duIHx8IHRoaXMucGxheWVkIHx8ICF0aGlzLmZ1bGxlZCB8fCAhb3B0aW9ucy5pbmxpbmUpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLmZ1bGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmJ1dHRvbiwgQ0xBU1NfRlVMTFNDUkVFTl9FWElUKTtcbiAgICBpZiAob3B0aW9ucy50cmFuc2l0aW9uKSB7XG4gICAgICByZW1vdmVDbGFzcyhsaXN0LCBDTEFTU19UUkFOU0lUSU9OKTtcbiAgICAgIGlmICh0aGlzLnZpZXdlZCkge1xuICAgICAgICByZW1vdmVDbGFzcyhpbWFnZSwgQ0xBU1NfVFJBTlNJVElPTik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmZvY3VzKSB7XG4gICAgICB0aGlzLmNsZWFyRW5mb3JjZUZvY3VzKCk7XG4gICAgfVxuICAgIHZpZXdlci5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgICB2aWV3ZXIucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknKTtcbiAgICB2aWV3ZXIucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJyk7XG4gICAgcmVtb3ZlQ2xhc3Modmlld2VyLCBDTEFTU19GSVhFRCk7XG4gICAgc2V0U3R5bGUodmlld2VyLCB7XG4gICAgICB6SW5kZXg6IG9wdGlvbnMuekluZGV4SW5saW5lXG4gICAgfSk7XG4gICAgdGhpcy52aWV3ZXJEYXRhID0gYXNzaWduKHt9LCB0aGlzLnBhcmVudERhdGEpO1xuICAgIHRoaXMucmVuZGVyVmlld2VyKCk7XG4gICAgdGhpcy5yZW5kZXJMaXN0KCk7XG4gICAgaWYgKHRoaXMudmlld2VkKSB7XG4gICAgICB0aGlzLmluaXRJbWFnZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMTAucmVuZGVySW1hZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChvcHRpb25zLnRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBhZGRDbGFzcyhpbWFnZSwgQ0xBU1NfVFJBTlNJVElPTik7XG4gICAgICAgICAgICAgIGFkZENsYXNzKGxpc3QsIENMQVNTX1RSQU5TSVRJT04pO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLy8gU2hvdyB0aGUgY3VycmVudCByYXRpbyBvZiB0aGUgaW1hZ2Ugd2l0aCBwZXJjZW50YWdlXG4gIHRvb2x0aXA6IGZ1bmN0aW9uIHRvb2x0aXAoKSB7XG4gICAgdmFyIF90aGlzMTEgPSB0aGlzO1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgdG9vbHRpcEJveCA9IHRoaXMudG9vbHRpcEJveCxcbiAgICAgIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhO1xuICAgIGlmICghdGhpcy52aWV3ZWQgfHwgdGhpcy5wbGF5ZWQgfHwgIW9wdGlvbnMudG9vbHRpcCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRvb2x0aXBCb3gudGV4dENvbnRlbnQgPSBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKGltYWdlRGF0YS5yYXRpbyAqIDEwMCksIFwiJVwiKTtcbiAgICBpZiAoIXRoaXMudG9vbHRpcHBpbmcpIHtcbiAgICAgIGlmIChvcHRpb25zLnRyYW5zaXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuZmFkaW5nKSB7XG4gICAgICAgICAgZGlzcGF0Y2hFdmVudCh0b29sdGlwQm94LCBFVkVOVF9UUkFOU0lUSU9OX0VORCk7XG4gICAgICAgIH1cbiAgICAgICAgYWRkQ2xhc3ModG9vbHRpcEJveCwgQ0xBU1NfU0hPVyk7XG4gICAgICAgIGFkZENsYXNzKHRvb2x0aXBCb3gsIENMQVNTX0ZBREUpO1xuICAgICAgICBhZGRDbGFzcyh0b29sdGlwQm94LCBDTEFTU19UUkFOU0lUSU9OKTtcbiAgICAgICAgdG9vbHRpcEJveC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG5cbiAgICAgICAgLy8gRm9yY2UgcmVmbG93IHRvIGVuYWJsZSBDU1MzIHRyYW5zaXRpb25cbiAgICAgICAgdG9vbHRpcEJveC5pbml0aWFsT2Zmc2V0V2lkdGggPSB0b29sdGlwQm94Lm9mZnNldFdpZHRoO1xuICAgICAgICBhZGRDbGFzcyh0b29sdGlwQm94LCBDTEFTU19JTik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRDbGFzcyh0b29sdGlwQm94LCBDTEFTU19TSE9XKTtcbiAgICAgICAgdG9vbHRpcEJveC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvb2x0aXBwaW5nKTtcbiAgICB9XG4gICAgdGhpcy50b29sdGlwcGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG9wdGlvbnMudHJhbnNpdGlvbikge1xuICAgICAgICBhZGRMaXN0ZW5lcih0b29sdGlwQm94LCBFVkVOVF9UUkFOU0lUSU9OX0VORCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJlbW92ZUNsYXNzKHRvb2x0aXBCb3gsIENMQVNTX1NIT1cpO1xuICAgICAgICAgIHJlbW92ZUNsYXNzKHRvb2x0aXBCb3gsIENMQVNTX0ZBREUpO1xuICAgICAgICAgIHJlbW92ZUNsYXNzKHRvb2x0aXBCb3gsIENMQVNTX1RSQU5TSVRJT04pO1xuICAgICAgICAgIHRvb2x0aXBCb3guc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgICAgIF90aGlzMTEuZmFkaW5nID0gZmFsc2U7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBvbmNlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICByZW1vdmVDbGFzcyh0b29sdGlwQm94LCBDTEFTU19JTik7XG4gICAgICAgIF90aGlzMTEuZmFkaW5nID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKHRvb2x0aXBCb3gsIENMQVNTX1NIT1cpO1xuICAgICAgICB0b29sdGlwQm94LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIF90aGlzMTEudG9vbHRpcHBpbmcgPSBmYWxzZTtcbiAgICB9LCAxMDAwKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgaW1hZ2Ugc2l6ZSBiZXR3ZWVuIGl0cyBjdXJyZW50IHNpemUgYW5kIG5hdHVyYWwgc2l6ZVxuICAgKiBAcGFyYW0ge0V2ZW50fSBbX29yaWdpbmFsRXZlbnQ9bnVsbF0gLSBUaGUgb3JpZ2luYWwgZXZlbnQgaWYgYW55LlxuICAgKiBAcmV0dXJucyB7Vmlld2VyfSB0aGlzXG4gICAqL1xuICB0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICB2YXIgX29yaWdpbmFsRXZlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IG51bGw7XG4gICAgaWYgKHRoaXMuaW1hZ2VEYXRhLnJhdGlvID09PSAxKSB7XG4gICAgICB0aGlzLnpvb21Ubyh0aGlzLmltYWdlRGF0YS5vbGRSYXRpbywgdHJ1ZSwgbnVsbCwgX29yaWdpbmFsRXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnpvb21UbygxLCB0cnVlLCBudWxsLCBfb3JpZ2luYWxFdmVudCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICAvLyBSZXNldCB0aGUgaW1hZ2UgdG8gaXRzIGluaXRpYWwgc3RhdGVcbiAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGlmICh0aGlzLnZpZXdlZCAmJiAhdGhpcy5wbGF5ZWQpIHtcbiAgICAgIHRoaXMuaW1hZ2VEYXRhID0gYXNzaWduKHt9LCB0aGlzLmluaXRpYWxJbWFnZURhdGEpO1xuICAgICAgdGhpcy5yZW5kZXJJbWFnZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLy8gVXBkYXRlIHZpZXdlciB3aGVuIGltYWdlcyBjaGFuZ2VkXG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIHZhciBfdGhpczEyID0gdGhpcztcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBpc0ltZyA9IHRoaXMuaXNJbWc7XG5cbiAgICAvLyBEZXN0cm95IHZpZXdlciBpZiB0aGUgdGFyZ2V0IGltYWdlIHdhcyBkZWxldGVkXG4gICAgaWYgKGlzSW1nICYmICFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdmFyIGltYWdlcyA9IFtdO1xuICAgIGZvckVhY2goaXNJbWcgPyBbZWxlbWVudF0gOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpLCBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuZmlsdGVyKSkge1xuICAgICAgICBpZiAob3B0aW9ucy5maWx0ZXIuY2FsbChfdGhpczEyLCBpbWFnZSkpIHtcbiAgICAgICAgICBpbWFnZXMucHVzaChpbWFnZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoX3RoaXMxMi5nZXRJbWFnZVVSTChpbWFnZSkpIHtcbiAgICAgICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuICAgIHRoaXMubGVuZ3RoID0gaW1hZ2VzLmxlbmd0aDtcbiAgICBpZiAodGhpcy5yZWFkeSkge1xuICAgICAgdmFyIGNoYW5nZWRJbmRleGVzID0gW107XG4gICAgICBmb3JFYWNoKHRoaXMuaXRlbXMsIGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgIHZhciBpbWcgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgICAgICB2YXIgaW1hZ2UgPSBpbWFnZXNbaV07XG4gICAgICAgIGlmIChpbWFnZSAmJiBpbWcpIHtcbiAgICAgICAgICBpZiAoaW1hZ2Uuc3JjICE9PSBpbWcuc3JjXG5cbiAgICAgICAgICAvLyBUaXRsZSBjaGFuZ2VkICgjNDA4KVxuICAgICAgICAgIHx8IGltYWdlLmFsdCAhPT0gaW1nLmFsdCkge1xuICAgICAgICAgICAgY2hhbmdlZEluZGV4ZXMucHVzaChpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hhbmdlZEluZGV4ZXMucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzZXRTdHlsZSh0aGlzLmxpc3QsIHtcbiAgICAgICAgd2lkdGg6ICdhdXRvJ1xuICAgICAgfSk7XG4gICAgICB0aGlzLmluaXRMaXN0KCk7XG4gICAgICBpZiAodGhpcy5pc1Nob3duKSB7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCkge1xuICAgICAgICAgIGlmICh0aGlzLnZpZXdlZCkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZWRJbmRleCA9IGNoYW5nZWRJbmRleGVzLmluZGV4T2YodGhpcy5pbmRleCk7XG4gICAgICAgICAgICBpZiAoY2hhbmdlZEluZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgdGhpcy52aWV3ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy52aWV3KE1hdGgubWF4KE1hdGgubWluKHRoaXMuaW5kZXggLSBjaGFuZ2VkSW5kZXgsIHRoaXMubGVuZ3RoIC0gMSksIDApKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBhY3RpdmVJdGVtID0gdGhpcy5pdGVtc1t0aGlzLmluZGV4XTtcblxuICAgICAgICAgICAgICAvLyBSZWFjdGl2YXRlIHRoZSBjdXJyZW50IHZpZXdpbmcgaXRlbSBhZnRlciByZXNldCB0aGUgbGlzdC5cbiAgICAgICAgICAgICAgYWRkQ2xhc3MoYWN0aXZlSXRlbSwgQ0xBU1NfQUNUSVZFKTtcbiAgICAgICAgICAgICAgYWN0aXZlSXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5pbWFnZSA9IG51bGw7XG4gICAgICAgICAgdGhpcy52aWV3ZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgICB0aGlzLmltYWdlRGF0YSA9IHt9O1xuICAgICAgICAgIHRoaXMuY2FudmFzLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgIHRoaXMudGl0bGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idWlsZCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgLy8gRGVzdHJveSB0aGUgdmlld2VyXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmICghZWxlbWVudFtOQU1FU1BBQ0VdKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgICBpZiAodGhpcy5wbGF5ZWQpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5pbmxpbmUpIHtcbiAgICAgICAgaWYgKHRoaXMuZnVsbGVkKSB7XG4gICAgICAgICAgdGhpcy5leGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51bmJpbmQoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1Nob3duKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXdpbmcpIHtcbiAgICAgICAgICBpZiAodGhpcy5pbWFnZVJlbmRlcmluZykge1xuICAgICAgICAgICAgdGhpcy5pbWFnZVJlbmRlcmluZy5hYm9ydCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbWFnZUluaXRpYWxpemluZykge1xuICAgICAgICAgICAgdGhpcy5pbWFnZUluaXRpYWxpemluZy5hYm9ydCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oaWRpbmcpIHtcbiAgICAgICAgICB0aGlzLnRyYW5zaXRpb25pbmcuYWJvcnQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhpZGRlbigpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dpbmcpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uaW5nLmFib3J0KCk7XG4gICAgICAgIHRoaXMuaGlkZGVuKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XG4gICAgICB0aGlzLnZpZXdlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMudmlld2VyKTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuaW5saW5lKSB7XG4gICAgICBpZiAodGhpcy5kZWxheWluZykge1xuICAgICAgICB0aGlzLmRlbGF5aW5nLmFib3J0KCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaW5pdGlhbGl6aW5nKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nLmFib3J0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghb3B0aW9ucy5pbmxpbmUpIHtcbiAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX0NMSUNLLCB0aGlzLm9uU3RhcnQpO1xuICAgIH1cbiAgICBlbGVtZW50W05BTUVTUEFDRV0gPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbnZhciBvdGhlcnMgPSB7XG4gIGdldEltYWdlVVJMOiBmdW5jdGlvbiBnZXRJbWFnZVVSTChpbWFnZSkge1xuICAgIHZhciB1cmwgPSB0aGlzLm9wdGlvbnMudXJsO1xuICAgIGlmIChpc1N0cmluZyh1cmwpKSB7XG4gICAgICB1cmwgPSBpbWFnZS5nZXRBdHRyaWJ1dGUodXJsKTtcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odXJsKSkge1xuICAgICAgdXJsID0gdXJsLmNhbGwodGhpcywgaW1hZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSAnJztcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbiAgfSxcbiAgZW5mb3JjZUZvY3VzOiBmdW5jdGlvbiBlbmZvcmNlRm9jdXMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzLmNsZWFyRW5mb3JjZUZvY3VzKCk7XG4gICAgYWRkTGlzdGVuZXIoZG9jdW1lbnQsIEVWRU5UX0ZPQ1VTSU4sIHRoaXMub25Gb2N1c2luID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgdmlld2VyID0gX3RoaXMudmlld2VyO1xuICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGlmICh0YXJnZXQgPT09IGRvY3VtZW50IHx8IHRhcmdldCA9PT0gdmlld2VyIHx8IHZpZXdlci5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHdoaWxlICh0YXJnZXQpIHtcbiAgICAgICAgLy8gQXZvaWQgY29uZmxpY3RzIHdpdGggb3RoZXIgbW9kYWxzICgjNDc0LCAjNTQwKVxuICAgICAgICBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSAhPT0gbnVsbCB8fCB0YXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJykgPT09ICd0cnVlJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICAgIHZpZXdlci5mb2N1cygpO1xuICAgIH0pO1xuICB9LFxuICBjbGVhckVuZm9yY2VGb2N1czogZnVuY3Rpb24gY2xlYXJFbmZvcmNlRm9jdXMoKSB7XG4gICAgaWYgKHRoaXMub25Gb2N1c2luKSB7XG4gICAgICByZW1vdmVMaXN0ZW5lcihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTiwgdGhpcy5vbkZvY3VzaW4pO1xuICAgICAgdGhpcy5vbkZvY3VzaW4gPSBudWxsO1xuICAgIH1cbiAgfSxcbiAgb3BlbjogZnVuY3Rpb24gb3BlbigpIHtcbiAgICB2YXIgYm9keSA9IHRoaXMuYm9keTtcbiAgICBhZGRDbGFzcyhib2R5LCBDTEFTU19PUEVOKTtcbiAgICBpZiAodGhpcy5zY3JvbGxiYXJXaWR0aCA+IDApIHtcbiAgICAgIGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIi5jb25jYXQodGhpcy5zY3JvbGxiYXJXaWR0aCArIChwYXJzZUZsb2F0KHRoaXMuaW5pdGlhbEJvZHlDb21wdXRlZFBhZGRpbmdSaWdodCkgfHwgMCksIFwicHhcIik7XG4gICAgfVxuICB9LFxuICBjbG9zZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgdmFyIGJvZHkgPSB0aGlzLmJvZHk7XG4gICAgcmVtb3ZlQ2xhc3MoYm9keSwgQ0xBU1NfT1BFTik7XG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyV2lkdGggPiAwKSB7XG4gICAgICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHRoaXMuaW5pdGlhbEJvZHlQYWRkaW5nUmlnaHQ7XG4gICAgfVxuICB9LFxuICBzaG93bjogZnVuY3Rpb24gc2hvd24oKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgdmlld2VyID0gdGhpcy52aWV3ZXI7XG4gICAgdGhpcy5mdWxsZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNTaG93biA9IHRydWU7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLmJpbmQoKTtcbiAgICB0aGlzLnNob3dpbmcgPSBmYWxzZTtcbiAgICBpZiAob3B0aW9ucy5mb2N1cykge1xuICAgICAgdmlld2VyLmZvY3VzKCk7XG4gICAgICB0aGlzLmVuZm9yY2VGb2N1cygpO1xuICAgIH1cbiAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLnNob3duKSkge1xuICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfU0hPV04sIG9wdGlvbnMuc2hvd24sIHtcbiAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkaXNwYXRjaEV2ZW50KGVsZW1lbnQsIEVWRU5UX1NIT1dOKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVhZHkgJiYgdGhpcy5pc1Nob3duICYmICF0aGlzLmhpZGluZykge1xuICAgICAgdGhpcy52aWV3KHRoaXMuaW5kZXgpO1xuICAgIH1cbiAgfSxcbiAgaGlkZGVuOiBmdW5jdGlvbiBoaWRkZW4oKSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQsXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgdmlld2VyID0gdGhpcy52aWV3ZXI7XG4gICAgaWYgKG9wdGlvbnMuZnVjdXMpIHtcbiAgICAgIHRoaXMuY2xlYXJFbmZvcmNlRm9jdXMoKTtcbiAgICB9XG4gICAgdGhpcy5mdWxsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnZpZXdlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNTaG93biA9IGZhbHNlO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICB0aGlzLnVuYmluZCgpO1xuICAgIGFkZENsYXNzKHZpZXdlciwgQ0xBU1NfSElERSk7XG4gICAgdmlld2VyLnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuICAgIHZpZXdlci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScpO1xuICAgIHZpZXdlci5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnKTtcbiAgICB2aWV3ZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgIHRoaXMucmVzZXRMaXN0KCk7XG4gICAgdGhpcy5yZXNldEltYWdlKCk7XG4gICAgdGhpcy5oaWRpbmcgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuZGVzdHJveWVkKSB7XG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLmhpZGRlbikpIHtcbiAgICAgICAgYWRkTGlzdGVuZXIoZWxlbWVudCwgRVZFTlRfSElEREVOLCBvcHRpb25zLmhpZGRlbiwge1xuICAgICAgICAgIG9uY2U6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBkaXNwYXRjaEV2ZW50KGVsZW1lbnQsIEVWRU5UX0hJRERFTiwgbnVsbCwge1xuICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICByZXF1ZXN0RnVsbHNjcmVlbjogZnVuY3Rpb24gcmVxdWVzdEZ1bGxzY3JlZW4ob3B0aW9ucykge1xuICAgIHZhciBkb2N1bWVudCA9IHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50O1xuICAgIGlmICh0aGlzLmZ1bGxlZCAmJiAhKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50IHx8IGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50IHx8IGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50IHx8IGRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnQpKSB7XG4gICAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICAvLyBFbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKClcbiAgICAgIGlmIChkb2N1bWVudEVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgLy8gQXZvaWQgVHlwZUVycm9yIHdoZW4gY29udmVydCBgb3B0aW9uc2AgdG8gZGljdGlvbmFyeVxuICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChvcHRpb25zKSkge1xuICAgICAgICAgIGRvY3VtZW50RWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbihvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudEVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKEVsZW1lbnQuQUxMT1dfS0VZQk9BUkRfSU5QVVQpO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICAgICAgZG9jdW1lbnRFbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvY3VtZW50RWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBleGl0RnVsbHNjcmVlbjogZnVuY3Rpb24gZXhpdEZ1bGxzY3JlZW4oKSB7XG4gICAgdmFyIGRvY3VtZW50ID0gdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gICAgaWYgKHRoaXMuZnVsbGVkICYmIChkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCB8fCBkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRWxlbWVudCB8fCBkb2N1bWVudC5tb3pGdWxsU2NyZWVuRWxlbWVudCB8fCBkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50KSkge1xuICAgICAgLy8gRG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKVxuICAgICAgaWYgKGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4pIHtcbiAgICAgICAgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xuICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNoYW5nZTogZnVuY3Rpb24gY2hhbmdlKGV2ZW50KSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBwb2ludGVycyA9IHRoaXMucG9pbnRlcnM7XG4gICAgdmFyIHBvaW50ZXIgPSBwb2ludGVyc1tPYmplY3Qua2V5cyhwb2ludGVycylbMF1dO1xuXG4gICAgLy8gSW4gdGhlIGNhc2Ugb2YgdGhlIGBwb2ludGVyc2Agb2JqZWN0IGlzIGVtcHR5ICgjNDIxKVxuICAgIGlmICghcG9pbnRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgb2Zmc2V0WCA9IHBvaW50ZXIuZW5kWCAtIHBvaW50ZXIuc3RhcnRYO1xuICAgIHZhciBvZmZzZXRZID0gcG9pbnRlci5lbmRZIC0gcG9pbnRlci5zdGFydFk7XG4gICAgc3dpdGNoICh0aGlzLmFjdGlvbikge1xuICAgICAgLy8gTW92ZSB0aGUgY3VycmVudCBpbWFnZVxuICAgICAgY2FzZSBBQ1RJT05fTU9WRTpcbiAgICAgICAgdGhpcy5tb3ZlKG9mZnNldFgsIG9mZnNldFksIGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIFpvb20gdGhlIGN1cnJlbnQgaW1hZ2VcbiAgICAgIGNhc2UgQUNUSU9OX1pPT006XG4gICAgICAgIHRoaXMuem9vbShnZXRNYXhab29tUmF0aW8ocG9pbnRlcnMpLCBmYWxzZSwgbnVsbCwgZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQUNUSU9OX1NXSVRDSDpcbiAgICAgICAge1xuICAgICAgICAgIHRoaXMuYWN0aW9uID0gJ3N3aXRjaGVkJztcbiAgICAgICAgICB2YXIgYWJzb2x1dGVPZmZzZXRYID0gTWF0aC5hYnMob2Zmc2V0WCk7XG4gICAgICAgICAgaWYgKGFic29sdXRlT2Zmc2V0WCA+IDEgJiYgYWJzb2x1dGVPZmZzZXRYID4gTWF0aC5hYnMob2Zmc2V0WSkpIHtcbiAgICAgICAgICAgIC8vIEVtcHR5IGBwb2ludGVyc2AgYXMgYHRvdWNoZW5kYCBldmVudCB3aWxsIG5vdCBiZSBmaXJlZCBhZnRlciBzd2lwZWQgaW4gaU9TIGJyb3dzZXJzLlxuICAgICAgICAgICAgdGhpcy5wb2ludGVycyA9IHt9O1xuICAgICAgICAgICAgaWYgKG9mZnNldFggPiAxKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJldihvcHRpb25zLmxvb3ApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvZmZzZXRYIDwgLTEpIHtcbiAgICAgICAgICAgICAgdGhpcy5uZXh0KG9wdGlvbnMubG9vcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGVcbiAgICBmb3JFYWNoKHBvaW50ZXJzLCBmdW5jdGlvbiAocCkge1xuICAgICAgcC5zdGFydFggPSBwLmVuZFg7XG4gICAgICBwLnN0YXJ0WSA9IHAuZW5kWTtcbiAgICB9KTtcbiAgfSxcbiAgaXNTd2l0Y2hhYmxlOiBmdW5jdGlvbiBpc1N3aXRjaGFibGUoKSB7XG4gICAgdmFyIGltYWdlRGF0YSA9IHRoaXMuaW1hZ2VEYXRhLFxuICAgICAgdmlld2VyRGF0YSA9IHRoaXMudmlld2VyRGF0YTtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggPiAxICYmIGltYWdlRGF0YS54ID49IDAgJiYgaW1hZ2VEYXRhLnkgPj0gMCAmJiBpbWFnZURhdGEud2lkdGggPD0gdmlld2VyRGF0YS53aWR0aCAmJiBpbWFnZURhdGEuaGVpZ2h0IDw9IHZpZXdlckRhdGEuaGVpZ2h0O1xuICB9XG59O1xuXG52YXIgQW5vdGhlclZpZXdlciA9IFdJTkRPVy5WaWV3ZXI7XG52YXIgZ2V0VW5pcXVlSUQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZCArPSAxO1xuICAgIHJldHVybiBpZDtcbiAgfTtcbn0oLTEpO1xudmFyIFZpZXdlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgVmlld2VyLlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgdGFyZ2V0IGVsZW1lbnQgZm9yIHZpZXdpbmcuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gLSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICAgKi9cbiAgZnVuY3Rpb24gVmlld2VyKGVsZW1lbnQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZpZXdlcik7XG4gICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IGlzIHJlcXVpcmVkIGFuZCBtdXN0IGJlIGFuIGVsZW1lbnQuJyk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zID0gYXNzaWduKHt9LCBERUZBVUxUUywgaXNQbGFpbk9iamVjdChvcHRpb25zKSAmJiBvcHRpb25zKTtcbiAgICB0aGlzLmFjdGlvbiA9IGZhbHNlO1xuICAgIHRoaXMuZmFkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5mdWxsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmhpZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaW1hZ2VDbGlja2VkID0gZmFsc2U7XG4gICAgdGhpcy5pbWFnZURhdGEgPSB7fTtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5vcHRpb25zLmluaXRpYWxWaWV3SW5kZXg7XG4gICAgdGhpcy5pc0ltZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNTaG93biA9IGZhbHNlO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgIHRoaXMucGxheWVkID0gZmFsc2U7XG4gICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgdGhpcy5wb2ludGVycyA9IHt9O1xuICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgICB0aGlzLnJvdGF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5zY2FsaW5nID0gZmFsc2U7XG4gICAgdGhpcy5zaG93aW5nID0gZmFsc2U7XG4gICAgdGhpcy50aW1lb3V0ID0gZmFsc2U7XG4gICAgdGhpcy50b29sdGlwcGluZyA9IGZhbHNlO1xuICAgIHRoaXMudmlld2VkID0gZmFsc2U7XG4gICAgdGhpcy52aWV3aW5nID0gZmFsc2U7XG4gICAgdGhpcy53aGVlbGluZyA9IGZhbHNlO1xuICAgIHRoaXMuem9vbWluZyA9IGZhbHNlO1xuICAgIHRoaXMucG9pbnRlck1vdmVkID0gZmFsc2U7XG4gICAgdGhpcy5pZCA9IGdldFVuaXF1ZUlEKCk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgX2NyZWF0ZUNsYXNzKFZpZXdlciwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgaWYgKGVsZW1lbnRbTkFNRVNQQUNFXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbGVtZW50W05BTUVTUEFDRV0gPSB0aGlzO1xuXG4gICAgICAvLyBUaGUgYGZvY3VzYCBvcHRpb24gcmVxdWlyZXMgdGhlIGBrZXlib2FyZGAgb3B0aW9uIHNldCB0byBgdHJ1ZWAuXG4gICAgICBpZiAob3B0aW9ucy5mb2N1cyAmJiAhb3B0aW9ucy5rZXlib2FyZCkge1xuICAgICAgICBvcHRpb25zLmZvY3VzID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgaXNJbWcgPSBlbGVtZW50LmxvY2FsTmFtZSA9PT0gJ2ltZyc7XG4gICAgICB2YXIgaW1hZ2VzID0gW107XG4gICAgICBmb3JFYWNoKGlzSW1nID8gW2VsZW1lbnRdIDogZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKSwgZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMuZmlsdGVyKSkge1xuICAgICAgICAgIGlmIChvcHRpb25zLmZpbHRlci5jYWxsKF90aGlzLCBpbWFnZSkpIHtcbiAgICAgICAgICAgIGltYWdlcy5wdXNoKGltYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoX3RoaXMuZ2V0SW1hZ2VVUkwoaW1hZ2UpKSB7XG4gICAgICAgICAgaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaXNJbWcgPSBpc0ltZztcbiAgICAgIHRoaXMubGVuZ3RoID0gaW1hZ2VzLmxlbmd0aDtcbiAgICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuICAgICAgdGhpcy5pbml0Qm9keSgpO1xuXG4gICAgICAvLyBPdmVycmlkZSBgdHJhbnNpdGlvbmAgb3B0aW9uIGlmIGl0IGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgIGlmIChpc1VuZGVmaW5lZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KE5BTUVTUEFDRSkuc3R5bGUudHJhbnNpdGlvbikpIHtcbiAgICAgICAgb3B0aW9ucy50cmFuc2l0aW9uID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucy5pbmxpbmUpIHtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgdmFyIHByb2dyZXNzID0gZnVuY3Rpb24gcHJvZ3Jlc3MoKSB7XG4gICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgICBpZiAoY291bnQgPT09IF90aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRpbWVvdXQ7XG4gICAgICAgICAgICBfdGhpcy5pbml0aWFsaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIF90aGlzLmRlbGF5aW5nID0ge1xuICAgICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gYWJvcnQoKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBidWlsZCBhc3luY2hyb25vdXNseSB0byBrZWVwIGB0aGlzLnZpZXdlcmAgaXMgYWNjZXNzaWJsZSBpbiBgcmVhZHlgIGV2ZW50IGhhbmRsZXIuXG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzLmRlbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIF90aGlzLmJ1aWxkKCk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6aW5nID0ge1xuICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiBhYm9ydCgpIHtcbiAgICAgICAgICAgIGZvckVhY2goaW1hZ2VzLCBmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgICAgICAgaWYgKCFpbWFnZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGltYWdlLCBFVkVOVF9MT0FELCBwcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoaW1hZ2UsIEVWRU5UX0VSUk9SLCBwcm9ncmVzcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yRWFjaChpbWFnZXMsIGZ1bmN0aW9uIChpbWFnZSkge1xuICAgICAgICAgIGlmIChpbWFnZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgcHJvZ3Jlc3MoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG9uTG9hZDtcbiAgICAgICAgICAgIHZhciBvbkVycm9yO1xuICAgICAgICAgICAgYWRkTGlzdGVuZXIoaW1hZ2UsIEVWRU5UX0xPQUQsIG9uTG9hZCA9IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoaW1hZ2UsIEVWRU5UX0VSUk9SLCBvbkVycm9yKTtcbiAgICAgICAgICAgICAgcHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhZGRMaXN0ZW5lcihpbWFnZSwgRVZFTlRfRVJST1IsIG9uRXJyb3IgPSBmdW5jdGlvbiBvbkVycm9yKCkge1xuICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcihpbWFnZSwgRVZFTlRfTE9BRCwgb25Mb2FkKTtcbiAgICAgICAgICAgICAgcHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZExpc3RlbmVyKGVsZW1lbnQsIEVWRU5UX0NMSUNLLCB0aGlzLm9uU3RhcnQgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgIHZhciB0YXJnZXQgPSBfcmVmLnRhcmdldDtcbiAgICAgICAgICBpZiAodGFyZ2V0LmxvY2FsTmFtZSA9PT0gJ2ltZycgJiYgKCFpc0Z1bmN0aW9uKG9wdGlvbnMuZmlsdGVyKSB8fCBvcHRpb25zLmZpbHRlci5jYWxsKF90aGlzLCB0YXJnZXQpKSkge1xuICAgICAgICAgICAgX3RoaXMudmlldyhfdGhpcy5pbWFnZXMuaW5kZXhPZih0YXJnZXQpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJidWlsZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBidWlsZCgpIHtcbiAgICAgIGlmICh0aGlzLnJlYWR5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50LFxuICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgdmFyIHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIHZhciB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gVEVNUExBVEU7XG4gICAgICB2YXIgdmlld2VyID0gdGVtcGxhdGUucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1jb250YWluZXJcIikpO1xuICAgICAgdmFyIHRpdGxlID0gdmlld2VyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItdGl0bGVcIikpO1xuICAgICAgdmFyIHRvb2xiYXIgPSB2aWV3ZXIucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoTkFNRVNQQUNFLCBcIi10b29sYmFyXCIpKTtcbiAgICAgIHZhciBuYXZiYXIgPSB2aWV3ZXIucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1uYXZiYXJcIikpO1xuICAgICAgdmFyIGJ1dHRvbiA9IHZpZXdlci5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLWJ1dHRvblwiKSk7XG4gICAgICB2YXIgY2FudmFzID0gdmlld2VyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItY2FudmFzXCIpKTtcbiAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgdGhpcy52aWV3ZXIgPSB2aWV3ZXI7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICB0aGlzLnRvb2xiYXIgPSB0b29sYmFyO1xuICAgICAgdGhpcy5uYXZiYXIgPSBuYXZiYXI7XG4gICAgICB0aGlzLmJ1dHRvbiA9IGJ1dHRvbjtcbiAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgdGhpcy5mb290ZXIgPSB2aWV3ZXIucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1mb290ZXJcIikpO1xuICAgICAgdGhpcy50b29sdGlwQm94ID0gdmlld2VyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItdG9vbHRpcFwiKSk7XG4gICAgICB0aGlzLnBsYXllciA9IHZpZXdlci5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiLXBsYXllclwiKSk7XG4gICAgICB0aGlzLmxpc3QgPSB2aWV3ZXIucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1saXN0XCIpKTtcbiAgICAgIHZpZXdlci5pZCA9IFwiXCIuY29uY2F0KE5BTUVTUEFDRSkuY29uY2F0KHRoaXMuaWQpO1xuICAgICAgdGl0bGUuaWQgPSBcIlwiLmNvbmNhdChOQU1FU1BBQ0UsIFwiVGl0bGVcIikuY29uY2F0KHRoaXMuaWQpO1xuICAgICAgYWRkQ2xhc3ModGl0bGUsICFvcHRpb25zLnRpdGxlID8gQ0xBU1NfSElERSA6IGdldFJlc3BvbnNpdmVDbGFzcyhBcnJheS5pc0FycmF5KG9wdGlvbnMudGl0bGUpID8gb3B0aW9ucy50aXRsZVswXSA6IG9wdGlvbnMudGl0bGUpKTtcbiAgICAgIGFkZENsYXNzKG5hdmJhciwgIW9wdGlvbnMubmF2YmFyID8gQ0xBU1NfSElERSA6IGdldFJlc3BvbnNpdmVDbGFzcyhvcHRpb25zLm5hdmJhcikpO1xuICAgICAgdG9nZ2xlQ2xhc3MoYnV0dG9uLCBDTEFTU19ISURFLCAhb3B0aW9ucy5idXR0b24pO1xuICAgICAgaWYgKG9wdGlvbnMua2V5Ym9hcmQpIHtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmJhY2tkcm9wKSB7XG4gICAgICAgIGFkZENsYXNzKHZpZXdlciwgXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1iYWNrZHJvcFwiKSk7XG4gICAgICAgIGlmICghb3B0aW9ucy5pbmxpbmUgJiYgb3B0aW9ucy5iYWNrZHJvcCAhPT0gJ3N0YXRpYycpIHtcbiAgICAgICAgICBzZXREYXRhKGNhbnZhcywgREFUQV9BQ1RJT04sICdoaWRlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc1N0cmluZyhvcHRpb25zLmNsYXNzTmFtZSkgJiYgb3B0aW9ucy5jbGFzc05hbWUpIHtcbiAgICAgICAgLy8gSW4gY2FzZSB0aGVyZSBhcmUgbXVsdGlwbGUgY2xhc3MgbmFtZXNcbiAgICAgICAgb3B0aW9ucy5jbGFzc05hbWUuc3BsaXQoUkVHRVhQX1NQQUNFUykuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgYWRkQ2xhc3Modmlld2VyLCBjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLnRvb2xiYXIpIHtcbiAgICAgICAgdmFyIGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB2YXIgY3VzdG9tID0gaXNQbGFpbk9iamVjdChvcHRpb25zLnRvb2xiYXIpO1xuICAgICAgICB2YXIgem9vbUJ1dHRvbnMgPSBCVVRUT05TLnNsaWNlKDAsIDMpO1xuICAgICAgICB2YXIgcm90YXRlQnV0dG9ucyA9IEJVVFRPTlMuc2xpY2UoNywgOSk7XG4gICAgICAgIHZhciBzY2FsZUJ1dHRvbnMgPSBCVVRUT05TLnNsaWNlKDkpO1xuICAgICAgICBpZiAoIWN1c3RvbSkge1xuICAgICAgICAgIGFkZENsYXNzKHRvb2xiYXIsIGdldFJlc3BvbnNpdmVDbGFzcyhvcHRpb25zLnRvb2xiYXIpKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JFYWNoKGN1c3RvbSA/IG9wdGlvbnMudG9vbGJhciA6IEJVVFRPTlMsIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICB2YXIgZGVlcCA9IGN1c3RvbSAmJiBpc1BsYWluT2JqZWN0KHZhbHVlKTtcbiAgICAgICAgICB2YXIgbmFtZSA9IGN1c3RvbSA/IGh5cGhlbmF0ZShpbmRleCkgOiB2YWx1ZTtcbiAgICAgICAgICB2YXIgc2hvdyA9IGRlZXAgJiYgIWlzVW5kZWZpbmVkKHZhbHVlLnNob3cpID8gdmFsdWUuc2hvdyA6IHZhbHVlO1xuICAgICAgICAgIGlmICghc2hvdyB8fCAhb3B0aW9ucy56b29tYWJsZSAmJiB6b29tQnV0dG9ucy5pbmRleE9mKG5hbWUpICE9PSAtMSB8fCAhb3B0aW9ucy5yb3RhdGFibGUgJiYgcm90YXRlQnV0dG9ucy5pbmRleE9mKG5hbWUpICE9PSAtMSB8fCAhb3B0aW9ucy5zY2FsYWJsZSAmJiBzY2FsZUJ1dHRvbnMuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHNpemUgPSBkZWVwICYmICFpc1VuZGVmaW5lZCh2YWx1ZS5zaXplKSA/IHZhbHVlLnNpemUgOiB2YWx1ZTtcbiAgICAgICAgICB2YXIgY2xpY2sgPSBkZWVwICYmICFpc1VuZGVmaW5lZCh2YWx1ZS5jbGljaykgPyB2YWx1ZS5jbGljayA6IHZhbHVlO1xuICAgICAgICAgIHZhciBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICBpZiAob3B0aW9ucy5rZXlib2FyZCkge1xuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xuICAgICAgICAgIGFkZENsYXNzKGl0ZW0sIFwiXCIuY29uY2F0KE5BTUVTUEFDRSwgXCItXCIpLmNvbmNhdChuYW1lKSk7XG4gICAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKGNsaWNrKSkge1xuICAgICAgICAgICAgc2V0RGF0YShpdGVtLCBEQVRBX0FDVElPTiwgbmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc051bWJlcihzaG93KSkge1xuICAgICAgICAgICAgYWRkQ2xhc3MoaXRlbSwgZ2V0UmVzcG9uc2l2ZUNsYXNzKHNob3cpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFsnc21hbGwnLCAnbGFyZ2UnXS5pbmRleE9mKHNpemUpICE9PSAtMSkge1xuICAgICAgICAgICAgYWRkQ2xhc3MoaXRlbSwgXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1cIikuY29uY2F0KHNpemUpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdwbGF5Jykge1xuICAgICAgICAgICAgYWRkQ2xhc3MoaXRlbSwgXCJcIi5jb25jYXQoTkFNRVNQQUNFLCBcIi1sYXJnZVwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGNsaWNrKSkge1xuICAgICAgICAgICAgYWRkTGlzdGVuZXIoaXRlbSwgRVZFTlRfQ0xJQ0ssIGNsaWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRvb2xiYXIuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRDbGFzcyh0b29sYmFyLCBDTEFTU19ISURFKTtcbiAgICAgIH1cbiAgICAgIGlmICghb3B0aW9ucy5yb3RhdGFibGUpIHtcbiAgICAgICAgdmFyIHJvdGF0ZXMgPSB0b29sYmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpW2NsYXNzKj1cInJvdGF0ZVwiXScpO1xuICAgICAgICBhZGRDbGFzcyhyb3RhdGVzLCBDTEFTU19JTlZJU0lCTEUpO1xuICAgICAgICBmb3JFYWNoKHJvdGF0ZXMsIGZ1bmN0aW9uIChyb3RhdGUpIHtcbiAgICAgICAgICB0b29sYmFyLmFwcGVuZENoaWxkKHJvdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMuaW5saW5lKSB7XG4gICAgICAgIGFkZENsYXNzKGJ1dHRvbiwgQ0xBU1NfRlVMTFNDUkVFTik7XG4gICAgICAgIHNldFN0eWxlKHZpZXdlciwge1xuICAgICAgICAgIHpJbmRleDogb3B0aW9ucy56SW5kZXhJbmxpbmVcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgICAgIHNldFN0eWxlKHBhcmVudCwge1xuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHZpZXdlciwgZWxlbWVudC5uZXh0U2libGluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRDbGFzcyhidXR0b24sIENMQVNTX0NMT1NFKTtcbiAgICAgICAgYWRkQ2xhc3Modmlld2VyLCBDTEFTU19GSVhFRCk7XG4gICAgICAgIGFkZENsYXNzKHZpZXdlciwgQ0xBU1NfRkFERSk7XG4gICAgICAgIGFkZENsYXNzKHZpZXdlciwgQ0xBU1NfSElERSk7XG4gICAgICAgIHNldFN0eWxlKHZpZXdlciwge1xuICAgICAgICAgIHpJbmRleDogb3B0aW9ucy56SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lcjtcbiAgICAgICAgaWYgKGlzU3RyaW5nKGNvbnRhaW5lcikpIHtcbiAgICAgICAgICBjb250YWluZXIgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgY29udGFpbmVyID0gdGhpcy5ib2R5O1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2aWV3ZXIpO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMuaW5saW5lKSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHRoaXMuYmluZCgpO1xuICAgICAgICB0aGlzLmlzU2hvd24gPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICBpZiAoaXNGdW5jdGlvbihvcHRpb25zLnJlYWR5KSkge1xuICAgICAgICBhZGRMaXN0ZW5lcihlbGVtZW50LCBFVkVOVF9SRUFEWSwgb3B0aW9ucy5yZWFkeSwge1xuICAgICAgICAgIG9uY2U6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoZGlzcGF0Y2hFdmVudChlbGVtZW50LCBFVkVOVF9SRUFEWSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmVhZHkgJiYgb3B0aW9ucy5pbmxpbmUpIHtcbiAgICAgICAgdGhpcy52aWV3KHRoaXMuaW5kZXgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbm8gY29uZmxpY3Qgdmlld2VyIGNsYXNzLlxuICAgICAqIEByZXR1cm5zIHtWaWV3ZXJ9IFRoZSB2aWV3ZXIgY2xhc3MuXG4gICAgICovXG4gIH1dLCBbe1xuICAgIGtleTogXCJub0NvbmZsaWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgICB3aW5kb3cuVmlld2VyID0gQW5vdGhlclZpZXdlcjtcbiAgICAgIHJldHVybiBWaWV3ZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRoZSBkZWZhdWx0IG9wdGlvbnMuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBUaGUgbmV3IGRlZmF1bHQgb3B0aW9ucy5cbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJzZXREZWZhdWx0c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREZWZhdWx0cyhvcHRpb25zKSB7XG4gICAgICBhc3NpZ24oREVGQVVMVFMsIGlzUGxhaW5PYmplY3Qob3B0aW9ucykgJiYgb3B0aW9ucyk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBWaWV3ZXI7XG59KCk7XG5hc3NpZ24oVmlld2VyLnByb3RvdHlwZSwgcmVuZGVyLCBldmVudHMsIGhhbmRsZXJzLCBtZXRob2RzLCBvdGhlcnMpO1xuXG5leHBvcnQgeyBWaWV3ZXIgYXMgZGVmYXVsdCB9O1xuIiwiLyohXG4gKiB2LXZpZXdlciB2My4wLjExXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWlyYXJpL3Ytdmlld2VyI3JlYWRtZVxuICpcbiAqIENvcHlyaWdodCAyMDIyIG1pcmFyaVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKlxuICogRGF0ZTogMjAyMi0xMC0yNVQwODo0OTozMy4zMDFaXG4gKi9cbmltcG9ydCBWaWV3ZXIgZnJvbSBcInZpZXdlcmpzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZpZXdlciB9IGZyb20gXCJ2aWV3ZXJqc1wiO1xuaW1wb3J0IHsgaCwgcmVuZGVyLCB3YXRjaCwgbmV4dFRpY2ssIGRlZmluZUNvbXBvbmVudCwgcmVmLCBvbk1vdW50ZWQsIG9uVW5tb3VudGVkLCBvcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jaywgcmVuZGVyU2xvdCB9IGZyb20gXCJ2dWVcIjtcbnZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsVGhpcyA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDoge307XG5mdW5jdGlvbiBpZGVudGl0eSQyKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cbnZhciBpZGVudGl0eV8xID0gaWRlbnRpdHkkMjtcbmZ1bmN0aW9uIGFwcGx5JDEoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cbnZhciBfYXBwbHkgPSBhcHBseSQxO1xudmFyIGFwcGx5ID0gX2FwcGx5O1xudmFyIG5hdGl2ZU1heCQxID0gTWF0aC5tYXg7XG5mdW5jdGlvbiBvdmVyUmVzdCQxKGZ1bmMsIHN0YXJ0LCB0cmFuc2Zvcm0pIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgkMShzdGFydCA9PT0gdm9pZCAwID8gZnVuYy5sZW5ndGggLSAxIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsIGluZGV4MiA9IC0xLCBsZW5ndGggPSBuYXRpdmVNYXgkMShhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSwgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuICAgIHdoaWxlICgrK2luZGV4MiA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXgyXSA9IGFyZ3Nbc3RhcnQgKyBpbmRleDJdO1xuICAgIH1cbiAgICBpbmRleDIgPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleDIgPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4Ml0gPSBhcmdzW2luZGV4Ml07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxudmFyIF9vdmVyUmVzdCA9IG92ZXJSZXN0JDE7XG5mdW5jdGlvbiBjb25zdGFudCQxKHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59XG52YXIgY29uc3RhbnRfMSA9IGNvbnN0YW50JDE7XG52YXIgZnJlZUdsb2JhbCQxID0gdHlwZW9mIGNvbW1vbmpzR2xvYmFsID09IFwib2JqZWN0XCIgJiYgY29tbW9uanNHbG9iYWwgJiYgY29tbW9uanNHbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgY29tbW9uanNHbG9iYWw7XG52YXIgX2ZyZWVHbG9iYWwgPSBmcmVlR2xvYmFsJDE7XG52YXIgZnJlZUdsb2JhbCA9IF9mcmVlR2xvYmFsO1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gXCJvYmplY3RcIiAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcbnZhciByb290JDMgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbnZhciBfcm9vdCA9IHJvb3QkMztcbnZhciByb290JDIgPSBfcm9vdDtcbnZhciBTeW1ib2wkMyA9IHJvb3QkMi5TeW1ib2w7XG52YXIgX1N5bWJvbCA9IFN5bWJvbCQzO1xudmFyIFN5bWJvbCQyID0gX1N5bWJvbDtcbnZhciBvYmplY3RQcm90byQ3ID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBoYXNPd25Qcm9wZXJ0eSQ1ID0gb2JqZWN0UHJvdG8kNy5oYXNPd25Qcm9wZXJ0eTtcbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyQxID0gb2JqZWN0UHJvdG8kNy50b1N0cmluZztcbnZhciBzeW1Ub1N0cmluZ1RhZyQxID0gU3ltYm9sJDIgPyBTeW1ib2wkMi50b1N0cmluZ1RhZyA6IHZvaWQgMDtcbmZ1bmN0aW9uIGdldFJhd1RhZyQxKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5JDUuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWckMSksIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnJDFdO1xuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnJDFdID0gdm9pZCAwO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmckMS5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZyQxXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnJDFdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxudmFyIF9nZXRSYXdUYWcgPSBnZXRSYXdUYWckMTtcbnZhciBvYmplY3RQcm90byQ2ID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvJDYudG9TdHJpbmc7XG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyQxKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cbnZhciBfb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RUb1N0cmluZyQxO1xudmFyIFN5bWJvbCQxID0gX1N5bWJvbCwgZ2V0UmF3VGFnID0gX2dldFJhd1RhZywgb2JqZWN0VG9TdHJpbmcgPSBfb2JqZWN0VG9TdHJpbmc7XG52YXIgbnVsbFRhZyA9IFwiW29iamVjdCBOdWxsXVwiLCB1bmRlZmluZWRUYWcgPSBcIltvYmplY3QgVW5kZWZpbmVkXVwiO1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sJDEgPyBTeW1ib2wkMS50b1N0cmluZ1RhZyA6IHZvaWQgMDtcbmZ1bmN0aW9uIGJhc2VHZXRUYWckNCh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdm9pZCAwID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSA/IGdldFJhd1RhZyh2YWx1ZSkgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG52YXIgX2Jhc2VHZXRUYWcgPSBiYXNlR2V0VGFnJDQ7XG5mdW5jdGlvbiBpc09iamVjdCQ3KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSBcIm9iamVjdFwiIHx8IHR5cGUgPT0gXCJmdW5jdGlvblwiKTtcbn1cbnZhciBpc09iamVjdF8xID0gaXNPYmplY3QkNztcbnZhciBiYXNlR2V0VGFnJDMgPSBfYmFzZUdldFRhZywgaXNPYmplY3QkNiA9IGlzT2JqZWN0XzE7XG52YXIgYXN5bmNUYWcgPSBcIltvYmplY3QgQXN5bmNGdW5jdGlvbl1cIiwgZnVuY1RhZyQxID0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiLCBnZW5UYWcgPSBcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCIsIHByb3h5VGFnID0gXCJbb2JqZWN0IFByb3h5XVwiO1xuZnVuY3Rpb24gaXNGdW5jdGlvbiQyKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QkNih2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWckMyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyQxIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cbnZhciBpc0Z1bmN0aW9uXzEgPSBpc0Z1bmN0aW9uJDI7XG52YXIgcm9vdCQxID0gX3Jvb3Q7XG52YXIgY29yZUpzRGF0YSQxID0gcm9vdCQxW1wiX19jb3JlLWpzX3NoYXJlZF9fXCJdO1xudmFyIF9jb3JlSnNEYXRhID0gY29yZUpzRGF0YSQxO1xudmFyIGNvcmVKc0RhdGEgPSBfY29yZUpzRGF0YTtcbnZhciBtYXNrU3JjS2V5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCBcIlwiKTtcbiAgcmV0dXJuIHVpZCA/IFwiU3ltYm9sKHNyYylfMS5cIiArIHVpZCA6IFwiXCI7XG59KCk7XG5mdW5jdGlvbiBpc01hc2tlZCQxKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiBtYXNrU3JjS2V5IGluIGZ1bmM7XG59XG52YXIgX2lzTWFza2VkID0gaXNNYXNrZWQkMTtcbnZhciBmdW5jUHJvdG8kMSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBmdW5jVG9TdHJpbmckMSA9IGZ1bmNQcm90byQxLnRvU3RyaW5nO1xuZnVuY3Rpb24gdG9Tb3VyY2UkMShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZyQxLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmMgKyBcIlwiO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFwiXCI7XG59XG52YXIgX3RvU291cmNlID0gdG9Tb3VyY2UkMTtcbnZhciBpc0Z1bmN0aW9uJDEgPSBpc0Z1bmN0aW9uXzEsIGlzTWFza2VkID0gX2lzTWFza2VkLCBpc09iamVjdCQ1ID0gaXNPYmplY3RfMSwgdG9Tb3VyY2UgPSBfdG9Tb3VyY2U7XG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLCBvYmplY3RQcm90byQ1ID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG52YXIgaGFzT3duUHJvcGVydHkkNCA9IG9iamVjdFByb3RvJDUuaGFzT3duUHJvcGVydHk7XG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cChcIl5cIiArIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5JDQpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCBcIlxcXFwkJlwiKS5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCBcIiQxLio/XCIpICsgXCIkXCIpO1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlJDEodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCQ1KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uJDEodmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxudmFyIF9iYXNlSXNOYXRpdmUgPSBiYXNlSXNOYXRpdmUkMTtcbmZ1bmN0aW9uIGdldFZhbHVlJDEob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdm9pZCAwIDogb2JqZWN0W2tleV07XG59XG52YXIgX2dldFZhbHVlID0gZ2V0VmFsdWUkMTtcbnZhciBiYXNlSXNOYXRpdmUgPSBfYmFzZUlzTmF0aXZlLCBnZXRWYWx1ZSA9IF9nZXRWYWx1ZTtcbmZ1bmN0aW9uIGdldE5hdGl2ZSQxKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHZvaWQgMDtcbn1cbnZhciBfZ2V0TmF0aXZlID0gZ2V0TmF0aXZlJDE7XG52YXIgZ2V0TmF0aXZlID0gX2dldE5hdGl2ZTtcbnZhciBkZWZpbmVQcm9wZXJ0eSQxID0gZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCBcImRlZmluZVByb3BlcnR5XCIpO1xuICAgIGZ1bmMoe30sIFwiXCIsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge1xuICB9XG59KCk7XG52YXIgX2RlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHkkMTtcbnZhciBjb25zdGFudCA9IGNvbnN0YW50XzEsIGRlZmluZVByb3BlcnR5ID0gX2RlZmluZVByb3BlcnR5LCBpZGVudGl0eSQxID0gaWRlbnRpdHlfMTtcbnZhciBiYXNlU2V0VG9TdHJpbmckMSA9ICFkZWZpbmVQcm9wZXJ0eSA/IGlkZW50aXR5JDEgOiBmdW5jdGlvbihmdW5jLCBzdHJpbmcpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmMsIFwidG9TdHJpbmdcIiwge1xuICAgIFwiY29uZmlndXJhYmxlXCI6IHRydWUsXG4gICAgXCJlbnVtZXJhYmxlXCI6IGZhbHNlLFxuICAgIFwidmFsdWVcIjogY29uc3RhbnQoc3RyaW5nKSxcbiAgICBcIndyaXRhYmxlXCI6IHRydWVcbiAgfSk7XG59O1xudmFyIF9iYXNlU2V0VG9TdHJpbmcgPSBiYXNlU2V0VG9TdHJpbmckMTtcbnZhciBIT1RfQ09VTlQgPSA4MDAsIEhPVF9TUEFOID0gMTY7XG52YXIgbmF0aXZlTm93ID0gRGF0ZS5ub3c7XG5mdW5jdGlvbiBzaG9ydE91dCQxKGZ1bmMpIHtcbiAgdmFyIGNvdW50ID0gMCwgbGFzdENhbGxlZCA9IDA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhbXAgPSBuYXRpdmVOb3coKSwgcmVtYWluaW5nID0gSE9UX1NQQU4gLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKTtcbiAgICBsYXN0Q2FsbGVkID0gc3RhbXA7XG4gICAgaWYgKHJlbWFpbmluZyA+IDApIHtcbiAgICAgIGlmICgrK2NvdW50ID49IEhPVF9DT1VOVCkge1xuICAgICAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBmdW5jLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cbnZhciBfc2hvcnRPdXQgPSBzaG9ydE91dCQxO1xudmFyIGJhc2VTZXRUb1N0cmluZyA9IF9iYXNlU2V0VG9TdHJpbmcsIHNob3J0T3V0ID0gX3Nob3J0T3V0O1xudmFyIHNldFRvU3RyaW5nJDEgPSBzaG9ydE91dChiYXNlU2V0VG9TdHJpbmcpO1xudmFyIF9zZXRUb1N0cmluZyA9IHNldFRvU3RyaW5nJDE7XG52YXIgaWRlbnRpdHkgPSBpZGVudGl0eV8xLCBvdmVyUmVzdCA9IF9vdmVyUmVzdCwgc2V0VG9TdHJpbmcgPSBfc2V0VG9TdHJpbmc7XG5mdW5jdGlvbiBiYXNlUmVzdCQxKGZ1bmMsIHN0YXJ0KSB7XG4gIHJldHVybiBzZXRUb1N0cmluZyhvdmVyUmVzdChmdW5jLCBzdGFydCwgaWRlbnRpdHkpLCBmdW5jICsgXCJcIik7XG59XG52YXIgX2Jhc2VSZXN0ID0gYmFzZVJlc3QkMTtcbmZ1bmN0aW9uIGVxJDIodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbn1cbnZhciBlcV8xID0gZXEkMjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSJDEgPSA5MDA3MTk5MjU0NzQwOTkxO1xuZnVuY3Rpb24gaXNMZW5ndGgkMih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09IFwibnVtYmVyXCIgJiYgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSJDE7XG59XG52YXIgaXNMZW5ndGhfMSA9IGlzTGVuZ3RoJDI7XG52YXIgaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb25fMSwgaXNMZW5ndGgkMSA9IGlzTGVuZ3RoXzE7XG5mdW5jdGlvbiBpc0FycmF5TGlrZSQyKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoJDEodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG52YXIgaXNBcnJheUxpa2VfMSA9IGlzQXJyYXlMaWtlJDI7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuZnVuY3Rpb24gaXNJbmRleCQyKHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmICh0eXBlID09IFwibnVtYmVyXCIgfHwgdHlwZSAhPSBcInN5bWJvbFwiICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJiAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG52YXIgX2lzSW5kZXggPSBpc0luZGV4JDI7XG52YXIgZXEkMSA9IGVxXzEsIGlzQXJyYXlMaWtlJDEgPSBpc0FycmF5TGlrZV8xLCBpc0luZGV4JDEgPSBfaXNJbmRleCwgaXNPYmplY3QkNCA9IGlzT2JqZWN0XzE7XG5mdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCQxKHZhbHVlLCBpbmRleDIsIG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0JDQob2JqZWN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiBpbmRleDI7XG4gIGlmICh0eXBlID09IFwibnVtYmVyXCIgPyBpc0FycmF5TGlrZSQxKG9iamVjdCkgJiYgaXNJbmRleCQxKGluZGV4Miwgb2JqZWN0Lmxlbmd0aCkgOiB0eXBlID09IFwic3RyaW5nXCIgJiYgaW5kZXgyIGluIG9iamVjdCkge1xuICAgIHJldHVybiBlcSQxKG9iamVjdFtpbmRleDJdLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxudmFyIF9pc0l0ZXJhdGVlQ2FsbCA9IGlzSXRlcmF0ZWVDYWxsJDE7XG5mdW5jdGlvbiBiYXNlVGltZXMkMShuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXgyID0gLTEsIHJlc3VsdCA9IEFycmF5KG4pO1xuICB3aGlsZSAoKytpbmRleDIgPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4Ml0gPSBpdGVyYXRlZShpbmRleDIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG52YXIgX2Jhc2VUaW1lcyA9IGJhc2VUaW1lcyQxO1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlJDQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCI7XG59XG52YXIgaXNPYmplY3RMaWtlXzEgPSBpc09iamVjdExpa2UkNDtcbnZhciBiYXNlR2V0VGFnJDIgPSBfYmFzZUdldFRhZywgaXNPYmplY3RMaWtlJDMgPSBpc09iamVjdExpa2VfMTtcbnZhciBhcmdzVGFnJDEgPSBcIltvYmplY3QgQXJndW1lbnRzXVwiO1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzJDEodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSQzKHZhbHVlKSAmJiBiYXNlR2V0VGFnJDIodmFsdWUpID09IGFyZ3NUYWckMTtcbn1cbnZhciBfYmFzZUlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzJDE7XG52YXIgYmFzZUlzQXJndW1lbnRzID0gX2Jhc2VJc0FyZ3VtZW50cywgaXNPYmplY3RMaWtlJDIgPSBpc09iamVjdExpa2VfMTtcbnZhciBvYmplY3RQcm90byQ0ID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBoYXNPd25Qcm9wZXJ0eSQzID0gb2JqZWN0UHJvdG8kNC5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvJDQucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgaXNBcmd1bWVudHMkMSA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cztcbn0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlJDIodmFsdWUpICYmIGhhc093blByb3BlcnR5JDMuY2FsbCh2YWx1ZSwgXCJjYWxsZWVcIikgJiYgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsIFwiY2FsbGVlXCIpO1xufTtcbnZhciBpc0FyZ3VtZW50c18xID0gaXNBcmd1bWVudHMkMTtcbnZhciBpc0FycmF5JDEgPSBBcnJheS5pc0FycmF5O1xudmFyIGlzQXJyYXlfMSA9IGlzQXJyYXkkMTtcbnZhciBpc0J1ZmZlciQxID0geyBleHBvcnRzOiB7fSB9O1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG52YXIgc3R1YkZhbHNlXzEgPSBzdHViRmFsc2U7XG4oZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG4gIHZhciByb290MiA9IF9yb290LCBzdHViRmFsc2UyID0gc3R1YkZhbHNlXzE7XG4gIHZhciBmcmVlRXhwb3J0cyA9IGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcbiAgdmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0cnVlICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcbiAgdmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG4gIHZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdDIuQnVmZmVyIDogdm9pZCAwO1xuICB2YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB2b2lkIDA7XG4gIHZhciBpc0J1ZmZlcjIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2UyO1xuICBtb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyMjtcbn0pKGlzQnVmZmVyJDEsIGlzQnVmZmVyJDEuZXhwb3J0cyk7XG52YXIgYmFzZUdldFRhZyQxID0gX2Jhc2VHZXRUYWcsIGlzTGVuZ3RoID0gaXNMZW5ndGhfMSwgaXNPYmplY3RMaWtlJDEgPSBpc09iamVjdExpa2VfMTtcbnZhciBhcmdzVGFnID0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIiwgYXJyYXlUYWcgPSBcIltvYmplY3QgQXJyYXldXCIsIGJvb2xUYWcgPSBcIltvYmplY3QgQm9vbGVhbl1cIiwgZGF0ZVRhZyA9IFwiW29iamVjdCBEYXRlXVwiLCBlcnJvclRhZyA9IFwiW29iamVjdCBFcnJvcl1cIiwgZnVuY1RhZyA9IFwiW29iamVjdCBGdW5jdGlvbl1cIiwgbWFwVGFnID0gXCJbb2JqZWN0IE1hcF1cIiwgbnVtYmVyVGFnID0gXCJbb2JqZWN0IE51bWJlcl1cIiwgb2JqZWN0VGFnID0gXCJbb2JqZWN0IE9iamVjdF1cIiwgcmVnZXhwVGFnID0gXCJbb2JqZWN0IFJlZ0V4cF1cIiwgc2V0VGFnID0gXCJbb2JqZWN0IFNldF1cIiwgc3RyaW5nVGFnID0gXCJbb2JqZWN0IFN0cmluZ11cIiwgd2Vha01hcFRhZyA9IFwiW29iamVjdCBXZWFrTWFwXVwiO1xudmFyIGFycmF5QnVmZmVyVGFnID0gXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiLCBkYXRhVmlld1RhZyA9IFwiW29iamVjdCBEYXRhVmlld11cIiwgZmxvYXQzMlRhZyA9IFwiW29iamVjdCBGbG9hdDMyQXJyYXldXCIsIGZsb2F0NjRUYWcgPSBcIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiLCBpbnQ4VGFnID0gXCJbb2JqZWN0IEludDhBcnJheV1cIiwgaW50MTZUYWcgPSBcIltvYmplY3QgSW50MTZBcnJheV1cIiwgaW50MzJUYWcgPSBcIltvYmplY3QgSW50MzJBcnJheV1cIiwgdWludDhUYWcgPSBcIltvYmplY3QgVWludDhBcnJheV1cIiwgdWludDhDbGFtcGVkVGFnID0gXCJbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XVwiLCB1aW50MTZUYWcgPSBcIltvYmplY3QgVWludDE2QXJyYXldXCIsIHVpbnQzMlRhZyA9IFwiW29iamVjdCBVaW50MzJBcnJheV1cIjtcbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID0gdHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID0gdHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkkMSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlJDEodmFsdWUpICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnJDEodmFsdWUpXTtcbn1cbnZhciBfYmFzZUlzVHlwZWRBcnJheSA9IGJhc2VJc1R5cGVkQXJyYXkkMTtcbmZ1bmN0aW9uIGJhc2VVbmFyeSQxKGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxudmFyIF9iYXNlVW5hcnkgPSBiYXNlVW5hcnkkMTtcbnZhciBfbm9kZVV0aWwgPSB7IGV4cG9ydHM6IHt9IH07XG4oZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG4gIHZhciBmcmVlR2xvYmFsMiA9IF9mcmVlR2xvYmFsO1xuICB2YXIgZnJlZUV4cG9ydHMgPSBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG4gIHZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHJ1ZSAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG4gIHZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuICB2YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwyLnByb2Nlc3M7XG4gIHZhciBub2RlVXRpbDIgPSBmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHR5cGVzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlKFwidXRpbFwiKS50eXBlcztcbiAgICAgIGlmICh0eXBlcykge1xuICAgICAgICByZXR1cm4gdHlwZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKFwidXRpbFwiKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgfVxuICB9KCk7XG4gIG1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWwyO1xufSkoX25vZGVVdGlsLCBfbm9kZVV0aWwuZXhwb3J0cyk7XG52YXIgYmFzZUlzVHlwZWRBcnJheSA9IF9iYXNlSXNUeXBlZEFycmF5LCBiYXNlVW5hcnkgPSBfYmFzZVVuYXJ5LCBub2RlVXRpbCA9IF9ub2RlVXRpbC5leHBvcnRzO1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG52YXIgaXNUeXBlZEFycmF5JDEgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcbnZhciBpc1R5cGVkQXJyYXlfMSA9IGlzVHlwZWRBcnJheSQxO1xudmFyIGJhc2VUaW1lcyA9IF9iYXNlVGltZXMsIGlzQXJndW1lbnRzID0gaXNBcmd1bWVudHNfMSwgaXNBcnJheSA9IGlzQXJyYXlfMSwgaXNCdWZmZXIgPSBpc0J1ZmZlciQxLmV4cG9ydHMsIGlzSW5kZXggPSBfaXNJbmRleCwgaXNUeXBlZEFycmF5ID0gaXNUeXBlZEFycmF5XzE7XG52YXIgb2JqZWN0UHJvdG8kMyA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgaGFzT3duUHJvcGVydHkkMiA9IG9iamVjdFByb3RvJDMuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzJDEodmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSwgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLCBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSwgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSwgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5JDIuY2FsbCh2YWx1ZSwga2V5KSkgJiYgIShza2lwSW5kZXhlcyAmJiAoa2V5ID09IFwibGVuZ3RoXCIgfHwgaXNCdWZmICYmIChrZXkgPT0gXCJvZmZzZXRcIiB8fCBrZXkgPT0gXCJwYXJlbnRcIikgfHwgaXNUeXBlICYmIChrZXkgPT0gXCJidWZmZXJcIiB8fCBrZXkgPT0gXCJieXRlTGVuZ3RoXCIgfHwga2V5ID09IFwiYnl0ZU9mZnNldFwiKSB8fCBpc0luZGV4KGtleSwgbGVuZ3RoKSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxudmFyIF9hcnJheUxpa2VLZXlzID0gYXJyYXlMaWtlS2V5cyQxO1xudmFyIG9iamVjdFByb3RvJDIgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaXNQcm90b3R5cGUkMSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLCBwcm90byA9IHR5cGVvZiBDdG9yID09IFwiZnVuY3Rpb25cIiAmJiBDdG9yLnByb3RvdHlwZSB8fCBvYmplY3RQcm90byQyO1xuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxudmFyIF9pc1Byb3RvdHlwZSA9IGlzUHJvdG90eXBlJDE7XG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4kMShvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG52YXIgX25hdGl2ZUtleXNJbiA9IG5hdGl2ZUtleXNJbiQxO1xudmFyIGlzT2JqZWN0JDMgPSBpc09iamVjdF8xLCBpc1Byb3RvdHlwZSA9IF9pc1Byb3RvdHlwZSwgbmF0aXZlS2V5c0luID0gX25hdGl2ZUtleXNJbjtcbnZhciBvYmplY3RQcm90byQxID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBoYXNPd25Qcm9wZXJ0eSQxID0gb2JqZWN0UHJvdG8kMS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGJhc2VLZXlzSW4kMShvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdCQzKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLCByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSBcImNvbnN0cnVjdG9yXCIgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5JDEuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbnZhciBfYmFzZUtleXNJbiA9IGJhc2VLZXlzSW4kMTtcbnZhciBhcnJheUxpa2VLZXlzID0gX2FycmF5TGlrZUtleXMsIGJhc2VLZXlzSW4gPSBfYmFzZUtleXNJbiwgaXNBcnJheUxpa2UgPSBpc0FycmF5TGlrZV8xO1xuZnVuY3Rpb24ga2V5c0luJDEob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QsIHRydWUpIDogYmFzZUtleXNJbihvYmplY3QpO1xufVxudmFyIGtleXNJbl8xID0ga2V5c0luJDE7XG52YXIgYmFzZVJlc3QgPSBfYmFzZVJlc3QsIGVxID0gZXFfMSwgaXNJdGVyYXRlZUNhbGwgPSBfaXNJdGVyYXRlZUNhbGwsIGtleXNJbiA9IGtleXNJbl8xO1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xudmFyIGRlZmF1bHRzID0gYmFzZVJlc3QoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2VzKSB7XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB2YXIgaW5kZXgyID0gLTE7XG4gIHZhciBsZW5ndGggPSBzb3VyY2VzLmxlbmd0aDtcbiAgdmFyIGd1YXJkID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbMl0gOiB2b2lkIDA7XG4gIGlmIChndWFyZCAmJiBpc0l0ZXJhdGVlQ2FsbChzb3VyY2VzWzBdLCBzb3VyY2VzWzFdLCBndWFyZCkpIHtcbiAgICBsZW5ndGggPSAxO1xuICB9XG4gIHdoaWxlICgrK2luZGV4MiA8IGxlbmd0aCkge1xuICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2luZGV4Ml07XG4gICAgdmFyIHByb3BzID0ga2V5c0luKHNvdXJjZSk7XG4gICAgdmFyIHByb3BzSW5kZXggPSAtMTtcbiAgICB2YXIgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGg7XG4gICAgd2hpbGUgKCsrcHJvcHNJbmRleCA8IHByb3BzTGVuZ3RoKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbcHJvcHNJbmRleF07XG4gICAgICB2YXIgdmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwIHx8IGVxKHZhbHVlLCBvYmplY3RQcm90b1trZXldKSAmJiAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgb2JqZWN0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn0pO1xudmFyIGRlZmF1bHRzXzEgPSBkZWZhdWx0cztcbmNvbnN0IGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93ICE9PSBudWxsO1xuY2hlY2tJbnRlcnNlY3Rpb25PYnNlcnZlcigpO1xuY29uc3QgaXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbmNvbnN0IGdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuZnVuY3Rpb24gaXNPYmplY3QkMih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwiZnVuY3Rpb25cIiB8fCB0b1N0cmluZy5jYWxsKHZhbCkgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XG59XG5mdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgPyB2YWwgPT09IG51bGwgOiB0eXBlb2YgdmFsICE9PSBcImZ1bmN0aW9uXCI7XG59XG5mdW5jdGlvbiBpc1ZhbGlkS2V5KGtleSkge1xuICByZXR1cm4ga2V5ICE9PSBcIl9fcHJvdG9fX1wiICYmIGtleSAhPT0gXCJjb25zdHJ1Y3RvclwiICYmIGtleSAhPT0gXCJwcm90b3R5cGVcIjtcbn1cbmZ1bmN0aW9uIGNoZWNrSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKSB7XG4gIGlmIChpbkJyb3dzZXIgJiYgXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdyAmJiBcIkludGVyc2VjdGlvbk9ic2VydmVyRW50cnlcIiBpbiB3aW5kb3cgJiYgXCJpbnRlcnNlY3Rpb25SYXRpb1wiIGluIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5LnByb3RvdHlwZSkge1xuICAgIGlmICghKFwiaXNJbnRlcnNlY3RpbmdcIiBpbiB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGUpKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlLCBcImlzSW50ZXJzZWN0aW5nXCIsIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGFzc2lnblN5bWJvbHModGFyZ2V0LCAuLi5hcmdzKSB7XG4gIGlmICghaXNPYmplY3QkMih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImV4cGVjdGVkIHRoZSBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3RcIik7XG4gIH1cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAwIHx8IHR5cGVvZiBTeW1ib2wgIT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgZ2V0U3ltYm9scyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuICBmb3IgKGNvbnN0IGFyZyBvZiBhcmdzKSB7XG4gICAgY29uc3QgbmFtZXMgPSBnZXRTeW1ib2xzKGFyZyk7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgbmFtZXMpIHtcbiAgICAgIGlmIChpc0VudW1lcmFibGUuY2FsbChhcmcsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBhcmdba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgbGV0IGkgPSAwO1xuICBpZiAoaXNQcmltaXRpdmUodGFyZ2V0KSlcbiAgICB0YXJnZXQgPSBhcmdzW2krK107XG4gIGlmICghdGFyZ2V0KVxuICAgIHRhcmdldCA9IHt9O1xuICBmb3IgKDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaXNPYmplY3QkMihhcmdzW2ldKSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoYXJnc1tpXSkpIHtcbiAgICAgICAgaWYgKGlzVmFsaWRLZXkoa2V5KSkge1xuICAgICAgICAgIGlmIChpc09iamVjdCQyKHRhcmdldFtrZXldKSAmJiBpc09iamVjdCQyKGFyZ3NbaV1ba2V5XSkpIHtcbiAgICAgICAgICAgIGFzc2lnbih0YXJnZXRba2V5XSwgYXJnc1tpXVtrZXldKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBhcmdzW2ldW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhc3NpZ25TeW1ib2xzKHRhcmdldCwgYXJnc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBhcGkgPSAoeyBpbWFnZXMgPSBbXSwgb3B0aW9ucyB9KSA9PiB7XG4gIG9wdGlvbnMgPSBhc3NpZ24ob3B0aW9ucywge1xuICAgIGlubGluZTogZmFsc2VcbiAgfSk7XG4gIGNvbnN0IHRva2VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgVmlld2VyVG9rZW4gPSBoKFwiZGl2XCIsIHtcbiAgICBzdHlsZToge1xuICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICB9LFxuICAgIGNsYXNzOiBbXCJfX3ZpZXdlci10b2tlblwiXVxuICB9LCBpbWFnZXMubWFwKChhdHRyKSA9PiB7XG4gICAgcmV0dXJuIGgoXCJpbWdcIiwgdHlwZW9mIGF0dHIgPT09IFwic3RyaW5nXCIgPyB7IHNyYzogYXR0ciB9IDogYXR0cik7XG4gIH0pKTtcbiAgcmVuZGVyKFZpZXdlclRva2VuLCB0b2tlbik7XG4gIGNvbnN0IHRva2VuRWxlbWVudCA9IHRva2VuLmZpcnN0RWxlbWVudENoaWxkO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRva2VuRWxlbWVudCk7XG4gIGNvbnN0ICR2aWV3ZXJKcyA9IG5ldyBWaWV3ZXIodG9rZW5FbGVtZW50LCBvcHRpb25zKTtcbiAgY29uc3QgJGRlc3Ryb3kgPSAkdmlld2VySnMuZGVzdHJveS5iaW5kKCR2aWV3ZXJKcyk7XG4gICR2aWV3ZXJKcy5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgJGRlc3Ryb3koKTtcbiAgICByZW5kZXIobnVsbCwgdG9rZW4pO1xuICAgIHJldHVybiAkdmlld2VySnM7XG4gIH07XG4gICR2aWV3ZXJKcy5zaG93KCk7XG4gIHRva2VuRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaGlkZGVuXCIsIGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnZpZXdlciA9PT0gJHZpZXdlckpzKSB7XG4gICAgICAkdmlld2VySnMuZGVzdHJveSgpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiAkdmlld2VySnM7XG59O1xudmFyIHJvb3QgPSBfcm9vdDtcbnZhciBub3ckMSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcbnZhciBub3dfMSA9IG5vdyQxO1xudmFyIHJlV2hpdGVzcGFjZSA9IC9cXHMvO1xuZnVuY3Rpb24gdHJpbW1lZEVuZEluZGV4JDEoc3RyaW5nKSB7XG4gIHZhciBpbmRleDIgPSBzdHJpbmcubGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgyLS0gJiYgcmVXaGl0ZXNwYWNlLnRlc3Qoc3RyaW5nLmNoYXJBdChpbmRleDIpKSkge1xuICB9XG4gIHJldHVybiBpbmRleDI7XG59XG52YXIgX3RyaW1tZWRFbmRJbmRleCA9IHRyaW1tZWRFbmRJbmRleCQxO1xudmFyIHRyaW1tZWRFbmRJbmRleCA9IF90cmltbWVkRW5kSW5kZXg7XG52YXIgcmVUcmltU3RhcnQgPSAvXlxccysvO1xuZnVuY3Rpb24gYmFzZVRyaW0kMShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZyA/IHN0cmluZy5zbGljZSgwLCB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSArIDEpLnJlcGxhY2UocmVUcmltU3RhcnQsIFwiXCIpIDogc3RyaW5nO1xufVxudmFyIF9iYXNlVHJpbSA9IGJhc2VUcmltJDE7XG52YXIgYmFzZUdldFRhZyA9IF9iYXNlR2V0VGFnLCBpc09iamVjdExpa2UgPSBpc09iamVjdExpa2VfMTtcbnZhciBzeW1ib2xUYWcgPSBcIltvYmplY3QgU3ltYm9sXVwiO1xuZnVuY3Rpb24gaXNTeW1ib2wkMSh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09IFwic3ltYm9sXCIgfHwgaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWc7XG59XG52YXIgaXNTeW1ib2xfMSA9IGlzU3ltYm9sJDE7XG52YXIgYmFzZVRyaW0gPSBfYmFzZVRyaW0sIGlzT2JqZWN0JDEgPSBpc09iamVjdF8xLCBpc1N5bWJvbCA9IGlzU3ltYm9sXzE7XG52YXIgTkFOID0gMCAvIDA7XG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcbmZ1bmN0aW9uIHRvTnVtYmVyJDEodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCQxKHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09IFwiZnVuY3Rpb25cIiA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3QkMShvdGhlcikgPyBvdGhlciArIFwiXCIgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IGJhc2VUcmltKHZhbHVlKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOCkgOiByZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlO1xufVxudmFyIHRvTnVtYmVyXzEgPSB0b051bWJlciQxO1xudmFyIGlzT2JqZWN0ID0gaXNPYmplY3RfMSwgbm93ID0gbm93XzEsIHRvTnVtYmVyID0gdG9OdW1iZXJfMTtcbnZhciBGVU5DX0VSUk9SX1RFWFQgPSBcIkV4cGVjdGVkIGEgZnVuY3Rpb25cIjtcbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCwgbmF0aXZlTWluID0gTWF0aC5taW47XG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncywgbGFzdFRoaXMsIG1heFdhaXQsIHJlc3VsdCwgdGltZXJJZCwgbGFzdENhbGxUaW1lLCBsYXN0SW52b2tlVGltZSA9IDAsIGxlYWRpbmcgPSBmYWxzZSwgbWF4aW5nID0gZmFsc2UsIHRyYWlsaW5nID0gdHJ1ZTtcbiAgaWYgKHR5cGVvZiBmdW5jICE9IFwiZnVuY3Rpb25cIikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9IFwibWF4V2FpdFwiIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9IFwidHJhaWxpbmdcIiBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncywgdGhpc0FyZyA9IGxhc3RUaGlzO1xuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB2b2lkIDA7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsIHRpbWVXYWl0aW5nID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4odGltZVdhaXRpbmcsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHRpbWVXYWl0aW5nO1xuICB9XG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSwgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcbiAgICByZXR1cm4gbGFzdENhbGxUaW1lID09PSB2b2lkIDAgfHwgdGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCB8fCB0aW1lU2luY2VMYXN0Q2FsbCA8IDAgfHwgbWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdDtcbiAgfVxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHZvaWQgMDtcbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdm9pZCAwO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB2b2lkIDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdm9pZCAwO1xuICB9XG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB2b2lkIDAgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLCBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB2b2lkIDApIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG52YXIgZGVib3VuY2VfMSA9IGRlYm91bmNlO1xuY29uc3QgZGlyZWN0aXZlID0gKHsgbmFtZSA9IFwidmlld2VyXCIsIGRlYnVnID0gZmFsc2UgfSA9IHt9KSA9PiB7XG4gIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVZpZXdlcihlbCwgb3B0aW9ucywgcmVidWlsZCA9IGZhbHNlLCBvYnNlcnZlciA9IGZhbHNlKSB7XG4gICAgYXdhaXQgbmV4dFRpY2soKTtcbiAgICBpZiAob2JzZXJ2ZXIgJiYgIWltYWdlRGlmZihlbCkpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHJlYnVpbGQgfHwgIWVsW2AkJHtuYW1lfWBdKSB7XG4gICAgICBkZXN0cm95Vmlld2VyKGVsKTtcbiAgICAgIGVsW2AkJHtuYW1lfWBdID0gbmV3IFZpZXdlcihlbCwgb3B0aW9ucyk7XG4gICAgICBsb2coXCJWaWV3ZXIgY3JlYXRlZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxbYCQke25hbWV9YF0udXBkYXRlKCk7XG4gICAgICBsb2coXCJWaWV3ZXIgdXBkYXRlZFwiKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaW1hZ2VEaWZmKGVsKSB7XG4gICAgY29uc3QgaW1hZ2VDb250ZW50ID0gZWwuaW5uZXJIVE1MLm1hdGNoKC88aW1nKFtcXHdcXFddKz8pW1xcXFwvXT8+L2cpO1xuICAgIGNvbnN0IHZpZXdlckltYWdlVGV4dCA9IGltYWdlQ29udGVudCA/IGltYWdlQ29udGVudC5qb2luKFwiXCIpIDogdm9pZCAwO1xuICAgIGlmIChlbC5fX3ZpZXdlckltYWdlRGlmZkNhY2hlID09PSB2aWV3ZXJJbWFnZVRleHQpIHtcbiAgICAgIGxvZyhcIkVsZW1lbnQgY2hhbmdlIGRldGVjdGVkLCBidXQgaW1hZ2UocykgaGFzIG5vdCBjaGFuZ2VkXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2coXCJJbWFnZSBjaGFuZ2UgZGV0ZWN0ZWRcIik7XG4gICAgICBlbC5fX3ZpZXdlckltYWdlRGlmZkNhY2hlID0gdmlld2VySW1hZ2VUZXh0O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKGVsLCBvcHRpb25zLCBkZWJvdW5jZWRDcmVhdGVWaWV3ZXIsIHJlYnVpbGQpIHtcbiAgICBkZXN0cm95T2JzZXJ2ZXIoZWwpO1xuICAgIGNvbnN0IE11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fCB3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlciB8fCB3aW5kb3cuTW96TXV0YXRpb25PYnNlcnZlcjtcbiAgICBpZiAoIU11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGxvZyhcIk9ic2VydmVyIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgbXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICAgIGxvZyhgVmlld2VyIG11dGF0aW9uOiR7bXV0YXRpb24udHlwZX1gKTtcbiAgICAgICAgZGVib3VuY2VkQ3JlYXRlVmlld2VyKGVsLCBvcHRpb25zLCByZWJ1aWxkLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBjaGFyYWN0ZXJEYXRhOiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbCwgY29uZmlnKTtcbiAgICBlbC5fX3ZpZXdlck11dGF0aW9uT2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICBsb2coXCJPYnNlcnZlciBjcmVhdGVkXCIpO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVdhdGNoZXIoZWwsIGJpbmRpbmcsIHZub2RlLCBkZWJvdW5jZWRDcmVhdGVWaWV3ZXIpIHtcbiAgICBlbC5fX3ZpZXdlclVud2F0Y2ggPSB3YXRjaCgoKSA9PiBiaW5kaW5nLnZhbHVlLCAobmV3VmFsLCBvbGRWYWwpID0+IHtcbiAgICAgIGxvZyhcIkNoYW5nZSBkZXRlY3RlZCBieSB3YXRjaGVyOiBcIiwgYmluZGluZy52YWx1ZSk7XG4gICAgICBkZWJvdW5jZWRDcmVhdGVWaWV3ZXIoZWwsIG5ld1ZhbCwgdHJ1ZSwgZmFsc2UpO1xuICAgIH0sIHsgZGVlcDogdHJ1ZSB9KTtcbiAgICBsb2coXCJXYXRjaGVyIGNyZWF0ZWQsIGV4cHJlc3Npb246IFwiLCBiaW5kaW5nLnZhbHVlKTtcbiAgfVxuICBmdW5jdGlvbiBkZXN0cm95Vmlld2VyKGVsKSB7XG4gICAgaWYgKCFlbFtgJCR7bmFtZX1gXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbFtgJCR7bmFtZX1gXS5kZXN0cm95KCk7XG4gICAgZGVsZXRlIGVsW2AkJHtuYW1lfWBdO1xuICAgIGxvZyhcIlZpZXdlciBkZXN0cm95ZWRcIik7XG4gIH1cbiAgZnVuY3Rpb24gZGVzdHJveU9ic2VydmVyKGVsKSB7XG4gICAgaWYgKCFlbC5fX3ZpZXdlck11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWwuX192aWV3ZXJNdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICBkZWxldGUgZWwuX192aWV3ZXJNdXRhdGlvbk9ic2VydmVyO1xuICAgIGxvZyhcIm9ic2VydmVyIGRlc3Ryb3llZFwiKTtcbiAgfVxuICBmdW5jdGlvbiBkZXN0cm95V2F0Y2hlcihlbCkge1xuICAgIGlmICghZWwuX192aWV3ZXJVbndhdGNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsLl9fdmlld2VyVW53YXRjaCgpO1xuICAgIGRlbGV0ZSBlbC5fX3ZpZXdlclVud2F0Y2g7XG4gICAgbG9nKFwiV2F0Y2hlciBkZXN0cm95ZWRcIik7XG4gIH1cbiAgZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcbiAgICBkZWJ1ZyAmJiBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgfVxuICBjb25zdCBkaXJlY3RpdmUyID0ge1xuICAgIG1vdW50ZWQoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgICBsb2coXCJWaWV3ZXIgYmluZFwiKTtcbiAgICAgIGNvbnN0IGRlYm91bmNlZENyZWF0ZVZpZXdlciA9IGRlYm91bmNlXzEoY3JlYXRlVmlld2VyLCA1MCk7XG4gICAgICBkZWJvdW5jZWRDcmVhdGVWaWV3ZXIoZWwsIGJpbmRpbmcudmFsdWUpO1xuICAgICAgY3JlYXRlV2F0Y2hlcihlbCwgYmluZGluZywgdm5vZGUsIGRlYm91bmNlZENyZWF0ZVZpZXdlcik7XG4gICAgICBpZiAoIWJpbmRpbmcubW9kaWZpZXJzLnN0YXRpYykge1xuICAgICAgICBjcmVhdGVPYnNlcnZlcihlbCwgYmluZGluZy52YWx1ZSwgZGVib3VuY2VkQ3JlYXRlVmlld2VyLCBiaW5kaW5nLm1vZGlmaWVycy5yZWJ1aWxkKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHVubW91bnRlZChlbCkge1xuICAgICAgbG9nKFwiVmlld2VyIHVuYmluZFwiKTtcbiAgICAgIGRlc3Ryb3lPYnNlcnZlcihlbCk7XG4gICAgICBkZXN0cm95V2F0Y2hlcihlbCk7XG4gICAgICBkZXN0cm95Vmlld2VyKGVsKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBkaXJlY3RpdmUyO1xufTtcbnZhciBfZXhwb3J0X3NmYyA9IChzZmMsIHByb3BzKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IHNmYy5fX3ZjY09wdHMgfHwgc2ZjO1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgcHJvcHMpIHtcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcbmNvbnN0IF9zZmNfbWFpbiA9IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6IFwiVmlld2VyXCIsXG4gIHByb3BzOiB7XG4gICAgaW1hZ2VzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdXG4gICAgfSxcbiAgICByZWJ1aWxkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIHRyaWdnZXI6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IG51bGxcbiAgICB9XG4gIH0sXG4gIGVtaXRzOiBbXCJpbml0ZWRcIl0sXG4gIHNldHVwKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGxldCAkdmlld2VyO1xuICAgIGNvbnN0IHJvb3QyID0gcmVmKCk7XG4gICAgZnVuY3Rpb24gY3JlYXRlVmlld2VyKCkge1xuICAgICAgJHZpZXdlciA9IG5ldyBWaWV3ZXIocm9vdDIudmFsdWUsIHByb3BzLm9wdGlvbnMpO1xuICAgICAgZW1pdChcImluaXRlZFwiLCAkdmlld2VyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVzdHJveVZpZXdlcigpIHtcbiAgICAgICR2aWV3ZXIgJiYgJHZpZXdlci5kZXN0cm95KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlYnVpbGRWaWV3ZXIoKSB7XG4gICAgICBkZXN0cm95Vmlld2VyKCk7XG4gICAgICBjcmVhdGVWaWV3ZXIoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlVmlld2VyKCkge1xuICAgICAgaWYgKCR2aWV3ZXIpIHtcbiAgICAgICAgJHZpZXdlci51cGRhdGUoKTtcbiAgICAgICAgZW1pdChcImluaXRlZFwiLCAkdmlld2VyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNyZWF0ZVZpZXdlcigpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjaGFuZ2VWaWV3ZXIoKSB7XG4gICAgICBpZiAocHJvcHMucmVidWlsZCkge1xuICAgICAgICByZWJ1aWxkVmlld2VyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGVWaWV3ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgZGVlcDogdHJ1ZSB9O1xuICAgIHdhdGNoKCgpID0+IHByb3BzLmltYWdlcywgKCkgPT4gbmV4dFRpY2soKCkgPT4gY2hhbmdlVmlld2VyKCkpLCBvcHRpb25zKTtcbiAgICB3YXRjaCgoKSA9PiBwcm9wcy50cmlnZ2VyLCAoKSA9PiBuZXh0VGljaygoKSA9PiBjaGFuZ2VWaWV3ZXIoKSksIG9wdGlvbnMpO1xuICAgIHdhdGNoKCgpID0+IHByb3BzLm9wdGlvbnMsICgpID0+IG5leHRUaWNrKCgpID0+IHJlYnVpbGRWaWV3ZXIoKSksIG9wdGlvbnMpO1xuICAgIG9uTW91bnRlZCgoKSA9PiBjcmVhdGVWaWV3ZXIoKSk7XG4gICAgb25Vbm1vdW50ZWQoKCkgPT4gZGVzdHJveVZpZXdlcigpKTtcbiAgICByZXR1cm4ge1xuICAgICAgcm9vdDogcm9vdDIsXG4gICAgICBjcmVhdGVWaWV3ZXIsXG4gICAgICByZWJ1aWxkVmlld2VyLFxuICAgICAgdXBkYXRlVmlld2VyLFxuICAgICAgZGVzdHJveVZpZXdlclxuICAgIH07XG4gIH1cbn0pO1xuY29uc3QgX2hvaXN0ZWRfMSA9IHsgcmVmOiBcInJvb3RcIiB9O1xuZnVuY3Rpb24gX3NmY19yZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiBvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICByZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImRlZmF1bHRcIiwge1xuICAgICAgaW1hZ2VzOiBfY3R4LmltYWdlcyxcbiAgICAgIG9wdGlvbnM6IF9jdHgub3B0aW9uc1xuICAgIH0pXG4gIF0sIDUxMik7XG59XG52YXIgY29tcG9uZW50ID0gLyogQF9fUFVSRV9fICovIF9leHBvcnRfc2ZjKF9zZmNfbWFpbiwgW1tcInJlbmRlclwiLCBfc2ZjX3JlbmRlcl1dKTtcbnZhciBpbmRleCA9IHtcbiAgaW5zdGFsbChhcHAsIHsgbmFtZSA9IFwidmlld2VyXCIsIGRlYnVnID0gZmFsc2UsIGRlZmF1bHRPcHRpb25zIH0gPSB7fSkge1xuICAgIGlmIChkZWZhdWx0T3B0aW9ucykge1xuICAgICAgVmlld2VyLnNldERlZmF1bHRzKGRlZmF1bHRPcHRpb25zKTtcbiAgICB9XG4gICAgYXBwLmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzW2AkJHtuYW1lfUFwaWBdID0gYXBpO1xuICAgIGFwcC5jb21wb25lbnQobmFtZSwgZGVmYXVsdHNfMShjb21wb25lbnQsIHsgbmFtZSB9KSk7XG4gICAgYXBwLmRpcmVjdGl2ZShuYW1lLCBkaXJlY3RpdmUoeyBuYW1lLCBkZWJ1ZyB9KSk7XG4gIH0sXG4gIHNldERlZmF1bHRzKGRlZmF1bHRPcHRpb25zKSB7XG4gICAgVmlld2VyLnNldERlZmF1bHRzKGRlZmF1bHRPcHRpb25zKTtcbiAgfVxufTtcbmV4cG9ydCB7IGFwaSwgY29tcG9uZW50LCBpbmRleCBhcyBkZWZhdWx0LCBkaXJlY3RpdmUgfTtcbiIsImltcG9ydCB7IGJvb3QgfSBmcm9tICdxdWFzYXIvd3JhcHBlcnMnO1xuaW1wb3J0ICd2aWV3ZXJqcy9kaXN0L3ZpZXdlci5jc3MnO1xuaW1wb3J0IFZ1ZVZpZXdlciBmcm9tICd2LXZpZXdlcic7XG5cbi8vIFwiYXN5bmNcIiBpcyBvcHRpb25hbDtcbi8vIG1vcmUgaW5mbyBvbiBwYXJhbXM6IGh0dHBzOi8vdjIucXVhc2FyLmRldi9xdWFzYXItY2xpL2Jvb3QtZmlsZXNcbmV4cG9ydCBkZWZhdWx0IGJvb3QoYXN5bmMgKHsgYXBwIH0pID0+IHtcbiAgYXBwLnVzZShWdWVWaWV3ZXIpO1xufSk7XG4iXSwibmFtZXMiOlsiX2RlZmluZVByb3BlcnR5IiwiaXNPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImlzRnVuY3Rpb24iLCJhc3NpZ24iLCJyZW5kZXIiLCJWdWVWaWV3ZXIiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsT0FBTyxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUU7QUFDekMsRUFBRSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLEVBQUUsSUFBSSxNQUFNLENBQUMscUJBQXFCLEVBQUU7QUFDcEMsSUFBSSxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkQsSUFBSSxjQUFjLEtBQUssT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEVBQUU7QUFDL0QsTUFBTSxPQUFPLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO0FBQ3JFLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3hDLEdBQUc7QUFDSCxFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUNELFNBQVMsY0FBYyxDQUFDLE1BQU0sRUFBRTtBQUNoQyxFQUFFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzdDLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFO0FBQy9ELE1BQU1BLGlCQUFlLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoRCxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMseUJBQXlCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFO0FBQ3ZLLE1BQU0sTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2RixLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSCxFQUFFLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFDRCxTQUFTLE9BQU8sQ0FBQyxHQUFHLEVBQUU7QUFDdEIsRUFBRSx5QkFBeUIsQ0FBQztBQUM1QjtBQUNBLEVBQUUsT0FBTyxPQUFPLEdBQUcsVUFBVSxJQUFJLE9BQU8sTUFBTSxJQUFJLFFBQVEsSUFBSSxPQUFPLE1BQU0sQ0FBQyxRQUFRLEdBQUcsVUFBVSxHQUFHLEVBQUU7QUFDdEcsSUFBSSxPQUFPLE9BQU8sR0FBRyxDQUFDO0FBQ3RCLEdBQUcsR0FBRyxVQUFVLEdBQUcsRUFBRTtBQUNyQixJQUFJLE9BQU8sR0FBRyxJQUFJLFVBQVUsSUFBSSxPQUFPLE1BQU0sSUFBSSxHQUFHLENBQUMsV0FBVyxLQUFLLE1BQU0sSUFBSSxHQUFHLEtBQUssTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsT0FBTyxHQUFHLENBQUM7QUFDaEksR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsQixDQUFDO0FBQ0QsU0FBUyxlQUFlLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRTtBQUNoRCxFQUFFLElBQUksRUFBRSxRQUFRLFlBQVksV0FBVyxDQUFDLEVBQUU7QUFDMUMsSUFBSSxNQUFNLElBQUksU0FBUyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7QUFDN0QsR0FBRztBQUNILENBQUM7QUFDRCxTQUFTLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFDMUMsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxJQUFJLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QixJQUFJLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUM7QUFDM0QsSUFBSSxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUNuQyxJQUFJLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRSxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUMxRCxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDOUUsR0FBRztBQUNILENBQUM7QUFDRCxTQUFTLFlBQVksQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRTtBQUM1RCxFQUFFLElBQUksVUFBVSxFQUFFLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDdkUsRUFBRSxJQUFJLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDL0QsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUU7QUFDbEQsSUFBSSxRQUFRLEVBQUUsS0FBSztBQUNuQixHQUFHLENBQUMsQ0FBQztBQUNMLEVBQUUsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQztBQUNELFNBQVNBLGlCQUFlLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDMUMsRUFBRSxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLEVBQUUsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFO0FBQ2xCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3BDLE1BQU0sS0FBSyxFQUFFLEtBQUs7QUFDbEIsTUFBTSxVQUFVLEVBQUUsSUFBSTtBQUN0QixNQUFNLFlBQVksRUFBRSxJQUFJO0FBQ3hCLE1BQU0sUUFBUSxFQUFFLElBQUk7QUFDcEIsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHLE1BQU07QUFDVCxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDckIsR0FBRztBQUNILEVBQUUsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBQ0QsU0FBUyxZQUFZLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRTtBQUNuQyxFQUFFLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDaEUsRUFBRSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZDLEVBQUUsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQzFCLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDO0FBQ2xELElBQUksSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUUsT0FBTyxHQUFHLENBQUM7QUFDNUMsSUFBSSxNQUFNLElBQUksU0FBUyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7QUFDeEUsR0FBRztBQUNILEVBQUUsT0FBTyxDQUFDLElBQUksS0FBSyxRQUFRLEdBQUcsTUFBTSxHQUFHLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBQ0QsU0FBUyxjQUFjLENBQUMsR0FBRyxFQUFFO0FBQzdCLEVBQUUsSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN4QyxFQUFFLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUNEO0FBQ0EsSUFBSSxRQUFRLEdBQUc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxRQUFRLEVBQUUsSUFBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsTUFBTSxFQUFFLElBQUk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsTUFBTSxFQUFFLElBQUk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBSyxFQUFFLElBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsT0FBTyxFQUFFLElBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsU0FBUyxFQUFFLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsU0FBUyxFQUFFLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLE1BQU0sRUFBRSxJQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsVUFBVSxFQUFFLElBQUk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG1CQUFtQixFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxlQUFlLEVBQUUsR0FBRztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsTUFBTSxFQUFFLEtBQUs7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsUUFBUSxFQUFFLElBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFFBQVEsRUFBRSxJQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUFLLEVBQUUsSUFBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxPQUFPLEVBQUUsSUFBSTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLEVBQUUsSUFBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxRQUFRLEVBQUUsR0FBRztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLEVBQUUsR0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsT0FBTyxFQUFFLElBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsU0FBUyxFQUFFLElBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFFBQVEsRUFBRSxJQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxRQUFRLEVBQUUsSUFBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsV0FBVyxFQUFFLElBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFdBQVcsRUFBRSxJQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxZQUFZLEVBQUUsSUFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxPQUFPLEVBQUUsSUFBSTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxVQUFVLEVBQUUsSUFBSTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsTUFBTSxFQUFFLElBQUk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsWUFBWSxFQUFFLENBQUM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFNBQVMsRUFBRSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxZQUFZLEVBQUUsSUFBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsWUFBWSxFQUFFLEdBQUc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEdBQUcsRUFBRSxLQUFLO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQUssRUFBRSxJQUFJO0FBQ2IsRUFBRSxJQUFJLEVBQUUsSUFBSTtBQUNaLEVBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixFQUFFLElBQUksRUFBRSxJQUFJO0FBQ1osRUFBRSxNQUFNLEVBQUUsSUFBSTtBQUNkLEVBQUUsSUFBSSxFQUFFLElBQUk7QUFDWixFQUFFLE1BQU0sRUFBRSxJQUFJO0FBQ2QsRUFBRSxJQUFJLEVBQUUsSUFBSTtBQUNaLEVBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixFQUFFLE1BQU0sRUFBRSxJQUFJO0FBQ2QsRUFBRSxPQUFPLEVBQUUsSUFBSTtBQUNmLEVBQUUsS0FBSyxFQUFFLElBQUk7QUFDYixFQUFFLE1BQU0sRUFBRSxJQUFJO0FBQ2QsRUFBRSxJQUFJLEVBQUUsSUFBSTtBQUNaLEVBQUUsTUFBTSxFQUFFLElBQUk7QUFDZCxFQUFFLElBQUksRUFBRSxJQUFJO0FBQ1osRUFBRSxJQUFJLEVBQUUsSUFBSTtBQUNaLENBQUMsQ0FBQztBQUNGO0FBQ0EsSUFBSSxRQUFRLEdBQUcsa0VBQWtFLEdBQUcsbUNBQW1DLEdBQUcsNkJBQTZCLEdBQUcsa0NBQWtDLEdBQUcsb0NBQW9DLEdBQUcsNkJBQTZCLEdBQUcsaURBQWlELEdBQUcsUUFBUSxHQUFHLFFBQVEsR0FBRyxvRUFBb0UsR0FBRywwRUFBMEUsR0FBRyxtQ0FBbUMsR0FBRyxRQUFRLENBQUM7QUFDbmhCO0FBQ0EsSUFBSSxVQUFVLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE9BQU8sTUFBTSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUM7QUFDekYsSUFBSSxNQUFNLEdBQUcsVUFBVSxHQUFHLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDdEMsSUFBSSxlQUFlLEdBQUcsVUFBVSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxHQUFHLGNBQWMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFDaEksSUFBSSxpQkFBaUIsR0FBRyxVQUFVLEdBQUcsY0FBYyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDdEUsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBQ3pCO0FBQ0E7QUFDQSxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUM7QUFDekIsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDO0FBQzdCLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQztBQUN6QjtBQUNBO0FBQ0EsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDbkQsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDakQsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0MsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDakQsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUMzRCxJQUFJLHFCQUFxQixHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDckUsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0MsSUFBSSxrQkFBa0IsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUMvRCxJQUFJLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQy9ELElBQUksa0JBQWtCLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDL0QsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDM0MsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDekQsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDckQsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0MsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0MsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0MsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUMzRDtBQUNBO0FBQ0EsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDO0FBQzFCLElBQUksY0FBYyxHQUFHLFVBQVUsQ0FBQztBQUNoQyxJQUFJLGdCQUFnQixHQUFHLFdBQVcsQ0FBQztBQUNuQyxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUM7QUFDOUIsSUFBSSxjQUFjLEdBQUcsU0FBUyxDQUFDO0FBQy9CLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQztBQUN4QixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFDMUIsSUFBSSxlQUFlLEdBQUcsZUFBZSxHQUFHLHNCQUFzQixHQUFHLFNBQVMsQ0FBQztBQUMzRSxJQUFJLGdCQUFnQixHQUFHLGVBQWUsR0FBRyxXQUFXLEdBQUcsV0FBVyxDQUFDO0FBQ25FLElBQUksaUJBQWlCLEdBQUcsZUFBZSxHQUFHLFlBQVksR0FBRyxXQUFXLENBQUM7QUFDckUsSUFBSSxrQkFBa0IsR0FBRyxpQkFBaUIsR0FBRyxhQUFhLEdBQUcsaUJBQWlCLENBQUM7QUFDL0UsSUFBSSxrQkFBa0IsR0FBRyxpQkFBaUIsR0FBRyxhQUFhLEdBQUcsZ0JBQWdCLENBQUM7QUFDOUUsSUFBSSxnQkFBZ0IsR0FBRyxpQkFBaUIsR0FBRyx5QkFBeUIsR0FBRyxlQUFlLENBQUM7QUFDdkYsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDO0FBQzVCLElBQUksb0JBQW9CLEdBQUcsZUFBZSxDQUFDO0FBQzNDLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQztBQUMxQjtBQUNBO0FBQ0EsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDO0FBQzFCLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQztBQUN4QixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFDMUIsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQztBQUM1QixJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUM7QUFDeEIsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDO0FBQzVCLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQztBQUN4QixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFDMUIsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDO0FBQzVCLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQztBQUM5QixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFDMUIsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDO0FBQzVCLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQztBQUN4QixJQUFJLFlBQVksR0FBRyxRQUFRLENBQUM7QUFDNUIsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQztBQUN4QjtBQUNBO0FBQ0EsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDakQ7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQztBQUM1QjtBQUNBO0FBQ0EsSUFBSSxPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUN4SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7QUFDekIsRUFBRSxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQztBQUNuQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFO0FBQ3pCLEVBQUUsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBVyxDQUFDLEtBQUssRUFBRTtBQUM1QixFQUFFLE9BQU8sT0FBTyxLQUFLLEtBQUssV0FBVyxDQUFDO0FBQ3RDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyxVQUFRLENBQUMsS0FBSyxFQUFFO0FBQ3pCLEVBQUUsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUM7QUFDdkQsQ0FBQztBQUNELElBQUlDLGdCQUFjLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxhQUFhLENBQUMsS0FBSyxFQUFFO0FBQzlCLEVBQUUsSUFBSSxDQUFDRCxVQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDeEIsSUFBSSxPQUFPLEtBQUssQ0FBQztBQUNqQixHQUFHO0FBQ0gsRUFBRSxJQUFJO0FBQ04sSUFBSSxJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0FBQ3pDLElBQUksSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztBQUMzQyxJQUFJLE9BQU8sWUFBWSxJQUFJLFNBQVMsSUFBSUMsZ0JBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3hGLEdBQUcsQ0FBQyxPQUFPLEtBQUssRUFBRTtBQUNsQixJQUFJLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0MsWUFBVSxDQUFDLEtBQUssRUFBRTtBQUMzQixFQUFFLE9BQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxDQUFDO0FBQ3JDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDakMsRUFBRSxJQUFJLElBQUksSUFBSUEsWUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ3BDLElBQUksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQjtBQUN2RSxNQUFNLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDL0IsTUFBTSxJQUFJLENBQUMsQ0FBQztBQUNaLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN0QyxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDN0QsVUFBVSxNQUFNO0FBQ2hCLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSyxNQUFNLElBQUlGLFVBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUMvQixNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFO0FBQy9DLFFBQVEsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNsRCxPQUFPLENBQUMsQ0FBQztBQUNULEtBQUs7QUFDTCxHQUFHO0FBQ0gsRUFBRSxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlHLFFBQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsTUFBTSxDQUFDLEdBQUcsRUFBRTtBQUNuRCxFQUFFLEtBQUssSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtBQUM5RyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JDLEdBQUc7QUFDSCxFQUFFLElBQUlILFVBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUN4QyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEVBQUU7QUFDaEMsTUFBTSxJQUFJQSxVQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDekIsUUFBUSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsRUFBRTtBQUNoRCxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUIsU0FBUyxDQUFDLENBQUM7QUFDWCxPQUFPO0FBQ1AsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHO0FBQ0gsRUFBRSxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUNGLElBQUksYUFBYSxHQUFHLGtEQUFrRCxDQUFDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsUUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDbkMsRUFBRSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO0FBQzVCLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxVQUFVLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDN0MsSUFBSSxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3pELE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQztBQUNwQixLQUFLO0FBQ0wsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQzVCLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsa0JBQWtCLENBQUMsS0FBSyxFQUFFO0FBQ25DLEVBQUUsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUN0TCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ2xDLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRTtBQUMxQixJQUFJLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLEdBQUc7QUFDSCxFQUFFLE9BQU8sT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2RyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNsQyxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDMUIsSUFBSSxPQUFPO0FBQ1gsR0FBRztBQUNILEVBQUUsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRTtBQUNyQyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUIsS0FBSyxDQUFDLENBQUM7QUFDUCxJQUFJLE9BQU87QUFDWCxHQUFHO0FBQ0gsRUFBRSxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7QUFDekIsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqQyxJQUFJLE9BQU87QUFDWCxHQUFHO0FBQ0gsRUFBRSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzNDLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNsQixJQUFJLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQzlCLEdBQUcsTUFBTSxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzNDLElBQUksT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEUsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ3JDLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRTtBQUMxQixJQUFJLE9BQU87QUFDWCxHQUFHO0FBQ0gsRUFBRSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDaEMsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFO0FBQ3JDLE1BQU0sV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMvQixLQUFLLENBQUMsQ0FBQztBQUNQLElBQUksT0FBTztBQUNYLEdBQUc7QUFDSCxFQUFFLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtBQUN6QixJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLElBQUksT0FBTztBQUNYLEdBQUc7QUFDSCxFQUFFLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzdDLElBQUksT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDN0QsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQzVDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNkLElBQUksT0FBTztBQUNYLEdBQUc7QUFDSCxFQUFFLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUNoQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUU7QUFDckMsTUFBTSxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN0QyxLQUFLLENBQUMsQ0FBQztBQUNQLElBQUksT0FBTztBQUNYLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRSxJQUFJLEtBQUssRUFBRTtBQUNiLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM3QixHQUFHLE1BQU07QUFDVCxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDaEMsR0FBRztBQUNILENBQUM7QUFDRCxJQUFJLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtBQUMxQixFQUFFLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNoRSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQ2hDLEVBQUUsSUFBSUEsVUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO0FBQy9CLElBQUksT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsR0FBRztBQUNILEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQ3ZCLElBQUksT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLEdBQUc7QUFDSCxFQUFFLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDdEMsRUFBRSxJQUFJQSxVQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDdEIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLEdBQUcsTUFBTSxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7QUFDOUIsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNqQyxHQUFHLE1BQU07QUFDVCxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoRSxHQUFHO0FBQ0gsQ0FBQztBQUNELElBQUksYUFBYSxHQUFHLFlBQVk7QUFDaEMsRUFBRSxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7QUFDeEIsRUFBRSxJQUFJLFVBQVUsRUFBRTtBQUNsQixJQUFJLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztBQUNyQixJQUFJLElBQUksUUFBUSxHQUFHLFNBQVMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUMxQyxJQUFJLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRTtBQUNwRCxNQUFNLEdBQUcsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUMxQixRQUFRLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDekIsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sR0FBRyxFQUFFLFNBQVMsR0FBRyxDQUFDLEtBQUssRUFBRTtBQUMvQixRQUFRLElBQUksR0FBRyxLQUFLLENBQUM7QUFDckIsT0FBTztBQUNQLEtBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN2RCxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzFELEdBQUc7QUFDSCxFQUFFLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUMsRUFBRSxDQUFDO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0FBQ2pELEVBQUUsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3ZGLEVBQUUsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLEVBQUU7QUFDNUQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO0FBQ3hCLE1BQU0sSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztBQUN4QyxNQUFNLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDdkUsUUFBUSxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdDLFFBQVEsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUN4RCxVQUFVLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLFNBQVM7QUFDVCxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQ2pELFVBQVUsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDO0FBQ25DLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUksT0FBTyxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekQsR0FBRyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0FBQzlDLEVBQUUsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3ZGLEVBQUUsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQzFCLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxLQUFLLEVBQUU7QUFDNUQsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDeEMsTUFBTSxJQUFJLGtCQUFrQixHQUFHLE9BQU8sQ0FBQyxTQUFTO0FBQ2hELFFBQVEsU0FBUyxHQUFHLGtCQUFrQixLQUFLLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQztBQUM1RSxNQUFNLFFBQVEsR0FBRyxTQUFTLE9BQU8sR0FBRztBQUNwQyxRQUFRLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLFFBQVEsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUQsUUFBUSxLQUFLLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtBQUN2RyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekMsU0FBUztBQUNULFFBQVEsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEMsT0FBTyxDQUFDO0FBQ1IsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzdCLFFBQVEsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUM5QixPQUFPO0FBQ1AsTUFBTSxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUN0QyxRQUFRLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2hGLE9BQU87QUFDUCxNQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUM7QUFDNUMsTUFBTSxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUNwQyxLQUFLO0FBQ0wsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN2RCxHQUFHLENBQUMsQ0FBQztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGFBQWEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDckQsRUFBRSxJQUFJLEtBQUssQ0FBQztBQUNaO0FBQ0E7QUFDQSxFQUFFLElBQUlFLFlBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSUEsWUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBQ3BELElBQUksS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUM7QUFDakQsTUFBTSxPQUFPLEVBQUUsSUFBSTtBQUNuQixNQUFNLFVBQVUsRUFBRSxJQUFJO0FBQ3RCLE1BQU0sTUFBTSxFQUFFLElBQUk7QUFDbEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDakIsR0FBRyxNQUFNO0FBQ1QsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNoRCxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbEQsR0FBRztBQUNILEVBQUUsT0FBTyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDNUIsRUFBRSxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUM1QyxFQUFFLE9BQU87QUFDVCxJQUFJLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7QUFDL0UsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO0FBQzVFLEdBQUcsQ0FBQztBQUNKLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGFBQWEsQ0FBQyxJQUFJLEVBQUU7QUFDN0IsRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtBQUMxQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtBQUN4QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtBQUN4QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVTtBQUNoQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ2pDLEVBQUUsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLEVBQUUsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxLQUFLLENBQUMsRUFBRTtBQUNoRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN6RCxHQUFHO0FBQ0gsRUFBRSxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLEtBQUssQ0FBQyxFQUFFO0FBQ2hELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3pELEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO0FBQ3hDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2xELEdBQUc7QUFDSCxFQUFFLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDeEMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDL0MsR0FBRztBQUNILEVBQUUsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtBQUN4QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMvQyxHQUFHO0FBQ0gsRUFBRSxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQzVELEVBQUUsT0FBTztBQUNULElBQUksZUFBZSxFQUFFLFNBQVM7QUFDOUIsSUFBSSxXQUFXLEVBQUUsU0FBUztBQUMxQixJQUFJLFNBQVMsRUFBRSxTQUFTO0FBQ3hCLEdBQUcsQ0FBQztBQUNKLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1CQUFtQixDQUFDLEdBQUcsRUFBRTtBQUNsQyxFQUFFLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDbkcsQ0FBQztBQUNELElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLElBQUksNENBQTRDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUU7QUFDeEQsRUFBRSxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9DO0FBQ0E7QUFDQSxFQUFFLElBQUksS0FBSyxDQUFDLFlBQVksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUN4QyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN0RCxJQUFJLE9BQU8sUUFBUSxDQUFDO0FBQ3BCLEdBQUc7QUFDSCxFQUFFLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQztBQUN2RCxFQUFFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsWUFBWTtBQUNoQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5QyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDcEIsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLEtBQUs7QUFDTCxHQUFHLENBQUM7QUFDSixFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxJQUFJLEVBQUU7QUFDdkQsSUFBSSxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pDLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO0FBQ3hCLE1BQU0sUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDekMsS0FBSztBQUNMLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsRUFBRSxRQUFRLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2xCLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxHQUFHLDRCQUE0QixHQUFHLDJCQUEyQixHQUFHLHlCQUF5QixHQUFHLHdCQUF3QixHQUFHLFlBQVksR0FBRyxvQkFBb0IsR0FBRyxRQUFRLEdBQUcsYUFBYSxDQUFDO0FBQzVOLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixHQUFHO0FBQ0gsRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7QUFDbEMsRUFBRSxRQUFRLElBQUk7QUFDZCxJQUFJLEtBQUssQ0FBQztBQUNWLE1BQU0sT0FBTyxrQkFBa0IsQ0FBQztBQUNoQyxJQUFJLEtBQUssQ0FBQztBQUNWLE1BQU0sT0FBTyxrQkFBa0IsQ0FBQztBQUNoQyxJQUFJLEtBQUssQ0FBQztBQUNWLE1BQU0sT0FBTyxrQkFBa0IsQ0FBQztBQUNoQyxJQUFJO0FBQ0osTUFBTSxPQUFPLEVBQUUsQ0FBQztBQUNoQixHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZUFBZSxDQUFDLFFBQVEsRUFBRTtBQUNuQyxFQUFFLElBQUksU0FBUyxHQUFHLGNBQWMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDL0MsRUFBRSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDbEIsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLFVBQVUsT0FBTyxFQUFFLFNBQVMsRUFBRTtBQUNsRCxJQUFJLE9BQU8sU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2hDLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxVQUFVLFFBQVEsRUFBRTtBQUMzQyxNQUFNLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUQsTUFBTSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFELE1BQU0sSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0RCxNQUFNLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEQsTUFBTSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLE1BQU0sSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUM1QyxNQUFNLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDakMsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pCLEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzlCLElBQUksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckMsR0FBRyxDQUFDLENBQUM7QUFDTCxFQUFFLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25CLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNB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Q0EsTUFBTSxLQUFLLEVBQUU7QUFDYixRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ3pDLFVBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM5QixTQUFTLE1BQU07QUFDZixVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xDLFNBQVM7QUFDVCxRQUFRLE1BQU07QUFDZDtBQUNBO0FBQ0EsTUFBTSxLQUFLLEVBQUU7QUFDYjtBQUNBLFFBQVEsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQy9CO0FBQ0E7QUFDQSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMzQyxRQUFRLE1BQU07QUFDZDtBQUNBO0FBQ0EsTUFBTSxLQUFLLEVBQUU7QUFDYixRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ3pDLFVBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM5QixTQUFTLE1BQU07QUFDZixVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xDLFNBQVM7QUFDVCxRQUFRLE1BQU07QUFDZDtBQUNBO0FBQ0EsTUFBTSxLQUFLLEVBQUU7QUFDYjtBQUNBLFFBQVEsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQy9CO0FBQ0E7QUFDQSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVDLFFBQVEsTUFBTTtBQUNkO0FBQ0E7QUFDQSxNQUFNLEtBQUssRUFBRSxDQUFDO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQUssRUFBRTtBQUNiLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO0FBQzNCLFVBQVUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ2pDLFVBQVUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3hCLFNBQVM7QUFDVCxRQUFRLE1BQU07QUFDZCxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUUsU0FBUyxFQUFFLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtBQUN2QyxJQUFJLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUFFO0FBQzFDLE1BQU0sS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzdCLEtBQUs7QUFDTCxHQUFHO0FBQ0gsRUFBRSxXQUFXLEVBQUUsU0FBUyxXQUFXLENBQUMsS0FBSyxFQUFFO0FBQzNDLElBQUksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87QUFDOUIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUMvQixJQUFJLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPO0FBQy9CLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDNUIsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUM5QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTTtBQUNuRTtBQUNBO0FBQ0EsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssV0FBVyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssYUFBYSxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssT0FBTztBQUNuRztBQUNBLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDO0FBQzFFO0FBQ0E7QUFDQSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUN2QixNQUFNLE9BQU87QUFDYixLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzNCLElBQUksSUFBSSxLQUFLLENBQUMsY0FBYyxFQUFFO0FBQzlCLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsVUFBVSxLQUFLLEVBQUU7QUFDckQsUUFBUSxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2RCxPQUFPLENBQUMsQ0FBQztBQUNULEtBQUssTUFBTTtBQUNYLE1BQU0sUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pELEtBQUs7QUFDTCxJQUFJLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEdBQUcsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUN2RCxJQUFJLElBQUksT0FBTyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNyRixNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUM7QUFDM0IsS0FBSyxNQUFNLElBQUksT0FBTyxDQUFDLFlBQVksS0FBSyxLQUFLLENBQUMsV0FBVyxLQUFLLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtBQUM5SCxNQUFNLE1BQU0sR0FBRyxhQUFhLENBQUM7QUFDN0IsS0FBSztBQUNMLElBQUksSUFBSSxPQUFPLENBQUMsVUFBVSxLQUFLLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTSxLQUFLLFdBQVcsQ0FBQyxFQUFFO0FBQ2xGLE1BQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUNoRCxLQUFLO0FBQ0wsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUN6QixHQUFHO0FBQ0gsRUFBRSxXQUFXLEVBQUUsU0FBUyxXQUFXLENBQUMsS0FBSyxFQUFFO0FBQzNDLElBQUksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7QUFDaEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUMzQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2pDLE1BQU0sT0FBTztBQUNiLEtBQUs7QUFDTCxJQUFJLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMzQixJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0FBQzdCLElBQUksSUFBSSxLQUFLLENBQUMsY0FBYyxFQUFFO0FBQzlCLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsVUFBVSxLQUFLLEVBQUU7QUFDckQsUUFBUUEsUUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMxRSxPQUFPLENBQUMsQ0FBQztBQUNULEtBQUssTUFBTTtBQUNYLE1BQU1BLFFBQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzVFLEtBQUs7QUFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkIsR0FBRztBQUNILEVBQUUsU0FBUyxFQUFFLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtBQUN2QyxJQUFJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUN0QixJQUFJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO0FBQzlCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO0FBQzFCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDL0IsSUFBSSxJQUFJLE9BQU8sQ0FBQztBQUNoQixJQUFJLElBQUksS0FBSyxDQUFDLGNBQWMsRUFBRTtBQUM5QixNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLFVBQVUsS0FBSyxFQUFFO0FBQ3JELFFBQVEsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDN0MsUUFBUSxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDMUMsT0FBTyxDQUFDLENBQUM7QUFDVCxLQUFLLE1BQU07QUFDWCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMvQyxNQUFNLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDNUMsS0FBSztBQUNMLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNqQixNQUFNLE9BQU87QUFDYixLQUFLO0FBQ0wsSUFBSSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDM0IsSUFBSSxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLEtBQUssV0FBVyxDQUFDLEVBQUU7QUFDbEYsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzdDLEtBQUs7QUFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ3hCO0FBQ0E7QUFDQSxJQUFJLElBQUksZUFBZSxJQUFJLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRTtBQUN0RyxNQUFNLFlBQVksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUM1QyxNQUFNLFlBQVksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNqRCxNQUFNLElBQUksT0FBTyxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2xGLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQy9CLFVBQVUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDcEM7QUFDQTtBQUNBLFVBQVUsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFVBQVUsQ0FBQyxZQUFZO0FBQ2hFLFlBQVksYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFO0FBQ3hELGNBQWMsYUFBYSxFQUFFLEtBQUs7QUFDbEMsYUFBYSxDQUFDLENBQUM7QUFDZixXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDakIsU0FBUyxNQUFNO0FBQ2YsVUFBVSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztBQUNuQztBQUNBO0FBQ0EsVUFBVSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsVUFBVSxDQUFDLFlBQVk7QUFDaEUsWUFBWSxNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUN4QyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbEIsU0FBUztBQUNULE9BQU8sTUFBTTtBQUNiLFFBQVEsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDbEMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQy9GO0FBQ0EsVUFBVSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDLFlBQVk7QUFDM0QsWUFBWSxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUU7QUFDdEQsY0FBYyxhQUFhLEVBQUUsS0FBSztBQUNsQyxhQUFhLENBQUMsQ0FBQztBQUNmLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNqQixTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0gsRUFBRSxNQUFNLEVBQUUsU0FBUyxNQUFNLEdBQUc7QUFDNUIsSUFBSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3RDLE1BQU0sT0FBTztBQUNiLEtBQUs7QUFDTCxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNyQixNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNuQixNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN0QixNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNsQixLQUFLO0FBQ0wsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDekIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDdEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDeEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDdEIsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDckIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVk7QUFDakMsUUFBUSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDN0IsT0FBTyxDQUFDLENBQUM7QUFDVCxLQUFLO0FBQ0wsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDckIsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxRQUFRLENBQUMsaUJBQWlCLElBQUksUUFBUSxDQUFDLHVCQUF1QixJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsSUFBSSxRQUFRLENBQUMsbUJBQW1CLENBQUMsRUFBRTtBQUN4TCxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNwQixRQUFRLE9BQU87QUFDZixPQUFPO0FBQ1AsTUFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLEtBQUssRUFBRTtBQUN4RSxRQUFRLFdBQVcsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ3RFLFVBQVUsSUFBSSxFQUFFLElBQUk7QUFDcEIsU0FBUyxDQUFDLENBQUM7QUFDWCxRQUFRLGFBQWEsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDekMsT0FBTyxDQUFDLENBQUM7QUFDVCxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUUsS0FBSyxFQUFFLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRTtBQUMvQixJQUFJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3RCLE1BQU0sT0FBTztBQUNiLEtBQUs7QUFDTCxJQUFJLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMzQjtBQUNBO0FBQ0EsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDdkIsTUFBTSxPQUFPO0FBQ2IsS0FBSztBQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDekIsSUFBSSxVQUFVLENBQUMsWUFBWTtBQUMzQixNQUFNLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzlCLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNYLElBQUksSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDO0FBQ3RELElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO0FBQ3RCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4QyxLQUFLLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO0FBQ2pDLE1BQU0sS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFDdEMsS0FBSyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUM3QixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDeEMsS0FBSztBQUNMLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNqRCxHQUFHO0FBQ0gsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxJQUFJLE9BQU8sR0FBRztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLEVBQUUsU0FBUyxJQUFJLEdBQUc7QUFDeEIsSUFBSSxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDOUYsSUFBSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztBQUM5QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQzdCLElBQUksSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ3hFLE1BQU0sT0FBTyxJQUFJLENBQUM7QUFDbEIsS0FBSztBQUNMLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDckIsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbkIsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDdEIsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzdCLE9BQU87QUFDUCxNQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLEtBQUs7QUFDTCxJQUFJLElBQUlELFlBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDbEMsTUFBTSxXQUFXLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ3JELFFBQVEsSUFBSSxFQUFFLElBQUk7QUFDbEIsT0FBTyxDQUFDLENBQUM7QUFDVCxLQUFLO0FBQ0wsSUFBSSxJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNyRSxNQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLEtBQUs7QUFDTCxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNyQixNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDakMsS0FBSztBQUNMLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDaEIsSUFBSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzdCLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNwQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFELElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUMsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzFDLElBQUksSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQzFDLE1BQU0sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEMsTUFBTSxJQUFJLENBQUMsYUFBYSxHQUFHO0FBQzNCLFFBQVEsS0FBSyxFQUFFLFNBQVMsS0FBSyxHQUFHO0FBQ2hDLFVBQVUsY0FBYyxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM5RCxVQUFVLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDeEMsU0FBUztBQUNULE9BQU8sQ0FBQztBQUNSLE1BQU0sUUFBUSxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3pDO0FBQ0E7QUFDQSxNQUFNLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO0FBQ3JELE1BQU0sV0FBVyxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUU7QUFDdkQsUUFBUSxJQUFJLEVBQUUsSUFBSTtBQUNsQixPQUFPLENBQUMsQ0FBQztBQUNULE1BQU0sUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNqQyxLQUFLLE1BQU07QUFDWCxNQUFNLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDakMsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbkIsS0FBSztBQUNMLElBQUksT0FBTyxJQUFJLENBQUM7QUFDaEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksRUFBRSxTQUFTLElBQUksR0FBRztBQUN4QixJQUFJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUNyQixJQUFJLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUM5RixJQUFJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO0FBQzlCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDN0IsSUFBSSxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQzFFLE1BQU0sT0FBTyxJQUFJLENBQUM7QUFDbEIsS0FBSztBQUNMLElBQUksSUFBSUEsWUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNsQyxNQUFNLFdBQVcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDckQsUUFBUSxJQUFJLEVBQUUsSUFBSTtBQUNsQixPQUFPLENBQUMsQ0FBQztBQUNULEtBQUs7QUFDTCxJQUFJLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEQsTUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixLQUFLO0FBQ0wsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDdEIsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2pDLEtBQUs7QUFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3JCLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2xCLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDN0IsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzNCLEtBQUs7QUFDTCxJQUFJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO0FBQzVCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDekIsSUFBSSxJQUFJLGVBQWUsR0FBRyxTQUFTLGVBQWUsR0FBRztBQUNyRCxNQUFNLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDcEMsTUFBTSxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDckIsS0FBSyxDQUFDO0FBQ04sSUFBSSxJQUFJLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDMUMsTUFBTSxJQUFJLHFCQUFxQixHQUFHLFNBQVMscUJBQXFCLENBQUMsS0FBSyxFQUFFO0FBQ3hFO0FBQ0EsUUFBUSxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtBQUM5QyxVQUFVLGNBQWMsQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQUM5RSxVQUFVLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN6QixTQUFTO0FBQ1QsT0FBTyxDQUFDO0FBQ1IsTUFBTSxJQUFJLG9CQUFvQixHQUFHLFNBQVMsb0JBQW9CLEdBQUc7QUFDakU7QUFDQSxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFO0FBQ2hELFVBQVUsV0FBVyxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBQzNFLFVBQVUsV0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN4QyxTQUFTLE1BQU07QUFDZixVQUFVLGVBQWUsRUFBRSxDQUFDO0FBQzVCLFNBQVM7QUFDVCxPQUFPLENBQUM7QUFDUixNQUFNLElBQUksQ0FBQyxhQUFhLEdBQUc7QUFDM0IsUUFBUSxLQUFLLEVBQUUsU0FBUyxLQUFLLEdBQUc7QUFDaEMsVUFBVSxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFO0FBQ2pFLFlBQVksY0FBYyxDQUFDLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0FBQzlFLFdBQVcsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtBQUN6RCxZQUFZLGNBQWMsQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQUNoRixXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU8sQ0FBQztBQUNSO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsRUFBRTtBQUM1RCxRQUFRLFdBQVcsQ0FBQyxLQUFLLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUU7QUFDdkUsVUFBVSxJQUFJLEVBQUUsSUFBSTtBQUNwQixTQUFTLENBQUMsQ0FBQztBQUNYLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEQsT0FBTyxNQUFNO0FBQ2IsUUFBUSxvQkFBb0IsRUFBRSxDQUFDO0FBQy9CLE9BQU87QUFDUCxLQUFLLE1BQU07QUFDWCxNQUFNLGVBQWUsRUFBRSxDQUFDO0FBQ3hCLEtBQUs7QUFDTCxJQUFJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLEVBQUUsU0FBUyxJQUFJLEdBQUc7QUFDeEIsSUFBSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDdEIsSUFBSSxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0FBQ2xILElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0IsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDaEgsTUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixLQUFLO0FBQ0wsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUN2QixNQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLE1BQU0sT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsS0FBSztBQUNMLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ3RCLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUMzQixLQUFLO0FBQ0wsSUFBSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztBQUM5QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztBQUM1QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSztBQUN4QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzNCLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqQyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEMsSUFBSSxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQzFDLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0QyxJQUFJLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLFVBQVUsSUFBSSxFQUFFO0FBQ3pELE1BQU0sSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QyxNQUFNLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtBQUMxQixRQUFRLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLE9BQU87QUFDUCxLQUFLLENBQUMsQ0FBQztBQUNQLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEIsSUFBSSxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwQixJQUFJLElBQUlBLFlBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDbEMsTUFBTSxXQUFXLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ3JELFFBQVEsSUFBSSxFQUFFLElBQUk7QUFDbEIsT0FBTyxDQUFDLENBQUM7QUFDVCxLQUFLO0FBQ0wsSUFBSSxJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFO0FBQzNDLE1BQU0sYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ3ZDLE1BQU0sS0FBSyxFQUFFLEtBQUs7QUFDbEIsTUFBTSxLQUFLLEVBQUUsS0FBSztBQUNsQixLQUFLLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNqRSxNQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLEtBQUs7QUFDTCxJQUFJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVDLElBQUksSUFBSSxVQUFVLEVBQUU7QUFDcEIsTUFBTSxXQUFXLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQzVDLE1BQU0sVUFBVSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNsRCxLQUFLO0FBQ0wsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2pDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0MsSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDdkIsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbkIsS0FBSztBQUNMLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUN4QixJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDeEIsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ3JDLElBQUksSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQ3pCLE1BQU0sUUFBUSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztBQUN0QyxLQUFLO0FBQ0wsSUFBSSxNQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUI7QUFDQTtBQUNBLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3RCO0FBQ0E7QUFDQSxJQUFJLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3pCO0FBQ0E7QUFDQSxJQUFJLElBQUksUUFBUSxHQUFHLFNBQVMsUUFBUSxHQUFHO0FBQ3ZDLE1BQU0sSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUN2QyxNQUFNLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztBQUNuRixNQUFNLEtBQUssQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUNBLFlBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1TSxLQUFLLENBQUM7QUFDTixJQUFJLElBQUksTUFBTSxDQUFDO0FBQ2YsSUFBSSxJQUFJLE9BQU8sQ0FBQztBQUNoQixJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRTtBQUNqRCxNQUFNLElBQUksRUFBRSxJQUFJO0FBQ2hCLEtBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHO0FBQ25CLE1BQU0sS0FBSyxFQUFFLFNBQVMsS0FBSyxHQUFHO0FBQzlCLFFBQVEsY0FBYyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDeEQsUUFBUSxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7QUFDNUIsVUFBVSxJQUFJLE1BQU0sQ0FBQyxjQUFjLEVBQUU7QUFDckMsWUFBWSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzFDLFdBQVcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtBQUMvQyxZQUFZLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM3QyxXQUFXO0FBQ1gsU0FBUyxNQUFNO0FBQ2Y7QUFDQSxVQUFVLEtBQUssQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLFVBQVUsY0FBYyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDcEQsVUFBVSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7QUFDOUIsWUFBWSxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUssQ0FBQztBQUNOLElBQUksSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ3hCLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2xCLEtBQUssTUFBTTtBQUNYLE1BQU0sV0FBVyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxHQUFHLFNBQVMsTUFBTSxHQUFHO0FBQ2hFLFFBQVEsY0FBYyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDcEQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDdEIsT0FBTyxFQUFFO0FBQ1QsUUFBUSxJQUFJLEVBQUUsSUFBSTtBQUNsQixPQUFPLENBQUMsQ0FBQztBQUNULE1BQU0sV0FBVyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsT0FBTyxHQUFHLFNBQVMsT0FBTyxHQUFHO0FBQ25FLFFBQVEsY0FBYyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDbEQsUUFBUSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7QUFDNUIsVUFBVSxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZDLFVBQVUsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDakMsU0FBUztBQUNULFFBQVEsV0FBVyxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztBQUM1QyxRQUFRLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUM3QixVQUFVLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3BELFNBQVM7QUFDVCxPQUFPLEVBQUU7QUFDVCxRQUFRLElBQUksRUFBRSxJQUFJO0FBQ2xCLE9BQU8sQ0FBQyxDQUFDO0FBQ1QsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDeEIsUUFBUSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25DLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxZQUFZO0FBQzVDLFFBQVEsV0FBVyxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztBQUM1QyxRQUFRLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQy9CLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNmLEtBQUs7QUFDTCxJQUFJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksRUFBRSxTQUFTLElBQUksR0FBRztBQUN4QixJQUFJLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUN6RixJQUFJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO0FBQ25CLE1BQU0sS0FBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsS0FBSztBQUNMLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixJQUFJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksRUFBRSxTQUFTLElBQUksR0FBRztBQUN4QixJQUFJLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUN6RixJQUFJLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDL0IsSUFBSSxJQUFJLEtBQUssR0FBRyxRQUFRLEVBQUU7QUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7QUFDbEMsS0FBSztBQUNMLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixJQUFJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksRUFBRSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUU7QUFDekIsSUFBSSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEYsSUFBSSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ25DLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1RyxJQUFJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsTUFBTSxFQUFFLFNBQVMsTUFBTSxDQUFDLENBQUMsRUFBRTtBQUM3QixJQUFJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUN0QixJQUFJLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsRixJQUFJLElBQUksY0FBYyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNsRyxJQUFJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO0FBQzlCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO0FBQzVCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDakMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQixJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUN4RCxNQUFNLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsTUFBTSxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzdCLE1BQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQzFCLE1BQU0sSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDdkIsUUFBUSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLE9BQU8sTUFBTTtBQUNiLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNqQixPQUFPO0FBQ1AsTUFBTSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUN2QixRQUFRLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDdkIsT0FBTyxNQUFNO0FBQ2IsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLE9BQU87QUFDUCxNQUFNLElBQUksT0FBTyxFQUFFO0FBQ25CLFFBQVEsSUFBSUEsWUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN0QyxVQUFVLFdBQVcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDekQsWUFBWSxJQUFJLEVBQUUsSUFBSTtBQUN0QixXQUFXLENBQUMsQ0FBQztBQUNiLFNBQVM7QUFDVCxRQUFRLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUU7QUFDL0MsVUFBVSxDQUFDLEVBQUUsQ0FBQztBQUNkLFVBQVUsQ0FBQyxFQUFFLENBQUM7QUFDZCxVQUFVLElBQUksRUFBRSxJQUFJO0FBQ3BCLFVBQVUsSUFBSSxFQUFFLElBQUk7QUFDcEIsVUFBVSxhQUFhLEVBQUUsY0FBYztBQUN2QyxTQUFTLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEIsVUFBVSxPQUFPLElBQUksQ0FBQztBQUN0QixTQUFTO0FBQ1QsUUFBUSxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QixRQUFRLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLFFBQVEsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7QUFDM0IsUUFBUSxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUMxQixRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQzNCLFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZO0FBQ3JDLFVBQVUsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDaEMsVUFBVSxJQUFJQSxZQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3pDLFlBQVksV0FBVyxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRTtBQUM3RCxjQUFjLElBQUksRUFBRSxJQUFJO0FBQ3hCLGFBQWEsQ0FBQyxDQUFDO0FBQ2YsV0FBVztBQUNYLFVBQVUsYUFBYSxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUU7QUFDOUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztBQUNoQixZQUFZLENBQUMsRUFBRSxDQUFDO0FBQ2hCLFlBQVksSUFBSSxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLEVBQUUsSUFBSTtBQUN0QixZQUFZLGFBQWEsRUFBRSxjQUFjO0FBQ3pDLFdBQVcsRUFBRTtBQUNiLFlBQVksVUFBVSxFQUFFLEtBQUs7QUFDN0IsV0FBVyxDQUFDLENBQUM7QUFDYixTQUFTLENBQUMsQ0FBQztBQUNYLE9BQU87QUFDUCxLQUFLO0FBQ0wsSUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsTUFBTSxFQUFFLFNBQVMsTUFBTSxDQUFDLE1BQU0sRUFBRTtBQUNsQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDakUsSUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsUUFBUSxFQUFFLFNBQVMsUUFBUSxDQUFDLE1BQU0sRUFBRTtBQUN0QyxJQUFJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUN0QixJQUFJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO0FBQzlCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO0FBQzVCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDakMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVCLElBQUksSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtBQUM5RSxNQUFNLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFDdkMsTUFBTSxJQUFJQSxZQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ3RDLFFBQVEsV0FBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUMzRCxVQUFVLElBQUksRUFBRSxJQUFJO0FBQ3BCLFNBQVMsQ0FBQyxDQUFDO0FBQ1gsT0FBTztBQUNQLE1BQU0sSUFBSSxhQUFhLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRTtBQUMvQyxRQUFRLE1BQU0sRUFBRSxNQUFNO0FBQ3RCLFFBQVEsU0FBUyxFQUFFLFNBQVM7QUFDNUIsT0FBTyxDQUFDLEtBQUssS0FBSyxFQUFFO0FBQ3BCLFFBQVEsT0FBTyxJQUFJLENBQUM7QUFDcEIsT0FBTztBQUNQLE1BQU0sU0FBUyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUMzQixNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWTtBQUNuQyxRQUFRLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ2hDLFFBQVEsSUFBSUEsWUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUN6QyxVQUFVLFdBQVcsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUU7QUFDL0QsWUFBWSxJQUFJLEVBQUUsSUFBSTtBQUN0QixXQUFXLENBQUMsQ0FBQztBQUNiLFNBQVM7QUFDVCxRQUFRLGFBQWEsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFO0FBQzlDLFVBQVUsTUFBTSxFQUFFLE1BQU07QUFDeEIsVUFBVSxTQUFTLEVBQUUsU0FBUztBQUM5QixTQUFTLEVBQUU7QUFDWCxVQUFVLFVBQVUsRUFBRSxLQUFLO0FBQzNCLFNBQVMsQ0FBQyxDQUFDO0FBQ1gsT0FBTyxDQUFDLENBQUM7QUFDVCxLQUFLO0FBQ0wsSUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsTUFBTSxFQUFFLFNBQVMsTUFBTSxDQUFDLE9BQU8sRUFBRTtBQUNuQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0MsSUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsTUFBTSxFQUFFLFNBQVMsTUFBTSxDQUFDLE9BQU8sRUFBRTtBQUNuQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0MsSUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUFLLEVBQUUsU0FBUyxLQUFLLENBQUMsTUFBTSxFQUFFO0FBQ2hDLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLElBQUksSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQzVGLElBQUksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87QUFDOUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87QUFDNUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUNqQyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUIsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVCLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO0FBQ3pELE1BQU0sSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUN2QyxNQUFNLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFDdkMsTUFBTSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDMUIsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUM1QixRQUFRLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDdkIsT0FBTyxNQUFNO0FBQ2IsUUFBUSxNQUFNLEdBQUcsU0FBUyxDQUFDO0FBQzNCLE9BQU87QUFDUCxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQzVCLFFBQVEsT0FBTyxHQUFHLElBQUksQ0FBQztBQUN2QixPQUFPLE1BQU07QUFDYixRQUFRLE1BQU0sR0FBRyxTQUFTLENBQUM7QUFDM0IsT0FBTztBQUNQLE1BQU0sSUFBSSxPQUFPLEVBQUU7QUFDbkIsUUFBUSxJQUFJQSxZQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3ZDLFVBQVUsV0FBVyxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRTtBQUMzRCxZQUFZLElBQUksRUFBRSxJQUFJO0FBQ3RCLFdBQVcsQ0FBQyxDQUFDO0FBQ2IsU0FBUztBQUNULFFBQVEsSUFBSSxhQUFhLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUNoRCxVQUFVLE1BQU0sRUFBRSxNQUFNO0FBQ3hCLFVBQVUsTUFBTSxFQUFFLE1BQU07QUFDeEIsVUFBVSxTQUFTLEVBQUUsU0FBUztBQUM5QixVQUFVLFNBQVMsRUFBRSxTQUFTO0FBQzlCLFNBQVMsQ0FBQyxLQUFLLEtBQUssRUFBRTtBQUN0QixVQUFVLE9BQU8sSUFBSSxDQUFDO0FBQ3RCLFNBQVM7QUFDVCxRQUFRLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ2xDLFFBQVEsU0FBUyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDbEMsUUFBUSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUM1QixRQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWTtBQUNyQyxVQUFVLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ2pDLFVBQVUsSUFBSUEsWUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUMxQyxZQUFZLFdBQVcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDL0QsY0FBYyxJQUFJLEVBQUUsSUFBSTtBQUN4QixhQUFhLENBQUMsQ0FBQztBQUNmLFdBQVc7QUFDWCxVQUFVLGFBQWEsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFO0FBQy9DLFlBQVksTUFBTSxFQUFFLE1BQU07QUFDMUIsWUFBWSxNQUFNLEVBQUUsTUFBTTtBQUMxQixZQUFZLFNBQVMsRUFBRSxTQUFTO0FBQ2hDLFlBQVksU0FBUyxFQUFFLFNBQVM7QUFDaEMsV0FBVyxFQUFFO0FBQ2IsWUFBWSxVQUFVLEVBQUUsS0FBSztBQUM3QixXQUFXLENBQUMsQ0FBQztBQUNiLFNBQVMsQ0FBQyxDQUFDO0FBQ1gsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxJQUFJLEVBQUUsU0FBUyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQzdCLElBQUksSUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ2hHLElBQUksSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3pGLElBQUksSUFBSSxjQUFjLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2xHLElBQUksSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUNuQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDMUIsSUFBSSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7QUFDbkIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUM5QixLQUFLLE1BQU07QUFDWCxNQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLEtBQUs7QUFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsU0FBUyxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQ3RHLElBQUksT0FBTyxJQUFJLENBQUM7QUFDaEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsTUFBTSxFQUFFLFNBQVMsTUFBTSxDQUFDLEtBQUssRUFBRTtBQUNqQyxJQUFJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUN0QixJQUFJLElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUNoRyxJQUFJLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUN6RixJQUFJLElBQUksY0FBYyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNsRyxJQUFJLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUM5RixJQUFJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO0FBQzlCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO0FBQzVCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRO0FBQzlCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDakMsSUFBSSxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUN2QixNQUFNLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUNyQixNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSztBQUM3QixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTTtBQUMvQixNQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWTtBQUMzQyxNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDO0FBQzlDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQy9CLElBQUksSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUMzRixNQUFNLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDdEIsUUFBUSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDaEUsUUFBUSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDL0QsUUFBUSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN0RSxPQUFPO0FBQ1AsTUFBTSxJQUFJLGNBQWMsRUFBRTtBQUMxQixRQUFRLFFBQVEsY0FBYyxDQUFDLElBQUk7QUFDbkMsVUFBVSxLQUFLLE9BQU87QUFDdEIsWUFBWSxJQUFJLE9BQU8sQ0FBQyxTQUFTLElBQUksS0FBSyxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksRUFBRTtBQUM1RSxjQUFjLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDeEIsYUFBYTtBQUNiLFlBQVksTUFBTTtBQUNsQixVQUFVLEtBQUssYUFBYSxDQUFDO0FBQzdCLFVBQVUsS0FBSyxXQUFXLENBQUM7QUFDM0IsVUFBVSxLQUFLLFdBQVc7QUFDMUIsWUFBWSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksRUFBRTtBQUM5QyxjQUFjLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDeEIsYUFBYTtBQUNiLFlBQVksTUFBTTtBQUNsQixTQUFTO0FBQ1QsT0FBTztBQUNQLE1BQU0sSUFBSSxRQUFRLEdBQUcsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUMxQyxNQUFNLElBQUksU0FBUyxHQUFHLGFBQWEsR0FBRyxLQUFLLENBQUM7QUFDNUMsTUFBTSxJQUFJLFdBQVcsR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3pDLE1BQU0sSUFBSSxZQUFZLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUM1QyxNQUFNLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFDckMsTUFBTSxJQUFJQSxZQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3BDLFFBQVEsV0FBVyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRTtBQUN2RCxVQUFVLElBQUksRUFBRSxJQUFJO0FBQ3BCLFNBQVMsQ0FBQyxDQUFDO0FBQ1gsT0FBTztBQUNQLE1BQU0sSUFBSSxhQUFhLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRTtBQUM3QyxRQUFRLEtBQUssRUFBRSxLQUFLO0FBQ3BCLFFBQVEsUUFBUSxFQUFFLFFBQVE7QUFDMUIsUUFBUSxhQUFhLEVBQUUsY0FBYztBQUNyQyxPQUFPLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDcEIsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixPQUFPO0FBQ1AsTUFBTSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztBQUMxQixNQUFNLElBQUksY0FBYyxFQUFFO0FBQzFCLFFBQVEsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1QyxRQUFRLElBQUksTUFBTSxHQUFHLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEdBQUc7QUFDbEcsVUFBVSxLQUFLLEVBQUUsY0FBYyxDQUFDLEtBQUs7QUFDckMsVUFBVSxLQUFLLEVBQUUsY0FBYyxDQUFDLEtBQUs7QUFDckMsU0FBUyxDQUFDO0FBQ1Y7QUFDQTtBQUNBLFFBQVEsU0FBUyxDQUFDLENBQUMsSUFBSSxXQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQ2hGLFFBQVEsU0FBUyxDQUFDLENBQUMsSUFBSSxZQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO0FBQ2pGLE9BQU8sTUFBTSxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDakYsUUFBUSxTQUFTLENBQUMsQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQzdELFFBQVEsU0FBUyxDQUFDLENBQUMsSUFBSSxZQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQztBQUMvRCxPQUFPLE1BQU07QUFDYjtBQUNBLFFBQVEsU0FBUyxDQUFDLENBQUMsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZDLFFBQVEsU0FBUyxDQUFDLENBQUMsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLE9BQU87QUFDUCxNQUFNLFNBQVMsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNuQyxNQUFNLFNBQVMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNsQyxNQUFNLFNBQVMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0FBQ2pDLE1BQU0sU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7QUFDbkMsTUFBTSxTQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUNwQyxNQUFNLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQzlCLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZO0FBQ25DLFFBQVEsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDL0IsUUFBUSxJQUFJQSxZQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ3hDLFVBQVUsV0FBVyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUM3RCxZQUFZLElBQUksRUFBRSxJQUFJO0FBQ3RCLFdBQVcsQ0FBQyxDQUFDO0FBQ2IsU0FBUztBQUNULFFBQVEsYUFBYSxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUU7QUFDN0MsVUFBVSxLQUFLLEVBQUUsS0FBSztBQUN0QixVQUFVLFFBQVEsRUFBRSxRQUFRO0FBQzVCLFVBQVUsYUFBYSxFQUFFLGNBQWM7QUFDdkMsU0FBUyxFQUFFO0FBQ1gsVUFBVSxVQUFVLEVBQUUsS0FBSztBQUMzQixTQUFTLENBQUMsQ0FBQztBQUNYLE9BQU8sQ0FBQyxDQUFDO0FBQ1QsTUFBTSxJQUFJLFdBQVcsRUFBRTtBQUN2QixRQUFRLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN2QixPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUksT0FBTyxJQUFJLENBQUM7QUFDaEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksRUFBRSxTQUFTLElBQUksR0FBRztBQUN4QixJQUFJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUN0QixJQUFJLElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUMvRixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDdEMsTUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixLQUFLO0FBQ0wsSUFBSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztBQUM5QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQzdCLElBQUksSUFBSUEsWUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNsQyxNQUFNLFdBQVcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDckQsUUFBUSxJQUFJLEVBQUUsSUFBSTtBQUNsQixPQUFPLENBQUMsQ0FBQztBQUNULEtBQUs7QUFDTCxJQUFJLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEQsTUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixLQUFLO0FBQ0wsSUFBSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzdCLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0MsSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDbEIsSUFBSSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDbEIsSUFBSSxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDbEIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUN2QixJQUFJLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO0FBQ2pDLElBQUksSUFBSSxVQUFVLEVBQUU7QUFDcEIsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDekMsS0FBSztBQUNMLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNqQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRTtBQUMzQyxNQUFNLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDMUMsTUFBTSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hELE1BQU0sS0FBSyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQzlDLE1BQU0sS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLE1BQU0sS0FBSyxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDO0FBQ2hELE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQztBQUNqQixNQUFNLFFBQVEsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDbEMsTUFBTSxXQUFXLENBQUMsS0FBSyxFQUFFLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMvRCxNQUFNLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsRUFBRTtBQUN4QyxRQUFRLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDbEMsUUFBUSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLE9BQU87QUFDUCxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkIsTUFBTSxXQUFXLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7QUFDN0MsUUFBUSxJQUFJLEVBQUUsSUFBSTtBQUNsQixPQUFPLENBQUMsQ0FBQztBQUNULE1BQU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxLQUFLLENBQUMsQ0FBQztBQUNQLElBQUksSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO0FBQzVELE1BQU0sSUFBSSxJQUFJLEdBQUcsU0FBUyxJQUFJLEdBQUc7QUFDakMsUUFBUSxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QyxRQUFRLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDM0MsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDO0FBQ25CLFFBQVEsS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDL0MsUUFBUSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3hDLFFBQVEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEUsT0FBTyxDQUFDO0FBQ1IsTUFBTSxJQUFJLElBQUksR0FBRyxTQUFTLElBQUksR0FBRztBQUNqQyxRQUFRLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLFFBQVEsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMzQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUM7QUFDbkIsUUFBUSxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQzFDLFFBQVEsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN4QyxRQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BFLE9BQU8sQ0FBQztBQUNSLE1BQU0sSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO0FBQ3JCLFFBQVEsSUFBSSxDQUFDLE9BQU8sR0FBRztBQUN2QixVQUFVLElBQUksRUFBRSxJQUFJO0FBQ3BCLFVBQVUsSUFBSSxFQUFFLElBQUk7QUFDcEIsVUFBVSxPQUFPLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDO0FBQ3JELFNBQVMsQ0FBQztBQUNWLE9BQU87QUFDUCxLQUFLO0FBQ0wsSUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixHQUFHO0FBQ0g7QUFDQSxFQUFFLElBQUksRUFBRSxTQUFTLElBQUksR0FBRztBQUN4QixJQUFJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3RCLE1BQU0sT0FBTyxJQUFJLENBQUM7QUFDbEIsS0FBSztBQUNMLElBQUksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87QUFDOUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUM3QixJQUFJLElBQUlBLFlBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDbEMsTUFBTSxXQUFXLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ3JELFFBQVEsSUFBSSxFQUFFLElBQUk7QUFDbEIsT0FBTyxDQUFDLENBQUM7QUFDVCxLQUFLO0FBQ0wsSUFBSSxJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEtBQUssS0FBSyxFQUFFO0FBQ3RELE1BQU0sT0FBTyxJQUFJLENBQUM7QUFDbEIsS0FBSztBQUNMLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUM3QixJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZDLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUN4QixJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEVBQUUsVUFBVSxLQUFLLEVBQUU7QUFDakUsTUFBTSxjQUFjLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDL0QsS0FBSyxDQUFDLENBQUM7QUFDUCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDcEMsSUFBSSxNQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMxQixJQUFJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxFQUFFLFNBQVMsSUFBSSxHQUFHO0FBQ3hCLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLElBQUksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87QUFDOUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU07QUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7QUFDeEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN2QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDeEUsTUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixLQUFLO0FBQ0wsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUN2QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNoQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLHFCQUFxQixDQUFDLENBQUM7QUFDakQsSUFBSSxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7QUFDNUIsTUFBTSxXQUFXLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDMUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDdkIsUUFBUSxXQUFXLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDN0MsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDbEMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMxQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVDLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7QUFDckIsTUFBTSxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07QUFDNUIsS0FBSyxDQUFDLENBQUM7QUFDUCxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtBQUN2QixNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUMxQixLQUFLO0FBQ0wsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDekIsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHQyxRQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNyRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN0QixJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNyQixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWTtBQUNqQyxRQUFRLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWTtBQUN2QyxVQUFVLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtBQUNsQyxZQUFZLFVBQVUsQ0FBQyxZQUFZO0FBQ25DLGNBQWMsUUFBUSxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2hELGNBQWMsUUFBUSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQy9DLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsQixXQUFXO0FBQ1gsU0FBUyxDQUFDLENBQUM7QUFDWCxPQUFPLENBQUMsQ0FBQztBQUNULEtBQUs7QUFDTCxJQUFJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxFQUFFLFNBQVMsSUFBSSxHQUFHO0FBQ3hCLElBQUksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLElBQUksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87QUFDOUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU07QUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7QUFDeEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN2QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUN6RSxNQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLEtBQUs7QUFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2pCLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQUNwRCxJQUFJLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtBQUM1QixNQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUMxQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUN2QixRQUFRLFdBQVcsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUM3QyxPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO0FBQ3ZCLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFDL0IsS0FBSztBQUNMLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQyxJQUFJLE1BQU0sQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUM5QyxJQUFJLE1BQU0sQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekMsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3JDLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtBQUNyQixNQUFNLE1BQU0sRUFBRSxPQUFPLENBQUMsWUFBWTtBQUNsQyxLQUFLLENBQUMsQ0FBQztBQUNQLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBR0EsUUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbEQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDeEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDdEIsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDckIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVk7QUFDakMsUUFBUSxPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVk7QUFDeEMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7QUFDbEMsWUFBWSxVQUFVLENBQUMsWUFBWTtBQUNuQyxjQUFjLFFBQVEsQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUNoRCxjQUFjLFFBQVEsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUMvQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEIsV0FBVztBQUNYLFNBQVMsQ0FBQyxDQUFDO0FBQ1gsT0FBTyxDQUFDLENBQUM7QUFDVCxLQUFLO0FBQ0wsSUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixHQUFHO0FBQ0g7QUFDQSxFQUFFLE9BQU8sRUFBRSxTQUFTLE9BQU8sR0FBRztBQUM5QixJQUFJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztBQUN2QixJQUFJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO0FBQzlCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVO0FBQ2xDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDakMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUN6RCxNQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLEtBQUs7QUFDTCxJQUFJLFVBQVUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDL0UsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUMzQixNQUFNLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtBQUM5QixRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUN6QixVQUFVLGFBQWEsQ0FBQyxVQUFVLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQUMxRCxTQUFTO0FBQ1QsUUFBUSxRQUFRLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3pDLFFBQVEsUUFBUSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN6QyxRQUFRLFFBQVEsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUMvQyxRQUFRLFVBQVUsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDbEQ7QUFDQTtBQUNBLFFBQVEsVUFBVSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUM7QUFDL0QsUUFBUSxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDLE9BQU8sTUFBTTtBQUNiLFFBQVEsUUFBUSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN6QyxRQUFRLFVBQVUsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDbEQsT0FBTztBQUNQLEtBQUssTUFBTTtBQUNYLE1BQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQyxLQUFLO0FBQ0wsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxZQUFZO0FBQzlDLE1BQU0sSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO0FBQzlCLFFBQVEsV0FBVyxDQUFDLFVBQVUsRUFBRSxvQkFBb0IsRUFBRSxZQUFZO0FBQ2xFLFVBQVUsV0FBVyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUM5QyxVQUFVLFdBQVcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDOUMsVUFBVSxXQUFXLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDcEQsVUFBVSxVQUFVLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN2RCxVQUFVLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ2pDLFNBQVMsRUFBRTtBQUNYLFVBQVUsSUFBSSxFQUFFLElBQUk7QUFDcEIsU0FBUyxDQUFDLENBQUM7QUFDWCxRQUFRLFdBQVcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDMUMsUUFBUSxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUM5QixPQUFPLE1BQU07QUFDYixRQUFRLFdBQVcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDNUMsUUFBUSxVQUFVLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyRCxPQUFPO0FBQ1AsTUFBTSxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUNsQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDYixJQUFJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxNQUFNLEVBQUUsU0FBUyxNQUFNLEdBQUc7QUFDNUIsSUFBSSxJQUFJLGNBQWMsR0FBRyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDbEcsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtBQUNwQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztBQUN2RSxLQUFLLE1BQU07QUFDWCxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDakQsS0FBSztBQUNMLElBQUksT0FBTyxJQUFJLENBQUM7QUFDaEIsR0FBRztBQUNIO0FBQ0EsRUFBRSxLQUFLLEVBQUUsU0FBUyxLQUFLLEdBQUc7QUFDMUIsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3JDLE1BQU0sSUFBSSxDQUFDLFNBQVMsR0FBR0EsUUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN6RCxNQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN6QixLQUFLO0FBQ0wsSUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixHQUFHO0FBQ0g7QUFDQSxFQUFFLE1BQU0sRUFBRSxTQUFTLE1BQU0sR0FBRztBQUM1QixJQUFJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztBQUN2QixJQUFJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO0FBQzlCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO0FBQzVCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDekI7QUFDQTtBQUNBLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO0FBQ3RDLE1BQU0sT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDNUIsS0FBSztBQUNMLElBQUksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLElBQUksT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLEtBQUssRUFBRTtBQUNsRixNQUFNLElBQUlELFlBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDdEMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtBQUNqRCxVQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0IsU0FBUztBQUNULE9BQU8sTUFBTSxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDN0MsUUFBUSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzNCLE9BQU87QUFDUCxLQUFLLENBQUMsQ0FBQztBQUNQLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7QUFDeEIsTUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixLQUFLO0FBQ0wsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNwQixNQUFNLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUM5QixNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRTtBQUM3QyxRQUFRLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUMsUUFBUSxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsUUFBUSxJQUFJLEtBQUssSUFBSSxHQUFHLEVBQUU7QUFDMUIsVUFBVSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUc7QUFDbkM7QUFDQTtBQUNBLGFBQWEsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFO0FBQ3BDLFlBQVksY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQyxXQUFXO0FBQ1gsU0FBUyxNQUFNO0FBQ2YsVUFBVSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLFNBQVM7QUFDVCxPQUFPLENBQUMsQ0FBQztBQUNULE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDMUIsUUFBUSxLQUFLLEVBQUUsTUFBTTtBQUNyQixPQUFPLENBQUMsQ0FBQztBQUNULE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3RCLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ3hCLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3pCLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQzNCLFlBQVksSUFBSSxZQUFZLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEUsWUFBWSxJQUFJLFlBQVksSUFBSSxDQUFDLEVBQUU7QUFDbkMsY0FBYyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUNsQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzRixhQUFhLE1BQU07QUFDbkIsY0FBYyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN0RDtBQUNBO0FBQ0EsY0FBYyxRQUFRLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2pELGNBQWMsVUFBVSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0QsYUFBYTtBQUNiLFdBQVc7QUFDWCxTQUFTLE1BQU07QUFDZixVQUFVLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQzVCLFVBQVUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDOUIsVUFBVSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUN6QixVQUFVLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQzlCLFVBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3JDLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3BDLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSyxNQUFNO0FBQ1gsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbkIsS0FBSztBQUNMLElBQUksT0FBTyxJQUFJLENBQUM7QUFDaEIsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLEVBQUUsU0FBUyxPQUFPLEdBQUc7QUFDOUIsSUFBSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztBQUM5QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUM3QixNQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLEtBQUs7QUFDTCxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQzFCLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3BCLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3ZCLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3BCLE9BQU87QUFDUCxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUMxQixRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUN6QixVQUFVLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN0QixTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDdEIsT0FBTyxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUMvQixRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUMxQixVQUFVLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUNuQyxZQUFZLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDeEMsV0FBVyxNQUFNLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO0FBQzdDLFlBQVksSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzNDLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDekIsVUFBVSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3JDLFNBQVM7QUFDVCxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN0QixPQUFPLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQy9CLFFBQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNuQyxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN0QixPQUFPO0FBQ1AsTUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUN6QixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEQsS0FBSyxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUMvQixNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUN6QixRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDOUIsT0FBTyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUNwQyxRQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbEMsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQ3pCLE1BQU0sY0FBYyxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pELEtBQUs7QUFDTCxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUM7QUFDbkMsSUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixHQUFHO0FBQ0gsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxJQUFJLE1BQU0sR0FBRztBQUNiLEVBQUUsV0FBVyxFQUFFLFNBQVMsV0FBVyxDQUFDLEtBQUssRUFBRTtBQUMzQyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQy9CLElBQUksSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDdkIsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQyxLQUFLLE1BQU0sSUFBSUEsWUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ2hDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLEtBQUssTUFBTTtBQUNYLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNmLEtBQUs7QUFDTCxJQUFJLE9BQU8sR0FBRyxDQUFDO0FBQ2YsR0FBRztBQUNILEVBQUUsWUFBWSxFQUFFLFNBQVMsWUFBWSxHQUFHO0FBQ3hDLElBQUksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFDN0IsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsS0FBSyxFQUFFO0FBQzNFLE1BQU0sSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUNoQyxNQUFNLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDaEMsTUFBTSxJQUFJLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQy9FLFFBQVEsT0FBTztBQUNmLE9BQU87QUFDUCxNQUFNLE9BQU8sTUFBTSxFQUFFO0FBQ3JCO0FBQ0EsUUFBUSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssTUFBTSxFQUFFO0FBQ3RHLFVBQVUsT0FBTztBQUNqQixTQUFTO0FBQ1QsUUFBUSxNQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztBQUN0QyxPQUFPO0FBQ1AsTUFBTSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDckIsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHO0FBQ0gsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLGlCQUFpQixHQUFHO0FBQ2xELElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ3hCLE1BQU0sY0FBYyxDQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlELE1BQU0sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDNUIsS0FBSztBQUNMLEdBQUc7QUFDSCxFQUFFLElBQUksRUFBRSxTQUFTLElBQUksR0FBRztBQUN4QixJQUFJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQy9CLElBQUksSUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRTtBQUNqQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDL0gsS0FBSztBQUNMLEdBQUc7QUFDSCxFQUFFLEtBQUssRUFBRSxTQUFTLEtBQUssR0FBRztBQUMxQixJQUFJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2xDLElBQUksSUFBSSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRTtBQUNqQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztBQUM3RCxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUUsS0FBSyxFQUFFLFNBQVMsS0FBSyxHQUFHO0FBQzFCLElBQUksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87QUFDOUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87QUFDNUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDeEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDaEIsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUN6QixJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtBQUN2QixNQUFNLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNyQixNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUMxQixLQUFLO0FBQ0wsSUFBSSxJQUFJQSxZQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ25DLE1BQU0sV0FBVyxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRTtBQUN2RCxRQUFRLElBQUksRUFBRSxJQUFJO0FBQ2xCLE9BQU8sQ0FBQyxDQUFDO0FBQ1QsS0FBSztBQUNMLElBQUksSUFBSSxhQUFhLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxLQUFLLEtBQUssRUFBRTtBQUN2RCxNQUFNLE9BQU87QUFDYixLQUFLO0FBQ0wsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDcEQsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1QixLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUUsTUFBTSxFQUFFLFNBQVMsTUFBTSxHQUFHO0FBQzVCLElBQUksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87QUFDOUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87QUFDNUIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUMzQixJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtBQUN2QixNQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQy9CLEtBQUs7QUFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDeEIsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUN6QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNqQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNsQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDakMsSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25DLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzlDLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN6QyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3JCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3RCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUN6QixNQUFNLElBQUlBLFlBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDdEMsUUFBUSxXQUFXLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQzNELFVBQVUsSUFBSSxFQUFFLElBQUk7QUFDcEIsU0FBUyxDQUFDLENBQUM7QUFDWCxPQUFPO0FBQ1AsTUFBTSxhQUFhLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUU7QUFDakQsUUFBUSxVQUFVLEVBQUUsS0FBSztBQUN6QixPQUFPLENBQUMsQ0FBQztBQUNULEtBQUs7QUFDTCxHQUFHO0FBQ0gsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtBQUN6RCxJQUFJLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO0FBQzlDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsUUFBUSxDQUFDLGlCQUFpQixJQUFJLFFBQVEsQ0FBQyx1QkFBdUIsSUFBSSxRQUFRLENBQUMsb0JBQW9CLElBQUksUUFBUSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7QUFDM0osTUFBTSxJQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO0FBQ3JEO0FBQ0E7QUFDQSxNQUFNLElBQUksZUFBZSxDQUFDLGlCQUFpQixFQUFFO0FBQzdDO0FBQ0EsUUFBUSxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNwQyxVQUFVLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyRCxTQUFTLE1BQU07QUFDZixVQUFVLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQzlDLFNBQVM7QUFDVCxPQUFPLE1BQU0sSUFBSSxlQUFlLENBQUMsdUJBQXVCLEVBQUU7QUFDMUQsUUFBUSxlQUFlLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDOUUsT0FBTyxNQUFNLElBQUksZUFBZSxDQUFDLG9CQUFvQixFQUFFO0FBQ3ZELFFBQVEsZUFBZSxDQUFDLG9CQUFvQixFQUFFLENBQUM7QUFDL0MsT0FBTyxNQUFNLElBQUksZUFBZSxDQUFDLG1CQUFtQixFQUFFO0FBQ3RELFFBQVEsZUFBZSxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFDOUMsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0gsRUFBRSxjQUFjLEVBQUUsU0FBUyxjQUFjLEdBQUc7QUFDNUMsSUFBSSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUM5QyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsaUJBQWlCLElBQUksUUFBUSxDQUFDLHVCQUF1QixJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsSUFBSSxRQUFRLENBQUMsbUJBQW1CLENBQUMsRUFBRTtBQUMxSjtBQUNBLE1BQU0sSUFBSSxRQUFRLENBQUMsY0FBYyxFQUFFO0FBQ25DLFFBQVEsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ2xDLE9BQU8sTUFBTSxJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtBQUNoRCxRQUFRLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0FBQ3hDLE9BQU8sTUFBTSxJQUFJLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtBQUMvQyxRQUFRLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQ3ZDLE9BQU8sTUFBTSxJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtBQUM1QyxRQUFRLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3BDLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUUsTUFBTSxFQUFFLFNBQVMsTUFBTSxDQUFDLEtBQUssRUFBRTtBQUNqQyxJQUFJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO0FBQzlCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDL0IsSUFBSSxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JEO0FBQ0E7QUFDQSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDbEIsTUFBTSxPQUFPO0FBQ2IsS0FBSztBQUNMLElBQUksSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQ2hELElBQUksSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQ2hELElBQUksUUFBUSxJQUFJLENBQUMsTUFBTTtBQUN2QjtBQUNBLE1BQU0sS0FBSyxXQUFXO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzNDLFFBQVEsTUFBTTtBQUNkO0FBQ0E7QUFDQSxNQUFNLEtBQUssV0FBVztBQUN0QixRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDakUsUUFBUSxNQUFNO0FBQ2QsTUFBTSxLQUFLLGFBQWE7QUFDeEIsUUFBUTtBQUNSLFVBQVUsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7QUFDbkMsVUFBVSxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELFVBQVUsSUFBSSxlQUFlLEdBQUcsQ0FBQyxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQzFFO0FBQ0EsWUFBWSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUMvQixZQUFZLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRTtBQUM3QixjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLGFBQWEsTUFBTSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNyQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLGFBQWE7QUFDYixXQUFXO0FBQ1gsVUFBVSxNQUFNO0FBQ2hCLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsRUFBRTtBQUNuQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUN4QixNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUN4QixLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSCxFQUFFLFlBQVksRUFBRSxTQUFTLFlBQVksR0FBRztBQUN4QyxJQUFJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTO0FBQ2xDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDbkMsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUM7QUFDbkosR0FBRztBQUNILENBQUMsQ0FBQztBQUNGO0FBQ0EsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNsQyxJQUFJLFdBQVcsR0FBRyxVQUFVLEVBQUUsRUFBRTtBQUNoQyxFQUFFLE9BQU8sWUFBWTtBQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDWixJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2QsR0FBRyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDTixJQUFJLE1BQU0sZ0JBQWdCLFlBQVk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsU0FBUyxNQUFNLENBQUMsT0FBTyxFQUFFO0FBQzNCLElBQUksSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3pGLElBQUksZUFBZSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNsQyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7QUFDNUMsTUFBTSxNQUFNLElBQUksS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7QUFDaEYsS0FBSztBQUNMLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDM0IsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHQyxRQUFNLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUM7QUFDM0UsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUN4QixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDeEIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUN4QixJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQzlCLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7QUFDL0MsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUN2QixJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUN4QixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDekIsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUN2QixJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3ZCLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUN6QixJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDekIsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDekIsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUMxQixJQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDOUIsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFHLFdBQVcsRUFBRSxDQUFDO0FBQzVCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2hCLEdBQUc7QUFDSCxFQUFFLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN4QixJQUFJLEdBQUcsRUFBRSxNQUFNO0FBQ2YsSUFBSSxLQUFLLEVBQUUsU0FBUyxJQUFJLEdBQUc7QUFDM0IsTUFBTSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDdkIsTUFBTSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztBQUNoQyxRQUFRLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQy9CLE1BQU0sSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDOUIsUUFBUSxPQUFPO0FBQ2YsT0FBTztBQUNQLE1BQU0sT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNoQztBQUNBO0FBQ0EsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO0FBQzlDLFFBQVEsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDOUIsT0FBTztBQUNQLE1BQU0sSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUM7QUFDOUMsTUFBTSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDdEIsTUFBTSxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsS0FBSyxFQUFFO0FBQ3BGLFFBQVEsSUFBSUQsWUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUN4QyxVQUFVLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFO0FBQ2pELFlBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixXQUFXO0FBQ1gsU0FBUyxNQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUM3QyxVQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDN0IsU0FBUztBQUNULE9BQU8sQ0FBQyxDQUFDO0FBQ1QsTUFBTSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUN6QixNQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNsQyxNQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzNCLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3RCO0FBQ0E7QUFDQSxNQUFNLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQzNFLFFBQVEsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDbkMsT0FBTztBQUNQLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQzFCLFFBQVEsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLFFBQVEsSUFBSSxRQUFRLEdBQUcsU0FBUyxRQUFRLEdBQUc7QUFDM0MsVUFBVSxLQUFLLElBQUksQ0FBQyxDQUFDO0FBQ3JCLFVBQVUsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUN0QyxZQUFZLElBQUksT0FBTyxDQUFDO0FBQ3hCLFlBQVksS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7QUFDdkMsWUFBWSxLQUFLLENBQUMsUUFBUSxHQUFHO0FBQzdCLGNBQWMsS0FBSyxFQUFFLFNBQVMsS0FBSyxHQUFHO0FBQ3RDLGdCQUFnQixZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEMsZUFBZTtBQUNmLGFBQWEsQ0FBQztBQUNkO0FBQ0E7QUFDQSxZQUFZLE9BQU8sR0FBRyxVQUFVLENBQUMsWUFBWTtBQUM3QyxjQUFjLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3JDLGNBQWMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzVCLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsQixXQUFXO0FBQ1gsU0FBUyxDQUFDO0FBQ1YsUUFBUSxJQUFJLENBQUMsWUFBWSxHQUFHO0FBQzVCLFVBQVUsS0FBSyxFQUFFLFNBQVMsS0FBSyxHQUFHO0FBQ2xDLFlBQVksT0FBTyxDQUFDLE1BQU0sRUFBRSxVQUFVLEtBQUssRUFBRTtBQUM3QyxjQUFjLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ25DLGdCQUFnQixjQUFjLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM1RCxnQkFBZ0IsY0FBYyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDN0QsZUFBZTtBQUNmLGFBQWEsQ0FBQyxDQUFDO0FBQ2YsV0FBVztBQUNYLFNBQVMsQ0FBQztBQUNWLFFBQVEsT0FBTyxDQUFDLE1BQU0sRUFBRSxVQUFVLEtBQUssRUFBRTtBQUN6QyxVQUFVLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtBQUM5QixZQUFZLFFBQVEsRUFBRSxDQUFDO0FBQ3ZCLFdBQVcsTUFBTTtBQUNqQixZQUFZLElBQUksTUFBTSxDQUFDO0FBQ3ZCLFlBQVksSUFBSSxPQUFPLENBQUM7QUFDeEIsWUFBWSxXQUFXLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLEdBQUcsU0FBUyxNQUFNLEdBQUc7QUFDdEUsY0FBYyxjQUFjLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMxRCxjQUFjLFFBQVEsRUFBRSxDQUFDO0FBQ3pCLGFBQWEsRUFBRTtBQUNmLGNBQWMsSUFBSSxFQUFFLElBQUk7QUFDeEIsYUFBYSxDQUFDLENBQUM7QUFDZixZQUFZLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLE9BQU8sR0FBRyxTQUFTLE9BQU8sR0FBRztBQUN6RSxjQUFjLGNBQWMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3hELGNBQWMsUUFBUSxFQUFFLENBQUM7QUFDekIsYUFBYSxFQUFFO0FBQ2YsY0FBYyxJQUFJLEVBQUUsSUFBSTtBQUN4QixhQUFhLENBQUMsQ0FBQztBQUNmLFdBQVc7QUFDWCxTQUFTLENBQUMsQ0FBQztBQUNYLE9BQU8sTUFBTTtBQUNiLFFBQVEsV0FBVyxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLElBQUksRUFBRTtBQUN6RSxVQUFVLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDbkMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssS0FBSyxLQUFLLENBQUNBLFlBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUU7QUFDakgsWUFBWSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDckQsV0FBVztBQUNYLFNBQVMsQ0FBQyxDQUFDO0FBQ1gsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHLEVBQUU7QUFDTCxJQUFJLEdBQUcsRUFBRSxPQUFPO0FBQ2hCLElBQUksS0FBSyxFQUFFLFNBQVMsS0FBSyxHQUFHO0FBQzVCLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3RCLFFBQVEsT0FBTztBQUNmLE9BQU87QUFDUCxNQUFNLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO0FBQ2hDLFFBQVEsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDL0IsTUFBTSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3RDLE1BQU0sSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuRCxNQUFNLFFBQVEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0FBQ3BDLE1BQU0sSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQy9FLE1BQU0sSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLE1BQU0sSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQzVFLE1BQU0sSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzFFLE1BQU0sSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzFFLE1BQU0sSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzFFLE1BQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDM0IsTUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUMzQixNQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLE1BQU0sSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDN0IsTUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUMzQixNQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQzNCLE1BQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDM0IsTUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUMzRSxNQUFNLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ2hGLE1BQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDM0UsTUFBTSxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN2RSxNQUFNLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sS0FBSyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELE1BQU0sUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDekksTUFBTSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxVQUFVLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDMUYsTUFBTSxXQUFXLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2RCxNQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtBQUM1QixRQUFRLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzNDLE9BQU87QUFDUCxNQUFNLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtBQUM1QixRQUFRLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUM1RCxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO0FBQzlELFVBQVUsT0FBTyxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0MsU0FBUztBQUNULE9BQU87QUFDUCxNQUFNLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO0FBQzVEO0FBQ0EsUUFBUSxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTLEVBQUU7QUFDNUUsVUFBVSxRQUFRLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3RDLFNBQVMsQ0FBQyxDQUFDO0FBQ1gsT0FBTztBQUNQLE1BQU0sSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQzNCLFFBQVEsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoRCxRQUFRLElBQUksTUFBTSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEQsUUFBUSxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5QyxRQUFRLElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hELFFBQVEsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1QyxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDckIsVUFBVSxRQUFRLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLFNBQVM7QUFDVCxRQUFRLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLEVBQUUsVUFBVSxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQzVFLFVBQVUsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxVQUFVLElBQUksSUFBSSxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ3ZELFVBQVUsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUMzRSxVQUFVLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDcE0sWUFBWSxPQUFPO0FBQ25CLFdBQVc7QUFDWCxVQUFVLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7QUFDM0UsVUFBVSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQzlFLFVBQVUsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsRCxVQUFVLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtBQUNoQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdDLFdBQVc7QUFDWCxVQUFVLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzlDLFVBQVUsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNqRSxVQUFVLElBQUksQ0FBQ0EsWUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ2xDLFlBQVksT0FBTyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDN0MsV0FBVztBQUNYLFVBQVUsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDOUIsWUFBWSxRQUFRLENBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDckQsV0FBVztBQUNYLFVBQVUsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDdkQsWUFBWSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ25FLFdBQVcsTUFBTSxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7QUFDdEMsWUFBWSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDM0QsV0FBVztBQUNYLFVBQVUsSUFBSUEsWUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ2pDLFlBQVksV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbEQsV0FBVztBQUNYLFVBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQyxTQUFTLENBQUMsQ0FBQztBQUNYLFFBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyxPQUFPLE1BQU07QUFDYixRQUFRLFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDdEMsT0FBTztBQUNQLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7QUFDOUIsUUFBUSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUN0RSxRQUFRLFFBQVEsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDM0MsUUFBUSxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQVUsTUFBTSxFQUFFO0FBQzNDLFVBQVUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QyxTQUFTLENBQUMsQ0FBQztBQUNYLE9BQU87QUFDUCxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUMxQixRQUFRLFFBQVEsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUMzQyxRQUFRLFFBQVEsQ0FBQyxNQUFNLEVBQUU7QUFDekIsVUFBVSxNQUFNLEVBQUUsT0FBTyxDQUFDLFlBQVk7QUFDdEMsU0FBUyxDQUFDLENBQUM7QUFDWCxRQUFRLElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7QUFDbkUsVUFBVSxRQUFRLENBQUMsTUFBTSxFQUFFO0FBQzNCLFlBQVksUUFBUSxFQUFFLFVBQVU7QUFDaEMsV0FBVyxDQUFDLENBQUM7QUFDYixTQUFTO0FBQ1QsUUFBUSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekQsT0FBTyxNQUFNO0FBQ2IsUUFBUSxRQUFRLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3RDLFFBQVEsUUFBUSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztBQUN0QyxRQUFRLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDckMsUUFBUSxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3JDLFFBQVEsUUFBUSxDQUFDLE1BQU0sRUFBRTtBQUN6QixVQUFVLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtBQUNoQyxTQUFTLENBQUMsQ0FBQztBQUNYLFFBQVEsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztBQUMxQyxRQUFRLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO0FBQ2pDLFVBQVUsU0FBUyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3JFLFNBQVM7QUFDVCxRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDeEIsVUFBVSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNoQyxTQUFTO0FBQ1QsUUFBUSxTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLE9BQU87QUFDUCxNQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUMxQixRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN0QixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNwQixRQUFRLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQzVCLE9BQU87QUFDUCxNQUFNLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLE1BQU0sSUFBSUEsWUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNyQyxRQUFRLFdBQVcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDekQsVUFBVSxJQUFJLEVBQUUsSUFBSTtBQUNwQixTQUFTLENBQUMsQ0FBQztBQUNYLE9BQU87QUFDUCxNQUFNLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDekQsUUFBUSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUMzQixRQUFRLE9BQU87QUFDZixPQUFPO0FBQ1AsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUN4QyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlCLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDUCxJQUFJLEdBQUcsRUFBRSxZQUFZO0FBQ3JCLElBQUksS0FBSyxFQUFFLFNBQVMsVUFBVSxHQUFHO0FBQ2pDLE1BQU0sTUFBTSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7QUFDcEMsTUFBTSxPQUFPLE1BQU0sQ0FBQztBQUNwQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMLElBQUksR0FBRyxFQUFFLGFBQWE7QUFDdEIsSUFBSSxLQUFLLEVBQUUsU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFO0FBQ3pDLE1BQU1DLFFBQU0sQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDO0FBQzFELEtBQUs7QUFDTCxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ04sRUFBRSxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLEVBQUUsQ0FBQztBQUNKQSxRQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDOztBQzlwR25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQUksY0FBYyxHQUFHLE9BQU8sVUFBVSxLQUFLLFdBQVcsR0FBRyxVQUFVLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxHQUFHLE1BQU0sR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLE9BQU8sSUFBSSxLQUFLLFdBQVcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2hNLFNBQVMsVUFBVSxDQUFDLEtBQUssRUFBRTtBQUMzQixFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUNELElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM1QixTQUFTLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtBQUN0QyxFQUFFLFFBQVEsSUFBSSxDQUFDLE1BQU07QUFDckIsSUFBSSxLQUFLLENBQUM7QUFDVixNQUFNLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoQyxJQUFJLEtBQUssQ0FBQztBQUNWLE1BQU0sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6QyxJQUFJLEtBQUssQ0FBQztBQUNWLE1BQU0sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEQsSUFBSSxLQUFLLENBQUM7QUFDVixNQUFNLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzRCxHQUFHO0FBQ0gsRUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFDRCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFDckIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ25CLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDM0IsU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7QUFDNUMsRUFBRSxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckUsRUFBRSxPQUFPLFdBQVc7QUFDcEIsSUFBSSxJQUFJLElBQUksR0FBRyxTQUFTLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzRyxJQUFJLE9BQU8sRUFBRSxNQUFNLEdBQUcsTUFBTSxFQUFFO0FBQzlCLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUM7QUFDM0MsS0FBSztBQUNMLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2hCLElBQUksSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyQyxJQUFJLE9BQU8sRUFBRSxNQUFN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
