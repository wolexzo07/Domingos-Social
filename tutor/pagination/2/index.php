<!DOCTYPE html>
<html>
<head>
    <title>Infinite Scroll Demo</title>

    <!-- JQuery CDN -->
    <script src="jquery-3.3.1.min.js"></script>

    <!-- Inview Js (jquery.inview.js) -->
    <script src="jquery.inview.js"></script>

    <style>
        #response div{
            border: 1px solid lightgrey;
            height: 80px;
            margin-bottom: 5px;
            padding: 50px 0px 0px 0px;
            text-align: center;
        }
        #loader{
            display: block;
            margin: auto;
        }
    </style>
</head>
<body>

    <div id="response">

        <!-- response(next page's data) will get appended here -->

        <!--we need to populate some initial data-->
        <?php
            $conn=mysqli_connect("localhost","root","follower1990","php_stock");
            // Check connection
            if (mysqli_connect_errno()){
                echo "Failed to connect to MySQL: " . mysqli_connect_error();
                die();
            }
            $sql = "SELECT * FROM a_stock_items ORDER BY Stock_ID DESC LIMIT 10";
            $res_data = mysqli_query($conn,$sql);
            while($row = mysqli_fetch_assoc($res_data)){
                //echo '<div>Demo'.$row["id"].'</div>';
				?>
				<div style="border:1px solid lightgray;padding:20px;margin:20pt;padding-bottom:50px;">
				<h3 style="text-align:left;"><?php echo $row["Stock_ID"];?>&nbsp;&nbsp;&nbsp;==&nbsp;&nbsp;&nbsp; Stock Name : <?php echo $row["Stock_Name"];?></h3>
				<hr/>
				<p style="text-align:left;">Stock Number is <b><?php echo $row["Stock_Number"];?></b> and the product cost <b><?php echo "NGN ".number_format($row["Purchasing_Price"],2);?></b> and is selling at <b><?php echo "NGN ".number_format($row["Selling_Price"],2);?></b></p>
				</div>
				<?php
            }
            mysqli_close($conn);
        ?>
    </div>

     <input type="hidden" id="pageno" value="1">
     <img id="loader" src="loaded.gif">
     <script>
         $(document).ready(function(){
          
         });
		 function personalTrendLoader(){
			    $('#loader').on('inview', function(event, isInView) {
                 if (isInView) {
                     var nextPage = parseInt($('#pageno').val())+1;
                     $.ajax({
                         type: 'POST',
                         url: 'pagination.php',
                         data: { pageno: nextPage },
                         success: function(data){
                             if(data != ''){							 
                                 $('#response').append(data);
                                 $('#pageno').val(nextPage);
                             } else {								 
                                 $("#loader").hide();
                             }
                         }
                     });
                 }
             });
		 }
     </script>
</body>
</html>