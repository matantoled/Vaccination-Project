package hac.repository;

import hac.model.Citizen;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;


public interface CitizenRepository extends CrudRepository<Citizen, Integer> {
    List<Citizen> findByDateOfBirthBetweenAndCity(LocalDateTime fromDate, LocalDateTime toDate, String city);

    List<Citizen> findByDateOfBirthBetween(LocalDateTime fromDate, LocalDateTime toDate);

    List<Citizen> findByCity(String city);
}
