/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = `query GetBook($id: Int!) {
  getBook(id: $id) {
    id
    title
    isbn10
    amazon_used_price
    edition
    image
  }
}
`;
export const listBooks = `query ListBooks {
  listBooks {
    id
    title
    isbn10
    amazon_used_price
    edition
    image
  }
}
`;
export const getCompleted = `query GetCompleted($id: Int!) {
  getCompleted(id: $id) {
    id
    date_completed
    reason
    connection_id
  }
}
`;
export const listCompleteds = `query ListCompleteds {
  listCompleteds {
    id
    date_completed
    reason
    connection_id
  }
}
`;
export const getConnection = `query GetConnection($id: Int!) {
  getConnection(id: $id) {
    id
    buyer_email
    date_connected
    listing_id
  }
}
`;
export const listConnections = `query ListConnections {
  listConnections {
    id
    buyer_email
    date_connected
    listing_id
  }
}
`;
export const getCourse = `query GetCourse($id: Int!) {
  getCourse(id: $id) {
    id
    code
    subject_code
    name
  }
}
`;
export const listCourses = `query ListCourses {
  listCourses {
    id
    code
    subject_code
    name
  }
}
`;
export const getListing = `query GetListing($id: Int!) {
  getListing(id: $id) {
    id
    price
    date_listed
    seller_email
    verified
    book_id
  }
}
`;
export const listListings = `query ListListings {
  listListings {
    id
    price
    date_listed
    seller_email
    verified
    book_id
  }
}
`;
