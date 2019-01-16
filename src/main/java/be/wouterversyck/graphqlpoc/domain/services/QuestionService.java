package be.wouterversyck.graphqlpoc.domain.services;

import be.wouterversyck.graphqlpoc.domain.models.Question;
import be.wouterversyck.graphqlpoc.domain.repositories.QuestionRepository;
import lombok.NonNull;
import org.reactivestreams.Publisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private QuestionRepository questionRepository;

    public QuestionService(@NonNull final QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Transactional
    public Question addQuestion(@NonNull final Question question) {
        return questionRepository.save(question);
    }

    public Optional<Question> getQuestionById(final long id) {
        return questionRepository.findById(id);
    }

    public Page<Question> getQuestions(final int page, final int amount) {
        return questionRepository.findAll(PageRequest.of(page, amount, Sort.by("question")));
    }

    public void deleteQuestion(final long id) {
        questionRepository.deleteById(id);
    }

    public List<Question> getByUserId(final long id) {
        return questionRepository.getByUserId(id);
    }

    public Publisher<Question> getQuestionPublisher() {
        return Flux.just(
                getQuestion("test", 1),
                getQuestion("test2", 1)
        ).delayElements(Duration.ofMillis(2000));
    }

    private Question getQuestion(String question, long id) {
        return Question.builder()
                .withQuestion(question)
                .withUserId(id)
                .build();
    }
}
