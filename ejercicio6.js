// Dibujar un cuadrado hueco con asteriscos dado n espacios

function drawSquare1(size) {
  for (let i = 0; i < size; i++) {
    console.log(drawLine1(size, i === 0 || i === size - 1));
  }
}

function drawLine1(size, hasSpaces = false) {
  let line = '';
  for (let i = 0; i < size; i++) {
    line = hasSpaces ? line + '*' : line = i === 0 || i === size - 1 ? line + '*' : line + ' ';
  }
  return line;
}

// drawSquare1(5);

function drawSquare2(size) {
  for (let i = 0; i < size; i++) {
    console.log(drawLine2(size, i === 0 || i === size - 1));
  }
}

function drawLine2(size, noSpaces = false) {
  const lineArray = new Array(size);
  if (noSpaces) {
    lineArray.fill('*');
    return lineArray.join('');
  }

  lineArray.fill(' ');
  lineArray[0] = '*';
  lineArray[size - 1] = '*'
  return lineArray.join('');
}

drawSquare2(5);

