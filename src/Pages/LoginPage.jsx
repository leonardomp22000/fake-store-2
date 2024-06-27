import { toast } from "sonner";
import { login } from "../api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";
export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false)

  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm();

  async function onSubmit(data) {
    try {
      const token = await login(data.username, data.password);
      window.localStorage.setItem("token", token);

      if (token) {
        window.localStorage.setItem("token", token);
        toast.success("Bienvenido");
        navigate("/productos");
      } else {
        toast.error("usuario o contraseña incorrectos");
        setError("root.credentials", {
          type: "manual",
          message: "Credenciales invalidas ",
        }); // root se pone cuando no es un error especifico del input    setError("username", {type: "manual", message: "usuario invalido"}) username seria el nombre del input
      }
    } catch (error) {
      toast.error("Error al iniciar sesion");
      console.error("[login error]", error);
    }
  }

  function handleShowHidePassword() {
  //  if(showPassword === true){
  //    setShowPassword(false)
  //  }else{
  //    setShowPassword(true)
  //  }

    setShowPassword(!showPassword)
    
  }
  return (
    <main className="flex justify-center items-center flex-col gap-4 w-full min-h-dvh">
      <h1 className="text-4xl font-bold text-center">Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(
          "border border-white/50 rounded p-4 flex flex-col gap-4 max-w-sm w-full text-black",
          { "border-red-500": errors.root?.credentials }
        )}
      >
        <input
          type="text"
          placeholder="user"
          className="border border-withe/50 rounded p-2"
          {...register("username", {
            required: { value: true, message: "Nombre de usuario requerido" },
          })}
        />

        <input
          type= { showPassword ? 'text': 'password' }
          placeholder="password"
          className="border border-withe/50 rounded p-2"
          {...register("password", {
            required: { value: true, message: "Contraseña requerida" },
          })}
        />
        <span className="text-xs text-white"
        onClick={handleShowHidePassword}
        > { showPassword ? '👁️ Ocultar' : '👁️ Mostrar'} password</span>



        {errors.root?.credentials && (
          <p className="text-red-500 text-center"> Credenciales invalidas</p>
        )}
        <button className="bg-teal-400 p-2 text-black">Ingresar</button>
      </form>
    </main>
  );
}
