const listItems = document.querySelectorAll('li a[href^="lectures/"][href$=".html"]');

listItems.forEach((item, index) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `checkbox-${index}`;
    const checkboxState = localStorage.getItem(`checkbox-${index}`);
    if (checkboxState === 'true') {
        checkbox.checked = true;
    }

    checkbox.addEventListener('change', (event) => {
        const isChecked = event.target.checked;
        localStorage.setItem(`checkbox-${index}`, isChecked);
        chrome.runtime.sendMessage({ id: index, isChecked });
    });

    const label = document.createElement('label');
    label.setAttribute('for', `checkbox-${index}`);
    item.insertBefore(checkbox, item.firstChild);
    item.insertBefore(label, item.firstChild);
});
window.addEventListener('load', () => {
    listItems.forEach((item, index) => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const checkboxState = localStorage.getItem(`checkbox-${index}`);
        if (checkboxState === 'true') {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    });
});