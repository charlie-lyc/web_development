/* Hacking Passwords 101 Class

      Same Password => Same Hash

  * Most common passwords list :
    "password" 5f4dcc3b5aa765d61d8327deb882cf99
    "123456"   e10adc3949ba59abbe56e057f20f883e
    "12345678" 25d55ad283aa400af464c76d713c07ad
    "1234      81dc9bdb52d04dc20036dbd8313ed055
    "qwerty"   d8578edf8458ce06fbc5bb76a58c5ca4
    "12345"    827ccb0eea8a706c4c34a16891f84e7b
    "dragon"   8621ffdbc5698829397d97767ac13db3
    "pussy"    acc6f2779b808637d04c71e3d8360eeb
    "baseball" 276f8db0b86edaa7fc805516c852c889
    "football" 37b4e2d82900d5e94b8da524fbeb33c0
    .
    .
    .

    => 사람들이 많이 사용하는 패스워드들을 가지고 Hash Function을 통해 Hash들을 확보한 다음에
      해킹한 사용자 리스트의 패스워드들과 비교하여 같은 Hash를 가진 계정을 해킹하는 것이다.
    => 애초의 취지가 "Irreversible Method"였지만 Hash를 Google에서 검색만 해도
      바로 Decryption 가능하다.

*/

/* Let's make a Hash Table!

  1. All words from a dictionary(대략 150,000 개 정도)

  2. All numbers from a telephone book(대략 5,000,000 개 정도)

  3. All combinations of characters up to 6 places(19,770,609,664)

  => 20,000,000,000 MD5 Hashes are can be created per Second in PC!

*/
