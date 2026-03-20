import OfferHero from "@/components/offer/OfferHero";
import OfferProblems from "@/components/offer/OfferProblems";
import OfferPackages from "@/components/offer/OfferPackages";
import OfferProcess from "@/components/offer/OfferProcess";
import OfferProjects from "@/components/offer/OfferProjects";
import OfferFAQ from "@/components/offer/OfferFAQ";
import { OfferCTA, OfferWhatsAppFloat } from "@/components/offer/OfferCTA";

const OfferPage = () => (
  <>
    <OfferHero />
    <OfferProblems />
    <OfferPackages />
    <OfferProcess />
    <OfferProjects />
    <OfferFAQ />
    <OfferCTA />
    <OfferWhatsAppFloat />
  </>
);

export default OfferPage;