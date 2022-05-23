/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/lockedBtn.js":
/*!*************************!*\
  !*** ./js/lockedBtn.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lockedBtn": () => (/* binding */ lockedBtn)
/* harmony export */ });


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function lockedBtn(btn, blacklight) {
  // btn.classList.remove('cursor')
  var btnBlocked = document.createElement('div');
  btnBlocked.classList.add('btnBlocked');
  btnBlocked.style.position = 'absolute';
  btnBlocked.style.display = 'inline';
  var cssloadСontainer = document.createElement('div');
  cssloadСontainer.classList.add('cssload-container');
  var cssloadCrazyArrow = document.createElement('div');
  cssloadCrazyArrow.classList.add('cssload-crazy-arrow');
  btn.appendChild(btnBlocked);
  btnBlocked.appendChild(cssloadСontainer);
  cssloadСontainer.appendChild(cssloadCrazyArrow);

  if (blacklight) {
    btn.classList.remove(blacklight);
  } // btn.onclick = null


  console.log('[lockedBtn btn]', btn);
  var blockedBtn = document.querySelectorAll('.btn');

  var _iterator = _createForOfIteratorHelper(blockedBtn),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      item.style.pointerEvents = 'none';
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var btnAdd = document.getElementById('addArea');
  btnAdd.style.pointerEvents = 'none';
}

/***/ }),

/***/ "./js/notesStyle.js":
/*!**************************!*\
  !*** ./js/notesStyle.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyAnreadyStyle": () => (/* binding */ applyAnreadyStyle),
/* harmony export */   "applyReadyStyle": () => (/* binding */ applyReadyStyle)
/* harmony export */ });


function applyReadyStyle(field1, field2, block) {
  var gray = 'rgb(131, 130, 133)';
  field1.style.backgroundColor = gray;
  field1.style.textDecoration = 'line-through';
  field2.style.textDecoration = 'line-through';
  block.style.backgroundColor = gray;
}
function applyAnreadyStyle(field1, field2, block) {
  var gray = 'rgb(131, 130, 133)';
  var blue = 'rgb(114, 126, 153)';
  field1.style.backgroundColor = blue;
  field1.style.textDecoration = 'none';
  field2.style.backgroundColor = gray;
  field2.style.textDecoration = 'none';
  block.style.backgroundColor = blue;
}

/***/ }),

/***/ "./js/request.js":
/*!***********************!*\
  !*** ./js/request.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addArrOfOldNotes": () => (/* binding */ addArrOfOldNotes),
/* harmony export */   "addNewNote": () => (/* binding */ addNewNote),
/* harmony export */   "changeStatus": () => (/* binding */ changeStatus),
/* harmony export */   "deleteNote": () => (/* binding */ deleteNote),
/* harmony export */   "saveChanges": () => (/* binding */ saveChanges)
/* harmony export */ });


var url = new URL('http://localhost:4000');
var getURL = new URL('/notes/get', url);
var addURL = new URL('/notes/add', url);
var deleteURL = new URL('/notes/delete', url);
var statusURL = new URL('/notes/changeStatus', url); // const getStatusURL = new URL('/getStatus', url)

var changesURL = new URL('/notes/saveChanges', url);
function addArrOfOldNotes(token) {
  console.log('[token]', token);
  return fetch(getURL, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      // 'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(token)
    }
  }).then(function (response) {
    return response.json();
  });
}
function addNewNote(JSONobjOfNote, token) {
  return fetch(addURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(token)
    },
    body: JSON.stringify(JSONobjOfNote)
  }).then(function (response) {
    return response.json();
  });
}
function deleteNote(noteId, token) {
  return fetch(deleteURL, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(token)
    },
    body: JSON.stringify({
      noteId: noteId
    })
  }).then(function (response) {
    return response.json();
  });
}
function changeStatus(noteId, status, token) {
  return fetch(statusURL, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(token)
    },
    body: JSON.stringify({
      noteId: noteId,
      status: status
    })
  }).then(function (response) {
    return response.json();
  });
}
function saveChanges(noteId, obj, token) {
  return fetch(changesURL, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer ".concat(token)
    },
    body: JSON.stringify({
      noteId: noteId,
      obj: obj
    })
  }).then(function (response) {
    return response.json();
  });
} // export function getStatus(noteId) {
//   return fetch(`http://localhost:4000/getStatus?noteId=${noteId}`, {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json'
//     }
//   })
//   .then((response) => response.json())
// }

/***/ }),

