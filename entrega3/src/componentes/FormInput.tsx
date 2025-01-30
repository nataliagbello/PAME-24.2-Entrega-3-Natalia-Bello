interface props{
    label: string;
    placeholder: string;
    tipo?: string;
}

export default function FormInput({label, placeholder, tipo}:props){
    return (
        <div>
            <div>
                <label className="w-[100%] font-serif text-xs font-semibold text-[#2968B2]">{label}</label>
            </div>
            
            <div>
                <input type={tipo} className={`w-[100%] font-serif p-2 rounded-3xl`} placeholder={placeholder}/>
            </div>

        </div>
    );
} 
