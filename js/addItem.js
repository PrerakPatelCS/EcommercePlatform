$(document).ready(function() {
    // Disable the submit button by default
    $("#submit").prop("disabled", true);
  
    // Listen for changes in the form fields
    $("form input").on("input", function() {
        // Check if all fields are filled
        var allFieldsFilled = true;
        $("form input").each(function() {
            if ($(this).val() === "") {
            allFieldsFilled = false;
            return false; // break out of the loop
            }
        });
  
        // Enable the submit button if all fields are filled
        if (allFieldsFilled) {
            $("#submit").prop("disabled", false);
        } else {
            $("#submit").prop("disabled", true);
        }
    });

    $("#myForm").submit(function(event) {
        event.preventDefault();
        // Serialize form data as JSON
        var formDataArray = $("#myForm").serializeArray();
        // Convert into Object
        var formDataObject = {};
        formDataArray.forEach(function(item){
            formDataObject[item.name] = item.value;
        });
        var formDataJSON = JSON.stringify(formDataObject);

        console.log(formDataJSON);
        // Send POST request to REST API
        $.ajax({
            url: "http://10.0.0.159:8080/api/apparel",
            type: "POST",
            data: formDataJSON,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(response){
                alert("Apparel Added!");
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // Handle error response from REST API
                console.log(textStatus, errorThrown);
            }
        });
    });
    
});
  