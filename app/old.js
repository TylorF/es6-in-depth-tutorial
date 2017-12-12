// function print(a, b, c) {
//   console.log(a + b + c);
// }
// print('Cyan', ' is ', 'the best!');
//
// function multiply(a, b) {
//   return a*b;
// }
//
// var product = multiply(5, 10);
// console.log(product);
//
//
// let dog = {
//   name: 'Buddy',
//   breed: 'Golden Retriever',
//   weight: 60,
//   bark: function() {
//     console.log('Woof!');
//   }
// };
// console.log(dog['breed']);
// dog.bark;
//
// let points = [25, 16, 7, 9, 31];
// let first = points[0];
// // points.push(8);
// let last = points.pop();
// console.log(points, first, last);
//
// console.log(points.length);
//
// // Execise
// let doggy = {
//   name: 'Buddy',
//   breed: 'Golden Retriever',
//   weight: 60
// }
//
// function weigh(weight) {
//   return weight;
// }
//
// weigh(doggy.weight);
//
//
// // 3_21
//
// let a = 5 >= 7;
// console.log(a);
//
//
// // 3_22
//
// let x = 10;
//
// if (8 > x) {
//   console.log('8 is greater!');
// } else if (15 > x) {
//   console.log('15 is greater!');
// } else {
//   console.log('8 is not greater!');
// }
//
// let check = function(number) {
//   if (number % 2 === 0) {
//     console.log(number + ' is even!');
//   } else {
//     console.log(number + ' is odd!');
//   }
// };
//
// check(4);

// 3_23
{
  let x = 12;

  switch(x) {
    case 1:
      console.log('the number is one!');
      break;
    case 2:
      console.log('the number is three!');
      break;
    case 3:
      console.log('The number is three!');
      break;
    default:
      console.log('The number is ' + x);
      break;
  }
}

// 3_24
{
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  let names = ['Frodo', 'Sam', 'Merry', 'Pippin'];

  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

// 3_25
{
  let names = ['Frodo', 'Sam', 'Merry', 'Pippin'];

  // for (let i = 0; i < names.length; i++) {
  //   console.log(names[i]);
  // }

  let i = 0;

  // while (i < names.length) {
  //   console.log(names[i]);
  //   i++;
  // }

  do {
    console.log(names[i]);
    i++;
  } while (i < names.length);
}

// 3_26

{
  function count(x) {
    let numbers = [];
    if (x % 2 === 0) {
      for (let i = 0; i < x; i += 2) {
        numbers.push(i);
      }
    } else {
      for (let i = 1; i < x; i += 2) {
        numbers.push(i);
      }
    }
    return numbers;
  }

  console.log(count(12));
}
