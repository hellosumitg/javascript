// Task1
class Course {
  #price; // declaring Private fields on the top

  get price() {
    return '$' + this.#price;
  }

  set price(value) {
    if (value <= 0) {
      throw 'Invalid value!';
    }
    this.#price = value;
  }

  constructor(courseTitle, coursePrice, courseLength) {
    this.title = courseTitle;
    this.price = coursePrice;
    this.length = courseLength;
  }

  calculateValue() {
    return this.length / this.#price;
  }

  printSummary() {
    console.log(
      `Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`
    );
  }
}

const jsCourse = new Course('JavaScript', 10, 52.5);
const reactJs = new Course('ReactJS', 20, 68);

console.log(jsCourse);
console.log(reactJs);

// Task2
console.log(jsCourse.calculateValue());
jsCourse.printSummary();

console.log(reactJs.calculateValue());
reactJs.printSummary();

// Task3
class PracticalCourse extends Course {
  constructor(title, length, price, exercisesCount) {
    super(title, price, length);
    this.numOfExercises = exercisesCount; // our own property
  }
}

const angularCourse = new PracticalCourse('AngularJS', 36, 10, 10);
console.log(angularCourse);
angularCourse.printSummary();

class TheoreticalCourse extends Course {
  publish() {
    console.log('Publishing...');
  }
}

const flutterCourse = new TheoreticalCourse('Flutter', 10, 34);
flutterCourse.price = 20;


flutterCourse.printSummary();
flutterCourse.publish();