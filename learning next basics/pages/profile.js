import useAuth from "../hooks/useAuth";

export default function Profile( ) {
    const { user, error } = useAuth()

    return (
        <>
            <h1>Your Profile </h1>
            {
                !user && (error?.message || "loading")
            }
            {
                user && 
                <pre>
                    { JSON.stringify(user, null, 2)}
                </pre>
            }
        </>
    )
}