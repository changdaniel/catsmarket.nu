/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourse = `subscription OnCreateCourse {
  onCreateCourse {
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
export const onUpdateCourse = `subscription OnUpdateCourse {
  onUpdateCourse {
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
export const onDeleteCourse = `subscription OnDeleteCourse {
  onDeleteCourse {
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
export const onCreateBook = `subscription OnCreateBook {
  onCreateBook {
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
export const onUpdateBook = `subscription OnUpdateBook {
  onUpdateBook {
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
export const onDeleteBook = `subscription OnDeleteBook {
  onDeleteBook {
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
