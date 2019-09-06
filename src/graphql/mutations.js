/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteActiveOrders = `mutation DeleteActiveOrders($id: Int!) {
  deleteActive_orders(id: $id) {
    id
    buyer_email
    date_ordered
    listing_id
  }
}
`;
export const createActiveOrders = `mutation CreateActiveOrders(
  $createactive_ordersInput: Createactive_ordersInput!
) {
  createActive_orders(createactive_ordersInput: $createactive_ordersInput) {
    id
    buyer_email
    date_ordered
    listing_id
  }
}
`;
export const updateActiveOrders = `mutation UpdateActiveOrders(
  $updateactive_ordersInput: Updateactive_ordersInput!
) {
  updateActive_orders(updateactive_ordersInput: $updateactive_ordersInput) {
    id
    buyer_email
    date_ordered
    listing_id
  }
}
`;
export const deleteBooks = `mutation DeleteBooks($id: Int!) {
  deleteBooks(id: $id) {
    id
    title
    isbn10
    amazon_used_price
    edition
    image
  }
}
`;
export const createBooks = `mutation CreateBooks($createbooksInput: CreatebooksInput!) {
  createBooks(createbooksInput: $createbooksInput) {
    id
    title
    isbn10
    amazon_used_price
    edition
    image
  }
}
`;
export const updateBooks = `mutation UpdateBooks($updatebooksInput: UpdatebooksInput!) {
  updateBooks(updatebooksInput: $updatebooksInput) {
    id
    title
    isbn10
    amazon_used_price
    edition
    image
  }
}
`;
export const deleteCompletedOrders = `mutation DeleteCompletedOrders($order_id: Int!) {
  deleteCompleted_orders(order_id: $order_id) {
    order_id
    price
    date_listed
    date_ordered
    date_completed
    seller_email
    buyer_email
    reason
    book_id
  }
}
`;
export const createCompletedOrders = `mutation CreateCompletedOrders(
  $createcompleted_ordersInput: Createcompleted_ordersInput!
) {
  createCompleted_orders(
    createcompleted_ordersInput: $createcompleted_ordersInput
  ) {
    order_id
    price
    date_listed
    date_ordered
    date_completed
    seller_email
    buyer_email
    reason
    book_id
  }
}
`;
export const updateCompletedOrders = `mutation UpdateCompletedOrders(
  $updatecompleted_ordersInput: Updatecompleted_ordersInput!
) {
  updateCompleted_orders(
    updatecompleted_ordersInput: $updatecompleted_ordersInput
  ) {
    order_id
    price
    date_listed
    date_ordered
    date_completed
    seller_email
    buyer_email
    reason
    book_id
  }
}
`;
export const deleteCourses = `mutation DeleteCourses($id: Int!) {
  deleteCourses(id: $id) {
    id
    code
    subject_code
    name
  }
}
`;
export const createCourses = `mutation CreateCourses($createcoursesInput: CreatecoursesInput!) {
  createCourses(createcoursesInput: $createcoursesInput) {
    id
    code
    subject_code
    name
  }
}
`;
export const updateCourses = `mutation UpdateCourses($updatecoursesInput: UpdatecoursesInput!) {
  updateCourses(updatecoursesInput: $updatecoursesInput) {
    id
    code
    subject_code
    name
  }
}
`;
export const deleteListings = `mutation DeleteListings($id: Int!) {
  deleteListings(id: $id) {
    id
    price
    date_listed
    seller_email
    verified
    book_id
  }
}
`;
export const createListings = `mutation CreateListings($createlistingsInput: CreatelistingsInput!) {
  createListings(createlistingsInput: $createlistingsInput) {
    id
    price
    date_listed
    seller_email
    verified
    book_id
  }
}
`;
export const updateListings = `mutation UpdateListings($updatelistingsInput: UpdatelistingsInput!) {
  updateListings(updatelistingsInput: $updatelistingsInput) {
    id
    price
    date_listed
    seller_email
    verified
    book_id
  }
}
`;
export const createMyType = `mutation CreateMyType($input: CreateMyTypeInput!) {
  createMyType(input: $input) {
    id
    title
    content
    price
    rating
  }
}
`;
export const updateMyType = `mutation UpdateMyType($input: UpdateMyTypeInput!) {
  updateMyType(input: $input) {
    id
    title
    content
    price
    rating
  }
}
`;
export const deleteMyType = `mutation DeleteMyType($input: DeleteMyTypeInput!) {
  deleteMyType(input: $input) {
    id
    title
    content
    price
    rating
  }
}
`;
