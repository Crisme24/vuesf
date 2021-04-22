<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Constraints\Json;

/**
* @Route("/api")
*/
class AuthController extends AbstractController
{
    /**
     * @var Security
     */
    private $security;

    public function __construct(
        UserRepository $userRepository,
        Security $security,
        SerializerInterface $serializer
    )
    {
        $this->userRepository = $userRepository;
        $this->security = $security;
        $this->serializer = $serializer;
    }

    /**
     * @Route("/register", name="register")
     */
    public function register(Request $request): JsonResponse
    {
        $jsonData = json_decode($request->getContent());
        $user = $this->userRepository->create($jsonData);

        return new JsonResponse([
            'user' => $this->serializer->serialize($user, 'json')
        ], 201);
    }

     /**
      * @Route("/profile", name="profile")
      */
    public function profile() : JsonResponse
     {
        $currentUser = $this->security->getUser();
            $user = $this->serializer->serialize($currentUser, 'json');
            return new JsonResponse([
              $user
        ], 200);
     }

}
