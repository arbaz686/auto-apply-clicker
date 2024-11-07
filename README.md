# Auto Apply Clicker for Instayre

This Firefox extension automatically clicks the "Apply" button on Instayre every 2 seconds, making job applications faster and easier. This tool ensures you don’t have to manually click "Apply" repeatedly while browsing the site.

## Features
- **Automatic Clicks**: Clicks the "Apply" button every 2 seconds on Instayre.
- **Background Operation**: Runs in the background so that you can multitask while it keeps clicking as long as the tab is open.
- **Simple Setup**: Lightweight and easy to install as a temporary add-on in Firefox.

## Installation

1. **Clone or Download the Repository**:
   ```
   git clone https://github.com/arbaz686/auto-apply-clicker.git
   ```

2. **Load the Extension in Firefox**:
   - Go to `about:debugging` in Firefox.
   - Select **This Firefox** on the left sidebar.
   - Click **Load Temporary Add-on** and choose the `manifest.json` file in the downloaded project folder.

3. **Open Instayre and Start Applying**:
   - Navigate to Instayre’s job listings page.
   - The extension will automatically start clicking the "Apply" button every 2 seconds when it detects it.

## Files and Structure

- **`manifest.json`**: Configures the extension’s permissions and scripts.
- **`content.js`**: The main script that clicks the "Apply" button every 2 seconds.

## Code Overview

- **manifest.json**: This file sets up the permissions and injects the content script into all pages.
  
- **content.js**: 
  - The script contains a function that identifies the "Apply" button using a CSS selector based on its classes: `.btn.btn-lg.btn-primary.new-btn`.
  - An interval timer is used to click this button every 2 seconds.

Here’s the main function in `content.js`:

```
// Function to find and click the Apply button every 2 seconds
function clickApplyButton() {
    const applyButton = document.querySelector(".btn.btn-lg.btn-primary.new-btn");
    if (applyButton) {
        applyButton.click();
    }
}

// Set an interval to click the Apply button every 2 seconds
setInterval(clickApplyButton, 2000);
```

## Notes

- This extension is currently set up to work on Instayre, but it may be adapted for other websites by changing the button's CSS selector in `content.js`.
- The extension will continue clicking only as long as the Instayre page is open in a Firefox tab.

## Disclaimer
This tool is meant to assist users in speeding up their job applications. Please ensure compliance with Instayre’s terms of service before using.
