
(function ($) {
    'use strict';

    jQuery(document).ready(function () {


        /*
         * ----------------------------------------------------------------------------------------
         *  PRELOADER JS
         * ----------------------------------------------------------------------------------------
         */


        $(window).on('load', function() {
          $('body').addClass('loaded');
        });


        $(document).ready(function(){
    $('.sidebarBtn').click(function(){
        $('.sidebar').toggleClass('active');
        $('.sidebarBtn').toggleClass('toggle');
        })
    })



        /*
         * ----------------------------------------------------------------------------------------
         *  SMOOTH SCROLL JS
         * ----------------------------------------------------------------------------------------
         */

        $('a.smooth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });


        /*
         * ----------------------------------------------------------------------------------------
         *  SCROLL TO UP JS
         * ----------------------------------------------------------------------------------------
         */
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 250) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').on("click", function () {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  WOW JS
         * ----------------------------------------------------------------------------------------
         */
        new WOW().init();


        /*
         * ----------------------------------------------------------------------------------------
         *  CONTACT JS
         * ----------------------------------------------------------------------------------------
         */

// Postal codes do not include the letters D, F, I, O, Q or U, and the first position also does not make use of the letters W or Z.
function checkPostal(postal) {
    var regex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);
    var postal = document.getElementById("postal").value
    if (regex.test(postal.value))
        return true;
    else
        alert("please enter valid postal code") 
        return false;
}

// function validate() {
        
//       // e.preventDefault(); // prevent the form sending
      
    
//       var Reg = /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i;
//       var postal= document.getElementById('postal');
//       // var password = document.getElementById('password');

//       if (Reg.test(postal.value) == false) {
//         alert('Invalid Postal Code.');
//         postal.focus();
//         return false;
//       }
//        //add event listener for form submission
//     document.getElementById('form_id').addEventListener('submit',validate);
//     }


        $(document).ready(function () {
            toggleFields(); // call this first so we start out with the correct visibility depending on the selected form values
    // this will call our toggleFields function every time the selection value of our other field changes
        $("#country").change(function () {
            toggleFields();
        });
    });
        // this toggles the visibility of other server
        function toggleFields() {
            if ($("#country").val() === "canada")
        $("#postal").show();
            else
                $("#postal").hide();
        }



});

})(jQuery);

function validate(){
        

        var newVal = document.getElementById("postal").value;

        var reg = /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i;

        if (reg.test(postal.value)== false) {
            document.getElementById("demo").style.color = "red";
                document.getElementById("demo").innerHTML ="Invalid postal Code: "+ newVal;
                // alert('Invalid Postal Code: '+newVal);
                return false;
            } else{
            document.getElementById("demo").style.color = "DarkGreen";      
            document.getElementById("demo").innerHTML ="Valid Postal Code: "+newVal;
            }

            return true;
        }