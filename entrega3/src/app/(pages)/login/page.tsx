import FormInput from "@/componentes/FormInput"
import Botao from "@/componentes/Botao";
import Link from "next/link";




export default function Login(){
  return(
    
    <div className= "w-[100vw] h-[100vh] flex items-center justify-center bg-[#F9E9BF]"> 
      <div className= "p-5 w-[85%] h-[75%] bg-[#F8EB78] rounded-3xl flex items-center justify-center">
        <div className="hidden md:flex bg-green-500 w-[45%] border-2 border-black h-[90%]">

        </div>
        <div className= "border-2 border-blue-700 w-[90%] md:w-[50%] h-[90%] flex flex-col justify-center">
          <h1 className="border-2 border-black text-center text-[#2968B2] font-playfair">Login</h1>
          <form className="border-2 border-black flex flex-col gap-4">
            <FormInput label="Usuário" placeholder="email@email"/>
            <FormInput label="Senha" placeholder="Senha" tipo="password"/>
            <Botao titulo="Login" cor="bg-purple-500 p-2"/>
            <Botao titulo="Cadastrar" cor="bg-purple-500 p-2"/>
            <Link href={"/login"}>Clique aqui LOGIN</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

