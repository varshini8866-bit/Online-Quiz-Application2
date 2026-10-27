function generateResume() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let education =
        document.getElementById("education").value;

    let skills =
        document.getElementById("skills").value;

    let projects =
        document.getElementById("projects").value;

    let certifications =
        document.getElementById("certifications").value;


    document.getElementById("rname").innerText = name;

    document.getElementById("contact").innerText =
        email + " | " + phone;

    document.getElementById("reducation").innerText =
        education;

    document.getElementById("rskills").innerText =
        skills;

    document.getElementById("rprojects").innerText =
        projects;

    document.getElementById("rcertifications").innerText =
        certifications;
}