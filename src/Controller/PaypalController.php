<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

use App\Controller\Traits\SaveSubscription;
use App\Entity\User;

use App\Utils\PaypalIPN;


class PaypalController extends AbstractController
{

    use SaveSubscription;


    /**
     * @Route("/paypal-verify", name="paypal_verify", methods={"POST"} )
     */
    public function PaypalVerify(PaypalIPN $paypalIPN)
    {
        $paypalIPN->useSandbox();
        $paypalIPN->usePHPCerts();

        if ($paypalIPN->verifyIPN()) {
            if (isset($_POST["payment_status"]) && $_POST["payment_status"] == "Completed") {
                $planName = $_POST["item_name"];
                $user = $this->getDoctrine()->getRepository(User::class)->findOneBy(['email' => $_POST["payer_email"]]);

                if ($user) $this->saveSubscription($planName, $user);
            } elseif ($_POST["txn_type"] == "subscr_cancel" || $_POST["txn_type"] == "subscr_eot") {
                $user = $this->getDoctrine()->getRepository(User::class)->findOneBy(['email' => $_POST["payer_email"]]);

                if (!$user) return;

                $subscription = $user->getSubscription();
                $subscription->setPlan('canceled');
                $subscription->setValidTo(new \Datetime());
                $subscription->setPaymentStatus(null);

                $em = $this->getDoctrine()->getManager();
                $em->flush();
            }
        }

        return new Response();
    }
}
