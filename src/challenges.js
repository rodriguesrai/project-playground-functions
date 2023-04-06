// Desafio 1 - Crie a função compareTrue
const compareTrue = (parametro1, parametro2) => {
  if (parametro1 && parametro2 === true) {
    return true
  } else (parametro1 && parametro2 === false)
  return false
};

// Desafio 2 - Crie a função splitSentence
const splitSentence = string => string.split(" ");

// Desafio 3 - Crie a função concatName
const concatName = array => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => wins * 3 + ties;

// Desafio 5 - Crie a função highestCount

const highestCount = array1 => {
  let count = 1;
  let maiorNumero = array1[0];

  for (let index = 1; index < array1.length; index++) {
    if (array1[index] > maiorNumero) {
      maiorNumero = array1[index];
      count = 1
    } else if (array1[index] === maiorNumero) {
      count++;

    }
  }
  return count;
}


// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => base * height / 2;
const calcRectangleArea = (base, height) => base * height;
const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`
  } else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`

  } else return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida'


}

// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  const distanceCat1 = cat1 > mouse ? cat1 - mouse : mouse - cat1;
  const distanceCat2 = cat2 > mouse ? cat2 - mouse : mouse - cat2;

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = arrayNumeros => {
  let stringFizzBuzz = [];
  for (let index = 0; index < arrayNumeros.length; index++) {

    if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 === 0) {
      stringFizzBuzz.push('fizzBuzz');
    } else if (arrayNumeros[index] % 3 === 0) {
      stringFizzBuzz.push('fizz');
    } else if (arrayNumeros[index] % 5 === 0) {
      stringFizzBuzz.push('buzz');
    } else {
      stringFizzBuzz.push('bug!');
    }
   
  }
  return stringFizzBuzz;
}


// Desafio 9 - Crie a função encode e a função decode
const encode = (string1) => {
return string1.replace(/['a']/g, 1).replace(/['e']/g, 2).replace(/['i']/g, 3).replace(/['o']/g, 4).replace(/['u']/g, 5);
}
const decode = (string2) => {
return string2.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
}

// Desafio 10 - Crie a função techList
console.log(encode('hi there!'));
console.log(decode('h2ll4'));






// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};
