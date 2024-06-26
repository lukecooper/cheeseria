package com.pz.cheeseria;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.http.MediaType;

import java.net.URI;
import java.util.List;
import java.io.IOException;
import java.io.InputStream;
import org.apache.commons.io.IOUtils;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/storeItems")
public class StoreItemController {

    private final StoreItemRepository storeItemRepository;

    @Autowired
    StoreItemController(StoreItemRepository storeItemRepository) {
        this.storeItemRepository = storeItemRepository;
    }

    @GetMapping
    public List<StoreItem> getStoreItems() {
        return (List<StoreItem>) this.storeItemRepository.findAll();
    }
	
	@GetMapping(
		value = "/{storeItemId}"
	)
	public StoreItem getStoreItem(@PathVariable Long storeItemId) throws StoreItemNotFoundException {
		StoreItem storeItem = this.storeItemRepository
			.findById(storeItemId)
			.orElseThrow(() -> new StoreItemNotFoundException(storeItemId));
		return storeItem;
	}

	@GetMapping(
		value = "/{storeItemId}/imageName"
	)
	public String getStoreItemImageName(@PathVariable Long storeItemId) throws StoreItemNotFoundException {
		StoreItem storeItem = this.storeItemRepository
			.findById(storeItemId)
			.orElseThrow(() -> new StoreItemNotFoundException(storeItemId));
		return "/static/images/" + storeItem.getImageName();
	}
	
	@GetMapping(
		value = "/{storeItemId}/image",
		produces = MediaType.IMAGE_JPEG_VALUE
	)
	public @ResponseBody byte[] getStoreItemImage(@PathVariable Long storeItemId) throws IOException, StoreItemNotFoundException {
		StoreItem storeItem = this.storeItemRepository
			.findById(storeItemId)
			.orElseThrow(() -> new StoreItemNotFoundException(storeItemId));
		InputStream in = getClass()
			.getResourceAsStream("/static/images/" + storeItem.getImageName());
		return IOUtils.toByteArray(in);
	}
}
