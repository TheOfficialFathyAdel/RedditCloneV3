src/app/(protected)/_layout.tsx 
************************************
if (!isSignedIn) {
  return <Redirect href={"/"} />;
}

************************************
const { signOut } = useAuth();



