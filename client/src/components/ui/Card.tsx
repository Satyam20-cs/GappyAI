interface Props{

    children:React.ReactNode;

}

function Card({

    children

}:Props){

    return(

        <div

            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"

        >

            {children}

        </div>

    )

}

export default Card;