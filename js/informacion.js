window.addEventListener('load', ()=> {
	var desplegar = document.querySelectorAll('.infor_btn')
    var desplegable = document.querySelectorAll('.infor')
	var open = false

    desplegar.forEach((baton, i)=> {
        baton.addEventListener('click', (e)=> {
            e.preventDefault();

                if (!open){
                    baton.innerHTML = "Cerrar"
                    desplegable[i].classList.toggle('show-mid');
                    open = true
                }else{
                    baton.innerHTML = "Informacion"
                    desplegable[i].classList.toggle('show-mid');
                    open = false
                }

        })
      })


})