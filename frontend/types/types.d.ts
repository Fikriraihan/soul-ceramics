type subDetail = {
  paragraph: string;
  subImage: string;
};

type size = "small" | "medium" | "large";

export interface JournalProps {
  id: number;
  category: string;
  title: string;
  description: string;
  headImage: string;
  size: size;
  subDetail: subDetail[];
}

export interface ProductProps {
  id?: string | number;
  title: string;
  price?: number;
  image: string;
  category?: string;
  href?: Url;
  size?: size;
  discount?: number;
  wrapperClassname?: string;
  additionalClassName?: string;
  quantity?: number;
  stock?: number;
  additionalHeight?: string;
}
