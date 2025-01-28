// script.js
/*document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var continueButton = document.getElementById("continue-button");

    modal.style.display = "flex";

    continueButton.onclick = function() {
        modal.style.display = "none";
    }
});
*/
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var continueButton = document.getElementById("continue-button");

    document.body.classList.add('modal-open');
    modal.style.display = "flex";

    continueButton.onclick = function() {
        document.body.classList.remove('modal-open');
        modal.style.display = "none";
    }
});

