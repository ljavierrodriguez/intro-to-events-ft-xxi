/* 

elem.addEventListener(evento: string, callback: function(event));

*/

window.onload = function () {

    function saludar() {
        alert("Hola desde el Evento Click")
    }

    function descriptionOver(elem) {
        console.log(elem)
        elem.style.backgroundColor = 'blue';
    }

    function descriptionOut(elem) {
        console.log(elem)
        elem.style.backgroundColor = 'blueviolet';
    }


    let btnLogin = document.getElementById('login');

    btnLogin.addEventListener('click', function (evento) {
        console.log(evento) // informacion del evento
        console.log(evento.target) // informacion del elemento que genera el evento 
        evento.target.disabled = true; // aplicar cambios en el elemento 
    });


    let links = document.querySelectorAll('.link');

    links.forEach((link) => {
        link.addEventListener('click', (evento) => {
            evento.preventDefault()
            console.log(evento.target.innerHTML)
        })
    })

    let searchForm = document.querySelector('.searchForm');
    searchForm.addEventListener('submit', (evento) => {
        evento.preventDefault();

        alert('Enviando Formulario');

    })

    let btnInfo = document.querySelector('.btnInfo');
    btnInfo.addEventListener('click', ({ target }) => {
        let info = document.querySelector('.info');
        console.log('Height', info.style.height)
        if (info.style.height === '0px') {
            target.innerHTML = 'Menos info'
            info.style.height = 'auto';
        } else {
            target.innerHTML = 'Mas info'
            info.style.height = '0px';
        }

    })

    let search = document.querySelector('[type=search]');
    search.addEventListener('keyup', (evento) => {
        console.log(evento.target.value);
    })

    search.addEventListener('focus', (evento) => {
        evento.target.style.backgroundColor = 'red';
    })

    search.addEventListener('blur', (evento) => {
        evento.target.style.backgroundColor = 'transparent';
        if(evento.target.value === ''){
            evento.target.focus()
        }
    })


    let loginForm = document.querySelector('.loginForm');
    loginForm.addEventListener('submit', (evento) => {
        evento.preventDefault();

        let email = document.querySelector('#email');
        let password = document.querySelector('#password');

        if(email.value !== '' && password.value !== ''){
            evento.target.submit()
        }else{
            alert('Por favor ingrese email y password');
        }

    })

}