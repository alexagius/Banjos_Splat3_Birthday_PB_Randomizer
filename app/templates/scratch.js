import ajaxForm from 'jquery-form';
import ajaxSubmit from 'jquery-form';

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
import $ from "jquery";



// console.log();


// prepare the form when the DOM is ready
$(document).ready(function() {
  var options = {
    target:        '#output1',   // target element(s) to be updated with server response
    beforeSubmit:  showRequest,  // pre-submit callback
    success:       showResponse  // post-submit callback

    // other available options:
    //url:       url         // override for form's 'action' attribute
    //type:      type        // 'get' or 'post', override for form's 'method' attribute
    //dataType:  null        // 'xml', 'script', or 'json' (expected server response type)
    //clearForm: true        // clear all form fields after successful submit
    //resetForm: true        // reset the form after successful submit

    // $.ajax options can be used here too, for example:
    //timeout:   3000
  };

  // bind form using 'ajaxForm'
  $('#splatForm').ajaxForm(options);
  console.log('READY THE FORMMMMMZ');
});

// pre-submit callback
function showRequest(formData, jqForm, options) {
  // formData is an array; here we use $.param to convert it to a string to display it
  // but the form plugin does this for you automatically when it submits the data
  var queryString = $.param(formData);

  // jqForm is a jQuery object encapsulating the form element. To access the
  // DOM element for the form do this:
  // var formElement = jqForm[0];

  alert('About to submit: \n\n' + queryString);

  // here we could return false to prevent the form from being submitted;
  // returning anything other than false will allow the form submit to continue
  return true;
}

// post-submit callback
function showResponse(responseText, statusText, xhr, $form)  {
  // for normal html responses, the first argument to the success callback
  // is the XMLHttpRequest object's responseText property

  // if the ajaxForm method was passed an Options Object with the dataType
  // property set to 'xml' then the first argument to the success callback
  // is the XMLHttpRequest object's responseXML property

  // if the ajaxForm method was passed an Options Object with the dataType
  // property set to 'json' then the first argument to the success callback
  // is the json data object returned by the server

  alert('status: ' + statusText + '\n\nresponseText: \n' + responseText +
    '\n\nThe output div should have already been updated with the responseText.');
}


setTimeout(function() {
    console.log("This message is shown after 3 seconds");
}, 3000);

var modesSelected = $('#modes label.checked input').val();
console.log(modesSelected);

// function translate(sourceLang, destLang, sourceId, destId, loadingId) {
//     $(destId).hide();
//     $(loadingId).show();
//     $.post('/translate', {
//         text: $(sourceId).text(),
//         sourceLang: sourceLang,
//         destLang: destLang
//     }).done(function(translated) {
//         $(destId).text(translated['text'])
//         $(loadingId).hide();
//         $(destId).show();
//     }).fail(function() {
//         $(destId).text("{{ _('Error: Could not contact server.') }}");
//         $(loadingId).hide();
//         $(destId).show();
//     });
// };



// accept_random(e, data, callback);
import { AJAXForm } from "@donutteam/ajax-form";
AJAXForm.bindAll();





$(function(){
	$('#submit-splat').click(function(){
		var user = $('#inputUsername').val();
		var pass = $('#inputPassword').val();
		$.ajax({
			url: '/signUpUser',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(response);
			},
			error: function(error){
				console.log(error);
			}
		});
	});
});




$(function() {
        $('#submit-splat').bind('click', function() {
          $.getJSON('app/random_selections', {
            a: $('input[primary-gear-OFF="a"]').val(),
            b: $('input[primary-gear-ON="b"]').val()
          }, function(data) {
            $("#result").text(data.result);
          });
          return false;
        });
        });

function accept_random(e, data, callback, sourceId, destId, loadingId) {
    $.post('/random_selections', {
        e: $(e).text(),
        data: data,
        callback: callback
    }).done(function(selected) {
        $(destId).text(selected['returnz'])
        $(loadingId).hide();
        $(destId).show();
    }).fail(function() {
        $(destId).text("{{ _('Error: Could not contact server.') }}");
        $(loadingId).hide();
        $(destId).show();
    });
};



Remember.init({
  // Global settings:
  selector: "remember-input", // class applied to form elements
  clearOnSubmit: false, // Clear the stored data when form is submitted
  handleSubmit: true, // if true plugin will handle form submission via the onsubmit function
  onSubmit: function (e, data) {

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



// $(document).ready(function(){
//   $("form").submit(function(){
//     alert("Submitted");
//   });
// });



function js_ajax() {
    const element = document.createElement('script');

    $(function(){
        $('#submit-splat').submit(function(){
            var primary_gear_off = $('#primary-gear-OFF').val();
            var primary_gear_on = $('#primary-gear-ON').val();
            var primary_gear_grp = $('#primary-gear').val();
            $.ajax({
                url: '/accept_random',
                data: $('form').serialize(),
                type: 'POST',
                success: function(response){
                    console.log(response);
                },
                error: function(error){
                    console.log(error);
                }
            });
        });
    });



    document.body.appendChild(js_ajax());
    // Lodash, now imported by this script
    //  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //
    //  const Brinewater = new Image();
    //     Brinewater.src = _Brinewater;
    //
    //     element.appendChild(Brinewater);
    console.log('lahaha');




    return element;
}
