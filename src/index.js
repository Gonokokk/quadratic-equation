module.exports = function solveEquation(equation) {
  var aReg = /^\-?\d+/;
        bRegf = /\^\d.\d*/;
        bRegs = /\-?\d*$/;
        cReg = /\-?\d*$/;
        result = [];
    var d, x1, x2; 
        RegEx = /\s*/g;
        equation = equation.replace(RegEx, "");
    
        a = Number(aReg.exec(equation));
        b = bRegf.exec(equation); 
        b = Number(bRegs.exec(b));      
        c = Number(cReg.exec(equation));
        
        d = b*b - 4*a*c;

        x1 = Math.round((-b + Math.sqrt(d))/(2*a));
        x2 = Math.round((-b - Math.sqrt(d))/(2*a));
        result.push(x1, x2);
        result.sort(function(a, b) {
        	return a - b;
        });
        
        return result;
}
