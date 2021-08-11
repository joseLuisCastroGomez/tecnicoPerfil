// const imgs = document.querySelectorAll('.vista');
// const btnVer = document.querySelectorAll('.ver');

// var imagenes = document.querySelectorAll('.vista')
// var botonAgrandar = document.querySelectorAll('.ver')


// botonAgrandar.forEach(boton => { 
//   boton.addEventListener("click", function(e){
//     e.preventDefault();
//     console.log("hi")

      
//          imgs.style.transform = 'scale(2.0)';
//       imagenes.classList.toggle('bigger')
  
//              imagenes.forEach(img => {
//                  imagenes.classList.toggle('bigger')
//               })
//   });
// });

window.addEventListener('load', ()=> {
	var botonAgrandar = document.querySelectorAll('.ver')
  var imagenes = document.querySelector('.vista')
	var open = false

  botonAgrandar.forEach(btn => {
        btn.addEventListener('click', (e)=> {
            e.preventDefault();
    
            if (!open){
                btn.innerHTML = "Cerrar"
                open = true
            }else{
                btn.innerHTML = "Mostrar"
                open = false
            }

            // imagenes.style.transform = 'scale(2.0)';
            imagenes.classList.toggle('bigger')
              

        })
      })
    

	
})

// btnVer.forEach(btn => {
//   btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("hi")

//         // imgs.style.transform = 'scale(2.0)';
//       imgs.classList.toggle('.bigger');
  
//   })
// });


  


 // btnVer.addEventListener('click', function (e) {
 //   if (imgs.style.width == "100%") {
 //     imgs.style.transform = 'scale(2.0)';
 //   } else {
 //     imgs.style.transform = 'scale(1.0)';
 //   }
 // });

// function grande() {
//    imgs.classList.add('bigger');
//  }

// function visualizar() {
//   var grande = btnVer.forEach(btn => {
//    btn.addEventListener("click", (e) => {
//      e.preventDefault();
//      grande();
//       imgs.classList.toggle('bigger')
//    })
//  })
//  }

// imgs.forEach(img => {
//   img.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("hi")

//     imgs.classList.toggle("bigger");
  
//   })
// })

// btnVer.addEventListener("click", function(e) {
//   e.preventDefault();
//   imgs.classList.toggle("bigger");
// });




// btnVer.forEach(btn => {
//   btn.addEventListener("click", () => {
//     imgs.classList.toggle('bigger')
//   })
// })


// btnVer.addEventListener("click", (e) => {
//   btnVer.classList.toggle("active-menu-btn");
//   imgs.classList.toggle("bigger");
//   if (imgs.classList.contains("slide-out")) {
//     setTimeout(() => {
//       imgs.classList.add("display-none");
//     }, 1000);
//   } else {
//     imgs.classList.remove("display-none");
//   }
// });



// function grande() {
//   imgs.classList.add('bigger');
// }
// function normal() {
//   imgs.classList.remove('normal');
// }


// btnVer.addEventListener('click', function(e) {
//   grande();
// });
// btnCierra.addEventListener('click', function(e) {
//   normal();
// })