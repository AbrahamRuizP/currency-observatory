package com.currency.observatory.entity;

import java.math.BigDecimal;

public record RateDto(
   String date,
   String base,
   String quote,
   BigDecimal rate
) {}
