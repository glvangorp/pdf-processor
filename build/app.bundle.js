/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/tesseract.js/package.json":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/package.json ***!
  \************************************************/
/*! exports provided: _args, _from, _id, _inCache, _location, _nodeVersion, _npmOperationalInternal, _npmUser, _npmVersion, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _shrinkwrap, _spec, _where, author, browser, bugs, dependencies, description, devDependencies, directories, dist, gitHead, homepage, license, main, maintainers, name, optionalDependencies, readme, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_args":[[{"raw":"tesseract.js","scope":null,"escapedName":"tesseract.js","name":"tesseract.js","rawSpec":"","spec":"latest","type":"tag"},"/Users/gregvangorp/Code/pdf-processor"]],"_from":"tesseract.js@latest","_id":"tesseract.js@1.0.10","_inCache":true,"_location":"/tesseract.js","_nodeVersion":"6.7.0","_npmOperationalInternal":{"host":"packages-12-west.internal.npmjs.com","tmp":"tmp/tesseract.js-1.0.10.tgz_1476823577978_0.5278713656589389"},"_npmUser":{"name":"antimatter15","email":"antimatter15@gmail.com"},"_npmVersion":"3.10.8","_phantomChildren":{},"_requested":{"raw":"tesseract.js","scope":null,"escapedName":"tesseract.js","name":"tesseract.js","rawSpec":"","spec":"latest","type":"tag"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/tesseract.js/-/tesseract.js-1.0.10.tgz","_shasum":"e11a96ae76147939d9218f88e287fb69414b1e5d","_shrinkwrap":null,"_spec":"tesseract.js","_where":"/Users/gregvangorp/Code/pdf-processor","author":"","browser":{"./src/node/index.js":"./src/browser/index.js"},"bugs":{"url":"https://github.com/naptha/tesseract.js/issues"},"dependencies":{"file-type":"^3.8.0","is-url":"^1.2.2","jpeg-js":"^0.2.0","level-js":"^2.2.4","node-fetch":"^1.6.3","object-assign":"^4.1.0","png.js":"^0.2.1","tesseract.js-core":"^1.0.2"},"description":"Pure Javascript Multilingual OCR","devDependencies":{"babel-preset-es2015":"^6.16.0","babelify":"^7.3.0","browserify":"^13.1.0","envify":"^3.4.1","http-server":"^0.9.0","pako":"^1.0.3","watchify":"^3.7.0"},"directories":{},"dist":{"shasum":"e11a96ae76147939d9218f88e287fb69414b1e5d","tarball":"https://registry.npmjs.org/tesseract.js/-/tesseract.js-1.0.10.tgz"},"gitHead":"fc15b0ef43cbf2d8729f8db2ef06a16b2497a16e","homepage":"https://github.com/naptha/tesseract.js","license":"Apache-2.0","main":"src/index.js","maintainers":[{"name":"antimatter15","email":"antimatter15@gmail.com"},{"name":"bijection","email":"guillermo@cdbzb.com"}],"name":"tesseract.js","optionalDependencies":{},"readme":"ERROR: No README data found!","repository":{"type":"git","url":"git+https://github.com/naptha/tesseract.js.git"},"scripts":{"build":"browserify src/index.js -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.js --standalone Tesseract && browserify src/browser/worker.js -t [ babelify --presets [ es2015 ] ] -o dist/worker.js","release":"npm run build && git commit -am 'new release' && git push && git tag `jq -r '.version' package.json` && git push origin --tags && npm publish","start":"watchify src/index.js  -t [ envify --NODE_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.dev.js --standalone Tesseract & watchify src/browser/worker.js  -t [ envify --NODE_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/worker.dev.js & http-server -p 7355","test":"echo \"Error: no test specified\" & exit 1"},"version":"1.0.10"};

/***/ }),

/***/ "./node_modules/tesseract.js/src/browser/index.js":
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/browser/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defaultOptions = {
    // workerPath: 'https://cdn.rawgit.com/naptha/tesseract.js/0.2.0/dist/worker.js',
    corePath: 'https://cdn.rawgit.com/naptha/tesseract.js-core/0.1.0/index.js',    
    langPath: 'https://cdn.rawgit.com/naptha/tessdata/gh-pages/3.02/',
}

if (true) {
    console.debug('Using Development Configuration')
    defaultOptions.workerPath = location.protocol + '//' + location.host + '/dist/worker.dev.js?nocache=' + Math.random().toString(36).slice(3)
}else{ var version; }

exports.defaultOptions = defaultOptions;


exports.spawnWorker = function spawnWorker(instance, workerOptions){
    if(window.Blob && window.URL){
        var blob = new Blob(['importScripts("' + workerOptions.workerPath + '");'])
        var worker = new Worker(window.URL.createObjectURL(blob));
    }else{
        var worker = new Worker(workerOptions.workerPath)
    }

    worker.onmessage = function(e){
        var packet = e.data;
        instance._recv(packet)
    }
    return worker
}

exports.terminateWorker = function(instance){
    instance.worker.terminate()
}

exports.sendPacket = function sendPacket(instance, packet){
    loadImage(packet.payload.image, function(img){
        packet.payload.image = img
        instance.worker.postMessage(packet) 
    })
}


