window.addEventListener('keydown', function(event) {
    if (
        (event.key === "F5") || 
        (event.key === "r" && event.ctrlKey) || 
        (event.key === "R" && event.ctrlKey && event.shiftKey)
    ) {
        window.location.href = "index.html";
    }
});