async function fetchResults() {
    try {
        const response = await fetch('/goiboet/results/json', { credentials: 'include' });

        if (response.status === 401) {
            window.location.href = "/goiboet/login";
            return;
        }

        if (!response.ok) {
            document.getElementById("results").innerHTML = "<p>Kunde inte hämta resultaten.</p>";
            return;
        }

        const data = await response.json();

        const options = [
            "Helt perfekt - älskar reklam!",
            "Jodå! Ganska bra!",
            "Helt okej faktiskt!",
            "Ganska dåligt, men jag har förståelse!",
            "Jättedåligt!",
            "Horribelt! Borde bli förbjudet!"
        ];

        const resultsHtml = options.map((option, index) => `
            <div class="result-item">
                <span>${option}</span>
                <strong>${data[index]} röster</strong>
            </div>
        `).join("");

        document.getElementById("results").innerHTML = resultsHtml;
    } catch (error) {
        console.error("Error fetching results:", error);
        document.getElementById("results").innerHTML = "<p>Kunde inte ladda resultaten.</p>";
    }
}

// Log out function
async function logout() {
    await fetch('/goiboet/logout', { method: 'POST', credentials: 'include' });
    window.location.href = "/goiboet/login";
}

// Fetch results on page load
fetchResults();