<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Domingos Social - Connecting the flocks to the sheperd</title>
  <link rel="stylesheet" href="css/darkbootstrap.min.css" />
  <link rel="stylesheet" href="css/font-awesome.min.css" />
  <link rel="stylesheet" href="css/navbar-fixed-right.min.css"/>
  <link rel="stylesheet" href="css/navbar-fixed-left.min.css"/>
  <link rel="stylesheet" href="css/docsf.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/docs.js"></script>
  <script src="js/buttons.js"></script>
</head>

<body>

  <nav class="navbar navbar-inverse navbar-fixed-left">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Project name</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li class="dropdown-header">Nav header</li>
              <li><a href="#">Separated link</a></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a data-class="navbar-fixed-left">
              <i class="fa fa-arrow-left"></i>
              Fixed Left
            </a>
          </li>
          <li>
            <a data-class="navbar-fixed-top">
              <i class="fa fa-arrow-up"></i>
              Fixed Top
              <small>(original)</small>
            </a>
          </li>
          <li>
            <a data-class="navbar-fixed-right">
              <i class="fa fa-arrow-right"></i>
              Fixed Right
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container-fluid">
  
  <div id="firstboss" class="col-md-8">
  
		  <div class="panel panel-default">
		  <div class="panel-heading"><i class="fa fa-bus"></i> Major Content</div>
		  <div class="panel-body">
		  Hello man, Major Content goes here
		  </div>
		  </div>
  
  </div>
  
  <div id="secondboss" class="col-md-4">
  
			<div class="panel panel-default">
		  <div class="panel-heading"><i class="fa fa-bus"></i> Minor Content</div>
		  <div class="panel-body">
		  Hello man, Minor Content goes here
		  </div>
		  </div>
  
  </div>

  </div>

</body>
</html>