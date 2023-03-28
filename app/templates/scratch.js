import Remember from "remember-input";

Remember.init({
  // Global settings:
  selector: "remember-input", // class applied to form elements
  clearOnSubmit: false, // Clear the stored data when form is submitted
  handleSubmit: true, // if true plugin will handle form submission via the onsubmit function
  onSubmit: function (e, data, submit) {

      console.log(data);
      console.log(e);
      setTimeout(function() {
            console.log("This message is shown after 3 seconds");
            accept_random(data);
        }, 3000);



  }, // handles form submission
  exclude: [], // name attributes to be excluded from storage
  disabled: false // disable plugin
});

Remember.init();
// You can also pass an optional settings object
// below listed default settings
import Remember from "remember-input";