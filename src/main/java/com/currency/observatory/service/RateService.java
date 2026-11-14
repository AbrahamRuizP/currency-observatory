package com.currency.observatory.service;

import com.currency.observatory.client.ObservatoryClient;
import com.currency.observatory.entity.Rate;
import com.currency.observatory.entity.RateDto;
import com.currency.observatory.mapper.RateMapper;
import com.currency.observatory.repository.RateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RateService {

    private final ObservatoryClient observatoryClient;
    private final RateRepository repository;
    private final RateMapper mapper;

    @Transactional
    public void importRates() {
        List<RateDto> dtoList = observatoryClient.fetchUyuRates();

        List<Rate> rates = dtoList.stream()
                .map(mapper::toEntity)
                .toList();

        repository.saveAll(rates);
    }
}
