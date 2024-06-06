$('body').on('input', '.rect_field_inp3', function(){
	var value = this.value.replace(/[^0-9]/g, '');
	if (value < $(this).data('min')) {
		this.value = $(this).data('min');
	} else if (value > $(this).data('max')) {
		this.value = $(this).data('max');
	} else {
		this.value = value;
	}
});