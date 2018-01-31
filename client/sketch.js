import request from 'superagent'

const w = window.screen.availWidth / 2
const h = window.screen.availHeight / 2
const { log } = global.console

export default function sketch (p) {
  // let rotation = 0

  p.setup = () => {
    // log(p)
    // ESKEDDIT(p)
    p.createCanvas(w, h, p.WEBGL)
  }

  // p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
  //   if (props.rotation) {
  //     rotation = props.rotation * Math.PI / 180
  //   }
  // }

  p.draw = () => {
    p.background(51)

    let x = p.mouseX - p.width / 2
    let y = p.mouseY - p.height / 2

    p.pointLight(250, 250, 250, x, y, 50)

    p.noStroke()
    p.sphere(100)
  }
}

function ESKEDDIT (data) {
  // log(Object.keys(data))
  return request
    .post('http://localhost:3000/api/v1/baka')
    .send(Object.keys(data))
    .end(r => log(r))
}
