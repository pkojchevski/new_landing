<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include "../wp-load.php";
global $wpdb;

    if(isset($_GET['id']) && !empty($_GET['id'])):
        
        $post_id = $_GET['id'];
        $post = get_post( $post_id );  
        $featured_img_url = get_the_post_thumbnail_url( $post->ID ,'full'); 
        
		$categories = get_the_category($post_id);
		$category_slug = $categories[0]->slug;
		
        $array_data[] = array(
                        'ID' => $post->ID,
                        'post_date' => $post->post_date,
                        'post_title' => $post->post_title,
                        'post_content' => $post->post_content,
                        'url' => $post->post_name,
                        'cate_slug' => $category_slug,
                        'feature_image' => $featured_img_url
                    );

    endif;

// print_r($array_data);
echo json_encode(array('hitss' => $array_data));