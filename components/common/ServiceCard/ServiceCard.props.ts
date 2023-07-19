export interface ServiceCardProps {
  linkText: string;
  service: {
    title: string;
    overview: string;
    description: string;
    subservices: string[];
    number: string;
  };
}
