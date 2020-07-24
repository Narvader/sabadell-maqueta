var scroll25 = false;
var scroll50 = false;
var scroll75 = false;
var scroll100 = false;

var viewportHeight = window.innerHeight;
var viewportWidth = window.innerWidth;

var offsetScroll

var footer = document.getElementById("footer");
var sharing = document.getElementById("sharing");
var summary = document.querySelectorAll(".summary");
var sumLength;

var scroll25Number, scroll50Number, scroll75Number, scroll100Number

// MAIN LOGIC
main();

window.addEventListener('scroll', function(){

	scrollActiv();
	

	

	var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
	if ( scrollTop > viewportHeight ){
		sharing.classList.add("visible")
	} else {
		sharing.classList.remove("visible")
	}

	if(isMobile()){
		if( isElementInViewport(footer) ) {
			sharing.classList.remove("visible")
		}
	}

	for (var i = 0; i < summary.length; i++) {
		if(isElementInViewport(summary[i])) {
			if(!summary[i].classList.contains('visible')) {
				summary[i].classList.add('visible')
			}
		}
	}

});

function main() {
	setRRSSLinks();
}


function isElementInViewport(el) {
    var scroll = window.scrollY || window.pageYOffset
    var boundsTop = el.getBoundingClientRect().top + scroll
    
    var viewport = {
        top: scroll,
        bottom: scroll + viewportHeight,
    }
    
    var bounds = {
        top: Math.floor(boundsTop) + el.offsetHeight,
        bottom: boundsTop + el.clientHeight,
    }


    return ( (viewport.bottom > bounds.top) && (viewport.top < bounds.bottom) ) 
}

function scrollActiv(){
	scrollPercent = getScrollPercent();

	if (typeof universalGa !== 'undefined') {
		if ( scrollPercent >= 25 ) {
			if ( !scroll25 ) {
			    universalGa('brands.send', 'event', 'Banco Sabadell - Estar donde estés: claves teletrabajo', 'scroll', 'Scroll Depth 25%', {nonInteraction: true});
		        universalGa('t1.send', 'event', 'Banco Sabadell - Estar donde estés: claves teletrabajo', 'scroll', 'Scroll Depth 25%');
			    scroll25 = true;
			}
		}

		if ( scrollPercent >= 50 ) {
			if ( !scroll50 ) {
			  	universalGa('brands.send', 'event', 'Banco Sabadell - Estar donde estés: claves teletrabajo', 'scroll', 'Scroll Depth 50%', {nonInteraction: true});
		      	universalGa('t1.send', 'event', 'Banco Sabadell - Estar donde estés: claves teletrabajo', 'scroll', 'Scroll Depth 50%');
			   	scroll50 = true;
			}
		}
		if ( scrollPercent >= 75 ) {
		    if ( !scroll75 ) {
			    universalGa('brands.send', 'event', 'Banco Sabadell - Estar donde estés: claves teletrabajo', 'scroll', 'Scroll Depth 75%', {nonInteraction: true});
		        universalGa('t1.send', 'event', 'Banco Sabadell - Estar donde estés: claves teletrabajo', 'scroll', 'Scroll Depth 75%');
			    scroll75 = true;
			}
		}

		if ( scrollPercent >= 100 ) {
			if ( !scroll100 ) {
			  	universalGa('brands.send', 'event', 'Banco Sabadell - Estar donde estés: claves teletrabajo', 'scroll', 'Scroll Depth 100%', {nonInteraction: true});
		      	universalGa('t1.send', 'event', 'Banco Sabadell - Estar donde estés: claves teletrabajo', 'scroll', 'Scroll Depth 100%');
			   	scroll100 = true;
			}
		}
	}

}


function getScrollPercent() {

	var height = document.documentElement.clientHeight;
   	var scrollHeight = document.documentElement.scrollHeight - height;
    var scrollTop = document.documentElement.scrollTop;
    var percent = Math.round(scrollTop / scrollHeight * 100);

	return percent;
}



function setRRSSLinks() {
    var urlPage = window.location.href;

    //Facebook
    var shareFB = document.getElementById("shareFB")
    var fbHref = "https://www.facebook.com/sharer/sharer.php?u="+urlPage
    shareFB.setAttribute("href",fbHref)

    //Twitter
    var shareTW = document.getElementById("shareTW")
    var twText = shareTW.getAttribute("data-text")
    var twHref = "https://twitter.com/intent/tweet?url="+urlPage+"&text="+twText+"&original_referer="+urlPage
    shareTW.setAttribute("href",twHref)

    //Linkedin
    var shareLK = document.getElementById("shareLK")
    var lkText = shareLK.getAttribute("data-text")
    var lkHref = "https://www.linkedin.com/shareArticle?mini=true&url="+urlPage+"&title="+lkText+"&summary=&source="
    shareLK.setAttribute("href",lkHref)

    //WhatsApp
    var shareWA = document.getElementById("shareWA")
    var waText = shareWA.getAttribute("data-text")
    var waHref = "https://api.whatsapp.com/send?text="+waText+" "+urlPage
    shareWA.setAttribute("href",waHref)
}

function isMobile() {
	return viewportWidth < 768
}