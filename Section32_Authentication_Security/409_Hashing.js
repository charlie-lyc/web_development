/*
                  <Encryption>

                    Cipher
  Password + Key --------------> Ciphertext
                    Method


                  <Decryption>

                    Cipher
      Password  <-------------- Key + Ciphertext
                    Method
*/

/* "Hashing" : irreversible method.

                      Hash
    Password    --------------> Hash
                    Function


  Registration        Hash
                --------------> Hash --------------> Database
    Password        Function



      Login           Hash
                --------------> Hash | Hash <------- Database
    Password        Function

*/
