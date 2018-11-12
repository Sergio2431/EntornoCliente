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

//mínimo común múltiplo es uno de los dos parámetros
test('Testing simplify III',()=>{
    let fr = new Fraction(2,4);
    expect(fr.mcm()).toBe(2);
});

//mínimo común múltiplo es la multiplicación de ambos números
test('Testing simplify IV',()=>{
    let fr = new Fraction(2,4);
    expect(fr.mcm()).toBe(8);
});

//mínimo común múltiplo está entre el máximo de los dos parámetros y la multiplicación de ambos
test('Testing simplify VI',()=>{
    let fr = new Fraction(4,6);
    expect(fr.mcm()).toBe(12);
});

//el primer parámetro no es un entero
test('Testing simplify VII',()=>{
    let fr = new Fraction(1.5,2);
    expect(fr.mcd(1.5,2)).toThrowError(Error);
});

//el segundo parámetro no es un entero
test('Testing simplify VIII',()=>{
    let fr = new Fraction(2,1.5);
    expect(fr.mcd(2,1.5)).toThrowError(Error);
});


//el parámetro pasado como valor es un entero
test('Testing simplify IX',()=>{
    
});   

//parámetro proporcionado es otra fracción
test('Testing simplify X',()=>{
    let fr1 = new Fraction(2,4);
    let fr2 = new Fraction(1,3);
    let fr3 = fr1.add(fr2);
        expect(fr3 .getDenominator).toBe(6);
}); 