<?php
namespace App\Traits;
use Illuminate\Support\Facades\Crypt;

trait Token {

  /** This Function Used To Create User Token
    * @param string $username
    * @param string $ip
    * @return string
  */
  public function generateUserToken(string $username, string $ip):string {
    return Crypt::encryptString("username={$username}-|-ip={$ip}");
  }

  /** This Function Used To Decrypt User Token
    * @param string $token
    * @return array
  */
  public function decryptUserToken(string $token): array {
    try {
      $token = explode("-|-", Crypt::decryptString($token));
      return [
        "username" => str_ireplace("username=", "", $token[0]),
        "ip" => str_ireplace("ip=", "", $token[1])
      ];
    }catch (\Throwable $th) {
      return [ "username" => "", "ip" => "1" ];
    }
  }

}