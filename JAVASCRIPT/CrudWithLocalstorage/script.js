const form = document.getElementById("register-form")
const mainContent = document.getElementById("mainContent")


form.addEventListener("submit",(e)=>{
   e.preventDefault();

   console.log(e);

     let user_name = e.target.username.value;
     let user_email = e.target.email.value;
     let user_password = e.target.password.value;

     let user_data = JSON.parse(localStorage.getItem("userDetails")) ?? [];// string -> js object 
 
     user_data.push({
        "user_name":user_name,
        "user_email": user_email,
        "user_password":user_password
     })

     localStorage.setItem("userDetails",JSON.stringify(user_data))
     e.target.reset();
     displayData();
    //  console.log(e);
})

function displayData(){

    let user_data =   JSON.parse(localStorage.getItem("userDetails")) ?? [];
    let finalData = "";
    user_data.forEach((element,i)=>{
          finalData += `<div>
            <button onClick="removeData(${i})">&times;</button>
            <h3>Name :</h3>
            <div>${element.user_name}</div>
             <h3>Email :</h3>
            <div>${element.user_email}</div>
             <h3>Password :</h3>
            <div>${element.user_password}</div>
          </div>`
    })
    mainContent.innerHTML = finalData;
}

function removeData(ind){
        let user_data =   JSON.parse(localStorage.getItem("userDetails")) ?? [];
        user_data.splice(ind,1);
        localStorage.setItem("userDetails",JSON.stringify(user_data));
        displayData()
}

displayData();