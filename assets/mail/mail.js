$(document).ready(function() {

    var form = $('#contact__form'),
      name = $('#name'),
      email = $('#email'),
      company = $('#company'),    
      subject = $('#subject'),
      comment = $('#comment'),
      info = $('#contact__form--info'),
      submit = $("#contact__form--submit");
    
    form.on('input', '#name, #email, #company, #subject, #comment', function() {
      $(this).css('border-color', '');
      info.html('').slideUp();
    });
    
    submit.on('click', function(e) {
      info.html('Sending ...').css('color', '#F7421E').slideDown();
      e.preventDefault();
      if(validate()) {
        $.ajax({
          type: "POST",
          url: "assets/mail/mailer.php",
          data: form.serialize(),
          dataType: "json"
        }).done(function(data) {
          if(data.success) {
            name.val('');
            email.val('');
            company.val('');
            subject.val('');
            comment.val('');
            info.html('Message sent!').css('color', '#0c8b0c').slideDown();
          } else {
            info.html('Could not send mail! Sorry!').css('color', '#F7421E').slideDown();
          }
        });
      }
    });
    
    function validate() {
      var valid = true;
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
      if($.trim(name.val()) === "") {
        name.css('border-color', '#F7421E');
        valid = false;
      }
      if(!regex.test(email.val())) {
        email.css('border-color', '#F7421E');
        valid = false;
      }
      if($.trim(company.val()) === "") {
        company.css('border-color', '#F7421E');
        valid = false;
      }    
      if($.trim(subject.val()) === "") {
        subject.css('border-color', '#F7421E');
        valid = false;
      }
      if($.trim(comment.val()) === "") {
        comment.css('border-color', '#F7421E');
        valid = false;
      }
      
      return valid;
    }
  
  });