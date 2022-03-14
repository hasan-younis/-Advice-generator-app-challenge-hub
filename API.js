const ID = document.getElementById('advId');
const Title = document.getElementById('advTitle');
const adviceContainer = document.querySelector('.advice')
const spinner = document.getElementById('spinner');

// const fetching = () => {
//     adviceContainer.style.visibility='hidden'
//     spinner.removeAttribute('hidden')
//     fetch("https://api.adviceslip.com/advice")
//     .then((res)=> {
//         res.json().then((data)=>{
//             console.log(data)
//             adviceContainer.style.visibility="visible"
//             spinner.setAttribute('hidden','hidden')
//             ID.innerHTML = ` ${data.slip.id}`;
//             Title.innerHTML = `"${data.slip.advice}"`;

//         })
//     })
    
    
// }

const fetching = async () => {
    
    adviceContainer.style.visibility='hidden'
    spinner.removeAttribute('hidden')
    let respons= await fetch("https://api.adviceslip.com/advice")
    let data = await respons.json()
    adviceContainer.style.visibility="visible"
    spinner.setAttribute('hidden','hidden')
    ID.innerHTML = ` ${data.slip.id}`;
    Title.innerHTML = `"${data.slip.advice}"`;

        
}
fetching()
