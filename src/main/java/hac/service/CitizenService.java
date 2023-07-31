package hac.service;

import hac.model.Citizen;
import hac.repository.CitizenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;


@Service
public class CitizenService {
    private final CitizenRepository citizenRepository;

    @Autowired
    public CitizenService(CitizenRepository citizenRepository) {
        this.citizenRepository = citizenRepository;
    }

    public Iterable<Citizen> getAllCitizens() {
        return citizenRepository.findAll();
    }

    public Citizen saveCitizen(Citizen citizen) {
        return citizenRepository.save(citizen);
    }

    public List<Citizen> searchCitizens(String cityPrefix, LocalDateTime fromDate, LocalDateTime toDate) {
        if (cityPrefix != null && fromDate != null && toDate != null) {
            return citizenRepository.findByDateOfBirthBetweenAndCityStartingWith(fromDate, toDate, cityPrefix);
        } else if (cityPrefix != null) {
            return citizenRepository.findByCityStartingWith(cityPrefix);
        } else if (fromDate != null && toDate != null) {
            return citizenRepository.findByDateOfBirthBetween(fromDate, toDate);
        } else {
            return (List<Citizen>) citizenRepository.findAll();
        }
    }

}
