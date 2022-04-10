// SOAL 1
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
  };
  
  obj.fun1();
  obj.fun2();

// SOAL 2
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?

// 1.encapsulation merupakan mekanisme membungkus informasi sehingga dapat 
//     menyembunyikan informasi yang seharusnya disembunyikan atau tidak.
// 2. Abstract Class Java atau Kelas Abstrak adalah kelas yang memiliki kata kunci abstrak 
// yang diawali dengannya. Kelas harus diawali dengan abstrak jika memiliki satu atau lebih metode 
// dengan kata kunci abstrak. Metode abstrak hanya dideklarasikan tetapi tidak diimplementasikan
// 3. Inheritance atau Pewarisan/Penurunan adalah konsep pemrograman dimana sebuah class 
// dapat 'menurunkan' property dan method yang dimilikinya kepada class lain. Konsep inheritance 
// digunakan untuk memanfaatkan fitur 'code reuse' untuk menghindari duplikasi kode program.
// 4. Polimorfisme dalam OOP merupakan sebuah konsep OOP di mana class memiliki banyak “bentuk” method yang 
// berbeda, meskipun 
// namanya sama. Maksud dari “bentuk” adalah isinya yang berbeda, namun tipe data dan parameternya berbeda.

// SOAL 3
class Phone { .... }

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();

// SOAL 4
class Student {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.courseOfferings = [];
    }
    
    takeNewCourse(....) { .... }
    
    takeATest(....) { .... }
    
    courseAttendance(....) { .... }
  }
  
  class CourseOffering { .... }
  
  class Course { .... }
  
  
  const biology = new Course("biology", 10, 3);
  const physics = new Course("physics", 10, 2);
  
  const johnWatson = new Student("john watson", "male");
  
  johnWatson.takeNewCourse(biology);
  johnWatson.takeNewCourse(physics);
  
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(biology);
  johnWatson.courseAttendance(physics);
  
  console.log(biology.quota);
  console.log(physics.quota);
  
  johnWatson.takeATest(biology);
  johnWatson.takeATest(physics);
  
  console.log(johnWatson.courseOfferings);