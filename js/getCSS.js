/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';
		
		/**
		 * @name getCSS
		 * @since 2019-01-18
		 * @param {element} element
		 * @return {object}
		 */
		window.getCSS = function(element) {
			var result = {};
			
			try {
				result = element.currentStyle || getComputedStyle(element);
			}catch(e) {
				//throw e;
			}

			return result;
		};
	})();
}catch(e) {
	console.error(e);
}