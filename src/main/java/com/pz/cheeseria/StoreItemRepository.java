package com.pz.cheeseria;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository; 

@Repository
public interface StoreItemRepository extends CrudRepository<StoreItem, Long> {

}