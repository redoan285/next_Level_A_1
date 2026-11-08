 function multiplyValue(value: number, multiplier?: number): number {
  return value * (multiplier ?? 2);
}






function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  return value ? "Active" : "Inactive";
}





function formatCoordinate(coordinate: readonly [number, number, string]): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}




function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

console.log(concatenateArrays(["a", "b"], ["c", "d"]));

console.log(concatenateArrays([1, 2], [3, 4], [5]));












 interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter((course: Course) => course.isPublished && course.students >= minStudents);
}



const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

console.log(getPopularCourses(courses, 80));


















function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item: T) => item[key]);
}



