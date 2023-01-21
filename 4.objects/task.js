function Student(name, gender, age) {
   this.name = name;
   this.gender = gender;
   this.age = age;
   this.marks = [];
   this.excluded = false;
}

Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
   if (this.excluded) {
     throw new Error("Нельзя поставить оценку отчисленному студенту");
   } else {
     this.marks.push(...marksToAdd);
   }
 }

Student.prototype.getAverage = function () {
   if (this.marks.length === 0) return 0;
   return this.marks.reduce((sum, mark) => sum + mark) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
   this.excluded = reason;
   delete this.marks;
   delete this.subject;
}

