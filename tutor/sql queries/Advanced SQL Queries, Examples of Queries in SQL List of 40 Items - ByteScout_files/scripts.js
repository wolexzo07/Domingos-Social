
// GLOBAL SCRIPTS
(function($, window, document, undefined) {
    'use strict';

    $(document).ready(function() {

        $('.cbp-slider-wrap').owlCarousel({
            items: 1,
            nav: true,
            navText: ['<div class="cbp-nav-controls"><div class="cbp-nav-prev" style="left: 50px"></div>','<div class="cbp-nav-next" style="right: 50px"></div></div>'],
            dots: false
        })

    });

    $('body').delegate('.ui-slider-handle', 'mouseup', function(){
        $(this).closest('form').submit();
    });

    $('.dropdown_product_cat, .woocommerce div.product form.cart .variations select').addClass('form-control c-square c-theme');

    var i = 0;
    $('.wc-layered-nav-term:not(".chosen")')
        .each(function(){
            $(this)
                .addClass('c-checkbox')
                .prepend('<input type="checkbox" id="checkbox-sidebar-'+i+'" class="c-check"> <label for="checkbox-sidebar-'+i+'"> <span class="inc"></span> <span class="check"></span> <span class="box"></span> </label>')
                .find('input')
                    .on('click', function(){
                        $(this).parent().find('a').trigger('click');
                        var url = $(this).parent().find('a').attr('href');
                        window.location = url;
                    });
            i++
        });

    $('.wc-layered-nav-term.chosen')
        .each(function(){
            $(this)
                .addClass('c-checkbox')
                .prepend('<input type="checkbox" id="checkbox-sidebar-'+i+'" class="c-check" checked> <label for="checkbox-sidebar-'+i+'"> <span class="inc"></span> <span class="check"></span> <span class="box"></span> </label>')
                .find('input')
                .on('click', function(){
                    $(this).parent().find('a').trigger('click');
                    var url = $(this).parent().find('a').attr('href');
                    window.location = url;
                });
            i++
        });

    $('.wc-layered-nav-rating:not(".chosen")')
        .each(function(){
            $(this)
                .addClass('c-checkbox')
                .prepend('<input type="checkbox" id="checkbox-sidebar-'+i+'" class="c-check"> <label for="checkbox-sidebar-'+i+'"> <span class="inc"></span> <span class="check"></span> <span class="box"></span> </label>')
                .find('input')
                .on('click', function(){
                    $(this).parent().find('a').trigger('click');
                    var url = $(this).parent().find('a').attr('href');
                    window.location = url;
                });
            i++
        });

    $('.wc-layered-nav-rating.chosen')
        .each(function(){
            $(this)
                .addClass('c-checkbox')
                .prepend('<input type="checkbox" id="checkbox-sidebar-'+i+'" class="c-check" checked> <label for="checkbox-sidebar-'+i+'"> <span class="inc"></span> <span class="check"></span> <span class="box"></span> </label>')
                .find('input')
                .on('click', function(){
                    $(this).parent().find('a').trigger('click');
                    var url = $(this).parent().find('a').attr('href');
                    window.location = url;
                });
            i++
        });

    if($('.c-menu-type-mega').parents('.container-fluid').length){
        $('.c-menu-type-mega').addClass('c-pull-left')
    }

})(jQuery, window, document);
