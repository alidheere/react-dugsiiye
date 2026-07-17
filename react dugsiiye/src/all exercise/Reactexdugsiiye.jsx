
const UserCard = ({currentUser, gmail, com}) => {
    return (
        <div>
            <h2> {currentUser}</h2>
            <p> {gmail}</p>
            <p> {com}</p>
        </div>
    )
}




export default UserCard;