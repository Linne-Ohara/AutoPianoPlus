document.body.onkeydown = function (event) {
    if (event.code !== "Space") {
        return
    }
    event.preventDefault();
}
