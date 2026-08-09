
const Greeting = ({currentUser, role, age}) => {
    return (
        <>

           <h1> hello {currentUser}</h1>
           <span>your role is :{role}</span>
           <span> your age is {}</span>

        </>
     
    )
}
export default Greeting;