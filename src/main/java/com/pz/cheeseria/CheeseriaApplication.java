package com.pz.cheeseria;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.math.BigDecimal;

@SpringBootApplication
public class CheeseriaApplication {

	public static void main(String[] args) {
        SpringApplication.run(CheeseriaApplication.class, args);
    }

    @Bean
    CommandLineRunner init(StoreItemRepository storeItemRepository) {
        return args -> {
            storeItemRepository.save(new StoreItem("Brixton Blue", "Blue", "brixton_blue.jpg", new BigDecimal("14.50")));
            storeItemRepository.save(new StoreItem("Margot", "Cream", "margot.jpg", new BigDecimal("12.80")));
            storeItemRepository.save(new StoreItem("Sage Derby", "Green", "sage_derby.jpg", new BigDecimal("18.20")));
            storeItemRepository.save(new StoreItem("Pecorino Ginepro", "Pale White", "pecorino_ginepro.jpg", new BigDecimal("10.20")));
            storeItemRepository.save(new StoreItem("Organic Cheddar", "Yellow", "organic_cheddar.jpg", new BigDecimal("12.95")));
        };
    }
}
