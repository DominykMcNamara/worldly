type User = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  image: string | null;
  link: string | null;
  location: string | null;
  pronouns: string | null;
  bio: string | null;
  createdAt: date;
  updatedAt: date;
};

type BlogPost = {
  id: string;
  title: string;
  content: string;
  author: User;
  authorId: string;
};

type Account = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string?;
  access_token: string?;
  expires_at: number?;
  token_type: string?;
  scope: string?;
  id_token: string?;
  session_state: string?;
};

interface SignUpForm {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    link?: string
    image?: string;
    location?: string;
    pronouns?: string;
    bio?: string;
  }
  
