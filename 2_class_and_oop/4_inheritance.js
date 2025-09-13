/**
 *Inheritance
 */
class IdolModel{
    name;
    year;
    constructor(name,year)
    {
        this.name=name;
        this.year=year;
    }
}

class FemalIdolModel extends IdolModel{
    dance(){
        return '여자 아이돌이 춤을 춥니다';
    }
}
class MaleIdolMOdel extends IdolModel{
    sing(){
        return '남자 아이돌이 노래를 부릅니다.';
    }
}

const yuJin=new FemalIdolModel('안유진',2003);
console.log(yuJin);

const jiMin=new MaleIdolMOdel('지민',1995);
console.log(jiMin);

console.log(yuJin.dance());
console.log(yuJin.name);
console.log(jiMin.sing());
console.log(jiMin.year);

const cf=new IdolModel('코드팩토리',1992);
console.log(cf);

console.log(cf.name);

console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemalIdolModel);
console.log(yuJin instanceof MaleIdolMOdel);

console.log('---------------------');
console.log(jiMin instanceof IdolModel);
console.log(jiMin instanceof FemalIdolModel);
console.log(jiMin instanceof MaleIdolMOdel);

console.log('---------------------');
console.log(cf instanceof IdolModel);
console.log(cf instanceof FemalIdolModel);
console.log(cf instanceof MaleIdolMOdel);
