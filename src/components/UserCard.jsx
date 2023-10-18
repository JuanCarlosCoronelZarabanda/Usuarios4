import { IconGift, IconTrash } from "@tabler/icons-react"
import { IconPencil } from "@tabler/icons-react"



const User = ({ user, handleDeleteUser, handleEditUsers }) => {
  return (
    <div className="w-full  bg-white rounded-md border border-1 border-[#E5E5E5] border-solid p-3">

      <article>

        <h2 className="w-[400px] text-xl p-3 text-[#0F0F2D] grid grid-cols-[repeat(auto-fit,_280px)]">
          <div>
            {user.first_name} 
          </div>
          <div>
            {user.last_name}
          </div>
           </h2>
        <hr className="border-0.5 border-[#E5E5E5] border-solid" />



        <ul className="gap-2">
          <div className="grid grid-cols pt-4 text-sm gap-1 ">
            <li className="text-[#D3D3D3]">CORREO: </li>
            <li className="text-[#302F2F]">{user.email}</li>

          </div>
          <div className="grid">
            <li className="text-[#D3D3D3]">CUMPLEAÑOS:</li>

            <li className="text-[#302F2F] w-[200px] sm:w-[200px] h-[20px] grid-cols-2 mt-0 pt-2 sm:mt-0 flex gap-1 items-center"><IconGift />{user.birthday}</li>

          </div>
        </ul>
        <div className="top-2 right-2 flex gap-2 justify-end">


          <button onClick={() => handleDeleteUser(user.id)} className="w-9 h-9 border-2 border-[#D93F3F] rounded-md flex justify-center transition-all duration-200 items-center mt-2 mr-2 text-black bg-[#D85D5D]">
            <IconTrash className="text-[#ffffff]" />
          </button>


          <button onClick={() => handleEditUsers(user)} className="w-9 h-9 bg-[#F6F6F6] border-2 border-[#BDBDBD] rounded-md mt-2 flex justify-center items-center transition-all duration-200 text-black ">
            <IconPencil />

          </button>
        </div>


      </article>
    </div>
  )
}
export default User