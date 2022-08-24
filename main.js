const c = document.querySelector('#mycanvas')
const ctx = c.getContext('2d')
ctx.beginPath()
ctx.arc(250, 150, 40, 0, 2 * Math.PI)
ctx.stroke()

// ctx.beginPath()
// ctx.arc(250, 260, 50, 0, 2 * Math.PI)
// ctx.stroke()

// ctx.moveTo(220, 150)
// ctx.lineTo(280, 150)
// ctx.lineTo(280, 250)
// ctx.lineTo(220, 250)
// ctx.lineTo(220, 150)
// ctx.moveTo(212, 291)
// ctx.lineTo(170, 385)
// ctx.lineTo(210, 385)
// ctx.lineTo(250, 311)
// ctx.stroke()

c.addEventListener('mousemove', (e) => {
  const x = e.offsetX
  const y = e.offsetY
  console.log(`x = ${x} -- y = ${y}`)
})
