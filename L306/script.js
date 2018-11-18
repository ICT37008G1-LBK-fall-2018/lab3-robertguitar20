let studentList = prompt("Student names").split(" "),
  studentName = prompt("Find student");

studentList.forEach(student => {
  if (student.includes(studentName)) {
    alert(student);
  }
});
