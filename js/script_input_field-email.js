$('body').on('input', '.input__field', function(){
	this.value = this.value.replace(/[^а-яё\sa-z\s]/gi, '');
});