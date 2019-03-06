var add =require('../sum.js');//引用被测模块
var expect = require('chai').expect;

describe('加法测试',function(){
  it('0+0=0',function(){
    expect(add(0,0)).to.be.equal(0);
  });

  it('3+5=8',function(){
    expect(add(3,5)).to.be.equal(8);
  });

  
})
