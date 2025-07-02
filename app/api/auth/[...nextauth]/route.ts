import NextAuth from "next-auth/next";
import type { User as AuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";

// Debug: Verificar variables de entorno
console.log("🔧 Variables de entorno NextAuth:");
console.log("NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET ? "✅ Configurado" : "❌ No configurado");
console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL ? "✅ Configurado" : "❌ No configurado");
console.log("🔧 Todas las variables de entorno:", Object.keys(process.env).filter(key => key.includes('NEXTAUTH')));
console.log("🔧 NEXTAUTH_SECRET valor:", process.env.NEXTAUTH_SECRET);
console.log("🔧 NEXTAUTH_URL valor:", process.env.NEXTAUTH_URL);

export const authOptions: any = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          console.log("🔐 Intentando autenticar:", credentials.email);
          // Hacer petición al backend para verificar credenciales
          const response = await fetch(`http://localhost:3001/api/users/email/${credentials.email}`);
          
          if (!response.ok) {
            console.log("❌ Error en respuesta del backend:", response.status);
            return null;
          }
          
          const user = await response.json();
          console.log("✅ Usuario encontrado:", user.email, "Rol:", user.role);
          
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password!
            );
            if (isPasswordCorrect) {
              console.log("✅ Contraseña correcta, autenticación exitosa");
              return user;
            } else {
              console.log("❌ Contraseña incorrecta");
            }
          }
          return null;
        } catch (err: any) {
          console.error("❌ Error en autenticación:", err);
          return null;
        }
      },
    })
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID ?? "",
    //   clientSecret: process.env.GITHUB_SECRET ?? "",
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID ?? "",
    //   clientSecret: process.env.GOOGLE_SECRET ?? "",
    // }),
    // ...add more providers here if you want. You can find them on nextauth website.
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "12D16C923BA17672F89B18C1DB22A",
  debug: true,
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        console.log("🔑 Creando JWT para usuario:", user.email, "Rol:", user.role);
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token) {
        console.log("📋 Creando sesión para usuario:", token.email, "Rol:", token.role);
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session;
    },
    async signIn({ user, account }: { user: AuthUser; account: any }) {
      if (account?.provider == "credentials") {
        return true;
      }
      // if (account?.provider == "github") {

      //   try {
      //     const existingUser = await prisma.user.findFirst({ where: {email: user.email!} });
      //     if (!existingUser) {

      //       await prisma.user.create({
      //           data: {
      //             id: nanoid() + "",
      //             email: user.email!
      //           },
      //         });
      //       return true;
      //     }
      //     return true;
      //   } catch (err) {
      //     console.log("Error saving user", err);
      //     return false;
      //   }
      // }

      // if (account?.provider == "google") {

      //   try {
      //     const existingUser = await prisma.user.findFirst({where: { email: user.email! }});
      //     if (!existingUser) {
      //       await prisma.user.create({
      //           data: {
      //             id: nanoid() + "",
      //             email: user.email!
      //           },
      //         });

      //       return true;
      //     }
      //     return true;
      //   } catch (err) {
      //     console.log("Error saving user", err);
      //     return false;
      //   }
      // }
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
