const form = document.getElementById('form')
    const button = document.getElementById('submitButton')

    const name = document.getElementById('name')
    const email = document.getElementById('mail')
    const gender = document.getElementById('gender')
    const terms = document.getElementById('terms')

    const formIsValid = {
        name: false,
        email: false,
        gender: false,
        terms: false,
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validateForm();
    })

    name.addEventListener('change', (e) => {
        if(e.target.value.trim().length > 0) formIsValid.name = true
    })

    email.addEventListener('change', (e) => {
        if(e.target.value.trim().length > 0) formIsValid.email = true
    })

    gender.addEventListener('change', (e) => {
        if(e.target.checked = true) formIsValid.gender = true
    })

    terms.addEventListener('change', (e) => {
        formIsValid.terms = e.target.checked
        e.target.checked ? button.removeAttribute('disabled') : 
        button.setAttribute('disabled', true)
    })

    const validateForm = () => {
        const formValues = Object.values(formIsValid)
        const valid = formValues.findIndex(value => value == false)
        if(valid == -1) form.submit()
        else 
        alert('Campos incompletos, Formato invalido') 
    }

window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("form");
    var button = document.getElementById("submitButton");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    //  button.addEventListener("click", function(e){
    //      e.preventDefault();
    //    });

      function success() {
        form.reset();
        status.classList.add("success");
        status.innerHTML = "Solicitud Enviada!";
      }

      function error() {
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem.";
      }

    
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });

  });
  
   // helper function for sending an AJAX request
  
   function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  