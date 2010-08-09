/**
 * jQuery toggle show/hide method.
 *
 * @memberOf    jQuery
 * @type        Method
 * @public
 * @static
 * @param {string} [newTxt] Optional target text to replace 
 *
 * @example $('#el').toggleShowHide('Hide element');
 */
jQuery.fn.extend({
	toggleShowHide: function(newTxt) {
  		function replace(hideShowDiv, el, currTxt) {		
    		$(hideShowDiv).slideToggle('400', function () { 
                if ($(this).is(':visible')) {
                    $(this).attr('aria-hidden', 'false');
                    $(hideShowDiv).scrollTo('500');
                } else {
                    $(this).attr('aria-hidden', 'true');
                }
            });
            

            if (newTxt) {
                $(el).toggleText(currTxt, newTxt);
            }
		}
    	return this.each(function() {
			var hideShowDiv = $(this).attr('href');
			$(hideShowDiv).hide().attr('aria-hidden', 'true');
			var currTxt = $(this).text();
        	$(this).click(
				function() {	
					replace(hideShowDiv, this, currTxt);
					return false;
				}
			);
    	});
	}
});

