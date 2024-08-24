package com.example.demo.controller.query;

import com.example.demo.domainValue.Success;
import com.example.demo.entity.UserCardEntity;
import com.example.demo.response.Response;
import com.example.demo.service.UserCardService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/card")
@Tag(name = "card")
public class QueryUserCardController {


    @Autowired
    private UserCardService userCardService;

    @GetMapping("getCard")
    public ResponseEntity<Response> getUserCardService(@RequestParam int userId) {


        Response response=new Response();
        try {
            response.setData(userCardService.getAllCardByUserId(userId));
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
