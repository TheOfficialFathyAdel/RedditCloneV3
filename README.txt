src/app/(protected)/_layout.tsx 
************************************
if (!isSignedIn) {
  return <Redirect href={"/"} />;
}

src/app
************************************
const { signOut } = useAuth();



src/app/(auth)/_layout.tsx
*******************************
if (isSignedIn) {
    return <Redirect href={"/"} />;
}