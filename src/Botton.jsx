
function Botton({id}) {
const handleClick=(id)=>{
  alert('welcome back!' +id)
}
return (
  <>

  <button onClick={()=>handleClick(id)}> click me{id} </button>
  </>
)
}

export default Botton;
