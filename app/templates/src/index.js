import _ from 'lodash';
import $ from 'jquery';
import jQuery from 'jquery';

import ajaxForm from 'jquery-form';
import ajaxSubmit from 'jquery-form';
import './custom.scss';
import _Brinewater from './img/stages_splat3/Brinewater_Springs.png';
import _Eeltail from './img/stages_splat3/Eeltail_Alley.png';
import Flounder_Heights from './img/stages_splat3/Flounder_Heights.png';
import Hagglefish_Market from './img/stages_splat3/Hagglefish_Market.png';
import Hammerhead_Bridge from './img/stages_splat3/Hammerhead_Bridge.png';
import Inkblot_Art_Academy from './img/stages_splat3/Inkblot_Art_Academy.png';
import mahi from  './img/stages_splat3/Mahi-Mahi_Resort.png';
import mako from  './img/stages_splat3/MakoMart.png';
import manta from  './img/stages_splat3/Manta_Maria.png';
import mince from  './img/stages_splat3/Mincemeat_Metalworks.png';
import muss from  './img/stages_splat3/Museum_dAlfonsino.png';
import scor from  './img/stages_splat3/Scorch_Gorge.png';
import stur from  './img/stages_splat3/Sturgeon_Shipyard.png';
import umam from  './img/stages_splat3/Umami_Ruins.png';
import under from  './img/stages_splat3/Undertow_Spillway.png';
import wahoo from  './img/stages_splat3/Wahoo_World.png';

import Remember from 'remember-input';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';



console.log('FAFAFAFA');






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
const accept_random = function (e, data, callback, sourceId, destId, loadingId) {
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


 function component() {
   const element = document.createElement('div');

  // Lodash, now imported by this script
  //  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  //
  //  const Brinewater = new Image();
  //     Brinewater.src = _Brinewater;
  //
  //     element.appendChild(Brinewater);
     console.log('la');


   return element;
 }

 document.body.appendChild(component());












