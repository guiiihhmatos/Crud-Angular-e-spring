package com.guilherme.crudspring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
//import javax.persistence.Table;
import javax.persistence.Id;

//import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data //Gerar os getters e setters dos nossos Atributos - c# {get; set;}
@Entity //Entidade que vai fazer um mapeamento no banco de dados - se a entidade que você for criar tiver o mesmo nome da classe pode manter assim se não faz igual a linha de baixo

public class Course {
    
    @Id //indica que é uma chave primaria
    @GeneratedValue(strategy = GenerationType.AUTO) //para o valor ser generado automaticamente apos um insert
    @JsonProperty("_id")
    //@JsonIgnore vai ignorar esse atributo na API 
    private Long id;

    @Column(length = 200, nullable = false) //não aceita valores nulos - NOT NULL
    private String name;

    @Column(length = 20, nullable = false) //não aceita valores nulos - NOT NULL
    private String category;
}
