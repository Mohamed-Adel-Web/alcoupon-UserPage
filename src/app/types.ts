interface Meta {
  meta_title_ar: string;
  meta_title_en: string;
  meta_description_en: string;
  meta_description_ar: string;
  meta_keyword_ar: string;
  meta_keyword_en: string;
}
export interface couponType {
  id: number;
  title_ar: string;
  title_en: string;
  code: string;
  status: boolean;
  featured: boolean;
  start_date: Date;
  end_date: Date;
  flag_code: string[];
  store: StoreType;
}
export interface ProductType {
  id: number;
  image: string;
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
  link_en: string;
  link_ar: string;
}
export interface StoreType {
  id: number;
  name_ar: string;
  name_en: string;
  image: string;
  link_en: string;
  link_ar: string;
  description_ar: string;
  description_en: string;
  meta: Meta;
  featured: string;
  status: string;
  category_id: number[];
  coupons: couponType[];
  about_ar: string;
  about_en: string;
  title_en: string;
  title_ar: string;
  products: ProductType[];
  discount_en: string;
  discount_ar: string;
}
export interface categoryTypes {
  id: number;
  name_en: string;
  name_ar: string;
  stores: StoreType[];
  meta_title_ar: string;
  meta_title_en: string;
  meta_description_en: string;
  meta_description_ar: string;
  meta_keyword_ar: string;
  meta_keyword_en: string;
}

export interface DateType {
  month: string;
  year: string;
}

export enum Language {
  AR = "ar",
  EN = "en",
}

export interface SwiperType {
  id?: number;
  image_ar: string;
  image_en: string;
}
export interface userType {
  email: string;
  phone_number: string;
}
