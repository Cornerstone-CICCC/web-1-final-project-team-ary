document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".play_button").forEach(button => {
  button.addEventListener("click", function () {
    const videoBox = this.closest(".video_box");
    const video = videoBox.querySelector("video");
    const overlay = videoBox.querySelector(".overlay");

    if (video) {
      video.play();
      video.setAttribute("controls", true);
    }

    if (overlay) {
      overlay.style.display = "none";
    }
  });
});

document.querySelectorAll('input[name="contact_type"]').forEach(radio => {
  radio.addEventListener('change', function () {
    // Ocultar todos los bloques
    document.querySelectorAll('.phone_input, .email_input').forEach(div => {
      div.classList.add('hidden');
    });

    // Determinar cuál mostrar según el radio seleccionado
    let selectedValue = this.value;

    if (selectedValue === 'call') {
      document.querySelector('input[name="phone_call"]').parentElement.classList.remove('hidden');
    } else if (selectedValue === 'whatsapp') {
      document.querySelector('input[name="whatsapp"]').parentElement.classList.remove('hidden');
    } else if (selectedValue === 'sms') {
      document.querySelector('input[name="sms"]').parentElement.classList.remove('hidden');
    } else if (selectedValue === 'email') {
      document.querySelector('.email_input').classList.remove('hidden');
    }
  });
});


document.getElementById('submit_btn').addEventListener('click', function (event) {
  event.preventDefault(); // Evita que se envíe automáticamente

  // Obtiene el valor seleccionado
  const contactType = document.querySelector('input[name="contact_type"]:checked');
  if (!contactType) {
    alert('Por favor seleccioná un método de contacto');
    return;
  }

  let valid = true;
  let data = {};

  // Validación y asignación según el tipo
  if (contactType.value === 'call') {
    const phone = document.getElementById('phone_call');
    if (!phone.value.match(/^\d{10}$/)) {
      alert('Número de teléfono inválido para llamada');
      valid = false;
    } else {
      data.call = phone.value;
    }
  } else if (contactType.value === 'whatsapp') {
    const phone = document.getElementById('whatsapp');
    if (!phone.value.match(/^\d{10}$/)) {
      alert('Número de WhatsApp inválido');
      valid = false;
    } else {
      data.whatsapp = phone.value;
    }
  } else if (contactType.value === 'sms') {
    const phone = document.getElementById('sms');
    if (!phone.value.match(/^\d{10}$/)) {
      alert('Número de SMS inválido');
      valid = false;
    } else {
      data.sms = phone.value;
    }
  } else if (contactType.value === 'email') {
    const email = document.getElementById('email');
    const pattern = /^[a-zA-Z0-9_.+]+@gmail\.com$/;
    if (!pattern.test(email.value)) {
      alert('Solo se permiten cuentas Gmail válidas');
      valid = false;
    } else {
      data.email = email.value;
    }
  }

  // Si pasa la validación, “envía” y limpia
  if (valid) {
    console.log('Datos enviados:', data); // Simula envío
    alert('¡Formulario enviado con éxito!');

    // Limpiar campos
    document.querySelectorAll('input, select').forEach(el => {
      if (el.type === 'radio') {
        el.checked = false;
      } else {
        el.value = '';
      }
    });

    // Oculta los bloques de nuevo
    document.querySelectorAll('.phone_input, .email_input').forEach(div => {
      div.classList.add('hidden');
    });
  }
});

// Checkbox de la fecha
  const dateCheckbox = document.getElementById('notDecidedDate');
  const dateInput = document.getElementById('eventDate');

  if(dateCheckbox){
    dateCheckbox.addEventListener('change', function () {
    dateInput.disabled = this.checked;
    console.log(this.checked)
  });
  }
  

  // Checkbox del horario
  const timeCheckbox = document.getElementById('notDecidedTime');
  const timeSelect = document.getElementById('eventDateTime');

  timeCheckbox.addEventListener('change', function () {
    timeSelect.disabled = this.checked;
      console.log(this.checked)
  });
});

  



