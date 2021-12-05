

// Function must take in one parameter (a num from 1-7 and return a day of the week. If parameter is outside of 1-7 return null)

function returnDay(dayOfWeek){
     let days = { 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday", 7:"Sunday"}
     if(dayOfWeek < 1 || dayOfWeek > 7){
       return null
  } 
  else if (dayOfWeek === 1){
    return days[1]
  }
  else if(dayOfWeek===2){
    return days[2]
  }
  else if(dayOfWeek===3){
    return days[3]
  }
  else if(dayOfWeek===4){
    return days[4]
  }
  else if(dayOfWeek===5){
    return days[5]
  }
  else if(dayOfWeek===6){
    return days[6]
  }
  else if (dayOfWeek===7){
    return days[7]
  }
}


//function must return a true or false value as to wether temp is equal to or over 75f

function isShortsWeather(temp){
    if(temp>= 75){
        return true;
    } else {
      return false;
    }
}
        
        // function must take a string arg and return a new string with the first letter capitalized
        function capitalize(word) {
   return word[0].toUpperCase() + word.slice([1]);
        }
 
//function must return the last element in an array without removing the element. If array is empty return null

 function lastElement(num){
  if(num.length === 0){
    return null
  } else {
    let x = (num.slice(-1).pop())
    return x 
  }
}

// Function must return the sum of all elements in an array
let total = 0
function sumArray(sum) {
  for (let i = 0; i < sum.length; i += 1) {
    total += sum[i]
  }
  return total
}

//practice with defining methods

const myMath = {
    Pi: 3.14,
    square: function (num) {
        return num * num
    },
    cube(num) {
        return num ** 3
    }




}

const square = {
    area(side) {
        return side ** 2;
    },
    perimeter(side) {
        return side * 4;
    }



};

 
