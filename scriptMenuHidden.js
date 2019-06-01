var previousScrollTop;
var isScrolling;
var nav = document.querySelector('.mainHeader');

function hasScrolled(){

    var scrollTop = window.scrollY;

    if (scrollTop > previousScrollTop){
        nav.classList.add('mainHeader--up');
    }
    else{
        nav.classList.remove('mainHeader--up');
    }

    previousScrollTop = scrollTop;

}

document.addEventListener('scroll', function(){
    isScrolling = true;
}, false);

setInterval(function() {
    if (isScrolling){
        hasScrolled();
        isScrolling = false;
    }
}, 100);