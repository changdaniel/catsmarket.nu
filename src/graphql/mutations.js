/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCourse = `mutation CreateCourse($input: CreateCourseInput!) {
  createCourse(input: $input) {
    id
    course_code
    department_code
    name
    books {
      items {
        id
        isbn10
        title
        amazon_used_price
        image_link
        edition
      }
      nextToken
    }
  }
}
`;
export const updateCourse = `mutation UpdateCourse($input: UpdateCourseInput!) {
  updateCourse(input: $input) {
    id
    course_code
    department_code
    name
    books {
      items {
        id
        isbn10
        title
        amazon_used_price
        image_link
        edition
      }
      nextToken
    }
  }
}
`;
export const deleteCourse = `mutation DeleteCourse($input: DeleteCourseInput!) {
  deleteCourse(input: $input) {
    id
    course_code
    department_code
    name
    books {
      items {
        id
        isbn10
        title
        amazon_used_price
        image_link
        edition
      }
      nextToken
    }
  }
}
`;
export const createBook = `mutation CreateBook($input: CreateBookInput!) {
  createBook(input: $input) {
    id
    course {
      id
      course_code
      department_code
      name
      books {
        nextToken
      }
    }
    isbn10
    title
    amazon_used_price
    image_link
    edition
  }
}
`;
export const updateBook = `mutation UpdateBook($input: UpdateBookInput!) {
  updateBook(input: $input) {
    id
    course {
      id
      course_code
      department_code
      name
      books {
        nextToken
      }
    }
    isbn10
    title
    amazon_used_price
    image_link
    edition
  }
}
`;
export const deleteBook = `mutation DeleteBook($input: DeleteBookInput!) {
  deleteBook(input: $input) {
    id
    course {
      id
      course_code
      department_code
      name
      books {
        nextToken
      }
    }
    isbn10
    title
    amazon_used_price
    image_link
    edition
  }
}
`;
