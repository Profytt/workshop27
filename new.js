const APIURL = 'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/';
const data = [];

async function getData() {
const response =  await fetch(APIURL) 

const newData = await respnse.json()

console.log(newData)
}

