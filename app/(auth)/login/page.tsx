import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="rounded-3xl border border-[#dfe5df] bg-white p-8 shadow-sm sm:p-10">
      <div className="mb-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.16em] text-[#6f8f74]">
          Welcome back
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">Log in to Sourcd</h1>
        <p className="mt-3 text-sm leading-6 text-[#667168]">
          Pick up where you left off.
        </p>
      </div>

      <form className="space-y-5">
        <label className="block text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded-xl border border-[#d5ddd5] px-4 py-3 outline-none transition placeholder:text-[#a3aca4] focus:border-[#6f8f74] focus:ring-2 focus:ring-[#6f8f74]/20"
            placeholder="you@example.com"
          />
        </label>

        <label className="block text-sm font-medium">
          Password
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="mt-2 w-full rounded-xl border border-[#d5ddd5] px-4 py-3 outline-none transition placeholder:text-[#a3aca4] focus:border-[#6f8f74] focus:ring-2 focus:ring-[#6f8f74]/20"
            placeholder="••••••••"
          />
        </label>

        <button
          type="button"
          className="w-full rounded-xl bg-[#172018] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#314635]"
        >
          Log in
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-[#667168]">
        New to Sourcd?{" "}
        <Link href="/signup" className="font-medium text-[#49654f] hover:underline">
          Create an account
        </Link>
      </p>
    </section>
  );
}
