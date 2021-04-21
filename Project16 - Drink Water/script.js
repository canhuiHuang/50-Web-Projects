
const remained = document.getElementById('remained');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');

console.log(remained, percentage);
const smallCups = document.querySelectorAll('.cup-small');

const updateBigCup = () => {
    const fullCups = document.querySelectorAll('.cup-small.full');

    // Update water level in cup
    percentage.style.height = `${(fullCups.length / smallCups.length)*330}px`;

    // Update percentage in water level
    if (fullCups.length === 0) {
        percentage.innerText = '';
    } else {
        percentage.innerText = `${(fullCups.length / smallCups.length)*100}%`;
    }
    
    // If all cups are filled
    if (fullCups.length === smallCups.length) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
    }

    // Update remained liters
    liters.innerText = `${(1 - (fullCups.length / smallCups.length))*2}L`;
};

const fillCups = (index) => {  
    if (smallCups.item(index).classList.contains('full')) {

        let i = smallCups.length - 1;

        const recursiveFunction = () => {
            if (i >= index) {
                smallCups.item(i).classList.remove('full');
                setTimeout(recursiveFunction, 14);
                updateBigCup();
                i--;
            }
        }
        recursiveFunction();
        
    } else {
        let i = 0;

        const recursiveFunction = () => {
            if (i <= index) {
                smallCups.item(i).classList.add('full');
                setTimeout(recursiveFunction, 20);
                updateBigCup();
                i++;
            }
        }
         
        recursiveFunction();
    }
}


let litros = 2;
let porcentaje = 0;
smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => {fillCups(index)}
    )
});

