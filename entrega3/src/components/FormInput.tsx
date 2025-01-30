interface props{
    label: string;
    placeholder: string;
    tipo?: string;
    cor: string;
    width?: string;
}

export default function FormInput({label, placeholder, tipo, cor, width}:props){
    return (
        <div>
            <div>
                <label className={`w-[100%] font-serif text-sm font-semibold text-${cor}`}>{label}</label>
            </div>
            
            <div>
                <input type={tipo} className={`w-[100%] font-serif text-sm p-2 rounded-3xl`} placeholder={placeholder}/>
            </div>

        </div>
    );
} 
