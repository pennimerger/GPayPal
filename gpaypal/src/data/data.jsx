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

const getProducts = () => {
  return section2;
}

export { getProducts };