const fruits = ["Apple","Pineapple","Watermelon","Pear"]
console.log(fruits[0]);

// to add element at the end of an array
fruits.push("Orange");
fruits.push("Banana");


// to remove element at the end of an array
fruits.pop("Orange");

console.log(fruits)
// to add element at the start of an array
fruits.unshift("grapes");

// to remove element at the end of an array
fruits.shift();

// to access index of element

 const  pearIndex = fruits.indexOf("Pear");
 console.log(fruits.length-1);

 // update element
 fruits[pearIndex] = "red Pear";

//  check if sn element exist
 fruits.includes("Pear");

//  remove specific element
fruits.splice("Pear" , 2)

// Arrays using functions
fruits.forEach((fruits,index)=>{
    console.log(fruits,index);
})

// map
const postShare =post.map((item, index) => {
return{...item,shares:0}

})

post.forEach((item ,index)=>{
console.log(
    `

    ${item.username}| ${item.timestap}
    IMAGE
    ${item.likes} likes | ${itemcomments.length} comments|10
    `)
})


post.filter((item, index) =>(item.likes>50))

// REDUCE
  let acc = 0;
  for(let i = 0; i<post.length;i++){
    acc = acc + post[i].likes;
  }

// find number of comment
post.reduce((acc,item) => acc+= item.comments.length,0)