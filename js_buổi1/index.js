// bai1
// function convert(minutes){
//     let result = minutes*60
//     return result
// }
// console.log(convert(3))
//bai2
// function radiansToDegrees(n){
//     let degrees= n*(180/3.14)
//     console.log(degrees)
// }
// radiansToDegrees(1) 

// radiansToDegrees(20)

// radiansToDegrees(50) 
//bai3
// function celsiusToFahrenheit(n){
//     let f = (n*9/5)+32
//     console.log(f)
// }
// celsiusToFahrenheit(10) 

// celsiusToFahrenheit(20) 
// celsiusToFahrenheit(50) 
// function PoundToKilogram(pound){
//     let kg=pound * 0.453592
//     console.log(kg)
// }
// PoundToKilogram(20)

// PoundToKilogram(70)

// PoundToKilogram(80)
//bai5
// function matchHouses(houses){
//     let matchsticks=houses*5+1
//     console.log(matchsticks)
// }
// matchHouses(1)

// matchHouses(4)

// matchHouses(87)
//bai6
// function sumOfCubes(a,b,c){
//     let sum = Math.pow(a,3) +Math.pow(b,3)+ Math.pow(c,3)
//     console.log(sum)
// }
// sumOfCubes(1, 5, 9) 
// sumOfCubes(3, 4, 5) 

// sumOfCubes(2,2,2)
//bai7
// function points($2points, $3points)
// {
//     let points = $2points*2 + $3points*3
//     console.log(points)
// }
// points(1, 1)

// points(7, 5)

// points(38, 8) 
//bai8
// function getArea(length, width)
// {
//     let Area = length*width
//     console.log(Area)
// }
// getArea(2,5)
// getArea(1,2)
// getArea(100,200)
//bai9
// function getPerimeter(length, width)
// {
//     let Perimeter = (length+width)*2
//     console.log(Perimeter)
// }
// getPerimeter(2,5)
// getPerimeter(1,2) 
// getPerimeter(100,200)
// bai10
function isTriplet(a,b,c){
    let temp_max=(a+b+Math.abs(a-b))/2
    let temp_min=(a+b-Math.abs(a-b))/2
    
    let max=(temp_max+c+Math.abs(temp_max-c))/2
    let min=(temp_min+c-Math.abs(temp_min-c))/2
    middle = a+b+c-(max+min)
    
    let ans=Math.pow(min,2)+Math.pow(middle,2)==Math.pow(max,2)
    console.log(ans)
}
ans = isTriplet(3, 4, 5)
// isTriplet(3, 4, 5)
// isTriplet(13, 5, 12)   
// isTriplet(1, 2, 3)