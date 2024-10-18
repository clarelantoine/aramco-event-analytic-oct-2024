import { Grid } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PDFCard from "../components/PDFCard";
import VideoBackground from "../components/VideoBackground";
import LinkCard from "../components/LinkCard";

export default function Collection() {
  const cards = [
    {
      title: "Sustainability Report",
      image: "sustainability_report_cover",
      description:
        "We present our approach to: integrating sustainability within our corporate strategy and operations.",
      qrcode: "sustainability-report-2",
    },
    {
      title: "Annual Report",
      image: "annual_report_cover",
      description:
        "This Annual Report covers financial and operational aspects of Aramco for the year 2023.",
      qrcode: "annual-report-2",
    },
    {
      title: "Become a Supplier",
      image: "become_supplier_cover",
      description:
        "All companies supplying goods and services for Saudi Aramco are required to be registered.",
      qrcode: "supplier-2",
    },
    {
      title: "Careers",
      image: "career_cover",
      description:
        "We give our people the opportunity and support to achieve more than they ever thought possible.",
      qrcode: "careers-2",
    },
  ];

  return (
    <>
      <VideoBackground />
      <Header text="Scan to know more" />

      <main className="cards__main__wrapper">
        <div className="cards">
          {cards.map((item) => (
            <div
              className="card"
              style={{
                backgroundImage: `url("/${item.image}.jpg")`,
              }}
            >
              <div className="card__wrapper">
                <div className="card__header__detail">
                  <p className="title">{item.title}</p>
                  <p className="description">{item.description}</p>
                </div>
                <img
                  className="qr_code_img"
                  src={`/qrcodes/${item.qrcode}.png`}
                  alt={item.title}
                />
              </div>
              <div className="bg__overlay"></div>
            </div>
          ))}
        </div>
      </main>
      {/* <div className="cards journals grid">
        {cards.map((card, index) => (
          <LinkCard
            key={index}
            name={card.name}
            url={card.pdfUrl}
            season={card.season}
          />
        ))}
      </div> */}

      <Footer text="Aramco" />
    </>
  );
}
