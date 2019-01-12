package be.wouterversyck.graphqlpoc.web.controllers;

import be.wouterversyck.graphqlpoc.domain.models.User;
import be.wouterversyck.graphqlpoc.domain.services.UserService;
import lombok.NonNull;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("user")
@RestController
public class UserController {

    private UserService userService;

    public UserController(@NonNull final UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public User addUser(@RequestBody @Valid User user) {
        return userService.addUser(user);
    }

    @GetMapping("{id}")
    public User getUser(@PathVariable("id") long id) {
        return userService.getUserById(id);
    }

    @GetMapping("{page}/{count}")
    public List<User> getUsers(@PathVariable("page") int page, @PathVariable("count") int count) {
        return userService.getUsers(page, count);
    }
}
