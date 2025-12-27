const x = 10;

if(x > 0){
    var a = 100;  // function/global scope
    let b = 200; // block-scoped variable, value can be reassigned
    const c = 300; // cannot be reassigned

    console.log("Printing inside the conditional structure: ");
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log("Printing outside the conditional structure: ");
    // var was created inside the conditional structure scope and should only exists inside this scope
    // var has function or global scope, not block scope
    console.log(a); // accessing var outside a block is allowed, but not recommended

    // let and const are block-scoped and not accessible here
    // console.log(b); // ReferenceError
    // console.log(c); // ReferenceError

    console.log("Printing for loop count")
    for(let i = 0; i < 5; i++){
        console.log(i);
    }