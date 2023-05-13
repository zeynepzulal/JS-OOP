const country = {
    name: "Spain",
    population: 40000,
    description: function () {
        return this.name + " " + this.population;
    }
}
console.log(country.description()); // bu kod ile return ü konsola yazdirdik ,yazmazsak Spain40000 consolda çikmiyor. Ve bu kod ile fonksiyonu çalisir hale getirdik


console.log(country.name); // nokta notasyonu
console.log(country["name"]); // array notasyonu







//class siz
const job1 = {
    role: "blockchain developer",
    salary: 100000,
    applicationLink: "link1",
    isRemote: false
}
console.log(job1);





//class li
class Job {   //Job senin verebildigin bir isim
    constructor(role, salary, applicationLink, isRemote) {  //constructor (koyu mavi olan yazi) bir kaliptir ,bir fonksiyondur.
        this.rolee = role; // this in sagindaki yazi önemli degil. Onu sen yaziyorsun.
        this.salaryy = salary; // esittir in sagindaki  yazi önemli constructordakiyle ayni yazilmali.
        this.applicationLinkk = applicationLink; // sol taraf propority - sag taraf parametre
        this.isRemotee = isRemote;
    }
}

const job2 = new Job(
    "software engineer",
    20000,
    "link2",
    true
)
console.log(job2);


const job3 = new Job(
    "designer",
    30000000,
    "link3",
    false
)
console.log(job3);








// baska bir class yaptik.
class Car {
    constructor(color, brand, year, price, range) {
        this.color = color;  // çikti da alfabetik siraya göre degerleri yaziyor.Yani   brand -color -p-r-y .
        this.brand = brand;
        this.year = year;
        this.price = price;
        this.range = range;
    }
    
    startt(){  //class in içinde fonksiyon böyle tanimlanir. function diye ayrica yazmaya gerek yok. METHOD da denir.
        return this.brand + " Car started ! "; 
    }
    stopp(){
        return "Car stopped ! ";
    }

}

const car1 = new Car("Black", "BMW", 1990, 500000, 150000)//böyle yan yana da deger tanimlanabilir.
console.log(car1);

//alttakileri const car1 = new Car()   in altina yazmalisin
console.log(car1.startt());  //car1 objesine  startt() fonksiyonunu uygula dedik.Eger birden fazla object olsaydi böyle seçmek hayat kurtarirdi.
console.log(car1.stopp());










// getters ve setters 

class Client{

    constructor(name1,age1,tc1){
        this._name = name1;
        this._age = age1;
        this._tc = tc1;  // get in yanindaki tc ile karisinca buradaki proparitye _tc dedik.
    }



    static clientCount  = 0; 
    static increaseClientCount(){
        this.clientCount++;
    }
    



    get tc(){  //güvenlik için "get kullaniyoruz". 
        if(userType === "Lawyer"){
            return this._tc;
        }
        else{
            return "You are not Allowed";
        }
    }




    set tc(newTc){ // obje ile ilgili bir degisiklik yapimak istedigimizde kullaniyoruz.Setter olmasaydi degistirilemezdi.
        if(userType === "Lawyer"){ //Avukat isen tc yi degistirebilirsin sarti koyduk.
            this._tc = newTc;
        }
        else{
            console.log("You are not allowed")
        }

    }
}

let userType = "Lawyer";  //harfin büyüklügü kücüklügü de önemli
const person = new Client("John",45,12467);  // bu client class in ismi.

console.log(person);



Client.increaseClientCount();
console.log(person.clientCount);  //output: undefined
console.log(Client.clientCount);  //output: 0 idi.  Iki satir üzerinde  Client.icreaseClientCount()   fonksiyonunu çagirdik output : 1 oldu çünkü tek kisinin bilgilerini girdik.


console.log(person._name); // asagidaki ile ayni mantik output: John
console.log(person._tc); // output: 12467 
console.log(person.tc);  // ouput : userType Lawyer oldugunda tc   12467   , Lawyer degilse     you are not Allowed  


person.tc = 99909;  // userType Lawyer oldugunda tc    99909    olarak degistirilebilir ,Lawyer olmasaydi   12467   olarak kalirdi.
console.log(person);















// alistirma 1
class Dog{
    constructor(name,color,eyecolor,height,length,weight){
        this._name = name;
        this._color = color;
        this._eyecolor = eyecolor;
        this._height = height;
        this._length = length;
        this._weight = weight;
    }


