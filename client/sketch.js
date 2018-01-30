const w = window.screen.availWidth
const h = window.screen.availHeight

export default function sketch (p) {
  // let rotation = 0

  p.setup = () => {
    p.createCanvas(w, h, p.WEBGL)
  }

  // p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
  //   if (props.rotation) {
  //     rotation = props.rotation * Math.PI / 180
  //   }
  // }

  p.draw = () => {
    p.sphere(100)
  }
}
