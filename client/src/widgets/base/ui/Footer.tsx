import { Logo } from '@/shared/ui/base';
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border mt-auto">
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
                        <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                            <Link to="/company/about-us" className="hover:text-primary transition-colors">
                                About Us
                            </Link>
                            <Link to="/company/careers" className="hover:text-primary transition-colors">
                                Careers
                            </Link>
                            <Link to="/company/blog" className="hover:text-primary transition-colors">
                                Blog
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <h4 className="font-bold text-foreground">Product</h4>
                        <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                            <Link to="/product/newability" className="hover:text-primary transition-colors">
                                Newability
                            </Link>
                            <Link to="/product/pricing" className="hover:text-primary transition-colors">
                                Pricing
                            </Link>
                            <Link to="/product/customers" className="hover:text-primary transition-colors">
                                Customers
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-3">
                        <h4 className="font-bold text-foreground">Resources</h4>
                        <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                            <Link to="/resources/contacts" className="hover:text-primary transition-colors">
                                Contacts
                            </Link>
                            <Link to="/resources/community" className="hover:text-primary transition-colors">
                                Community
                            </Link>
                            <Link to="https://github.com/unwantedddd/ifndev" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-primary transition-colors"
                            >
                                Docs
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;