/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateActiveOrders = `subscription OnCreateActiveOrders {
  onCreateActive_orders {
    id
    buyer_email
    date_ordered
    listing_id
  }
}
`;
export const onCreateBooks = `subscription OnCreateBooks {
  onCreateBooks {
    id
    title
    isbn10
    amazon_used_price
    edition
    image
  }
}
`;
export const onCreateCompletedOrders = `subscription OnCreateCompletedOrders {
  onCreateCompleted_orders {
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
export const onCreateCourses = `subscription OnCreateCourses {
  onCreateCourses {
    id
    code
    subject_code
    name
  }
}
`;
export const onCreateListings = `subscription OnCreateListings {
  onCreateListings {
    id
    price
    date_listed
    seller_email
    verified
    book_id
  }
}
`;
export const onCreateMyType = `subscription OnCreateMyType {
  onCreateMyType {
    id
    title
    content
    price
    rating
  }
}
`;
export const onUpdateMyType = `subscription OnUpdateMyType {
  onUpdateMyType {
    id
    title
    content
    price
    rating
  }
}
`;
export const onDeleteMyType = `subscription OnDeleteMyType {
  onDeleteMyType {
    id
    title
    content
    price
    rating
  }
}
`;
