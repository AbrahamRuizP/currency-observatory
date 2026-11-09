package com.currency.observatory.client;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

@Component
public class ObservatoryClient {

    private final RestClient restClient;

    public ObservatoryClient(RestClient.Builder builder) {
        this.restClient = builder
                .baseUrl("")
                .build();
    }

}
