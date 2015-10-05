/* Function for ScrollUp */

$('.smoothscroll').on('click', function(e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function() {
        window.location.hash = target;
    });
});


// Function to Select only One Checkbox.

var previousCheckId;

function toggle(chkBox) {
    if (chkBox.checked) {
        if (previousCheckId) {
            document.getElementById(previousCheckId).checked = false;
        }
        previousCheckId = chkBox.getAttribute('id');
    }
}
