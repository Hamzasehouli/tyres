<?php

namespace tyres;

class server
{
    public static function connect()
    {
        try {

            $con = new \PDO("mysql:host=localhost;port=3306;dbname=tyres", 'root', '');
            // $con->setAttribute();
            // echo 'success';
            return $con;
        } catch (\PDOException$e) {
            echo $e->getMessage();
        }
    }

}
