let originalValue;

class OodleApp {
    constructor(theElement) {
        this.theElement = theElement;
    }

    yoodle () {
        $(this.theElement).val($(this.theElement).val().replace(/y/g, "oodle"));
    }
    Yoodle () {
        $(this.theElement).val($(this.theElement).val().replace(/Y/g, "Oodle"));
    }
    goodle () {
        $(this.theElement).val($(this.theElement).val().replace(/a|e|i|o|u/g, "oodle"));
    }
    Goodle () {
        $(this.theElement).val($(this.theElement).val().replace(/A|E|I|O|U/g, "Oodle"));
    }
}

$('#oodle-form').on('reset', function(e) {
    $('#usr').focus();
});
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('#usr').focus();
    myOodler = new OodleApp('#usr');
});

$( "#oodle-form" ).submit(function( event ) {
    originalValue = $('#usr').val();
    event.preventDefault();
    myOodler.goodle();
    myOodler.Goodle();
    if(ywords.indexOf(originalValue.toLowerCase()) !== -1) {
        myOodler.yoodle();
        myOodler.Yoodle();
    }
});

let getUrlParameter = function getUrlParameter(sParam) {
    let sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

if(getUrlParameter('oodle') !== undefined) {
    $('#usr').val(getUrlParameter('oodle'));
    $( "#oodle-form" ).submit();
}