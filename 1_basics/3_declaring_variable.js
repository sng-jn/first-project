/**
 * variable 선언
 * 1)var - 더이상 쓰지 않음
 * 2)let 
 * 3)const 
 */

var name='코드팩토리';
console.log(name);

var age=32;
console.log(age);

let ive='아이브';
console.log(ive);

/**
 * let과 var로 선언하면 
 * 값을 추후 변경 가능
 */

ive='안유진';
console.log(ive);

const newJeans='뉴진스';        //const로 선언하면 변경 불가
console.log(newJeans);

// newJeans='코드팩토리';


/**
 * 선언과할당
 * 1) 선언은 변수를 선언하는 것
 * 2) 할당은 값을 넣는 것
 */

var name;   //선언
var name='코드팩토리'   //할당
console.log(name);

let girlFriend;
console.log(girlFriend);

// const girlFriend2;       //const는 할당도 반드시 같이 해야 됨