$(function() {
    $("#inputYear").keypress(function(event){
        var inputValue = event.charCode;
        //alert(inputValue);
        if(!((inputValue > 47 && inputValue < 58) ||(inputValue==32) || (inputValue==0))){
            event.preventDefault();
            $('#inputYear').addClass('is-invalid');
            setTimeout( function(){
                $('#inputYear').removeClass('is-invalid');
            }  , 30000 );
        }
    });

    $("#inputResearch").keypress(function(event){
        var inputValue = event.charCode;
        //alert(inputValue);
        if(!((inputValue > 64 && inputValue < 91) || (inputValue > 96 && inputValue < 123)||inputValue==32 || (inputValue==0))){
            event.preventDefault();
            $('#inputResearch').addClass('is-invalid');
        }else {
            $('#inputResearch').removeClass('is-invalid');
        }
    });

})
