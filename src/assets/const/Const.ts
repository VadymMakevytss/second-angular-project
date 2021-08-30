export const review = {
  author: [''],
  rating: null,
  descText: ['']
};

export const newItem = {
  id: null,
  imgUrl: '',
  price: null,
  discount: null,
  main: false,
  shop: '',
  name: '',
  description: '',
  shipping: '',
  discountUntil: '',
  new: false,
  color: [],
  size: [],
  review: []
};

const message = 'Required';

export const colors = ['Red', 'Blue', 'Orange', 'Green'];

export const sizes = ['S', 'XS', 'L', 'XL'];

export const shops = ['Alibaba', 'Amazon', 'Canada Bike'];

export const formErrors = {
  imgUrl: '',
  price: '',
  discount: '',
  selectMain: '',
  shop: '',
  name: '',
  description: '',
  shipping: '',
  discountUntil: '',
  selectNew: '',
  color: '',
  size: '',
  author: '',
  rating: '',
  descText: ''
};

export const validationMessages = {
  imgUrl: {
    required: message
  },
  price: {
    required: 'Required'
  },
  discount: {
    required: 'Required'
  },
  selectMain: {
    required: 'Required'
  },
  shop: {
    required: 'Required'
  },
  name: {
    required: 'Required'
  },
  description: {
    requred: 'Required'
  },
  shipping: {
    required: 'Required'
  },
  discountUntil: {
    required: 'Required'
  },
  selectNew: {
    required: 'Required'
  },
  color: {
    required: 'Required'
  },
  size: {
    required: 'Required'
  },
  author: {
    required: 'Required'
  },
  rating: {
    required: 'Required'
  },
  descText: {
    required: 'Required'
  },
};
