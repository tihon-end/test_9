window.addEventListener('DOMContentLoaded', function(){
'use strict'

let tab = document.querySelectorAll('.info-header-tab'),
    info =  document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent')

    function hideTabContent (a) {
        for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show')
            tabContent[i].classList.add('hide')
        }
    }

    hideTabContent(1)

    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
        tabContent[b].classList.remove('hide')
            tabContent[b].classList.add('show')
    }
    }



info.addEventListener('click', function(event){
let target = event.target

if(target && target.classList.contains('info-header-tab')){
    for (let i=0; i < tab.length; i++){
        if (target == tab[i]){
            hideTabContent(0)
            showTabContent(i)
            break
        }
    }
}

})
   
// timer

let deadLine = '2020-01-31'

function getTimeRemaining(endtime){
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t/1000) % 60 ),
    minutes = Math.floor((t/1000/60) % 60 ),
    hours = Math.floor((t/(1000*60*60)))
    // days = Math.floor((t/(1000*60*60*24)))

return{
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
}


}

function setClock(id , endtime){
let timer = document.getElementById(id),
hours = timer.querySelector('.hours'),
minutes = timer.querySelector('.minutes'),
seconds = timer.querySelector('.seconds'),
timeInterval = setInterval(updateClock, 1000)

function updateClock(){
    let t = getTimeRemaining(endtime)

    function zero(num){
        if(num <=9){
            return '0' + num
        }else{
            return num
        } 
        }

hours.textContent = zero(t.hours)
minutes.textContent =zero(t.minutes)
seconds.textContent =zero(t.seconds)
 
if(t.total <= 0){
    clearInterval(timeInterval)
     hours.textContent = '00'
     minutes.textContent = '00'
     seconds.textContent = '00'
}
}



}
setClock('timer' , deadLine)

// modal

let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close')

      more.addEventListener('click' , function(){
          overlay.style.display = 'block'
          this.classList.add('more-splash')
          document.body.style.overflow = 'hidden'
      })

      close.addEventListener('click', function() {
        overlay.style.display = 'none'
        more.classList.remove('more-splash')
        document.body.style.overflow = ''
      })


let descriptionBtn = document.querySelectorAll('.description-btn')



descriptionBtn.forEach(descriptionBtn => {
    descriptionBtn.addEventListener('click', function(){
        overlay.style.display = 'block'
        this.classList.add('more-splash')
        document.body.style.overflow = 'hidden'
    })
})
// form



// let message = {
//     loading: 'Загрузка...',
//     success: 'Спасибо! Скоро мы с вами свяжемся',
//     failure: 'Что-то пошло не так...'
// }

// let form = document.querySelector('.main-form'),
//     formModal = document.getElementById('form'),
//     input = document.getElementsByTagName('input'),
//     statusMessage = document.createElement('div')

//     statusMessage.classList.add('status')

// form.addEventListener('submit', function(event) {
//     event.preventDefault()     //запрет перезагрузки страницы
//     form.appendChild(statusMessage)    //сообщение о статусе

//     let request = new XMLHttpRequest()    //создпние и настройка запроса
//     request.open('POST', 'server.php')
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8')  // JSON формат 
//                            // 'Content-Type', 'application/x-www-form-urlencoded' обычный формат                                               
//     let formData = new FormData(form)    // отправка формы

//     let obj = {}
//     formData.forEach(function(value, key) {
//         obj[key] = value
//     })
//     let json = JSON.stringify(obj)

//     request.send(json)

//     request.addEventListener('readystatechange', function() {    // отслеживание статуса и вывод сообщений о статусе
//         if (request.readyState < 4) {
//             statusMessage.innerHTML = message.loading;
//         } else if(request.readyState === 4 && request.status == 200) {
//             statusMessage.innerHTML = message.success
//         } else {
//             statusMessage.innerHTML = message.failure
//         }
//     })

//     for (let i = 0; i < input.length; i++) {  // очистка формы
//         input[i].value = ''
//     }

// })
// formModal.addEventListener('submit', function(event) {
//     event.preventDefault()
//     formModal.appendChild(statusMessage)

//     let request = new XMLHttpRequest()
//     request.open('POST', 'server.php')
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8')

//     let formData = new FormData(formModal)

//     let obj = {}
//     formData.forEach(function(value, key) {
//         obj[key] = value
//     })
//     let json = JSON.stringify(obj)

//     request.send(json)

//     request.addEventListener('readystatechange', function() {
//         if (request.readyState < 4) {
//             statusMessage.innerHTML = message.loading;
//         } else if(request.readyState === 4 && request.status == 200) {
//             statusMessage.innerHTML = message.success
//         } else {
//             statusMessage.innerHTML = message.failure
//         }
//     })

//     for (let i = 0; i < input.length; i++) {
//         input[i].value = ''
//     }

// })

let message = {
    loading: "Загрузка...",
    sucsess: "Спасибо! Скоро мы с Вами свяжемся",
    failure: "Что-то пошло не так..."
}

let form = document.querySelector('.main-form'),
    // formDown = document.querySelector('#form'),
    formModal = document.getElementById('form'),
    input = document.getElementsByTagName ('input'),
    // input = form.getElementsByTagName ('input'),
    statusMessage = document.createElement('div')
     

    statusMessage.classList.add('status')

function sendForm(elem){

    elem.addEventListener('submit', function (event) {
        event.preventDefault();
        elem.appendChild(statusMessage)
    
        let formData = new FormData(elem)
    
    function postData() {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest()
            request.open('POST', 'server.php')
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    
            request.onreadystatechange = function () {
                if(request.readyState < 4) {
                    resolve()
                } else if (request.readyState === 4) {
                    if (request.status == 200 && request.status < 300) {
                        resolve()
                    } else {
                        reject()
                    }
                }
            }
    
            let obj = {}
            formData.forEach (function (value, key) {
                obj[key] = value
            })
            let json = JSON.stringify(obj)
            request.send(json)

        })
    }
    
    function clearInput() {
        for (let i = 0; i < input.length; i++) {
            input[i].value = ''
        }
    }
    
    postData (formData)
        .then (() => statusMessage.innerHTML = message.loading)
        .then (() => statusMessage.innerHTML = message.sucsess)
        .catch (() => statusMessage.innerHTML = message.failure)
        .then (clearInput)
    })

}

sendForm(form)
sendForm(formModal)

})
  