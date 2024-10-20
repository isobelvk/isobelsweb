function toggleAnnotation(id) {
    var annotation = document.getElementById(id);
    if (annotation) { // Check if the element exists
        if (annotation.style.display === "none" || annotation.style.display === "") {
            annotation.style.display = "block"; // Show the annotation
        } else {
            annotation.style.display = "none"; // Hide the annotation
        }
    }
}
