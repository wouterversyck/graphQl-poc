package be.wouterversyck.graphqlpoc.domain.services;

import be.wouterversyck.graphqlpoc.domain.models.User;
import be.wouterversyck.graphqlpoc.domain.repositories.UserRepository;
import lombok.NonNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(@NonNull final UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User addUser(@NonNull final User user) {
        return userRepository.save(user);
    }

    public void deleteUser(final long id) {
        userRepository.deleteById(id);
    }

    public Optional<User> getUserById(final long id) {
        return userRepository.findById(id);
    }

    public Page<User> getUsers(final int page, final int numberOfUsers) {
        return userRepository.findAll(PageRequest.of(page, numberOfUsers, Sort.by("firstName", "lastName")));
    }
}
