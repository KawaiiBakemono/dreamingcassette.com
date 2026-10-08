class ImagePreload {
	private images: Array<string>;

	constructor(images: Array<string>) {
		this.images = images;
	}

	preloadImage(path: string): PromiseLike<ImageData> {
		return new Promise(function (resolve, reject) {
			var image = new Image();
			image.onload = resolve;
			image.onerror = resolve;
			image.src = path;
		});
	}

	preload(): void {
		let length: number = this.images.length;

		for (var i = 0; i < length; i++) {
			this.images.forEach(function (image: string) {
				  image = this.preloadImage(image)
				}
			}, this);
		}
	}
}

ImagePreloader.prototype.preload = function () {
	// Promises are not supported, let's leave
	if (!('Promise' in window)) {
	  return;
	}
	// Get the length of the biggest deck
	var max = Math.max.apply(Math, this.items.map(function (el) {
	  return el.collection.length;
	}));

	for (var i = 0; i < max; i++) {


	  // Iterate over the decks





	}


	// Iterate over the decks


	this.items.forEach(function (item, index) {


	  // When all images from the deck have been fetched by the browser


	  Promise.all(item.collection)


		// Execute the callback


		.then(function () { item.callback() })


		.catch(function (err) { console.log(err) });


	});


  };