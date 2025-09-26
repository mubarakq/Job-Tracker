
interface cardProps {
    companyName: string;
    role: string;
    date: string;
    status: string;
}
const Card =({ companyName, role, status, date }: cardProps)=>{
    
    return(
        <>
            <article className="">
                <div className="w-full bg-indigo-700 text-2xl p-2.5">{companyName}</div>
                <div className="">
                    <h2 className="">{companyName}</h2>
                    <p className="">{role}</p>
                    <p className="">{date}</p>
                    <div className="">{status}</div>
                </div>
            </article>
        </>
    )
}
export default Card