const randomnum = () => Math.floor((Math.random() * 256))

window.addEventListener("click", change = function(){
    let r = randomnum()
    let g = randomnum()
    let b = randomnum()
    console.log(r,g,b)
    let color = "rgb" + "(" + r + "," + g + "," + b + ")"
    console.log(color)
    document.body.style.backgroundColor = color
})

const adder = (t) => t<10 ? '0'+t : t

window.addEventListener("load", time = function(){
    let d = new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()
    let ms = d.getMilliseconds()
    h = adder(h)
    m = adder(m)
    s = adder(s)
    ms = adder(ms)
    document.querySelector(".clock").textContent = `${h}:${m}:${s}:${ms}`
    setTimeout(time, 1)
})