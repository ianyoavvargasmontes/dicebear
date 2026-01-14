function generarAvatar() {
    const seed = document.getElementById("seed").value || "usuario";
    const style = document.getElementById("style").value;

    const url = `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}`;

    document.getElementById("avatar").src = url;
}
