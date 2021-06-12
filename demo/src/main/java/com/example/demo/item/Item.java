package com.example.demo.item;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private Long id;
    private String name;
    private double price;
    private int quantity;
    private Date register_dt;
    private String description;

    public Item() {
    }

    public Item(Long id, String name, double price, int quantity, Date register_dt, String description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.register_dt = register_dt;
        this.description = description;
    }

    public Item(String name, double price, int quantity, Date register_dt, String description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.register_dt = register_dt;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Date getRegister_dt() {
        return register_dt;
    }

    public void setRegister_dt(Date register_dt) {
        this.register_dt = register_dt;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
