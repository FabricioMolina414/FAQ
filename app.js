$(document).ready(function() {

    let arrow1 = $("#arrow1");
    let arrow2 = $("#arrow2");
    let arrow3 = $("#arrow3");
    let arrow4 = $("#arrow4");
    let arrow5 = $("#arrow5");

    let answer1 = $("#answer1");
    let answer2 = $("#answer2");
    let answer3 = $("#answer3");
    let answer4 = $("#answer4");
    let answer5 = $("#answer5");

    let q1 = $("#q1");
    let q2 = $("#q2");
    let q3 = $("#q3");
    let q4 = $("#q4");
    let q5 = $("#q5");

    arrow1.click(function() {
        answer1.slideToggle(300, function() {
            answer1.toggleClass("activate");
            arrow1.toggleClass("faq-card__arrow--activate");
            q1.toggleClass("faq-card__title--activate ");
        })
    })

    arrow2.click(function() {
        answer2.slideToggle(300, function() {
            answer2.toggleClass("activate");
            arrow2.toggleClass("faq-card__arrow--activate");
            q2.toggleClass("faq-card__title--activate ");
        })
        
    }) 

    arrow3.click(function() {
        answer3.slideToggle(300, function() {
            answer3.toggleClass("activate");
            arrow3.toggleClass("faq-card__arrow--activate");
            q3.toggleClass("faq-card__title--activate ");
        })
        
    }) 

    arrow4.click(function() {
        answer4.slideToggle(300, function() {
            answer4.toggleClass("activate");
            arrow4.toggleClass("faq-card__arrow--activate");
            q4.toggleClass("faq-card__title--activate ");
        })
        
    }) 

    arrow5.click(function() {
        answer5.slideToggle(300, function() {
            answer5.toggleClass("activate");
            arrow5.toggleClass("faq-card__arrow--activate");
            q5.toggleClass("faq-card__title--activate ");
        })
        
    }) 

    q1.click(function() {
        answer1.slideToggle(300, function() {
            answer1.toggleClass("activate");
            arrow1.toggleClass("faq-card__arrow--activate");
            q1.toggleClass("faq-card__title--activate ");
        })
    })

    q2.click(function() {
        answer2.slideToggle(300, function() {
            answer2.toggleClass("activate");
            arrow2.toggleClass("faq-card__arrow--activate");
            q2.toggleClass("faq-card__title--activate ");
        })
    })

    q3.click(function() {
        answer3.slideToggle(300, function() {
            answer3.toggleClass("activate");
            arrow3.toggleClass("faq-card__arrow--activate");
            q3.toggleClass("faq-card__title--activate ");
        })
    })

    q4.click(function() {
        answer4.slideToggle(300, function() {
            answer4.toggleClass("activate");
            arrow4.toggleClass("faq-card__arrow--activate");
            q4.toggleClass("faq-card__title--activate ");
        })
    })

    q5.click(function() {
        answer5.slideToggle(300, function() {
            answer5.toggleClass("activate");
            arrow5.toggleClass("faq-card__arrow--activate");
            q5.toggleClass("faq-card__title--activate ");
        })
    })


})


