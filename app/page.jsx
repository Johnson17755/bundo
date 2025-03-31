import Card from "@/component/Card";
import FAQSection from "@/component/Faq";
import Jewellery from "@/component/Jewellery";
import Vendor from "@/component/Vendor";
import BestSeller from "@/component/BestSeller";

export default function Home() {
  return (
    <>
      <Card />
      <Jewellery />
      <Vendor />
      <BestSeller />
      <FAQSection />
    </>
  );
}
