/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';
	
	/**
	 * @name getCss
	 * @since 2019-01-18
	 * @param {object} element
	 * @return {object}
	 */
	window.getCss = function(element) {
		var result = {};
		
		try {
			result = element.currentStyle || getComputedStyle(element);
		}catch(e) {
			//console.error(e);
		}

		return result;
	};
})();