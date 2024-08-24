package com.example.demo.controller.command;

import com.example.demo.domainValue.Success;
import com.example.demo.entity.UserCardEntity;
import com.example.demo.response.Response;
import com.example.demo.service.UserCardService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/card")
@Tag(name = "card")
public class CommandUserCardController {


    @Autowired
    private UserCardService userCardService;

    @PostMapping("addCard")
    public ResponseEntity<Response> getUserCardService(@RequestBody UserCardEntity req) {


            Response response=new Response();
            try {
                response.setData(userCardService.AddUserCardService(req.getUserId(),req.getCardNumber(),req.getIsInstallment(),req.getBankName(),req.getStartDate(),req.getAmount(),req.getPercentage(),req.getCount(),req.getPerInstallment()));
                if (response.getData()!=null) {
                    response.setMessage("کارت با موفقیت ثبت شد");
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
