import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      username: string;
      email: string;
      image: string;
      location: string;
      bio: string;
      pronouns: string;
      link: string
    };
  }
}
