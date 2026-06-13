function sendMail() {

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("contact").value,
        Qualification: document.getElementById("Qualification").value,
        Department: document.getElementById("Department").value,
        industry: document.getElementById("industry").value,
        role: document.getElementById("role").value,
        resume: document.getElementById("resume").value,
        area: document.getElementById("area").value
    };

    // Send to your Gmail
    emailjs.send(
        "service_jwtj73v",
        "template_zvgw69y",
        parms
    )
    .then(function () {

        // Send confirmation to candidate
        emailjs.send(
            "service_jwtj73v",
            "template_wjjva1f",
            parms
        );

        alert("Application Submitted Successfully!");

    })
    .catch(function (error) {

        document.getElementById("message").innerHTML =
        "❌ Application failed. Please try again later.";

        console.log(error);
    });
}
