// Function to find and click the Apply button every 2 seconds
function clickApplyButton() {
    const applyButton = document.querySelector(".btn.btn-lg.btn-primary.new-btn");
    if (applyButton) {
        applyButton.click();
    }
}

// Set an interval to click the Apply button every 2 seconds
setInterval(clickApplyButton, 5000);
