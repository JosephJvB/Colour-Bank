// import request from 'superagent'

const w = window.screen.availWidth / 2
const h = window.screen.availHeight / 2
// const { log } = global.console

export default function sketch (p) {
  // let rotation = 0

  p.setup = () => {
    // log(p)
    p.createCanvas(w, h, p.WEBGL)
  }

  // p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
  //   if (props.rotation) {
  //     rotation = props.rotation * Math.PI / 180
  //   }
  // }

  p.draw = () => {
    p.background(200)

    let x = p.mouseX - p.width / 2
    let y = p.mouseY - p.height / 2

    p.pointLight(250, 250, 250, x, y, 50)

    p.noStroke()
    p.sphere(100)
  }
}

// function ESKEDDIT (data) {
//   return request
//     .get('http://localhost:3000/api/v1/baka')
//     .end((err, res) => {
//       if (err) log(err)
//       else {
//         log(res)
//         const fs = JSON.parse(res)
//         fs.writeFile(`${__dirname}/../server/p5.txt`, data, 'utf8')
//       }
//     })
// }
