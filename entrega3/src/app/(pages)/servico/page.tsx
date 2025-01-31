import { Playfair_Display } from 'next/font/google'
import FormInput from "@/components/FormInput"
import Botao from "@/components/Botao";
import Link from "next/link";


const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: '700'
});


export default function Servico() {
  return (
    <div className= "w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-[#F9E9BF]"> 
      <div className="w-[100%] h-[10%]">
          <Link href={"/"} className="font-medium text-[#3176c5] underline">Voltar</Link>
      </div>
        <div className= " w-[100%] h-[90%] lg:w-[70%] bg-[#f5ac59] rounded-3xl flex flex-col items-center justify-start">
          
          <div className="p-5 w-[100%] h-[15%] flex flex-col justify-center">
            <h1 className={`text-center text-[#3176c5] ${playfair_display.className} font-black text-2xl`}>Detalhes dos Serviços</h1>
          </div>

          <div className="gap-8 p-5 w-[100%] h-[70%] flex flex-row justify-start">
            
            <div className="shadow-xl rounded-3xl bg-[#326db1] p-5 w-[50%] h-[100%] flex flex-col gap-4">
              <h2 className={`text-center text-[#FFA845] ${playfair_display.className} font-black text-2xl`}>Você:</h2>
              <FormInput label="Digite seu nome:" placeholder="Nome" cor='[#f1e255]'/>
              <FormInput label="Digite seu CPF:" placeholder="CPF" cor='[#f1e255]'/>
              <FormInput label="Digite seu email:" placeholder="Email" cor='[#f1e255]'/>
              <FormInput label="Digite uma senha:" placeholder="Senha" cor='[#f1e255]' tipo='password'/>
            </div>
            
            <div className="shadow-xl rounded-3xl bg-[#326db1] p-5 w-[50%] h-[100%] flex flex-col gap-4">
              <h2 className={`text-center text-[#FFA845] ${playfair_display.className} font-black text-2xl`}>Seu Amigo Fiel:</h2>
              <FormInput label="Digite o nome do seu pet:" placeholder="Nome pet" cor='[#f1e255]'/>
              <FormInput label="Digite a raça do seu pet:" placeholder="Raça" cor='[#f1e255]'/>
              <FormInput label="Digite a idade do seu pet:" placeholder="Idade pet" cor='[#f1e255]'/>
              <FormInput label="Macho ou fêmea?" placeholder="Digite uma opção" cor='[#f1e255]'/>
            </div>

          </div>

          <div className="p-2 w-[40%] h-[15%] flex flex-col items-center justify-center">
            <Link href="/login"> 
              <Botao titulo="Solicitar serviço" cor="bg-[#3176c5]"/>
            </Link>
          </div>

        </div>  
    </div>
  );
}



  