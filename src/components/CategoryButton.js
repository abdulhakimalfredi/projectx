import "./TagButtonstyle.css";
export default function CategoryButton({ title, onClick }) {
  return <
    button className="CategoryButton"
    onClick={onClick}
    >{title}</button>;
}
