var btn = document.querySelector("button");

btn.addEventListener('click', function (){

    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    var txtbtn = document.body.className;

    if(txtbtn == "light-theme")
    {
        this.textContent = "Light";
    }
    else
    {
        this.textContent = "Dark";
    }
});


