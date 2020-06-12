package com.mall.service;

import com.mall.base.domain.*;
import com.mall.base.mapper.CartMapper;
import com.mall.base.mapper.PayInfoMapper;
import com.mall.base.mapper.ProductMapper;
import com.mall.base.mapper.UserMapper;
import com.mall.controller.request.Cart2Request;
import com.mall.controller.request.CartRequest;
import com.mall.controller.request.DeleteCarRequest;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.UUID;

@Service
public class CartService {
    @Resource
    private CartMapper cartMapper;
    @Resource
    private UserMapper userMapper;
    @Resource
    private PayInfoMapper payInfoMapper;

    @Resource
    private ProductMapper productMapper;

    public Cart addCart(CartRequest request) {
        Integer productId = null;
        Integer userId = null;
        int i;
        Cart cart = new Cart();
        String productName = request.getProductName();
        String userName = request.getUserName();
        ProductExample productExample = new ProductExample();
        productExample.createCriteria().andNameEqualTo(productName);
        List<Product> products = productMapper.selectByExample(productExample);

        UserExample userExample = new UserExample();
        userExample.createCriteria().andUsernameEqualTo(userName);
        List<User> users = userMapper.selectByExample(userExample);
        for (User user : users) {
            userId = user.getId();
            System.out.println("user: " + userId);

        }

        CartExample cartExample = new CartExample();
        cartExample.createCriteria().andProductNameEqualTo(request.getProductName()).andUserIdEqualTo(userId);
        List<Cart> carts = cartMapper.selectByExample(cartExample);
        System.out.println(carts+"=====================================");
        if (!(carts.isEmpty())) {
            int length = carts.size();
            for (i = 0; i < length; i++) {
                Cart cart1 = carts.get(i);
                if (cart1.getUserId() == userId) {
                    int number = cart1.getProductQuantity() + request.getProductQuantity();
                    cart1.setProductQuantity(number);
                    cartMapper.updateByExample(cart1, cartExample);
                    return cart1;
                }

            }
        } else {
            for (Product product : products) {
                productId = product.getId();
                System.out.println("product: " + productId);

            }
            cart.setProductId(productId);
            cart.setUserId(userId);
            cart.setProductImage(request.getProductImage());
            cart.setProductName(request.getProductName());
            cart.setProductPrice(request.getProductPrice());
            cart.setProductQuantity(request.getProductQuantity());
            cartMapper.insertSelective(cart);
            return cart;
        }

        return cart;
    }

    public List<Cart> findCart(int userId) {
        CartExample cartExample = new CartExample();
        cartExample.createCriteria().andUserIdEqualTo(userId);
        List<Cart> carts = cartMapper.selectByExample(cartExample);
        return carts;
    }

    public void deleteCar(DeleteCarRequest request) {
        CartExample cartExample = new CartExample();
        cartExample.createCriteria().andUserIdEqualTo(request.getUserId()).andProductIdEqualTo(request.getProductId());
        cartMapper.deleteByExample(cartExample);
    }

    public PayInfo settleAccounts(int userId) {
        int i=1;
        PayInfo payInfo = new PayInfo();
        payInfo.setOrderNumber(UUID.randomUUID().toString());
        payInfo.setUserId(userId);
        payInfoMapper.insertSelective(payInfo);
        CartExample cartExample = new CartExample();
        cartExample.createCriteria().andUserIdEqualTo(userId);
        cartMapper.deleteByExample(cartExample);
        return payInfo;
    }

    public List<PayInfo> findPayInfo(String orderNumber){
        PayInfoExample payInfoExample = new PayInfoExample();
        payInfoExample.createCriteria().andOrderNumberEqualTo(orderNumber);
        List<PayInfo> payInfos = payInfoMapper.selectByExample(payInfoExample);
        return payInfos;

    }
}
