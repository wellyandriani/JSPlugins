$(function() {   
    $('#menupanel').BootSideMenu({
                side: "left"
            });
    });


    $(function() {   
        $('#menupanel').BootSideMenu({
                    side: "right"
                });
        });



        $(function() {   
            $('#menupanel').BootSideMenu({
                        side: "right",
                        duration: 500,  //Animation duration (milliseconds)
                        remember : true, // Restore last menu status on page refresh true/false
                        autoClose: false, // If true the initial status will be "closed"
                        pushBody: false, // If true the body of the page will be pushed left or right, according to the menu width and position
                        closeOnClick: false // If true the menu will be closed when a link is clicked
                    });
            });

            $(function() {   
                $('#menupanel').BootSideMenu({
                           onTogglerClick: function() {
                             //A function to be executed when the toggler arrow is clicked
                           },
                          onBeforeOpen: function() {
                            // A function to be executed before the menu is opened
                          },
                          onOpen: function() {
                            //A function to be executed when the menu is opened
                          },
                onBeforeClose: function() {
                  //A function to be executed before the menu is closed
                          },
                onClose: function() {
                  //A function to be executed when the menu is closed
                          }
                        });
                });