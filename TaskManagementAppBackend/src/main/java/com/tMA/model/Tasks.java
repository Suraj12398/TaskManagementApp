package com.tMA.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Tasks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;

    @Size(max = 20, message = "title should be of 10 letters")
    private String title;

    @Size(min = 1, max = 60, message = "description should be between 1 and 60 characters")
    private String description;

    private String status;
    private String priority;
    
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;
}
