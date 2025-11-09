export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "CORPORACIÓN J&FISHER";

export const APP_LOGO = "https://placehold.co/128x128/1a1a2e/ff6b35?text=J%26F";

// Company Information
export const COMPANY_NAME = "CORPORACIÓN J&FISHER";
export const COMPANY_PHONE = "+51 993884502";
export const COMPANY_WHATSAPP = "https://wa.me/51993884502?text=Hola%20CORPORACI%C3%93N%20J%26FISHER%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios";
export const COMPANY_ADDRESS = "Sector 3, Grupo 27A, Mza H, Lote 13, Lima Villa Salvador";
export const COMPANY_HOURS = {
  weekday: "7:30 AM - 6:00 PM",
  saturday: "7:30 AM - 6:00 PM",
  sunday: "8:00 AM - 12:00 PM"
};

// Company Services
export const SERVICES = [
  {
    id: "rectificacion",
    title: "Rectificación de Discos y Tambores",
    description: "Servicio profesional de rectificación de discos y tambores de frenos con equipos de última generación.",
    icon: "Wrench"
  },
  {
    id: "reparacion",
    title: "Reparación de Frenos",
    description: "Reparación completa de sistemas de frenos, embragues y componentes relacionados.",
    icon: "Hammer"
  },
  {
    id: "venta",
    title: "Venta de Componentes",
    description: "Venta de pastillas, zapatas, líquidos de frenos y más. Trabajamos con las mejores marcas del mercado.",
    icon: "ShoppingCart"
  },
  {
    id: "master",
    title: "Reparación de Master y Bombas",
    description: "Servicio especializado en reparación y mantenimiento de cilindros maestros y bombas de freno.",
    icon: "Cog"
  }
];

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
