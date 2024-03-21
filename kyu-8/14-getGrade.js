// 14 - Grasshopper - Grade book
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

const getGrade = (s1, s2, s3) =>
  (s1 + s2 + s3) / 3 >= 90
    ? "A"
    : (s1 + s2 + s3) / 3 >= 80
    ? "B"
    : (s1 + s2 + s3) / 3 >= 70
    ? "C"
    : (s1 + s2 + s3) / 3 >= 60
    ? "D"
    : "F";

console.log("🚀 ~ getGrade:", getGrade(95, 90, 93));
