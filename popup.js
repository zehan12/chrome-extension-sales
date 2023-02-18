const site = window.location.hostname;
// alert(site)

(
    () => {       
        console.log(window,"window")
        var connection = window.document.body.querySelectorAll(".artdeco-button.artdeco-button--2.artdeco-button--secondary")
        console.log(connection, "all query")
    }
)()

// const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css
// Add_Custom_Style(`
// @import url("https://fonts.googleapis.com/css?family=Raleway");
// * {
//     font-family: "Raleway";
//     color: #00ff40 !important;
// }
// `)


document.addEventListener("DOMContentLoaded", function () {
    var connection = window.document.body.querySelectorAll(".artdeco-button.artdeco-button--2.artdeco-button--secondary")
    console.log(connection, "all event  query")
    console.log("content loaded")
    document.getElementById("button1").addEventListener("click", function () {
       
        var body = document.getElementsByTagName("body")[0].style.backgroundColor = "aqua";
        var connection = window.document.body.querySelectorAll(".artdeco-button.artdeco-button--2.artdeco-button--secondary")
        console.log(connection, "all event  query")
    });
});

// console.log("hello")