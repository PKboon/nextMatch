import { auth, signOut } from "@/auth";
import Button from "@mui/material/Button/Button";

export default async function Home() {
    const session = await auth();
    const logOut = async () => {
        "use server";
        await signOut();
    };

    return (
        <div>
            <h3 className="text-2xl font-semibold">User session data:</h3>
            {session ? (
                <div>
                    <pre>{JSON.stringify(session, null, 2)}</pre>
                </div>
            ) : (
                <div>not sign in</div>
            )}
            <form action={logOut}>
                <Button variant="contained" type="submit">
                    Sign out
                </Button>
            </form>
        </div>
    );
}
