
function MultDigit(digits,len) {
    var final="";
    if(digits.length<len){
        for(var i=0;i<(len-digits.length);i++){
            final =final+"0"
        }
        final=final+digits;
        return final;
    }
    else{
        return digits
    }
    
}

export default MultDigit
