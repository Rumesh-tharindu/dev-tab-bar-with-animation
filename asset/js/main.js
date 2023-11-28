$(document).ready(function () {
	if ($('.tab-links')) {
		$('.tab-links a').on('click', function (e) {
			e.preventDefault();
			var currentAttrValue = $(this).attr('href');

			// Show/Hide Tabs
			$('.tab-content ' + currentAttrValue)
				.show()
				.siblings()
				.hide();
		});
		// Change/remove current tab to active
		$(this).parent('li').addClass('active').siblings().removeClass('active');
	}
});
