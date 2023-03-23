window.addEventListener('load', function () {
    const toggle = this.document.querySelector(".toggle");
    const menu = this.document.querySelector(".menu");
    toggle && toggle.addEventListener("click", handleToggleMenu);
    function handleToggleMenu(e) {
        menu && menu.classList.add("is-show");
    }
    this.document.addEventListener("click", handleClickOutside)
    function handleClickOutside(e) {
        if (e.target.matches(".toggle") || e.target.matches(".menu .menu *")) return;
        menu && menu.classList.remove("is-show");
    }
});