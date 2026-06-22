chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "pushToGitHub") {
    console.log("Background worker received the mission:", message.problem);

    // 1. Get the PAT and Repo from storage
    chrome.storage.local.get(['githubPat', 'githubRepo'], async (result) => {
      const pat = result.githubPat;
      const repo = result.githubRepo;

      if (!pat || !repo) {
        console.error("Missing GitHub credentials in storage!");
        return;
      }

      // 2. Prepare the data for GitHub (GitHub requires Base64 encoding)
      // We will save it in a folder called "LeetCode"
      const filePath = `LeetCode/${message.problem}.js`; 
      const url = `https://api.github.com/repos/${repo}/contents/${filePath}`;
      const encodedCode = btoa(message.code); // Converts text to Base64

      // 3. Make the API Call to GitHub
      try {
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${pat}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: `LeetCode Sync: Solved ${message.problem}`,
            content: encodedCode
          })
        });

        const data = await response.json();
        
        if (response.ok) {
          console.log("✅ SUCCESSFULLY PUSHED TO GITHUB!", data);
        } else {
          console.error("❌ GITHUB API ERROR:", data.message);
        }
      } catch (error) {
        console.error("❌ NETWORK ERROR:", error);
      }
    });
  }
});