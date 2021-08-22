//Jest include
const { test, expect } = require('@jest/globals');
//Engineer class include
const Engineer = require('../lib/Engineer');
//create test object
const employee = new Engineer({
    name: 'Tess McTest',
    id: '005',
    email: 'test@email.com',
    github: 'tessm'
});
//test if the getName function returns the object's name
test('getName() returns object\'s name', () => { expect(employee.getName()).toBe('Tess McTest') });
//test if the getId function returns the correct ID
test('getId() returns object\'s id', () => { expect(employee.getId()).toBe('005') });
//test the getEmail function
test('getEmail() returns object\'s email address', () => { expect(employee.getEmail()).toBe('test@email.com') });
//test the getRole function
test('getRole() returns Engineer', () => { expect(employee.getRole()).toBe('Engineer') });
//test the getGithub function
test('getGithub() returns github username', () => { expect(employee.getGithub()).toBe('tessm') });