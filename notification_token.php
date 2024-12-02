<?php

$token = $_GET['token'];
$url = $_GET['url'];
$manifestId = $_GET['manifestId'];
$userId = $_GET['userId'];
echo file_get_contents('https://appzilo.techmarketers.xyz/notification_token?token='.$_GET['token'].'&url='.$url.'&manifestId='.$manifestId.'&userId='.$userId);
