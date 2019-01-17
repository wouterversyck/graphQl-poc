package be.wouterversyck.graphqlpoc.domain.services;

import be.wouterversyck.graphqlpoc.domain.models.Question;
import be.wouterversyck.graphqlpoc.domain.repositories.QuestionRepository;
import lombok.NonNull;
import org.reactivestreams.Publisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import reactor.core.Disposable;
import reactor.core.publisher.ConnectableFlux;
import reactor.core.publisher.DirectProcessor;

import javax.annotation.PreDestroy;
import java.util.List;
import java.util.Optional;


@Service
public class QuestionService {
    private QuestionRepository questionRepository;
    private DirectProcessor<Question> source;
    private Publisher<Question> stream;
    private Disposable disposable;

    public QuestionService(@NonNull final QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
        source = DirectProcessor.create();
        stream = source
                .publish();
        disposable = ((ConnectableFlux<Question>) stream).connect();
    }

    public Question addQuestion(@NonNull final Question question) {
        source.onNext(question);
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
        return stream;
    }

    @PreDestroy
    public void destroy() {
        source.onComplete();
        disposable.dispose();
    }
}
