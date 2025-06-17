import { DollarSign, CreditCard, Smartphone, Building } from 'lucide-react';

const givingOptions = [
    {
      icon: Smartphone,
      title: "Mobile Money",
      description: "Give via M-Pesa or other mobile money services",
      details: "Send to: Trinity Baptist Church\nPaybill: (To be provided)\nAccount: Your name"
    },
    {
      icon: Building,
      title: "Bank Transfer",
      description: "Direct bank transfer or deposit",
      details: "Bank: (To be provided)\nAccount Name: Trinity Baptist Church\nAccount Number: (To be provided)"
    },
    {
      icon: CreditCard,
      title: "Online Giving",
      description: "Secure online donations via card",
      details: "Coming soon - secure online giving platform"
    },
    {
      icon: DollarSign,
      title: "Cash/Check",
      description: "Give in person during service",
      details: "Place your offering in the collection during Sunday service"
    }
  ];


  export { givingOptions }