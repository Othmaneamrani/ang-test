package org.btb.product.service;

import org.btb.product.entity.Product;

import java.util.List;

public interface IProductService {

    Product createProduct (Product product);

    Product updateProduct (Product product);

    Product getProductById(int id);

    List<Product> getAll ();

    void deleteProduct (int id);

}
