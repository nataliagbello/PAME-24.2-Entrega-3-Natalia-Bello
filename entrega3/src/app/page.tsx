import FormInput from "@/components/FormInput"
import Botao from "@/components/Botao"
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { Chewy } from 'next/font/google'

//Declaração das constantes importadas

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: '700'
});

const chewy = Chewy({
  subsets: ["latin"],
  weight: '400'
});


export default function Inicio() {
  return (
    <body>
      {/*PRIMEIRA PARTE */}
      <div className="border-2 border-blue-500 w-[100vw] h-[100vh] flex flex-col justify-start bg-[#fff6d9]">
        {/*HEADER */}

        <div className="border-2 p-5 border-black w-[100%] h-[20%] flex flex-row items-center justify-start">
          <div className="border-2 p-5 border-red-600 w-[50%] h-[100%] flex flex-row items-center justify-start">
            <Image src='/logoAberta.jpg' width={450} height={450} alt={"LOGO DO HOTEL"}></Image>
          </div>
             
          <div className="border-2 p-5 border-purple-600 w-[50%] h-[100%] flex flex-row items-center justify-items-stretch">
            <FormInput label="" placeholder="Busque aqui" cor='' />
          </div>
        </div>


        {/*PARTE PRINCIPAL */}
        <div className="border-2 border-green-600 w-[100%] h-[80%] flex flex-row items-start justify-start">
          {/*SIDE BAR */}
          <div className="border-2 bg-[#132C9A] border-purple-600 flex flex-col items-center justify-center h-[100%] w-[15%]">
          </div>

          {/*FOTO FUNDO*/}
          <div className="border-2 border-black flex flex-col items-end justify-end h-[100%] w-[85%]">
            <div className="border-2 border-black gap-8 bg-green-500 w-[50%] h-[50%] flex flex-col justify-center items-center">
              <p className={`border-2 border-black text-center text-white ${chewy.className} font-black text-5xl w-[70%] h-[40%] p-3`}>LUGAR DE DIVERSÃO E SEGURANÇA</p>
              <div className="border-2 border-white w-[40%] h-[60%] items-start justify-center">
                <Botao titulo="SAIBA MAIS" cor="bg-[#FFA845]"></Botao>
              </div>
            </div>
          </div>


        </div>
      </div>

    {/*SCROLL DOWN */}
    <footer className="border-2 border-red-700 w-[100%] h-[100vh] flex flex-row items-center justify-center">

    
    </footer>
    </body>
    

  );
}
