// const myPromise = new Promise((res,rej)=>{
//       let ice_Cream = false;
//       if(ice_Cream === true){
//         res("ice_Cream mil gyi")
//       }else{
//         rej("ice_Cream nhi mili")
//       }
// })

// myPromise.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//    console.log(error);
// }).finally(()=>{
//     console.log("always run");
// })

// ==============================================

function FetchPosts(){
   return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=> response.json())
    .then((data)=> {
        console.log("Post Data",data);
    }).catch((err)=>{
        console.log("Fetching post data error",err);
    })
}

function FetchComments(){
   return fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response)=> response.json())
    .then((data)=> {
        console.log("Comments Data",data);
    }).catch((error)=>{
        console.log("Fetching comments data error",error);
    })
}

FetchPosts().then(()=>
    FetchComments()
)
// FetchPosts()
// FetchComments()