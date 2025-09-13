/**
 * property attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 
 * 설정할 때 호출되는 함수로 구성된 프로퍼티
 * ex) getter 와 setter
 */
const yuJin={
    name:'안유진',
    year:2003,
};

console.log(Object.getOwnPropertyDescriptor(yuJin,'name'));
console.log(Object.getOwnPropertyDescriptor(yuJin,'year'));

/**
 * 1) value- 실제 프로퍼티의 값
 * 2) writable- 값을 수정할 수 있는지 여부. false로 설정하면 프로퍼티 값을 수정할 수 없다.
 * 3) enumerable- 열거가 가능한지 여부이다. for ...in 룹 등을 사용할 수 있으면 true
 * 4) configurable- 프로퍼티 어트리뷰트의 재정의가 가능한지 여부 판단
 * false면 프로퍼티 삭제나 어트리뷰트 변경 금지. 단 writable이 true면 갑 변경과 writable을 변경하는건 가능
 */

console.log(Object.getOwnPropertyDescriptor(yuJin,'name'));
console.log(Object.getOwnPropertyDescriptors(yuJin));

const yuJin2={
    name:'안유진',
    year:2003,
    
    get age(){
        return new Date().getFullYear()-this.year;   
    },
    set age(age){
        this.year=new Date().getFullYear()-age;
    }
}

console.log(yuJin2);
console.log(yuJin2.age);

yuJin2.age=32;
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2,'age'));

Object.defineProperty(yuJin2,'height',{
    value:172,
    writable:true,
    enumerable:true,
    configurable:true,
})
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2,'height'));

yuJin2.height=180;
console.log(yuJin2);
Object.defineProperty(yuJin2,'height',{
    writable:false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2,'height'));

console.log('----------------------------------');
yuJin2.height=172;
console.log(yuJin2);


/**
 * Enumerable
 */
console.log(Object.keys(yuJin2));
for (let key in yuJin2){
    console.log(key);
}

Object.defineProperty(yuJin2,'name',{
    enumerable:false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2,'name'));

console.log('----------------------');
console.log(Object.keys(yuJin2));
for (let key in yuJin2){
    console.log(key);
}

console.log(yuJin2);
console.log(yuJin2.name);


/**
 * configurable
 */

Object.defineProperty(yuJin2,'height',{
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2,'height'));

// Object.defineProperty(yuJin2,'height',{
//     enumerable:false,
// });

// Object.defineProperty(yuJin2,'height',{
//     value:172,
// });
// console.log(Object.getOwnPropertyDescriptor(yuJin2,'height'));

Object.defineProperty(yuJin2,'height',{
    writable:false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2,'height'));