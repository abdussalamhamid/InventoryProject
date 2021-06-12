package com.example.demo.item;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "api/item")
public class ItemController {

    private final ItemService itemService;

    @Autowired
    public ItemController(ItemService service){
        itemService = service;
    }

    @GetMapping("/all")
    public List<Item> getAllItem(){
        return itemService.getAllItem();
    }

    @GetMapping("{id}")
    public Item getItem(@PathVariable("id") Long id){
        return itemService.getItem(id);
    }

    @PostMapping("/add")
    public void addItem(@RequestBody Item item) {
        itemService.addItem(item);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteItem(@PathVariable("id")Long id){
        itemService.deleteItem(id);
    }
}