
// // const gitHub = fetch(`https://api.github.com/users`)

// // console.log(gitHub)

let cart = ["shoes","pants","kurta"]

// const promise = createOrder(cart).then(function(orderId){

//     return orderId
// }).then(function (orderId) {
//     return proccedToPayment(orderId)
// }).then(function (pamentInfo){
// console.log(pamentInfo)
// }).catch(function (e) {
//     console.log(e,"error")
// }).then(function () {
//     console.log("no matter this will be defentely be called")
// })
// // console.log(promise)
// // promise.then(function(orderId){
// //     console.log(orderId)
// //     // proccedToPayment(orderId)
// // })

// // producer

createOrder(cart)
.then((orderId)=>proccedToPayment(orderId))
.then((orderDetails)=>showOrderSummery(orderDetails))
.then((orderDetails)=>walletBalance(orderDetails.totalPayment))
.then((netWalletBalance)=>console.log(netWalletBalance))
.catch((err)=>console.log(err))


function createOrder(cart) {
    
    const pr = new Promise (function(res,rej) {
        // CreateOrder
        // ValidateCart
        // orderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid")
            rej(err)
        }

        let orderId = "1234"
        if(orderId){
            setTimeout(() => {
                res(orderId)
            }, 500);
            
        }
    })
    return pr
}

function proccedToPayment(orderId){
return new Promise(function (res,ref) {
    
    if(orderId){
        let totalPayment = 200
        let data = {
            orderId:orderId,
            totalPayment:totalPayment,
            text:"payment is sucessful"
        }
        res(data)
    }
})
}

function validateCart(cart){
    return true
}

function showOrderSummery(data) {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}
function walletBalance(totalPriceOfCart) {
    let walentTotlBance = 5000
    let currenBalance = walentTotlBance - totalPriceOfCart
    return new Promise((res,rej)=>{
        res(currenBalance)
    })
}


