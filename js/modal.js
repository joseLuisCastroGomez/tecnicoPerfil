window.addEventListener('load', ()=> {
	var button = document.querySelectorAll('.ver')
    var ventan = document.querySelectorAll('.ventan')
    var imagenes = document.querySelectorAll('.vista')
	var open = false

    button.forEach((btn, i)=> {
        btn.addEventListener('click', (e)=> {
            e.preventDefault();

                if (!open){
                    btn.innerHTML = "Cerrar"
                    ventan[i].classList.toggle('show');
                    open = true
                }else{
                    btn.innerHTML = "Ver"
                    ventan[i].classList.toggle('show');
                    open = false
                }

        })
      })

    var gallery = document.querySelectorAll('.galeria')

    gallery.forEach((photo, i)=> {
        photo.addEventListener('click', (e) => {
        e.target.classList.toggle('bigger')
        })
    })

    


})