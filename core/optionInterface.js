var ModuleOptionTypes = {
	textBox: '',
	slider: ''
};

var ModuleOption = function() {

	/**
	 * The name of the option, used for storage
	 * @type {string}
	 */
	var name = '';

	/**
	 *
	 * @type {}
	 */
	var value = 0;

	/**
	 * The default value of the option
	 * @type {string}
	 */
	var defaultValue = '';

	/**
	 * @type {string} Should be in ModuleOptionTypes
	 */
	var type = '';

}
