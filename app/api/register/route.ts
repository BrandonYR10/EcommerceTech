import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { email, password } = await request.json();

  try {
    // Verificar si el usuario ya existe en el backend
    const checkResponse = await fetch(`http://localhost:3001/api/users/email/${email}`);
    
    if (checkResponse.ok) {
      return new NextResponse("Email is already in use", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    // Crear usuario en el backend
    const createResponse = await fetch(`http://localhost:3001/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password: hashedPassword,
        role: 'user' // Por defecto, los usuarios registrados son 'user'
      }),
    });

    if (createResponse.ok) {
      return new NextResponse("user is registered", { status: 200 });
    } else {
      return new NextResponse("Error creating user", { status: 500 });
    }
  } catch (err: any) {
    console.error("Error en registro:", err);
    return new NextResponse("Internal server error", {
      status: 500,
    });
  }
};
