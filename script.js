const tabs  = document.querySelectorAll('[data-tab]');
const sections = document.querySelectorAll('.hero');

tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        e.preventDefault();

        const target = tab.dataset.tab;

        sections.forEach(section => {
            section.classList.remove('is-active');
        });

        document.querySelector(`.hero--${target}`).classList.add('is-active');
    });
});