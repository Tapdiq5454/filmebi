$(document).ready(function(){
	
	$(".movie-image").hover(function(){
		$(this).find(".play").show();

	},
	function()
	{
		$(this).find(".play").hide();
	});
	



	$(".movie-image").click(function(){
		
		window.open($(this).attr('data-link'), '_blank');
		/* $(this).find(".play").show(); */

	},

	
	
	);



	$(".blink").focus(function() {
            if(this.title==this.value) {
                this.value = '';
            }
        })
        .blur(function(){
            if(this.value=='') {
                this.value = this.title;                    
			}
		});
});