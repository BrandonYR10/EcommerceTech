"use client";
import { useSession } from "next-auth/react";

const SessionDebug = () => {
  const { data: session, status } = useSession();

  return (
    <div className="fixed top-4 right-4 bg-white p-4 border rounded-lg shadow-lg z-50 max-w-md">
      <h3 className="font-bold mb-2">Debug de Sesión</h3>
      <div className="text-sm">
        <p><strong>Status:</strong> {status}</p>
        {session && (
          <>
            <p><strong>Email:</strong> {session.user?.email}</p>
            <p><strong>Rol:</strong> {(session.user as any)?.role}</p>
            <p><strong>ID:</strong> {(session.user as any)?.id}</p>
          </>
        )}
        <pre className="mt-2 text-xs bg-gray-100 p-2 rounded">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default SessionDebug; 
