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

type UserProfile = {
  firstName?: string | null | undefined;
  lastName?: string | null | undefined;
  username?: string | null | undefined;
  email?: string | null | undefined;
  location?: string | null | undefined;
  bio?: string | null | undefined;
  link?: string | url | null | undefined;
  pronouns?: string | null | undefined;
  image?: string | null | undefined;
} | undefined;

type Post = {
  id: string;
  title: string;
  content: string;
  author: User;
  authorId: string;
  createdAt: date;
  updatedAt: date;
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

interface RegisterForm {
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

  interface Credentials {
    email: string;
    password: string;
  }
  
