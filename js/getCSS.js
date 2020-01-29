/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';
	
	/**
	 * @name getCSS
	 * @since 2019-01-18
	 * @param {object} element
	 * @return {object || undefined}
	 */
	window.getCSS = function(element) {
		var result;
		
		try {
			result = element.currentStyle || getComputedStyle(element);
		}catch(e) {
			//console.error(e);
		}

		return result;
	};
})();