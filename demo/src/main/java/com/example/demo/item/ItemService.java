package com.example.demo.item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    private final ItemRepository itemRepository;

    @Autowired
    public ItemService(ItemRepository itemRepository){
        this.itemRepository = itemRepository;
    }

    public List<Item> getAllItem(){
        return itemRepository.findAll();
    }

    public Item getItem(Long id){
        return itemRepository.findById(id).orElse(null);
    }

    public void addItem(Item item) {
        itemRepository.save(item);
    }

    public void deleteItem(Long id){
        itemRepository.deleteById(id);
    }
}