    sit(){
        return this._name + " is sitting";
    }
    layDown(){
        return this._name + " is laying down";
    }
    shake(){
        return this._name + " is shaking his tail";
    }
    come(){
        return this._name + " is coming";
    }

}

const dog1 = new Dog ("Bobby","yellow","brown","17 in","35 in","24 pounds");
console.log(dog1);

console.log(dog1.sit());
console.log(dog1.layDown());
console.log(dog1.shake());
console.log(dog1.come());













//Inheritance (kalitim,miras)
 
//Parent
class Animal{
    constructor(name,species,color){
        this._name = name;
        this._species = species;
        this._color = color;
    }
     makeSound(){
        console.log(this._name + " make sound");
     }
}


//Child bird animal in alt kümesidir.
class Bird extends Animal {   // extends Animal  i ekledigimizde tekrardan constructor tanimlamaya gerek kalmaz.Ayni constructor geçerli olur. 
    
    constructor(name,species,color,eyeColor){
        super(name,species,color);
        this._eyeColor = eyeColor;  // eger animal da olmayan bir consturactor tanimlamak istersek böyle yapmamiz gerekir.
    }


    fly(){
        console.log(this._name + " flies");
    }     

    makeSound(){  //overrride etmis olduk . Sesi spesifiklestirdik.
        console.log(this._name +" cik cik cik");
    }



}

const bird = new Bird("Mavis","parrot","blue","red");
console.log(bird);

bird.fly();  // yukarida konsola yazdirildigi icin sadece çagirmak yeterli oldu.
bird.makeSound(); // Ama yukaridaki   return this._name +" make sound";    olsaydi. -->   returndaki ifadeyi konsolda görebilmek için    console.log(bird.makeSound());   kodunu yazmaliydik.


/*

const ayi = new Animal("Winnie", "boz" ,"sari");
console.log(animal._eyeColor);  // output: error
console.log(animal.fly());   // output: error
// fly methodu bird e ait, animal için çagirildiginda error verir . Parent Child dan method alamaz.
// ve eyeColor özelligini de parent child dan alamaz .  animal._eyeColor  error verir.

*/















// Alistirma
// Car --> Electircal Car --> Self Driving Car


class Araba{
    constructor(range,model){
        this._range = range;
        this._model = model;
    }
    getModelRange(){
        return this._range + " " + this._model;
    }
}


class ElectircalCar extends Araba{
    constructor(range,model,battery){
        super(range,model);
        this._battery = battery;
    }

    charge(){
        return this._model + " is charging ! "
    }
}


class SelfDrivingCar extends ElectircalCar{
    constructor(range,model,battery,auto){
        super(range,model,battery);
        this._auto = auto;
    }

    drive(){
        return this._model + " AI(Yapay Zeka) is driving ! ";
    }
}


let mercedes = new SelfDrivingCar (0,"Mercedes",100,"Autopilot");
console.log(mercedes.getModelRange());
console.log(mercedes.charge());






//this._name --> Public
//this.#name --> Privat


class kisi{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let p = new kisi ("john");
console.log(p._name);




class kisi2{
    #name;    // ya da    #name = " ";      // #  ile  name i privat yaptik

    constructor(name,age){   // bunu yazmazsak set etmiyor. john yerine undefined diyor.
        this.#name = name;  // privat
        this._age = age;    // public
    }

    get name(){       // privat yaptigimiz icin  p2.#name  mantigi ile cagirilmiyor (yukaridaki p._name gibi cagirilmiyor yani)."Get fonksiyonu" yazilip asagida fonksiyon cagirilarak elde edilebilir.
        return this.#name;
    }

    set name(newName){
        this.#name = newName;
    }

    getName (){   // yukaridaki get ve set class a özgü methodlardir. Bu sari olan ise bizim yazdigimiz bir fonksiyon.
        return this.#name;
    }

    get age(){
        return this._age;
    }

