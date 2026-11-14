package com.currency.observatory.controller;

import com.currency.observatory.entity.Rate;
import com.currency.observatory.controller.dto.RateDto;
import com.currency.observatory.mapper.RateMapper;
import com.currency.observatory.service.RateService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/{quote}")
    public RateDto getRateByQuote(@PathVariable String quote) {
        Rate rate = rateService.findByQuote(quote);
        return rateMapper.toDto(rate);
    }
}
