import FormInput from "@/components/FormInput"
import Botao from "@/components/Botao"
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { Chewy } from 'next/font/google'
import Link from "next/link";


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
      <div className="w-[100vw] h-[100vh] flex flex-col justify-start bg-[#fff6d9]">
        {/*HEADER */}

        <div className="p-5 w-[100%] h-[20%] flex flex-row items-center justify-start">
          <div className="p-5 w-[50%] h-[100%] flex flex-row items-center justify-start">
            <Image src='/logoAberta.jpg' width={450} height={450} alt={"LOGO DO HOTEL"}></Image>
          </div>
             
          <div className="p-5 w-[50%] h-[100%] flex flex-row items-center justify-center">
            <FormInput label="" style='w-[250%]' placeholder="Busque aqui" cor='' />
          </div>
        </div>


        {/*PARTE PRINCIPAL */}
        <div className="w-[100%] h-[80%] flex flex-row items-start justify-start">
          {/*SIDE BAR */}
          <div className="p-4 gap-6 bg-[#132C9A] flex flex-col justify-start items-center h-[100%] w-[15%]">
            <div className="gap-6 bg-[#1837bf] rounded-xl w-[85%] flex flex-col justify-center items-center h-[35%]">
              <Link href="/login" >
                <Botao titulo="Fazer login" style='w-[100%] h-[110%]' cor='bg-[#FFA845]'></Botao>
              </Link>
              
              <Link href="/cadastro">
                <Botao titulo="Cadastre-se" style='w-[100%] h-[110%]' cor='bg-[#FFA845]'></Botao>
              </Link>

              <Link href="/perfil">
                <Botao titulo="Acessar perfil" style='w-[100%] h-[110%]' cor='bg-[#FFA845]'></Botao>
              </Link>
              
            </div>

            <div className="flex flex-col bg-[#1837bf] rounded-xl items-center p-4 gap-4 w-[85%] h-[60%]">
              <h2 className="flex flex-row items-center justify-center w-[110%] text-[#fbfbfb]  ${playfair_display.className} font-medium text-md">Para mais informações, visite:</h2>
              <Link href="/servico">
                <Botao titulo="Solicitar um serviço" cor="bg-[#FFA845]"/>
              </Link>

              <Link href="/servico" >
                <Botao titulo="Detalhes do serviço" cor="bg-[#FFA845]"/>
              </Link>

              <Link href="/perfil" >
                <Botao titulo="Acesse seu perfil" cor="bg-[#FFA845]"/>
              </Link>

            </div>
          </div>

          {/*FOTO FUNDO*/}
          <div className="bg-[url(/cachorro.jpg)] bg-cover bg-no-repeat flex flex-col items-end justify-end h-[100%] w-[85%]">
            <div className="gap-8 w-[50%] h-[50%] flex flex-col justify-center items-center">
              <p className={`text-center text-white ${chewy.className} font-black text-5xl w-[70%] h-[40%] p-3`}>LUGAR DE DIVERSÃO E SEGURANÇA</p>
              <div className="w-[40%] h-[60%] items-start justify-center">
              
              <Link href="/servico" >
                <Botao titulo="SAIBA MAIS" style="w-[80%] h-[50%]" cor="bg-[#FFA845]"></Botao>
              </Link>

              </div>
            </div>
          </div>


        </div>
      </div>

    {/*SCROLL DOWN */}
    <footer className="bg-[#fff6d9] w-[100%] h-[100vh] flex flex-col items-center justify-start">

      {/*FLEX DE CIMA */}
      <div className="flex flex-row w-[100%] h-[50%] justify-start">
        <Image src='/foto3.jpg' width={600} height={600} alt={"LOGO DO HOTEL"}></Image>
        <div className="flex flex-col justify-center items-center h-[100%] w-[60%]">
          <div className="rounded-xl bg-[#e39944] h-[80%] w-[60%] flex-col">
            
            <div className="h-[50%] w-[100%] flex-col p-5">
              <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-md`}>- No Amigos Fieis, seu pet recebe todo o carinho e cuidado que merece. Oferecemos um ambiente seguro, confortável e divertido, com atenção personalizada para garantir a felicidade e bem-estar do seu cachorro.</h2>
            </div>

            <div className="h-[50%] w-[100%]">

              <div className="h-[17%] w-[100%] flex flex-row items-center justify-center">
                <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-md`}>Serviços oferecidos:</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-center justify-center">
                <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-md`}>Hospedagem de pets;</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-center justify-center">
                <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-md`}>Day Care;</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-center justify-center">
                <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-md`}>Serviço veterinário;</h2>
              </div>

              <div className="h-[16%] w-[100%] flex flex-row items-center justify-center">
                <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-md`}>Banho;</h2>
              </div>

              <div className="h-[16%] w-[100%] flex flex-row items-center justify-center">
                <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-md`}>Tosa.</h2>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/*FLEX DE BAIXO */}
      <div className="flex flex-row w-[100%] h-[50%] justify-end">
      <div className="flex flex-col justify-center items-center h-[100%] w-[60%]">
          <div className="rounded-xl bg-[#e39944] h-[80%] w-[60%]">
            <div className="h-[50%] w-[100%] flex-col p-5">
              <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-md`}>- Nosso hotel oferece áreas de hospedagem, recreação, alimentação, banho e descanso, garantindo conforto, segurança e bem-estar durante a estadia dos pets.</h2>
            </div>

            <div className="h-[50%] w-[100%]">

              <div className="h-[17%] w-[100%] flex flex-row items-center justify-center">
                <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-md`}>Endereço:</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-center justify-center">
                <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-md`}>Hotel Amigos Fieis</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-center justify-center">
                <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-md`}>Rua dos Hospedes, 123</h2>
              </div>

              <div className="h-[17%] w-[100%] flex flex-row items-center justify-center">
                <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-md`}>Bairro Central</h2>
              </div>

              <div className="h-[16%] w-[100%] flex flex-row items-center justify-center">
                <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-md`}>Cidade, Estado, CEP 00000-000</h2>
              </div>

              <div className="h-[16%] w-[100%] flex flex-row items-center justify-center">
                <h2 className={`text-[#fbfbfb]  ${playfair_display.className} font-light text-md`}>Brasil</h2>
              </div>

            </div>



          </div>
        </div>
        <Image src='/fotocerta.jpg' width={600} height={450} alt={"LOGO DO HOTEL"}></Image>
      </div>

    
    
    </footer>
    </body>
    

  );
}
