console.log("LeetCode Sync: I am alive and watching this page!");

let alreadySaved = false;

setInterval(() => {
  const currentUrl = window.location.href;
  if (!currentUrl.includes("/problems/")) return;

  const urlParts = currentUrl.split("/");
  const problemName = urlParts[4]; 

  const pageText = document.body.innerText;
  
  if (pageText.includes("Accepted") && pageText.includes("testcases passed") && !alreadySaved) {
    alreadySaved = true; // Lock it so it never fires again on this screen
    
    console.log("🎉 LEETCODE SYNC DETECTED SUCCESS!");
    console.log("Problem Name:", problemName);
    
    // Radio the background script!
    chrome.runtime.sendMessage({
      action: "pushToGitHub",
      problem: problemName,
      code: "// This is a test push from my new extension!\nconsole.log('Hello GitHub!');"
    });
    
    // REMOVED the 10-second reset timer to stop the spam loop!
  }
}, 2000);