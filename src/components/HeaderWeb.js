import './HeaderWeb.css';

export default function HeaderWeb() {
    return( 
        <div style={{
            width: "100%", 
            backgroundColor: "#2c3e50",
            height: "200px",
            color: "whitesmoke", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            fontSize:"30px",
            boxShadow: "0px 5px 13px rgb(0, 0, 0.4)",
            }}>
        <h1>Dev Launchpad</h1>
        </div>
    );
}

