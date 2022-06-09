const dino = document.getElementById('dino'),
    block = document.getElementById('block');

let score = parseInt(document.getElementById('score').innerHTML);

const dinoJump = () => {
    if (dino.classList.value !== 'dinojump') {
        dino.classList.add('dinojump');
        setTimeout(() => {
            dino.classList.remove('dinojump');
        }, 300);
    }
}

const collision = () => {
    setInterval(() => {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top')),
            blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
        if (blockLeft < 46 && blockLeft > 14 && dinoTop >= 170) {
            block.style.animation = 'none';
            alert('Game Over.');
        }
    }, 10);
    setInterval(() => {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top')),
            blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
        if (blockLeft < 100 && dinoTop < 175) {
            document.getElementById('score').innerHTML = score++;
        }
    }, 300);
}

const restart = () => {
    location.reload();
}

score++;
document.getElementById('game').addEventListener('click', dinoJump);
collision();