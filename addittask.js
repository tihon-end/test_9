let age = document.getElementById('age')
 
 function showUser(surname, name) {
          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value)
 }
 
 showUser.apply(age, ['John','Smith'])


 class Options {
     constructor( height, width, bg, fontSize, textAlign){
     this.height = height
     this.width = width
     this.bg = bg
     this.fontSize = fontSize
     this.textAlign = textAlign
 } 
 createDiv() {
     let div = document.createElement('div')
     document.body.appendChild(div)
     let optin = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`
     div.style.cssText = optin
     div.textContent = 'квадрат'
 }
}
let tem = new Options(500, 500, 'red', 18, 'center')

// tem.createDiv()

let btn = document.createElement('button')
    document.body.appendChild(btn)
    btn.textContent = "Нажми меня"
    btn.addEventListener('click', function(){
        tem.createDiv()
    
    })


