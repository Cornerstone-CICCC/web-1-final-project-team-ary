/*Get id or class*/
const buttons = document.querySelectorAll(".switch_titles");
const makeup_section = document.querySelector(".makeup_work");
const hairstyle_section = document.querySelector(".hairstyle_work");
const makeup_button = document.querySelector("#makeup_btn");
const hairstyle_button = document.querySelector("#hairstyle_btn");
const button_view_more = document.querySelector(".button_view_more");
const extras = document.querySelectorAll(".extra_work");
/*Change the gallery in the listener of each button*/
makeup_button.addEventListener("click",function(){
        makeup_button.classList.add("switch_clicked");
        makeup_section.classList.remove("display_work");
        hairstyle_button.classList.remove("switch_clicked");
        hairstyle_section.classList.add("display_work");
        extras.forEach(card => card.style.display = "none");
        button_view_more.style.display = 'block';
})

hairstyle_button.addEventListener("click",function(){
        makeup_button.classList.remove("switch_clicked");
        makeup_section.classList.add("display_work");
        hairstyle_button.classList.add("switch_clicked");
        hairstyle_section.classList.remove("display_work");
        extras.forEach(card => card.style.display = "none");
        button_view_more.style.display = 'block';
})

button_view_more.addEventListener("click",function(){
    extras.forEach(card => card.style.display = "block");
    button_view_more.style.display = 'none';
})