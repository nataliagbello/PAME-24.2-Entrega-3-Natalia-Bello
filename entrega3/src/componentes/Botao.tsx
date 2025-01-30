import { Playfair_Display } from '@next/font/google'

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: '700'
});

interface props {
    titulo: string;
    cor: string;
}

export default function Botao({titulo, cor}:props){
    return(
        <button className={`p-2 text-#FFFFFF ${playfair_display.className} w-[100%] rounded-3xl ${cor}`}>{titulo}</button>
    );
}
