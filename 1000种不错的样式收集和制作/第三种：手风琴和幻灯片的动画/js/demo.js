

$(document).ready(function(){
    var owl = $("#owl");
    owl.owlCarousel({
        items : 4,                                              //10 items above 1000px browser width
        itemsDesktop : [995,3],                                 //5 items between 1000px and 901px
        itemsDesktopSmall : [767, 2],                           // betweem 900px and 601px
        itemsTablet: [700, 2],                                  //2 items between 600 and 0
        itemsMobile : [479, 1],                          // itemsMobile disabled - inherit from itemsTablet option
        navigation : true,
    });
});
var Main = Main || {};
jQuery(window).load(function() {
    window.responsiveFlag = jQuery('#responsiveFlag').css('display');
    Main.gallery = new Gallery();
    jQuery(window).resize(function() {
        Main.gallery.update();
    });
});

function Gallery(){
    var self = this,
        container = jQuery('.flexslider'),
        clone = container.clone( false );
        this.init = function (){
            if( responsiveFlag == 'block' ){
            var slides = container.find('.slides');
            slides.kwicks({
                max : 500,
                spacing : 0
            }).find('li > a').click(function (){
                return false;
            });
            } else {
                container.flexslider();
            }
        }
        this.update = function () {
            var currentState = jQuery('#responsiveFlag').css('display');
            if(responsiveFlag != currentState) {
                responsiveFlag = currentState;
                container.replaceWith(clone);
                container = clone;
                clone = container.clone( false );
                this.init();
            }
        }
    this.init();
}