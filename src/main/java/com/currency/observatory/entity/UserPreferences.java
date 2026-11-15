package com.currency.observatory.entity;

import com.currency.observatory.entity.enums.Theme;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@Setter @Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user_preferences")
public class UserPreferences {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private Theme theme = Theme.LIGHT;
    private int precision = 4;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
