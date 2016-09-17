/*Nina Kong*/
$(document).ready(function(){
    var windowHeight = $( window ).height();
    var con = $(".Content");
    con.parentsUntil($("body")).css("height", windowHeight);

    $('#slideUp').click(function() {
        $('#displayPart').slideUp('slow');
    });
    $('#slideDown').click(function() {
        $('#displayPart').slideDown('fast');
    });
    $('#slideToggle').click(function() {
        $('#displayPart').slideToggle('fast', done);
    });
    function done() {
        console.log('Done: '+ this.id);
    }
});
