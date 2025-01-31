import { Playfair_Display } from '@next/font/google'

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: '700'
});

interface props {
    titulo: string;
    cor: string;
    style?:string;
    href?: string
}

export default function Botao({style, titulo, cor, href}:props){
    return(
        <button className={`p-2 text-white ${playfair_display.className} ${href} w-[100%] ${style} rounded-3xl ${cor}`}>{titulo}</button>
    );
}
