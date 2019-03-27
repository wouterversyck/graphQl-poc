package be.wouterversyck.graphqlpoc.domain.repositories;

import be.wouterversyck.graphqlpoc.domain.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends PagingAndSortingRepository<User, Long> {

    @Query(value = "select * from wv_user where CONCAT(FIRST_NAME, ' ', LAST_NAME) like %?1% or CONCAT(LAST_NAME, ' ', FIRST_NAME) like %?1% limit 10", nativeQuery = true)
    List<User> search(@Param("keyword") String keyword);

    boolean existsByUserName(String userName);
}
