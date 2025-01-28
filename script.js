document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var closeButton = document.getElementsByClassName("close-button")[0];

    modal.style.display = "block";

    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});