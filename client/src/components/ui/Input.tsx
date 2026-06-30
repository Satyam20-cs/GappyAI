interface Props{

    placeholder:string;

    type?:string;

}

function Input({

    placeholder,

    type="text"

}:Props){

    return(

        <input

            type={type}

            placeholder={placeholder}

            className="w-full rounded-xl border border-neutral-300 bg-white p-3 outline-none transition focus:border-black"

        />

    )

}

export default Input;