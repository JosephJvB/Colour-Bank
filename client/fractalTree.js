const { log } = global.console

const w = window.screen.availWidth / 2
const h = window.screen.availHeight / 2
const b = w / 2

export default function fractalTree (p) {
  const angle = p.PI / 4

  p.setup = () => {
    log(p)
    p.createCanvas(w, h)
  }
  p.draw = () => {
    p.background(51)
    p.stroke(255)
    p.translate(b, h)
    branch(150)
  }

  const branch = (len) => {
    // first branch
    p.line(0, 0, 0, -len)
    // dont make teeny branches
    if (len < 5) return
    // right branch child
    p.translate(0, -len)
    p.push()
    p.rotate(angle)
    branch(len * 0.6)
    p.pop()
    // left branch child
    p.push()
    p.rotate(-angle)
    branch(len * 0.6)
    p.pop()
  }
}
