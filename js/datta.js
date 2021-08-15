window.addEventListener('load', ()=> {
	var contact = document.querySelectorAll('.talkme')
    var datta = document.querySelectorAll('.formulari')
	var open = false

    contact.forEach((contactbtn, i)=> {
        contactbtn.addEventListener('click', (e)=> {
            e.preventDefault();

                if (!open){
                    contactbtn.innerHTML = "Cerrar"
                    datta[i].classList.toggle('show-left');
                    open = true
                }else{
                    contactbtn.innerHTML = "Contactame"
                    datta[i].classList.toggle('show-left');
                    open = false
                }

        })
      })
})