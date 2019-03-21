package be.wouterversyck.graphqlpoc.domain.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "wv_question")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString(exclude = {"user"})
public class Question {
    @Id
    @GeneratedValue
    private long id;

    @NotBlank
    @Column(name = "question", nullable = false)
    private String question;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;

    @Column(name = "user_id")
    @JsonIgnore
    private long userId;
}