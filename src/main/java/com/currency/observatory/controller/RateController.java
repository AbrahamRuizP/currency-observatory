package com.currency.observatory.controller;

import com.currency.observatory.entity.Rate;
import com.currency.observatory.entity.RateDto;
import com.currency.observatory.mapper.RateMapper;
import com.currency.observatory.service.RateService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/rate")
public class RateController {

    private final RateService rateService;
    private final RateMapper rateMapper;

    @GetMapping
    public List<RateDto> getRates() {
        List<Rate> rates = rateService.findAll();

        return rates.stream()
                .map(rateMapper::toDto)
                .toList();
    }
}
