package hac.repository;

import hac.model.Citizen;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;


public interface CitizenRepository extends CrudRepository<Citizen, Integer> {
    List<Citizen> findByDateOfBirthBetweenAndCity(Date fromDate, Date toDate, String city);

    List<Citizen> findByDateOfBirthBetween(Date fromDate, Date toDate);

    List<Citizen> findByCity(String city);
}
