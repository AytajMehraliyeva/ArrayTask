// //Task1 : Daxil edinlən ədədin polindrom olub olmamasını yoxlayan alqoritm qurun.Əgər Polindromdursa true əks halda false ekranda çap edilsin.
// function palindrome(eded) {

//     // split vasitesi ile ededi parcalayiriq, reverse ile tersine cevirib yoxladiqdan sonra join ile birlesdiririk
//     let palind = eded.split('').reverse('').join('');
//     if (eded === palind) {
//         console.log("True")

//     } else {
//         console.log("False")
//     }
// }

// palindrome(prompt("Eded daxil edin"))  //big O: 4+n



//Task2  .Daxil edilən ədədin sadə vəya mürəkkəb olub olmamasını yoxlayan alqoritm qurun.Ədəd sadədirsə true əks halda false ekranda çap edilsin.

// const eded = parseInt(prompt("eded daxil edin")); //1
// let bolenler = 0; //2

// for (let i = 1; i <= eded; i++) { //n
//     if (eded % i === 0) { //z*n (n-odenen butun hallarin sayi)
//         bolenler++;
//     }
// }

// if (bolenler > 2) { //4
//     console.log("Daxil edilen eded murekkebdir")
// } else { //4
//     console.log("Daxil edilen eded sadedir");
// }
//big o notation: n*a+5 (for icerisinde if ededden ve wertden asilidir)




//Task 3  .Ədədin istənilən qüvvətini tapan alqoritm qurun.User ədəd və qüvvət dəyərlərini prompt vasitəsi ilə daxil edəcək və ekranda daxil etdiyi ədədin

// let eded = parseInt(prompt("Ededi daxil edin"))
// let quvvet = parseInt(prompt("Quvveti daxil edin"))
// let netice = eded ** quvvet
// alert(netice)
//big O :4


//Task4  Array-də(minimum 5 element olsun) 3 rəqəmli ədədlərlə digər ədədlər arasında fərqi tapan alqoritm qurun.

// let element = [102, 96, 989, 1, 201]; //1

// let ucreqemliCem = 0; //2
// let digerCem = 0; //3

// for (let i = 0; i < element.length; i++) {
//     let reqem = element[i];
//     if (reqem >= 100 && reqem <= 999) {
//         ucreqemliCem += reqem;
//     } else {
//         digerCem += reqem;
//     }
// }

// let netice = ucreqemliCem - digerCem; //4

// console.log("Cəmlərin fərqi:", netice); //5





//Task5  Array-də(minimum 5 element olsun) tək ədədlərlə cüt ədədlərin fərqini tapan alqoritm qurun

// let str = [11, 14, 16, 17, 18, 19];

// let tekEdedCem = 0;
// let cutEdedCem = 0;

// for (let i = 0; i < str.length; i++) {
//     const eded = str[i];
//     if (eded % 2 === 0) {

//         cutEdedCem += eded;
//     } else {

//         tekEdedCem += eded;
//     }
// }

// let netice = cutEdedCem - tekEdedCem;
// console.log("Cüt və tək ədədlərin fərqi:", netice);



//Task6   Array-də(minimum 5 element olsun) tərsinə çevirən alqoritm qurun.(misal [1,2,3,4,5]=>[5,4,3,2,1])

// let array = [21, 23, 24, 25, 27]; //1
// let a = array.length; //2

// for (let i = 0; i < Math.floor(a / 2); i++) { //n
//     let temp = array[i];
//     array[i] = array[a - 1 - i];
//     array[a - 1 - i] = temp;
// }

// console.log(array); //4


//Task7   2 arrayiniz olsun. Birinci arraydə olub eyni zamanda ikinci arrayda olmayan bütün elementləri ekranda çap edən alqoritm qurun.(Misal [1,2,3,4,5],[1,4,5,6,7]=>[2,3])

// const firstArray = [42, 44, 46, 48, 50];
// const secondArray = [42, 43, 44, 45, 46];
// const ferqli = [];

// for (let i = 0; i < firstArray.length; i++) {
//     if (!secondArray.includes(firstArray[i])) {
//         ferqli.push(firstArray[i]);
//     }
// }

// console.log(ferqli);