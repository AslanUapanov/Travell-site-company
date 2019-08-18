$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});


let el = document.querySelectorAll(".final_section_nav_menu_li");
// for(let i = 0; i < el.length; i++){
//     el[i].addEventListener('mouseenter', showSub, false);
//     el[i].addEventListener('mouseleave', hideSub, false);
// }
el.forEach(function(elements, i, el){
    el[i].addEventListener('mouseenter', showSub, false);
    el[i].addEventListener('mouseleave', hideSub, false);
});
function showSub(){
    if(this.children.length > 1){
        this.children[1].style.height = 'auto';
        this.children[1].style.display = 'block';
        this.children[1].style.overflow = 'visible';
    }else{
        return false;
    }
}
function hideSub(){
    if(this.children.length > 1){
        this.children[1].style.height = '0';
        this.children[1].style.display = 'none';
        this.children[1].style.overflow = 'hidden';
    }else{
        return false;
    }
}