/**
 * jQuery toggle text method
 *
 * @memberOf    jQuery
 * @type        Method
 * @public
 * @static
 * @param {string} a First string to replace 
 * @param {string} b Second string to replace
 * @example $('#el').toggleText('show','hide');
 */
jQuery.fn.extend({
  toggleText: function (a, b) {
    return this.html(
		this.html().replace(
			new RegExp("("+a+"|"+b+")"),
				function(x) {
					return (x == a) ? b : a;
				}
			)
		);
  	}
});

