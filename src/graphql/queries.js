/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getActiveOrders = `query GetActiveOrders($id: Int!) {
  getActive_orders(id: $id) {
    id
    buyer_email
    date_ordered
    listing_id
  }
}
`;
export const listActiveOrderss = `query ListActiveOrderss {
  listActive_orderss {
    id
    buyer_email
    date_ordered
    listing_id
  }
}
`;
export const getBooks = `query GetBooks($id: Int!) {
  getBooks(id: $id) {
    id
    title
    isbn10
    amazon_used_price
    edition
    image
  }
}
`;
export const listBookss = `query ListBookss {
  listBookss {
    id
    title
    isbn10
    amazon_used_price
    edition
    image
  }
}
`;
export const getCompletedOrders = `query GetCompletedOrders($order_id: Int!) {
  getCompleted_orders(order_id: $order_id) {
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
export const listCompletedOrderss = `query ListCompletedOrderss {
  listCompleted_orderss {
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
export const getCourses = `query GetCourses($id: Int!) {
  getCourses(id: $id) {
    id
    code
    subject_code
    name
  }
}
`;
export const listCoursess = `query ListCoursess {
  listCoursess {
    id
    code
    subject_code
    name
  }
}
`;
export const getListings = `query GetListings($id: Int!) {
  getListings(id: $id) {
    id
    price
    date_listed
    seller_email
    verified
    book_id
  }
}
`;
export const listListingss = `query ListListingss {
  listListingss {
    id
    price
    date_listed
    seller_email
    verified
    book_id
  }
}
`;
export const getMyType = `query GetMyType($id: ID!) {
  getMyType(id: $id) {
    id
    title
    content
    price
    rating
  }
}
`;
export const listMyTypes = `query ListMyTypes(
  $filter: ModelMyTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listMyTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      content
      price
      rating
    }
    nextToken
  }
}
`;
