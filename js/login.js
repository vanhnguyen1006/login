    const pass_field = document.querySelector('.pass-key');
    const showBtn = document.querySelector('.show');

    showBtn.addEventListener('click', function(){
      if(pass_field.type == "password"){
        pass_field.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#3498db";
      }
      else{
        pass_field.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#222";
      }
    });
           
    const pass_field2 = document.querySelector('.pass-key-2');
    const showBtn2 = document.querySelector('.show-2');
    showBtn2.addEventListener('click', function(){
      if(pass_field2.type == "password"){
        pass_field2.type = "text";
        showBtn2.textContent = "HIDE";
        showBtn2.style.color = "#3498db";
      }
      else{
        pass_field2.type = "password";
        showBtn2.textContent = "SHOW";
        showBtn2.style.color = "#222";
      }
    });