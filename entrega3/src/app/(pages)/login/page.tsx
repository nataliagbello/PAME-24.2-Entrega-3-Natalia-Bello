import FormInput from "@/components/FormInput"
import Botao from "@/components/Botao";
import Link from "next/link";
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';





//Declaração das constantes importadas

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: '700'
});



export default function Login(){
  return(
    
    <body>

      {/*Fundo amarelo*/}
      <div className= "w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-[#F9E9BF]"> 
        <div className="w-[100%] h-[10%]">
          <Link href={"/"} className="font-medium text-[#3176c5] underline">Voltar</Link>
        </div>

        {/*FLEXBOX DO MEIO*/}
        <div className="flex flex-row w-[100%] h-[80%] items-center justify-center">
          {/*PARTE DO HIDDEN*/}
          <div className="hidden lg:flex bg-[#2968B2] p-5 w-[40%] h-[90%] rounded-3xl items-center justify-center">
            <div className= "bg-[#6593c7] w-[88%] h-[88%] rounded-3xl flex flex-col justify-center ">
              <h1 className={`text-center text-[#FDBE77] ${playfair_display.className} font-black text-3xl h-[15%] p-3`}>Seja bem-vindo ao</h1>
              <div className="flex flex-col justify-center items-center">
                <Image src='/logotipo.jpg' width={330} height={330} alt={"LOGO DO HOTEL"} ></Image> {/*Inserir logo Hotel*/}
              </div>
            
            </div>
          </div>


          {/*PARTE DO APARENTE*/}
          <div className= "p-5 w-[80%] h-[90%] lg:w-[40%] bg-[#F8EB78] rounded-3xl flex items-center justify-center">
          
            <div className= "w-[90%] sm:w-[70%] h-[90%] flex flex-col justify-center">
              <h1 className={`text-center text-[#2968B2]  ${playfair_display.className} font-black text-3xl`}>Login</h1>
              <form className="p-6 flex flex-col  gap-6">

                <FormInput label="Digite seu email:" placeholder="Email" cor='[#2968B2]'/>
                <div>
                  <FormInput label="Senha" placeholder="Senha" tipo="password" cor='[#2968B2]'/>
                </div>
              
                <Link href="/"> 
                  <Botao titulo="Entrar" cor="bg-[#FFA845]"/>
                </Link>

                <div className="text-[#2968B2] flex flex-col font-medium items-center justify-center">
                  <p>Não tem uma conta?</p>
                  <Link href={"/cadastro"} className="font-black underline">Cadastre-se</Link> {/*Link pagina de cadastro - semelhante a pagina de log in */}
                </div>
            
              </form>
            </div>
          </div>
        </div>

        <div className="w-[100%] h-[10%]">
        </div>

      </div>
    </body>
  );
}




