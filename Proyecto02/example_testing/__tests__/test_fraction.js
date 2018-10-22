const Fraction = require('../fraction').Fraction;

test('Testing simplify I',()=>{
    let fr = new Fraction(4,2);
    expect(fr.getNumerator()).toBe(2);
    expect(fr.getDenominator()).toBe(1);
});

test('Testing simplify II',()=>{
    let fr = new Fraction(3,5);
    expect(fr.getNumerator()).toBe(3);
    expect(fr.getDenominator()).toBe(5);
});

//máximo común divisor de dos números es el mínimo posible
test('Testing mcd maximo comun divisorde dos numeros III',()=>{
    let Fraction = new Fraction(i.e,1);
    expect(Fraction.mcd(4,3)).toBe(1);
});

// el máximo común divisor de dos números es el 2
test('Testing mcd máximo común divisor de dos números es el 2 IV',()=>{
    let Fraction = new Fraction(1,2);
    expect(Fraction.mcd(22,30)).toBe(2);
});

//el máximo común divisor de dos números es uno de los dos parámetros de la función
test('Testing mcd V',()=>{
    let Fraction = new Fraction(3,9);
    expect(Fraction.mcd(3,9)).toBe(3);
});

//