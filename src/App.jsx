import axios from 'axios'
import { FORM_VALUES, URL_BASE } from './consts'
import { useEffect, useState } from 'react'
import './App.css'
import Modal from './components/Modal'
import { useForm } from 'react-hook-form'
import UsersList from './components/UsersList'
import { IconPlus } from '@tabler/icons-react'


function App() {


  const [isShowModal, setIsShowModal] = useState(false)

  const [users, setUsers] = useState([])

  const [idCardToEdit, setIdCardToEdit] = useState(null)

  const { handleSubmit, register, reset, formState: { errors } } = useForm()


  const submit = (data) => {
    if (idCardToEdit) {
      updateUser(data)
    } else {
      createUser(data)
    }


  }

  const handleCloseModal = () => {
    setIsShowModal(false)
    reset(FORM_VALUES)
    setIdCardToEdit(null)
  }
  const hanldeOpenModal = () => {
    setIsShowModal(true)
  }

  const updateUser = (data) => {
    axios
      .put(URL_BASE + `/users/${idCardToEdit}/`, data)
      .then(() => {
        createAllUsers()
        handleCloseModal()
      })
      .catch((err) => console.log(err))
  }

  const createUser = (data) => {
    axios
      .post(URL_BASE + "/users/", data)
      .then(() => {
        createAllUsers()
        handleCloseModal()
        reset(FORM_VALUES)
        console.log(data)
      })
      .catch((err) => console.log(err))
  }

  const createAllUsers = () => {
    axios
      .get(URL_BASE + "/users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err))
  }
  console.log(users)



  const handleEditUsers = (user) => {
    hanldeOpenModal()
    reset(user)
    setIdCardToEdit(user.id)
  }

  
  const handleDeleteUser = (id) => {
    axios.delete(URL_BASE + `/users/${id}/`)
      .then(() => createAllUsers())
      .catch((err) => console.log(err))
  }





  useEffect(() => {
    createAllUsers()
  }, [])


  return (
    <main className='min-h-screen bg-[#FFFFFF] '>
      <header className='flex flex-col sm:flex-row justify-between py-20 px-20'>
        <div className="w-full h-full text-[#0F0F2D] text-5xl font-bold font-helvetica-neue break-words">
          <h1>Usuarios</h1>
          <hr className="border-0.5 border-[#E5E5E5] border-solid" />
        </div>

        <div className='mt-8 sm:mt-0 '>

          <button className='bg-[#555A88] px-2 py-2 text-[#302F2F] top-56 w-[200px] sm:w-[200px] h-[42px] flex flex-col-span-2' onClick={hanldeOpenModal}><IconPlus />Crear Nuevo Usuario</button>
        </div>


      </header>
      <div className='grid justify-center px-5 py-5'>
        <Modal isShowModal={isShowModal} handleCloseModal={handleCloseModal} handleSubmit={handleSubmit} register={register} submit={submit} idCardToEdit={idCardToEdit} errors={errors} />
        <UsersList users={users} handleEditUsers={handleEditUsers} handleDeleteUser={handleDeleteUser} />
        <hr className="border-0.5 border-[#E5E5E5] border-solid py-10" />
      </div>
    </main>
  )
}

export default App