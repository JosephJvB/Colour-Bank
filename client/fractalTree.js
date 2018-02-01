const { log } = global.console

const w = window.screen.availWidth / 2
const h = window.screen.availHeight / 2
const b = w / 2

export default function fractalTree (p) {
  const angle = p.PI / 6

  // P5 setup function
  p.setup = () => {
    // log(p)
    p.createCanvas(w, h)
  }

  // P5 draw function
  p.draw = () => {
    p.background(51)
    p.stroke(255)
    p.translate(b, h)
    branch(120)
  }

  // custom recursive branch function
  const branch = (len) => {
    // first branch
    p.line(0, 0, 0, -len)
    // dont make teeny branches
    if (len < 10) return
    // right branch child
    p.translate(0, -len)
    p.push()
    p.rotate(angle)
    branch(len * 0.7)
    p.pop()
    // left branch child
    p.push()
    p.rotate(-angle)
    branch(len * 0.7)
    p.pop()
  }
}

// want to make a slider like old mate, do I have access to the p5 dom library with my wrapper??? WHO KNOWS NOT ME LOL
