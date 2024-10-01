$(document).ready(function() {
    $('#dropdownMenuButton').on('click', function() {
        $(this).next('.dropdown-menu').toggle(300);
    });

    $('.dropdown-item').on('click', function() {
        $(this).closest('.dropdown-menu').hide();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.dropdown').length) {
            $('.dropdown-menu').hide();
        }
    });
});
