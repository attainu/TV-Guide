
function sliceText(text,len) {
    var final="";
    if(text.length>len){
        final=text.slice(0,len-3)+"...";
        return final;
    }
    else{
        return text;
    }
    
}

export default sliceText
