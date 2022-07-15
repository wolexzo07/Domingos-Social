<?php

    $pageno = $_POST['pageno'];

    $no_of_records_per_page = 10;
    $offset = ($pageno-1) * $no_of_records_per_page;

    $conn=mysqli_connect("localhost","root","follower1990","php_stock");
    // Check connection
    if (mysqli_connect_errno()){
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
        die();
    }

    $sql = "SELECT * FROM a_stock_items ORDER BY Stock_ID DESC LIMIT $offset, $no_of_records_per_page";
    $res_data = mysqli_query($conn,$sql);

    while($row = mysqli_fetch_array($res_data)){

        //echo '<div>Demo'.$row["id"].'</div>';
		?>
				<div style="border:1px solid lightgray;padding:20px;margin:20pt;">
				<h3 style="text-align:left;"><?php echo $row["Stock_ID"];?>&nbsp;&nbsp;&nbsp;==&nbsp;&nbsp;&nbsp;Stock Name : <?php echo $row["Stock_Name"];?></h3>
				<hr/>
				<p style="text-align:left;">Stock Number is <b><?php echo $row["Stock_Number"];?></b> and the product cost <b><?php echo "NGN ".number_format($row["Purchasing_Price"],2);?></b> and is selling at <b><?php echo "NGN ".number_format($row["Selling_Price"],2);?></b></p>
				</div>
		<?php

    }

    mysqli_close($conn);

?>