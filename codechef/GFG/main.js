async function fetchProfileData(username) {
    try {
        const response = await fetch(`https://auth.geeksforgeeks.org/user/${username}/practice/`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const html = await response.text();
        return html;
    } catch (error) {
        throw new Error(`Error fetching profile data: ${error.message}`);
    }
}

function parseProfileData(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Extract the required data using query selectors or other DOM methods
    const profileName = doc.querySelector('.profile-name').innerText;
    const score = doc.querySelector('.score_card_value').innerText;
    const rank = doc.querySelector('.rank_card_value').innerText;
    const solvedProblems = doc.querySelector('.problem_solved_card_value').innerText;

    return {
        profileName,
        score,
        rank,
        solvedProblems
    };
}

function displayProfileData(data) {
    const profileContainer = document.getElementById('gfg-profile');

    profileContainer.innerHTML = `
        <h1>${data.profileName}</h1>
        <p>Score: ${data.score}</p>
        <p>Rank: ${data.rank}</p>
        <p>Solved Problems: ${data.solvedProblems}</p>
    `;
}

async function loadGfgProfile(username) {
    try {
        const html = await fetchProfileData(username);
        const profileData = parseProfileData(html);
        displayProfileData(profileData);
    } catch (error) {
        console.error(error.message);
        const profileContainer = document.getElementById('gfg-profile');
        profileContainer.innerHTML = '<h1>Error fetching profile data</h1>';
    }
}

// Usage example
const username = 'your-username'; // Replace with your GFG username
loadGfgProfile(username);
