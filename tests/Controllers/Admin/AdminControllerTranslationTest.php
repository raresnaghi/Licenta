<?php
/*
|-----------------------------------------------------------
| available only at Udemy.com | copyright netprogs.pl | further distribution is prohibited
|-----------------------------------------------------------
*/

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;


class AdminControllerTranslationTest extends WebTestCase
{
    use RoleUser;

    public function testTranslations()
    {

        $this->client->request('GET', '/pl/admin/');

        $this->assertContains('Mój profil', $this->client->getResponse()->getContent());
        $this->assertContains('lista-video', $this->client->getResponse()->getContent());
    }
}
