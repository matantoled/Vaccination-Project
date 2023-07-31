package hac.controllers;


import hac.model.Citizen;
import hac.service.CitizenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
public class CitizenController {
    private final CitizenService citizenService;

    @Autowired
    public CitizenController(CitizenService citizenService) {
        this.citizenService = citizenService;
    }

    @PostMapping("/citizens")
    public Citizen newCitizen(@RequestBody Citizen newCitizen) {
        return citizenService.saveCitizen(newCitizen);
    }

    @GetMapping("/citizens")
    public List<Citizen> getAllCitizens(@RequestParam(required = false) String city,
                                        @RequestParam(required = false) LocalDateTime fromDate,
                                        @RequestParam(required = false) LocalDateTime toDate) {
        return citizenService.searchCitizens(city, fromDate, toDate);
    }
}

