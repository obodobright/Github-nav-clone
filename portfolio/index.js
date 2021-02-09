const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
    if (toggle && nav) {
        toggle.addEventListener('click', () => nav.classList.toggle('show'))
    }
}
showMenu('toggle-btn', 'nav-list')

const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-list');
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))