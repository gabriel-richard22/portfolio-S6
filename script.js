function toggleMenu() {
    let menu = document.querySelector(".navbar ul");
    menu.classList.toggle("show");
}


document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi réel du formulaire
    alert("Merci pour votre message ! Je vous répondrai bientôt.");
});

document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    let form = this;
    let formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    })
    .then(response => {
        if (response.ok) {
            alert("Merci ! Votre message a bien été envoyé.");
            form.reset(); // Efface les champs après l’envoi
        } else {
            alert("Erreur ! Essayez encore.");
        }
    })
    .catch(error => {
        alert("Erreur de connexion !");
    });
});



