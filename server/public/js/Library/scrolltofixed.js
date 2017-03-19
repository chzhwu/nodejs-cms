/*
    调用:
        $('.header').scrollToFixed();
        
        $('.footer').scrollToFixed( {
            bottom: 0,
            limit: $('.footer').offset().top
        });
*/
define(function(w,H,I){var d=jQuery=w("jquery");d.isScrollToFixed=function(f){return!!d(f).data("ScrollToFixed")};d.ScrollToFixed=function(f,w){function B(){var c=b.options.limit;return c?"function"===typeof c?c.apply(a):c:0}function p(){return"fixed"===h}function k(){return!(p()||"absolute"===h)}function x(){if(!p()){var c=a[0].getBoundingClientRect();e.css({display:a.css("display"),width:c.width,height:c.height,"float":a.css("float")});cssOptions={"z-index":b.options.zIndex,position:"fixed",top:-1==
b.options.bottom?r():"",bottom:-1==b.options.bottom?"":b.options.bottom,"margin-left":"0px"};b.options.dontSetWidth||(cssOptions.width=a.css("width"));a.css(cssOptions);a.addClass(b.options.baseClassName);b.options.className&&a.addClass(b.options.className);h="fixed"}}function C(){var c=B(),d=l;b.options.removeOffsets&&(d="",c-=t);cssOptions={position:"absolute",top:c,left:d,"margin-left":"0px",bottom:""};b.options.dontSetWidth||(cssOptions.width=a.css("width"));a.css(cssOptions);h="absolute"}function m(){k()||
(q=-1,e.css("display","none"),a.css({"z-index":D,width:"",position:y,left:"",top:E,"margin-left":""}),a.removeClass("scroll-to-fixed-fixed"),b.options.className&&a.removeClass(b.options.className),h=null)}function z(b){b!=q&&(a.css("left",l-b),q=b)}function r(){var c=b.options.marginTop;return c?"function"===typeof c?c.apply(a):c:0}function g(){if(d.isScrollToFixed(a)&&!a.is(":hidden")){var c=u,e=k();u?k()&&(t=a.offset().top,l=a.offset().left):(a.trigger("preUnfixed.ScrollToFixed"),m(),a.trigger("unfixed.ScrollToFixed"),
q=-1,t=a.offset().top,l=a.offset().left,b.options.offsets&&(l+=a.offset().left-a.position().left),-1==F&&(F=l),h=a.css("position"),u=!0,-1!=b.options.bottom&&(a.trigger("preFixed.ScrollToFixed"),x(),a.trigger("fixed.ScrollToFixed")));var f=d(window).scrollLeft(),g=d(window).scrollTop(),v=B();b.options.minWidth&&d(window).width()<b.options.minWidth?k()&&c||(n(),a.trigger("preUnfixed.ScrollToFixed"),m(),a.trigger("unfixed.ScrollToFixed")):b.options.maxWidth&&d(window).width()>b.options.maxWidth?k()&&
c||(n(),a.trigger("preUnfixed.ScrollToFixed"),m(),a.trigger("unfixed.ScrollToFixed")):-1==b.options.bottom?0<v&&g>=v-r()?e||"absolute"===h&&c||(n(),a.trigger("preAbsolute.ScrollToFixed"),C(),a.trigger("unfixed.ScrollToFixed")):g>=t-r()?(p()&&c||(n(),a.trigger("preFixed.ScrollToFixed"),x(),q=-1,a.trigger("fixed.ScrollToFixed")),z(f)):k()&&c||(n(),a.trigger("preUnfixed.ScrollToFixed"),m(),a.trigger("unfixed.ScrollToFixed")):0<v?(c=g+d(window).height()-a.outerHeight(!0),(e=r())||(e=b.options.bottom?
b.options.bottom:0,e=-e),c>=v-e?p()&&(n(),a.trigger("preUnfixed.ScrollToFixed"),"absolute"===y?C():m(),a.trigger("unfixed.ScrollToFixed")):(p()||(n(),a.trigger("preFixed.ScrollToFixed"),x()),z(f),a.trigger("fixed.ScrollToFixed"))):z(f)}}function n(){var b=a.css("position");"absolute"==b?a.trigger("postAbsolute.ScrollToFixed"):"fixed"==b?a.trigger("postFixed.ScrollToFixed"):a.trigger("postUnfixed.ScrollToFixed")}var b=this;b.$el=d(f);b.el=f;b.$el.data("ScrollToFixed",b);var u=!1,a=b.$el,h,y,E,D,t=
0,l=0,F=-1,q=-1,e=null,A=function(b){a.is(":visible")&&(u=!1,g())},G=function(a){window.requestAnimationFrame?requestAnimationFrame(g):g()};b.init=function(){b.options=d.extend({},d.ScrollToFixed.defaultOptions,w);D=a.css("z-index");b.$el.css("z-index",b.options.zIndex);e=d("<div />");h=a.css("position");y=a.css("position");a.css("float");E=a.css("top");k()&&b.$el.after(e);d(window).bind("resize.ScrollToFixed",A);d(window).bind("scroll.ScrollToFixed",G);"ontouchmove"in window&&d(window).bind("touchmove.ScrollToFixed",
g);b.options.preFixed&&a.bind("preFixed.ScrollToFixed",b.options.preFixed);b.options.postFixed&&a.bind("postFixed.ScrollToFixed",b.options.postFixed);b.options.preUnfixed&&a.bind("preUnfixed.ScrollToFixed",b.options.preUnfixed);b.options.postUnfixed&&a.bind("postUnfixed.ScrollToFixed",b.options.postUnfixed);b.options.preAbsolute&&a.bind("preAbsolute.ScrollToFixed",b.options.preAbsolute);b.options.postAbsolute&&a.bind("postAbsolute.ScrollToFixed",b.options.postAbsolute);b.options.fixed&&a.bind("fixed.ScrollToFixed",
b.options.fixed);b.options.unfixed&&a.bind("unfixed.ScrollToFixed",b.options.unfixed);b.options.spacerClass&&e.addClass(b.options.spacerClass);a.bind("resize.ScrollToFixed",function(){e.height(a.height())});a.bind("scroll.ScrollToFixed",function(){a.trigger("preUnfixed.ScrollToFixed");m();a.trigger("unfixed.ScrollToFixed");g()});a.bind("detach.ScrollToFixed",function(c){c=c||window.event;c.preventDefault&&c.preventDefault();c.returnValue=!1;a.trigger("preUnfixed.ScrollToFixed");m();a.trigger("unfixed.ScrollToFixed");
d(window).unbind("resize.ScrollToFixed",A);d(window).unbind("scroll.ScrollToFixed",G);a.unbind(".ScrollToFixed");e.remove();b.$el.removeData("ScrollToFixed")});A()};b.init()};d.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1E3,baseClassName:"scroll-to-fixed-fixed"};d.fn.scrollToFixed=function(f){return this.each(function(){new d.ScrollToFixed(this,f)})}});