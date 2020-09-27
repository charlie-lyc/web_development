/* "Hashing"

                   Hash
    Password  --------------> Hash
                  Function

*/

/* "Salting"

                                        Hash
    Password + Random Unique 'Salt' --------------> Hash
                                      Function

*/

/*  "Salting Rounds" : 위와 같은 과정을 라운드 수 만큼 반
    - 일정 기간이 지나면 라운드 수는 자동으로 늘어나 다시 해싱 횟수 추가

    ex) 올해 Hash를 생성할때 라운드수가 1회 였다면 6개월뒤 라운드 수가 1회 증가하여 총 2회가 됨.
        따라서 6개월 마다 1회씩 더 'Salt'를 이용해 해싱이 자동으로 이루어져 암호화된 password가 갱신된다.

    => "bcrypt"
*/
