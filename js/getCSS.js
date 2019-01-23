/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function(html) {
		'use strict';
		
		/**
		 * @name 요소 확인
		 * @since 2019-01-18
		 * @param {*} value
		 * @return {boolean}
		 */
		function _isElement(value) {
			var result = false;
			
			try {
				result = html.contains(value);
			}catch(e) {
				//throw e;
			}

			return result;
		}
		
		/**
		 * @name getCSS
		 * @since 2019-01-18
		 * @param {element} element
		 * @return {object}
		 */
		window.getCSS = function(element) {
			var result = {};
			
			//요소일 때
			if(_isElement(element)) {
				result = element.currentStyle || getComputedStyle(element);
			}

			return result;
		};
	})(document.documentElement);
}catch(e) {
	console.error(e);
}