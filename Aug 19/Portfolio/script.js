
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('.section');
    const bottomSectionsDivs = document.querySelectorAll('.bottom-sections div');

    darkModeToggle.addEventListener('click', () => {
        if(darkModeToggle.innerHTML == '🌙'){
            darkModeToggle.innerHTML = '☀️';
        }
        else if(darkModeToggle.innerHTML == '☀️'){
            darkModeToggle.innerHTML = '🌙';
        }

        body.classList.toggle('dark-mode');
        navbar.classList.toggle('dark-mode');
        sections.forEach(section => section.classList.toggle('dark-mode'));
        bottomSectionsDivs.forEach(div => div.classList.toggle('dark-mode'));
    });

