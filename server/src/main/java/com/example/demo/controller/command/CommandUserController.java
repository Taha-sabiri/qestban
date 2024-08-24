package com.example.demo.controller.command;


import com.example.demo.domainValue.Success;
import com.example.demo.dto.UserDto;
import com.example.demo.entity.UserEntity;
import com.example.demo.response.Response;
import com.example.demo.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/user")
@Tag(name = "user")
public class CommandUserController {

    @Autowired
    private UserService userService;


    @PostMapping( "addUser")
    @Operation( summary = "ثبت نام کاربر")
    public ResponseEntity<Response> AddUserController(@RequestBody UserEntity req){
        Response response=new Response();
        try {

            response.setData(userService.AddUserService(req.getName(), req.getLastName(), req.getNtnCode(), req.getMobileNumber(),req.getPassword()));
            if (response.getData() != null) {
                response.setMessage("کاربر با موفقیت ساخته شد");
                response.setSuccess(Success.TRUE.toString());
                return ResponseEntity.ok(response);
            }else {
                response.setMessage("کد ملی یا شماره تلفن همراه شما قبلا ثبت شده است");
                response.setSuccess(Success.FALSE.toString());
                return    ResponseEntity.ok(response);
            }


        }catch (Exception e){
            response.setMessage("کد ملی یا شماره تلفن همراه شما قبلا ثبت شده است");
            response.setSuccess(Success.FALSE.toString());
            return    ResponseEntity.ok(response);
        }


    }


    @GetMapping( "loginUser")
    @Operation( summary = "ورود کاربر")
    public ResponseEntity<Response> LoginUser(@RequestParam String mobile ,@RequestParam String password ){
        Response response=new Response();
        try {

            response.setData(userService.LoginUser(mobile,password));
            if (response.getData() != null) {
                response.setMessage("خوش آمدید");
                response.setSuccess(Success.TRUE.toString());
                return ResponseEntity.ok(response);
            }else {
                response.setMessage("نام کاربری یا رمز عبور اشتباه است");
                response.setSuccess(Success.FALSE.toString());
                return    ResponseEntity.ok(response);
            }


        }catch (Exception e){

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR) ;
        }


    }

}
