<?php

namespace tyres\routes;

class UserRouter
{
    private $getRoutes;
    private $postRoutes = [];
    private $patchRoutes = [];
    private $deleteRoutes = [];

    public static function get($url, $fn)
    {
        $this->getRoutes[$url] = $fn;
    }
    public static function post($url, $fn)
    {
        $this->postRoutes[$url] = $fn;
    }
    public static function patch($url, $fn)
    {
        $this->patchRoutes[$url] = $fn;
    }
    public static function delete($url, $fn)
    {
        $this->deleteRoutes[$url] = $fn;
    }
    public static function run()
    {
        $method = $_SERVER['REQUEST_METHOD'];
        $path = $_SERVER['PATHH_INFO'] ?? '/';
        $fn = null;
        if ($method === 'GET') {
            $fn = $this->getRoutes[$path];
        } else if ($method === 'POST') {
            $fn = $this->postRoutes[$path];
        } else if ($method === 'PATCH') {
            $fn = $this->patchRoutes[$path];
        } else if ($method === 'DELETE') {
            $fn = $this->deleteRoutes[$path];
        }

        if (!$fn) {
            echo 'route not found in this API';
            exit;
        }
        call_user_func($fn);
    }

}
