"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validadeCpf_1 = require("../src/validadeCpf");
test('Deve testa se o CPF é válido.', function () {
    // given
    const cpf = '97456321558';
    //when
    const isValid = (0, validadeCpf_1.validateCpf)(cpf);
    //then
    expect(isValid).toBe(true);
});
/*
97456321558
71428793860
87748248800
*/ 
