export interface Product {
  id:                 number;
  name:               string;
  sku:                string;
  reference:          string;
  url:                string;
  variant_id:         number;
  product_image:      ProductImage;
  published_content:  PublishedContent;
  country_affinity:   CountryAffinity;
  product_relations:  any[];
  product_properties: any[];
  media_file:         MediaFile;
}

export interface CountryAffinity {
}

export interface MediaFile {
  id:           number;
  name:         string;
  display_name: string;
  url:          string;
  content_type: string;
  url_small:    string;
  url_medium:   string;
  url_large:    string;
}

export interface ProductImage {
  id:            number;
  fileable_type: string;
  product_id:    number;
  variant_id:    null;
  presentation:  Presentation;
  position:      number;
  media_file_id: number;
  options:       null;
  url:           string;
}

export interface Presentation {
  sv: string;
}

export interface PublishedContent {
  sv: Sv;
}

export interface Sv {
  table: Table;
}

export interface Table {
  name:              string;
  description:       string;
  short_description: string;
}
