package com.ticketing.model;


import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "main_routes")
public class MainRoutes {

    private String routeId;
    private String routeName;
    private String routePrice;

    public String getRoutePrice() {
        return routePrice;
    }

    public void setRoutePrice(String routePrice) {
        this.routePrice = routePrice;
    }

    public String getRouteId() {
        return routeId;
    }

    public void setRouteId(String routeId) {
        this.routeId = routeId;
    }

    public String getRouteName() {
        return routeName;
    }

    public void setRouteName(String routeName) {
        this.routeName = routeName;
    }
}
