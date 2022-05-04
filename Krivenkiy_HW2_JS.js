/*Напишите валидационный скрипт используя функции 
 1. Скрипт должен на вход принимать строку.
 2. После проверки строки выводить в консоль сообщение где будет 
    конкретно написано, что не так в ведённой строке.
 3. Минимум 5 символов в строке
 4. Максимум 64 символа в строке
 5. В строке должны быть буквы
 6. Должна быть хотя бы одна буква в верхнем регистре
 7. Должна быть хотя бы одна цифра
 8. Должна быть хотя бы одна @
 9. Строка не должна быть пустой 
*/

// Строка, вводимая пользователем
let input = "gfh2@"

// 1. Проверяем что тип вводимых данных - строка.
let ttt = typeof(input)
function input_string(input){
  if (ttt.match('string')){
    return true;
  } else { console.log("ERROR: Введенный текст не является строкой")
    return false;
  }
}
input_string(input)

// 9. Проверка что строка не пустая
function input_null(input){
    if (ttt.match('number')){
        return false;
    }else if (ttt.match('string') && input.length != 0){
        return true;
    }else{
        console.log("ERROR: Введена пустая строка")
        return false;
    }
    
    }
    input_null(input)

// 3 и 4. Функция на проверку длинны вводимой строки
function valid_lenght(input){
    if (ttt.match('number') || input.length == 0){
        return false;
    }else if (input.length < 5 || input.length > 64){
        console.log("ERROR: Введите от 5 до 64 символов. Вы ввели: " + input.length);
        return false
    }else { return true;}
}
valid_lenght(input);

// 5. Функция на проверку что в строке есть буквы
function valid_word1(input){
    if  (ttt.match('number') || input.length == 0){
        return false;
    }else if (input.match(/[a-zа-яё]/i)){
        return true;
    }else {
        console.log("ERROR: Необходимо ввести хотя бы 1 букву");
        return false;
    }
}
valid_word1(input)

// 6. Функция на проверку наличия символов верхнего регистра
function valid_word2(input){
    if  (ttt.match('number') || input.length == 0){
        return false;
    }else if  (input.match(/[А-ЯA-Z]/)){
        return true;
    }else {
        console.log("ERROR: Необходимо ввести хотя бы 1 букву верхнего регистра");
        return false;
    }
}
valid_word2(input)

// 7. Функция на проверку что в строке есть цифр (7 пункт задания)
function valid_num(input){
    if  (ttt.match('number') || input.length == 0){
        return false;
    }else if (input.match(/[0-9]/)){
        return true;
    }else {
        console.log("ERROR: Необходимо ввести хотя бы 1 цифру");
        return false
    }
}
valid_num(input);

// 8. Функция на проверку что в строке есть символ "@" 
function valid_sobaka(input){
    if   (ttt.match('number') || input.length == 0){
        return false;
    }else if (input.match("@")){
        return true;
    }else {
        console.log("ERROR: Отсутствует обязательный символ @");
        return false
    }
    
}
valid_sobaka(input);

function valid_script(input){
if (ttt.match('number') || input.length == 0){
    console.log("Валидация не выполнена")
    return false;}
    else if (input.match("@") && input.match(/[0-9]/) && input.match(/[А-ЯA-Z]/) && input.match(/[а-яёa-z]/i) && input.length >=5 && input.length <=64) {
        console.log("Валидация прошла успешно")
}else {console.log("Валидация не выполнена.")}
}
valid_script(input)
