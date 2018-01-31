const w = window.screen.availWidth / 2
const h = window.screen.availHeight / 2
const b = w / 5

const { log } = global.console

export default function fractalTree (p) {
  p.setup = () => {
    // log()
    p.createCanvas(w, h, p.WEBGL)
  }
  p.draw = () => {
    p.background(51)
    p.stroke(255)
    p.line(b, h, b, h - 200)
    p.translate(200, h)
    // branch(100, p)
  }
}

function branch (len, p) {
  p.line(0, 0, 0, -len)
  p.translate(0, -len)
  p.rotate(p.PI / 4)
  // p.line(0, 0, 0, -len)
}
