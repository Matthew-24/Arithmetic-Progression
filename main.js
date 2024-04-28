class ArithmeticProgress{
  constructor(term, a=0, d=0){
    this.term = term;
    this.a = a;
    this.d = d
    this.a = this.term[0]; //a is the 1st term
    this.d = this.term[1] - this.term[0];//d is the common difference
  }
  findn(n){
    //n is the n term
    return this.a + (n - 1) * this.d;
  }
  extendAP(x){
    //x is the limited number of terms
    let z = this.term.length + 1;
    for (; z < x; z++) {
      let y = this.a + ((z - 1) * this.d);
      this.term.push(y);
    }
    return Object.values(this.term);
  }
}
