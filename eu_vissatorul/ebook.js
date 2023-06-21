     
/*     var modal = document.getElementById("myModal");
     var span = document.getElementsByClassName("close")[0];
     btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
*/
     function sendEmail(payer,surname,name) {
        Email.send({
        SecureToken : "**********",
        To : payer,
        From : "example@gmail.com",
        Subject : "Libro ",
        Body : "Te salut, îți mulțumesc că ai achiziționat cursul meu despre cum să crești organic pe Instagram + cum să faci bani cu ajutorul acesteia. În acest curs ai prezentatul totul pas cu pas, cum să începi de la 0 cu o pagină de Instagram până la a ajunge să generezi un venit cu ajutorul ei. Dacă ai neînțelegeri în legătură cu ceva, îmi poți lăsa mesaj și voi reveni cu un răspuns cât de repede pot. Îți urez succes, VISĂTORULE!🤗",
    }).then(
      message => alert(message)
    );
    }
