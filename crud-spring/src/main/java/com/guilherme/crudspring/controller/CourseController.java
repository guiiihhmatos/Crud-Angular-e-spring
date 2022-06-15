package com.guilherme.crudspring.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guilherme.crudspring.model.Course;
import com.guilherme.crudspring.repository.CourseRepository;

@RestController
@RequestMapping("/api/courses")
public class CourseController {
    
    private final CourseRepository courseRepository;  

    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @GetMapping 
    public List<Course> ListaCursos()
    {
        return courseRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Course> create(@RequestBody Course course)
    {
        //System.out.println(course.getName());

       //return courseRepository.save(course);

       return ResponseEntity.status(HttpStatus.CREATED)
            .body(courseRepository.save(course));
    }

    
}
