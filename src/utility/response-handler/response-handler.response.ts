export const success = (message, code) => {
    return {
      is_success: true,
      message: message,
      responseCode: code,
    };
  };
  
  export const data = (item, code) => {
    return {
      is_success: true,
      data: item,
      responseCode: code,
    };
  };
  
  export const token = (item, code) => {
    return {
      is_success: true,
      token: item,
      responseCode: code,
    };
  };
  
  export const failure = (error, code, data, errorCode) => {
    return {
      is_success: false,
      message: error.message ? error.message : error,
      responseCode: code,
      data: data,
      errorCode: errorCode,
    };
  };
  
  export const page = (items, total, page_no, code, totalRecords?) => {
    return {
      is_success: true,
      data: {
        items: items,
        skip: page_no || 0,
        total: total || items.length,
        totalRecords: totalRecords ?? null,
      },
      responseCode: code,
    };
  };
  