function loadImage(image, cb){
    if(typeof image === 'string'){
        if(/^\#/.test(image)){
            // element css selector
            return loadImage(document.querySelector(image), cb)
        }else if(/(blob|data)\:/.test(image)){
            // data url
            var im = new Image
            im.src = image;
            im.onload = e => loadImage(im, cb);
            return
        }else{
            var xhr = new XMLHttpRequest();
            xhr.open('GET', image, true)
            xhr.responseType = "blob";
            xhr.onload = e => loadImage(xhr.response, cb);
            xhr.onerror = function(e){
                if(/^https?:\/\//.test(image) && !/^https:\/\/crossorigin.me/.test(image)){
                    console.debug('Attempting to load image with CORS proxy')
                    loadImage('https://crossorigin.me/' + image, cb)
                }
            }
            xhr.send(null)
            return
        }
    }else if(image instanceof File){
        // files
        var fr = new FileReader()
        fr.onload = e => loadImage(fr.result, cb);
        fr.readAsDataURL(image)
        return
    }else if(image instanceof Blob){
        return loadImage(URL.createObjectURL(image), cb)
    }else if(image.getContext){
        // canvas element
        return loadImage(image.getContext('2d'), cb)
    }else if(image.tagName == "IMG" || image.tagName == "VIDEO"){
        // image element or video element
        var c = document.createElement('canvas');
        c.width  = image.naturalWidth  || image.videoWidth;
        c.height = image.naturalHeight || image.videoHeight;
        var ctx = c.getContext('2d');
        ctx.drawImage(image, 0, 0);
        return loadImage(ctx, cb)
    }else if(image.getImageData){
        // canvas context
        var data = image.getImageData(0, 0, image.canvas.width, image.canvas.height);
        return loadImage(data, cb)
    }else{
        return cb(image)
    }
    throw new Error('Missing return in loadImage cascade')

}


/***/ }),

/***/ "./node_modules/tesseract.js/src/common/circularize.js":
/*!*************************************************************!*\
  !*** ./node_modules/tesseract.js/src/common/circularize.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// The result of dump.js is a big JSON tree
// which can be easily serialized (for instance
// to be sent from a webworker to the main app
// or through Node's IPC), but we want
// a (circular) DOM-like interface for walking
// through the data. 

module.exports = function circularize(page){
    page.paragraphs = []
    page.lines = []
    page.words = []
    page.symbols = []

    page.blocks.forEach(function(block){
        block.page = page;

        block.lines = []
        block.words = []
        block.symbols = []

        block.paragraphs.forEach(function(para){
            para.block = block;
            para.page = page;

            para.words = []
            para.symbols = []
            
            para.lines.forEach(function(line){
                line.paragraph = para;
                line.block = block;
                line.page = page;

                line.symbols = []

                line.words.forEach(function(word){
                    word.line = line;
                    word.paragraph = para;
                    word.block = block;
                    word.page = page;
                    word.symbols.forEach(function(sym){
                        sym.word = word;
                        sym.line = line;
                        sym.paragraph = para;
                        sym.block = block;
                        sym.page = page;
                        
                        sym.line.symbols.push(sym)
                        sym.paragraph.symbols.push(sym)
                        sym.block.symbols.push(sym)
                        sym.page.symbols.push(sym)
                    })
                    word.paragraph.words.push(word)
                    word.block.words.push(word)
                    word.page.words.push(word)
                })
                line.block.lines.push(line)
                line.page.lines.push(line)
            })
            para.page.paragraphs.push(para)
        })
    })
    return page
}

/***/ }),

/***/ "./node_modules/tesseract.js/src/common/job.js":
/*!*****************************************************!*\
  !*** ./node_modules/tesseract.js/src/common/job.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const adapter = __webpack_require__(/*! ../node/index.js */ "./node_modules/tesseract.js/src/browser/index.js")

let jobCounter = 0;

module.exports = class TesseractJob {
    constructor(instance){
        this.id = 'Job-' + (++jobCounter) + '-' + Math.random().toString(16).slice(3, 8)

        this._instance = instance;
        this._resolve = []
        this._reject = []
        this._progress = []
        this._finally = []
    }

    then(resolve, reject){
        if(this._resolve.push){
            this._resolve.push(resolve) 
        }else{
            resolve(this._resolve)
        }

        if(reject) this.catch(reject);
        return this;
    }
    catch(reject){
        if(this._reject.push){
            this._reject.push(reject) 
        }else{
            reject(this._reject)
        }
        return this;
    }
    progress(fn){
        this._progress.push(fn)
        return this;
    }
    finally(fn) {
        this._finally.push(fn)
        return this;  
    }
    _send(action, payload){
        adapter.sendPacket(this._instance, {
            jobId: this.id,
            action: action,
            payload: payload
        })
    }

    _handle(packet){
        var data = packet.data;
        let runFinallyCbs = false;

        if(packet.status === 'resolve'){
            if(this._resolve.length === 0) console.log(data);
            this._resolve.forEach(fn => {
                var ret = fn(data);
                if(ret && typeof ret.then == 'function'){
                    console.warn('TesseractJob instances do not chain like ES6 Promises. To convert it into a real promise, use Promise.resolve.')
                }
            })
            this._resolve = data;
            this._instance._dequeue()
            runFinallyCbs = true;
        }else if(packet.status === 'reject'){
            if(this._reject.length === 0) console.error(data);
            this._reject.forEach(fn => fn(data))
            this._reject = data;
            this._instance._dequeue()
            runFinallyCbs = true;
        }else if(packet.status === 'progress'){
            this._progress.forEach(fn => fn(data))
        }else{
            console.warn('Message type unknown', packet.status)
        }

        if (runFinallyCbs) {
            this._finally.forEach(fn => fn(data));
        }
    }
}


