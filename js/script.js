
//ПОПАП-ПИСЬМО

var linkLetter = document.querySelector(".link-letter");

if(linkLetter) {
    var modalLetter = document.querySelector(".modal-letter");
    var nameForm = modalLetter.querySelector("[name=name]");
    var closeLetter = modalLetter.querySelector(".close");
    var form = modalLetter.querySelector("form");
    var emailForm = modalLetter.querySelector("[name=email]");
    var messageForm = modalLetter.querySelector("[name=message]");

    linkLetter.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalLetter.classList.add("modal-letter-show");
        nameForm.focus();
    });

    closeLetter.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalLetter.classList.remove("modal-letter-show");
    });

    form.addEventListener("submit", function (evt) {
        if (!nameForm.value || !emailForm.value || !messageForm.value) {
            evt.preventDefault();
            console.log("Нужно ввести имя, почту и текст письма");
        }
        
    });
};

//ПОПАП-КАРТА

var linkMap = document.querySelector(".map-link");

if(linkMap) {
    var modalMap = document.querySelector(".modal-map");
    var closeMap = modalMap.querySelector(".close-map");

    linkMap.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalMap.classList.add("modal-map-show");
    });

    closeMap.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalMap.classList.remove("modal-map-show");
    });
};

//ПОПАП-СТАТУС ТОВАРА

var linkStatus = document.querySelectorAll(".buy-hidden");

if(linkStatus) {
    var modalStatus = document.querySelector(".modal-status");
    var closeStatus = modalStatus.querySelector(".close");
    

    linkStatus.forEach(function (entry) {
        entry.addEventListener("click", function (evt) {
            evt.preventDefault();
            modalStatus.classList.add("modal-status-show");    
        })
    });

    closeStatus.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalStatus.classList.remove("modal-status-show");
    });
};