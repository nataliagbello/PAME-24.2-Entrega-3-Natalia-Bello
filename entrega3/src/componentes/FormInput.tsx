interface props{
    label: string;
    placeholder: string;
    tipo?: string;
}

export default function FormInput({label, placeholder, tipo}:props){
    return (
        <div>
            <label>{label}</label>
            <input type={tipo} className="border-2 border-gray-400 w-[100%] rounded-md p-2" placeholder={placeholder}/>   
        </div>
    );
}
