export default function alert({icon,message,type}){
    return (
        <div style={{
            padding: "15px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "10px 0",
            backgroundColor: type === "success" ? "#d4edda" : "#f8d7da",
            color: type === "success" ? "#155724" : "#721c24",
            border: `1px solid ${type === "success" ? "#c3e6cb" : "#f5c6cb"}`
        }}>
        
        <div>{icon}</div>
        <span>{message}</span>
        
        
        </div>

    );
}