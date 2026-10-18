import type { Metadata } from 'next';
import { Archivo, Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const archivo = Archivo({
	subsets: ['latin', 'latin-ext'],
	variable: '--font-archivo',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'KMT',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='sl' className={cn("font-sans", geist.variable)}>
			<body className='kmt-layout'>
				<Navbar />
				{children}
				<footer className='kmt-full'>
					<div>{/* footer content */}</div>
				</footer>
			</body>
		</html>
	);
}
