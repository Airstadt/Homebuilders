    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.process-step-horizontal').forEach((step) => {
        observer.observe(step);
    });

    document.getElementById('consultation-button').addEventListener('click', () => {
        window.location.href = 'contactus.html';
    });