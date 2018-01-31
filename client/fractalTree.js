const { log } = global.console

const w = window.screen.availWidth / 2
const h = window.screen.availHeight / 2
const b = w / 2

export default function fractalTree (p) {
  p.setup = () => {
    // log(p)
    p.createCanvas(w, h)
  }
  p.draw = () => {
    p.background(51)
    p.stroke(255)
    p.line(b, h, b, h - 100)
  }
}
