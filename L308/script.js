let studentList = prompt("Student List").split(" ");
studentList = studentList.reverse();

studentList.forEach(student => {
  alert(student);
});
