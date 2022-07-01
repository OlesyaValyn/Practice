var student_1 = {
    name: 'Vasya',
	class: 6,
	mark: 3
};
var student_2 = {
	name: 'Maria',
	class: 5,
	mark: 2
};
var student_3 = {
	name: 'Anna',
	class: 6,
	mark: 4
};
var student_4 = {
	name: 'Dima',
	class: 5,
	mark: 4
};
var student_5 = {
	name: 'Nikina',
	class: 4,
	mark: 5
};
var student_6 = {
	name: 'Vika',
	class: 6,
	mark: 2
};
var student_7 = {
	name: 'Sergey',
	class: 5,
	mark: 5
};
var student_8 = {
	name: 'Ira',
	class: 4,
	mark: 5
};
var student_9 = {
	name: 'Evgeny',
	class: 5,
	mark: 4
};
var student_10 = {
	name: 'Stepa',
	class: 4,
	mark: 2
};

var students = [student_1, student_2, student_3, student_4, student_5, student_6, student_7, student_8, student_9, student_10];

var averageMark = {
	summa: 0,
	count: 0,
	average: function() {
		return this.summa / this.count
	}
};

var averageMarkByClass = {
	class: null,
	averageMark
};

var studentsSize = students.length;


// Средняя оценка всех учащихся //
function getAverageMark(students, averageMark) {
	students.forEach(function(item) {
		averageMark.summa += item.mark;
		averageMark.count++;
	});
	return  averageMark.average();
};


// Средние оценки учащихся, сгруппированных по классу //
function getAverageMarkByClass(students) {
	var classes = [];

	students.forEach(function(item) {
		var cls = classes[item.class];

		if (cls) {
			cls.push(item);
			return;
		};
		classes[item.class] = [item];
	});

	classes.forEach(function(item) {
		var average = Object.create(averageMark);
		getAverageMark(item, average);
		console.log("Average in class " + item[0].class + " = " + average.average());
	});
};


// TOP 5 лучших учащихся, отсортированных по полю name //
function getTopStudents(topStudents) {
    topStudents.sort(function sortByMark(a,b) {
         if (a.mark > b.mark) return -1;
         if (a.mark === b.mark) return 0;
         if (a.mark < b.mark) return 1;
    });

    topStudents = topStudents.slice(0, 5);

    topStudents.sort(function sortByName(a,b) {
        if (a.name > b.name) return 1;
        if (a.name === b.name) return 0;
        if (a.name < b.name) return -1;
   });

   var output = "";
	for (let i = 0; i < 5; i++) {
		output += "Name: " + topStudents[i].name + ", mark: " + topStudents[i].mark + ", class: " + topStudents[i].class + "\n";
	};

	console.log(output);
}


var counter = Object.create(averageMark);
var average = getAverageMark(students, counter);
console.log("Average mark by all classes: ", average);

console.log("");
getAverageMarkByClass(students);

console.log("");
console.log("TOP 5 best students:");
getTopStudents(students);