/***/ }),

/***/ "./node_modules/tesseract.js/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const adapter = __webpack_require__(/*! ./node/index.js */ "./node_modules/tesseract.js/src/browser/index.js")
const circularize = __webpack_require__(/*! ./common/circularize.js */ "./node_modules/tesseract.js/src/common/circularize.js")
const TesseractJob = __webpack_require__(/*! ./common/job */ "./node_modules/tesseract.js/src/common/job.js");
const objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
const version = __webpack_require__(/*! ../package.json */ "./node_modules/tesseract.js/package.json").version;

function create(workerOptions){
	workerOptions = workerOptions || {};
	var worker = new TesseractWorker(objectAssign({}, adapter.defaultOptions, workerOptions))
	worker.create = create;
	worker.version = version;
	return worker;
}

class TesseractWorker {
	constructor(workerOptions){
		this.worker = null;
		this.workerOptions = workerOptions;
		this._currentJob = null;
		this._queue = []
	}

	recognize(image, options){
		return this._delay(job => {
			if(typeof options === 'string'){
				options = { lang: options };
			}else{
				options = options || {}
				options.lang = options.lang || 'eng';	
			}
			
			job._send('recognize', { image: image, options: options, workerOptions: this.workerOptions })
		})
	}
	detect(image, options){
		options = options || {}
		return this._delay(job => {
			job._send('detect', { image: image, options: options, workerOptions: this.workerOptions })
		})
	}

	terminate(){ 
		if(this.worker) adapter.terminateWorker(this);
		this.worker = null;
	}

	_delay(fn){
		if(!this.worker) this.worker = adapter.spawnWorker(this, this.workerOptions);

		var job = new TesseractJob(this);
		this._queue.push(e => {
			this._queue.shift()
			this._currentJob = job;
			fn(job)
		})
		if(!this._currentJob) this._dequeue();
		return job
	}

	_dequeue(){
		this._currentJob = null;
		if(this._queue.length > 0){
			this._queue[0]()
		}
	}

	_recv(packet){

        if(packet.status === 'resolve' && packet.action === 'recognize'){
            packet.data = circularize(packet.data);
        }

		if(this._currentJob.id === packet.jobId){
			this._currentJob._handle(packet)
		}else{
			console.warn('Job ID ' + packet.jobId + ' not known.')
		}
	}
}

var DefaultTesseract = create()

module.exports = DefaultTesseract

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Tesseract = __webpack_require__(/*! tesseract.js */ "./node_modules/tesseract.js/src/index.js")(function () {
  'use strict';

  var PageSeparator = '<br><br>==================== PAGE ====================<br><br>';
  var pdfInput = document.querySelector('input[type=file]#pdf');
  var previewWrapper = document.querySelector('section.pdf-preview');
  var pdfResult = document.querySelector('section.pdf-result');
  var pdfLoader = new PDFLoader(pdfInput, previewWrapper);

  pdfInput.onchange = function (e) {
    return pdfLoader.loadFile(e).then(processPages);
  };

  function processPages(pages) {
    console.log("preview of ".concat(pages.length, " pages done. Starting OCR"));
    var lang = document.querySelector('#langsel').value;
    var ocrPromises = pages.map(function (page) {
      return OCR.process(page, lang);
    });
    Promise.all(ocrPromises).then(function (pageResults) {
      console.log(pageResults);
      pdfResult.innerHTML = pageResults.map(function (p) {
        return p.text;
      }).join(PageSeparator);
    });
  }
})();

