interface props {
    titulo: string;
    cor: string;
}

export default function Botao({titulo, cor}:props){
    return(
        <button className={`p-2 w-[100%] border-2 rounded-lg border-purple-600 ${cor}`}>{titulo}</button>
    );
}
