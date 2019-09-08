/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBook = `subscription OnCreateBook {
  onCreateBook {
    id
    title
    isbn10
    amazon_used_price
    edition
    image
  }
}
`;
export const onCreateCompleted = `subscription OnCreateCompleted {
  onCreateCompleted {
    id
    date_completed
    reason
    connection_id
  }
}
`;
export const onCreateConnection = `subscription OnCreateConnection {
  onCreateConnection {
    id
    buyer_email
    date_connected
    listing_id
  }
}
`;
export const onCreateCourse = `subscription OnCreateCourse {
  onCreateCourse {
    id
    code
    subject_code
    name
  }
}
`;
export const onCreateListing = `subscription OnCreateListing {
  onCreateListing {
    id
    price
    date_listed
    seller_email
    verified
    book_id
  }
}
`;
