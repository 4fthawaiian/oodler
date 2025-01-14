let originalValue;
let replacement="oodle";
const capitalized =
    replacement.charAt(0).toUpperCase()
    + replacement.slice(1)
class OodleApp {
    replacementString = "";
    constructor(theElement, replacment="oodle") {
        this.replacementString = replacment;
        this.replacementStringCap = this.replacementString.charAt(0).toUpperCase() + this.replacementString.slice(1);
        this.theElement = theElement;
    }

    yoodle () {
        $(this.theElement).val($(this.theElement).val().replace(/y/g, this.replacementString));
    }
    Yoodle () {
        $(this.theElement).val($(this.theElement).val().replace(/Y/g, this.replacementStringCap));
    }
    goodle () {
        $(this.theElement).val($(this.theElement).val().replace(/a|e|i|o|u/g, this.replacementString));
    }
    Goodle () {
        $(this.theElement).val($(this.theElement).val().replace(/A|E|I|O|U/g, this.replacementStringCap));
    }
}

$('#oodle-form').on('reset', function(e) {
    $('#usr').focus();
});
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('#usr').focus();
});

$( "#oodle-form" ).submit(function( event ) {
    let replString = $('#selector').val();
    myOodler = new OodleApp('#usr', replString);
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