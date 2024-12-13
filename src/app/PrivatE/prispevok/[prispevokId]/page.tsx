//src/app/prispevok/[id]/page.tsx

import Typography from '@mui/material/Typography';

export const metadata = { title: "Detail prispevku | ZoškaSnap" };

export default function PostDetail({
  params,}:{
    params:{prispevokId:string}
  }
) {
  
  return (
   
     <Typography> detail prispevku : {params.prispevokId} </Typography>
   
  );
} 
