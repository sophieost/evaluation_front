
// IMAGES AU SURVOL


let images = document.querySelectorAll('.imgHover');
// console.log(images);

// let jobs = document.querySelectorAll('.job');


images.forEach(image => {
    image.addEventListener('mouseover', () => {

        image.classList.remove('hide');
        // jobs.forEach(job => {
        //     job.classList.add('text-white');
        // });
    })

    image.addEventListener('mouseout', () => {
        image.classList.add('hide');
        // jobs.forEach(job => {
        //     job.classList.remove('text-white');
        // });
    })

});


//   VALIDATION FORMULAIRE



const form = document.querySelector('form');
const select = document.querySelector('select');
const textarea = document.querySelector('textarea');
const prenom = document.querySelector('.inputPrenom');
const nom = document.querySelector('.inputNom');
// console.log(nom);
const email = document.querySelector('.inputEmail');
const envoi = document.querySelector('input[type="submit"]')

let regexMail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

form.addEventListener('submit', (e)=>{
    e.preventDefault();


    let valuePrenom = prenom.value.trim();
    let valueNom = nom.value.trim();
    let valueEmail = email.value.trim();

    let lengthPrenom = valuePrenom.length;
    let lengthNom = valueNom.length;

    let donnees = [valuePrenom, valueNom, valueEmail];

    if (donnees.includes('')) {
        vide.textContent = "Tous les champs sont requis";
        vide.classList.add('errorMessage');
        prenom.classList.add('errorInput');
        nom.classList.add('errorInput');
        select.classList.add('errorInput');
        email.classList.add('errorInput');
        textarea.classList.add('errorInput');

    } else {
        vide.textContent = '';


        if (lengthPrenom < 3) {

            prenomError.textContent += "Votre prénom doit contenir au moins deux caractères";

            prenomError.classList.add('errorMessage');
            prenom.classList.add('errorInput');

        } else{
            prenomError.textContent ="";
            prenomError.classList.remove('errorMessage');
            prenom.classList.remove('errorInput');
            prenom.classList.add('valid');
        }
        
        if (lengthNom < 3) {

            nomError.textContent += "Votre nom doit contenir au moins deux caractères";

            nomError.classList.add('errorMessage');
            nom.classList.add('errorInput');

        } else{
            nomError.textContent ="";
            nomError.classList.remove('errorMessage');
            nom.classList.remove('errorInput');
            nom.classList.add('valid');
        }
        
        if (!regexMail.test(valueEmail)) {

            emailError.textContent += "le mail n'est pas valide";
            emailError.classList.add('errorMessage');
            email.classList.add('errorInput');
        } else{
            emailError.textContent ="";
            emailError.classList.remove('errorMessage');
            email.classList.remove('errorInput');
            email.classList.add('valid');
        }

        if(select.value == ""){
            raisonError.classList.add('errorMessage');
            select.classList.add('errorInput');
        }else{
            raisonError.textContent ="";
            raisonError.classList.remove('errorMessage');
            select.classList.remove('errorInput');
            select.classList.add('valid');
        }

        if(textarea.value.length <=10){
            messageError.classList.add('errorMessage');
            textarea.classList.add('errorInput');
        }else{
            nomError.textContent ="";
            nomError.classList.remove('errorMessage');
            textarea.classList.remove('errorInput');
            textarea.classList.add('valid');
        }

        if(lengthPrenom > 3 && lengthNom > 3 && regexMail.test(valueEmail) && select.value !== "" && textarea.value.length >=10){
            envoi.classList.add('bg-success');
            envoi.value = 'Envoyé'
        }
    }
})
