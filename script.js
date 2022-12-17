const student = "Грошелев Кирилл Дмитриевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...

const error_chance = 0.2;

function throwRandomError(chance) {
    let max_chance = 1.0;
    let min_chance = 0.0;
    if ((chance < min_chance) || (chance > max_chance)) {
        throw new Error(`Значение шанса должно быть в промежутке от ${min_chance} до ${max_chance}`);
    }
    
    random_number = Math.random(max_chance).toFixed(1);
    alert(`Случайное число: ${random_number}`);
    if (random_number <= chance) {
        throw new Error('Ой, что-то сломалось :(');
    }
}


try {
    throwRandomError(error_chance);
    alert('Всё в порядке, приложение работает в штатном режиме');
} catch (e) {
    alert(`Произошла ошибка, пожалуйста перезагрузите страницу. Текст ошибки: ${e.message}`);
}