import User from "./UserCard"

const UsersList = ({users, handleEditUsers, handleDeleteUser}) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_280px)] justify-center max-w-[1000px] mx-auto gap-5 py-10 px-5">

    {
        users.map((user) => ( 
           <User key={user.id} user={user} handleEditUsers={handleEditUsers} handleDeleteUser={handleDeleteUser}/>
    ))
    }
    </section>
   
  )
}
export default UsersList