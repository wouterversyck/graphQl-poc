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
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;

    @Column(name = "user_id")
    private long userId;

    @JsonIgnore
    public static QuestionBuilder builder() {
        return new QuestionBuilder();
    }

    public static class QuestionBuilder {
        private String question;
        private User user;
        private long userId;

        private QuestionBuilder() {}

        public QuestionBuilder withQuestion(final String question) {
            this.question = question;
            return this;
        }

        public QuestionBuilder withUser(final User user) {
            this.user = user;
            return this;
        }

        public QuestionBuilder withUserId(final long userId) {
            this.userId = userId;
            return this;
        }

        public Question build() {
            Question questionObj = new Question();
            questionObj.setQuestion(question);
            questionObj.setUser(user);
            questionObj.setUserId(userId);
            return questionObj;
        }
    }
}