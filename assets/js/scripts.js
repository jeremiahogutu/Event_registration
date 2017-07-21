
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
         *  Form validation
         * ----------------------------------------------------------------------------------------
         */

// Postal codes do not include the letters D, F, I, O, Q or U, and the first position also does not make use of the letters W or Z.
    function checkPostal(postal) {

    //Regex code to validate the postal code
    var regex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);
    //Gets the value of the postal code entered by the user
    var postal = document.getElementById("postal").value
    if (regex.test(postal.value))
        return true;//test passes if postal code is valid
    else
        //test fails if postal code is invalid
        alert("please enter valid postal code") 
        return false;
    }


        $(document).ready(function () {
            toggler(); // sets the visibility based on the selected values

        //calls toggler function every time the selection value of the field changes
        $("#country").change(function () {
            toggler();
        });
    });
        // this toggles the visibility of postal code field
        function toggler() {
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
                return false;
            } else{
            document.getElementById("demo").style.color = "DarkGreen";      
            document.getElementById("demo").innerHTML ="Valid Postal Code: "+newVal;
            }

            return true;
        }