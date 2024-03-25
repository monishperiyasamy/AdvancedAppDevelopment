package com.example.bec.Repository;

import com.example.bec.Model.CourseModel;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<CourseModel,Long> {

    Optional<CourseModel> findByCoursename(String courseName);

    void deleteByCoursename(String courseName);
}
