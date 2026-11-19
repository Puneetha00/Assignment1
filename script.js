
$(document).ready(function() {

    // Display current year
    $("#year").text(new Date().getFullYear());

    // Display today's date
    $("#today").text(new Date().toLocaleDateString());

    // Print resume
    $("#printBtn").click(function() {
        window.print();
    });

    // Welcome message
    $(".home h2").click(function() {
        alert("Welcome to my Personal Website!");
    });

});
