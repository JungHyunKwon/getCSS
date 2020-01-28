/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';
	
	/**
	 * @name getCss
	 * @since 2019-01-18
	 * @param {object} value
	 * @return {object}
	 */
	window.getCss = function(value) {
		var result = {};
		
		try {
			result = value.currentStyle || getComputedStyle(value);
		}catch(e) {
			//console.error(e);
		}

		return result;
	};
})();