    set age(newAge){
        if (newAge < 0){  // protected logic
            newAge = 0;
        }
        this._age = newAge;
    }


}

let p2 = new kisi2 ("john",20);

console.log(p2.name);   // bu name get in yanindaki name ,direk #name ile cagirilmiyor,error veriyor.

p2.name = "Zeynep";  //p2.name("Zeynep");   seklinde de tanimlanabilir.
console.log(p2.name); 

console.log(p2.getName());  // bu fonsiyon get ve setter gibi cagirilmaz. () parantez koymaliyiz.

console.log(p2._age);

p2.age = -20;
console.log(p2.age);

// get ve set --> privat da kullanilir , public de kullanmaya gerek yok.















class Employee{
    constructor(firstName,lastName,job){
        this._firstName = firstName;
        this._lastName = lastName;
        this._job = job;

        Employee._count++;  // extra metoda ihtiyac duymadan klass ismi ._count++ dedigimizde her yeni klass tanimladigimizda klass sayisini arttircak

        this.skills=[];

    }
    
    static _count = 0;

    learn(skill){
        this.skills.push(skill); // void bir fonksiyondur.void --> return ü olmayan fonksiyon ve methodlara denir.
    }
}

class Meslek{ 
    constructor(company,position,salary){
        this._company = company;
        this._position = position;
        this._salary = salary;
    }
}

const employee1 = new Employee("Zeynep","KESKIN",new Meslek("Ustech","Developer",100)); // iç içe class
employee1.learn("OOP Programming"); // oop programming i skill olarak çagirdik.learn methodu ile yaptik.
console.log(employee1);



// asagidaki , yukaridakinin uzun versiyonu
const meslek1 = new Meslek("Ustech","Developer",100);
const employee2 = new Employee("John","Doe",meslek1);
console.log(employee2);


console.log(Employee._count);









// Polymorphism (çok sekilcilik)

class Hayvan{
    speak(){
        console.log("Animals have different sounds.");
    }
}

class Kedi extends Hayvan{
    speak(){
        console.log("Miyav !");  // bu yazilmasaydi "Animals have different sounds." konsola yazdiriyor. bunu yazdigimiz zaman "Miyav ! " konsola çikiyor.
    }
}

class Kopek extends Hayvan {
    speak(){
        console.log("Hav Hav !");
    }

}


let kedi1 = new Kedi();
kedi1.speak();

let kopek1 = new Kopek();
kopek1.speak();







/*
//Alistirma

class Shape{
    constructor(colour,type){   
        this._colour = colour;
        this._type = type;
    }

    describe(){
        console.log(`a ${this._colour} ${this._type} `);
    }
}


class Square extends Shape{
    constructor(colour,sideLength){
        super(colour);
        this._sideLength = sideLength;
    }

    area(){
        return this._sideLength* this._sideLength;
    }
}


class Rectangle extends Shape{
    constructor(colour,height,width){
        super(colour);
        this._height = height;
        this._width = width;
    }
    area(){
        return this._width* this._height;
    }
}


let square = new Square("pink",4);
square.describe(); // consol log çoktan yukarida yazdirildigi icin burada  console.log(square.describe());   yazdigimizda output undefined oluyor.
console.log(square.area());
console.log(square);

let rectangle = new Rectangle("purple",5,10);
rectangle.describe();
console.log(rectangle.area());
console.log(rectangle);

*/




class Shape{
    _type = "Shape";
    constructor(colour = "Transparent"){ // colour buraya tanimlanmali ! , default degerdir.
        this._colour = colour;
        //this._type = "Shape";  -->  ya yukaridaki gibi ya da böyle tanimlanabilir.Ikiside okay! .Ama yukaridaki gibi yapilmasi daha makul.
    }

    descripe(){
        console.log(`A ${this._colour} , ${this._type}`);
    }
}

class Square extends Shape{
    _type = "Square";
    constructor(colour,sideLength){
        super(colour);
        this._sideLengt = sideLength;
    }

    area(){
        return this._sideLengt **2;
    }
}

class Rectangle extends Shape{
    // _type = "Rectangle";
    radius; // default deger
    constructor(colour,width,height){
        super(colour);
        this._width = width;
        this._height = height;
        this._type = "Rectangle"; // ya yukaridaki gibi ya da böyle tanimlanabilir.Ikiside okay! .Ama yukaridaki gibi yapilmasi daha makul.
    }

    area(){
        return this._width * this._height;
    }
}


const shape1 = new Shape("Black");
console.log(shape1);

const shape2 = new Shape();
console.log(shape2);


const square = new Square("blue",5);
console.log(square._type);


const rectangle = new Rectangle("red",5,6);
console.log(rectangle._type);
rectangle.radius = rectangle._width * rectangle._height;
console.log(rectangle.radius);

