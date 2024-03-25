package com.example.bec.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bec.Dto.CourseDto;
import com.example.bec.Model.CourseModel;
import com.example.bec.Service.CourseService;

@RestController
@RequestMapping("/course")
public class CourseController {

     @Autowired
    private CourseService courseService;


     @PostMapping("/createCourse")
    // @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<CourseModel> createCourse(@NonNull @RequestBody CourseModel course) {
        CourseModel createdCourse = courseService.addCourse(course);
        return new ResponseEntity<>(createdCourse, HttpStatus.CREATED);
    }

    @GetMapping("readcourse/{courseName}")
    // @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<?> getCourseByName(@PathVariable String courseName) {
        Optional<CourseModel> course = courseService.getCourseByName(courseName);
        return course.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/readcourses")
    // @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<List<CourseModel>> getAllCourses() {
        List<CourseModel> course = courseService.getAll();
        return new ResponseEntity<>(course, HttpStatus.OK);
    }

    @PutMapping("updateCourse/{courseName}")
    // @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<CourseModel> updateCourse(@NonNull @PathVariable String courseName,
            @RequestBody CourseDto courseUpdate) {
        CourseModel updated = courseService.updateCourse(courseName, courseUpdate);
        return new ResponseEntity<>(updated, HttpStatus.OK);
    }

    @DeleteMapping("deleteCourse/{courseId}")
    // @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteCourse(@NonNull @PathVariable Long courseId) {
        courseService.deleteCourseById(courseId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @DeleteMapping("deleteCourse/{courseName}")
    // @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Void> deleteCourseByName(@NonNull @PathVariable String courseName) {
        courseService.deleteCourseByName(courseName);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



    
}
