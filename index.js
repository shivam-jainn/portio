// var landingTL = gsap.timeline()

// landingTL.from("#scribble-top",{
//     opacity : 0,
//     duration: 1,
//     y:-40,
// })


// gsap.from("#sj-3d-img",{
//     opacity : 0,
//     duration: 1,
//     y:40,
// })

// landingTL.from("#hello",{
//     opacity : 0,
//     duration: 1,
//     y:40,
// })

// landingTL.from("#smiley",{
//     opacity : 0,
//     duration: 1,
//     y:40,
// })

// gsap.from("#iamsj",{
//     opacity : 0,
//     duration: 1,
//     y:40,
// })



// gsap.from("#postscroll-cut", {
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#tagline",
//         scroller: "body",
//         markers: true,
//         start: "top 30%",
//         end:"top 70%"
//     },
//     onStart: function() {
//         document.getElementById("postscroll-cut").classList.add("strikethrough");
//     }
// });

// gsap.from("#overflow", {
//     visibility: "visible",
//     opacity: 1,
//     duration: 1,
//     scrollTrigger: {
//         trigger: "#tagline",
//         scroller: "body",
//         markers: true,
//         start: "top 30%",
//         end:"top 70%"

//     }
// }, "-=1");


// gsap.from("#mail-send-component",{
//     opacity : 0,
//     duration: 1,
//     y:40,
//     delay : 1
// })

gsap.from("#star-rotate",{
    rotate:360,
    duration : 2,
    scrollTrigger: {
        trigger: "#sec2",
        scroller: "body",
        markers: true,
        start: "top 10%",
        end:"bottom 90%",
        toggleActions: "play none none none"
    }

})