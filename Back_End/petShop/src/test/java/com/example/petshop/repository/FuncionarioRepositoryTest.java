package com.example.petshop.repository;

import com.example.petshop.base.Role;
import net.bytebuddy.asm.Advice;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;


import com.example.petshop.base.Funcionario;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.time.Month;
import java.util.Date;
import java.util.Optional;

import static com.example.petshop.base.Role.FUNCIONARIO;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertTrue;

@DataJpaTest
class FuncionarioRepositoryTest {

    @Autowired
    private FuncionarioRepository underTest;

    @AfterEach
    void tearDown() {
        underTest.deleteAll();
    }

    @Test
    void TestfindFuncionarioByEmail() {
        //given

        String email = "Catatas@gmail.com";

        Funcionario funcionario = new Funcionario(
                "Catatau",
                "Catatas@gmail.com",
                "12332112332",
                "6290028922",
                "Senha123",
                LocalDate.of(1969, Month.APRIL,20),
                FUNCIONARIO,
                "Banhista",
                2000.00
        );

        underTest.save(funcionario);

        //when
        Optional<Funcionario> expected = underTest.findFuncionarioByEmail(email);



        //then
        Assertions.assertThat(expected).isPresent();
    }
}