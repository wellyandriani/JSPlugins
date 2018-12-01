$('#bt1').click(function(){
  
    swal("Hello world!");
    
  });
  
  $('#bt2').click(function(){
    
    swal("Oops...", "Something went wrong!", "error");
    
  });
  
  $('#bt3').click(function(){
    
    swal({
    title: "Are you sure?",
    text: "You will not be able to recover this imaginary file!",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Yes, delete it!",
    closeOnConfirm: false,
    html: false
  }, function(){
    swal("Deleted!",
    "Your imaginary file has been deleted.",
    "success");
  });
    
  });
  
  $('#bt4').click(function(){
    
    swal({
    title: "An input!",
    text: "Write something interesting:",
    type: "input",
    showCancelButton: true,
    closeOnConfirm: false,
    animation: "slide-from-top",
    inputPlaceholder: "Write something"
  },
  function(inputValue){
    if (inputValue === false) return false;
    
    if (inputValue === "") {
      swal.showInputError("You need to write something!");
      return false
    }
    
    swal("Nice!", "You wrote: " + inputValue, "success");
  });
    
  });
  