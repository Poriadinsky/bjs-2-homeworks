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
   if (this.marks) {
      this.marks.push(...marksToAdd);
    }
 }

Student.prototype.getAverage = function () {
   if (!this.marks) return 0;
   if (this.marks.length === 0) return 0;
   return this.marks.reduce((sum, mark) => sum + mark) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
   this.excluded = reason;
   delete this.marks;
   delete this.subject;
}

