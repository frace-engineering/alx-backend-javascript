interface TeacherAttributes {
  firstName: string;
  fullTimeEmployee: boolean;
  lastName: string;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

class Teacher {
  private attributes: TeacherAttributes;  	
  constructor({
    firstName,
    lastName,
    fullTimeEmployee,
    yearsOfExperience,
    location,
    ...otherAttributes
  }: TeacherAttributes) {
    this.attributes = {
      firstName,
      lastName,
      fullTimeEmployee,
      yearsOfExperience,
      location,
      ...otherAttributes
    };
  }
}  

interface Directors extends Teacher {
  numberOfReports: number;
}  

function printTeacher(firstName, lastName) {
  return firstName[0] + '. ' + lastName;
}

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() {
    return 'Currently working';
  }
  displayName() {
    return this.firstName;
  }
}  

console.log(new StudentClass('Ugwu', 'Ngene'));
