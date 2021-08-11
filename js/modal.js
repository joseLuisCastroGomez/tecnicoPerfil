window.addEventListener('load', ()=> {
	var button = document.querySelectorAll('.ver')
    var button2 = document.querySelectorAll('.ver2')
	var open = false

    button.forEach(btn => {
        btn.addEventListener('click', (e)=> {
            e.preventDefault();
    
            if (!open){
                btn.innerHTML = "Cerrar"
                open = true
            }else{
                btn.innerHTML = "Mostrar"
                open = false
            }

            var ventan = document.querySelector('.Ventan')

            ventan.classList.toggle('show')
             

        })
      })

      button2.forEach(btn2 => {
        btn2.addEventListener('click', (e)=> {
            e.preventDefault();
    
            if (!open){
                btn2.innerHTML = "Cerrar"
                open = true
            }else{
                btn2.innerHTML = "Mostrar"
                open = false
            }

            var ventan2 = document.querySelector('.Ventan2')

            
            ventan2.classList.toggle('show')
             

        })
      })
    

	
})