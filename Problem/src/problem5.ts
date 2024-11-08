{
  // Sample Input:
  interface Student {
    name: string;
    age: 17;
    grades: number[];
  }

  const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90],
  };

  const calculateAverageGrade = (student: Student): number => {
    const grade = student.grades;
    const total = grade.reduce((sum, grade) => sum + grade, 0);
    return total / grade.length;
  };

  const averageGradeForBob = calculateAverageGrade(student1);
  console.log(calculateAverageGrade(student1));
  // Sample Output:
  83;
}
