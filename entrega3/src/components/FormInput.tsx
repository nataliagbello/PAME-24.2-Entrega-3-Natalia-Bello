interface props{
    label: string;
    placeholder: string;
    tipo?: string;
    cor: string;
    style?: string;
}

export default function FormInput({label, placeholder, tipo, cor, style="w-[100%]"}:props){
    return (
        <div>
            <div>
                <label className={`w-[100%] font-serif text-sm font-semibold text-${cor}`}>{label}</label>
            </div>
            
            <div>
                <input type={tipo} className={`font-serif ${style} text-sm p-2 rounded-3xl`} placeholder={placeholder}/>
            </div>

        </div>
    );
} 
