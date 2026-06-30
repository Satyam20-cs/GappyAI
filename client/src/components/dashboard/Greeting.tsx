function getGreeting() {

    const hour = new Date().getHours();

    if(hour < 12) return "Good Morning...";

    if(hour < 18) return "Good Afternoon...";

    return "Good Evening...";

}

export default function Greeting(){

    return(

<div className="mb-10">

<h1 className="text-4xl font-bold tracking-tight">

{getGreeting()}

</h1>

<p className="mt-3 text-neutral-500 text-lg">

Let's continue your job hunt.

</p>

</div>

    )

}