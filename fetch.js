// import fetch from 'node-fetch'

// async function getDataAsync(){
// try{
// const response = await fetch('https://api.sampleapis.com/beers/ale') // GET -> promise
// const data = await response.json()
// console.log(data)
// }catch(err) {
// console.error(err)  
//  }
// }
// getDataAsync()
//---------------------------------------------

// fetch('https://api.sampleapis.com/beers/ale')
// .then((response) => {
//     return response.json()
//  })

//     .then(data => {
//         console.log(data)

//     })
//     .catch((err) => {
//     console.err(err)
//     })


fetch('https://api.sampleapis.com/beers/ale')
.then(response => response.json())
.then(data => console.log(data[87]))
.catch(err => console.error(err))
