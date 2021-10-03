package com.ticketing.model;

import java.util.List;

public class Route {

    private String routeId;
    private List<BusHalt> routeDestinations;

    public String getRouteId() {
        return routeId;
    }

    public void setRouteId(String routeId) {
        this.routeId = routeId;
    }

    public List<BusHalt> getRouteDestinations() {
        return routeDestinations;
    }

    public void setRouteDestinations(List<BusHalt> routeDestinations) {
        this.routeDestinations = routeDestinations;
    }
}
