// async function foo() {
//     const result1 = await new Promise((resolve) => setTimeout(() => resolve('1')))
//     console.log(result1,"result")
//     const result2 = await new Promise((resolve) => setTimeout(() => resolve('2')))
//     console.log(result2,"result")
//  }
 
//  foo()

//  console.log('i am wating ')


// diffrence between .then and await statement

// async function foo() {
//    const a = await 1
//    console.log(a)
//     console.log("i want to kanow")
//  }

//  function foo() {
//     const a=  Promise.resolve(1).then(() => undefined)
//     console.log(a)
//     console.log("i am wating")
//  }
//  foo()

function resolveAfter2Seconds() {
    console.log("starting slow promise")
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("slow")
        console.log("slow promise is done")
      }, 2000)
    })
  }
  
  function resolveAfter1Second() {
    console.log("starting fast promise")
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("fast")
        console.log("fast promise is done")
      }, 1000)
    })
  }

  async function sequentialStart() {
    console.log('==SEQUENTIAL START==')
  
    // 1. Execution gets here almost instantly
    const slow = await resolveAfter2Seconds()
    console.log(slow) // 2. this runs 2 seconds after 1.
  
    const fast = await resolveAfter1Second()
    console.log(fast) // 3. this runs 3 seconds after 1.
  }