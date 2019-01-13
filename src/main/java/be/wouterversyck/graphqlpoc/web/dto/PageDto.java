package be.wouterversyck.graphqlpoc.web.dto;

import lombok.Data;
import org.springframework.data.domain.Page;

import java.util.List;

@Data
public class PageDto<T> {
    private List<T> content;
    private int pageNumber;
    private int pageSize;
    private long totalElements;
    private boolean last;
    private boolean first;
    private boolean empty;
    private int totalPages;
    private int numberOfElements;

    public PageDto() {}

    public PageDto(Page<T> page) {
        content = page.getContent();
        last = page.isLast();
        first = page.isFirst();
        empty = page.isEmpty();
        pageNumber = page.getNumber();
        pageSize = page.getSize();
        totalElements = page.getTotalElements();
        totalPages = page.getTotalPages();
        numberOfElements = page.getNumberOfElements();
    }
}
