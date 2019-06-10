/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';
		
		/**
		 * @name getCss
		 * @since 2019-01-18
		 * @param {element} value
		 * @return {object}
		 */
		window.getCss = function(value) {
			var result = {};
			
			try {
				result = value.currentStyle || getComputedStyle(value);
			}catch(e) {
				//throw e;
			}

			return result;
		};
	})();
}catch(e) {
	console.error(e);
}