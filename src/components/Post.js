
export default function Post({title,content, link, category}) {
  return (
    <div style={{
        padding: "10px",
        borderBottom: "1px solid #eee",
        margin: "25px",
        
        }}>
      <h2 className="post-title">{title}</h2>
      <hr />
      <p className="post-body">{content}</p>
      <a> </a>
    </div>
  );
}



