export default function LearnRoute({ setActivePath }) {
  const paths = [
    // من الكود القديم:
    { id: "General", title: "General" },
    { id: "FrontEnd", title: "Front-End Development" },
    { id: "BackEnd", title: "Back-End Development" },
  ];
  return (
    <div>
      <h2>Learn Route</h2>
      <ul>
        {paths.map((path) => (
          <li key={path.id}>{path.title}</li>
        ))}
      </ul>
    </div>
  );
}
