

function filterSelection(location) {
    var items = document.getElementsByClassName('gallery-item');
    var buttons = document.getElementsByClassName('filter-btn');

    // Remove the active class from all buttons
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    // Add active class to the clicked button
    event.target.classList.add('active');

    // Loop through all gallery items and show/hide them based on the filter
    for (var i = 0; i < items.length; i++) {
        if (location === 'all') {
            // Show all items if "all" is selected
            items[i].parentElement.style.display = 'block';
        } else {
            // Show or hide items based on the selected location
            if (items[i].classList.contains(location)) {
                items[i].parentElement.style.display = 'block';
            } else {
                items[i].parentElement.style.display = 'none';
            }
        }
    }
}

// Initialize to show all items on page load
filterSelection('all');
