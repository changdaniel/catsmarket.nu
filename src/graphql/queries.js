/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourse = `query GetCourse($id: ID!) {
  getCourse(id: $id) {
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
export const listCourses = `query ListCourses(
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      course_code
      department_code
      name
      books {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getBook = `query GetBook($id: ID!) {
  getBook(id: $id) {
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
export const listBooks = `query ListBooks(
  $filter: ModelBookFilterInput
  $limit: Int
  $nextToken: String
) {
  listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      course {
        id
        course_code
        department_code
        name
      }
      isbn10
      title
      amazon_used_price
      image_link
      edition
    }
    nextToken
  }
}
`;
