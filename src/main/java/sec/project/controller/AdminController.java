package sec.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sec.project.domain.Signup;
import sec.project.domain.Videourl;
import sec.project.repository.SignupRepository;
import sec.project.repository.VideoRepository;
//import sec.project.repository.VideoRepository;

import java.util.List;

/**
 * Created by Teemu on 8.1.2017.
 */

@RestController
public class AdminController {

    @Autowired
    private SignupRepository signupRepository;

    @Autowired
    private VideoRepository videoRepository;

    @RequestMapping(value = "/proxy/getSignups", method = RequestMethod.GET)
    public List<Signup> submitForm() {
        return signupRepository.findAll();
    }

    @RequestMapping(value = "/proxy/readVideoUrl", method = RequestMethod.GET)
    public String readVideoUrl() {
        List<Videourl>  list = videoRepository.findAll();
        if (list.size() > 0){
            return list.get(list.size()-1).getVideourl();
        }else{
            return  "https://www.youtube.com/embed/XGSy3_Czz8k";
        }
    }

    @RequestMapping(value = "/proxy/setVideoUrl", method = RequestMethod.GET)
    public void submitForm(@RequestParam String videoUrl){
        videoRepository.save(new Videourl(videoUrl));
    }

    @RequestMapping(value = "/proxy/getAdminLogin", method = RequestMethod.GET)
    public boolean getAdminLogin(@RequestParam String user, @RequestParam String password){
        if("admin".equals(user) && "password".equals(password)){
            return true;
        }else{
            return false;
        }
    }

    @RequestMapping(value = "/proxy/getMaliciousCode", method = RequestMethod.GET)
    public String getMaliciousCode(){
        return "<script>alert('This is malicious Code')</script>";
    }
}
