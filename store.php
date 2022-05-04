<?php // for MailChimp API v3.0

include('assets/php/MailChimp.php');  // path to API wrapper downloaded from GitHub

use \DrewM\MailChimp\MailChimp;

function storeAddress() {

    $key        = "fa0a1fd2959c3493cb5c29ef540684de-us13";
    $list_id    = "e7a3549c37";

    $merge_vars = array(
        'FNAME'     => $_POST['fname'],
        'LNAME'     => $_POST['lname']
    );

    $mc = new MailChimp($key);

    // add the email to your list
    $result = $mc->post('/lists/'.$list_id.'/members', array(
            'email_address' => $_POST['email'],
            'merge_fields'  => $merge_vars,
            'status'        => 'pending'     // double opt-in
            // 'status'     => 'subscribed'  // single opt-in
        )
    );

    return json_encode($result);

}

// If being called via ajax, run the function, else fail

if ($_POST['ajax']) { 
    echo storeAddress(); // send the response back through Ajax
} else {
    echo 'Method not allowed - please ensure JavaScript is enabled in this browser';
}