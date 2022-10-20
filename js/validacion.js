function checkeado() {
  let terminos = document.getElementById('validationFormCheck1');
  let div = document.getElementById('feedback-modalterminos');
  if (!terminos.checked) {
    div.style.display = "inline";
  } else {
    div.style.display = "none";
  }


}

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  //console.log(forms);
  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    //console.log(form)
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }


      form.classList.add('was-validated')
    }, false)
  })
})()