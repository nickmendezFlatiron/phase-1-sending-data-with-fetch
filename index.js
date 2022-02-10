// Add your code here
function submitData(userName,userEmail){
  return fetch('http://localhost:3000/users', {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json',
      Accept: 'application/json'
    } ,
    body : JSON.stringify({
      name : `${userName}` ,
      email : `${userEmail}`
    })
  })
  .then(res => res.json())
  .then(userObj =>{
    document.body.innerHTML = `id : ${userObj.id}`
  })
  // .then(userObj =>{
  //   const p = document.createElement('p')
  //   p.innerText = `name : ${userObj.name}
  //                  email : ${userObj.email}
  //                  id : ${userObj.id}`
  //   document.body.appendChild(p)
  // })
  .catch(error => {let node = document.createElement('script');
  node.appendChild(document.createTextNode(error));
  document.body.appendChild(node);}) 
}