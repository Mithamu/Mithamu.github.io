(function(){$(function(){var e,r,o,i,t;for($(".drawer").drawer(),$(window).load(function(){var e,r,o,i;return o=100,$(".load").fadeOut(),e=!1,r=$(".page_top_button"),r.hide(),$(this).scrollTop()>400&&($(".home-head").css("height","65px"),$(".drawer-hamburger").css("top","18px")),$(window).scroll(function(){return $(this).scrollTop()>400&&!1===e?($(".home-head").animate({height:"65px"}),$(".drawer-hamburger").animate({top:"18px"},o),$(".ja").animate({"font-size":"15px"},o),r.fadeIn(300),e=!0):$(this).scrollTop()<400&&!0===e?(r.fadeOut(300),$(".home-head").animate({height:"90px"}),$(".drawer-hamburger").animate({top:"30px"},o),$(".ja").animate({"font-size":"16px"},o),e=!1):void 0}),$("nav li").click(function(){return $(".drawer").drawer("close")}),i=new SmoothScroll('a[href*="#"]'),i.init({speed:200,easing:"easeOutQuint",updateURL:!1,offset:65})}),t='<svg class="slide-arrow right-arrow" width="496px" height="496px" viewBox="0 0 496 496" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-168.000000, -141.000000)"><path d="M416,141 C553,141 664,252 664,389 C664,526 553,637 416,637 C279,637 168,526 168,389 C168,252 279,141 416,141 Z M417,169 C294.915323,169 196,267.915323 196,390 C196,512.084677 294.915323,611 417,611 C539.084677,611 638,512.084677 638,390 C638,267.915323 539.084677,169 417,169 Z M347.015717,496.204041 L446.021898,396.418284 C449.890241,392.519482 449.890241,386.230518 446.021898,382.331716 L347.015717,282.545959 C343.136601,278.636299 343.148974,272.326026 347.043393,268.431607 L361.403932,254.071068 C365.309175,250.165825 371.640825,250.165825 375.546068,254.071068 L503.778932,382.303932 C507.684175,386.209175 507.684175,392.540825 503.778932,396.446068 L375.546068,524.678932 C371.640825,528.584175 365.309175,528.584175 361.403932,524.678932 L347.043393,510.318393 C343.148974,506.423974 343.136601,500.113701 347.015717,496.204041 Z" id="Combined-Shape-Copy" fill="#000000" fill-rule="nonzero"></path></g></svg>',o='<svg class="slide-arrow left-arrow"  width="496px" height="496px" viewBox="0 0 496 496" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(-168.000000, -141.000000)"><g id="chevron-circle-right-solid" transform="translate(168.000000, 141.000000)" fill="#000000" fill-rule="nonzero"><path d="M248,0 C385,0 496,111 496,248 C496,385 385,496 248,496 C111,496 0,385 0,248 C0,111 111,0 248,0 Z M249,28 C126.915323,28 28,126.915323 28,249 C28,371.084677 126.915323,470 249,470 C371.084677,470 470,371.084677 470,249 C470,126.915323 371.084677,28 249,28 Z M320.834283,141.545959 L221.828102,241.331716 C217.959759,245.230518 217.959759,251.519482 221.828102,255.418284 L320.834283,355.204041 C324.713399,359.113701 324.701026,365.423974 320.806607,369.318393 L306.446068,383.678932 C302.540825,387.584175 296.209175,387.584175 292.303932,383.678932 L164.071068,255.446068 C160.165825,251.540825 160.165825,245.209175 164.071068,241.303932 L292.303932,113.071068 C296.209175,109.165825 302.540825,109.165825 306.446068,113.071068 L320.806607,127.431607 C324.701026,131.326026 324.713399,137.636299 320.834283,141.545959 Z" id="Combined-Shape"></path></g></g></svg>',e=r=1;r<=3;e=++r)$(".slider"+e).slick({slidesToShow:1,slidesToScroll:1,speed:300,cssEase:"cubic-bezier(.15,.82,.3,.98)",fade:!1,asNavFor:".thumbnail_slider"+e,prevArrow:o,nextArrow:t}),$(".thumbnail_slider"+e).slick({slidesToShow:3,slidesToScroll:1,asNavFor:".slider"+e,centerMode:!0,arrow:!1,focusOnSelect:!0});return i=function(e){return e.preventDefault()},$(".slick-button").click(function(){var e;return e=$(this).attr("href"),$(e).addClass("show-slick"),$(e+" .slick-main").slick("slickGoTo",1,!1),$(e+" .slick-sub").slick("slickGoTo",1,!1),$(e).fadeIn(),window.addEventListener("touchmove",i,{passive:!1}),$("body").css("overflow","hidden"),!1}),$(".slick-wrapper-flex").on("click",function(){return!1}),$(".slick").on("click",function(){return $(".slick-wrapper-flex").on("click",function(){return!1}),$(this).removeClass("show-slick"),$(this).fadeOut(),window.removeEventListener("touchmove",i,{passive:!1}),$("body").css("overflow","auto")})})}).call(this);