const chai = window.chai
const expect = chai.expect


//Single Letter Test

describe('romanToInt', () => {
  it('Single Letter Test: ', () => {
    expect(romanToInt(["I"])).to.deep.equal([1]);
    expect(romanToInt(["V"])).to.deep.equal([5]);
    expect(romanToInt(["X"])).to.deep.equal([10]);
    expect(romanToInt(["L"])).to.deep.equal([50]);
    expect(romanToInt(["C"])).to.deep.equal([100]);
    expect(romanToInt(["D"])).to.deep.equal([500]);
    expect(romanToInt(["M"])).to.deep.equal([1000]);

  })
})

//Subtractive Notation Test

describe('romanToInt', () => {
  it('Subrative Notation Test', () => {
    expect(romanToInt(["IV"])).to.deep.equal([4]);
    expect(romanToInt(["IX"])).to.deep.equal([9]);
    expect(romanToInt(["XL"])).to.deep.equal([40]);
    expect(romanToInt(["XC"])).to.deep.equal([90]);
    expect(romanToInt(["CD"])).to.deep.equal([400]);
    expect(romanToInt(["CM"])).to.deep.equal([900]);
    
    

  })
})

//W/Wo Subtractive Notation

describe('romanToInt', () => {
  it('With and Without Subtractive Notation', () => {
    expect(romanToInt(["II"])).to.deep.equal([2]);
    expect(romanToInt(["IV"])).to.deep.equal([4]);
    expect(romanToInt(["X"])).to.deep.equal([10]);
    expect(romanToInt(["L"])).to.deep.equal([50]);


  })
})

//Repeated Characters

describe('romanToInt', () => {
  it('Repitition (Repeated Characters)', () => {
    expect(romanToInt(["II"])).to.deep.equal([2]);
    expect(romanToInt(["III"])).to.deep.equal([3]);
    expect(romanToInt(["XIII"])).to.deep.equal([13]);
    expect(romanToInt(["XX"])).to.deep.equal([20]);
    expect(romanToInt(["XXX"])).to.deep.equal([30]);


  })
})

//First Number Test

describe('romanToInt', () => {
  it('First Number', () => {
    expect(romanToInt(["II"])).to.deep.equal([2]);
    expect(romanToInt(["IV"])).to.deep.equal([4]);
    expect(romanToInt(["X"])).to.deep.equal([10]);
    expect(romanToInt(["L"])).to.deep.equal([50]);

  })
})

//Invalid Letter Test

describe('romanToInt', () => {
  it('Invalid Letter', () => {
    expect(romanToInt(["Z"])).to.deep.equal([NaN]);
    expect(romanToInt(["T"])).to.deep.equal([NaN]);
    expect(romanToInt(["!"])).to.deep.equal([NaN]);
    expect(romanToInt(["R"])).to.deep.equal([NaN]);


  })
})

//Invalid & Valid Letter Test

describe('romanToInt', () => {
  it('Invalid and Valid Letter', () => {
    expect(romanToInt(["IZ"])).to.deep.equal([NaN]);
    expect(romanToInt(["XO"])).to.deep.equal([NaN]);
    expect(romanToInt(["VQ"])).to.deep.equal([NaN]);
    expect(romanToInt(["II!"])).to.deep.equal([NaN]);

  })
})

//Not Valid Test

describe('romanToInt', () => {
  it('Not Valid', () => {
    expect(romanToInt(["IIII"])).to.deep.equal([NaN]);
    expect(romanToInt(["VV"])).to.deep.equal([NaN]);
    expect(romanToInt(["VX"])).to.deep.equal([NaN]);
    expect(romanToInt(["VM"])).to.deep.equal([NaN]);


  })
})

//Null Test

describe('romanToInt', () => {
  it('Null: ', () => {

    expect(romanToInt([])).to.deep.equal([]);
    // expect(romanToInt([null])).to.deep.equal([null]);

  })
})

