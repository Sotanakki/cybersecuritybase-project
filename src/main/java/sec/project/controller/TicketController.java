package sec.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sec.project.domain.Signup;
import sec.project.repository.SignupRepository;

/**
 * Created by Teemu on 8.1.2017.
 */

@RestController
public class TicketController {

    @Autowired
    private SignupRepository signupRepository;

    @RequestMapping(value = "/proxy/getTicket", method = RequestMethod.GET)
    public Signup submitForm(@RequestParam Long id) {

        return signupRepository.findOne(id);
    }

}
