const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
const nombre  = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const password = document.getElementById("contraseña");

// signUpBtn.addEventListener("click", () => {
//     container.classList.add("right-panel-active");
// })

// signInBtn.addEventListener("click", () => {
//     container.classList.remove("right-panel-active");
// })

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

function cuandoContraseña(){
    password = alert("La contraseña es la fecha de su nacimiento, incluye el 0 en caso de ser una cifra");
    document.getElementById("password").innerHTML = password;
}

// function ingreso(){

//     let ingresoDos = <a href = "declaracion.html">Sing Up</a>
//     documement.getElementById("ingresoDos").innerHTML = ingresoDos;
    
//     // if(nombre == "" || apellido == "Ramirez Hernandez" || password == 04-04-2003 || password == 04/04/2003 || password == 04042003){
        
//     // }
// }











