package org.btb.product.service;


import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.btb.product.entities.Product;
import org.btb.product.repository.IProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class ProductServiceImpl implements IProductService{

    private IProductRepository iProductRepository;


    @Override
    public Product createProduct(Product product) {
        return iProductRepository.save(product);
    }

    @Override
    public Product updateProduct(Product product) {
        return iProductRepository.save(product);
    }

    @Override
    public Product getProductById(int id) {
        return iProductRepository.findById(id).get();
    }

    @Override
    public List<Product> getAll() {
        return iProductRepository.findAll();
    }

    @Override
    public void deleteProduct(int id) {
        Product product = iProductRepository.findById(id).get();
        iProductRepository.delete(product);
    }
}
