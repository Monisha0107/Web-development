document.addEventListener("DOMContentLoaded", function() {
    const discoverBtn = document.getElementById('discover-btn');
    const infoSection = document.getElementById('info-section');

    discoverBtn.addEventListener('click', function() {
        // Show the info section when button is clicked
        infoSection.style.display = 'block';
        
        // Scroll to the info section after it's displayed
        infoSection.scrollIntoView({ behavior: 'smooth' });
        
        // Hide the discover button after it is clicked
        discoverBtn.style.display = 'none';
});
});