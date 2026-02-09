
console.log("Archivo index2.js cargado correctamente");

document.addEventListener("DOMContentLoaded", () => {
    const ctn_menu = document.getElementById("menu-ctn");
    const toggle_btn = document.getElementById("toggle-btn");
    const close_btn = document.getElementById("ctn-icon-close");

    if (!ctn_menu || !toggle_btn) {
        return;
    }

    function mostrar_menu() {
        ctn_menu.style.display = "block";
    }

    function ocultar_menu() {
        ctn_menu.style.display = "none";
    }

    toggle_btn.addEventListener("click", mostrar_menu);

    if (close_btn) {
        close_btn.addEventListener("click", ocultar_menu);
    }

    const menuLinks = ctn_menu.querySelectorAll("a");
    menuLinks.forEach((link) => link.addEventListener("click", ocultar_menu));

    document.addEventListener("click", (e) => {
        if (ctn_menu.style.display === "block") {
            const clickedInside = ctn_menu.contains(e.target) || toggle_btn.contains(e.target);
            if (!clickedInside) ocultar_menu();
        }
    });

    const subirLink = document.getElementById("menu-subir");
    if (subirLink) {
        subirLink.addEventListener("click", (e) => {
            e.preventDefault();
            if (typeof Swal !== "undefined") {
                Swal.fire({
                    title: "Como subir tus construcciones",
                    html: `
                        <div style="text-align:left;">
                          <p><strong>1.</strong> Prepara tu captura (16:9).</p>
                          <p><strong>2.</strong> Sube tu archivo schematic.</p>
                          <p><strong>3.</strong> Envia nombre, autor y descripcion.</p>
                          <p><strong>4.</strong> Contacta por Discord o correo.</p>
                        </div>
                    `,
                    icon: "info",
                    background: "#1b2a33",
                    color: "#d7dde3",
                    confirmButtonText: "Entendido",
                    confirmButtonColor: "#58c0ff"
                });
            }
        });
    }

    const recomendadas = document.querySelectorAll(".recomendadas");
    recomendadas.forEach((section) => {
        const row = section.querySelector(".recomendadas-row");
        const btnLeft = section.querySelector('.recomendadas-btn[data-dir="left"]');
        const btnRight = section.querySelector('.recomendadas-btn[data-dir="right"]');
        if (!row || !btnLeft || !btnRight) return;

        const scrollByAmount = () => row.clientWidth * 0.7;

        btnLeft.addEventListener("click", () => {
            row.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });
        });

        btnRight.addEventListener("click", () => {
            row.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
        });
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") ocultar_menu();
    });
});
