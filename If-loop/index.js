// let food="1"
// switch(food){
//     case "banhmi":
//         console.log("banhmi")
//         break;  
//     case "banhtrantron":
//         console.log("banhtrantron")
//         break;
//     case "pizza":
//         console.log("pizza ngonqua")
//         break;
//         default:
//             console.log("khong co mon an nay")
// }
// function special2digits(n){
//     let last_digit=n%10
//     let first_digit=Math.floor(n/10)
//     let sum=last_digit+first_digit
//     let tich=last_digit*first_digit
//     if(sum+tich==n){
//         return true
//     }
//     else{
//         return false
//     }
// }

// let ans=special2digits(20)
// console.log(ans)
//bai2
// function isNarcissistic(n){
//     let last=n%10
//     let first=Math.floor(n/100)
//     let middle = Math.floor(n/10)%10
//     let sum=Math.pow(first,3)+Math.pow(middle,3)+Math.pow(last,3)
//     return sum==n
    
// }
// // console.log(isNarcissistic(153))
// //bai3
// function areaPerimetter(w,h,n){
//     if (n=="area"){
//         return w*h
//     }
//     else if(n=="perimetter") {
//         return (w+h)*2
//     }
//     else {
//         return null
//     }
// }
// console.log(areaPerimetter(2,3,'area'))
// console.log(areaPerimetter(8,6,'perimetter'))
// console.log(areaPerimetter(2.9,3.1,'perimetter'))
//bai4
// function areaShape(b,h,n){
//     if(n=="triangle"){
//         return 0.5 * b * h
//     }
//     else if(n=="parallelogram"){
//         return b*h
//     }
//     else{
//         return null
//     }
// }
// console.log(areaShape(2, 3, "triangle"))

// console.log(areaShape(8, 6, "parallelogram"))

// console.log(areaShape(2.9, 1.3, "parallelogram")) 

//bai5
// function pHName(n){
//     if(n>7){
//         return "alkaline"
//     }
//     else if(n<7){
//     return "acidic"
//     }
//     else if(n==7){
//         return "neutral"
//     }
//     else{
//         return "invalid"
//     }
// }
// console.log(pHName(5))
// console.log(pHName(8.7))
// console.log(pHName(7))

//bai6
// function BMI(h,w){
//     let n=w/(Math.pow(h/100,2))
//     console.log(n)
//     if(n<18.5)
//     {
//         return "can nang thap"
//     }
//     else if(n>= 18.5 && n<=24.9)
//     {
//         return "binh thuong"
//     }
//     else if(n>= 25)
//     {
//         return "beo phi"
//     }
//     else if(n> 25 && n<=29.5)
//     {
//         return "tieu beo phi"
//     }
//     else if(n>=30 && n<=34.9)
//     {
//         return "beo phi do 1"
//     }
//     else if(n>34.9 && n<=39.9)
//     {
//         return "beo phi do 2"
//     }
//     else if(n>=40)
//     {
//         return "beo phi do 3"
//     }
//     else{
//         return null
//     }
// }
// console.log(BMI(170,60 ))
// console.log(BMI(180,55 ))
//bai7
// function lastDig(a,b,c){
//     let last_a=a%10
//     let last_b=b%10
//     let last_c=c%10
//     let ans=(last_a*last_b)%10
//     return ans==last_c
// }
// console.log(lastDig(25, 21, 125))
// console.log(lastDig(55, 226, 5190))
// console.log(lastDig(12, 215, 2142))
//bai8
// function zodiac(age){
//     let current_year=2020
//     let ans=(current_year-age)%12
//     switch (ans){
//         case 0:
//             return "monkey"
//             break;
//         case 1:
//             return "Rooster"
//             break;
//         case 2:
//             return "dog"
//             break;
//         case 3: 
//             return "pig"
//             break;
//         case 4:
//             return "mouse"
//             break;
//         case 5:
//             return "ox"
//             break;
//         case 6:
//             return "tiger"
//             break;
//         case 7:
//             return "rabbit"
//             break;
//         case 8:
//             return "dragon"
//             break;
//         case 9:
//             return "snake"
//             break;
//         case 10:
//             return "Horse"
//             break;
//         case 11:
//             return "Sheep"
//             break;
//     }
// }
// console.log(zodiac(12))
// console.log(zodiac(8))
//bai9
function quadratic(a,b,c){
    //  a^2x+bx+c=0
    let delta=Math.pow(b,2)-4*a*c
    if(delta==0){
        let x=-b/(2*a)
        console.log(x)
    }
    else if(delta>0){
        let x1=(-b+Math.sqrt(delta))/2*a
        let x2=(-b-Math.sqrt(delta))/2*a
        console.log(x1,'and',x2)
    }
    else{
        console.log("No solution")
    }
}
quadratic(1,-2,1)
quadratic(1,-5,6)
quadratic(1,5,6)
quadratic(3,2,5)
