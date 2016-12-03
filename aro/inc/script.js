
var pgload = new TimelineMax({paused:true});
pgload.to("#slide", 1.1, {height:"100%"}).to("#leftnav", .6, {width:65}).to("#wrapper", .1, {opacity:1}).to("#showcase",.9,{top:0, opacity:1}).to("#sub-showcase",.9,{top:0,opacity:1});

var ldhome = new TimelineMax({paused:true, delay:2.4});
ldhome.to('.intro-heading h1', .6, {opacity:1, top:0}).to('.intro-heading h2', .7, {opacity:1}).to('.growline', .8, {height:125});

var portfolio = new TimelineMax({paused:true});
portfolio.to("#slide", 1.1, {height:"100%"}).to("#leftnav", .6, {width:65}).to("#wrapper", .1, {opacity:1}).to("#portfolio",.9,{top:0, opacity:1});


if (document.location.href == 'http://localhost/aro/'){
//var abtaro = new TimelineMax({paused:true});
//abtaro.to('#about-aro h3', 1, {opacity:1, top:0});

pgload.play();
ldhome.play();


//var $case = $('.case'); 
    
//$case.on('click', function(){
//   pgload.reverse();
//});
    
          
var controller = new ScrollMagic.Controller();
    
// build scene
var scene = new ScrollMagic.Scene({
    triggerElement: "#about-aro"
})
.setTween("#about-aro h3", 1, {opacity:1, top:0}) // trigger a TweenMax.to tween
.addTo(controller);


// build scene
var scene2 = new ScrollMagic.Scene({
    triggerElement: "#about-aro"
})
.setTween("#about-aro p", 1, {opacity:1, left:"0px"}) // trigger a TweenMax.to tween
.addTo(controller);


// build scene
var tri1 = new ScrollMagic.Scene({
    triggerElement: "#featurd-works"
})
.setTween('.tri1', 1, {opacity:1,rotation:"+=360", top:"-120px"}) // trigger a TweenMax.to tween
.addTo(controller);

// build scene
var tri2 = new ScrollMagic.Scene({
    triggerElement: "#featurd-works"
})
.setTween('.tri2', 1, {opacity:1,rotation:"+=360", top:"-70px"}) // trigger a TweenMax.to tween
.addTo(controller);


// build scene
var tri3 = new ScrollMagic.Scene({
    triggerElement: "#featurd-works"
})
.setTween('.tri3', 1, {opacity:1,rotation:"+=360", top:"-120px"}) // trigger a TweenMax.to tween
.addTo(controller);

// build scene
var project1 = new ScrollMagic.Scene({
    triggerElement: "#project"
})
.setTween('.project h4', 1, {opacity:1, top:"0px"}) // trigger a TweenMax.to tween
.addTo(controller);


// build scene
var project1 = new ScrollMagic.Scene({
    triggerElement: "#project"
})
.setTween('.project p', 1, {opacity:1,delay:.5}) // trigger a TweenMax.to tween
.addTo(controller);


// build scene
var project1 = new ScrollMagic.Scene({
    triggerElement: "#project"
})
.setTween('.project .case', .5, {opacity:1}) // trigger a TweenMax.to tween
.addTo(controller);


// build scene
var project1 = new ScrollMagic.Scene({
    triggerElement: "#project"
})
.setTween('.project img.offscrn-right', 1, {opacity:1, right:"-160px"}) // trigger a TweenMax.to tween
.addTo(controller);



// build scene
var project2 = new ScrollMagic.Scene({
    triggerElement: "#project2"
})
.setTween('.project2 h4', 1, {opacity:1, top:"0px"}) // trigger a TweenMax.to tween
.addTo(controller);


// build scene
var project2 = new ScrollMagic.Scene({
    triggerElement: "#project2"
})
.setTween('.project2 p', 1, {opacity:1,delay:.5}) // trigger a TweenMax.to tween
.addTo(controller);



// build scene
var project2 = new ScrollMagic.Scene({
    triggerElement: "#project2"
})
.setTween('.project2 .case', .5, {opacity:1}) // trigger a TweenMax.to tween
.addTo(controller);



// build scene
var project2 = new ScrollMagic.Scene({
    triggerElement: "#project2"
})
.setTween('.project2 img.offscrn-left', 1, {opacity:1, left:"-80px"}) // trigger a TweenMax.to tween
.addTo(controller);



// build scene
var project2 = new ScrollMagic.Scene({
    triggerElement: "#project3"
})
.setTween('.project3 h4', 1, {opacity:1, top:"0px"}) // trigger a TweenMax.to tween
.addTo(controller);


// build scene
var project2 = new ScrollMagic.Scene({
    triggerElement: "#project3"
})
.setTween('.project3 p', 1, {opacity:1,delay:.5}) // trigger a TweenMax.to tween
.addTo(controller);



// build scene
var project2 = new ScrollMagic.Scene({
    triggerElement: "#project3"
})
.setTween('.project3 .case', .5, {opacity:1}) // trigger a TweenMax.to tween
.addTo(controller);


// build scene
var project2 = new ScrollMagic.Scene({
    triggerElement: "#project3"
})
.setTween('.project3 img.offscrn-right', 1, {opacity:1, right:"-160px"}) // trigger a TweenMax.to tween
.addTo(controller);

}




