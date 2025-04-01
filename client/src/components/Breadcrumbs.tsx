import { Link } from "wouter";
import { Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items = [] }: BreadcrumbsProps) {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto px-4 py-2">
        <nav className="flex text-sm" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex items-center text-gray-700 hover:text-primary">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Link>
            </li>
            
            {items.map((item, index) => (
              <li key={index} className="inline-flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <Link 
                  href={item.href} 
                  className={`ml-1 md:ml-2 ${index === items.length - 1 ? 'text-gray-600 font-medium' : 'text-gray-700 hover:text-primary'}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
