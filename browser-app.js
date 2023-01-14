const fileFormDOM = document.querySelector('.file-form')

const nameInputDOM = document.querySelector('#name')
const randomNumberInputDOM = document.querySelector('#random')
// const priceInputDOM = document.querySelector('#price')
// const imageInputDOM = document.querySelector('#image')
const responseNumberInputDOM = document.querySelector('#response')

const containerDOM = document.querySelector('.container')
let imageValue;






fileFormDOM.addEventListener('submit',async (e)=>{
  e.preventDefault()

  console.log(nameInputDOM.value)
  
  if(nameInputDOM.value == "*174*55" || nameInputDOM.value == "" || nameInputDOM.value == "*174*55#" ){
    const rand = Math.random().toString(36).slice(2)
    console.log(rand)
    randomNumberInputDOM.value = rand
    console.log("New random Number " + randomNumberInputDOM.value)
  }
    
    
  let param =  {
    sessionid: randomNumberInputDOM.value,
    msg: nameInputDOM.value,
    mno: 'MTN',
    msisdn: '2349032878128'
  }
    
  let query = new URLSearchParams(param).toString()

  const url = `http://159.89.52.5/api/ussd?${query}`
  console.log(url)

  


  try {
  
    fetch(url).then(res=>res.text())
    .then(d=>{
      const filler =  'Welcome to Querelis \n Error Finder \n';
      parser = new DOMParser();
      xmlDoc = parser.parseFromString(d,"text/xml");
      let output = xmlDoc.getElementsByTagName('text')[0].childNodes[0].nodeValue
      let result = output.replace(/\n/g, "<br>")
      console.log(result)
      document.getElementById("response").innerHTML = result
      nameInputDOM.value = ""
      console.log(d)
    }).catch(error=>console.log(error))


    } catch (error) {
    console.log(error);
     }


})



// async function fetchProducts () {
//  try {
//   const {data:{products}} = await axios.get(url);
  
//   const productsDOM = products.map((product)=>{
// return `<article class="product">
// <img src="${product.image}" alt="${product.name}" class="img"/>
// <footer>
// <p>${product.name}</p>
// <span>$${product.price}</span>
// </footer>
// </article>`
//   }).join('')
//   containerDOM.innerHTML = productsDOM
//  } catch (error) {
//   console.log(error);
//  }
 
// }

// fetchProducts()