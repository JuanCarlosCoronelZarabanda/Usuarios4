import User from "./UserCard"

const UsersList = ({users, handleEditUsers, handleDeleteUser}) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 max-w-screen-xl mx-auto py-10 px-5">

    {
        users.map((user) => ( 
           <User key={user.id} user={user} handleEditUsers={handleEditUsers} handleDeleteUser={handleDeleteUser}/>
    ))
    }
    </section>
   
  )
}
export default UsersList