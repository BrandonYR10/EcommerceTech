import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session: {
    user: { name: string; email: string; image: string };
  } | null = await getServerSession();

  if (!session) {
    console.log("❌ No hay sesión, redirigiendo a /");
    redirect("/");
  }

  let email: string = session?.user?.email;
  console.log("🔍 Verificando rol para email:", email);
  
  try {
    const res = await fetch(`http://localhost:3001/api/users/email/${email}`, {
      cache: 'no-store' // Evitar caché
    });
    
    if (!res.ok) {
      console.log("❌ Error al consultar usuario:", res.status, res.statusText);
      redirect("/");
    }
    
    const data = await res.json();
    console.log("✅ Usuario encontrado:", data.email, "Rol:", data.role);
    
    // redirecting user to the home page if not admin
    if (data.role !== "admin") {
      console.log("❌ Usuario no es admin, redirigiendo a /");
      redirect("/");
    }
    
    console.log("✅ Usuario es admin, permitiendo acceso al panel");
    return <>{children}</>;
    
  } catch (error) {
    console.error("❌ Error en layout admin:", error);
    redirect("/");
  }
}
