import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/custom-bootstrap.css";
import { ClientToaster } from "./client-toaster";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default async function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<ClientToaster />
			</body>
		</html>
	);
}
