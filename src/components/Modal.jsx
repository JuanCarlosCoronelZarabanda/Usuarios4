import { IconSquareRoundedXFilled } from "@tabler/icons-react"

const Modal = ({ isShowModal, handleCloseModal, register, handleSubmit, submit, idCardToEdit, errors }) => {

  return (
    <section className={`absolute bg-[#02062b4f] z-50 top-0 bottom-0 right-0 left-0 flex justify-center items-center px-3 transition-opacity duration-500  ${isShowModal ? "visible opacity-100" : "invisible opacity-0"}`}>

      <form onSubmit={handleSubmit(submit)} className="bg-[#ffffff]  p-5  grid gap-3 sm:w-[min(450px,_100%)] h-[706px] w-[350px] overflow-hidden relative">
        <button onClick={handleCloseModal} type="button" className="absolute top-2 right-2 text-red-600 "> <IconSquareRoundedXFilled /> </button>
        <div className="grid m-2">
          <span className="text-3xl font-bold font-helvetica-neue py-4">Nuevo usuario</span>
          <label className="text-start text-black" htmlFor="">Correo</label>
          <input className='border-2 border-[#E5E5E5]  outline-none  p-1 rounded-md  px-3 ' id='email' {...register("email", {
            required: {
              value: true,
              message: "Este campo es requerido",
            },
            maxLength: {
              value: 150,
              message: "Maximo 150 caracteres"
            }
          })} type="text" />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>
        <div className="grid m-2">
          <label className="text-start text-black" htmlFor="password">Clave</label>
          <input className='border-2 outline-none border-[#E5E5E5]  p-1 rounded-md  px-3' id='password' {...register("password")} type="text" />
        </div>
        <div className="grid m-2">
          <label className="text-start text-black" htmlFor="first_name">Nombre</label>
          <input className='border-2 outline-none border-[#C3C1C1]  p-1 rounded-md  px-3' id='first_name' {...register("first_name")} type="text" />
        </div>
        <div className="grid m-2">
          <label className="text-start text-black" htmlFor="last_name">Apellido</label>
          <input className='border-2 outline-none border-[#C3C1C1]   p-1 rounded-md  px-3' id='last_name' {...register("last_name")} type="text" />
        </div>
        <div className="grid m-2">
          <label className="text-start text-black" htmlFor="birthday">Fecha De Nacimiento</label>
          <input className='border-2  outline-none border-[#C3C1C1]  p-1 rounded-md px-3' id='birthday' {...register('birthday')} type="date" />
        </div>
        <div className="grid m-2">
          <label className="text-start text-black" htmlFor="image_url">Foto URL_</label>
          <input className='border-2 outline-none border-[#C3C1C1]  p-1 rounded-md px-3' id='image_url' {...register('image_url')} type="text" />
        </div>

        <div className="grid justify-center gap-3">
          <button className="bg-[#555A88] text[#302F2F]  transition-all w-52 text-white" type='submit'>
            {
              idCardToEdit ? "Guardad cambios" : "Agregar Nuevo Usuario"
            }
          </button>
        

        </div>
      </form>

    </section>
  )
}
export default Modal