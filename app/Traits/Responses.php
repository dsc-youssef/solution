<?php
namespace App\Traits;
trait Responses {
  protected $goodResponse = 200;
  protected $forbiddenResponse = 403;
  protected $notfoundResponse = 404;
  
    /** This Function Used To Create a Response
   * @param int $status
   * @param bool $state
   * @param string $message
   * @param array $data
  */
  public function createResponse(int $status, bool $state = true, string $message = "", array $data = []){
    return response()->json([
      "state" => $state,
      "message" => $message,
      "data" => $data
    ], $status);
  }
  // Symfony\Component\ErrorHandler\Error\FatalError: Constant expression contains invalid operations in file /data/data/com.termux/files/home/htdocs/Projects/in_complate/solution/app/Traits/Responses.php on line 4

}
