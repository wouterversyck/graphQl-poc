package be.wouterversyck.graphqlpoc.domain.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "wv_question")
@Data
public class Question {
    @Id
    @GeneratedValue
    private long id;

    @NotBlank
    @Column(name = "question", nullable = false)
    private String question;

    @ManyToOne
    private User user;

    @JsonIgnore
    public static QuestionBuilder builder() {
        return new QuestionBuilder();
    }

    public static class QuestionBuilder {
        private String question;
        private User user;

        private QuestionBuilder() {}

        public QuestionBuilder withQuestion(final String question) {
            this.question = question;
            return this;
        }

        public QuestionBuilder withUser(final User user) {
            this.user = user;
            return this;
        }

        public Question build() {
            Question questionObj = new Question();
            questionObj.setQuestion(question);
            questionObj.setUser(user);

            return questionObj;
        }
    }
}