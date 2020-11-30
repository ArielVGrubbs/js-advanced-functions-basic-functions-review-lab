// Your code here
function razzle() {
    console.log("You've been razzled!");
  }

function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrapper="*"){
    return function(adjective){
        return `You are ${wrapper}${adjective}${wrapper}!`
    }
}

const Calculator = {
    add: function(num1, num2){
        return num1 + num2
    },
    subtract: function(num1, num2){
        return num1 - num2
    },
    multiply: function(num1, num2){
        return num1 * num2
    },
    divide: function(num1, num2){
        return num1 / num2
    }
}

// function actionApplyer(int, funcArr=null){
//     // debugger
//     if (int == 0){
//         debugger
//         console.log(`testing ${int}, ${funcArr}`)
//         return int
//     } else {
//         debugger
//         funcArr.first(element => {
//             firstResult = element(int)
//         },
//             funcArr.second(element => {
//                 firstResult = element(int)
//                 funcArr.third(element => {
//                     firstResult = element(int)
//                 }
//             )})
//         )
// }