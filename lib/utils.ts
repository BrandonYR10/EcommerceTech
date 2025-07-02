export const categoryMenuList = [
  {
    id: 1,
    title: "Smart Phones",
    src: "/smart phone icon.png",
    href: "/shop/smart-phones"
  },
  {
    id: 2,
    title: "Tablets",
    src: "/tablet icon.png",
    href: "/shop/tablets"
  },
  {
    id: 3,
    title: "Mouses",
    src: "/mouse icon.png",
    href: "/shop/mouses"
  },
  {
    id: 4,
    title: "Cameras",
    src: "/camera icon.png",
    href: "/shop/cameras"
  },
  {
    id: 5,
    title: "Smart Watches",
    src: "/smart watch.png",
    href: "/shop/watches"
  },
  {
    id: 6,
    title: "Laptops",
    src: "/laptop icon.png",
    href: "/shop/laptops"
  },
  {
    id: 7,
    title: "PCs",
    src: "/pc icon.png",
    href: "/shop/computers"
  },
  {
    id: 8,
    title: "Printers",
    src: "/printers icon.png",
    href: "/shop/printers"
  },
  {
    id: 9,
    title: "Earbuds",
    src: "/ear buds icon.png",
    href: "/shop/earbuds"
  },
  {
    id: 10,
    title: "Head Phones",
    src: "/headphone icon.png",
    href: "/shop/headphones"
  },
];

export const incentives = [
  {
    name: "Envío Gratis",
    description:
      "Nuestro envío es completamente gratuito y eso es muy bueno para nuestros clientes.",
    imageSrc: "/shipping icon.png",
  },
  {
    name: "Soporte 24/7",
    description:
      "Nuestro soporte trabaja todo el día y la noche para responder cualquier pregunta que tengas.",
    imageSrc: "/support icon.png",
  },
  {
    name: "Carrito Rápido",
    description:
      "Tenemos una experiencia de compra súper rápida y la disfrutarás.",
    imageSrc: "/fast shopping icon.png",
  },
];

export const navigation = {
  sale: [
    { name: "Descuentos", href: "#" },
    { name: "Noticias", href: "#" },
    { name: "Descuentos por Registro", href: "#" },
  ],
  about: [
    { name: "Acerca de Nosotros", href: "#" },
    { name: "Trabaja con Nosotros", href: "#" },
    { name: "Perfil de la Empresa", href: "#" },
  ],
  buy: [
    { name: "Tarjeta de Lealtad", href: "#" },
    { name: "Términos de Uso", href: "#" },
    { name: "Política de Privacidad", href: "#" },
    { name: "Reclamos", href: "#" },
    { name: "Socios", href: "#" },
  ],
  help: [
    { name: "Contacto", href: "#" },
    { name: "Cómo Comprar", href: "#" },
    { name: "Preguntas Frecuentes", href: "#" },
  ],
};

export const isValidNameOrLastname = (input: string) => {
  // Simple name or lastname regex format check
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  // simple email address format check
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(input);
};

export const isValidCardNumber = (input: string) => {
  // Remove all non-digit characters
  const cleanedInput = input.replace(/[^0-9]/g, "");
  // test for credit card number between 13 and 19 characters
  const regex = /^\d{13,19}$/;
  return regex.test(cleanedInput);
}

export const isValidCreditCardExpirationDate = (input: string) => {
  // simple expiration date format check
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  // simple CVV or CVC format check
  const regex = /^[0-9]{3,4}$/;
  return regex.test(input);
};
