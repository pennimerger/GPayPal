// export const data = [
//   [
//     personal = [
//       {
//         title: "How PayPal works",
//         desc: "What you can do with a personal account",
//         url: "/personal",
//       },
//       {
//         title: "Pay Online",
//         desc: "Online payments without borders",
//         url: "/pay-online",
//       },
//       {
//         title: "Send payments",
//         desc: "Send payments locally or abroad",
//         url: "/send-money-online",
//       },
//       {
//         title: "Get Paid",
//         desc: "Request payments from almost anyone",
//         url: "/requesting-payments",
//       },
//       {
//         title: "Get the PayPal app",
//         desc: "Manage your account on your mobile",
//         url: "/mobile-apps",
//       },
//       {
//         title: "Search for deals",
//         desc: "Pay with PayPal and save money",
//         url: "/Shopping",
//       }
//     ],
//     business = [
//       {
//         title: "All business solutions",
//         desc: "See our range of products",
//         url: "/merchant",
//       },
//       {
//         title: "Accept online payments",
//         desc: "Get paid on your website",
//         url: "/accept-payments-online",
//       },
//       {
//         title: "Send invoices",
//         desc: "Create and email online invoices",
//         url: "/email-invoice",
//       },
//       {
//         title: "PayPal for freelancers",
//         desc: "Grow your freelance business",
//         url: "/freelancers",
//       }
//     ],
//   ],
// ];

const section2 = [
  {
    title: "Individuals",
    desc: "Find out why we have more than 200M active accounts worldwide.",
    button: "Learn More",
    image: "homepage/1-individuals.jpg",
  },
  {
    title: "Businesses",
    desc: "Join more than 7 million businesses around the world offering PayPal.",
    button: "Learn More",
    image: "homepage/2-businesses.jpg",
  },
  {
    title: "Partners and developers",
    desc: "Work with PayPal to offer your customers world class payment solutions.",
    button: "Learn More",
    image: "homepage/3-pd.jpg",
  }
];

const howItWorks = [
  {
    desc: "You create an invoice and send it to your customer.",
    image: "invoices/step-1.png",
  },
  {
    desc: "Your customer receives the email invoice and clicks on the PayPal checkout button.",
    image: "invoices/step-2.png",
  },
  {
    desc: "By clicking, they’re sent to the PayPal website where they can review and print the invoice details.",
    image: "invoices/step-3.png",
  },
  {
    desc: "They choose to pay the full amount, complete the transaction and receive confirmation of payment.",
    image: "invoices/step-4.png",
  },
];

const payments = [
  {
    desc: "Your customers visit your website and choose their items.",
    image: "onlinepayments/screen1.png",
  },
  {
    desc: "They log in to their PayPal accounts.",
    image: "onlinepayments/screen2.png",
  },
  {
    desc: "They confirm their purchases.",
    image: "onlinepayments/screen3.png",
  },
  {
    desc: "That’s all!!",
    image: "onlinepayments/screen4.png",
  },
]

const getProducts = () => {
  return section2;
}

export { getProducts, payments, howItWorks };