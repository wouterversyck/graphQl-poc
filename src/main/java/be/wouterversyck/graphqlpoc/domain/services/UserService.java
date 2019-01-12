package be.wouterversyck.graphqlpoc.domain.services;

import be.wouterversyck.graphqlpoc.domain.exceptions.EntityNotFoundException;
import be.wouterversyck.graphqlpoc.domain.models.User;
import be.wouterversyck.graphqlpoc.domain.repositories.UserRepository;
import lombok.NonNull;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(@NonNull final UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User addUser(@NonNull final User user) {
        return userRepository.save(user);
    }

    public User getUserById(final long id) {
        return userRepository.findById(id)
                .orElseThrow(EntityNotFoundException::new);
    }

    public List<User> getUsers(final int page, final int numberOfUsers) {
        return userRepository.findAll(PageRequest.of(page, numberOfUsers, Sort.by("firstName", "lastName")))
                .getContent();
    }
}
