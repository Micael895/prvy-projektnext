//src\app\PrivatE\Layout.tsx
import AuthGuard from "@/components/AuthGuard";

import Box from "@mui/material/Box";

export const metadata = { title: "Protected | SnapZoška" };

const PrivateLayout = ({ children }: { children: React.ReactNode }) => (
  <AuthGuard redirectPath="/auth/registracia">
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center", 
        alignItems: "flex-start", 
        backgroundColor: "background.default",
        px: 2,
      }}
    >
      {children}
    </Box>
  </AuthGuard>
);

export default PrivateLayout;