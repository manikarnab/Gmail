function showDashboard() {
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("create-campaign").style.display = "none";
}

function showCreateCampaign() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("create-campaign").style.display = "block";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const draggedElement = document.getElementById(event.dataTransfer.getData("text"));
    document.getElementById("drag-drop-container").appendChild(draggedElement);
}

function scheduleCampaign() {
    const emailContent = document.getElementById("email-content").value;
    const delay = document.getElementById("delay").value;
    function sendEmail() {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "cse20006@cemk.ac.in",
            Password: "Cse@2006",
            To: 'manikarnab2002@gmail.com',
            From: "cse20006@cemk.ac.in",
            Subject: "Sending Email using javascript",
            Body: "Well that was easy!!",
        })
            .then(function (message) {
                alert("mail sent successfully")
            });
    }

    // You would typically send this data to the server for processing and scheduling

    // For demonstration purposes, log the data to console
    console.log("Email Content:", emailContent);
    console.log("Delay:", delay);

    // You can reset the drag-and-drop container
    document.getElementById("drag-drop-container").innerHTML = "Drag and drop components here:";
}


