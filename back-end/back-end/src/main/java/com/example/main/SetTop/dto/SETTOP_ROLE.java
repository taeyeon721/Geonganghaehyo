package com.example.main.SetTop.dto;

public enum SETTOP_ROLE {
    ADMIN("ADMIN"), MANAGER("MANAGER");
    private final String label;
    SETTOP_ROLE(String label) {
        this.label = label;
    }

    public String label() {
        return label;
    }
}
