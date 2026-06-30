import { Link } from "react-router-dom";
interface Props{

    children:React.ReactNode;

    onClick?:()=>void;

    type?:"button"|"submit";

}

function Button({

    children,

    onClick,

    type="button"

}:Props){

    return(

        <Link to="/signup"

            type={type}

            onClick={onClick}

            className="w-full rounded-xl bg-neutral-900 py-3 text-white transition hover:bg-black"

        >

            {children}

        </Link>

    )

}

export default Button;