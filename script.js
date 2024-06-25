let container = document.querySelector('.container');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createBlocks() {
    container.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        block.style.backgroundColor = getRandomColor();
        block.style.width = '${Math.random() * 4 + 1}vw';
        block.style.height = block.style.width;
        container.appendChild(block);
    }
}

function generate() {
    createBlocks();
    anime({
        targets: '.block',
        translateX: function() {
            return anime.random(-550, 550);
        },
        translateY: function() {
            return anime.random(-350, 350);
        },
        scale: function() {
            return anime.random(1, 3);
        },
        easing: 'easeInOutQuad',
        duration: 750,
    });
}

document.getElementById("generateBtn").addEventListener("click", generate);
