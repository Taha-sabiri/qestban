package com.example.demo.controller.query;


import com.example.demo.domainValue.Success;
import com.example.demo.response.Response;
import com.example.demo.service.UserInstallmentService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/userInstallment")
@Tag(name = "Installment")
public class UserInstallmentController {

    @Autowired
    private UserInstallmentService userInstallmentService;

    @GetMapping(value = "getAll")
    public ResponseEntity<Response> getAll(@RequestParam("userId") int  userId ,@RequestParam("cardId") int  cardId ){

        Response response=new Response();
        try {
            response.setData(userInstallmentService.getAll(userId,cardId));
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

    @GetMapping(value = "updateIsPayed")
    public ResponseEntity<Response> UpdateIsPayedController(@RequestParam("id") Long id ,@RequestParam("cardId") Long  cardId,@RequestParam("userId") Long  userId ){

        Response response=new Response();
        try {
          userInstallmentService.UpdateIsPayedService(id,cardId,userId);

                response.setMessage("عملیات موفق");
                response.setSuccess(Success.TRUE.toString());


            return ResponseEntity.ok(response);
        }catch (Exception e){
            response.setMessage("خطا در عملیات");
            response.setSuccess(Success.FALSE.toString());
            return ResponseEntity.ok(response);
        }
    }

}
