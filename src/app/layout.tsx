import Footer from "./footer";
import "./globals.css";
import Header from "./header";

export const metadata = {
	icons: "/favicon.svg",
	title: "Ark.",
	description:
		"Elevate Your Business with Cutting-edge Printing and Design Services",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-slate-100 max-w-[100vw] overflow-x-hidden">
				<Header />
				<main className="min-h-[80vh]">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
