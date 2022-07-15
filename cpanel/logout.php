<?php
	session_start();
	include("../finishit.php");
  
	unset($_SESSION["XELOW_DOMINGOS_USER_ID"]);
	unset($_SESSION["XELOW_DOMINGOS_USER_NAME"]);
	unset($_SESSION["XELOW_DOMINGOS_NICK_NAME"]);
	unset($_SESSION["XELOW_DOMINGOS_FULL_NAME"]);
	unset($_SESSION["XELOW_DOMINGOS_MOBILE"]);
	unset($_SESSION["XELOW_DOMINGOS_EMAIL_BASE"]);
	unset($_SESSION["XELOW_DOMINGOS_DOB"]);
	unset($_SESSION["XELOW_DOMINGOS_ACCOUNT_TYPE"]);
	finish("../ApplicationLogin","You are logged out successfully!");

?>