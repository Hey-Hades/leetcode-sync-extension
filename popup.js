document.addEventListener('DOMContentLoaded', () => {
  const patInput = document.getElementById('pat');
  const repoInput = document.getElementById('repo');
  const saveBtn = document.getElementById('saveBtn');

  chrome.storage.local.get(['githubPat', 'githubRepo'], (result) => {
    if (result.githubPat) patInput.value = result.githubPat;
    if (result.githubRepo) repoInput.value = result.githubRepo;
  });

  saveBtn.addEventListener('click', () => {
    const pat = patInput.value.trim();
    const repo = repoInput.value.trim();

    if (!pat || !repo) {
      alert('Please enter both your PAT and Repository name.');
      return;
    }

    chrome.storage.local.set({ githubPat: pat, githubRepo: repo }, () => {
      saveBtn.innerText = "Saved!";
      setTimeout(() => {
        saveBtn.innerText = "Save Credentials";
      }, 2000);
    });
  });
});