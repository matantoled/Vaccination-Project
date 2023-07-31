package hac.model;

import jakarta.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;


@Entity
public class Citizen implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    private String firstName;
    private String lastName;
    private LocalDateTime dateOfBirth;
    private String address;
    private String city;
    private String zipCode;
    private String landLine;
    private String cellularPhone;
    private Boolean hasCovid;

    // Constructors
    public Citizen() {
    }

    public Citizen(String firstName, String lastName, LocalDateTime dateOfBirth, String address, String city,
                   String zipCode, String landline, String cellPhone, boolean hasCovid) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.city = city;
        this.zipCode = zipCode;
        this.landLine = landline;
        this.cellularPhone = cellPhone;
        this.hasCovid = hasCovid;
    }

    // getters and setters...

    // Getters
    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public LocalDateTime getDateOfBirth() {
        return dateOfBirth;
    }

    public String getAddress() {
        return address;
    }

    public String getCity() {
        return city;
    }

    public String getZipCode() {
        return zipCode;
    }

    public String getLandLine() {
        return landLine;
    }

    public String getCellularPhone() {
        return cellularPhone;
    }

    public boolean getHasCovid() {
        return hasCovid;
    }


    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName= lastName;
    }

    public void setDateOfBirth(LocalDateTime dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public void setLandline(String landline) {
        this.landLine = landline;
    }

    public void setCellularPhone(String cellPhone) {
        this.cellularPhone = cellPhone;
    }

    public void setHasCovid(boolean hasCovid) {
        this.hasCovid = hasCovid;
    }


    // toString
    @Override
    public String toString() {
        return "Citizen{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", dateOfBirth=" + dateOfBirth.toString() +
                ", address='" + address + '\'' +
                ", city='" + city + '\'' +
                ", zipCode='" + zipCode + '\'' +
                ", landLine='" + landLine + '\'' +
                ", cellularPhone='" + cellularPhone + '\'' +
                ", hasCovid=" + hasCovid +
                '}';
    }
}