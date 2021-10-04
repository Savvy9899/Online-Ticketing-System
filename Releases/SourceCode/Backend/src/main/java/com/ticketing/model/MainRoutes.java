package com.ticketing.model;


import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "main_routes")
public class MainRoutes {

    private String routeId;
    private String routeName;

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
