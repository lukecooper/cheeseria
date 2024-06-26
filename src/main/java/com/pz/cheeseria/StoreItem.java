package com.pz.cheeseria;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.math.BigDecimal;

@Entity
public class StoreItem {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
    private String name;
    private String colour;
    private String imageName;
    private BigDecimal pricePerKG;

	public StoreItem() {
	}
    
    public StoreItem(String name, String colour, String imageName, BigDecimal pricePerKG) {
        this.name = name;
        this.colour = colour;
        this.imageName = imageName;
        this.pricePerKG = pricePerKG;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getColour() {
        return colour;
    }

    public String getImageName() {
        return imageName;
    }

    public BigDecimal getPricePerKG() {
        return pricePerKG;
    }
}
