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
    document.querySelectorAll('.phone_input, .email_input').forEach(div => {
      div.classList.add('hidden');
    });

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


function validateForm(event) {
  event.preventDefault();
  let valid = true;
  const eventType = document.querySelector('input[name="event_type"]:checked');
  if (!eventType) {
    alert("Select some kind of event");
    valid = false;
  }

  const dateInput = document.getElementById("eventDate");
  const dateCheckbox = document.getElementById("notDecidedDate");
  if (!dateInput.value && !dateCheckbox.checked) {
    alert("Choice one date or checked 'No decided'");
    valid = false;
  }

  const timeSelect = document.getElementById("eventDateTime");
  const timeCheckbox = document.getElementById("notDecidedTime");
  if (!timeSelect.value && !timeCheckbox.checked) {
      alert("Choice one hr or checked 'No decided'");
    valid = false;
  }

  const nameInput = document.getElementById("name");
  if (!nameInput.value.trim()) {
    alert("Add Name");
    valid = false;
  }

  const contactType = document.querySelector('input[name="contact_type"]:checked');
  if (!contactType) {
    alert("Select a contact method");
    valid = false;
  }


  if (contactType) {
    let contactField;
    switch (contactType.value) {
      case "call":
        contactField = document.getElementById("phone_call");
        break;
      case "whatsapp":
        contactField = document.getElementById("input_whatsapp");
        break;
      case "sms":
        contactField = document.getElementById("input_sms");
        break;
      case "email":
        contactField = document.getElementById("input_email");
        break;
    }

    if (!contactField || !contactField.value.trim()) {
      alert("Complete contact information");
      valid = false;
    }
  }

  if (valid) {
    alert("Form sent 🎉");
    document.querySelector("form").submit();
  }
}

document.getElementById("submit_btn").addEventListener("click", validateForm);


const dateCheckbox = document.getElementById('notDecidedDate');
const dateInput = document.getElementById('eventDate');

  if(dateCheckbox){
    dateCheckbox.addEventListener('change', function () {
    dateInput.disabled = this.checked;
    console.log(this.checked)
  });
  }
  
  const timeCheckbox = document.getElementById('notDecidedTime');
  const timeSelect = document.getElementById('eventDateTime');

  timeCheckbox.addEventListener('change', function () {
    timeSelect.disabled = this.checked;
      console.log(this.checked)
  });
});

  



