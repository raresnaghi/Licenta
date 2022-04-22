<?php
/*
|-----------------------------------------------------------
| available only at Udemy.com | copyright netprogs.pl | further distribution is prohibited
|-----------------------------------------------------------
*/

namespace App\Utils\Interfaces;

interface UploaderInterface
{

    public function upload($file);
    public function delete($path);
}
