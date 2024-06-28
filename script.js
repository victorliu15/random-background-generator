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

function createTriangles(n, shapeColor) {
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
        block.style.left = "45%";
        block.style.top = "40%";
        block.style.backgroundColor = "transparent";
        block.style.borderLeft = '2vw solid transparent';
        block.style.borderRight = '2vw solid transparent';
        block.style.borderBottom = `4vw solid ${color}`;
        block.style.margin = '1vw';
        block.style.boxShadow = "0 0 0 0 rgb(0, 0, 0, 0)";
        container.appendChild(block);
    }
}

function createStars(n, shapeColor) {
    container.innerHTML = '';
    for (let i = 0; i < n; i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        block.style.position = 'absolute';
        block.style.display = 'inline-block';
        block.style.width = '0';
        block.style.height = '0';
        block.style.margin = '0.25vh';
        block.style.left = "45%";
        block.style.top = "40%";
        if (shapeColor == "random") {
            var color = getRandomColor();
        }
        else {
            var color = shapeColor;
        }
        for (let i = 0; i < 5; i++) {
            const triangle = document.createElement('div');
            triangle.style.position = 'absolute';
            triangle.style.borderLeft = '1vw solid transparent';
            triangle.style.borderRight = '1vw solid transparent';
            triangle.style.borderBottom = `2vw solid ${color}`;
            triangle.style.transform = `rotate(${i * 72}deg)`;
            triangle.style.transformOrigin = 'center bottom';
            block.appendChild(triangle);
        container.appendChild(block);
        }
    }
}

function generate(shape, n, color) {
    if (shape == "squares") {
        createSquares(n, color);
    }
    else if (shape == "circles") {
        createCircles(n, color);
    }
    else if (shape == "triangles") {
        createTriangles(n, color);
    }
    else if (shape == "stars") {
        createStars(n, color);
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
        case "triangles":
            currentSelect = "triangles";
            break;
        case "stars":
            currentSelect = "stars";
            break;
    }
    if (quantity != 0 && color != "" && currentSelect != "") {
        document.getElementById("generateBtn").removeAttribute("disabled");
    }
});


document.getElementById("generateBtn").addEventListener("click", function() {
    if (document.getElementById("quantity").value != "") {
        quantity = parseInt(document.getElementById("quantity").value);
    }
    if (currentSelect != "" && quantity != 0) {
        generate(currentSelect, quantity, color);
        document.getElementById("downloadBtn").removeAttribute("disabled");
    }
});

document.getElementById("downloadBtn").addEventListener("click", function() {
    var container = document.querySelector(".container");
    container.style.marginLeft = "0";
    container.style.marginTop = "0";
    domtoimage.toBlob(document.getElementById("background")).then(function(blob) {
        window.saveAs(blob, 'background.png');
        container.style.marginLeft = "18vw";
        container.style.marginTop = "15vh";
    })
    .catch(function(error) {
        alert(error);
    });
});