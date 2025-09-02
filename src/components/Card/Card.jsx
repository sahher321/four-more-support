import { Card, CardContent, Typography, Avatar } from "@mui/material";
import {complexity} from "../../assets"
export default function SimpleCard() {
  return (
    <Card  sx={{ width: 300, height: 300 , textAlign: "center",backgroundColor:"secondary.main" , color:"primary.light", display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column" , borderRadius:"10px",boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}>
      <Avatar 
        src={complexity} 
        sx={{ width: 100, height: 100, mx: "auto", mb: 2 }} 
      />
      <CardContent sx={{padding:0}}>
        <Typography variant="h6" fontWeight={400} lineHeight={1.2}>Complexity & <br/> expertise</Typography>
      </CardContent>
    </Card>
  );
}
