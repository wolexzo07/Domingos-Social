<?php
include_once("../finishit.php");
session_start();
if(isset($_GET["sm"]) && x_validatesession("XELOW_COMMERCE_USER_ID")){
$user = x_clean($_SESSION["XELOW_COMMERCE_USER_ID"]);
if(isset($_GET['call']) && !empty($_GET['call'])){
$call = x_clean($_GET['call']);
$query="select id from final_checkout WHERE user_id='$user' order by id desc";
}else{
$query="select id from final_checkout WHERE user_id='$user' order by id desc";
}
$res    = mysqli_query(x_cstring(),$query);
$count  = mysqli_num_rows($res);
$page = (int) (!isset($_REQUEST['pageId']) ? 1 :$_REQUEST['pageId']);
$page = ($page == 0 ? 1 : $page);
$recordsPerPage = 10;
$start = ($page-1) * $recordsPerPage;
$adjacents = "2";
    
$prev = $page - 1;
$next = $page + 1;
$lastpage = ceil($count/$recordsPerPage);
$lpm1 = $lastpage - 1;   
$pagination = "";
if($lastpage > 1)
    {   
        $pagination .= "<div class='pagination'>";
        if ($page > 1)
            $pagination.= "<a href=\"#Page=".($prev)."\" onClick='changePagination(".($prev).");'>&laquo; Previous&nbsp;&nbsp;</a>";
        else
            $pagination.= "<span class='disabled'>&laquo; Previous&nbsp;&nbsp;</span>";   
        if ($lastpage < 7 + ($adjacents * 2))
        {   
            for ($counter = 1; $counter <= $lastpage; $counter++)
            {
                if ($counter == $page)
                    $pagination.= "<span class='current'>$counter</span>";
                else
                    $pagination.= "<a href=\"#Page=".($counter)."\" onClick='changePagination(".($counter).");'>$counter</a>";     
                         
            }
        }
        elseif($lastpage > 5 + ($adjacents * 2))
        {
            if($page < 1 + ($adjacents * 2))
            {
                for($counter = 1; $counter < 4 + ($adjacents * 2); $counter++)
                {
                    if($counter == $page)
                        $pagination.= "<span class='current'>$counter</span>";
                    else
                        $pagination.= "<a href=\"#Page=".($counter)."\" onClick='changePagination(".($counter).");'>$counter</a>";     
                }
                $pagination.= "...";
                $pagination.= "<a href=\"#Page=".($lpm1)."\" onClick='changePagination(".($lpm1).");'>$lpm1</a>";
                $pagination.= "<a href=\"#Page=".($lastpage)."\" onClick='changePagination(".($lastpage).");'>$lastpage</a>";   
           
           }
           elseif($lastpage - ($adjacents * 2) > $page && $page > ($adjacents * 2))
           {
               $pagination.= "<a href=\"#Page=\"1\"\" onClick='changePagination(1);'>1</a>";
               $pagination.= "<a href=\"#Page=\"2\"\" onClick='changePagination(2);'>2</a>";
               $pagination.= "...";
               for($counter = $page - $adjacents; $counter <= $page + $adjacents; $counter++)
               {
                   if($counter == $page)
                       $pagination.= "<span class='current'>$counter</span>";
                   else
                       $pagination.= "<a href=\"#Page=".($counter)."\" onClick='changePagination(".($counter).");'>$counter</a>";     
               }
               $pagination.= "..";
               $pagination.= "<a href=\"#Page=".($lpm1)."\" onClick='changePagination(".($lpm1).");'>$lpm1</a>";
               $pagination.= "<a href=\"#Page=".($lastpage)."\" onClick='changePagination(".($lastpage).");'>$lastpage</a>";   
           }
           else
           {
               $pagination.= "<a href=\"#Page=\"1\"\" onClick='changePagination(1);'>1</a>";
               $pagination.= "<a href=\"#Page=\"2\"\" onClick='changePagination(2);'>2</a>";
               $pagination.= "..";
               for($counter = $lastpage - (2 + ($adjacents * 2)); $counter <= $lastpage; $counter++)
               {
                   if($counter == $page)
                        $pagination.= "<span class='current'>$counter</span>";
                   else
                        $pagination.= "<a href=\"#Page=".($counter)."\" onClick='changePagination(".($counter).");'>$counter</a>";     
               }
           }
        }
        if($page < $counter - 1)
            $pagination.= "<a href=\"#Page=".($next)."\" onClick='changePagination(".($next).");'>Next &raquo;</a>";
        else
            $pagination.= "<span class='disabled'>Next &raquo;</span>";
        
        $pagination.= "</div>";       
    }
    
if(isset($_POST['pageId']) && !empty($_POST['pageId']))
{
    $id=$_POST['pageId'];
}
else
{
    $id='0';
}

if(isset($_GET['call']) && !empty($_GET['call'])){
$call = x_clean($_GET['call']);
$query="SELECT * FROM final_checkout WHERE user_id ='$user' ORDER BY id desc
limit ".mysqli_real_escape_string(x_cstring(),$start).",$recordsPerPage";
}else{
$query="SELECT * FROM final_checkout WHERE user_id ='$user' ORDER BY id desc
limit ".mysqli_real_escape_string(x_cstring(),$start).",$recordsPerPage";
}

//echo $query;
$res    =   mysqli_query(x_cstring(),$query);
$count  =   mysqli_num_rows($res);
$HTML='';
echo $pagination;
if($count > 0)
{
	$counter = 0;
?>
<!--<table class="table table-striped table-hover tabover">
<tr><th>No.</th><th>Order id</th><th>Payment status</th><th>Amount Paid</th></tr>-->
<?php
    while($key=mysqli_fetch_array($res))
    {
	$counter++;
		$id = $key["id"];
		$oid = $key["order_id"];$cat = $key["total_incart"];
		$pay = $key["payment_status"];$pid = $key["payment_id"];
		$pmed = $key["payment_medium"];$totalamt = $key["total_amount"];
		$order_date = $key["order_date"];$token = $key["product_token"];
			$add = $key["address"];
?>

<div class="panel panel-default formspacer">
<div class="panel-heading">
<i class="fa fa-shopping-cart"></i>
Order No : <?php echo $oid;?>

<button style="margin-top:-15pt;" onclick="fetchrequestnow('orderdetails?oid=<?php echo $oid;?>&ohash=<?php echo $token;?>')" class="btn btn-success btn-sm pull-right"><i class="fa fa-send"></i> Order Details</button>

</div>
<div class="panel-body">

<table class="table table-striped table-hover">

<tr>
<th>Payment Status</th><td><?php if($pay =="1"){echo "<font style='color:green;'><i class='fa fa-check-circle'></i> Paid</font>";}else{ echo "<i class='fa fa-minus'></i> Not Paid";}?></td>
</tr>

<tr style="color:purple;">
<th>Amount Paid</th><td><?php echo "NGN ".number_format($totalamt,2);?></td>
</tr>

<!--<tr>
<th>Total Items</th><td><?php echo $cat;?></td>
</tr>-->

<tr>
<th>Ordered On</th><td><?php echo $order_date;?></td>
</tr>

</table>


</div>

</div>

<?php
				
	}
	?></table><?php

}
else
{

$msg = "<p class='text-center' style='font-size:60pt;margin-bottom:10pt;'><span class='fa fa-shopping-cart'></span></p>";
$msg .= "<p class='text-center'>No order was placed yet!</p>";
			echo $msg;
	
}

echo "<div style='margin-bottom:1%;'></div>";
echo $pagination;
}
?>