if (document.location.href == 'http://localhost/aro/projects/skinmd.html'){


    var loadskinmd = new TimelineMax({paused:true});    
    loadskinmd.to("#slide", 1.1, {height:"100%",background:"#3f74bc"}).to("#leftnav", .6, {width:65,background:"#4ec8b8"}).to("#wrapper", .2, {opacity:1}).to("#sub-showcase",.8,{opacity:1,top:0,height:"700px"}).to('.showcase-item span',.5,{opacity:1,left:"10%"}).to('.showcase-item h1',.6,{opacity:1,bottom:"30%"});
    
    loadskinmd.play();
    
    
    var controller = new ScrollMagic.Controller();
    
        // build scene
    var intro = new ScrollMagic.Scene({
        triggerElement: "#case-study"
    })
    .setTween("#case-study h2", 1, {opacity:1, left:0}) // trigger a TweenMax.to tween
    .addTo(controller);
    
    
            // build scene
    var intro = new ScrollMagic.Scene({
        triggerElement: "#case-study"
    })
    .setTween("#case-study p", 1, {opacity:1, top:0,delay:.7}) // trigger a TweenMax.to tween
    .addTo(controller);
    
    
                // build scene
    var intro = new ScrollMagic.Scene({
        triggerElement: ".intro-img"
    })
    .setTween(".slideup", .7, {opacity:1, top:0,delay:.5}) // trigger a TweenMax.to tween
    .addTo(controller);
    
    
}


if (document.location.href == 'http://localhost/aro/projects/'){
    
    
   portfolio.play();
    
    
}


if (document.location.href == 'http://localhost/aro/projects/goebel.html'){
    
    var loadgoebel = new TimelineMax({paused:true,delay:3.6});    
    loadgoebel.to('.showcase-item span',.5,{opacity:1,left:"10%"}).to('.showcase-item h1',.6,{opacity:1,bottom:"30%"});
    
   pgload.play();
   loadgoebel.play();
    
     var controller = new ScrollMagic.Controller();
    
        // build scene
    var intro = new ScrollMagic.Scene({
        triggerElement: "#case-study"
    })
    .setTween("#case-study h2", 1, {opacity:1, left:0}) // trigger a TweenMax.to tween
    .addTo(controller);
    
    
            // build scene
    var intro = new ScrollMagic.Scene({
        triggerElement: "#case-study"
    })
    .setTween("#case-study p", 1, {opacity:1, top:0,delay:.7}) // trigger a TweenMax.to tween
    .addTo(controller);
    
    
                // build scene
    var intro = new ScrollMagic.Scene({
        triggerElement: ".intro-img"
    })
    .setTween(".slideup", .7, {opacity:1, top:0,delay:.5}) // trigger a TweenMax.to tween
    .addTo(controller);
    
    
    
}