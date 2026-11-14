package com.currency.observatory.mapper;

import com.currency.observatory.entity.Rate;
import com.currency.observatory.entity.RateDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RateMapper {
    Rate toEntity(RateDto rateDto);
    RateDto toDto(Rate rate);
}
