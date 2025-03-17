document.addEventListener('DOMContentLoaded', () => {
    // Модальное окно для птицы
    var modal1 = document.getElementById("first_modal");
    var btn1 = document.getElementById("Blue2");
    var span1 = document.getElementsByClassName("close")[0];

    btn1.onclick = function() {
        modal1.style.display = "block";
    }
    span1.onclick = function() {
        modal1.style.display = "none";
    }

    // Модальное окно для бычка
    var modal2 = document.getElementById("second_modal");
    var btn2 = document.getElementById("Yellow");
    var span2 = document.getElementsByClassName("close")[1];

    btn2.onclick = function() {
        modal2.style.display = "block";
    }
    span2.onclick = function() {
        modal2.style.display = "none";
    }

    // Модальное окно для оленя
    var modal3 = document.getElementById("third_modal");
    var btn3 = document.getElementById("Pink");
    var span3 = document.getElementsByClassName("close")[2];

    btn3.onclick = function() {
        modal3.style.display = "block";
    }
    span3.onclick = function() {
        modal3.style.display = "none";
    }

    // Модальное окно для коричневого зайца
    var modal4 = document.getElementById("fourth_modal");
    var btn4 = document.getElementById("Brown");
    var span4 = document.getElementsByClassName("close")[3];

    btn4.onclick = function() {
        modal4.style.display = "block";
    }
    span4.onclick = function() {
        modal4.style.display = "none";
    }

    // Модальное окно для лягушки
    var modal5 = document.getElementById("fifth_modal");
    var btn5 = document.getElementById("Green");
    var span5 = document.getElementsByClassName("close")[4];

    btn5.onclick = function() {
        modal5.style.display = "block";
    }
    span5.onclick = function() {
        modal5.style.display = "none";
    }

     // Модальное окно для лягушки
var modal5 = document.getElementById("fifth_modal");
var btn5 = document.getElementById("Green");
var span5 = document.getElementsByClassName("close")[4];

btn5.onclick = function() {
    modal5.style.display = "block";
}
span5.onclick = function() {
    modal5.style.display = "none";
}

// Модальное окно для рыбы
var modal6 = document.getElementById("sixth_modal");
var btn6 = document.getElementById("Orange");
var span6 = document.getElementsByClassName("close")[5];

btn6.onclick = function() {
    modal6.style.display = "block";
}
span6.onclick = function() {
    modal6.style.display = "none";
}

// Модальное окно для кролика русалки
var modal7 = document.getElementById("seventh_modal");
var btn7 = document.getElementById("Blue");
var span7 = document.getElementsByClassName("close")[6];

btn7.onclick = function() {
    modal7.style.display = "block";
}
span7.onclick = function() {
    modal7.style.display = "none";
}
      

    // Объединенный обработчик для закрытия по клику вне окна
    window.onclick = function(event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
        if (event.target == modal3) {
            modal3.style.display = "none";
        }
        if (event.target == modal4) {
            modal4.style.display = "none";
        }
        if (event.target == modal5) {
            modal5.style.display = "none";
        }
        if (event.target == modal6) {
            modal6.style.display = "none";
        }
        if (event.target == modal7) {
            modal7.style.display = "none";
        }
    }

    // Звуки для животных
    const birdSound = new Audio('sounds/bird.mp3');
    const bullSound = new Audio('sounds/bull.mp3');
    const deerSound = new Audio('sounds/deer.mp3');
    const rabbitSound = new Audio('sounds/rabbit.mp3');
    const frogSound = new Audio('sounds/frog.mp3'); 
    const fishSound = new Audio('sounds/fish.mp3'); 
    const rabbit1Sound = new Audio('sounds/rabbit1.mp3'); 
   

    // Анимация и звук для птицы
    const bird = document.getElementById("blue_bird");
    bird.addEventListener('click', function() {
        birdSound.currentTime = 0;
        birdSound.play();
        
        gsap.timeline()
            .to(bird, {
                rotate: 5,
                duration: 0.2,
                ease: "power1.out"
            })
            .to(bird, {
                rotate: -5,
                duration: 0.2,
                ease: "power1.inOut"
            })
            .to(bird, {
                rotate: 0,
                duration: 0.2,
                ease: "power1.in"
            });
    });

    // Анимация и звук для бычка
    const bull = document.getElementById("Bull_yellow");
    bull.addEventListener('click', function() {
        bullSound.currentTime = 0;
        bullSound.play();
        
        gsap.timeline()
            .to(bull, {
                y: -30,
                duration: 0.3,
                ease: "power2.out"
            })
            .to(bull, {
                y: 0,
                duration: 0.5,
                ease: "bounce.out"
            });
    });
    
    // Анимация и звук для оленя
    const deer = document.getElementById("Deer");
    deer.addEventListener('click', function() {
        deerSound.currentTime = 0;
        deerSound.play();
        
        const deerRect = deer.getBoundingClientRect();
        const birdRect = bird.getBoundingClientRect();
        
        gsap.to(deer, {
            x: (birdRect.left - deerRect.left) * 0.15,
            duration: 1.0,
            ease: "power1.inOut",
            onComplete: function() {
                setTimeout(() => {
                    gsap.to(deer, {
                        x: 0, 
                        duration: 3.0
                    });
                }, 1500);
            }
        });
    });

    // Анимация и звук для кролика
    const rabbit = document.getElementById("Rabbit2");
    rabbit.addEventListener('click', function() {
        rabbitSound.currentTime = 0;
        rabbitSound.play();
        
        gsap.timeline()
            .to(rabbit, {
                scale: 1.3,
                duration: 0.4,
                ease: "power1.out"
            })
            .to(rabbit, {
                scale: 1,
                duration: 0.6,
                ease: "elastic.out(1, 0.3)"
            });
    });

    
    // Анимация и звук для лягушки
    const frog = document.getElementById("frog");
    frog.addEventListener('click', function() {
        frogSound.currentTime = 0;
        frogSound.play();
        
        // Анимация прыжка для лягушки
        gsap.timeline()
            .to(frog, {
                y: -50,
                scale: 1.1,
                duration: 0.4,
                ease: "power2.out"
            })
            .to(frog, {
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: "bounce.out"
            });

//  // Анимация и звук для рыбы
// const fish = document.getElementById("Fish");
// fish.addEventListener('click', function() {
//     fishSound.currentTime = 0;
//     fishSound.play();
    
//     gsap.timeline()
//         .to(fish, {
//             rotation: 360,
//             duration: 1,
//             ease: "power1.inOut"
//         })
//         .to(fish, {
//             x: 20,
//             duration: 0.5,
//             ease: "power1.out"
//         })
//         .to(fish, {
//             x: 0,
//             duration: 0.5,
//             ease: "power1.in"
//         });
// });
         
    


// Закрытие при клике вне модального окна
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
    
}

    });
});
