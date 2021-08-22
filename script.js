
var age = +prompt('Введите свой возраст');

if (age>=0 && age <=18) {
    alert('Вы еше молоды. Вам нужно учится')
}else if(age>=18 && age <=50) {
    alert('Вам нужно работать')
}else if(age>=50 && age <=59) {
    alert('Вам скоро на пенсию')
}else if(age>=59 && age <=150) {
    alert('Вы пенсионер')
}else{
    alert('Что-то пошло не так')
}

var data = +prompt('Введите время');

switch (data) {
    case 1:
        alert('Час ночи')
        break;
    case 2:
        alert('Два часа ночи')
        break;
    case 3:
        alert('Три часа ночи')
        break;
    case 4:
        alert('Четыре часа ночи')
        break;
    case 5:
        alert('Пять часа ночи')
        break;
    case 6:
        alert('Шесть часов утра')
        break;
    case 7:
        alert('Семь часов утра')
        break;
    case 8:
        alert('Восемь часов утра')
        break;
    case 9:
        alert('Девять часов утра')
        break;
    case 10:
        alert('Десять часов утра')
        break;
    case 11:
        alert('Одиннадцать часов утра')
        break;
    case 12:
        alert('Двенадцать часов дня')
        break;
    case 13:
        alert('Час дня')
        break;
    case 14:
        alert('Два часа дня')
        break;
    case 15:
        alert('Три часа дня')
        break;
    case 16:
        alert('Четыре часа дня')
        break;
    case 17:
        alert('Пять часа дня')
        break;
    case 18:
        alert('Шесть часов вечера')
        break;
    case 19:
        alert('Семь часов вечера')
        break;
    case 20:
        alert('Восем часов вечера')
        break;
    case 21:
        alert('Девять часов вечера')
        break;
    case 22:
        alert('Десять часов вечера')
        break;
    case 23:
        alert('Одиннадцать часов вечера')
        break;
    case 24:
        alert('Двенадцать часов ночи')
        break;
    default:
        alert('Такого времени не существует')
        break;    
}

var a = +prompt('Введите число')
var b = +prompt('Введите второе число')
var c = +prompt('Введите третье число')

if (b<a && a>c) {
    alert(a)
}else if (a<b && b>c) {
    alert(b)
}else if(a<c && c>b) {
    alert(c)
}