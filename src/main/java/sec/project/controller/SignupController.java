package sec.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sec.project.domain.Signup;
import sec.project.repository.SignupRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
public class SignupController {

    @Autowired
    private SignupRepository signupRepository;

    @RequestMapping("*")
    public String defaultMapping() {
        return "Stuff";
    }

    @RequestMapping(value = "/form", method = RequestMethod.GET)
    public String loadForm() {
        return "Returning stuff";
    }

    @RequestMapping(value = "/proxy", method = RequestMethod.GET)
    public Signup submitForm(@RequestParam String name, @RequestParam String address, @RequestParam String creditcardNumber) {

        Signup signing = new Signup(name, address, resolveTicketId(),creditcardNumber );
        signupRepository.save(signing);
        return signing;
    }

    //Returns id for ticket based on the last ticket id
    private Long resolveTicketId(){
        List<Signup> signups = signupRepository.findAll();

        if(signups.size() > 0){

            Integer signup = signups.size();
            Long values = signup.longValue();

            return signupRepository.findOne(values).getTicket()+1;
        }else{
            return 1L;
        }

    }

}
