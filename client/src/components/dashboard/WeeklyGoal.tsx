interface Props{

    current:number;

    goal:number;

}

export default function WeeklyGoal({

current,

goal

}:Props){

const percent=Math.min((current/goal)*100,100);

return(

<div className="rounded-3xl border border-white/40 bg-white/70 p-6 backdrop-blur-xl shadow-lg">

<div className="flex justify-between">

<h2 className="font-semibold">

Weekly Goal

</h2>

<p className="text-neutral-500">

{current}/{goal}

</p>

</div>

<div className="mt-5 h-3 overflow-hidden rounded-full bg-neutral-200">

<div

style={{width:`${percent}%`}}

className="h-full rounded-full bg-neutral-900 transition-all duration-700"

/>

</div>

<p className="mt-4 text-sm text-neutral-500">

You're only {goal-current} applications away!

</p>

</div>

)

}