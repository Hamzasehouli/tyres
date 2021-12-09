<?php

header("Access-Control-Allow-Origin: * ");
header('Access-Control-Allow-Credentials: true');

require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

if (str_starts_with($_SERVER['REQUEST_URI'], '/')) {
    print_r($_SERVER);
    exit;
}
