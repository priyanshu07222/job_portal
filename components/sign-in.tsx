import { signIn } from "@/auth"

export function SignIn() {
    return
    <form action={async (formData) => {
        "use server"
        await signIn("resend", formData)
    }
    } className="flex flex-col" >
        <input type="email" name="email" placeholder="Email" className="border border-red-300 p-4 bg-slate-800 z-30" />
        <button type="submit">Signin</button>
    </form>
}