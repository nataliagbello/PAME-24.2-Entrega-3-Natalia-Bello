import FormInput from "@/components/FormInput"
import Botao from "@/components/Botao";
import Link from "next/link";
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Olho from "@/components/Olho";




//Declaração das constantes importadas

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: '700'
});



export default function Login(){
  return(
    
    <body>

      {/*Fundo amarelo*/}
      <div className= " border-2 border-blue-500 w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-[#F9E9BF]"> 
        <div className="border-2 border-green-700 w-[100%] h-[10%]">
          <Link href={"/page"} className="font-medium text-[#3176c5] underline">Voltar</Link>
        </div>

        {/*FLEXBOX DO MEIO*/}
        <div className="border-2 border-black flex flex-row w-[100%] h-[80%] items-center justify-center">
          {/*PARTE DO HIDDEN*/}
          <div className="hidden lg:flex bg-[#2968B2] p-5 w-[40%] h-[90%] rounded-3xl items-center justify-center">
            <div className= "bg-[#6593c7] border-2 border-black w-[88%] h-[88%] rounded-3xl flex flex-col justify-center ">
              <h1 className={`border-2 border-black text-center text-[#FDBE77] ${playfair_display.className} font-black text-3xl h-[20%] p-3`}>Seja bem-vindo ao</h1>
              <div className="border-2 border-green-900 flex flex-col justify-center items-center">
                <Image src='/logotipo.jpg' width={350} height={350} alt={"LOGO DO HOTEL"} ></Image> {/*Inserir logo Hotel*/}
              </div>
            
            </div>
          </div>


          {/*PARTE DO APARENTE*/}
          <div className= "p-5 w-[80%] h-[90%] lg:w-[40%] bg-[#F8EB78] rounded-3xl flex items-center justify-center">
          
            <div className= "border-2 border-blue-700 w-[90%] sm:w-[70%] h-[90%] flex flex-col justify-center">
              <h1 className={`border-2 border-black text-center text-[#2968B2]  ${playfair_display.className} font-black text-3xl`}>Login</h1>
              <form className="border-2 p-6 border-black flex flex-col  gap-6">

                <FormInput label="Digite seu email:" placeholder="Email" cor='[#2968B2]'/>
                <div>
                  <FormInput label="Senha" placeholder="Senha" tipo="password" cor='[#2968B2]'/>
                </div>
              
                <Botao titulo="Entrar" cor="bg-[#FFA845]"/>

                <div className="text-[#2968B2] flex flex-col font-medium items-center justify-center">
                  <p>Não tem uma conta?</p>
                  <Link href={"/cadastro"} className="font-black underline">Cadastre-se</Link> {/*Link pagina de cadastro - semelhante a pagina de log in */}
                </div>
            
              </form>
            </div>
          </div>
        </div>

        <div className="border-2 border-green-700 w-[100%] h-[10%]">
          <p>OLA</p>
        </div>

      </div>
    </body>
  );
}



//<input type={tipo} className={`w-[100%] font-serif placeholder-text-2xl p-2 rounded-3xl`} placeholder={placeholder}/>

