<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

use Symfony\Component\HttpFoundation\Session\SessionInterface;
use App\Entity\Subscription;


class SubscriptionController extends AbstractController
{


    /**
     * @Route("/pricing", name="pricing")
     */
    public function pricing()
    {
        return $this->render('front/pricing.html.twig', [
            'name' => Subscription::getPlanDataNames(),
            'price' => Subscription::getPlanDataPrices(),
        ]);
    }

    /** 
     * @Route("/payment", name="payment")
     */
    public function payment(SessionInterface $session)
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_REMEMBERED');

        if ($session->get('planName') == 'enterprise') {
            $subscribe = Subscription::EnterprisePlan;
        } else {
            $subscribe = Subscription::ProPlan;
        }
        return $this->render('front/payment.html.twig', ['subscribe' => $subscribe]);
    }
}
