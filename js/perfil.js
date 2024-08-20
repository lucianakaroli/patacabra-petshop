document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const birthDate = document.getElementById("birthDate").value;
    const phone = document.getElementById("phone").value;
    const numPets = document.getElementById("numPets").value;
    const petTypes = [];

    if (password !== confirmPassword) {
        document.getElementById("message").innerText = "As senhas não conferem!";
        return;
    }

    const birthDateObj = new Date(birthDate);
    const age = new Date().getFullYear() - birthDateObj.getFullYear();
    const monthDiff = new Date().getMonth() - birthDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && new Date().getDate() < birthDateObj.getDate())) {
        age--;
    }

    if (age < 18) {
        document.getElementById("message").innerText = "Você deve ter 18 anos ou mais para se cadastrar!";
        return;
    }

    document.querySelectorAll("input[type='checkbox']:checked").forEach(checkbox => {
        petTypes.push(checkbox.value);
    });

    const userData = {
        email: email,
        password: password,
        birthDate: birthDate,
        phone: phone,
        numPets: numPets,
        petTypes: petTypes.join(", ")
    };

    const mailtoLink = "mailto:lucianakarolif@gmail.com?subject=Cadastro de Usuário&body=Dados do Usuário: %0D%0AEmail: ${userData.email}%0D%0ATelefone: ${userData.phone}%0D%0AData de Nascimento: ${userData.birthDate}%0D%0AQuantidade de Pets: ${userData.numPets}%0D%0ATipos de Pets: ${userData.petTypes}";

    window.location.href = mailtoLink;
});
