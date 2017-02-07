// site.js - for redaction submission.
(function () {

    var $submit = $("#submit");
    var $address = $("#address");
    var api = "";

    //  Submit Button with Ajax Request.
    $("#submit").on("click", function () {
        // Get value in text box.
        var str = $address.val();
        // Concatenate strings.
        var url = api.concat(processUrl(str));
        // Display in an alert.
        alert(url);

        $ajax({
            url: url,
            success: success,
            dataType: JSON
        });
        alert(success);
    });

    // Process Url.
    processUrl = function (str) {
        // Remove whitespace characters.
        str = str.replace(/\s/g, "%20");
        return str;
    };

    // Button functionality.
    var $selectorSubmit = $("#selectorSubmit");
    var $address = $("#address");

    $selectorSubmit.on("click", function () {
        if ($address.val() == "81/0136") {
            window.open("box url.");
        } else {
            var msg = "Redaction request submitted for application " + $address.val();
            alert(msg);
        }
    });
})();