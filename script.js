document.addEventListener('DOMContentLoaded', function() {
    // Function to update label styles based on the checked radio button
    function updateLabels() {
        const labels = document.querySelectorAll('.photo-label');
        labels.forEach(label => label.classList.remove('checked')); // Remove 'checked' class from all labels

        const checkedInput = document.querySelector('input[type="radio"]:checked');
        if (checkedInput) {
            const checkedLabel = document.querySelector(`label[for="${checkedInput.id}"]`);
            if (checkedLabel) {
                checkedLabel.classList.add('checked'); // Add 'checked' class to the corresponding label
            }
        }
    }

    // Initial call to set the correct label on page load
    updateLabels();

    // Add event listeners to radio buttons to update labels when checked
    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.addEventListener('change', updateLabels);
    });
});
