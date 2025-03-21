document.addEventListener('DOMContentLoaded', () => {
    // Модальные окна
    let modals = [
        { id: "first_modal", btn: "Blue2" },
        { id: "second_modal", btn: "Yellow" },
        { id: "third_modal", btn: "Pink" },
        { id: "fourth_modal", btn: "Brown" },
        { id: "fifth_modal", btn: "Green" },
        { id: "sixth_modal", btn: "Orange" },
        { id: "seventh_modal", btn: "Blue" },
        { id: "eight_modal", btn: "Purple" },
        { id: "night_modal", btn: "Orange2" }
    ];

    modals.forEach((modalObj, index) => {
        let modal = document.getElementById(modalObj.id);
        let btn = document.getElementById(modalObj.btn);
        let span = document.getElementsByClassName("close")[index];

        btn.onclick = () => {
            modal.style.display = "block";
        };
        span.onclick = () => {
            modal.style.display = "none";
        };
    });

    // Закрытие модальных окон при клике вне
    window.onclick = (event) => {
        modals.forEach(({ id }) => {
            let modal = document.getElementById(id);
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });
    };

    // Звуки животных
    let sounds = {
        bird: new Audio('sounds/bird.mp3'),
        bull: new Audio('sounds/bull.mp3'),
        deer: new Audio('sounds/deer.mp3'),
        rabbit: new Audio('sounds/rabbit.mp3'),
        frog: new Audio('sounds/frog.mp3'),
        fish: new Audio('sounds/fish.mp3'),
        rabbit1: new Audio('sounds/rabbit1.mp3'),
        mouse: new Audio('sounds/mouse.mp3'),
        fish2: new Audio('sounds/fish2.mp3')
    };

    // Анимации и звуки
    let animations = [
        { id: "blue_bird", sound: "bird", anim: bird => {
            gsap.timeline()
                .to(bird, { rotate: 5, duration: 0.2 })
                .to(bird, { rotate: -5, duration: 0.2 })
                .to(bird, { rotate: 0, duration: 0.2 });
        }},
        { id: "Bull_yellow", sound: "bull", anim: bull => {
            gsap.timeline()
            .to(bull, { scale: 1.2, duration: 0.4 })
            .to(bull, { scale: 1, duration: 0.6, ease: "elastic.out(1, 0.6)" })
                .to(bull, { y: -30, duration: 0.3 })
                .to(bull, { y: 0, duration: 0.5, ease: "bounce.out" });
        }},
        { id: "Deer", sound: "deer", anim: deer => {
            gsap.to(deer, { x: 160, duration: 2, ease: "power1.inOut" });
        }},
        { id: "Rabbit2", sound: "rabbit", anim: rabbit => {
            gsap.timeline()
                .to(rabbit, { scale: 1.3, duration: 0.4 })
                .to(rabbit, { scale: 1, duration: 0.6, ease: "elastic.out(1, 0.3)" });
        }},
        { id: "frog", sound: "frog", anim: frog => {
            gsap.timeline()
                .to(frog, { y: -50, scale: 1.1, duration: 0.4 })
                .to(frog, { y: 0, scale: 1, duration: 0.5, ease: "bounce.out" })
                .to(frog, { rotation: 360, duration: 2 });
        }},
        { id: "fish", sound: "fish", anim: fish => {
            gsap.timeline()
                .to(fish, { rotation: 360, duration: 1 })
                .to(fish, { x: 20, duration: 0.5 })
                .to(fish, { x: 0, duration: 0.5 });
        }},
        { id: "Rabbit1", sound: "rabbit1", anim: rabbit1 => {
            gsap.timeline()
                .to(rabbit1, { rotation: 360, duration: 4 })
                .to(rabbit1, { y: -50, scale: 1.1, duration: 0.4 })
                .to(rabbit1, { y: 0, scale: 1, duration: 0.5, ease: "bounce.out" });
        }},
        { id: "fish2", sound: "fish2", anim: fish2 => {
            gsap.timeline()
                .to(fish2, { rotate: 40, duration: 0.5 })
                .to(fish2, { rotate: -40, duration: 0.5 })
                .to(fish2, { rotate: 0, duration: 0.5 });
        }},
        
        { id: "mouse", sound: "mouse", anim: mouse => {
            gsap.timeline()
                .to(mouse, { y: -50, scale: 1.1, duration: 0.5 })
                .to(mouse, { y: 0, scale: 1, duration: 0.4, ease: "bounce.out" })
                .to(mouse, { y: -50, scale: 1.1, duration: 0.5 })
                .to(mouse, { y: 0, scale: 1, duration: 0.4, ease: "bounce.out" })
                .to(mouse, { y: -50, scale: 1.1, duration: 0.5 })
                .to(mouse, { y: 0, scale: 1, duration: 0.4, ease: "bounce.out" })
                .to(mouse, { y: -50, scale: 1.1, duration: 0.5 })
                .to(mouse, { y: 0, scale: 1, duration: 0.4, ease: "bounce.out" });
        }}
    ];

    animations.forEach(({ id, sound, anim }) => {
        let element = document.getElementById(id);
        element.addEventListener('click', () => {
            sounds[sound].currentTime = 0;
            sounds[sound].play();
            anim(element);
        });
    });
});
