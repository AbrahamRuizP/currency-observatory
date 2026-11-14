package com.currency.observatory.controller.dto;

import java.math.BigDecimal;

public record RateDto(
   String date,
   String base,
   String quote,
   BigDecimal rate
) {}
