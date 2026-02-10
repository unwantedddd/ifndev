import React from 'react';
import { Logo } from '@/shared/ui/base';
import { FaTelegramPlane, FaInstagram, FaFacebookF } from "react-icons/fa";

const footerLinks = {
	company: [
		{ label: 'About Us', href: '#' },
		{ label: 'Careers', href: '#' },
		{ label: 'Blog', href: '#' },
	],
	product: [
		{ label: 'Newability', href: '#' },
		{ label: 'Pricing', href: '#' },
		{ label: 'Customers', href: '#' },
	],
	resources: [
		{ label: 'Contacts', href: '#' },
		{ label: 'Community', href: '#' },
		{ label: 'Docs', href: '#' },
	],
};

const Footer = () => {
	return (
		<footer className="bg-background border-t border-border">
			<div className="max-w-6xl w-full mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-6 gap-8">
					<div className="md:col-span-2 flex flex-col items-start">
						<div className="mb-4">
							<Logo className="text-2xl text-primary font-bold" />
						</div>
						<p className="text-sm text-muted-foreground mt-2 max-w-xs">
							© 2026 #ifndef. All rights reserved. <br />
							Built for developers, by developers.
						</p>
					</div>

					<div className="flex flex-col space-y-3">
						<h4 className="font-bold text-foreground">Company</h4>
						<ul className="space-y-2 text-sm text-muted-foreground">
							{footerLinks.company.map((link) => (
								<li key={link.label}>
									<a href={link.href} className="hover:text-primary transition-colors">
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="flex flex-col space-y-3">
						<h4 className="font-bold text-foreground">Product</h4>
						<ul className="space-y-2 text-sm text-muted-foreground">
							{footerLinks.product.map((link) => (
								<li key={link.label}>
									<a href={link.href} className="hover:text-primary transition-colors">
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="flex flex-col space-y-3">
						<h4 className="font-bold text-foreground">Resources</h4>
						<ul className="space-y-2 text-sm text-muted-foreground">
							{footerLinks.resources.map((link) => (
								<li key={link.label}>
									<a href={link.href} className="hover:text-primary transition-colors">
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="flex gap-3 md:justify-end items-start mt-4 md:mt-0">
						<a className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
							<FaFacebookF />
						</a>

						<a className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
							<FaInstagram />
						</a>

						<a className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
							<FaTelegramPlane />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;