{
  // let can be reassigned but const cant, but const can be changed by not
  // reassigning like push
  let num = 100;
  num = 2;
  console.log(num);

  const emails = ['frodo@email.com', 'samwise@email.com', 'merry@email.com'];
  emails.push('pippin@email.com');
  console.log(emails);
}

{
  // let and const is scoped better
  let limit = 200;

  {
    let limit = 10;
    console.log('backstage limit', limit);
  }

  console.log('overall venue limit', limit);

  function hello() {
    let message = 'Hello!';
    console.log(message);
  }

  function greeting() {
    let message = 'How are you?';
    console.log(message);
  }

  hello();
  greeting();
}


{
  // Template literals
  let a = `good`;
  let greeting = `${a} morning`;
  console.log(greeting);
}

// Operating and Destructuring Assignment
{
  let a = [20, 30, 40];
  let b = [10, ...a, 50]; // spread operator
  console.log(b);
}

{
  let a = ['Dana', 'Erik', 'Frank'];
  let b = ['Alice', 'Bob', 'Carl', ...a];
  console.log(b);
}

{
  function collect(...a) { // Rest parameter
    console.log(a);
  }
  collect(1, 2, 3, 4, 5);
  collect(3, 6, 9, 12, 15);
}

{
  let z = [4, 5, 6];
  // let four = z[0];
  // let five = z[1];
  // console.log(four, five);
  // Can be reduced with restructuring Assignment
  let [four,five] = z;
  console.log(four, five);

  let animals = ['Simba', 'Zazu', 'Ed'];
  let [lion, bird] = animals;
  console.log(lion, bird);
  {
    let king = {name: 'Mufasa', kids: 1};
    let {name, kids} = king;
    console.log(name, kids);
    let {name: something, kids: somethingelse} = king;
    console.log(something, somethingelse);
  }
  {
    let son = {name: 'Simba', parents: 2}
    let name, parents;
    // need parens or else {name, parents} treated as block
    ({name, parents} = son);
    console.log(name, parents);
  }
}

// Arrow functions
  // anonymous functions
  // () => {}

// Modules
  // Split code into files
  // handled via export and import keywords
{
  function cheer() { // gets added to scope of application with name
    console.log('Woohoo!');
  }
  cheer();
}
{
  // Function expression style (is an anonymous function expression)
  let cheer = function() {
    console.log('Woohoo!');
  }
  cheer();
}
{
  // Old style anonymous function
  // setTimeout(function() {
  //   console.log('Woohoo!');
  // }, 3000);
  setTimeout(() => {
    console.log('NewHoo!');
  }, 1); // 3000);
}
{
  let cheer = () => {
    console.log('variable newhoo!');
  };
  cheer();
}

// Helper methods
{
  let values = [20, 30, 40];
  let double = (n) => {
    return n * 2;
  };

  let doubled = values.map(double);
  console.log(doubled);

  {
    let doubled = values.map((n) => {
      return n * 2;
    });
    console.log(doubled);
  }
  // or
  {
    let doubled = values.map((n) => n * 2); // knows to return by default
    console.log(doubled);
  }
}
{
  let points = [7, 16, 21, 4, 3, 22, 5];
  let highScores = points.filter((n) => n > 15);
  console.log(highScores);
}
