var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var Teacher = /** @class */ (function () {
    function Teacher(_a) {
        var firstName = _a.firstName, lastName = _a.lastName, fullTimeEmployee = _a.fullTimeEmployee, yearsOfExperience = _a.yearsOfExperience, location = _a.location, otherAttributes = __rest(_a, ["firstName", "lastName", "fullTimeEmployee", "yearsOfExperience", "location"]);
        this.attributes = __assign({ firstName: firstName,
            lastName: lastName,
            fullTimeEmployee: fullTimeEmployee,
            yearsOfExperience: yearsOfExperience,
            location: location }, otherAttributes);
    }
    return Teacher;
}());
function printTeacher(firstName, lastName) {
    return firstName[0] + '. ' + lastName;
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
console.log(new StudentClass('Ugwu', 'Ngene'));
