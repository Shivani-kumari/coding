

function stack(s) {
    let stack =[];
    for(let i =0;i<s.length;i++){
        if(s[i]=="(" || s[i] == '[' || s[i] == '{'){
            stack.push(s[i])
            console.log(stack)
        }else{
            if(stack.length==0)
            return 0
            let top = stack.pop()
            console.log(top)
            if((s[i] == ')' && top != '(' )|| (s[i]=="]" && top !='[') || (s[i]=='}'&& top !='{') ){
                    return 0
            }
        }
    }
    
    if(stack.length!==0){
        return 0
    }
    return 1
    // let stack = [];
    // let map = {
    //     ']': '[',
    //     '}': '{',
    //     ')': '('
    // };
    // for(let ch of s){
    //     if(ch in map){
    //         if(stack.length == 0)
    //             return false;
    //         if(map[ch] != stack.pop())
    //             return false;
    //     }else{
    //         stack.push(ch);
    //     }
    // }
    // return (stack.length > 0)?false:true;

}
console.log(stack("{(})"))