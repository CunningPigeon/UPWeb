$('body').on('input', '.input__elem', function(){
	this.value = this.value.replace(/[^а-яё\sa-z\s]/gi, '');
});