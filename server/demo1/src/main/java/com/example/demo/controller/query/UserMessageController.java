package com.example.demo.controller.query;

import com.example.demo.domainValue.Success;
import com.example.demo.response.Response;
import com.example.demo.service.UserMessageService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/message")
@Tag(name = "message")
public class UserMessageController {
    @Autowired
    private UserMessageService userMessageService;


    @GetMapping( "getAll")
    public ResponseEntity<Response> getAll(@RequestParam("userId") double  userId  ){

        Response response=new Response();
        try {
            response.setData(userMessageService.findAllByUserId(userId));
            if (response.getData()!=null) {
                response.setMessage("اطلاعات با موفقیت دریافت شد");
                response.setSuccess(Success.TRUE.toString());

            }else {
                response.setMessage("خطا در عملیات");
                response.setSuccess(Success.FALSE.toString());
            }
            return ResponseEntity.ok(response);
        }catch (Exception e){
            response.setMessage("خطا در عملیات");
            response.setSuccess(Success.FALSE.toString());
            return ResponseEntity.ok(response);
        }
    }


}
