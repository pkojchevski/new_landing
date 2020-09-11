<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include "../wp-load.php";
global $wpdb;


if(isset($_GET['related_name']) && !empty($_GET['related_name'])):

  $related_name = $_GET['related_name'];
    
  $args = array(
    'numberposts'      => 4,
    'post_status'      => 'publish',
    'orderby'          => 'id',
    'order'            => 'DESC',
    'post_type'        => 'post',
	'category_name'    => $related_name
  );
   
  $four_latest_posts = get_posts( $args );
  
  foreach($four_latest_posts as $key=>$value):
  
    $featured_img_url = get_the_post_thumbnail_url( $value->ID ,'thumbnail'); 
    
    $array_data[] = array(
                    'ID' => $value->ID,
                    'post_date' => $value->post_date,
                    'post_title' => $value->post_title,
                    // 'post_content' => $value->post_content,
                    'url' => $value->post_name,
                    'feature_image' => $featured_img_url
                  );
  
  endforeach;

endif;

// print_r($array_data);
echo json_encode(array('hits' => $array_data));


