const API_URL = "http://localhost:5000/api/message";

async function sendMessage() {
    const text = document.getElementById("msgInput").value;

    if (!text) {
        alert("Enter a message");
        return;
    }

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    });

    document.getElementById("msgInput").value = "";
    getMessages();
}

async function getMessages() {
    const res = await fetch(API_URL);
    const data = await res.json();

    const list = document.getElementById("output");
    list.innerHTML = "";

    data.forEach(msg => {
        const li = document.createElement("li");
        li.innerText = msg.text;
        list.appendChild(li);
    });
}
