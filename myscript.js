$(document).ready(function() {
    $('#submit').on('click', function() {
        var st = '';
        $('#myForm input[type=text], input[type=text],input[type=date],input[type=text],input[type=email],input[type=tel],select').each(function() {
            st = st + '<td>' + $(this).val() + '</td>';
            $(this).val('');
        });
        $('#details').append('<tr>' + st + '</tr>');
    });
});
