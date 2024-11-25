document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', () => {
        alert('Navigating to: ' + link.href);
    });
});
