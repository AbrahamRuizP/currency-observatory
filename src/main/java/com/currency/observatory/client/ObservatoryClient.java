package com.currency.observatory.client;

import com.currency.observatory.controller.dto.RateDto;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import java.util.List;

@Component
public class ObservatoryClient {

    private final RestClient restClient;

    public ObservatoryClient(RestClient.Builder builder) {
        this.restClient = builder
                .baseUrl("https://api.frankfurter.dev/v2/")
                .build();
    }

    public List<RateDto> fetchUyuRates() {
        return restClient.get()
                .uri("rates?base=uyu")
                .retrieve()
                .body(new ParameterizedTypeReference<>() {});
    }
}
