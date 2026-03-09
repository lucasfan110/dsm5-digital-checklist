const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
    const trigger = item.querySelector(".accordion-trigger");

    trigger.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");

        // Toggle this item
        item.classList.toggle("open", !isOpen);
        trigger.setAttribute("aria-expanded", String(!isOpen));
    });
});
