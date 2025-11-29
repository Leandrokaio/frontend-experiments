const form = document.getElementById('form');

form.addEventListener('submit', (event =>{
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    document.getElementById('infos').classList.remove('hidden');

    value.classList.add('attention')

    switch(true){
        case(bmi < 18.50):
            description += 'Cuidado! Você está abaixo do peso!';
        break;
        case(bmi >= 18.50 && bmi <= 25):
            description += 'Você está no peso ideal!';
            value.classList.remove('attention')
            value.classList.add('normal')
        break;
        case(bmi > 25 && bmi <= 30):
            description += 'Cuidado! Você está com sobrepeso!';
        break;
        case(bmi > 30 && bmi <= 35):
            description += 'Cuidado! Você está com obesidade moderada!';
        break;
        case(bmi > 35 && bmi <= 40):
            description += 'Cuidado! Você está com obesidade severa!';
        break;
        default:
            description += 'Cuidado! Você está com obesidade morbida!';
    }
    
    value.textContent = bmi.replace('.', ',')
    document.getElementById('description').textContent = description;

}))