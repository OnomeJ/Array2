// var cart=["Ata rodo", "pomo", "gino tomato", "cucumber", "efo tete"]
// // console.log(cart);
// var friends=["John", "Steven", "Samuel", "Edmond", "Adeola"]
// friends.pop()
// friends.shift()
// friends.push("Adams")
// friends.unshift("Precious")
// console.log(friends);


// properties of array. arrays helps us to collect several values together
// properties are like features of somethings e.g .lenght, help us to count the number of items in our array
// .pop remove last item
// .shift remove first item

// var cart= []

// function addItems() {
//     // if (inp.value!=="")
//     if (inp.value==="") {
//         alert("fill in something now")
//     } else{
//         console.log(inp.value);
//         cart.push(inp.value)
//         // cart.unshift(inp.value)
//         document.getElementById("inp").value=""
//         console.log(cart);
        
//         show.innerHTML= ""
//         for(i=0; i<cart.length; i++){
//             show.innerHTML += cart[i]
//             // show.innerHTML += `<p>
//             // ${i+1}. ${cart[i]}</p>`
//         }
       
//     }
// }

var cart=[]

function addItems() {

    if (inp.value==="") {
        alert("fill in something now")
    } else{
        console.log(inp.value);
        cart.push(inp.value)
        
        document.getElementById("inp").value=""
        console.log(cart);
        
        let table = "<table><tr><th>S/N</th><th >Item</th></tr>";
    for(i=0; i<cart.length; i++) {
        table += `<tr>
        <td>${i + 1}</td>
        <td>${cart[i]}</td>
        <td>
        <button class=" btn btn-dark mx-2 my-2 " onclick="edit(${i})">Edit</button>
        <button class=" btn btn-primary mx-2 my-2 " onclick="del(${i})">Delete</button>
        </td>
        
        </tr>
        `;
    }
    table += "</table>";
    show.innerHTML = table;
       
    }
}
function addbegin() {
    if (inp.value==="") {
        alert("fill in something now")
    } else{
        console.log(inp.value);
        cart.unshift(inp.value)
        
        document.getElementById("inp").value=""
        console.log(cart);
        
       displayCart()
       
    }
}
function delfirst() {
          
        cart.shift(inp.value)
        console.log(inp.value);
        document.getElementById("inp").value=""
        console.log(cart);
        
        displayCart()
       
    }

    function dellast() {
          
        cart.pop(inp.value)
        console.log(inp.value);
        document.getElementById("inp").value=""
        console.log(cart);
        
       displayCart()
       
    }
    function delall() {
          
        cart.splice(inp.value)
        document.getElementById("inp").value=""
        console.log(cart);
               
       displayCart()
       
    }

function displayCart(){
            show.innerHTML=""
            for(i=0; i<cart.length; i++) {
                show.innerHTML +=`<p>
                ${i+1}. ${cart[i]}</p>`
            }
}

function displayCart(){
    show.innerHTML=""
    let table = "<table><tr><th>S/N</th><th >Item</th></tr>";
    for(i=0; i<cart.length; i++) {
        table += `<tr><td>${i + 1}</td><td>${cart[i]}</td></tr>`;
    }
    table += "</table>";
    show.innerHTML = table;
}
function del(index){
    cart.splice(index,1, )
    displayCart()
}

var cartoon = {" kenny" "samuel" "joy" "Musa"}
for (index=0; index< cartoon.length; index++){
    var element = cartoon [index];
    console.log(index, element)

}
cartoon.map((fo,i)=>{
    console.log(i,fo);
})
cartoon.map(function(fo,i){
    console.log(i,fo);
})

    // function addItems() {
    //     if (inp.value === "") {
    //         alert("Fill in something now");
    //     } else {
    //         console.log(inp.value);
    //         cart.push(inp.value);
    
    //         document.getElementById("inp").value = "";
    //         console.log(cart);
    
    //         // Create a table
    //         let table = "<table><tr><th>S/N</th><th >Item</th></tr>";
    
    //         // Populate the table with array elements
    //         for (let i = 0; i < cart.length; i++) {
    //             table += `<tr><td>${i + 1}</td><td>${cart[i]}</td></tr>`;
    //         }
    
    //         table += "</table>";
    
    //         // Display the table
    //         show.innerHTML = table;
    //     }
    // }
    

// var arrTest= ["tolu", "tade", "isola" ]
// arrTest.splice(0,1, "akon")
