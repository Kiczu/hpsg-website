export const ROUTES = {
    home: "/",
    about: "/about",
    blog: "/blog",
    cylinderTestStands: "/products/cylinder-test-stands",

    privacy: "/polityka-prywatnosci",
    terms: "/regulamin-serwisu",
    dataProcessing: "/przetwarzanie-danych",
} as const;

export const SECTIONS = {
    about: "about",
    products: "products",
    services: "services",
    realizations: "realizations",
    contact: "contact",
} as const;

export const hash = (id: keyof typeof SECTIONS) => `#${SECTIONS[id]}`;

export const homeSection = (
    id: keyof typeof SECTIONS,
    currentPathname?: string
) => (currentPathname === ROUTES.home ? hash(id) : `${ROUTES.home}${hash(id)}`);
