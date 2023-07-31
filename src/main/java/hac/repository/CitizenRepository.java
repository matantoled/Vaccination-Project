package hac.repository;

import hac.model.Citizen;
import org.springframework.data.repository.CrudRepository;
import java.time.LocalDateTime;
import java.util.List;


public interface CitizenRepository extends CrudRepository<Citizen, Integer> {

    List<Citizen> findByDateOfBirthBetweenAndCityStartingWith(LocalDateTime fromDate, LocalDateTime toDate, String cityPrefix);

    List<Citizen> findByDateOfBirthBetween(LocalDateTime fromDate, LocalDateTime toDate);

    List<Citizen> findByCityStartingWith(String cityPrefix);
}
