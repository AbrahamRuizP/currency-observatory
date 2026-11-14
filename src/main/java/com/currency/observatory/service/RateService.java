package com.currency.observatory.service;

import com.currency.observatory.client.ObservatoryClient;
import com.currency.observatory.entity.Rate;
import com.currency.observatory.controller.dto.RateDto;
import com.currency.observatory.exception.RateNotFoundException;
import com.currency.observatory.mapper.RateMapper;
import com.currency.observatory.repository.RateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class RateService {

    private final ObservatoryClient observatoryClient;
    private final RateRepository repository;
    private final RateMapper mapper;

    public List<Rate> findAll() {
        return repository.findAll();
    }

    public Rate findByQuote(String quote) {
        return repository.findByQuote(quote.trim().toUpperCase(Locale.ROOT))
                .orElseThrow(() -> new RateNotFoundException(
                        "Rate not found for quote: " + quote
                ));
    }

    @Transactional
    public void importRates() {
        List<RateDto> dtoList = observatoryClient.fetchUyuRates();

        List<Rate> rates = dtoList.stream()
                .map(mapper::toEntity)
                .toList();

        repository.saveAll(rates);
    }
}
