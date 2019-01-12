package be.wouterversyck.graphqlpoc.domain.repositories;

import be.wouterversyck.graphqlpoc.domain.models.Question;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface QuestionRepository extends PagingAndSortingRepository<Question, Long> {
}
