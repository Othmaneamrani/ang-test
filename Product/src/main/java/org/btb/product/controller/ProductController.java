package org.btb.product.controller;


import lombok.AllArgsConstructor;
import org.btb.product.entities.Product;
import org.btb.product.service.IProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "*")
public class ProductController {

    private IProductService iProductService;


    @PostMapping
    Product createProduct (@RequestBody Product product){
        return iProductService.createProduct(product);
    }


    @PutMapping
    Product updateProduct (@RequestBody Product product){
        return iProductService.updateProduct(product);
    }


    @GetMapping("/{id}")
    Product getProductById(@PathVariable int id){
        return iProductService.getProductById(id);
    }


    @GetMapping("/all")
    List<Product> getAll (){
        return iProductService.getAll();
    }


    @DeleteMapping("/{id}")
    void deleteProduct (@PathVariable int id){
        iProductService.deleteProduct(id);
    }

}
