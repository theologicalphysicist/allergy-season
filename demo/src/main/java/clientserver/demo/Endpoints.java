package clientserver.demo;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
public class Endpoints {

    // Aggregate root
    // tag::get-aggregate-root[]
    @CrossOrigin()
    @PostMapping(value="/files")
    public static String files(@RequestParam("fileString") MultipartFile file) {
        try {
            String content = new String(file.getBytes());

            System.out.println(content);
        } catch(IOException err) {
            err.printStackTrace();
        }


        return "FILE RECEIVED";
    }

    @CrossOrigin()
    @GetMapping(value="/")
    public static String home() {
        
        return "Home Endpoint";
    }

    
}