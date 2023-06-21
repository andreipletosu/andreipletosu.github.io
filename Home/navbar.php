<nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
  
  <a class="navbar-brand" href="#">Cracklez</a>
  <button class="navbar-toggler ccollapsed" type="button" data-toggle="collapse" data-target="#CracklezNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="CracklezNav">
    <ul class="navbar-nav">
      <li class="nav-ite">
        <a class="nav-link" href="index.php">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="index.php">Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>

<script>
  var elementsContainer = document.getElementsByClassName("navbar-nav");
  var elements = document.querySelectorAll("li");
  var els = document.querySelectorAll("a");
  var url = document.URL;
  let url2= new URL(url);
  for (var i = 0; i < elements.length; i++) {
    
    if(url == "http://localhost/cracklez/index.php" )
        elements[0].className += " active";

      
      console.log(url2.pathname)
    }
</script>