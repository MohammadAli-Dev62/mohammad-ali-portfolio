/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
	$(".nav-link").on('click', function (event) {

		if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function () {
				window.location.hash = hash;
			});
		}
	});
});
const certificateImages = document.querySelectorAll('.certificate-card img');

window.addEventListener('scroll', () => {
	certificateImages.forEach((image) => {
		const rect = image.getBoundingClientRect();
		if (rect.top < window.innerHeight) {
			image.classList.add('animate');
		}
	});
});