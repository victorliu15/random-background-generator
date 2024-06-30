let container = document.querySelector('.container');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createSquares(n, shapeColor) {
    container.innerHTML = '';
    for (let i = 0; i < n; i++) {
        if (shapeColor == "random") {
            var color = getRandomColor();
        }
        else {
            var color = shapeColor;
        }
        let block = document.createElement('div');
        block.classList.add('block');
        block.style.backgroundColor = color;
        container.appendChild(block);
    }
}

function createCircles(n, shapeColor) {
    container.innerHTML = '';
    for (let i = 0; i < n; i++) {
        if (shapeColor == "random") {
            var color = getRandomColor();
        }
        else {
            var color = shapeColor;
        }
        let block = document.createElement('div');
        block.classList.add('block');
        block.style.backgroundColor = color;
        block.style.borderRadius = '50%';
        container.appendChild(block);
    }
}
function createRectangles(n, shapeColor) {
    container.innerHTML = '';
    for (let i = 0; i < n; i++) {
        if (shapeColor == "random") {
            var color = getRandomColor();
        }
        else {
            var color = shapeColor;
        }
        let block = document.createElement('div');
        block.style.width = `${Math.floor(Math.random() * (5)) + 1}vw`;
        block.style.height = `${Math.floor(Math.random() * (3)) + 1}vw`;
        block.classList.add('block');
        block.style.backgroundColor = color;
        container.appendChild(block);
    }
}

function createEllipses(n, shapeColor) {
    container.innerHTML = '';
    for (let i = 0; i < n; i++) {
        if (shapeColor == "random") {
            var color = getRandomColor();
        }
        else {
            var color = shapeColor;
        }
        let block = document.createElement('div');
        block.classList.add('block');
        block.style.backgroundColor = color;
        block.style.width = `${Math.floor(Math.random() * (5)) + 1}vw`;
        block.style.borderRadius = '50%';
        container.appendChild(block);
    }
}

function generate(shape, n, color) {
    if (shape == "squares") {
        createSquares(n, color);
    }
    else if (shape == "circles") {
        createCircles(n, color);
    }
    else if (shape == "rectangles") {
        createRectangles(n, color);
    }
    else if (shape == "ellipses") {
        createEllipses(n, color);
    }
    anime({
        targets: '.block',
        translateX: function() {
            return anime.random(-550, 550);
        },
        translateY: function() {
            return anime.random(-350, 350);
        },
        scale: function() {
            return anime.random(1, 4);
        },
        easing: 'easeInOutQuad',
        duration: 500,
    });
}

let currentSelect = "";
let quantity = 0;
let color = "";

document.getElementById("quantity").addEventListener("change", function() {
    quantity = parseInt(document.getElementById("quantity").value);
    if (quantity != 0 && color != "" && currentSelect != "") {
        document.getElementById("generateBtn").removeAttribute("disabled");
        document.getElementById("generateBtn").style.backgroundColor = "rgb(46, 255, 46)";
    }
});

document.getElementById("color").addEventListener("change", function() {
    let choice = document.getElementById("color").value;
    switch (choice) {
        case "random":
            color = "random";
            break;
        case "red":
            color = "red";
            break;
        case "orange":
            color = "orange";
            break;
        case "yellow":
            color = "yellow";
            break;
        case "green":
            color = "green";
            break;
        case "blue":
            color = "blue";
            break;
        case "purple":
            color = "purple";
            break;
    }
    if (quantity != 0 && color != "" && currentSelect != "") {
        document.getElementById("generateBtn").removeAttribute("disabled");
        document.getElementById("generateBtn").style.backgroundColor = "rgb(46, 255, 46)";
    }
});

document.getElementById("options").addEventListener("change", function() {
    let choice = document.getElementById("options").value;
    switch (choice) {
        case "squares":
            currentSelect = "squares";
            break;
        case "circles":
            currentSelect = "circles";
            break;
        case "rectangles":
            currentSelect = "rectangles";
            break;
        case "ellipses":
            currentSelect = "ellipses";
            break;
    }
    if (quantity != 0 && color != "" && currentSelect != "") {
        document.getElementById("generateBtn").removeAttribute("disabled");
        document.getElementById("generateBtn").style.backgroundColor = "rgb(46, 255, 46)";
    }
});


document.getElementById("generateBtn").addEventListener("click", function() {
    if (document.getElementById("quantity").value != "") {
        quantity = parseInt(document.getElementById("quantity").value);
    }
    if (currentSelect != "" && quantity != 0) {
        generate(currentSelect, quantity, color);
        document.getElementById("downloadBtn").removeAttribute("disabled");
        document.getElementById("downloadBtn").style.backgroundColor = "lightblue";
    }
});

document.getElementById("downloadBtn").addEventListener("click", function() {
    domtoimage.toBlob(document.getElementById("background")).then(function(blob) {
        window.saveAs(blob, 'background.png');
    })
    .catch(function(error) {
        alert(error);
    });
});