console.log(Tesseract);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy9jb21tb24vY2lyY3VsYXJpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Rlc3NlcmFjdC5qcy9zcmMvY29tbW9uL2pvYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGVzc2VyYWN0LmpzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiVGVzc2VyYWN0IiwicmVxdWlyZSIsIlBhZ2VTZXBhcmF0b3IiLCJwZGZJbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByZXZpZXdXcmFwcGVyIiwicGRmUmVzdWx0IiwicGRmTG9hZGVyIiwiUERGTG9hZGVyIiwib25jaGFuZ2UiLCJlIiwibG9hZEZpbGUiLCJ0aGVuIiwicHJvY2Vzc1BhZ2VzIiwicGFnZXMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibGFuZyIsInZhbHVlIiwib2NyUHJvbWlzZXMiLCJtYXAiLCJwYWdlIiwiT0NSIiwicHJvY2VzcyIsIlByb21pc2UiLCJhbGwiLCJwYWdlUmVzdWx0cyIsImlubmVySFRNTCIsInAiLCJ0ZXh0Iiwiam9pbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMx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QUFBLE9BQWpCLEVBQTZCQyxJQUE3QixDQUFrQzlCLGFBQWxDLENBQXRCO0FBQ0gsS0FKTDtBQUtIO0FBQ0osQ0F6QmlCLEdBQWxCOztBQTJCQWMsT0FBTyxDQUFDQyxHQUFSLENBQVlqQixTQUFaLEUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAvLyB3b3JrZXJQYXRoOiAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9uYXB0aGEvdGVzc2VyYWN0LmpzLzAuMi4wL2Rpc3Qvd29ya2VyLmpzJyxcbiAgICBjb3JlUGF0aDogJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vbmFwdGhhL3Rlc3NlcmFjdC5qcy1jb3JlLzAuMS4wL2luZGV4LmpzJywgICAgXG4gICAgbGFuZ1BhdGg6ICdodHRwczovL2Nkbi5yYXdnaXQuY29tL25hcHRoYS90ZXNzZGF0YS9naC1wYWdlcy8zLjAyLycsXG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgY29uc29sZS5kZWJ1ZygnVXNpbmcgRGV2ZWxvcG1lbnQgQ29uZmlndXJhdGlvbicpXG4gICAgZGVmYXVsdE9wdGlvbnMud29ya2VyUGF0aCA9IGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyAnL2Rpc3Qvd29ya2VyLmRldi5qcz9ub2NhY2hlPScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgzKVxufWVsc2V7XG4gICAgdmFyIHZlcnNpb24gPSByZXF1aXJlKCcuLi8uLi9wYWNrYWdlLmpzb24nKS52ZXJzaW9uO1xuICAgIGRlZmF1bHRPcHRpb25zLndvcmtlclBhdGggPSAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9uYXB0aGEvdGVzc2VyYWN0LmpzLycgKyB2ZXJzaW9uICsgJy9kaXN0L3dvcmtlci5qcydcbn1cblxuZXhwb3J0cy5kZWZhdWx0T3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuXG5cbmV4cG9ydHMuc3Bhd25Xb3JrZXIgPSBmdW5jdGlvbiBzcGF3bldvcmtlcihpbnN0YW5jZSwgd29ya2VyT3B0aW9ucyl7XG4gICAgaWYod2luZG93LkJsb2IgJiYgd2luZG93LlVSTCl7XG4gICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoWydpbXBvcnRTY3JpcHRzKFwiJyArIHdvcmtlck9wdGlvbnMud29ya2VyUGF0aCArICdcIik7J10pXG4gICAgICAgIHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcbiAgICB9ZWxzZXtcbiAgICAgICAgdmFyIHdvcmtlciA9IG5ldyBXb3JrZXIod29ya2VyT3B0aW9ucy53b3JrZXJQYXRoKVxuICAgIH1cblxuICAgIHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyIHBhY2tldCA9IGUuZGF0YTtcbiAgICAgICAgaW5zdGFuY2UuX3JlY3YocGFja2V0KVxuICAgIH1cbiAgICByZXR1cm4gd29ya2VyXG59XG5cbmV4cG9ydHMudGVybWluYXRlV29ya2VyID0gZnVuY3Rpb24oaW5zdGFuY2Upe1xuICAgIGluc3RhbmNlLndvcmtlci50ZXJtaW5hdGUoKVxufVxuXG5leHBvcnRzLnNlbmRQYWNrZXQgPSBmdW5jdGlvbiBzZW5kUGFja2V0KGluc3RhbmNlLCBwYWNrZXQpe1xuICAgIGxvYWRJbWFnZShwYWNrZXQucGF5bG9hZC5pbWFnZSwgZnVuY3Rpb24oaW1nKXtcbiAgICAgICAgcGFja2V0LnBheWxvYWQuaW1hZ2UgPSBpbWdcbiAgICAgICAgaW5zdGFuY2Uud29ya2VyLnBvc3RNZXNzYWdlKHBhY2tldCkgXG4gICAgfSlcbn1cblxuXG5mdW5jdGlvbiBsb2FkSW1hZ2UoaW1hZ2UsIGNiKXtcbiAgICBpZih0eXBlb2YgaW1hZ2UgPT09ICdzdHJpbmcnKXtcbiAgICAgICAgaWYoL15cXCMvLnRlc3QoaW1hZ2UpKXtcbiAgICAgICAgICAgIC8vIGVsZW1lbnQgY3NzIHNlbGVjdG9yXG4gICAgICAgICAgICByZXR1cm4gbG9hZEltYWdlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaW1hZ2UpLCBjYilcbiAgICAgICAgfWVsc2UgaWYoLyhibG9ifGRhdGEpXFw6Ly50ZXN0KGltYWdlKSl7XG4gICAgICAgICAgICAvLyBkYXRhIHVybFxuICAgICAgICAgICAgdmFyIGltID0gbmV3IEltYWdlXG4gICAgICAgICAgICBpbS5zcmMgPSBpbWFnZTtcbiAgICAgICAgICAgIGltLm9ubG9hZCA9IGUgPT4gbG9hZEltYWdlKGltLCBjYik7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbignR0VUJywgaW1hZ2UsIHRydWUpXG4gICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gXCJibG9iXCI7XG4gICAgICAgICAgICB4aHIub25sb2FkID0gZSA9PiBsb2FkSW1hZ2UoeGhyLnJlc3BvbnNlLCBjYik7XG4gICAgICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGlmKC9eaHR0cHM/OlxcL1xcLy8udGVzdChpbWFnZSkgJiYgIS9eaHR0cHM6XFwvXFwvY3Jvc3NvcmlnaW4ubWUvLnRlc3QoaW1hZ2UpKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnQXR0ZW1wdGluZyB0byBsb2FkIGltYWdlIHdpdGggQ09SUyBwcm94eScpXG4gICAgICAgICAgICAgICAgICAgIGxvYWRJbWFnZSgnaHR0cHM6Ly9jcm9zc29yaWdpbi5tZS8nICsgaW1hZ2UsIGNiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHhoci5zZW5kKG51bGwpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH1lbHNlIGlmKGltYWdlIGluc3RhbmNlb2YgRmlsZSl7XG4gICAgICAgIC8vIGZpbGVzXG4gICAgICAgIHZhciBmciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgZnIub25sb2FkID0gZSA9PiBsb2FkSW1hZ2UoZnIucmVzdWx0LCBjYik7XG4gICAgICAgIGZyLnJlYWRBc0RhdGFVUkwoaW1hZ2UpXG4gICAgICAgIHJldHVyblxuICAgIH1lbHNlIGlmKGltYWdlIGluc3RhbmNlb2YgQmxvYil7XG4gICAgICAgIHJldHVybiBsb2FkSW1hZ2UoVVJMLmNyZWF0ZU9iamVjdFVSTChpbWFnZSksIGNiKVxuICAgIH1lbHNlIGlmKGltYWdlLmdldENvbnRleHQpe1xuICAgICAgICAvLyBjYW52YXMgZWxlbWVudFxuICAgICAgICByZXR1cm4gbG9hZEltYWdlKGltYWdlLmdldENvbnRleHQoJzJkJyksIGNiKVxuICAgIH1lbHNlIGlmKGltYWdlLnRhZ05hbWUgPT0gXCJJTUdcIiB8fCBpbWFnZS50YWdOYW1lID09IFwiVklERU9cIil7XG4gICAgICAgIC8vIGltYWdlIGVsZW1lbnQgb3IgdmlkZW8gZWxlbWVudFxuICAgICAgICB2YXIgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICBjLndpZHRoICA9IGltYWdlLm5hdHVyYWxXaWR0aCAgfHwgaW1hZ2UudmlkZW9XaWR0aDtcbiAgICAgICAgYy5oZWlnaHQgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0IHx8IGltYWdlLnZpZGVvSGVpZ2h0O1xuICAgICAgICB2YXIgY3R4ID0gYy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIGxvYWRJbWFnZShjdHgsIGNiKVxuICAgIH1lbHNlIGlmKGltYWdlLmdldEltYWdlRGF0YSl7XG4gICAgICAgIC8vIGNhbnZhcyBjb250ZXh0XG4gICAgICAgIHZhciBkYXRhID0gaW1hZ2UuZ2V0SW1hZ2VEYXRhKDAsIDAsIGltYWdlLmNhbnZhcy53aWR0aCwgaW1hZ2UuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHJldHVybiBsb2FkSW1hZ2UoZGF0YSwgY2IpXG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBjYihpbWFnZSlcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJldHVybiBpbiBsb2FkSW1hZ2UgY2FzY2FkZScpXG5cbn1cbiIsIi8vIFRoZSByZXN1bHQgb2YgZHVtcC5qcyBpcyBhIGJpZyBKU09OIHRyZWVcbi8vIHdoaWNoIGNhbiBiZSBlYXNpbHkgc2VyaWFsaXplZCAoZm9yIGluc3RhbmNlXG4vLyB0byBiZSBzZW50IGZyb20gYSB3ZWJ3b3JrZXIgdG8gdGhlIG1haW4gYXBwXG4vLyBvciB0aHJvdWdoIE5vZGUncyBJUEMpLCBidXQgd2Ugd2FudFxuLy8gYSAoY2lyY3VsYXIpIERPTS1saWtlIGludGVyZmFjZSBmb3Igd2Fsa2luZ1xuLy8gdGhyb3VnaCB0aGUgZGF0YS4gXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY2lyY3VsYXJpemUocGFnZSl7XG4gICAgcGFnZS5wYXJhZ3JhcGhzID0gW11cbiAgICBwYWdlLmxpbmVzID0gW11cbiAgICBwYWdlLndvcmRzID0gW11cbiAgICBwYWdlLnN5bWJvbHMgPSBbXVxuXG4gICAgcGFnZS5ibG9ja3MuZm9yRWFjaChmdW5jdGlvbihibG9jayl7XG4gICAgICAgIGJsb2NrLnBhZ2UgPSBwYWdlO1xuXG4gICAgICAgIGJsb2NrLmxpbmVzID0gW11cbiAgICAgICAgYmxvY2sud29yZHMgPSBbXVxuICAgICAgICBibG9jay5zeW1ib2xzID0gW11cblxuICAgICAgICBibG9jay5wYXJhZ3JhcGhzLmZvckVhY2goZnVuY3Rpb24ocGFyYSl7XG4gICAgICAgICAgICBwYXJhLmJsb2NrID0gYmxvY2s7XG4gICAgICAgICAgICBwYXJhLnBhZ2UgPSBwYWdlO1xuXG4gICAgICAgICAgICBwYXJhLndvcmRzID0gW11cbiAgICAgICAgICAgIHBhcmEuc3ltYm9scyA9IFtdXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBhcmEubGluZXMuZm9yRWFjaChmdW5jdGlvbihsaW5lKXtcbiAgICAgICAgICAgICAgICBsaW5lLnBhcmFncmFwaCA9IHBhcmE7XG4gICAgICAgICAgICAgICAgbGluZS5ibG9jayA9IGJsb2NrO1xuICAgICAgICAgICAgICAgIGxpbmUucGFnZSA9IHBhZ2U7XG5cbiAgICAgICAgICAgICAgICBsaW5lLnN5bWJvbHMgPSBbXVxuXG4gICAgICAgICAgICAgICAgbGluZS53b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKHdvcmQpe1xuICAgICAgICAgICAgICAgICAgICB3b3JkLmxpbmUgPSBsaW5lO1xuICAgICAgICAgICAgICAgICAgICB3b3JkLnBhcmFncmFwaCA9IHBhcmE7XG4gICAgICAgICAgICAgICAgICAgIHdvcmQuYmxvY2sgPSBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd29yZC5wYWdlID0gcGFnZTtcbiAgICAgICAgICAgICAgICAgICAgd29yZC5zeW1ib2xzLmZvckVhY2goZnVuY3Rpb24oc3ltKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS53b3JkID0gd29yZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS5saW5lID0gbGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS5wYXJhZ3JhcGggPSBwYXJhO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ltLmJsb2NrID0gYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ucGFnZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS5saW5lLnN5bWJvbHMucHVzaChzeW0pXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0ucGFyYWdyYXBoLnN5bWJvbHMucHVzaChzeW0pXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW0uYmxvY2suc3ltYm9scy5wdXNoKHN5bSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bS5wYWdlLnN5bWJvbHMucHVzaChzeW0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHdvcmQucGFyYWdyYXBoLndvcmRzLnB1c2god29yZClcbiAgICAgICAgICAgICAgICAgICAgd29yZC5ibG9jay53b3Jkcy5wdXNoKHdvcmQpXG4gICAgICAgICAgICAgICAgICAgIHdvcmQucGFnZS53b3Jkcy5wdXNoKHdvcmQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBsaW5lLmJsb2NrLmxpbmVzLnB1c2gobGluZSlcbiAgICAgICAgICAgICAgICBsaW5lLnBhZ2UubGluZXMucHVzaChsaW5lKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHBhcmEucGFnZS5wYXJhZ3JhcGhzLnB1c2gocGFyYSlcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiBwYWdlXG59IiwiY29uc3QgYWRhcHRlciA9IHJlcXVpcmUoJy4uL25vZGUvaW5kZXguanMnKVxuXG5sZXQgam9iQ291bnRlciA9IDA7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgVGVzc2VyYWN0Sm9iIHtcbiAgICBjb25zdHJ1Y3RvcihpbnN0YW5jZSl7XG4gICAgICAgIHRoaXMuaWQgPSAnSm9iLScgKyAoKytqb2JDb3VudGVyKSArICctJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDMsIDgpXG5cbiAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IFtdXG4gICAgICAgIHRoaXMuX3JlamVjdCA9IFtdXG4gICAgICAgIHRoaXMuX3Byb2dyZXNzID0gW11cbiAgICAgICAgdGhpcy5fZmluYWxseSA9IFtdXG4gICAgfVxuXG4gICAgdGhlbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICBpZih0aGlzLl9yZXNvbHZlLnB1c2gpe1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZS5wdXNoKHJlc29sdmUpIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5fcmVzb2x2ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHJlamVjdCkgdGhpcy5jYXRjaChyZWplY3QpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2F0Y2gocmVqZWN0KXtcbiAgICAgICAgaWYodGhpcy5fcmVqZWN0LnB1c2gpe1xuICAgICAgICAgICAgdGhpcy5fcmVqZWN0LnB1c2gocmVqZWN0KSBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZWplY3QodGhpcy5fcmVqZWN0KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBwcm9ncmVzcyhmbil7XG4gICAgICAgIHRoaXMuX3Byb2dyZXNzLnB1c2goZm4pXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBmaW5hbGx5KGZuKSB7XG4gICAgICAgIHRoaXMuX2ZpbmFsbHkucHVzaChmbilcbiAgICAgICAgcmV0dXJuIHRoaXM7ICBcbiAgICB9XG4gICAgX3NlbmQoYWN0aW9uLCBwYXlsb2FkKXtcbiAgICAgICAgYWRhcHRlci5zZW5kUGFja2V0KHRoaXMuX2luc3RhbmNlLCB7XG4gICAgICAgICAgICBqb2JJZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIF9oYW5kbGUocGFja2V0KXtcbiAgICAgICAgdmFyIGRhdGEgPSBwYWNrZXQuZGF0YTtcbiAgICAgICAgbGV0IHJ1bkZpbmFsbHlDYnMgPSBmYWxzZTtcblxuICAgICAgICBpZihwYWNrZXQuc3RhdHVzID09PSAncmVzb2x2ZScpe1xuICAgICAgICAgICAgaWYodGhpcy5fcmVzb2x2ZS5sZW5ndGggPT09IDApIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZS5mb3JFYWNoKGZuID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgcmV0ID0gZm4oZGF0YSk7XG4gICAgICAgICAgICAgICAgaWYocmV0ICYmIHR5cGVvZiByZXQudGhlbiA9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdUZXNzZXJhY3RKb2IgaW5zdGFuY2VzIGRvIG5vdCBjaGFpbiBsaWtlIEVTNiBQcm9taXNlcy4gVG8gY29udmVydCBpdCBpbnRvIGEgcmVhbCBwcm9taXNlLCB1c2UgUHJvbWlzZS5yZXNvbHZlLicpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUgPSBkYXRhO1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UuX2RlcXVldWUoKVxuICAgICAgICAgICAgcnVuRmluYWxseUNicyA9IHRydWU7XG4gICAgICAgIH1lbHNlIGlmKHBhY2tldC5zdGF0dXMgPT09ICdyZWplY3QnKXtcbiAgICAgICAgICAgIGlmKHRoaXMuX3JlamVjdC5sZW5ndGggPT09IDApIGNvbnNvbGUuZXJyb3IoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLl9yZWplY3QuZm9yRWFjaChmbiA9PiBmbihkYXRhKSlcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdCA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5fZGVxdWV1ZSgpXG4gICAgICAgICAgICBydW5GaW5hbGx5Q2JzID0gdHJ1ZTtcbiAgICAgICAgfWVsc2UgaWYocGFja2V0LnN0YXR1cyA9PT0gJ3Byb2dyZXNzJyl7XG4gICAgICAgICAgICB0aGlzLl9wcm9ncmVzcy5mb3JFYWNoKGZuID0+IGZuKGRhdGEpKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTWVzc2FnZSB0eXBlIHVua25vd24nLCBwYWNrZXQuc3RhdHVzKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bkZpbmFsbHlDYnMpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpbmFsbHkuZm9yRWFjaChmbiA9PiBmbihkYXRhKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJjb25zdCBhZGFwdGVyID0gcmVxdWlyZSgnLi9ub2RlL2luZGV4LmpzJylcbmNvbnN0IGNpcmN1bGFyaXplID0gcmVxdWlyZSgnLi9jb21tb24vY2lyY3VsYXJpemUuanMnKVxuY29uc3QgVGVzc2VyYWN0Sm9iID0gcmVxdWlyZSgnLi9jb21tb24vam9iJyk7XG5jb25zdCBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5jb25zdCB2ZXJzaW9uID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykudmVyc2lvbjtcblxuZnVuY3Rpb24gY3JlYXRlKHdvcmtlck9wdGlvbnMpe1xuXHR3b3JrZXJPcHRpb25zID0gd29ya2VyT3B0aW9ucyB8fCB7fTtcblx0dmFyIHdvcmtlciA9IG5ldyBUZXNzZXJhY3RXb3JrZXIob2JqZWN0QXNzaWduKHt9LCBhZGFwdGVyLmRlZmF1bHRPcHRpb25zLCB3b3JrZXJPcHRpb25zKSlcblx0d29ya2VyLmNyZWF0ZSA9IGNyZWF0ZTtcblx0d29ya2VyLnZlcnNpb24gPSB2ZXJzaW9uO1xuXHRyZXR1cm4gd29ya2VyO1xufVxuXG5jbGFzcyBUZXNzZXJhY3RXb3JrZXIge1xuXHRjb25zdHJ1Y3Rvcih3b3JrZXJPcHRpb25zKXtcblx0XHR0aGlzLndvcmtlciA9IG51bGw7XG5cdFx0dGhpcy53b3JrZXJPcHRpb25zID0gd29ya2VyT3B0aW9ucztcblx0XHR0aGlzLl9jdXJyZW50Sm9iID0gbnVsbDtcblx0XHR0aGlzLl9xdWV1ZSA9IFtdXG5cdH1cblxuXHRyZWNvZ25pemUoaW1hZ2UsIG9wdGlvbnMpe1xuXHRcdHJldHVybiB0aGlzLl9kZWxheShqb2IgPT4ge1xuXHRcdFx0aWYodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKXtcblx0XHRcdFx0b3B0aW9ucyA9IHsgbGFuZzogb3B0aW9ucyB9O1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cdFx0XHRcdG9wdGlvbnMubGFuZyA9IG9wdGlvbnMubGFuZyB8fCAnZW5nJztcdFxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRqb2IuX3NlbmQoJ3JlY29nbml6ZScsIHsgaW1hZ2U6IGltYWdlLCBvcHRpb25zOiBvcHRpb25zLCB3b3JrZXJPcHRpb25zOiB0aGlzLndvcmtlck9wdGlvbnMgfSlcblx0XHR9KVxuXHR9XG5cdGRldGVjdChpbWFnZSwgb3B0aW9ucyl7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblx0XHRyZXR1cm4gdGhpcy5fZGVsYXkoam9iID0+IHtcblx0XHRcdGpvYi5fc2VuZCgnZGV0ZWN0JywgeyBpbWFnZTogaW1hZ2UsIG9wdGlvbnM6IG9wdGlvbnMsIHdvcmtlck9wdGlvbnM6IHRoaXMud29ya2VyT3B0aW9ucyB9KVxuXHRcdH0pXG5cdH1cblxuXHR0ZXJtaW5hdGUoKXsgXG5cdFx0aWYodGhpcy53b3JrZXIpIGFkYXB0ZXIudGVybWluYXRlV29ya2VyKHRoaXMpO1xuXHRcdHRoaXMud29ya2VyID0gbnVsbDtcblx0fVxuXG5cdF9kZWxheShmbil7XG5cdFx0aWYoIXRoaXMud29ya2VyKSB0aGlzLndvcmtlciA9IGFkYXB0ZXIuc3Bhd25Xb3JrZXIodGhpcywgdGhpcy53b3JrZXJPcHRpb25zKTtcblxuXHRcdHZhciBqb2IgPSBuZXcgVGVzc2VyYWN0Sm9iKHRoaXMpO1xuXHRcdHRoaXMuX3F1ZXVlLnB1c2goZSA9PiB7XG5cdFx0XHR0aGlzLl9xdWV1ZS5zaGlmdCgpXG5cdFx0XHR0aGlzLl9jdXJyZW50Sm9iID0gam9iO1xuXHRcdFx0Zm4oam9iKVxuXHRcdH0pXG5cdFx0aWYoIXRoaXMuX2N1cnJlbnRKb2IpIHRoaXMuX2RlcXVldWUoKTtcblx0XHRyZXR1cm4gam9iXG5cdH1cblxuXHRfZGVxdWV1ZSgpe1xuXHRcdHRoaXMuX2N1cnJlbnRKb2IgPSBudWxsO1xuXHRcdGlmKHRoaXMuX3F1ZXVlLmxlbmd0aCA+IDApe1xuXHRcdFx0dGhpcy5fcXVldWVbMF0oKVxuXHRcdH1cblx0fVxuXG5cdF9yZWN2KHBhY2tldCl7XG5cbiAgICAgICAgaWYocGFja2V0LnN0YXR1cyA9PT0gJ3Jlc29sdmUnICYmIHBhY2tldC5hY3Rpb24gPT09ICdyZWNvZ25pemUnKXtcbiAgICAgICAgICAgIHBhY2tldC5kYXRhID0gY2lyY3VsYXJpemUocGFja2V0LmRhdGEpO1xuICAgICAgICB9XG5cblx0XHRpZih0aGlzLl9jdXJyZW50Sm9iLmlkID09PSBwYWNrZXQuam9iSWQpe1xuXHRcdFx0dGhpcy5fY3VycmVudEpvYi5faGFuZGxlKHBhY2tldClcblx0XHR9ZWxzZXtcblx0XHRcdGNvbnNvbGUud2FybignSm9iIElEICcgKyBwYWNrZXQuam9iSWQgKyAnIG5vdCBrbm93bi4nKVxuXHRcdH1cblx0fVxufVxuXG52YXIgRGVmYXVsdFRlc3NlcmFjdCA9IGNyZWF0ZSgpXG5cbm1vZHVsZS5leHBvcnRzID0gRGVmYXVsdFRlc3NlcmFjdCIsImNvbnN0IFRlc3NlcmFjdCA9IHJlcXVpcmUoJ3Rlc3NlcmFjdC5qcycpXG5cbihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgY29uc3QgUGFnZVNlcGFyYXRvciA9ICc8YnI+PGJyPj09PT09PT09PT09PT09PT09PT09IFBBR0UgPT09PT09PT09PT09PT09PT09PT08YnI+PGJyPic7XG5cbiAgICBjb25zdCBwZGZJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9ZmlsZV0jcGRmJyk7XG4gICAgY29uc3QgcHJldmlld1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uLnBkZi1wcmV2aWV3Jyk7XG4gICAgY29uc3QgcGRmUmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbi5wZGYtcmVzdWx0Jyk7XG5cbiAgICBsZXQgcGRmTG9hZGVyID0gbmV3IFBERkxvYWRlcihwZGZJbnB1dCwgcHJldmlld1dyYXBwZXIpO1xuXG4gICAgcGRmSW5wdXQub25jaGFuZ2UgPSBlID0+IHBkZkxvYWRlci5sb2FkRmlsZShlKS50aGVuKHByb2Nlc3NQYWdlcyk7XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzUGFnZXMocGFnZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHByZXZpZXcgb2YgJHtwYWdlcy5sZW5ndGh9IHBhZ2VzIGRvbmUuIFN0YXJ0aW5nIE9DUmApO1xuICAgICAgICBsZXQgbGFuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYW5nc2VsJykudmFsdWU7XG4gICAgICAgIGxldCBvY3JQcm9taXNlcyA9IHBhZ2VzLm1hcChwYWdlID0+IE9DUi5wcm9jZXNzKHBhZ2UsIGxhbmcpKTtcbiAgICAgICAgUHJvbWlzZS5hbGwob2NyUHJvbWlzZXMpXG4gICAgICAgICAgICAudGhlbihwYWdlUmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFnZVJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIHBkZlJlc3VsdC5pbm5lckhUTUwgPSBwYWdlUmVzdWx0cy5tYXAocCA9PiBwLnRleHQpLmpvaW4oUGFnZVNlcGFyYXRvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn0pKCk7XG5cbmNvbnNvbGUubG9nKFRlc3NlcmFjdCk7Il0sInNvdXJjZVJvb3QiOiIifQ==