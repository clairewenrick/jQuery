$('form').submit(function() {
    if($('input[name="standing"]:checked').val()){
      if($('input[name="fruit"]:checked').val()){
        return true
      }
      else
        alert("Please pick a fruit.")
        return false
      }
      else 
        if($('input[name="fruit"]:checked').val()){
          alert("Please pick a class standing.")
          return false
        }
        else {
          alert("Please pick a class standing and fruit.")
          return false
        }  
    });