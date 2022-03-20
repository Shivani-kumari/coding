
// f(4) 0,1,1,2,3,5,8
let n = 4
let array = []
     for(let i=0;i<=n;i++){
        array.push(-1)
    }
    

const fibonacci=(n) =>{
  if(array[n] == -1){
      if(n<=1){

           array[n]=n
      }else{
          array[n]=fibonacci(n-1) + fibonacci(n-2)
      }
  }
  return array[n]
}
console.log(fibonacci(4))

