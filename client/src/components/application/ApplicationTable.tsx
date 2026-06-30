import StatusBadge from "./StatusBadge";
import type { Application } from "../../types/application";

interface Props{

applications:Application[];

}

export default function ApplicationTable({

applications

}:Props){

return(

<div className="overflow-hidden rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-lg">

<table className="w-full">

<thead>

<tr className="border-b">

<th className="p-5 text-left">

Company

</th>

<th>

Role

</th>

<th>

Status

</th>

</tr>

</thead>

<tbody>

{

applications.map(app=>(

<tr

key={app._id}

className="border-b hover:bg-neutral-50"

>

<td className="p-5">

{app.company}

</td>

<td>

{app.role}

</td>

<td>

<StatusBadge

status={app.status}

/>

</td>

</tr>

))

}

</tbody>

</table>

</div>

)

}