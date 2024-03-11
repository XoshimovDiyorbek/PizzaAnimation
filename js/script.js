const controller = new ScrollMagic.Controller()
const delay = '-=4'

function scene(sec, tl, of) {
    return new ScrollMagic.Scene({
        triggerElement: sec,
        triggerHook: 0,
        duration: '200%',
        offset: of
    })
    .setTween(tl)
    .setPin(sec)
    .addTo(controller)
}

// First
const a_1 = new TimelineMax()

a_1
.from('.section_1_01', 4, { x: -100, y: -150 })
.from('.section_1_02', 4, { x: -150, y: -250 }, delay)
.from('.section_1_03', 4, { x: -100, y: -80 }, delay)
.from('.section_1_04', 4, { x: -150, y: -100 }, delay)
.from('.section_1_05', 4, { x: -200, y: -80 }, delay)
.from('.section_1_06', 4, { x: -350, y: -100 }, delay)
.from('.section_1_07', 4, { x: -150, y: -50 }, delay)
.from('.section_1_08', 4, { x: -350, y: 50 }, delay)
.from('.section_1_09', 4, { x: -200, y: 100 }, delay)

const s_1 = scene('.first-section', a_1, 250)

// Second
const a_2 = new TimelineMax()
a_2.to('.top .image-container', 4, { height: 0 })
const s_2 = scene('.second-section', a_2, 100)

// Third
const a_3 = new TimelineMax()

a_3
.to('.section_3_01', 4, { y: -250 })
.to('.section_3_02', 4, { y: -200 }, delay)
.to('.section_3_03', 4, { y: -100 }, delay)
.to('.section_3_04', 4, { y: 0 }, delay)
.to('.section_3_05', 4, { y: 150 }, delay)
.to('.section_3_06', 4, { y: 250 }, delay)

const s_3 = scene('.third-section', a_3, 200)

// Fourth
const a_4 = new TimelineMax()

a_4
.from('.section_4_01', 4, { opacity: 0 })
.from('.section_4_02', 4, { opacity: 0 })
.from('.section_4_03', 4, { opacity: 0 })
.from('.section_4_04', 4, { opacity: 0 })

const s_4 = scene('.forth-section', a_4, 200)