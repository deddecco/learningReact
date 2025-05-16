const Content = ()=>{

const handleNameChange = () =>{
const names = ['Bob', 'Kevin', 'Andre'];
const int = Math.floor(Math.random() * 3);
return names[int];
}

const handleClick =() => {
console.log('You clicked it!')
}

const handleClick2 =(name) => {
 console.log(`${name} clicked it!`)
 }

 const handleClick3 =(e) => {
   console.log(e.target.innerText)
   }

return(
<main>
<p onDoubleClick = {handleClick}>Hello {handleNameChange()}!</p>
<button onDClick ={handleClick}>Click It!</button>
<button onClick ={() => handleClick2('Andre')}>Click It Again!</button>
<button onClick ={(e) => handleClick3(e)}>Click It Again!</button>
</main>
)

}

export default Content;