


    function filterSelection(location) {
        var items = document.getElementsByClassName('song-item');
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

    
    filterSelection('all');

    
    function toggleAnnotation(id) {
        var annotation = document.getElementById(id);
        if (annotation) {
            if (annotation.style.display === "none" || annotation.style.display === "") {
                annotation.style.display = "block";
            } else {
                annotation.style.display = "none";
            }
        }
    }


function toggleAnnotation(id) {
    var annotation = document.getElementById(id);
    if (annotation) { 
        if (annotation.style.display === "none" || annotation.style.display === "") {
            annotation.style.display = "block"; 
        } else {
            annotation.style.display = "none"; 
        }
    }
}


