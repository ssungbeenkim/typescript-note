type PageInfo = {
  title: string;
};
type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = {
  //*
  // 하나를 key로 쓰고 다른 하나를 다른 타입으로 묶고 싶을 때 쓸 수 있다.
  home: { title: 'Home' },
  about: { title: 'About' },
  contact: { title: 'Contact' },
};

type Product = 'cat' | 'dog';
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'
