package com.example.petshop.base;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    /*@Id
    @SequenceGenerator(
            name = "register_sequence",
            sequenceName = "register_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "register_sequence"
    )
    private Long id;*/
    private String nome;
    private String email;
    private String cpf;
    private String telefone;
    private String senha;
    private LocalDate dataNascimento;
    private Cargo cargo;
    private Double salario;
}
