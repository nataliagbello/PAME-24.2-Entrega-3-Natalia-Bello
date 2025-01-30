import { Playfair_Display } from 'next/font/google'
import FormInput from "@/componentes/FormInput"
//import Botao from "@/componentes/Botao";



const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: '700'
});


export default function Cadastro() {
  return (
    <div className= "w-[100vw] h-[100vh] flex items-center justify-center bg-[#F9E9BF]"> 
        <div className= " border-black border-2 p-5 w-[90%] h-[90%] lg:w-[70%] bg-[#02479A] rounded-3xl flex flex-col items-center justify-start">
          
          <div className="border-black border-2 p-5 w-[100%] h-[15%] flex flex-col justify-center">
            <h1 className={`border-2 border-black text-center text-[#f1e255] ${playfair_display.className} font-black text-4xl`}>Cadastro</h1>
          </div>

          <div className="border-red-500 border-2 gap-8 p-5 w-[100%] h-[70%] flex flex-row justify-start">
            
            <div className="border-black border-2 p-5 w-[50%] h-[100%] flex flex-col gap-4">
              <h2 className={`border-2 border-black text-center text-[#FFA845] ${playfair_display.className} font-black text-2xl`}>Você:</h2>
              <FormInput label="Digite seu email:" placeholder="Email"/>
              <FormInput label="Digite seu email:" placeholder="Email"/>
              <FormInput label="Digite seu email:" placeholder="Email"/>
              <FormInput label="Digite seu email:" placeholder="Email"/>
            </div>
            
            <div className="border-white border-2 p-5 w-[50%] h-[100%] flex flex-col gap-4">
              <h2 className={`border-2 border-black text-center text-[#FFA845] ${playfair_display.className} font-black text-2xl`}>Seu Amigo Fiel:</h2>
              <FormInput label="Digite seu email:" placeholder="Email"/>
              <FormInput label="Digite seu email:" placeholder="Email"/>
              <FormInput label="Digite seu email:" placeholder="Email"/>
              <FormInput label="Digite seu email:" placeholder="Email"/>
            </div>

          </div>

          <div className="border-green-600 border-2 p-5 w-[100%] h-[15%] items-start">
          </div>

        </div>  
    </div>
  );
}



  