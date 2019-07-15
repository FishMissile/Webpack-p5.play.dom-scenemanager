
let width = window.innerWidth
let height = window.innerHeight
let x = 80

export default (p) => {
    x += 3
    if (x > width) {
        x = 0
    }
    p.ellipse(x, height / 2, 80, 80);
}

