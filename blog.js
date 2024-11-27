function filterSelection(location) {
    var items = document.getElementsByClassName('post-item');
    var buttons = document.getElementsByClassName('filter-btn');

  
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

  
    event.target.classList.add('active');

   
    for (var i = 0; i < items.length; i++) {
        if (location === 'all') {
            items[i].style.display = 'block';
        } else {
            if (items[i].classList.contains(location)) {
                items[i].style.display = 'block';
            } else {
                items[i].style.display = 'none';
            }
        }
    }
}
