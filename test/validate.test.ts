import { validateCpf } from "../src/validadeCpf";

test('Deve testa se o CPF é válido.', function () {
    // given
    const cpf = '97456321558'
    //when
    const isValid = validateCpf(cpf)
    //then
    expect(isValid).toBe(true)
})

/*
97456321558
71428793860
87748248800
*/