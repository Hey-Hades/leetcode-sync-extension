# 🚀 LeetCode GitHub Sync

An automated browser extension that instantly pushes your accepted LeetCode solutions directly to your GitHub repository. 

Say goodbye to manually copying and pasting your code. Focus on solving algorithmic problems, and let this extension handle your GitHub commit graph!

## ✨ Features
* **Zero-Friction Sync:** Automatically detects when a LeetCode problem is successfully accepted and pushes the exact code to GitHub.
* **Smart Detection:** Prevents duplicate pushes and infinite loops using optimized content scripts.
* **100% Private & Secure:** Uses Chrome/Edge `chrome.storage.local` API to keep your GitHub Personal Access Token (PAT) securely on your own machine.
* **Lightweight:** Runs quietly in the background using Manifest V3 Service Workers, only waking up when you actually hit "Submit" on LeetCode.

## 🛠️ Tech Stack
* **JavaScript (ES6+)**
* **DOM Manipulation & Mutation Observers**
* **Chrome/Edge Extension API (Manifest V3)**
* **GitHub REST API**

---

## 📥 How to Install (For Friends & Developers)

Since this extension is currently unlisted from the Chrome Web Store, you can easily install it locally in Developer Mode.

1. **Download the Code:** Click the green **Code** button at the top of this repository and select **Download ZIP**. Extract the folder on your computer.
2. **Open Extensions Page:** * On Edge: Go to `edge://extensions/`
   * On Chrome: Go to `chrome://extensions/`
3. **Enable Developer Mode:** Toggle the **Developer mode** switch in the menu (usually bottom-left or top-right).
4. **Load the Extension:** Click the **Load unpacked** button and select the extracted folder. The extension icon will now appear in your browser toolbar!

---

## ⚙️ Setup Instructions

To let the extension talk to your GitHub account, you need to provide it with a secure access token and a destination repository.

### 1. Create a Destination Repository
1. Go to GitHub and create a new repository (e.g., `leetcode-solutions`).
2. Make sure to check the box to **Add a README file** so the repository initializes properly.

### 2. Generate a GitHub PAT (Personal Access Token)
1. Go to your GitHub **Settings** > **Developer settings** > **Personal access tokens** > **Tokens (classic)**.
2. Click **Generate new token (classic)**.
3. Name it something like "LeetCode Sync".
4. Set Expiration to **No expiration**.
5. Under Scopes, check the **`repo`** box (Full control of private repositories). 
6. Click Generate and **copy the token immediately**.

### 3. Connect the Extension
1. Click the LeetCode Sync puzzle piece icon in your browser toolbar.
2. Paste your GitHub PAT into the top box.
3. Type your repository path into the bottom box exactly like this: `YourUsername/your-repo-name`
4. Click **Save Credentials**.

**You're done!** Go solve a LeetCode problem. The next time you get an "Accepted" result, check your GitHub repository!

---

## 🔒 Security Note
Never share your GitHub PAT with anyone, and never commit it to public code. This extension is designed to only store your token locally on your own browser.

## 👨‍💻 Author
*Himanshu Sharma*