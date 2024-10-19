//1-vazifa
function check(num:number) {
    if (num>0) {
        console.log("son musbat");
    }
    else if (num<0) {
        console.log("son manfiy");
    }else{
        console.log("son 0 ga ten");
    }
}
check(2)//musbat
check(-1)//manfiy
check(0)//0ga teng
//2-vazifa
let numbers:number[] = [1, 2, 3, 4, 5];
let all:number=0
function yegindi(sonlar: number[]): number {
    for (let i = 0; i < sonlar.length; i++) {
       all+=sonlar[i];
    }
    return all;
}
console.log(yegindi(numbers)); // 15
//3-vazifa
function getParam(myNum:number) {
    return myNum % 2 === 0 ? "Son Juft" : "Son Toq";
}
console.log(getParam(2));//Son Juft
console.log(getParam(3));//Son Toq
//4-vazifa
function ortacha(number:number[]):number {
    let allNum:number = 0;
    for (let i = 0; i < number.length; i++) {
        allNum+=number[i];
     }
     if (allNum) {
        allNum = allNum/number.length;
     }
     return allNum ;
}
let number = [2, 4, 6, 8, 10];
console.log(ortacha(number));//6
//5-vazifa
function fizz(son: number): any {
    while (son <= 100) {
        if (son % 3 === 0 && son % 5 === 0) {
            console.log("FizzBuzz");
        } else if (son % 3 === 0) {
            console.log("Fizz");
        } else if (son % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(son);
        }
        son++; 
    }
}

fizz(0);
