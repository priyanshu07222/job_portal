import { signIn } from "@/auth"

export function SignIn() {
    return (
        <form action={async (formData) => {
            "use server"
            await signIn("resend", formData)
        }
        } className="max-w-screen-2xl mx-auto flex flex-col gap-4" >
            <input type="email" name="email" placeholder="Email" className="border-2 rounded-xl outline-none p-4 text-lg" />
            <button type="submit" className="border border-blue-800 hover:bg-blue-800 hover:text-white font-semibold p-4 rounded-xl w-1/2 mx-auto ">Sign In</button>
        </form>)
}