//! Callback hell, often referred to as Pyramid of Doom, describes a situation in JavaScript where multiple nested callbacks become difficult to manage, leading to unreadable and unmaintainable code. 
//! It often arises when performing multiple asynchronous operations that depend on the completion of previous operations.
//! The code starts to take on a pyramidal shape due to the nesting.


callAsync1(function(){
    callAsync2(function(){
        callAsync3(function(){
            callAsync4(function(){
                callAsync5(function(){

                })
            })
        })
    })
})

//! Strategies to avoid callback hell

//* promise chaining

callAsync1()

.then(()=>callAsync2())
.then(()=>callAsync3())
.then(()=>callAsync4())
.then(()=>callAsync5())
.catch((err)=>console.error(err));

//* async/await

async function asyncCall(){
    try {
        await callAsync1()
        await callAsync2()
        await callAsync3()
        await callAsync4()
        await callAsync5()
    } catch (error) {
        console.log(error);
    }
}