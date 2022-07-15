<?php

class Real_Time_Pagination{
  public $conn;
  public function dbConnection(){
    $this->conn = new PDO('mysql:host=localhost;dbname=domingos','root','follower1990');		
  }

  public function handlePaginationData(){
    $direction = 'next';
    $order = 'desc';
    $where = '';
    $params = array();

    if(isset($_GET['max_id'])){
      $direction = 'next';
      $where = " where tweetID < :max_id ";
      $order = 'desc';
      $params = array(':max_id' => $_GET['max_id']);


    }else if(isset($_GET['since_id'])){
      $direction = 'prev';
      $where = " where tweetID > :since_id ";
      $order = 'asc';
      $params = array(':since_id' => $_GET['since_id']);
    }

    $sth = $this->conn->prepare("select * from tweets $where order by tweetID $order  ");
    $sth->execute($params);
    $results = $sth->fetchAll();

    $count = count($results);

    $sth = $this->conn->prepare("select * from tweets $where order by tweetID $order  limit 3");
    $sth->execute($params);
    $results = $sth->fetchAll();

    if($direction == 'prev'){
      $results = array_reverse($results);
    }

    $html = "";

    $max_id = '';
    $since_id = '';

    foreach($results as $row) {
      if($since_id == '' )
        $since_id = $row['tweetID'];

	$view = $this->paginateDataView();
        $html .=  $this->assignTemplateVars(array('tweets'=>$row['tweet']) , $view);

	$max_id = $row['tweetID'];
      }

      $html  = $this->getResultsList($html);

      $html .= $this->paginator($max_id,$since_id,$count,$direction); 

      return $html;
	
  }	

  public function getResultsList($res){

    $html = "<table>$res</table>";
    return $html;
  }

  public function assignTemplateVars($params,$view){
    foreach($params as $key=>$val){
      $view = str_replace('{'.$key.'}',$val,$view);
    }		
    return $view;
  }
}

public function paginator($max_id,$since_id,$count,$direction){
  $pag['next_url'] = "?max_id=".$max_id;
  $pag['prev_url'] = "?since_id=".$since_id;
	
  $html = '';
  $params = array('prev_url'=> $pag['prev_url'], 'next_url' => $pag['next_url']);

  if($direction == 'next' ){

    if($count <= 3)
      $params['next_url'] ='#';
	
      $view   = $this->paginateLinksView();
      $html  .= $this->assignTemplateVars($params,$view);
		
  }

  if($direction == 'prev'){	
    if($count <= 3)
      $params['prev_url'] ='#';

      $view   = $this->paginateLinksView();
      $html  .= $this->assignTemplateVars($params,$view);
  }
  return $html;
}

public function paginateLinksView(){
  $html   ="<a  href='{prev_url}'>Prev</a>";
  $html  .="<a  href='{next_url}'>Next</a>";
		
  return $html;
}
public function paginateDataView(){

  $html = "<tr><td>{tweet}</td></tr>";
		return $html;
}

$rtp = new Real_Time_Pagination();
$rtp->dbConnection();
echo $rtp->handlePaginationData();
?>