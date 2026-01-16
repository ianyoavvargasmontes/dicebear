function generarAvatar() {
    const seed = document.getElementById("seed").value || "usuario";
    const style = document.getElementById("style").value;

    const url = `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}`;

    document.getElementById("avatar").src = url;
}

function descargarAvatar() {
    const avatar = document.getElementById("avatar");

    if (!avatar.src) {
        alert("Primero genera un avatar");
        return;
    }

    const enlace = document.createElement("a");
    enlace.href = avatar.src;
    enlace.download = "avatar.png";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}