/***/ "./js/unlockedBtn.js":
/*!***************************!*\
  !*** ./js/unlockedBtn.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unlockedBtn": () => (/* binding */ unlockedBtn)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function unlockedBtn(btn, blacklight) {
  var deletedDiv = btn.getElementsByClassName('btnBlocked');
  deletedDiv[0].remove();
  var blockedBtn = document.querySelectorAll('.btn');

  var _iterator = _createForOfIteratorHelper(blockedBtn),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      item.style.pointerEvents = 'auto';
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  btn.classList.add(blacklight); // btn.onclick = null

  var btnAdd = document.getElementById('addArea');
  btnAdd.style.pointerEvents = 'auto';
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./request.js */ "./js/request.js");
/* harmony import */ var _lockedBtn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lockedBtn.js */ "./js/lockedBtn.js");
/* harmony import */ var _unlockedBtn_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unlockedBtn.js */ "./js/unlockedBtn.js");
/* harmony import */ var _notesStyle_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notesStyle.js */ "./js/notesStyle.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

 // import {
//   getNotesFromLS
// } from './function.js'




var headingNote = document.querySelector('.headingInput');

function onPageLoaded() {
  return _onPageLoaded.apply(this, arguments);
}

function _onPageLoaded() {
  _onPageLoaded = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee5() {
    var clear, createBtn, createId, createNote, editNote, userToken, servUser, allNotesandIdArr, allNotes, allId, newNote, notes, allIdSet, editedId, add, edit;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;

            clear = function clear() {
              document.querySelector('.headingInput').value = '';
              document.querySelector('.newNoteArea').value = '';
            };

            createBtn = function createBtn(div, mainElem, name, blacklight, cb) {
              var btn = document.createElement('div');
              btn.classList.add('btn', name, blacklight, 'cursor');
              var srcSVG = "img/".concat(name, ".svg");
              var iconElem = new Image();
              iconElem.src = srcSVG;
              iconElem.classList.add('icon', "".concat(name, "-img"));
              iconElem.setAttribute('alt', "".concat(name, "Icon"));
              mainElem.appendChild(btn);
              btn.appendChild(iconElem);

              iconElem.onclick = function (event) {
                cb(div);
                event.stopPropagation();
              };
            };

            createId = function createId() {
              var maxId = Math.max.apply(Math, [-1].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(allIdSet)));
              var noteId = maxId + 1;
              console.log('[noteId]:', noteId);
              allIdSet.add(noteId);
              console.log('[allIdSet]:', allIdSet);
              console.log('[id]:', noteId);
              return noteId;
            };

            createNote = /*#__PURE__*/function () {
              var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3(obj) {
                var _obj, _obj$heading, heading, _obj$text, text, _obj$ready, ready, _obj$id, id, _obj$user, user, objOfNote, resalt, _resalt, resaltOfAdded, idAddedNote, idOfNewNote, note, noteBlock, btnBlock, headingText, notesText, newHeading, newText;

                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        console.log('[Obj]', obj);
                        _obj = _objectSpread({}, obj), _obj$heading = _obj.heading, heading = _obj$heading === void 0 ? headingNote.value : _obj$heading, _obj$text = _obj.text, text = _obj$text === void 0 ? newNote.value : _obj$text, _obj$ready = _obj.ready, ready = _obj$ready === void 0 ? false : _obj$ready, _obj$id = _obj.id, id = _obj$id === void 0 ? id ? id : createId() : _obj$id, _obj$user = _obj.user, user = _obj$user === void 0 ? servUser : _obj$user;

                        if (obj) {
                          _context3.next = 15;
                          break;
                        }

                        objOfNote = {
                          heading: heading,
                          text: text,
                          ready: ready,
                          user: user
                        };
                        console.log('[objOfNote]:', objOfNote);
                        _context3.next = 7;
                        return (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.addNewNote)(objOfNote, userToken);

                      case 7:
                        resalt = _context3.sent;
                        console.log('[resaltOfAdded]', resaltOfAdded);
                        _resalt = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(resalt, 2), resaltOfAdded = _resalt[0], idAddedNote = _resalt[1];
                        console.log('[idAddedNote]', idAddedNote.id);
                        idOfNewNote = idAddedNote.id; // objOfNote = obj.newNote

                        console.log('[objOfNote]:', objOfNote);

                        if (!(resaltOfAdded.isOk == false)) {
                          _context3.next = 15;
                          break;
                        }

                        return _context3.abrupt("return", console.log('Ошибка на сервере. Попробуйте снова'));

                      case 15:
                        // console.log('id', idOfNewNote)
                        note = document.createElement('div');
                        note.classList.add('note');
                        note.setAttribute('id', id);
                        noteBlock = document.createElement('div');
                        noteBlock.classList.add('noteBlock');
                        btnBlock = document.createElement('div');
                        btnBlock.classList.add('btnBlock');
                        headingText = document.createElement('p');
                        headingText.classList.add('headingNote');
                        notesText = document.createElement('p');
                        notesText.classList.add('notesText');
                        newHeading = heading;
                        newText = text;

                        if (ready == true) {
                          (0,_notesStyle_js__WEBPACK_IMPORTED_MODULE_8__.applyReadyStyle)(notesText, headingText, noteBlock);
                        }

                        notes.appendChild(note);
                        note.appendChild(noteBlock);
                        noteBlock.appendChild(headingText);
                        noteBlock.appendChild(notesText);
                        note.appendChild(btnBlock);
                        headingText.append(newHeading);
                        notesText.append(newText);
                        createBtn(note, btnBlock, 'del', 'blacklighRed', /*#__PURE__*/function () {
                          var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(mainElem) {
                            var noteId, btn, resStatus, unblBtn;
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    noteId = mainElem.getAttribute('id');
                                    console.log('[noteID]:', noteId);
                                    btn = mainElem.getElementsByClassName('btn del blacklighRed');
                                    (0,_lockedBtn_js__WEBPACK_IMPORTED_MODULE_6__.lockedBtn)(btn[0], 'blacklighRed');
                                    _context.next = 6;
                                    return (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.deleteNote)(noteId, userToken);

                                  case 6:
                                    resStatus = _context.sent;
                                    unblBtn = mainElem.getElementsByClassName('btn del cursor');
                                    (0,_unlockedBtn_js__WEBPACK_IMPORTED_MODULE_7__.unlockedBtn)(unblBtn[0], 'blacklighRed'); // const deletedKey = mainElem.getAttribute('id')
                                    // const id = deletedKey.slice(5)
                                    // localStorage.removeItem(id)

                                    mainElem.remove();

                                  case 10:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));

                          return function (_x2) {
                            return _ref2.apply(this, arguments);
                          };
                        }());
                        createBtn(note, btnBlock, 'edit', 'blacklighYelow', function (mainElem) {
                          var editNote = mainElem.querySelector('.notesText');
                          var editHeading = mainElem.querySelector('.headingNote');
                          newNote.value = editNote.textContent;
                          headingNote.value = editHeading.textContent;
                          var btnEdit = document.getElementById('editArea'); //TODO: функция

                          btnEdit.style.display = 'block';
                          var btnAdd = document.getElementById('addArea');
                          btnAdd.style.display = 'none';
                          editedId = mainElem.getAttribute('id');
                          console.log('[editedId]]', editedId); // editedNoteId = editedId.slice(5)
                        });
                        createBtn(note, btnBlock, 'ready', 'blacklighGreen', /*#__PURE__*/function () {
                          var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(mainElem) {
                            var readyKey, gray, _btn, btn;

                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    readyKey = mainElem.getAttribute('id'); // const key = readyKey.slice(5)
                                    // const inf = getInfFromLS(key)

                                    gray = 'rgb(131, 130, 133)';

                                    if (!(notesText.style.backgroundColor !== gray)) {
                                      _context2.next = 13;
                                      break;
                                    }

                                    (0,_notesStyle_js__WEBPACK_IMPORTED_MODULE_8__.applyReadyStyle)(notesText, headingText, noteBlock);
                                    mainElem.classList.add('status-ready');
                                    _btn = mainElem.getElementsByClassName('btn ready');
                                    (0,_lockedBtn_js__WEBPACK_IMPORTED_MODULE_6__.lockedBtn)(_btn[0], 'blacklighGreen');
                                    _context2.next = 9;
                                    return (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.changeStatus)(readyKey, true, userToken);

                                  case 9:
                                    (0,_unlockedBtn_js__WEBPACK_IMPORTED_MODULE_7__.unlockedBtn)(_btn[0], 'blacklighGreen'); // inf.ready = true
                                    // const infJSON = addToJSON(inf)
                                    // saveInLocalStorage(key, infJSON)

                                    clear();
                                    headingNote.focus();
                                    return _context2.abrupt("return");

                                  case 13:
                                    btn = mainElem.getElementsByClassName('btn ready');
                                    (0,_lockedBtn_js__WEBPACK_IMPORTED_MODULE_6__.lockedBtn)(btn[0], 'blacklighGreen');
                                    _context2.next = 17;
                                    return (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.changeStatus)(readyKey, false, userToken);

                                  case 17:
                                    (0,_unlockedBtn_js__WEBPACK_IMPORTED_MODULE_7__.unlockedBtn)(btn[0], 'blacklighGreen');
                                    (0,_notesStyle_js__WEBPACK_IMPORTED_MODULE_8__.applyAnreadyStyle)(notesText, headingText, noteBlock);
                                    mainElem.classList.remove('status-ready'); // inf.ready = false
                                    // const infJSON = addToJSON(inf)
                                    // saveInLocalStorage(key, infJSON)

                                    clear();
                                    headingNote.focus();

                                  case 22:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2);
                          }));

                          return function (_x3) {
                            return _ref3.apply(this, arguments);
                          };
                        }()); // const noteInJSON = addToJSON({
                        //   heading,
                        //   text,
                        //   ready
                        // });
                        // const id = note.getAttribute('id')
                        // const noteId = id.slice(5)
                        // saveInLocalStorage(noteId, noteInJSON)

                        clear();
                        headingNote.focus();
                        notes.scrollTop = notes.scrollHeight;

                      case 42:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function createNote(_x) {
                return _ref.apply(this, arguments);
              };
            }();

            editNote = /*#__PURE__*/function () {
              var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4() {
                var getStatus, btnEdit, btnAdd, btn, currEditNote, currHeadingNote, status;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.prev = 0;

                        getStatus = function getStatus(btn) {
                          if (btn.classList.contains('status-ready') == true) {
                            return true;
                          }

                          return false;
                        };

                        btnEdit = document.getElementById('editArea');
                        btnEdit.style.display = 'none';
                        btnAdd = document.getElementById('addArea');
                        btnAdd.style.display = 'block';
                        btn = document.getElementById(editedId);

                        if (!(btn === null)) {
                          _context4.next = 11;
                          break;
                        }

                        btnEdit.style.display = 'none';
                        btnAdd.style.display = 'block';
                        return _context4.abrupt("return");

                      case 11:
                        currEditNote = btn.querySelector('.notesText');
                        currEditNote.textContent = newNote.value;
                        currHeadingNote = btn.querySelector('.headingNote');
                        currHeadingNote.textContent = headingNote.value;
                        status = getStatus(btn);
                        (0,_lockedBtn_js__WEBPACK_IMPORTED_MODULE_6__.lockedBtn)(btnEdit, 'blackligh');
                        _context4.next = 19;
                        return (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.saveChanges)(editedId, {
                          heading: headingNote.value,
                          text: newNote.value,
                          ready: status,
                          id: editedId
                        }, userToken);

                      case 19:
                        (0,_unlockedBtn_js__WEBPACK_IMPORTED_MODULE_7__.unlockedBtn)(btnEdit, 'blackligh');
                        clear();
                        headingNote.focus();
                        _context4.next = 27;
                        break;

                      case 24:
                        _context4.prev = 24;
                        _context4.t0 = _context4["catch"](0);
                        console.error(_context4.t0);

                      case 27:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, null, [[0, 24]]);
              }));

              return function editNote() {
                return _ref4.apply(this, arguments);
              };
            }();

            userToken = localStorage.getItem('accessToken');
            servUser = localStorage.getItem('accessToken'); // const oldNotes = getNotesFromLS()

            _context5.next = 10;
            return (0,_request_js__WEBPACK_IMPORTED_MODULE_5__.addArrOfOldNotes)(userToken);

          case 10:
            allNotesandIdArr = _context5.sent;
            console.log('[oldNotesArr_ARR]', allNotesandIdArr[0]);
            console.log('[oldNotesArr_ID]', allNotesandIdArr[1]);
            allNotes = allNotesandIdArr[0];
            allId = allNotesandIdArr[1];
            newNote = document.querySelector('.newNoteArea');
            notes = document.querySelector('.notes');
            allIdSet = new Set(allId);
            allNotes.forEach(createNote);
            add = document.getElementById('addArea');

            add.onclick = function (e) {
              return createNote();
            };

            newNote.addEventListener('keyup', function (event) {
              if (event.key == 'Enter' && event.shiftKey) {
                createNote();
              }
            });
            headingNote.addEventListener('keyup', function (event) {
              if (event.key == 'Enter' && event.shiftKey) {
                createNote();
              }
            });
            edit = document.getElementById('editArea');
            edit.onclick = editNote; // function addToJSON(obj) {
            //   return JSON.stringify(obj)
            // }
            // function saveInLocalStorage(id, noteInJSON) {
            //   localStorage.setItem(id, noteInJSON);
            // }
            // function getInfFromLS(id) {
            //   const rawInf = localStorage.getItem(id);
            //   return JSON.parse(rawInf);
            // }

            headingNote.focus();
            _context5.next = 31;
            break;

          case 28:
            _context5.prev = 28;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);

          case 31:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 28]]);
  }));
  return _onPageLoaded.apply(this, arguments);
}

document.addEventListener('DOMContentLoaded', function () {
  onPageLoaded();
  headingNote.focus();
});
})();

/******/ })()
;
//# sourceMappingURL=indexEntery.js.map