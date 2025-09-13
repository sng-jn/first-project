/**
 * Data Types
 * 
 * 여섯개의 primitive type과 한개의 오브젝트 타입
 * 
 * 1) number (숫자)
 * 2) string (문자열)
 * 3) boolean (불리언- 참,거짓)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) symbol (심볼)
 * 
 * 7) object (객체)
 *  function / array / object   
 * 
 */


const age=32;
const tempature=-10;
const pi=3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('-----------');

const infinity=Infinity;
const nInfinity=-Infinity;

console.log(typeof Infinity);
console.log(typeof nInfinity);
console.log('-----------');


/**
 * String 타입
 */
const codefactory='"코"드팩토리';
console.log(codefactory);
console.log(typeof codefactory);

const ive="'아이브' 안유진";
console.log(ive);


/**
 * template literal
 * 
 * escaping character
 * 1) new line -> \n
 * 2) tab ->\t
 * 3) 백슬래시를 스트링으로 표현하고 싶으면 두번 입력하면 된다
 */

const iveYuJin='아이브\n안유진';
console.log(iveYuJin);
const iveWonYoung='아이브\t장원영';
console.log(iveWonYoung);
const bakcSlash='아이브\\코드팩토리';
console.log(bakcSlash);
const smallQutoation='아이브\'코드팩토리';
console.log(smallQutoation);

const iveWonYoung2=`아이브i '"ewewerwrwer//s
장원영`;
console.log(iveWonYoung2);

console.log(typeof iveWonYoung2);

const groupName='아이브';
console.log(groupName+' 안유진');
console.log(`${groupName} 안유진`);


/**
 * boolean 타입
 * 
 */

const isTrue=true;
const isFalse=false;
console.log('-----------');
console.log(typeof isTrue);
console.log(typeof isFalse);


/**
 * undefined 타입
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기화 하는건 지양
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);


/**
 * null 타입
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * js에서는 개발자가 명시적으로 없는 값으로 초기화할때 사용
 */

let init=null;
console.log(init);
console.log(typeof init);
console.log('-----------');


/**
 * symbol 타입
 * 
 * 유일무이한 값 생성시 사용
 * 다른 프리미티브 값들과 다르게 symbol 함수를 호출해서 사용 
 */
const test1='1';
const test2='1';
console.log(test1===test2);

const symbol1=Symbol('1');
const symbol2=Symbol('1');

console.log(symbol1===symbol2);


/**
 * object 타입
 * 
 * map
 * 키: 벨류의 쌍으로 이루어져있다
 * key:value
 */
const dictionary={
    red: '빨강', 
    orange: '주황',
    yellow:'노랑',
};
console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);


/**
 * Array 타입
 * 값을 리스트로 나열 할 수 있는 타입
 */
const iveMembersArray=[
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembersArray);


/**
 * index
 * 0부터 시작
 * 1씩 올라감
 */
console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);

iveMembersArray[0]='코드팩토리';
console.log(iveMembersArray);
console.log(typeof iveMembersArray);

/**
 * static typing ->변수 선언시 어떤 타입의 변수를 선언할지 명시함
 * 
 * dynamic typing ->변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 '추론한다'
 * JS  -> dynamic typing
 * 
 */