import './HeaderWeb.css';

export default function HeaderWeb() {
    return( 
        <div style={{
            style: "100%", 
            backgroundColor: "teal", 
            height: "200px",
            color: "whitesmoke", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            fontSize:"30px",
            boxShadow: "0px 5px 13px rgb(0, 0, 0.4)",
            }}>
        <h1>Hakim web</h1>
        </div>
    );
}

