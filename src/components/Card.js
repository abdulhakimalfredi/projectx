
export default function Card({children}){
    return (
        <div style={{
            border: "2px solid #e0e0e0" ,
            borderRadius: "15px" ,
            padding: "20px" ,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)" ,
            backgroundColor: "white"
        }} 
        >
            {children}
        </div>
    );
}