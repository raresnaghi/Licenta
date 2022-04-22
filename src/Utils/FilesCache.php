<?php

namespace App\Utils;

use App\Utils\Interfaces\CacheInterface;
use Symfony\Component\Cache\Adapter\TagAwareAdapter;
use Symfony\Component\Cache\Adapter\PdoAdapter;
use Doctrine\DBAL\Driver\Connection;


class FilesCache implements CacheInterface
{
    public $cache;

    public function __construct()
    {
        $connection = \Doctrine\DBAL\DriverManager::getConnection([
            'url' => 'sqlite:////%kernel.project_dir%/var/cache/data.db'
        ]);

        $this->cache =  new TagAwareAdapter(
            new PdoAdapter(
                $connection,
                $namespace = '',
                $defaultLifetime = 0
            )
        );
    }
}
