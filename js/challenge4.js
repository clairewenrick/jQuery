$("form").submit(function(onsubmit){
    var validInput = true;
    var name = $("#fullname");
    var address = $("#streetaddr");
    console.log("Here");
    console.log(name)
    if ((name.val().length) == 0){
        $("#nameerrormsg").css("display", "block"); 
        validInput = false;
        console.log(validInput);
    }
    else {
        $("#nameerrormsg").css("display", "none");
        console.log(validInput);
    }

    if ((address.val().length) == 0){
        $("#addrerrormsg").css("display", "block"); 
        validInput = false;
        console.log(validInput);
    }
    else {
        $("#addrerrormsg").css("display", "none"); 
        console.log(validInput);
    }

    return validInput;
});