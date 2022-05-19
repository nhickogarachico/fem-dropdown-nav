/** Dropdown Functions */
const SVG_PATH_ARROW_UP = '<path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/>';
const SVG_PATH_ARROW_DOWN = '<path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>'


const showDropdown = (dropdownBtn, target) => {
    const dropdownElement = document.querySelector(`#${target}`);
    const svgElement = dropdownBtn.querySelector('svg');

    if (dropdownElement.style.display == 'block') {
        dropdownElement.style.display = 'none';
        dropdownBtn.classList.remove('active');
        svgElement.innerHTML = SVG_PATH_ARROW_DOWN;

    } else {
        dropdownElement.style.display = 'block';
        dropdownBtn.classList.add('active');
        svgElement.innerHTML = SVG_PATH_ARROW_UP;
    }
}

/** Side Menu functions */
const navbar = document.querySelector('.navbar');
const sideMenu = document.querySelector('.navbar-content');

const closeSideMenu = () => {
    navbar.classList.add('responsive');
}

const openSideMenu = () => {
    navbar.classList.remove('responsive');
}