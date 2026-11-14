package com.currency.observatory.service;

import com.currency.observatory.entity.Rate;
import com.currency.observatory.entity.RateDto;
import com.currency.observatory.mapper.RateMapper;
import com.currency.observatory.repository.RateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RateService {

    private final RateRepository repository;
    private final RateMapper mapper;

    public void saveAll(List<RateDto> rates) {
        List<Rate> toSave = rates.stream()
                        .map(mapper::toEntity)
                        .toList();
        repository.saveAll(toSave);
    }
}
