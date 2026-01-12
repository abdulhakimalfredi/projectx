import { useState } from 'react'; // 1. استيراد useState

export default function TaskItem({ title, isCompleted }) {
    // 2. تعريف الـ State (قيمته تبدأ من الـ Prop القادم)
    const [done, setDone] = useState(isCompleted);

    // دالة للتعامل مع الضغطة
    function toggleTask() {
        setDone(!done); // تعني: اجعل القيمة عكس ما هي عليه (من true لـ false والعكس)
    }

    return (
        <div
            onClick={toggleTask} // 3. ربط الضغطة بالدالة
            style={{
                textDecoration: done ? "line-through" : "none", // نستخدم الـ state (done) هنا
                color: done ? "grey" : "black",
                fontWeight: done ? "normal" : "bold",
                padding: "10px",
                cursor: "pointer", // لتظهر علامة اليد عند الوقوف بالفأرة
                borderBottom: "1px solid #eee",
                userSelect: "none" // لمنع تحديد النص عند الضغط المتكرر
            }}
        >
            {title}
        </div>
    );
}