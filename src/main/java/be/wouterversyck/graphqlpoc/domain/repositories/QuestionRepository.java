package be.wouterversyck.graphqlpoc.domain.repositories;

import be.wouterversyck.graphqlpoc.domain.models.Question;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface QuestionRepository extends PagingAndSortingRepository<Question, Long> {
    public List<Question> getByUserId(long id);
}
