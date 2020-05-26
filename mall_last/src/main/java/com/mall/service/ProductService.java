package com.mall.service;

import com.mall.base.domain.Product;
import com.mall.base.domain.ProductExample;
import com.mall.base.mapper.ProductMapper;
import com.mall.controller.request.ProductRequest;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class ProductService {
    @Resource
    private ProductMapper productMapper;
    public List<Product> selectProduceByName(String productName){
        ProductExample productExample = new ProductExample();

        productExample.createCriteria().andNameLike("%"+productName+"%");
        List<Product> products = productMapper.selectByExample(productExample);
        return products;
    }
}
