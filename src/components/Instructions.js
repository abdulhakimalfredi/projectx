const globalInstructions = { 
  id: 1, 
  title: "Instructions You Need To Consider", 
  // جعلنا المحتوى مصفوفة لنتمكن من عمل map عليها بالداخل
  content: [
    "Complete all courses ordered.",
    "Please make sure to manage your time.",
    "After you complete all courses, you will be asked to make a sample project.",
    "If you have any issues learning any skill, consult your colleagues or your manager.",
    "You must practice the things you learn to fully understand it.",
    "All courses are Free, but if you have issues accessing any of them, please consult your manager.",
    "You should be able to complete each path in 3 - 4 weeks.",
    "Please take your time to learning and be focused, do not hurry because this will make you learn nothing."

  ],
  category: "Instructions" 
};

const Inst = globalInstructions.content.map((point, index)=> (<li key={index}>{point}</li>))

export default function Instructions(){
    return (
        <div>
            <h2>{globalInstructions.title}</h2>
            <ul> 
            {Inst}
            </ul>
        </div>

    );
}