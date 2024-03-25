package com.example.bec.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;

import com.example.bec.Dto.CourseDto;
import com.example.bec.Model.CourseModel;
import com.example.bec.Repository.CourseRepository;
@Service
public class CourseService {
     @Autowired
    private CourseRepository courserepo;

    //add course
     public CourseModel addCourse(@NonNull CourseModel course) {
        return courserepo.save(course);
    }
    //getCourse_Byname
    public Optional<CourseModel> getCourseByName(String courseName) {
        return courserepo.findByName(courseName);
    }
    // get_AllCourses
    public List<CourseModel> getAll() {
        return courserepo.findAll();
    }
     // updateCourse
     public CourseModel updateCourse(@NonNull String courseName, CourseDto courseUpdate) {
        return courserepo.findByName(courseName)
                .map(m-> {
                    m.setDuration(courseUpdate.getDuration());
                    m.setCost(courseUpdate.getCost());
                    return courserepo.save(m);
                })
                .orElseThrow(() -> new RuntimeException("Course not found: " + courseName));
    }

   //delete_CourseByName
    public void deleteCourseByName(@NonNull String courseName) {
        courserepo.deleteByName(courseName);
    }
    //delete_CourseById
    public void deleteCourseById(@NonNull Long courseId) {
        courserepo.deleteById(courseId);
    }
    
}
