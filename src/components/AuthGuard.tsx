//src\components\AuthGuard.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

interface AuthGuardProps {
  children: React.ReactNode;
  redirectPath: string;
}

const AuthGuard = ({ children, redirectPath }: AuthGuardProps) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  if (!session) {
    router.push(redirectPath);
    return null; 
  }

  return <>{children}</>;
};

export default AuthGuard;