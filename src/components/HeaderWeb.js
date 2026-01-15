import './HeaderWeb.css';

export default function HeaderWeb() {
    return( 
        <div style={{
            width: "100%", 
            backgroundColor: "#162432ff",
            height: "200px",
            color: "whitesmoke", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            fontSize:"30px",
            boxShadow: "0px 5px 13px rgb(0, 0, 0.4)",
            }}>
        <h1 style={{textAlign:"center"}}>Full-Stack Developer 
            <br/>
            Your jouerny start from here..
            </h1>
        </div>
    );
}

