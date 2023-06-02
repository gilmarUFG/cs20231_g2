package com.example.petshop.config;

import com.example.petshop.base.Cliente;
import com.example.petshop.repository.ClienteRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class ClienteConfig {

    @Bean
    CommandLineRunner commandLineRunner(ClienteRepository clienteRepository) {
        return args -> {
            Cliente bruce = new Cliente(
                    "Bruce",
                    "bruce.wayne@gmail.com",
                    "71561133051",
                    "(11) 42852-9122",
                    "1l5O0mb4AN",
                    LocalDate.of(2000, Month.JANUARY, 25)
            );

            Cliente barry = new Cliente(
                    "Barry",
                    "barry.allen@gmail.com",
                    "14180500086",
                    "(62) 22097-8318",
                    "PuZfPjDQo6",
                    LocalDate.of(1995, Month.JULY, 14)
            );

            Cliente billy = new Cliente(
                    "Billy",
                    "billy.batson@gmail.com",
                    "38060025090",
                    "(62) 39020-1931",
                    "iihzNM37gF",
                    LocalDate.of(1998, Month.MARCH, 24)
            );
            clienteRepository.saveAll(
                    List.of(bruce, barry, billy)
            );
        };
    }
}