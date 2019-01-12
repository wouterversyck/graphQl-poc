package be.wouterversyck.graphqlpoc.domain.repositories;

import be.wouterversyck.graphqlpoc.domain.models.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends PagingAndSortingRepository<User, Long> {
}
