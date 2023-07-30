package hac.service;

import hac.model.Citizen;
import hac.repository.CitizenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
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

    public List<Citizen> searchCitizens(String city, Date fromDate, Date toDate) {
        if (city != null && fromDate != null && toDate != null) {
            return citizenRepository.findByDateOfBirthBetweenAndCity(fromDate, toDate, city);
        } else if (city != null) {
            return citizenRepository.findByCity(city);
        } else if (fromDate != null && toDate != null) {
            return citizenRepository.findByDateOfBirthBetween(fromDate, toDate);
        } else {
            return (List<Citizen>) citizenRepository.findAll();
        }
    }
}
