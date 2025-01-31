import { Playfair_Display } from 'next/font/google'
import Botao from "@/components/Botao";
import Link from "next/link";
import Image from 'next/image';



const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: '700'
});


export default function Servico() {
  return (

//HEADER
    <div className= "w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-[#F9E9BF]"> 
      <div className="w-[100%] h-[10%]">
          <Link href={"/"} className="font-medium text-[#3176c5] underline">Voltar</Link>
      </div>

        {/*FUNDO*/}
        <div className= " w-[100%] h-[90%] lg:w-[70%] bg-[#f9f070] rounded-3xl flex flex-col items-center justify-start">
          
          {/*HEADER*/}
          <div className="p-5 w-[100%] h-[8%] flex flex-col justify-center">
            <h1 className={`text-center text-[#3176c5] ${playfair_display.className} font-black text-2xl`}>Seu perfil</h1>
          </div>

         
          <div className="gap-8 p-5 w-[100%] h-[85%] flex flex-row justify-center">
            
            {/*PRIMEIRO BLOCO AZUL*/}
            <div className="shadow-xl rounded-3xl bg-[#326db1] p-5 w-[50%] h-[100%] flex flex-col gap-4">
            <div className="h-[40%] w-[100%] p-4 flex flex-row  justify-center items-center">
              <Image src='/fotook.jpg' width={170} height={170} alt={"LOGO DO HOTEL"}></Image>
              
            </div>

            <div className="h-[50%] w-[100%] p-4">
              <div className="h-[17%] w-[100%] flex flex-row items-start justify-center">
                 <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-lg`}>Nome completo: Fulana</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-center">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-lg`}>CPF: 000 000 000 00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-center">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-lg`}>Email: fulana@email.com.br</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-center">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-lg`}>Nome do pet: Tobias</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-center">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-lg`}>Raça do pet: Yorkieshire</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-center">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-lg`}>Idade do pet: 4 anos</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-center">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-lg`}>Macho ou Fêmea? Macho</h2>
              </div>
              






            </div>
           
            

            


            

          </div>


        </div>  
    </div>
    </div>
  );
}








