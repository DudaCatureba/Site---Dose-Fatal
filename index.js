function mostrarTrailer() {
    var trailer = document.getElementById('videoTrailer');
    if (trailer) {
        trailer.style.display = trailer.style.display === "none" ? "block" : "none";
    } else {
        console.error("Elemento #videoTrailer não encontrado.");
    }
}

var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");
var sidebar = document.getElementById("sidebar");
var body = document.body;

function toggleSidebar(isOpen) {
    if (sidebar && body) {
        sidebar.style.width = isOpen ? "250px" : "0";
            body.style.marginLeft = isOpen ? "250px" : "0";
        } else {
            console.error("Elementos necessários para a barra lateral não encontrados.");
        }
    }

if (openBtn && closeBtn) {
        openBtn.onclick = function() {
            toggleSidebar(true);
        };
    
        closeBtn.onclick = function() {
            toggleSidebar(false);
        };
    }