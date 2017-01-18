package sec.project.domain;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.data.jpa.domain.AbstractPersistable;

@Entity
@Table(name = "signup")
public class Signup extends AbstractPersistable<Long> {

    private String name;
    private String address;
    private Long ticketId;
    private String creditcardNumber;

    public Signup() {
        super();
    }

    public Signup(String name, String address, Long ticketId, String creditcardNumber) {
        this();
        this.name = name;
        this.address = address;
        this.ticketId = ticketId;
        this.creditcardNumber = creditcardNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }


    public Long getTicket() {
        return ticketId;
    }

    public void setTicket(Long ticket) {
        this.ticketId = ticket;
    }

    public Long getTicketId() {
        return ticketId;
    }

    public void setTicketId(Long ticketId) {
        this.ticketId = ticketId;
    }

    public String getCreditcardNumber() {
        return creditcardNumber;
    }

    public void setCreditcardNumber(String creditcardNumber) {
        this.creditcardNumber = creditcardNumber;
    }
}
