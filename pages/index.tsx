import { signIn, useSession } from "next-auth/client";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
	const [session, loading] = useSession();

	useEffect(() => {
		console.log(session);
	}, [session]);

	return (
		<div className="bg-white flex flex-col justify-center font-bold h-24">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="next-discord-auth" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="text-black font-bold text-xl flex flex-row justify-center">
				<div className="text-blue-500">Next</div>-auth and&nbsp;
				<div className="text-blue-500">Discord</div>
			</div>
			<button
				className="my-4 rounded-md bg-gray-400 py-2 px-4 text-black focus:border focus:border-black"
				onClick={() => signIn("discord")}
			>
				Sign in
			</button>
			{session?.user ? (
				<div className="text-sm">Your username: {session.user.name}</div>
			) : null}
		</div>
	);
}
