package com.currency.observatory.client;

import com.currency.observatory.entity.RateDto;
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

    public List<RateDto> fetchRates() {
        return restClient.get()
                .uri("rates")
                .retrieve()
                .body(new ParameterizedTypeReference<>() {});
    }
}
