
const Greeting=({inloggin})=>{
    // option 1
// if(inloggin){
//     return <h2> welcome back</h2>
// }else{
//     return <h2> plase sing</h2>
// }
// option 2
return <h1> {inloggin ? "welcome back": "plase sing in"}</h1>
}

export default Greeting;