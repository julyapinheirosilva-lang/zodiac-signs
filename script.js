```javascript
document.getElementById("formSigno").addEventListener("submit", function(event) {

    event.preventDefault();

    const data = document.getElementById("dataNascimento").value;

    if (!data) {
        alert("Digite sua data de nascimento.");
        return;
    }

    const partes = data.split("-");

    const ano = parseInt(partes[0]);
    const mes = parseInt(partes[1]);
    const dia = parseInt(partes[2]);

    let signo = "";

    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        signo = "aries";
    }
    else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        signo = "touro";
    }
    else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        signo = "gemeos";
    }
    else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        signo = "cancer";
    }
    else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        signo = "leao";
    }
    else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        signo = "virgem";
    }
    else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        signo = "libra";
    }
    else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        signo = "escorpiao";
    }
    else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        signo = "sagitario";
    }
    else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        signo = "capricornio";
    }
    else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        signo = "aquario";
    }
    else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        signo = "peixes";
    }

    window.location.href = "signo.html?signo=" + signo;
});
```
