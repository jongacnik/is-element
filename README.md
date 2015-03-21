# is-element

Returns true if dom element, false if not

## Getting Started

	npm install is-element

is-element is meant to be consumed in a [CommonJS](http://www.commonjs.org/), [Browserify](http://browserify.org/) environment:
	
	var isElement = require('is-element')
	
	// returns true, assuming a node with class `element` exists
	isElement(document.querySelector('.element'))