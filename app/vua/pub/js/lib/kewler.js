'use strict';

//Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

let flow = _interopDefault(require('lodash.flow'));
let isFunction = _interopDefault(require('lodash.isfunction'));
let isArray = _interopDefault(require('lodash.isarray'));
let _hslToHex = _interopDefault(require('hsl-to-hex'));
let hexToHsl = _interopDefault(require('hex-to-hsl'));

let _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

// Change an hsl object { hue: int, sat: int, lit: int } to an array [int, int, int]
let hslObjToArray = function hslObjToArray(_ref) {
	let hue = _ref.hue;
	let sat = _ref.sat;
	let lit = _ref.lit;
	return [hue, sat, lit];
};

// Returns a boolean telling if this is a valid hsl array [int, int, int]
let isHSLArray = function isHSLArray(c) {
	return isArray(c) && c.length === 3 && typeof c[0] === 'number' && c[0] >= 0 && c[0] <= 360 && typeof c[1] === 'number' && c[1] >= 0 && c[1] <= 100 && typeof c[2] === 'number' && c[2] >= 0 && c[2] <= 100;
};

// Returns a boolean telling if this is a valid hsl object { hue: int, sat: int, lit: int }
let isHSLObject = function isHSLObject(c) {
	return (typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object' && isHSLArray(hslObjToArray(c));
};

// Returns a boolean telling if this is a valid hex color '#000000'
let isHexColor = function isHexColor(c) {
	return typeof c === 'string' && c[0] === '#' && (c.length === 7 || c.length === 4);
};

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (let i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Return an HSL array whatever the color type is passed
let colorToHSL = function colorToHSL(c) {
	if (isHSLArray(c)) {
		return c;
	}

	if (isHSLObject(c)) {
		return hslObjToArray(c);
	}

	if (isHexColor(c)) {
		return hexToHsl(c);
	}

	return c;
};

// Returns an hex string value, whatever color type is passed in argument
let colorToHex = function colorToHex(c) {
	if (isArray(c)) {
		return _hslToHex.apply(undefined, _toConsumableArray(c));
	}

	if (isHSLObject(c)) {
		return _hslToHex(c.hue, c.sat, c.lit);
	}

	if (isHexColor(c)) {
		return c;
	}

	return c;
};

let _slicedToArray = function () { function sliceIterator(arr, i) { let _arr = []; let _n = true; let _d = false; let _e = undefined; try { for (let _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// Makes sure the function gets an HSL object
let withHSL = function withHSL(func) {
	return function (c) {
		return func(colorToHSL(c));
	};
};

let isValidColor = function isValidColor(col) {
	return col && (isHSLArray(col) || isHSLObject(col) || isHexColor(col));
};

// Return hex from a color
let color = function color(col) {
	for (let _len = arguments.length, colAlts = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		colAlts[_key - 1] = arguments[_key];
	}

	// If the color passed is a function, execute it
	if (isFunction(col)) {
		col = col();
	}

	// If nothing is passed, return a black color by default
	if (!col) {
		return '#000000';
	}

	// Validate
	if (!isValidColor(col)) {
		throw new Error('Color passed is not a valid color');
	}

	// When alterations are passed, process the color and return an hex value
	if (colAlts.length) {
		let alteration = flow(colAlts);
		return colorToHex(alteration(col));
	}

	// If just a color is passed, return a function which takes alterations
	return function () {
		for (let _len2 = arguments.length, alts = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			alts[_key2] = arguments[_key2];
		}

		let firstArg = alts[0];
		if (firstArg && isValidColor(firstArg)) {
			return color(firstArg);
		}

		// Return the altered color wrapper if alterations are passed
		if (alts.length) {
			let _alteration = flow(alts);
			return color(_alteration(col));
		}

		// If no argument is passed, return the hex color
		return colorToHex(col);
	};
};

// British proxy
let colour = color;

// Alter lightness of an hsl color
let lightness = function lightness(percent) {
	return withHSL(function (_ref) {
		let _ref2 = _slicedToArray(_ref, 3);

		let hue = _ref2[0];
		let sat = _ref2[1];
		let lit = _ref2[2];
		return [hue, sat, lit + percent];
	});
};

// Alter saturation of an hsl color
let saturation = function saturation(percent) {
	return withHSL(function (_ref3) {
		let _ref4 = _slicedToArray(_ref3, 3);

		let hue = _ref4[0];
		let sat = _ref4[1];
		let lit = _ref4[2];
		return [hue, sat + percent, lit];
	});
};

// Alter hue of an hsl color
let hue = function hue(percent) {
	return withHSL(function (_ref5) {
		let _ref6 = _slicedToArray(_ref5, 3);

		let hue = _ref6[0];
		let sat = _ref6[1];
		let lit = _ref6[2];
		return [hue + percent, sat, lit];
	});
};

export { color, colour, lightness, saturation, hue };

/*
exports.color = color;
exports.colour = colour;
exports.lightness = lightness;
exports.saturation = saturation;
exports.hue = hue;
*/
//# sourceMappingURL=index.js.map
