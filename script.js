

// function guardarPDF() {
//     const CV = document.getElementById("CV")
//     html2pdf()
//     .set({
//         margin: 1,
//         filename: 'CV_LeandroFernández.pdf',
//         image: {
//             type: 'jpeg',
//             quality: 0.98
//         },
//         html2canvas: {
//             scale: 3,
//             letterRendering: true,
//         },
//         jsPDF: {
//             unit: "in",
//             format: "a3",
//             orientation: 'portrait' // landscape o portrait
//         }
//     })
//     .from(CV)
//     .save()
//     .catch(err => console.log(err))
// }


document.addEventListener("DOMContentLoaded", () => {
    // Escuchamos el click del botón
    boton = document.querySelector("#btnCrearPdf");

    boton.addEventListener("click", () => {

        elementoParaConvertir = document.body; // <-- Aquí puedes elegir cualquier elemento del DOM
        html2pdf()
            .set({
                margin: 1,
                filename: 'documento.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 3,
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    format: "a3",
                    orientation: 'portrait' // landscape o portrait
                }
            })
            .from(elementoParaConvertir)
            .save()
            .catch(err => console.log(err))
            .finally(() => {
                console.log("xxx");
            });
    });
});

