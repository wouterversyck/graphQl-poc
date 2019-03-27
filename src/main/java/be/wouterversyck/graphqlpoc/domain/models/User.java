package be.wouterversyck.graphqlpoc.domain.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
@Table(name = "wv_user")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString(exclude = {"questions"})
public class User {
    @Id
    @GeneratedValue
    private long id;

    @NotBlank
    @Column(name = "user_name", nullable = false, unique = true)
    private String userName;

    @NotBlank
    @Column(name = "first_name", nullable = false)
    private String firstName;

    @NotBlank
    @Column(name = "last_name", nullable = false)
    private String lastName;

    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Question> questions;
}
