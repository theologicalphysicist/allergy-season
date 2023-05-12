package clientserver.demo;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;


@RestController
public class Endpoints {

    // Aggregate root
    // tag::get-aggregate-root[]
    @CrossOrigin()
    @RequestMapping(method=RequestMethod.POST, value="/files", consumes=MediaType.APPLICATION_JSON_VALUE)
    public static String files(@RequestBody Files file) {
        System.out.println(file.getFileString());
        return "FILE RECEIVED";
    }
    
}