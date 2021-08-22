//Jest include
const { test, expect } = require('@jest/globals');
//Manager class include
const Manager = require('../lib/Manager');
//create test object
const employee = new Manager({
    name: 'Tess McTest',
    id: '005',
    email: 'test@email.com',
    officeNumber: 'B17'
});
//test if the getName function returns the object's name
test('getName() returns object\'s name', () => { expect(employee.getName()).toBe('Tess McTest') });
//test if the getId function returns the correct ID
test('getId() returns object\'s id', () => { expect(employee.getId()).toBe('005') });
//test the getEmail function
test('getEmail() returns object\'s email address', () => { expect(employee.getEmail()).toBe('test@email.com') });
//test the getRole function
test('getRole() returns Manager', () => { expect(employee.getRole()).toBe('Manager') });
//test the getSchool function
test('getOfficeNumber() returns office number', () => { expect(employee.getOfficeNumber()).toBe('B17') });