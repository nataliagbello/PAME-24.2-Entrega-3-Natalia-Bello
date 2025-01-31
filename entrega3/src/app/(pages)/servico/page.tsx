import { Playfair_Display } from 'next/font/google'
import Botao from "@/components/Botao";
import Link from "next/link";


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
        <div className= " w-[100%] h-[90%] lg:w-[70%] bg-[#f5ac59] rounded-3xl flex flex-col items-center justify-start">
          
          {/*HEADER*/}
          <div className="p-5 w-[100%] h-[8%] flex flex-col justify-center">
            <h1 className={`text-center text-[#3176c5] ${playfair_display.className} font-black text-2xl`}>Detalhes dos Serviços</h1>
          </div>

          {/*DOIS BLOCOS AZUIS */}
          <div className="gap-8 p-5 w-[100%] h-[85%] flex flex-row justify-start">
            

            {/*PRIMEIRO BLOCO AZUL*/}
            <div className="shadow-xl rounded-3xl bg-[#326db1] p-5 w-[50%] h-[100%] flex flex-col gap-4">
            <div className="h-[40%] w-[100%] p-4">

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-lg`}>Hospedagem de pets:</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                 <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Porte pequeno: R$125,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Porte médio: R$150,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Porte grande: R$175,00</h2>
              </div>


              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}></h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}></h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-lg`}>Serviço veterinário:</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Consulta inicial: R$175,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Consulta de retorno: R$110,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Consulta com especialista: R$350,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}></h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}></h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-lg`}>Porte Pequeno (até 10 kg):</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Banho simples: R$60,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Banho completo: R$80,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Tosa higiênica: R$50,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Tosa completa (estática): R$100,00</h2>
              </div>
            </div>



            </div>
            

            {/*SEGUNDO BLOCO AZUL*/}
            <div className="shadow-xl rounded-3xl bg-[#326db1] p-5 w-[50%] h-[100%] flex flex-col gap-3">
              <div className="h-[40%] w-[100%] p-4">

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-lg`}>Porte médio (10 a 25 kg):</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                 <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Banho simples: R$90,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Banho completo: R$120,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Tosa higiênica: R$70,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Tosa completa (estética): R$150,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}></h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-lg`}>Porte grande (mais de 25 kg):</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                 <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Banho simples: R$130,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Banho completo: R$180,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Tosa higiênica: R$100,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Tosa completa (estética): R$250,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}></h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-lg`}>Day Care (diárias):</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Porte pequeno (até 10 kg): R$70,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Porte médio (10 a 25 kg): R$80,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Porte grande (mais de 25 kg): R$50,00</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-start justify-start">
                <h2 className={`text-[#d5d0d0]  ${playfair_display.className} font-light text-md`}>- Tosa completa (estática): R$100,00</h2>
              </div>
            </div>



            </div>

          </div>

          <div className="p-2 w-[40%] h-[8%] flex flex-col items-center justify-center">
            <Link href="/login"> 
              <Botao titulo="Solicitar serviço" cor="bg-[#3176c5]"/>
            </Link>
          </div>

        </div>  
    </div>
  );
}








