package com.currency.observatory;

import com.currency.observatory.service.RateService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ObservatoryApplication {
	private static final Logger logger = LoggerFactory.getLogger(ObservatoryApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(ObservatoryApplication.class, args);
	}

	@Bean
    CommandLineRunner init(RateService rateService) {
		return args -> {
			try {
				rateService.importRates();
			} catch (Exception exception) {
				logger.warn("Could not import rates from JSONPlaceholder; " +
						"the application will continue starting", exception);
			}
		};
	}
}
