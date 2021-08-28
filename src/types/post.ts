export type PostData = {
  id: string;
  heading: string;
  slug: string;
  createdAt: string;
  favorited?: boolean;
  body: {
    text: string;
    html: string;
  }
};