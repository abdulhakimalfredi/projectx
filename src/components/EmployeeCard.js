


export default function EmployeeCard({name,position,salary}){
    return (
        <div>
            <h2>{name}</h2>
            <h4>{position}</h4>
            <p>{salary}</p>
        </div>
    );
}