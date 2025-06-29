function loadCourses() {
    const courses = [
        "Data Science",
        "Human Computer Interaction",
        "Electronic Commerce",
        "Programming in Net",
        "Object Oriented Programming",
        "Computer Organisation",
        "System Analysis & Design",
        "MPU2113 Philosophy/MPU 2133 BM Komunikasi",
        "Information Tech & Application"
    ];

    const courseList = document.getElementById("courseList");
    courseList.innerHTML = "";

    courses.forEach(course => {
        const li = document.createElement("li");
        li.textContent = course;
        courseList.appendChild(li);
    });
}