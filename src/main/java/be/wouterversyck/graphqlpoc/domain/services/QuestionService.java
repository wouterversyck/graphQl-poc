package be.wouterversyck.graphqlpoc.domain.services;

import be.wouterversyck.graphqlpoc.domain.exceptions.EntityNotFoundException;
import be.wouterversyck.graphqlpoc.domain.models.Question;
import be.wouterversyck.graphqlpoc.domain.repositories.QuestionRepository;
import lombok.NonNull;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    private QuestionRepository questionRepository;

    public QuestionService(@NonNull final QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question addQuestion(@NonNull final Question question) {
        return questionRepository.save(question);
    }

    public Question getQuestionById(final long id) {
        return questionRepository.findById(id)
                .orElseThrow(EntityNotFoundException::new);
    }

    public List<Question> getQuestions(final int page, final int amount) {
        return questionRepository.findAll(PageRequest.of(page, amount, Sort.by("question")))
                .getContent();
    }
}
