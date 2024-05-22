package com.pz.cheeseria;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class StoreItemNotFoundException extends RuntimeException {

    public StoreItemNotFoundException(Long storeItemId) {
        super("could not find store item '" + storeItemId + "'.");
    }
}