/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteBook = `mutation DeleteBook($id: Int!) {
  deleteBook(id: $id) {
    id
    title
    isbn10
    amazon_used_price
    edition
    image
  }
}
`;
export const createBook = `mutation CreateBook($createBookInput: CreateBookInput!) {
  createBook(createBookInput: $createBookInput) {
    id
    title
    isbn10
    amazon_used_price
    edition
    image
  }
}
`;
export const updateBook = `mutation UpdateBook($updateBookInput: UpdateBookInput!) {
  updateBook(updateBookInput: $updateBookInput) {
    id
    title
    isbn10
    amazon_used_price
    edition
    image
  }
}
`;
export const deleteCompleted = `mutation DeleteCompleted($id: Int!) {
  deleteCompleted(id: $id) {
    id
    date_completed
    reason
    connection_id
  }
}
`;
export const createCompleted = `mutation CreateCompleted($createCompletedInput: CreateCompletedInput!) {
  createCompleted(createCompletedInput: $createCompletedInput) {
    id
    date_completed
    reason
    connection_id
  }
}
`;
export const updateCompleted = `mutation UpdateCompleted($updateCompletedInput: UpdateCompletedInput!) {
  updateCompleted(updateCompletedInput: $updateCompletedInput) {
    id
    date_completed
    reason
    connection_id
  }
}
`;
export const deleteConnection = `mutation DeleteConnection($id: Int!) {
  deleteConnection(id: $id) {
    id
    buyer_email
    date_connected
    listing_id
  }
}
`;
export const createConnection = `mutation CreateConnection($createConnectionInput: CreateConnectionInput!) {
  createConnection(createConnectionInput: $createConnectionInput) {
    id
    buyer_email
    date_connected
    listing_id
  }
}
`;
export const updateConnection = `mutation UpdateConnection($updateConnectionInput: UpdateConnectionInput!) {
  updateConnection(updateConnectionInput: $updateConnectionInput) {
    id
    buyer_email
    date_connected
    listing_id
  }
}
`;
export const deleteCourse = `mutation DeleteCourse($id: Int!) {
  deleteCourse(id: $id) {
    id
    code
    subject_code
    name
  }
}
`;
export const createCourse = `mutation CreateCourse($createCourseInput: CreateCourseInput!) {
  createCourse(createCourseInput: $createCourseInput) {
    id
    code
    subject_code
    name
  }
}
`;
export const updateCourse = `mutation UpdateCourse($updateCourseInput: UpdateCourseInput!) {
  updateCourse(updateCourseInput: $updateCourseInput) {
    id
    code
    subject_code
    name
  }
}
`;
export const deleteListing = `mutation DeleteListing($id: Int!) {
  deleteListing(id: $id) {
    id
    price
    date_listed
    seller_email
    verified
    book_id
  }
}
`;
export const createListing = `mutation CreateListing($createListingInput: CreateListingInput!) {
  createListing(createListingInput: $createListingInput) {
    id
    price
    date_listed
    seller_email
    verified
    book_id
  }
}
`;
export const updateListing = `mutation UpdateListing($updateListingInput: UpdateListingInput!) {
  updateListing(updateListingInput: $updateListingInput) {
    id
    price
    date_listed
    seller_email
    verified
    book_id
  }
}
`;
