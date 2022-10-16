var btn = document.querySelector("button");

btn.addEventListener('click', function (){

    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});


