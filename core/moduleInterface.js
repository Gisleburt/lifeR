/**
 * This demonstrates what methods are required for a module to work
 * @returns object
 * @constructor
 */

var Module = function() {

	var name;
	var options = [];
	var attachedElement;

	return {
		// Return the name of the current module
		getName: function() {
			return name;
		},
		getOptions: function() {
			return options;
		},
		setOptions: function(optionSettings) {
			for(var setting in optionSettings){
				if(op)
			}
		},
		init: function(element) { attachedElement = element; }
	};

};

var Option =  {
	name: '',
	type: '',
	value: '',
	minValue: null,
	maxValue: null
}
