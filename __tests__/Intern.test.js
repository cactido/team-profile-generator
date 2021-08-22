//Jest include
const { test, expect } = require('@jest/globals');
//Intern class include
const Intern = require('../lib/Intern');
//create test object
const employee = new Intern({
    name: 'Tess McTest',
    id: '005',
    email: 'test@email.com',
    school: 'Bovine University'
});
//test if the getName function returns the object's name
test('getName() returns object\'s name', () => { expect(employee.getName()).toBe('Tess McTest') });
//test if the getId function returns the correct ID
test('getId() returns object\'s id', () => { expect(employee.getId()).toBe('005') });
//test the getEmail function
test('getEmail() returns object\'s email address', () => { expect(employee.getEmail()).toBe('test@email.com') });
//test the getRole function
test('getRole() returns Intern', () => { expect(employee.getRole()).toBe('Intern') });
//test the getSchool function
test('getSchool() returns school name', () => { expect(employee.getSchool()).toBe('Bovine University') });