<?php

header("Access-Control-Allow-Origin: * ");
header('Access-Control-Allow-Credentials: true');

session_start();

require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

use tyres\routes\UserRouter;
use tyres\server;

server::connect();

if (str_starts_with($_SERVER['REQUEST_URI'], '/api/v1/users')) {
    UserRouter::run();
    exit;
}
