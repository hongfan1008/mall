package com.mall.controller;

import com.mall.base.domain.Cart;
import com.mall.base.domain.PayInfo;
import com.mall.base.domain.Product;
import com.mall.controller.request.*;
import com.mall.service.CartService;
import com.mall.service.ProductService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Resource
    private ProductService productService;
    @Resource
    private CartService cartService;
    @PostMapping("/search")
    public List<Product> searchProduct(@RequestBody ProductRequest request) {
        List<Product> products = productService.selectProduceByName(request.getProductName());
        System.out.println(products);
        return products;

    }
    @PostMapping("/addCart")
    public Cart addToCart(@RequestBody CartRequest request){
        Cart cart1 = cartService.addCart(request);
        return cart1;
    }
    @PostMapping("/findCart")
    public List<Cart> findCart(@RequestBody UserRequest request){
        List<Cart> carts = cartService.findCart(request.getUserId());
        return carts;
    }

    @PostMapping("/delete")
    public void deleteCart(@RequestBody DeleteCarRequest request){
       cartService.deleteCar(request);
    }
    @PostMapping("/settleAccounts")
    public PayInfo settleAccounts(@RequestBody UserRequest request){
        PayInfo payInfo = cartService.settleAccounts(request.getUserId());
        return payInfo;
    }
    @PostMapping("/findPayInfo")
    public PayInfo findPayInfo(@RequestBody PayInfoRequest request){
        List<PayInfo> payInfo = cartService.findPayInfo(request.getOrderNumber());
        return payInfo.get(0);
    }


}