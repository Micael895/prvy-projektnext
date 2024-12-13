//src\app\PubliC\layout.tsx
import Container from "@mui/material/Container";

export const metadata = { title: "Public | SnapZoška"};

export default function PublicLayout({children}: {children: React.ReactNode}){
    return (
        <Container>
            {children} {/*  Render public pages */}
        </Container>
    );
}