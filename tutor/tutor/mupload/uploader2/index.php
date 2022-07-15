<html>
<head>
<title>Uploader 2</title>
<link rel="stylesheet" href="css/styler.css"/>
<script src="js/jquery.js"></script>
<script src="js/jquery.form.min.js"></script>
<script src="js/formpro.js"></script>
</head>
<body>
<form id="uploadForm" action="upload.php" method="post">
<div>
<label>Upload Image File:</label>
<input name="userImage" id="userImage" type="file" class="demoInputBox" />
</div>
<div><input type="submit" id="btnSubmit" value="Submit" class="btnSubmit" /></div>
<div id="progress-div"><div id="progress-bar"></div></div>
<div id="targetLayer"></div>
</form>
<div id="loader-icon" style="display:none;"><img src="LoaderIcon.gif" /></div>
</body>
</html>