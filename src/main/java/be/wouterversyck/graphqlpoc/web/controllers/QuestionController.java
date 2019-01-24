package be.wouterversyck.graphqlpoc.web.controllers;

import be.wouterversyck.graphqlpoc.domain.models.Question;
import be.wouterversyck.graphqlpoc.domain.services.QuestionService;
import be.wouterversyck.graphqlpoc.web.dto.PageDto;
import be.wouterversyck.graphqlpoc.web.dto.QuestionDto;
import be.wouterversyck.graphqlpoc.web.exceptions.EntityNotFoundException;
import lombok.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequestMapping("question")
@RestController
public class QuestionController {

    private QuestionService questionService;

    public QuestionController(@NonNull final QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping("{id}")
    public Question getQuestion(@PathVariable("id") final long id) {
        return questionService.getQuestionById(id)
                .orElseThrow(EntityNotFoundException::new);
    }

    @PostMapping
    public Question addQuestion(@RequestBody @Valid final QuestionDto question) {
        return questionService.addQuestion(this.toQuestion(question));
    }

    @GetMapping("{page}/{count}")
    public PageDto<Question> getQuestions(@PathVariable("page") final int page, @PathVariable("count") final int count) {
        return new PageDto<>(
                questionService.getQuestions(page, count)
        );
    }

    @DeleteMapping("{id}")
    public void deleteQuestion(@PathVariable final long id) {
        questionService.deleteQuestion(id);
    }

    private Question toQuestion(QuestionDto questionDto) {
        return Question.builder()
                .question(questionDto.getQuestion())
                .userId(questionDto.getUserId())
                .build();
    }
}
