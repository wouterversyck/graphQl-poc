package be.wouterversyck.graphqlpoc.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class QuestionDto {

    @NotBlank
    private String question;

    @JsonProperty("user_id")
    private long userId;
}
