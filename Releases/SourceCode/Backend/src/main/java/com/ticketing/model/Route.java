package com.ticketing.model;
import java.util.ArrayList;
import java.util.List;

public class Route {

    private String routeId;
    private List routeDestinations = new ArrayList<>();
    public String getRouteId() {
        return routeId;
    }

    public void setRouteId(String routeId) {
        this.routeId = routeId;
    }

    public List getRouteDestinations() {
        return routeDestinations;
    }

    public void setRouteDestinations(List routeDestinations) {
        this.routeDestinations = routeDestinations;
    }
}
