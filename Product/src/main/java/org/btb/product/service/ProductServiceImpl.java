package org.btb.product.service;


import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.btb.product.entity.Product;
import org.btb.product.repo.IProductRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class ProductServiceImpl implements IProductService{

    private IProductRepo iProductRepo;


    @Override
    public Product createProduct(Product product) {
        return iProductRepo.save(product);
    }

    @Override
    public Product updateProduct(Product product) {
        return iProductRepo.save(product);
    }

    @Override
    public Product getProductById(int id) {
        return iProductRepo.findById(id).get();
    }

    @Override
    public List<Product> getAll() {
        return iProductRepo.findAll();
    }

    @Override
    public void deleteProduct(int id) {
        Product product = iProductRepo.findById(id).get();
        iProductRepo.delete(product);
    }
}
