import FormInput from "@/componentes/FormInput"
import Botao from "@/componentes/Botao";
import Link from "next/link";
import { Playfair_Display } from '@next/font/google'
import Image from 'next/image'



const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: '700'
});



export default function Login(){
  return(
    
    <body>

      {/*Fundo amarelo*/}
      <div className= "w-[100vw] h-[100vh] flex items-center justify-center bg-[#F9E9BF]"> 


      {/*PARTE DO HIDDEN*/}
        <div className="hidden md:flex bg-[#2968B2] p-5 w-[85%] h-[75%] rounded-3xl items-center justify-center">
          <div className= "bg-[#6593c7] border-2 border-black w-[88%] h-[88%] rounded-3xl flex flex-col justify-center ">
            <h1 className={`border-2 border-black text-center text-[#FDBE77] ${playfair_display.className} font-black text-2xl`}>Seja bem-vindo ao</h1>
            <Image src='/public/logoFechada.jpg}' width={350} height={350} alt={""} ></Image> {/*Inserir logo Hotel*/}
          </div>
        </div>


      {/*PARTE DO APARENTE*/}
        <div className= "p-5 w-[85%] h-[75%] bg-[#F8EB78] rounded-3xl flex items-center justify-center">
          
          <div className= "border-2 border-blue-700 w-[90%] md:w-[80%] h-[90%] flex flex-col justify-center">
            <h1 className={`border-2 border-black text-center text-[#2968B2]  ${playfair_display.className} font-black text-3xl`}>Login</h1>
            <form className="border-2 p-6 border-black flex flex-col  gap-6">
              <div>
                <FormInput label="Digite seu email:" placeholder="Email"/>
              </div>
              
              <div>
                <FormInput label="Senha" placeholder="Senha" tipo="password"/>
              </div>

              
              <Botao titulo="Entrar" cor="bg-[#FFA845]"/>

              <div className="text-[#2968B2] flex flex-col font-medium items-center justify-center">
                <p>Não tem uma conta?</p>
                <Link href={"/cadastro"}>Cadastre-se</Link> {/*Link pagina de cadastro - semelhante a pagina de log in */}
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}

